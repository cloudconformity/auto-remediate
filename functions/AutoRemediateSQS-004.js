const { SQSClient, SetQueueAttributesCommand } = require('@aws-sdk/client-sqs')
const CONFIG = require('./config')

/**
 * Lambda function to enable Amazon Simple Queue Service (SQS) queues' message encryption using Server-Side Encryption (SSE)
 *
 */

const handler = async (event) => {
  console.log(' Enable AWS SQS Server-Side Encryption for messages   - Received event:', JSON.stringify(event, null, 2))
  if (!event || !event.resource || !event.region) {
    return handleError('Invalid event')
  }
  if (!CONFIG['AutoRemediateSQS-004']['KmsKeyId']) {
    return handleError('Missing KmsKeyId value')
  }
  const params = {
    Attributes: {
      KmsMasterKeyId: CONFIG['AutoRemediateSQS-004']['KmsKeyId']
    },
    QueueUrl: event.resource
  }
  const Sqs = new SQSClient({ region: event.region, apiVersion: '2012-11-05' })
  try {
    const result = await Sqs.send(new SetQueueAttributesCommand(params))
    console.log('Result', result)
    return 'Successfully processed event'
  } catch (err) {
    console.log('Error', err)
    return handleError(err.message ? err.message : 'Failed to setQueueAttributes ,KmsMasterKeyId ')
  }

  function handleError (message) {
    message = message || 'Failed to process request.'
    throw new Error(message)
  }
}

module.exports = { handler }
