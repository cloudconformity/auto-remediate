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
 * Ensure that  Flow Logs feature is Enabled for your account
 */
module.exports.handler = (event, context, callback) => {
  console.log('Enable Flow Logs   - Received event:', JSON.stringify(event, null, 2))

  function handleError (message) {
    message = message || 'Failed to process request.'
    return callback(new Error(message))
  }

  if (!event || !event.resource || !event.region) {
    return handleError('Invalid event')
  }
  console.log(event.resource)

  CreateVPCFlowLogRole().then(function (roleARN) {
    console.log('Role ARN:', roleARN)

    const params = {
      ResourceIds: [event.resource],
      ResourceType: 'VPC',
      TrafficType: 'ALL',
      DeliverLogsPermissionArn: roleARN,
      LogGroupName: 'VPCFlowLogs'
    }

    const Ec2 = new AWS.EC2({ region: event.region })

    Ec2.createFlowLogs(params, function (err, result) {
      if (err) {
        console.log('Error', err)
        return handleError(err.message ? err.message : 'Failed to createFlowLogs')
      }

      console.log('Result', result)
      return callback(null, 'Successfully processed event')
    })
    function handleError (message) {
      message = message || 'Failed to process request.'
      return callback(new Error(message))
    }
  })

  function CreateVPCFlowLogRole () {
    const VPCFlowLogRole = 'VPCFlowLogRole'

    const IAM = new AWS.IAM()

    return IAM.getRole({ RoleName: VPCFlowLogRole }).promise().then(function (data) {
      return data.Role.Arn
    }).catch(function (err) {
      console.log(err.message)

      if (err.code !== 'NoSuchEntity') {
        throw err
      }

      const CreateRoleParams = {
        AssumeRolePolicyDocument: JSON.stringify({
          Version: '2012-10-17',
          Statement: [
            {
              Effect: 'Allow',
              Principal: {
                Service: 'vpc-flow-logs.amazonaws.com'
              },
              Action: 'sts:AssumeRole'
            }
          ]
        }
        ),
        RoleName: VPCFlowLogRole,
        Description: 'AWS VPC FlowLog Role Created By Cloud Conformity AutoRemediateVPC-001'
      }

      return IAM.createRole(CreateRoleParams).promise().then(function () {
        const PutRolePolicyParams = {
          PolicyDocument: JSON.stringify({
            Version: '2012-10-17',
            Statement: [
              {
                Action: [
                  'logs:CreateLogGroup',
                  'logs:CreateLogStream',
                  'logs:PutLogEvents',
                  'logs:DescribeLogGroups',
                  'logs:DescribeLogStreams'
                ],
                Effect: 'Allow',
                Resource: '*'
              }
            ]
          }),
          PolicyName: 'VPCFlowLogRolePolicy',
          RoleName: VPCFlowLogRole
        }
        return IAM.putRolePolicy(PutRolePolicyParams).promise().then(function () {
          console.log('Successfully put role policy')
          // eslint-disable-next-line no-undef
          return data.Role.Arn
        })
      })
    })
  }
}
