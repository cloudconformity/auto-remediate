'use strict'

const AWS = require('aws-sdk')
const Promise = require('bluebird')

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
 * Enable Server-Side Encryption for AWS S3 buckets
 */
module.exports.handler = (event, context, callback) => {
  console.log('S3 Server Side Encryption - Received event:', JSON.stringify(event, null, 2))

  if (!event || !event.region) {
    return handleError('Invalid event')
  }

  const S3Bucket = event.resource
  let retries = 5

  const retryable = function (S3Bucket) {
    return UpdateBucketPolicy(S3Bucket).catch(function (err) {
      console.log('Error found:')
      console.error(err)
      console.log('%d attempts remaining, retrying...', retries)

      if (retries <= 0) {
        throw err
      }

      retries--

      return Promise.delay(1000).then(function () {
        return UpdateBucketPolicy(S3Bucket)
      })
    })
  }

  return retryable(S3Bucket).then(function () {
    console.log('SES is Enabled for bucket ', event.resource)
    return callback(null, 'Successfully processed event')
  })

  function UpdateBucketPolicy (S3Bucket) {
    const S3 = new AWS.S3()

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

    return S3.getBucketPolicy({ Bucket: S3Bucket }).promise().then(function (data) {
      console.log('Retrieved Bucket Policy:', JSON.stringify(JSON.parse(data.Policy), undefined, 2))
      const BucketPolicy = JSON.parse(data.Policy)

      if ((data.Policy).includes('s3:x-amz-server-side-encryption')) {
        console.log('Bucket already has SSE policy in place')
        return BucketPolicy
      } else {
        BucketPolicy.Statement.push(JSON.parse(SseStatement1))
        BucketPolicy.Statement.push(JSON.parse(SseStatement2))

        const PutBucketPolicyParams = {
          Policy: JSON.stringify(BucketPolicy),
          Bucket: S3Bucket
        }

        return S3.putBucketPolicy(PutBucketPolicyParams).promise().then(function (data) {
          console.log('Successfully put bucket policy')
          return data.Policy
        })
      }
    }).catch(function (err) {
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

      return S3.putBucketPolicy(PutBucketPolicyParams).promise().then(function (data) {
        console.log('Successfully put bucket policy')
        return data.Policy
      })
    })
  }

  function handleError (message) {
    message = message || 'Failed to process request.'
    return callback(new Error(message))
  }
}
