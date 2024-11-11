
const { KMSClient, CancelKeyDeletionCommand } = require('@aws-sdk/client-kms')

/**
 * Lambda function to make AWS KMS Customer Master Keys (CMK) that has been scheduled for deletion canceled
 */

const handler = async (event) => {
  console.log('Recover KMS Customer Master Keys  - Received event:', JSON.stringify(event, null, 2))

  if (!event || !event.resource) {
    return handleError('Invalid event')
  }

  const params = {
    KeyId: event.resource
  }

  const KMS = new KMSClient({ region: event.region })

  try {
    const result = await KMS.send(new CancelKeyDeletionCommand(params))
    console.log('Result', result)
    return 'Successfully processed event'
  } catch (err) {
    console.log('Error', err)
    return handleError(err.message ? err.message : 'Cancel Key Deletion failed')
  }

  function handleError (message) {
    message = message || 'Failed to process request.'
    throw new Error(message)
  }
}

module.exports = { handler }
