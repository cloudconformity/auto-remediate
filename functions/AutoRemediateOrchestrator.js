'use strict'
const CONFIG = require('./config')
const { LambdaClient, InvokeCommand } = require('@aws-sdk/client-lambda')

const handler = async (event, context, callback) => {
  console.log('Received event: ', JSON.stringify(event, null, 2))
  console.log('Config settings: ', JSON.stringify(CONFIG, null, 2))
  if (!event || !event.Records[0] || !event.Records[0].body) {
    callback(new Error('No event specified'))
    return
  }
  const message = JSON.parse(event.Records[0].body)
  const AutoRemediate = 'AutoRemediate' + message.ruleId
  if (!CONFIG[`${AutoRemediate}`]) {
    console.log(
      'The %s is not supported. Exiting gracefully ...',
      AutoRemediate
    )
    callback(null)
    return
  }
  if (!CONFIG[`${AutoRemediate}`]['enabled']) {
    console.log('The %s is not enabled. Exiting gracefully ...', AutoRemediate)
    callback(null)
    return
  }
  const FunctionName =
    process.env['AWS_LAMBDA_FUNCTION_NAME'].substring(
      0,
      process.env['AWS_LAMBDA_FUNCTION_NAME'].lastIndexOf('-') + 1
    ) + AutoRemediate
  console.log(`Invoking ${FunctionName} ...`)
  const Lambda = new LambdaClient({
    region: process.env['AWS_REGION'],
    apiVersion: '2015-03-31'
  })

  try {
    const result = await Lambda.send(new InvokeCommand({
      FunctionName,
      Payload: JSON.stringify(message, null, 2) }
    ))

    return callback(
      null,
      `Successfully invoked ${FunctionName} with result ${result}`
    )
  } catch (error) {
    console.log(`Error occurred while invoking ${FunctionName}`)
    console.log(error)
    callback(error)
  }
}

module.exports = handler
