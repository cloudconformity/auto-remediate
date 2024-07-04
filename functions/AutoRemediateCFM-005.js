
const { CloudFormationClient, UpdateTerminationProtectionCommand } = require('@aws-sdk/client-cloudformation')

/**
 * Lambda function to enable CloudFormation Stack Termination Protection
 *
 */

const handler = async (event, context, callback) => {
  console.log('StackTerminationProtection - Received event:', JSON.stringify(event, null, 2))

  if (!event || !event.ccrn || !event.resource || !event.region) {
    return handleError('Invalid event')
  }

  const params = {
    EnableTerminationProtection: true,
    StackName: event.resource
  }

  const CloudFormation = new CloudFormationClient({ region: event.region })

  try {
    const result = await CloudFormation.send(new UpdateTerminationProtectionCommand(params))
    console.log('Result', result)
    return 'Successfully processed event'
  } catch (err) {
    console.log('Error', err)
    return handleError(err.message ? err.message : 'Failed to enable CloudFormation Stack Termination Protection')
  }

  function handleError (message) {
    message = message || 'Failed to process request.'
    throw new Error(message)
  }
}

module.exports = { handler }
