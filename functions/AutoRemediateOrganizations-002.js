
const { OrganizationsClient, EnableAllFeaturesCommand } = require('@aws-sdk/client-organizations')

/**
 * Lambda function to enable  All Features for Organizations
 */

const handler = async (event, context, callback) => {
  console.log('Enable All Features - Received event:', JSON.stringify(event, null, 2))

  if (!event || !event.region) {
    return handleError('Invalid event')
  }

  const params = {

  }

  const Organizations = new OrganizationsClient({ region: event.region })

  try {
    const result = await Organizations.send(new EnableAllFeaturesCommand(params))
    console.log('Result', result)
    return callback(null, 'Successfully processed event')
  } catch (err) {
    console.log('Error', err)
    return handleError(err.message ? err.message : 'Enable All Features failed')
  }

  function handleError (message) {
    message = message || 'Failed to process request.'
    return callback(new Error(message))
  }
}

module.exports = { handler }
