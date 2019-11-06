'use strict'

const AWS = require('aws-sdk')

/**
 * Lambda function to enable CloudFormation Stack Termination Protection
 *
 */

module.exports.handler = (event, context, callback) => {
  console.log('StackTerminationProtection - Received event:', JSON.stringify(event, null, 2))

  if (!event || !event.ccrn || !event.resource || !event.region) {
    return handleError('Invalid event')
  }

  let params = {
    EnableTerminationProtection: true,
    StackName: event.resource
  }

  let CloudFormation = new AWS.CloudFormation({region: event.region})

  CloudFormation.updateTerminationProtection(params, function (err, result) {
    if (err) {
      console.log('Error', err)
      return handleError(err.message ? err.message : 'Failed to enable CloudFormation Stack Termination Protection')
    }

    console.log('Result', result)
    return callback(null, 'Successfully processed event')
  })

  function handleError (message) {
    message = message || 'Failed to process request.'
    return callback(new Error(message))
  }
}
