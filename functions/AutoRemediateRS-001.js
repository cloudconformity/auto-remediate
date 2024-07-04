
const { RedshiftClient, ModifyClusterCommand } = require('@aws-sdk/client-redshift')

/**
 * Lambda function to make Redshift Cluster private to minimise security risks
 *
 */

const handler = async (event, context, callback) => {
  console.log('ClusterPubliclyAccessible - Received event:', JSON.stringify(event, null, 2))

  if (!event || !event.ccrn || !event.resource || !event.region) {
    return handleError('Invalid event')
  }

  const params = {
    ClusterIdentifier: event.resource,
    PubliclyAccessible: false
  }

  const Redshift = new RedshiftClient({ region: event.region })

  try {
    const result = await Redshift.send(new ModifyClusterCommand(params))
    console.log('Result', result)
    return 'Successfully processed event'
  } catch (err) {
    console.log('Error', err)
    return handleError(err.message ? err.message : 'Failed to make Redshift cluster private')
  }

  function handleError (message) {
    message = message || 'Failed to process request.'
    throw new Error(message)
  }
}

module.exports = { handler }
