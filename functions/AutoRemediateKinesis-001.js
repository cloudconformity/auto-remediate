'use strict'
const CONFIG = require('./config')
const AWS = require('aws-sdk')

/**
 * Lambda function to enable AWS Kinesis streams encryption using Server-Side Encryption (SSE) 
 *
 */

module.exports.handler = (event, context, callback) => {
  console.log(' Enable Kinesis Server-Side Encryption   - Received event:', JSON.stringify(event, null, 2))

  if (!event || !event.resource || !event.region) {
    return handleError('Invalid event')
  }

  if (!CONFIG['AutoRemediateKinesis-001']['KmsKeyId']) {
    return handleError('Missing KmsKeyId value')
  }

  let params = {
    EncryptionType: "KMS",
    KeyId: CONFIG['AutoRemediateKinesis-001']['KmsKeyId'], 
    StreamName: event.resource
  }

  let Kinesis = new AWS.Kinesis();

  Kinesis.startStreamEncryption(params, function (err, result) {
    if (err) {
      console.log('Error', err)
      return handleError(err.message ? err.message : 'Failed to enable Kinesis Server Side Encryption')
    }

    console.log('Result', result)
    return callback(null, 'Successfully processed event')
  })

  function handleError (message) {
    message = message || 'Failed to process request.'
    return callback(new Error(message))
  }
}
