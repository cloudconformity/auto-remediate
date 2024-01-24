'use strict'

const { S3Client, GetBucketPolicyCommand, PutBucketPolicyCommand } = require('@aws-sdk/client-s3')

const { ConfiguredRetryStrategy } = require('@aws-sdk/util-retry')

const retryStrategy = new ConfiguredRetryStrategy(10, (attempt) => 5000 + attempt * 1000)

/**
 * Enable Server-Side Encryption for AWS S3 buckets
 */
const handler = async (event, context, callback) => {
  console.log('S3 Server Side Encryption - Received event:', JSON.stringify(event, null, 2))

  if (!event || !event.region) {
    return handleError('Invalid event')
  }

  const S3Bucket = event.resource

  await UpdateBucketPolicy(S3Bucket)

  console.log('SES is Enabled for bucket ', event.resource)
  return callback(null, 'Successfully processed event')

  async function UpdateBucketPolicy (S3Bucket) {
    const S3 = new S3Client({ retryStrategy })

    const SseStatement1 = JSON.stringify({
      Sid: 'DenyIncorrectEncryptionHeader',
      Effect: 'Deny',
      Principal: '*',
      Action: 's3:PutObject',
      Resource: 'arn:aws:s3:::' + S3Bucket + '/*',
      Condition: {
        StringNotEquals: {
          's3:x-amz-server-side-encryption': 'AES256'
        }
      }
    })

    const SseStatement2 = JSON.stringify({
      Sid: 'DenyUnEncryptedObjectUploads',
      Effect: 'Deny',
      Principal: '*',
      Action: 's3:PutObject',
      Resource: 'arn:aws:s3:::' + S3Bucket + '/*',
      Condition: {
        Null: {
          's3:x-amz-server-side-encryption': 'true'
        }
      }
    }
    )

    try {
      const currentPolicy = await S3.send(new GetBucketPolicyCommand({ Bucket: S3Bucket }))
      console.log('Retrieved Bucket Policy:', JSON.stringify(JSON.parse(currentPolicy.Policy), undefined, 2))
      const BucketPolicy = JSON.parse(currentPolicy.Policy)

      if ((currentPolicy.Policy).includes('s3:x-amz-server-side-encryption')) {
        console.log('Bucket already has SSE policy in place')
        return BucketPolicy
      } else {
        BucketPolicy.Statement.push(JSON.parse(SseStatement1))
        BucketPolicy.Statement.push(JSON.parse(SseStatement2))

        const PutBucketPolicyParams = {
          Policy: JSON.stringify(BucketPolicy),
          Bucket: S3Bucket
        }

        return putBucketPolicy(S3, PutBucketPolicyParams)
      }
    } catch (err) {
      console.log(err.message)

      if (err.code !== 'NoSuchBucketPolicy') {
        throw err
      }

      const NewSsePolicy = JSON.stringify({
        Version: '2012-10-17',
        Id: 'PutSSEObjPolicy',
        Statement: []
      })

      const NewSsePolicyObj = JSON.parse(NewSsePolicy)

      NewSsePolicyObj.Statement.push(JSON.parse(SseStatement1))
      NewSsePolicyObj.Statement.push(JSON.parse(SseStatement2))

      const PutBucketPolicyParams = {
        Policy: JSON.stringify(NewSsePolicyObj),
        Bucket: S3Bucket
      }

      return putBucketPolicy(S3, PutBucketPolicyParams)
    }
  }

  async function putBucketPolicy (S3, PutBucketPolicyParams) {
    const result = await S3.send(new PutBucketPolicyCommand(PutBucketPolicyParams))
    console.log('Successfully put bucket policy')
    return result.Policy
  }

  function handleError (message) {
    message = message || 'Failed to process request.'
    return callback(new Error(message))
  }
}

module.exports = { handler }
