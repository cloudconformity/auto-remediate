
const { IAMClient, GetRoleCommand, CreateRoleCommand, PutRolePolicyCommand } = require('@aws-sdk/client-iam')
const { EC2Client, DescribeFlowLogsCommand, CreateFlowLogsCommand } = require(`@aws-sdk/client-ec2`)
const { ConfiguredRetryStrategy } = require('@aws-sdk/util-retry')

// retry all requests with a 5 sec delay (if they are retry-able), up to 10 times
const retryStrategy = new ConfiguredRetryStrategy(10, 5000)

/**
 * Ensure that  Flow Logs feature is Enabled for your account
 */
const handler = async (event, context, callback) => {
  console.log('Enable Flow Logs   - Received event:', JSON.stringify(event, null, 2))

  function handleError (message) {
    message = message || 'Failed to process request.'
    return callback(new Error(message))
  }

  if (!event || !event.resource || !event.region) {
    return handleError('Invalid event')
  }
  console.log(event.resource)

  const roleARN = await CreateVPCFlowLogRole()
  console.log('Role ARN:', roleARN)

  const describeParam = {
    Filter: [
      {
        Name: 'resource-id',
        Values: [event.resource]
      }
    ]
  }
  try {
    const EC2 = new EC2Client({ region: event.region, retryStrategy })
    const { FlowLogs: flowLogs } = await EC2.send(new DescribeFlowLogsCommand(describeParam))
    if (!flowLogs.length) {
      const params = {
        ResourceIds: [event.resource],
        ResourceType: 'VPC',
        TrafficType: 'ALL',
        DeliverLogsPermissionArn: roleARN,
        LogGroupName: 'VPCFlowLogs'
      }
      const result = await EC2.send(new CreateFlowLogsCommand(params))
      console.log('Result', result)
    }
    return callback(null, 'Successfully processed event')
  } catch (err) {
    console.log('Error', err)
    const message = err.message ? err.message : 'Failed to createFlowLogs'
    return callback(new Error(message))
  }

  async function putRolePolicy (IAM, roleName) {
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
      RoleName: roleName
    }
    await IAM.send(new PutRolePolicyCommand(PutRolePolicyParams))
    console.log('Successfully put role policy')

    const { Role: role } = IAM.send(new GetRoleCommand({ RoleName: roleName }))
    return role.Arn
  }

  async function CreateVPCFlowLogRole () {
    const VPCFlowLogRole = 'VPCFlowLogRole'

    const IAM = new IAMClient({ retryStrategy })

    try {
      await IAM.send(new GetRoleCommand({ RoleName: VPCFlowLogRole }))

      return putRolePolicy(IAM)
    } catch (err) {
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

      await IAM.send(new CreateRoleCommand(CreateRoleParams))

      return putRolePolicy(IAM)
    }
  }
}

module.exports = { handler }
