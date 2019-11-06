'use strict'
const CONFIG = require('./config')
const AWS = require('aws-sdk')
 /**
 * Lambda function to enable Amazon Simple Queue Service (SQS) queues' message encryption using Server-Side Encryption (SSE) 
 *
 */

 module.exports.handler = (event, context, callback) => {
  console.log(' Enable AWS SQS Server-Side Encryption for messages   - Received event:', JSON.stringify(event, null, 2))
   if (!event || !event.resource || !event.region) {
    return handleError('Invalid event')
  }
   if (!CONFIG['AutoRemediateSQS-004']['KmsKeyId']) {
    return handleError('Missing KmsKeyId value')
  }
   let params = {
    Attributes: {
        "KmsMasterKeyId": CONFIG['AutoRemediateSQS-004']['KmsKeyId'],
      },
    QueueUrl: event.resource
  }
   let Sqs = new AWS.SQS({region: event.region ,apiVersion: '2012-11-05'})
   Sqs.setQueueAttributes(params, function (err, result) {
    if (err) {
      console.log('Error', err)
      return handleError(err.message ? err.message : 'Failed to setQueueAttributes ,KmsMasterKeyId ')
    }
     console.log('Result', result)
    return callback(null, 'Successfully processed event')
  })
   function handleError (message) {
    message = message || 'Failed to process request.'
    return callback(new Error(message))
  }
}
