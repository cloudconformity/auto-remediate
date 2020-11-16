'use strict'

const AWS = require('aws-sdk')

/**
 * Lambda function to make Amazon GuardDuty service is currently enabled in order to protect your AWS environment and infrastructure
 *
 */

module.exports.handler = (event, context, callback) => {
  console.log('GuardDuty In Use - Received event:', JSON.stringify(event, null, 2))

  if (!event || !event.region) {
    return handleError('Invalid event')
  }

  const params = {
    Enable: true
  }

  const GuardDuty = new AWS.GuardDuty({ region: event.region })

  GuardDuty.createDetector(params, function (err, result) {
    if (err) {
      console.log('Error', err)
      return handleError(err.message ? err.message : 'Failed to enable GuardDuty')
    }

    console.log('Result', result)
    return callback(null, 'Successfully processed event')
  })

  function handleError (message) {
    message = message || 'Failed to process request.'
    return callback(new Error(message))
  }
}
