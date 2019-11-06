'use strict'

const CONFIG = require('./config')
const AWS = require('aws-sdk')

AWS.config.update({
  maxRetries: 10
})

AWS.events.on('retry', function (resp) {
  // retry all requests with a 5 sec delay (if they are retry-able)
  if (resp.error) {
    resp.error.retryDelay = 5000
  }
})

// Using the native promise implementation of the JavaScript engine
AWS.config.setPromisesDependency(null)

/**
 * Email Lambda resource configured to run with Admin Privilege.
 */
module.exports.handler = (event, context, callback) => {
    console.log('Lambda Function Admin Privilege - Received event:', JSON.stringify(event, null, 2))

    if (!event || !event.region || event.ruleId !== 'Lambda-005') {
        return handleError('Invalid event')
    }

    if(!CONFIG['AutoRemediateLambda-005']['topicName']) {
        return handleError('Email SNS Topic Name not found.')
    }
    
    if(event.status == 'SUCCESS') {
        //Already successful nothing to do. 
        return callback(null, event['message'])
    }

    var accountId = context['invokedFunctionArn'].split(":")[4]
    var sns = new AWS.SNS({apiVersion: '2010-03-31'})
    
    //arn:aws:sns:ca-central-1:936214665790:CloudConformity
    var snsTopicArn = ['arn:aws:sns', event['region'], accountId, CONFIG['AutoRemediateLambda-005']['topicName']].join(":")
    var data = {}
    data['resource'] = event['resource']
    data['message'] = event['message']
    data['ruleId'] = event['rule']
    data['ruleTitle'] = event['ruleTitle']
    data['service'] = event['service']
    data['region'] = event['region']
    data['status'] = event['status']

    var params = {
        Message: JSON.stringify(data, null, 2),
        TopicArn: snsTopicArn
    }
    var publishTextPromise = sns.publish(params).promise()
    
    publishTextPromise.then(
        function(data) {
          console.log("Message "+params.Message + " send sent to the topic " + params.TopicArn);
          console.log("MessageID is " + data.MessageId);
        }).catch(
          function(err) {
          console.error(err, err.stack);
          handleError(err)
        });

    function handleError (message) {
        message = message || 'Failed to process request.'
        return callback(new Error(message))
    }
}