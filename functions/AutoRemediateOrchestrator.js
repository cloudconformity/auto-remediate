'use strict'

const CONFIG = require('./config')
const AWS = require('aws-sdk')

module.exports.handler = (event, context, callback) => {
  console.log('Received event: ', JSON.stringify(event, null, 2))
  console.log('Environment settings: ', JSON.stringify(process.env, null, 2))
  console.log('Config settings: ', JSON.stringify(CONFIG, null, 2))

  if (!event || !event.Records[0] || !event.Records[0].Sns || !event.Records[0].Sns.Message) {
    callback(new Error('No event specified'))
    return
  }

  let message = JSON.parse(event.Records[0].Sns.Message)
  let AutoRemediate = 'AutoRemediate' + message.ruleId

  if (!CONFIG[`${AutoRemediate}`]) {
    console.log('The %s is not supported. Exiting gracefully ...', AutoRemediate)
    callback(null)
    return
  }

  if (!CONFIG[`${AutoRemediate}`]['enabled']) {
    console.log('The %s is not enabled. Exiting gracefully ...', AutoRemediate)
    callback(null)
    return
  }

  let FunctionName =
    process.env['AWS_LAMBDA_FUNCTION_NAME']
      .substring(0, process.env['AWS_LAMBDA_FUNCTION_NAME'].lastIndexOf('-') + 1) +
    AutoRemediate

  console.log(`Invoking ${FunctionName} ...`)

  let Lambda = new AWS.Lambda({region: process.env['AWS_REGION'], apiVersion: '2015-03-31'})

  Lambda.invoke({ FunctionName: `${FunctionName}`, Payload: JSON.stringify(message, null, 2) }, function (error, data) {
    if (error) {
      console.log(`Error occurred while invoking ${FunctionName}`)
      console.log(error)
      callback(error)
    } else {
      callback(null, `Successfully invoked ${FunctionName} with result ${data}`)
    }
  })
}
