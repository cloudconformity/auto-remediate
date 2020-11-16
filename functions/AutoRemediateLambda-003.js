'use strict'

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
 * Enable tracing for your AWS Lambda functions
 */
module.exports.handler = (event, context, callback) => {
  console.log('Lambda Function Tracing Enabled - Received event:', JSON.stringify(event, null, 2))

  if (!event || !event.region) {
    return handleError('Invalid event')
  }

  const FunctionName = event.resource

  const Lambda = new AWS.Lambda()
  const IAM = new AWS.IAM()

  return Lambda.getFunctionConfiguration({ FunctionName: FunctionName }).promise().then(function (data) {
    console.log('Role ARN:', data.Role)

    const FunctionRoleName = data.Role.split('/')[1]

    const AttachRolePolicyParams = {
      PolicyArn: 'arn:aws:iam::aws:policy/AWSXrayWriteOnlyAccess',
      RoleName: FunctionRoleName
    }
    return IAM.attachRolePolicy(AttachRolePolicyParams).promise().then(function (data) {
      console.log('Successfully attached AWSXray managed policy to the function role')

      return new Promise(function (resolve) {
        setTimeout(function () {
          // Wait 10 seconds to avoid Error: The provided execution role does not have permissions to call PutTraceSegments on XRAY
          resolve()
        }, 10000)
      }).then(function () {
        const FunctionConfigurationParams = {
          FunctionName: FunctionName,
          TracingConfig: {
            Mode: 'Active'
          }
        }

        return Lambda.updateFunctionConfiguration(FunctionConfigurationParams).promise().then(function (data) {
          return callback(null, 'Successfully updated function configuration')
        })
      }).catch(function (err) {
        console.log('Error', err)
        return handleError(err.message ? err.message : 'Failed to enable tracing for the function')
      })
    })
  })

  function handleError (message) {
    message = message || 'Failed to process request.'
    return callback(new Error(message))
  }
}
