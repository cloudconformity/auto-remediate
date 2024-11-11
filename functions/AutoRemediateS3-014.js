
const { S3Client, GetBucketPolicyCommand, PutBucketPolicyCommand } = require('@aws-sdk/client-s3')
const { ConfiguredRetryStrategy } = require('@aws-sdk/util-retry')

const Utils = require('./Utils.js')

const retryStrategy = new ConfiguredRetryStrategy(10, 5000)

/**
 * This function Alter Bucket policy to enforce AWS S3 bucket are not publicly accessible
 * * <b>Note:</b> Here we assume that the S3 Bucket has a policy with the
 * "Effect" : "Allow" and "Principal" : "*"
 * Which cause  S3-014 rule to fail.
 *
 * This Function replace Principal in the policy with account root user
 */
const handler = async (event) => {
  console.log('S3 Bucket Public Access Via Policy - Received event:', JSON.stringify(event, null, 2))

  if (!event || !event.region) {
    return handleError('Invalid event')
  }

  const S3Bucket = event.resource

  try {
    const accountId = await Utils.getAccountId()
    console.log('AWS Account ID:', accountId)
    await AlterBucketPolicyPrincipal(S3Bucket, accountId)
    console.log('SES is Enabled for bucket ', event.resource)
    return 'Successfully processed event'
  } catch (err) {
    console.log('Error', err)
    return handleError(err.message ? err.message : 'Failed to enable AWS Config')
  }

  async function AlterBucketPolicyPrincipal (S3Bucket, accountId) {
    const S3 = new S3Client({ retryStrategy })

    try {
      const data = await S3.send(new GetBucketPolicyCommand({ Bucket: S3Bucket }))
      console.log('Retrieved Bucket Policy:', JSON.stringify(JSON.parse(data.Policy), undefined, 2))
      const BucketPolicy = JSON.parse(data.Policy)
      var statements = BucketPolicy.Statement

      for (var i = 0; i < statements.length; i++) {
        var currentStatement = statements[i]
        console.log(`Processing statement ${i}...`)
        for (var key in currentStatement) {
          // eslint-disable-next-line no-prototype-builtins
          if (currentStatement.hasOwnProperty(key) && currentStatement[key] === 'Allow') {
            if (currentStatement['Principal'] === '*') {
              currentStatement['Principal'] = { AWS: 'arn:aws:iam::' + accountId + ':root' }
              console.log('Altered Principal to the root user')
              console.log(currentStatement)
            }
          }
        }
      }

      const PutBucketPolicyParams = {
        Policy: JSON.stringify(BucketPolicy),
        Bucket: S3Bucket
      }

      const putBucketPolicyResult = await S3.send(new PutBucketPolicyCommand(PutBucketPolicyParams))
      console.log('Successfully put bucket policy')
      return putBucketPolicyResult.Policy
    } catch (err) {
      console.log(err.message)
      throw err
    }
  }

  function handleError (message) {
    message = message || 'Failed to process request.'
    throw new Error(message)
  }
}

module.exports = { handler }
