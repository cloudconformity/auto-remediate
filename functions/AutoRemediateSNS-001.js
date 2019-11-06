'use strict'
const AWS = require('aws-sdk')

module.exports.handler = (event, context, callback) => {
    console.log("Running SNS-001 " + JSON.stringify(event, null, 2))

    if (!event || !event.region || event.ruleId !== 'SNS-001' || !event.resource) {
        return handleError('Invalid event')
    }

    if(event.status == 'SUCCESS') {
        return callback(null, 'Status successful nothing to be done')
    }

    var accountId = context['invokedFunctionArn'].split(":")[4]
    var snsTopicArn = ['arn:aws:sns', event['region'], accountId, event['resource']].join(":")
    var sns = new AWS.SNS({apiVersion: '2010-03-31'})
    var getTopicAttributesparams = {
        TopicArn:  snsTopicArn/* required */
    };

    sns.getTopicAttributes(getTopicAttributesparams, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else {
            console.log(data['Attributes'])
            var policy = JSON.parse(data['Attributes']['Policy'])
            let statements = policy['Statement']
            for(var i=0;i<statements.length;i++){
                let eachStatement = statements[i]
                var sid = eachStatement['Sid']
                var principal = eachStatement['Principal']['AWS']
                var condition = eachStatement['Condition']
                
                if(principal == '*' && condition) {
                    console.log('Pranays: Rule is ok.' + sid)
                } else{
                    console.log('Pranays: Rule not ok ' + sid)
                    var removePermissionParams = {
                        Label: sid,
                        TopicArn: snsTopicArn
                      };
                    sns.removePermission(removePermissionParams, function(err, data) {
                        if (err) console.log(err, err.stack); // an error occurred
                        else     console.log('Removed Permissions: ' + data);           // successful response
                      });
                }
                
            }
        }           // successful response
    });

    function handleError (message) {
        message = message || 'Failed to process request.'
        return callback(new Error(message))
    }

}
