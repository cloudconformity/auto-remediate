'use strict'

const { IAMClient, AttachRolePolicyCommand } = require('@aws-sdk/client-iam')
const { LambdaClient, GetFunctionConfigurationCommand, UpdateFunctionConfigurationCommand } = require('@aws-sdk/client-lambda')
const { ConfiguredRetryStrategy } = require('@aws-sdk/util-retry')

const { setTimeout } = require('timers/promises')

// retry all requests with a 5 sec delay (if they are retry-able), up to 10 times
const retryStrategy = new ConfiguredRetryStrategy(10, 5000)

/**
 * Enable tracing for your AWS Lambda functions
 */
const handler = async (event, context, callback) => {
  console.log('Lambda Function Tracing Enabled - Received event:', JSON.stringify(event, null, 2))

  if (!event || !event.region) {
    return handleError('Invalid event')
  }

  const FunctionName = event.resource

  const Lambda = new LambdaClient()
  const IAM = new IAMClient({ retryStrategy })

  try {
    const lambdaConfig = await Lambda.send(new GetFunctionConfigurationCommand({ FunctionName }))
    console.log('Role ARN:', lambdaConfig.Role)

    const FunctionRoleName = lambdaConfig.Role.split('/')[1]

    const AttachRolePolicyParams = {
      PolicyArn: 'arn:aws:iam::aws:policy/AWSXrayWriteOnlyAccess',
      RoleName: FunctionRoleName
    }

    await IAM.send(new AttachRolePolicyCommand(AttachRolePolicyParams))
    console.log('Successfully attached AWSXray managed policy to the function role')

    // Wait 10 seconds to avoid Error: The provided execution role does not have permissions to call PutTraceSegments on XRAY
    await setTimeout(10000)

    const FunctionConfigurationParams = {
      FunctionName: FunctionName,
      TracingConfig: {
        Mode: 'Active'
      }
    }

    await Lambda.send(new UpdateFunctionConfigurationCommand(FunctionConfigurationParams))
    return callback(null, 'Successfully updated function configuration')
  } catch (err) {
    console.log('Error', err)
    return handleError(err.message ? err.message : 'Failed to enable tracing for the function')
  }

  function handleError (message) {
    message = message || 'Failed to process request.'
    return callback(new Error(message))
  }
}

module.exports = { handler }
