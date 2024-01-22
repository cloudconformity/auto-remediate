'use strict'
const CONFIG = require('./config')
const { KinesisClient, StartStreamEncryptionCommand } = require('@aws-sdk/client-kinesis')

/**
 * Lambda function to enable AWS Kinesis streams encryption using Server-Side Encryption (SSE)
 *
 */

const handler = async (event, context, callback) => {
  console.log(' Enable Kinesis Server-Side Encryption   - Received event:', JSON.stringify(event, null, 2))

  if (!event || !event.resource || !event.region) {
    return handleError('Invalid event')
  }

  if (!CONFIG['AutoRemediateKinesis-001']['KmsKeyId']) {
    return handleError('Missing KmsKeyId value')
  }

  const params = {
    EncryptionType: 'KMS',
    KeyId: CONFIG['AutoRemediateKinesis-001']['KmsKeyId'],
    StreamName: event.resource
  }

  const Kinesis = new KinesisClient({ region: event.region, apiVersion: '2012-11-05' })

  try {
    const result = await Kinesis.send(new StartStreamEncryptionCommand(params))
    console.log('Result', result)
    return callback(null, 'Successfully processed event')
  } catch (err) {
    console.log('Error', err)
    return handleError(err.message ? err.message : 'Failed to enable Kinesis Server Side Encryption')
  }

  function handleError (message) {
    message = message || 'Failed to process request.'
    return callback(new Error(message))
  }
}

module.exports = handler
