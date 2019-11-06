'use strict'

const AWS = require('aws-sdk')

/**
 * Lambda function to enable versioning on an s3 bucket
 */

module.exports.handler = (event, context, callback) => {
  console.log('S3BucketVersioning - Received event:', JSON.stringify(event, null, 2))

  if (!event || !event.resource) {
    return handleError('Invalid event')
  }

  let params = {
    Bucket: event.resource,
    VersioningConfiguration: {
      Status: 'Enabled'
    }
  }

  let S3 = new AWS.S3()

  S3.putBucketVersioning(params, function (err, result) {
    if (err) {
      console.log('Error', err)
      return handleError(err.message ? err.message : 'enabling bucket versioning failed')
    }

    console.log('Result', result)
    return callback(null, 'Successfully processed event')
  })

  function handleError (message) {
    message = message || 'Failed to process request.'
    return callback(new Error(message))
  }
}
