'use strict'

const AWS = require('aws-sdk')
const CONFIG = require('./config')

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
    var stringConstructor = "test".constructor;
    var objectConstructor = {}.constructor;

    console.log('Lambda Function Admin Privilege - Received event:', JSON.stringify(event, null, 2))

    if (!event || !event.region || event.ruleId !== 'Lambda-004') {
        return handleError('Invalid event')
    }

    if(event.status == 'SUCCESS') {
        return callback(null)
    }

    var lambda = new AWS.Lambda({region: event.region, apiVersion: '2015-03-31'})

    // var params = {
    //     Marker: "", 
    //     MaxItems: 5
    //    };
    //    lambda.listFunctions(params, function(err, data) {
    //     if (err) console.log(err, err.stack); // an error occurred
    //     else     console.log(data);           // successful response
    //     /*
    //     data = {
    //      Functions: [
    //      ], 
    //      NextMarker: ""
    //     }
    //     */
    //   });

    var getPolicyParams = {
        FunctionName: event.resource
    }
    console.log('CAlling getPolicy')
    var invalidStatementId = []
    lambda.getPolicy(getPolicyParams, function(err, data) {
        if(err) {
            console.log(err)
            handleError(err)
        } else {
            var policy = JSON.parse(data.Policy)
            for(var i=0;i<policy['Statement'].length;i++) {
                var statement = policy['Statement'][i]
                var principle = statement['Principal']
                var condition = statement['Condition']
                console.log(principle)
                if(principle == "*" && !condition) {
                    console.log('Found rouge Statement. ')
                    console.log(statement)
                    console.log('Removing rouge statement')
                    var removeStatementParam = {
                        FunctionName: event.resource,
                        StatementId: statement['Sid']
                    }
                    console.log(removeStatementParam)
                    lambda.removePermission(removeStatementParam, function(err, data) {
                        if(err) {
                            console.log(err)
                            handleError(err)
                        } else {
                            console.log('removePermission data: ' + data)
                        }
                    })
                }
            }
        }
      });
      

    console.log("GetPolicy called")
    function handleError (message) {
        message = message || 'Failed to process request.'
        return callback(new Error(message))
      }
    function whatIsIt(object) {

    }
}