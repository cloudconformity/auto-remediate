'use strict'

const AWS = require('aws-sdk')

/**
 * Lambda function to Enabled KMS Key Rotation 
 */

module.exports.handler = (event, context, callback) => {
  console.log('Enable AWS KMS Key Rotation - Received event:', JSON.stringify(event, null, 2))

  if (!event || !event.resource) {
    return handleError('Invalid event')
  }

  let params = {
    KeyId : event.resource,
  }

  let KMS = new AWS.KMS({region: event.region})

  KMS.enableKeyRotation(params, function (err, result) {
    if (err) {
      console.log('Error', err)
      return handleError(err.message ? err.message : 'Enable Key Rotation failed')
    }

    console.log('Result', result)
    return callback(null, 'Successfully processed event')
  })

  function handleError (message) {
    message = message || 'Failed to process request.'
    return callback(new Error(message))
  }
}
