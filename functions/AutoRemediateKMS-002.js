'use strict'

const { KMSClient, EnableKeyRotationCommand } = require('@aws-sdk/client-kms')

/**
 * Lambda function to Enabled KMS Key Rotation
 */

const handler = async (event, context, callback) => {
  console.log('Enable AWS KMS Key Rotation - Received event:', JSON.stringify(event, null, 2))

  if (!event || !event.resource) {
    return handleError('Invalid event')
  }

  const params = {
    KeyId: event.resource
  }

  const KMS = new KMSClient({ region: event.region })

  try {
    const result = await KMS.send(new EnableKeyRotationCommand(params))
    console.log('Result', result)
    return callback(null, 'Successfully processed event')
  } catch (err) {
    console.log('Error', err)
    return handleError(err.message ? err.message : 'Enable Key Rotation failed')
  }

  function handleError (message) {
    message = message || 'Failed to process request.'
    return callback(new Error(message))
  }
}

module.exports = { handler }
