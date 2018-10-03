'use strict'
const AWS = require('aws-sdk')
/**
* Lambda function to disable access to any AWS CloudTrail logging buckets that are publicly accessible
*
*/
module.exports.handler = (event, context, callback) => {
  console.log(' Publicly Shared AWS CloudTrail Logging Buckets  - Received event:', JSON.stringify(event, null, 2))
  if (!event || !event.resource || !event.region) {
    return handleError('Invalid event')
  }

  let params = {
    Bucket: event.resource,
    ACL: "private"
  }

  let S3 = new AWS.S3({region: event.region})

  S3.putBucketAcl(params, function (err, result) {
    if (err) {
      console.log('Error', err)
      return handleError(err.message ? err.message : 'Failed to putBucketAcl')
    }
    console.log('Result', result)
    return callback(null, 'Successfully processed event')
  })
  function handleError (message) {
    message = message || 'Failed to process request.'
    return callback(new Error(message))
  }
}
