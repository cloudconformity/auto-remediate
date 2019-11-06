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

const Utils = require('./Utils.js')

// Using the native promise implementation of the JavaScript engine
AWS.config.setPromisesDependency(null)

/**
 * <b>Ensure AWS Config is enabled in all regions</b><br/>
 *
 * @param {string} event.region
 *
 * @param context Lambda Context
 * @param callback Lambda Callback
 */
module.exports.handler = (event, context, callback) => {
  console.log('Config AutoRemediateConfig-001 - Received event:', JSON.stringify(event, null, 2))

  if (!event || !event.region) {
    return handleError('Invalid event')
  }

  if (!CONFIG['AutoRemediateConfig-001']['S3BucketName']) {
    return handleError('Missing CONFIG_S3_BUCKET configuration')
  }

  return Utils.getAccountId().then(function (accountId) {
    console.log('AWS Account ID:', accountId)

    return getRole(accountId).then(function (roleARN) {
      console.log('Role ARN:', roleARN)

      return subscribe(roleARN).then(function () {
        console.log('Successfully enabled AWS config in', event.region)

        return callback(null, 'Successfully processed event')
      })
    })
  }).catch(function (err) {
    console.log('Error', err)
    return handleError(err.message ? err.message : 'Failed to enable AWS Config')
  })

  function handleError (message) {
    message = message || 'Failed to process request.'
    return callback(new Error(message))
  }

  function getRole (accountId) {
    let ConfigRoleName = 'AWSConfigRole'

    let IAM = new AWS.IAM()

    return IAM.getRole({RoleName: ConfigRoleName}).promise().then(function (data) {
      return data.Role.Arn
    }).catch(function (err) {
      console.log(err.message)

      if (err.code !== 'NoSuchEntity') {
        throw err
      }

      let CreateRoleParams = {
        AssumeRolePolicyDocument: JSON.stringify({
          'Version': '2012-10-17',
          'Statement': [
            {
              'Sid': '',
              'Effect': 'Allow',
              'Principal': {
                'Service': 'config.amazonaws.com'
              },
              'Action': 'sts:AssumeRole'
            }
          ]
        }),
        RoleName: ConfigRoleName,
        Description: 'AWS Config Role Created By Cloud Conformity AutoRemediateConfig-001'
      }

      return IAM.createRole(CreateRoleParams).promise().then(function (data) {
        console.log('Successfully created the role')

        let AttachRolePolicyParams = {
          PolicyArn: 'arn:aws:iam::aws:policy/service-role/AWSConfigRole',
          RoleName: ConfigRoleName
        }

        return IAM.attachRolePolicy(AttachRolePolicyParams).promise().then(function () {
          console.log('Successfully attach AWSConfigRole managed policy to role')

          let PutRolePolicyParams = {
            PolicyDocument: JSON.stringify({
              'Version': '2012-10-17',
              'Statement': [
                {
                  'Effect': 'Allow',
                  'Action': [
                    's3:PutObject'
                  ],
                  'Resource': 'arn:aws:s3:::' + CONFIG['AutoRemediateConfig-001']['S3BucketName'] + '/AWSLogs/' + accountId + '/Config/*',
                  'Condition': {
                    'StringLike': {
                      's3:x-amz-acl': 'bucket-owner-full-control'
                    }
                  }
                },
                {
                  'Effect': 'Allow',
                  'Action': [
                    's3:GetBucketAcl'
                  ],
                  'Resource': 'arn:aws:s3:::' + CONFIG['AutoRemediateConfig-001']['S3BucketName']
                }
              ]
            }),
            PolicyName: 'AWSConfigRolePolicy',
            RoleName: ConfigRoleName
          }

          return IAM.putRolePolicy(PutRolePolicyParams).promise().then(function () {
            console.log('Successfully put role policy')

            return new Promise(function (resolve) {
              setTimeout(function () {
                // Wait 15 seconds to avoid InsufficientDeliveryPolicyException: Insufficient delivery policy to s3 bucket:
                resolve()
              }, 15000)
            }).then(function () {
              return data.Role.Arn
            })
          })
        })
      })
    })
  }

  function subscribe (roleARN) {
    let ConfigService = new AWS.ConfigService({region: event.region})

    let ConfigurationRecorderParams = {
      ConfigurationRecorder: {
        name: 'default',
        recordingGroup: {
          allSupported: true,
          includeGlobalResourceTypes: (event.region === 'us-east-1')
        },
        roleARN: roleARN
      }
    }

    return ConfigService.putConfigurationRecorder(ConfigurationRecorderParams).promise().then(function () {
      console.log('Successfully put configuration recorder')

      let PutDeliveryChannelParams = {
        DeliveryChannel: {
          name: 'default',
          s3BucketName: CONFIG['AutoRemediateConfig-001']['S3BucketName']
        }
      }

      return ConfigService.putDeliveryChannel(PutDeliveryChannelParams).promise().then(function () {
        console.log('Successfully put delivery channel')

        let StartConfigurationRecorderparams = {
          ConfigurationRecorderName: 'default'
        }

        return ConfigService.startConfigurationRecorder(StartConfigurationRecorderparams).promise().then(function (data) {
          console.log('Successfully start configuration recorder')

          return data
        })
      })
    })
  }
}
