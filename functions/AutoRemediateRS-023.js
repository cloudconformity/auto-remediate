
const { RedshiftClient, ModifyClusterParameterGroupCommand } = require('@aws-sdk/client-redshift')

/**
 * Lambda function to enable Redshift User Activity Logging
 */

const handler = async (event, context, callback) => {
  console.log('Enable Redshift User Activity Logging  - Received event:', JSON.stringify(event, null, 2))

  if (!event || !event.resource) {
    return handleError('Invalid event')
  }

  const params = {
    ParameterGroupName: event.resource,
    Parameters: [{
      ParameterName: 'enable_user_activity_logging',
      ParameterValue: 'true'
    }
    ]
  }

  const Redshift = new RedshiftClient({ region: event.region })

  try {
    const result = await Redshift.send(new ModifyClusterParameterGroupCommand(params))
    console.log('Result', result)
    return 'Successfully processed event'
  } catch (err) {
    console.log('Error', err)
    return handleError(err.message ? err.message : 'modify cluster parameter group failed')
  }

  function handleError (message) {
    message = message || 'Failed to process request.'
    throw new Error(message)
  }
}

module.exports = { handler }
