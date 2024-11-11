const { S3Client, PutBucketAclCommand } = require('@aws-sdk/client-s3')
/**
* Lambda function to disable access to any AWS CloudTrail logging buckets that are publicly accessible
*
*/
module.exports.handler = async (event) => {
  console.log(' Publicly Shared AWS CloudTrail Logging Buckets  - Received event:', JSON.stringify(event, null, 2))
  if (!event || !event.resource || !event.region) {
    return handleError('Invalid event')
  }

  const params = {
    Bucket: event.resource,
    ACL: 'private'
  }

  const S3 = new S3Client({ region: event.region })

  try {
    const result = await S3.send(new PutBucketAclCommand(params))
    console.log('Result', result)
    return 'Successfully processed event'
  } catch (err) {
    console.log('Error', err)
    return handleError(err.message ? err.message : 'Failed to putBucketAcl')
  }

  function handleError (message) {
    message = message || 'Failed to process request.'
    throw new Error(message)
  }
}
