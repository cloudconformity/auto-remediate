
const { GuardDutyClient, CreateDetectorCommand } = require('@aws-sdk/client-guardduty')

/**
 * Lambda function to make Amazon GuardDuty service is currently enabled in order to protect your AWS environment and infrastructure
 *
 */

const handler = async (event) => {
  console.log('GuardDuty In Use - Received event:', JSON.stringify(event, null, 2))

  if (!event || !event.region) {
    return handleError('Invalid event')
  }

  const params = {
    Enable: true
  }

  const GuardDuty = new GuardDutyClient({ region: event.region })

  try {
    const result = await GuardDuty.send(new CreateDetectorCommand(params))
    console.log('Result', result)
    return 'Successfully processed event'
  } catch (err) {
    console.log('Error', err)
    return handleError(err.message ? err.message : 'Failed to enable GuardDuty')
  }

  function handleError (message) {
    message = message || 'Failed to process request.'
    throw new Error(message)
  }
}

module.exports = { handler }
