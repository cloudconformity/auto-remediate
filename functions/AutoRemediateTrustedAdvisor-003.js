
const { IAMClient, UpdateAccessKeyCommand } = require('@aws-sdk/client-iam')

/**
 * Lambda function disable  exposed Amazon IAM access keys
 *
*/

const handler = async (event, context, callback) => {
  console.log('Exposed IAM Access Keys - Received event:', JSON.stringify(event, null, 2))

  if (!event || !event.resource) {
    return handleError('Invalid event')
  }

  const params = {
    AccessKeyId: event.resource,
    Status: 'Inactive'
  }

  const IAM = new IAMClient()

  try {
    const result = await IAM.send(new UpdateAccessKeyCommand(params))
    console.log('Result', result)
    return 'Successfully processed event'
  } catch (err) {
    console.log('Error', err)
    return handleError(err.message ? err.message : 'update Access Key failed')
  }

  function handleError (message) {
    message = message || 'Failed to process request.'
    throw new Error(message)
  }
}

module.exports = { handler }
