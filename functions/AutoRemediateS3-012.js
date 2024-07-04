
const { S3Client, PutBucketVersioningCommand } = require('@aws-sdk/client-s3')

/**
 * Lambda function to enable versioning on an s3 bucket
 */

const handler = async (event, context, callback) => {
  console.log('S3BucketVersioning - Received event:', JSON.stringify(event, null, 2))

  if (!event || !event.resource) {
    return handleError('Invalid event')
  }

  const params = {
    Bucket: event.resource,
    VersioningConfiguration: {
      Status: 'Enabled'
    }
  }

  const S3 = new S3Client()

  try {
    const result = await S3.send(new PutBucketVersioningCommand(params))
    console.log('Result', result)
    return 'Successfully processed event'
  } catch (err) {
    console.log('Error', err)
    return handleError(err.message ? err.message : 'enabling bucket versioning failed')
  }

  function handleError (message) {
    message = message || 'Failed to process request.'
    throw new Error(message)
  }
}

module.exports = { handler }
