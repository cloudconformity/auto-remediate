
const { RDSClient, ModifyDBInstanceCommand } = require('@aws-sdk/client-rds')

/**
 * Lambda function to automatically remediate publicly accessible RDS instance
 *
 */

const handler = async (event, context, callback) => {
  console.log('PubliclyAccessible - Received event:', JSON.stringify(event, null, 2))

  if (!event || !event.ccrn || !event.resource || !event.region) {
    return handleError('Invalid event')
  }

  const params = {
    DBInstanceIdentifier: event.resource,
    PubliclyAccessible: false
  }

  const RDS = new RDSClient({ region: event.region })

  try {
    const result = await RDS.send(new ModifyDBInstanceCommand(params))
    console.log('Result', result)
    return 'Successfully processed event'
  } catch (err) {
    console.log('Error', err)
    return handleError(err.message ? err.message : 'Failed to modify DB Instance')
  }

  function handleError (message) {
    message = message || 'Failed to process request.'
    throw new Error(message)
  }
}

module.exports = { handler }
