'use strict'

const AWS = require('aws-sdk')

/**
 * Lambda function to automatically remediate publicly accessible RDS instance
 *
 */

module.exports.handler = (event, context, callback) => {
  console.log('PubliclyAccessible - Received event:', JSON.stringify(event, null, 2))

  if (!event || !event.ccrn || !event.resource || !event.region) {
    return handleError('Invalid event')
  }

  let params = {
    DBInstanceIdentifier: event.resource,
    PubliclyAccessible: false
  }

  let RDS = new AWS.RDS({region: event.region})

  RDS.modifyDBInstance(params, function (err, result) {
    if (err) {
      console.log('Error', err)
      return handleError(err.message ? err.message : 'modify db instance failed')
    }

    console.log('Result', result)
    return callback(null, 'Successfully processed event')
  })

  function handleError (message) {
    message = message || 'Failed to process request.'
    return callback(new Error(message))
  }
}
