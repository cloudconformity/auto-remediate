'use strict'

const AWS = require('aws-sdk')

/**
 * Lambda function to enable  All Features for Organizations
 */

module.exports.handler = (event, context, callback) => {
  console.log('Enable All Features - Received event:', JSON.stringify(event, null, 2))

  if (!event || !event.region) {
    return handleError('Invalid event')
  }

  let params = {

  }

  let Organizations = new AWS.Organizations({region: event.region})

  Organizations.enableAllFeatures(params, function (err, result) {
    if (err) {
      console.log('Error', err)
      return handleError(err.message ? err.message : 'Enable All Features failed')
    }

    console.log('Result', result)
    return callback(null, 'Successfully processed event')
  })

  function handleError (message) {
    message = message || 'Failed to process request.'
    return callback(new Error(message))
  }
}




