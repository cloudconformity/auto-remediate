
const { RDSClient, ModifyDBSnapshotAttributeCommand } = require('@aws-sdk/client-rds')

/**
 * Lambda function to enforce AWS Relational Database Service (RDS) database snapshots not to be shared publicly
 */

const handler = async (event, context, callback) => {
  console.log('RDS Snapshot Publicly Accessible  - Received event:', JSON.stringify(event, null, 2))

  if (!event || !event.resource) {
    return handleError('Invalid event')
  }

  const params = {
    DBSnapshotIdentifier: event.resource,
    AttributeName: 'restore',
    ValuesToRemove: [
      'all'
    ]

  }

  const RDS = new RDSClient({ region: event.region })

  try {
    const result = await RDS.send(new ModifyDBSnapshotAttributeCommand(params))
    console.log('Result', result)
    return callback(null, 'Successfully processed event')
  } catch (err) {
    console.log('Error', err)
    return handleError(err.message ? err.message : 'Modify Db Snapshot failed')
  }

  function handleError (message) {
    message = message || 'Failed to process request.'
    return callback(new Error(message))
  }
}

module.exports = { handler }
