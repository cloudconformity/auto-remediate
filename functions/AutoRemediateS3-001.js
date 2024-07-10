
const { S3Client, GetBucketAclCommand, PutBucketAclCommand } = require('@aws-sdk/client-s3')
const allUsersURI = 'http://acs.amazonaws.com/groups/global/AllUsers'
const readPermission = 'READ'

const CCRuleCode = 'S3-001'

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
const handler = async (event) => {
  console.log(
    'S3 BucketPublicReadAccess - Received event:',
    JSON.stringify(event, null, 2)
  )

  if (!event || !event.resource || event.ruleId !== 'S3-001') {
    throw new Error('Invalid event')
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
    const result = await s3.send(new PutBucketAclCommand(putAclParams))
    console.log('result>' + JSON.stringify(result))

    return 'Success'
  } catch (err) {
    console.log(err, err.stack)
    throw new Error(`failed to auto-remediate ${CCRuleCode}: ${err}`)
  }
}

module.exports = { handler }
