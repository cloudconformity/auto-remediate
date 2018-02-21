'use strict'

const AWS = require('aws-sdk')
const CONFIG = require('./config')['AutoRemediateCT-001']

/**
* Lambda function to automatically remediate CloudTrail not Global
*/
module.exports.handler = (event, context, callback) => {
  console.log('CloudTrail not Global - Received event:', JSON.stringify(event, null, 2))

  if (!event || !event.region || event.ruleId !== 'CT-001') {
    return handleError('Invalid event')
  }

  let params = {
    Name: CONFIG['Name'],
    S3BucketName: CONFIG['S3BucketName'],
    IncludeGlobalServiceEvents: CONFIG['IncludeGlobalServiceEvents'],
    IsMultiRegionTrail: CONFIG['IsMultiRegionTrail'],
    S3KeyPrefix: CONFIG['S3KeyPrefix']
  }

  let CloudTrail = new AWS.CloudTrail({apiVersion: '2013-11-01'})

  CloudTrail.updateTrail(params, (err, result) => {
    if (err) {
      console.log('Error' + err)
      return handleError(err.message ? err.message : 'Make CloudTrail global in account failed')
    }

    console.log('Result', result)
    return callback(null, 'Successfully processed event')
  })

  function handleError (message) {
    message = message || 'Failed to process request.'
    return callback(new Error(message))
  }
}
