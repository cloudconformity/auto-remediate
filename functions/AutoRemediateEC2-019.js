'use strict'

const { EC2Client, ModifyImageAttributeCommand } = require('@aws-sdk/client-ec2')

/**
 * Lambda function to disable access to EC2 AMI that publicly shared with  other AWS accounts
 *
 */

const handler = async (event, context, callback) => {
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

  const Ec2 = new EC2Client({ region: event.region })

  try {
    const result = await Ec2.send(new ModifyImageAttributeCommand(params))
    console.log('Result', result)
    return callback(null, 'Successfully processed event')
  } catch (err) {
    console.log('Error', err)
    return handleError(err.message ? err.message : 'Failed to update ImageAttribute')
  }

  function handleError (message) {
    message = message || 'Failed to process request.'
    return callback(new Error(message))
  }
}

module.exports = { handler }
