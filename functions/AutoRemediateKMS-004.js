'use strict'

const AWS = require('aws-sdk')

/**
 * Lambda function to make AWS KMS Customer Master Keys (CMK) that has been scheduled for deletion canceled
 */

module.exports.handler = (event, context, callback) => {
  console.log('Recover KMS Customer Master Keys  - Received event:', JSON.stringify(event, null, 2))

  if (!event || !event.resource) {
    return handleError('Invalid event')
  }

  const params = {
    KeyId: event.resource
  }

  const KMS = new AWS.KMS({ region: event.region })

  KMS.cancelKeyDeletion(params, function (err, result) {
    if (err) {
      console.log('Error', err)
      return handleError(err.message ? err.message : 'Cancel Key Deletion failed')
    }

    console.log('Result', result)
    return callback(null, 'Successfully processed event')
  })

  function handleError (message) {
    message = message || 'Failed to process request.'
    return callback(new Error(message))
  }
}
