'use strict'

const { S3Client, GetBucketAclCommand } = require('@aws-sdk/client-s3')
const allUsersURI = 'http://acs.amazonaws.com/groups/global/AllUsers'
const readPermission = 'READ'

const aclNew = {
  Owner: '',
  Grants: []
}

function remediateAllUsers (thisGrant, newAcl) {
  if (thisGrant.Permission !== readPermission) { // any besides READ are passed through
    newAcl['Grants'].push(thisGrant)
  }

  return newAcl
}

// look for and remove S3BucketPublicReadAccess
const handler = async (event, context, callback) => {
  console.log(
    'S3 BucketPublicReadAccess - Received event:',
    JSON.stringify(event, null, 2)
  )

  if (!event || !event.resource || event.ruleId !== 'S3-001') {
    return callback(new Error('Invalid event'))
  }

  var s3 = new S3Client({ apiVersion: '2006-03-01' })

  var getAclParams = {
    Bucket: event.resource
  }

  try {
    const aclWas = await s3.send(new GetBucketAclCommand(getAclParams))

    aclNew.Owner = aclWas.Owner // transfer the existing bucket owner
    aclWas.Grants.forEach((grant, _) => {
      if (grant.Grantee.URI === allUsersURI) {
        remediateAllUsers(grant, aclNew)
      } else {
        const found = aclNew['Grants'].some(
          ({ Permission, Grantee: { ID, DisplayName, Type } }) => {
            return (
              grant.Permission === Permission &&
              grant.Grantee.DisplayName === DisplayName &&
              grant.Grantee.ID === ID &&
              grant.Grantee.Type === Type
            )
          }
        )
        if (!found) {
          aclNew['Grants'].push(grant)
        }
      }
    })

    var putAclParams = {
      Bucket: event.resource,
      AccessControlPolicy: aclNew
    }
    const putAclPromise = s3.putBucketAcl(putAclParams).promise()

    putAclPromise.then(result => {
      console.log('result>' + JSON.stringify(result))
      callback(null, 'Success')
    })
  } catch (err) {
    console.log(err, err.stack)
    callback(err, 'failed to auto-remediate s3-001')
  }
}

module.exports = handler
