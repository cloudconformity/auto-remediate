'use strict'

const AWS = require('aws-sdk')

/**
 * Lambda function to disable access to EC2 AMI that publicly shared with  other AWS accounts
 *
 */

module.exports.handler = (event, context, callback) => {
  console.log('Publicly Shared AMI  - Received event:', JSON.stringify(event, null, 2))

  if (!event || !event.resource || !event.region) {
    return handleError('Invalid event')
  }

  const params = {
    ImageId: event.resource,
    LaunchPermission: {

      Remove: [
        {
          Group: 'all'
        }

      ]
    }
  }

  const Ec2 = new AWS.EC2({ region: event.region })

  Ec2.modifyImageAttribute(params, function (err, result) {
    if (err) {
      console.log('Error', err)
      return handleError(err.message ? err.message : 'Failed to update ImageAttribute')
    }

    console.log('Result', result)
    return callback(null, 'Successfully processed event')
  })

  function handleError (message) {
    message = message || 'Failed to process request.'
    return callback(new Error(message))
  }
}
