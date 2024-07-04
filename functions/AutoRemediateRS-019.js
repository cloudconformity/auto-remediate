
const { RedshiftClient, ModifyClusterCommand } = require('@aws-sdk/client-redshift')
const CONFIG = require('./config')['AutoRemediateRS-019']

/**
 * Lambda function to Enable Automated Snapshot Retention Period for AWS Redshift
 */

const handler = async (event, context, callback) => {
  console.log('AWS Redshift Automated Snapshot Retention Period - Received event:', JSON.stringify(event, null, 2))

  if (!event || !event.resource) {
    return handleError('Invalid event')
  }

  const params = {
    ClusterIdentifier: event.resource,
    AutomatedSnapshotRetentionPeriod: CONFIG['RetentionPeriod']

  }

  const Redshift = new RedshiftClient({ region: event.region })

  try {
    const result = await Redshift.send(new ModifyClusterCommand(params))
    console.log('Result', result)
    return 'Successfully processed event'
  } catch (err) {
    console.log('Error', err)
    return handleError(err.message ? err.message : 'Modify Cluster failed')
  }

  function handleError (message) {
    message = message || 'Failed to process request.'
    throw new Error(message)
  }
}

module.exports = { handler }
