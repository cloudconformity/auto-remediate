'use strict'

const CONFIG = require('./config')
const AWS = require('aws-sdk')
let delayedExecution;
let delay;
let queueURL;
let type;

module.exports.handler = (event, context, callback) => {
  console.log('Received event: ', JSON.stringify(event, null, 2))
  //console.log('Config settings: ', JSON.stringify(CONFIG, null, 2))

  if ((!event || !event.Records[0] || !event.Records[0].Sns || !event.Records[0].Sns.Message) && !event.Records[0].body) {
    callback(new Error('No event specified'))
    return
  }
  let message;
  if(event.Records[0].body){
    let sqsBody = JSON.parse(event.Records[0].body);
    message = JSON.parse(sqsBody.Records[0].Sns.Message)
    type=sqsBody.Records[0].Sns.Type
  }
  else{
    message = JSON.parse(event.Records[0].Sns.Message)
    type = event.Records[0].Sns.Type
  }
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

  if (!CONFIG[`${AutoRemediate}`]['delayedExecution']) {
    console.log('Delayed execution disabled', AutoRemediate)
    delayedExecution=false
  }
  else{
    delayedExecution=true;
    console.log('Delayed execution enabled', AutoRemediate)
    delay=CONFIG[`${AutoRemediate}`]['delay']
    queueURL='https://sqs.us-west-2.amazonaws.com/747218156759/CloudConformityAutoRemediate'

  }

  //Event is configured as Delayed notification and this is the first time we're seeing the SNS message... 
  if (delayedExecution && type!="DelayedNotification") {
    console.log("Delayed execution, sending event to SQS with Delay...")
    event.Records[0].Sns.Type="DelayedNotification" //Change Type of message and put it on SQS with delay...
    var sqs = new AWS.SQS();
    var params = {
      MessageBody: JSON.stringify(event, null, 2),
      QueueUrl: queueURL, 
      DelaySeconds: delay,
    }
    sqs.sendMessage(params, function(err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else     console.log(data);           // successful response
    });
  }
  else{

    //Compose the function name based on its own name...
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

}
