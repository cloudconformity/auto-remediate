'use strict'

const AWS = require('aws-sdk')

/**
 * Lambda function disable  exposed Amazon IAM access keys
 *
*/

module.exports.handler = (event, context, callback) => {
  console.log('Exposed IAM Access Keys - Received event:', JSON.stringify(event, null, 2))

  if (!event || !event.resource) {
    return handleError('Invalid event')
  }

  const params = {
    AccessKeyId: event.resource,
    Status: 'Inactive'
  }

  const IAM = new AWS.IAM()

  IAM.updateAccessKey(params, function (err, result) {
    if (err) {
      console.log('Error', err)
      return handleError(err.message ? err.message : 'update Access Key failed')
    }

    console.log('Result', result)
    return callback(null, 'Successfully processed event')
  })

  function handleError (message) {
    message = message || 'Failed to process request.'
    return callback(new Error(message))
  }
}
