'use strict'

const AWS = require('aws-sdk')

/**
 * Lambda function to enable versioning on an s3 bucket
 */

module.exports.handler = (event, context, callback) => {
  console.log('Invalid CrossAccount Policies - Received event:', JSON.stringify(event, null, 2))

  if (!event || !event.resource) {
    return handleError('Invalid event')
  }

  let FunctionName = event.resource
  let Lambda = new AWS.Lambda()
  let BlackList = event.message.substring(event.message.lastIndexOf("[")+1, event.message.lastIndexOf("]"));
  let BlackListArray = BlackList.split(",")

  Lambda.getPolicy({FunctionName: FunctionName}, function (err, result) {
    if (err) {
      console.log('Error', err)
      return handleError(err.message ? err.message : 'enabling CloudTrail bucket access logging failed')
    }
    
    let policyData = JSON.parse(result.Policy)
    let statements = policyData.Statement
    
    for (var stmt in statements) {
      for (var acct in BlackListArray) {
        if (statements[stmt].Principal.toString().includes('*')) {
          console.log('Found statement', statements[stmt].Sid)
          removePermission(statements[stmt].Sid)
        }
        
        if (statements[stmt].Principal.AWS.includes(BlackListArray[acct].trim())) {
            console.log('Found statement: ', statements[stmt].Sid)
            removePermission(statements[stmt].Sid)
        }
      }
    }
  })
 
  return callback(null, 'Successfully processed event')
  
  function removePermission (id) {
    Lambda.removePermission({FunctionName: FunctionName, StatementId: id}, function (err, result) {
      if (err) {
        console.log('Error', err)
        return handleError(err.message ? err.message : 'enabling CloudTrail bucket access logging failed')
      }
     console.log('Result', result)
    return callback(null, 'Successfully processed event')
    })
  }
  
  function handleError (message) {
    message = message || 'Failed to process request.'
    return callback(new Error(message))
  }
}
