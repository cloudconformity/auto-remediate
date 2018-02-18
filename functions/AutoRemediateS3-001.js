'use strict'

const AWS = require('aws-sdk')
const allUsersURI = 'http://acs.amazonaws.com/groups/global/AllUsers'
const readPermission = 'READ'

function remediateAllUsers (thisGrant, newAcl) {
  if (thisGrant.Permission !== readPermission) { // any besides READ are passed through
    newAcl['Grants'].push(thisGrant)
  }

  return newAcl
}

// look for and remove S3BucketPublicReadAccess
module.exports.handler = (event, context, callback) => {
  console.log('S3 BucketPublicReadAccess - Received event:', JSON.stringify(event, null, 2))

  if (!event || !event.resource || event.ruleId !== 'S3-001') {
    return callback(new Error('Invalid event'))
  }

  var s3 = new AWS.S3({ apiVersion: '2006-03-01' })
  var aclNew = JSON.parse("{'Owner':'', 'Grants':[]}") // skeleton for new permission grants

  var getAclParams = {
    Bucket: event.resource
  }
  let getAclPromise = s3.getBucketAcl(getAclParams).promise()

  getAclPromise
    .then((aclWas) => {
      aclNew.Owner = aclWas.Owner // transfer the existing bucket owner

      // now, act on any grants to all users - and just copy over any other grants
      aclWas.Grants.forEach(function (grant, i) {
        if (grant.Grantee.URI === allUsersURI) {
          remediateAllUsers(grant, aclNew)
        } else {
          aclNew['Grants'].push(grant)
        }
      })
    }).then(() => {
      var putAclParams = {
        Bucket: event.resource,
        AccessControlPolicy: aclNew
      }
      let putAclPromise = s3.putBucketAcl(putAclParams).promise()

      putAclPromise
        .then((result) => {
          console.log('result>' + JSON.stringify(result))
        })
    }).catch((err) => {
      console.log(err, err.stack)
      callback(err, 'failed to auto-remediate s3-001')
    })

  callback(null, 'Success')
}
