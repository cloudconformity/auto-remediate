'use strict'

const { CloudTrailClient, UpdateTrailCommand } = require('@aws-sdk/client-cloudtrail')

const CONFIG = require('./config')['AutoRemediateCT-001']

/**
* Lambda function to automatically remediate CloudTrail not Global
*/
const handler = async (event, context, callback) => {
  console.log('CloudTrail not Global - Received event:', JSON.stringify(event, null, 2))

  if (!event || !event.region || event.ruleId !== 'CT-001') {
    return handleError('Invalid event')
  }

  const params = {
    Name: CONFIG['Name'],
    S3BucketName: CONFIG['S3BucketName'],
    IncludeGlobalServiceEvents: CONFIG['IncludeGlobalServiceEvents'],
    IsMultiRegionTrail: CONFIG['IsMultiRegionTrail'],
    S3KeyPrefix: CONFIG['S3KeyPrefix']
  }

  const CloudTrail = new CloudTrailClient({ apiVersion: '2013-11-01' })

  try {
    const result = await CloudTrail.send(new UpdateTrailCommand(params))
    console.log('Result', result)
    return callback(null, 'Successfully processed event')
  } catch (err) {
    console.log('Error' + err)
    return handleError(err.message ? err.message : 'Make CloudTrail global in account failed')
  }

  function handleError (message) {
    message = message || 'Failed to process request.'
    return callback(new Error(message))
  }
}

module.exports = { handler }
