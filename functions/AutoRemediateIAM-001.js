'use strict'

const AWS = require('aws-sdk')

/**
 * Lambda function to deactivate access keys older than 30 days
 */

module.exports.handler = (event, context, callback) => {
  console.log('AccessKeysRotated30Days - Received event:', JSON.stringify(event, null, 2))
  if (!event || !event.resource || !event.extradata) {
    return handleError('Invalid event')
  }

  const userName = (event.extradata || []).find(data => data.name === 'UserName')

  if (!userName || !userName.value) {
    return handleError('Cannot find IAM Username')
  }

  const params = {
    AccessKeyId: event.resource,
    Status: 'Inactive',
    UserName: userName.value
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
