const { RDSClient, ModifyDBInstanceCommand } = require('@aws-sdk/client-rds')
/**
* Lambda function to enable Update Minor Version flag for AWS RDS
*
*/
const handler = async (event, context, callback) => {
  console.log(' Update Minor Version for RDS - Received event:', JSON.stringify(event, null, 2))
  if (!event || !event.resource || !event.region) {
    return handleError('Invalid event')
  }

  const params = {
    DBInstanceIdentifier: event.resource,
    AutoMinorVersionUpgrade: true,
    ApplyImmediately: true

  }

  const RDS = new RDSClient({ region: event.region })

  try {
    const result = await RDS.send(new ModifyDBInstanceCommand(params))
    console.log('Result', result)
    return callback(null, 'Successfully processed event')
  } catch (err) {
    console.log('Error', err)
    return handleError(err.message ? err.message : 'Failed to modify DB Instance')
  }

  function handleError (message) {
    message = message || 'Failed to process request.'
    return callback(new Error(message))
  }
}

module.exports = { handler }
