'use strict'

const AWS = require('aws-sdk')
const CONFIG = require('./config')['AutoRemediateCT-002']

/**
 * Lambda function to enable versioning on an s3 bucket
 */

module.exports.handler = (event, context, callback) => {
  console.log('CloudTrail bucket access logging not enabled - - Received event:', JSON.stringify(event, null, 2))

  if (!event || !event.resource) {
    return handleError('Invalid event')
  }

  let S3 = new AWS.S3()

  let acl_params = {
    Bucket: event.resource, /* required */
    GrantReadACP: 'URI="http://acs.amazonaws.com/groups/s3/LogDelivery"',
    GrantWrite: 'URI="http://acs.amazonaws.com/groups/s3/LogDelivery"'
  }
  
  let logging_params = {
    Bucket: event.resource, /* required */
    BucketLoggingStatus: { /* required */
      LoggingEnabled: {
        TargetBucket: event.resource, /* required */
        TargetPrefix: CONFIG['TargetPrefix'], /* required */
        TargetGrants: [
          {
            Grantee: {
              Type: "Group",
              URI: "http://acs.amazonaws.com/groups/s3/LogDelivery"
            },
            Permission: 'WRITE'
          },
          {
            Grantee: {
              Type: "Group",
              URI: "http://acs.amazonaws.com/groups/s3/LogDelivery"
            },
            Permission: 'READ_ACP'
          }
        ]
      }
    }
  }

   S3.putBucketAcl(acl_params, function (err, result) {
    if (err) {
      console.log('Error', err)
      return handleError(err.message ? err.message : 'enabling CloudTrail bucket access logging failed')
    }

    console.log('Result', result)
  })

  function handleError (message) {
    message = message || 'Failed to process request.'
    return callback(new Error(message))
  }
  
  S3.putBucketLogging(logging_params, function (err, result) {
    if (err) {
      console.log('Error', err)
      return handleError(err.message ? err.message : 'enabling CloudTrail bucket access logging failed')
    }

    console.log('Result', result)
    return callback(null, 'Successfully processed event')
  })

  function handleError (message) {
    message = message || 'Failed to process request.'
    return callback(new Error(message))
  }
}

