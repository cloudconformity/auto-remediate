'use strict'

const CONFIG = require('./config')
const { IAMClient, GetRoleCommand, CreateRoleCommand, AttachRolePolicyCommand, PutRolePolicyCommand } = require('@aws-sdk/client-iam')
const { ConfiguredRetryStrategy } = require('@aws-sdk/util-retry')
const { ConfigServiceClient } = require('@aws-sdk/client-config-service ')
const { setTimeout } = require('timers/promises')

// retry all requests with a 5 sec delay (if they are retry-able), up to 10 times
const retryStrategy = new ConfiguredRetryStrategy(10, 5000)

const Utils = require('./Utils.js')
const { PutConfigurationRecorderCommand, PutDeliveryChannelCommand, StartConfigurationRecorderCommand } = require('@aws-sdk/client-config-service')

/**
 * <b>Ensure AWS Config is enabled in all regions</b><br/>
 *
 * @param {string} event.region
 *
 * @param context Lambda Context
 * @param callback Lambda Callback
 */
const handler = async (event, context, callback) => {
  console.log('Config AutoRemediateConfig-001 - Received event:', JSON.stringify(event, null, 2))

  if (!event || !event.region) {
    return handleError('Invalid event')
  }

  if (!CONFIG['AutoRemediateConfig-001']['S3BucketName']) {
    return handleError('Missing CONFIG_S3_BUCKET configuration')
  }

  try {
    const accountId = await Utils.getAccountId()
    console.log('AWS Account ID:', accountId)

    const roleARN = await getRole(accountId)
    console.log('Role ARN:', roleARN)

    await subscribe(roleARN)
    console.log('Successfully enabled AWS config in', event.region)

    return callback(null, 'Successfully processed event')
  } catch (err) {
    console.log('Error', err)
    return handleError(err.message ? err.message : 'Failed to enable AWS Config')
  }

  function handleError (message) {
    message = message || 'Failed to process request.'
    return callback(new Error(message))
  }

  async function getRole (accountId) {
    const ConfigRoleName = 'AWSConfigRole'

    const IAM = new IAMClient({ retryStrategy })

    try {
      const role = await IAM.send(new GetRoleCommand({ RoleName: ConfigRoleName }))
      return role.Role.Arn
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
              Sid: '',
              Effect: 'Allow',
              Principal: {
                Service: 'config.amazonaws.com'
              },
              Action: 'sts:AssumeRole'
            }
          ]
        }),
        RoleName: ConfigRoleName,
        Description: 'AWS Config Role Created By Cloud Conformity AutoRemediateConfig-001'
      }
      const role = await IAM.send(new CreateRoleCommand(CreateRoleParams))
      console.log('Successfully created the role')
      const AttachRolePolicyParams = {
        PolicyArn: 'arn:aws:iam::aws:policy/service-role/AWSConfigRole',
        RoleName: ConfigRoleName
      }

      await IAM.send(new AttachRolePolicyCommand(AttachRolePolicyParams))
      console.log('Successfully attach AWSConfigRole managed policy to role')

      const PutRolePolicyParams = {
        PolicyDocument: JSON.stringify({
          Version: '2012-10-17',
          Statement: [
            {
              Effect: 'Allow',
              Action: [
                's3:PutObject'
              ],
              Resource: 'arn:aws:s3:::' + CONFIG['AutoRemediateConfig-001']['S3BucketName'] + '/AWSLogs/' + accountId + '/Config/*',
              Condition: {
                StringLike: {
                  's3:x-amz-acl': 'bucket-owner-full-control'
                }
              }
            },
            {
              Effect: 'Allow',
              Action: [
                's3:GetBucketAcl'
              ],
              Resource: 'arn:aws:s3:::' + CONFIG['AutoRemediateConfig-001']['S3BucketName']
            }
          ]
        }),
        PolicyName: 'AWSConfigRolePolicy',
        RoleName: ConfigRoleName
      }

      await IAM.send(new PutRolePolicyCommand(PutRolePolicyParams))
      console.log('Successfully put role policy')

      // Wait 15 seconds to avoid InsufficientDeliveryPolicyException: Insufficient delivery policy to s3 bucket:
      await setTimeout(15000)
      return role.Role.Arn
    }
  }

  async function subscribe (roleARN) {
    const ConfigService = new ConfigServiceClient({ region: event.region })

    const ConfigurationRecorderParams = {
      ConfigurationRecorder: {
        name: 'default',
        recordingGroup: {
          allSupported: true,
          includeGlobalResourceTypes: (event.region === 'us-east-1')
        },
        roleARN: roleARN
      }
    }

    await ConfigService.send(new PutConfigurationRecorderCommand(ConfigurationRecorderParams))
    console.log('Successfully put configuration recorder')

    const PutDeliveryChannelParams = {
      DeliveryChannel: {
        name: 'default',
        s3BucketName: CONFIG['AutoRemediateConfig-001']['S3BucketName']
      }
    }

    await ConfigService.send(new PutDeliveryChannelCommand(PutDeliveryChannelParams))
    console.log('Successfully put delivery channel')

    const StartConfigurationRecorderParams = {
      ConfigurationRecorderName: 'default'
    }

    const startConfigurationRecorderResult = await ConfigService.send(new StartConfigurationRecorderCommand(StartConfigurationRecorderParams))
    console.log('Successfully start configuration recorder')
    return startConfigurationRecorderResult
  }
}

module.exports = handler
