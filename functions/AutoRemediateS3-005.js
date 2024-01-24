'use strict'

const utils = require('../utils/S3_utils')
const { S3Client } = require('@aws-sdk/client-s3')

const CCRuleCode = 'S3-005'
const CCRuleName = 'BucketPublicReadAcpAccess'

const readAcpAllUsers = {
  Grantee: { Type: 'Group', URI: 'http://acs.amazonaws.com/groups/global/AllUsers' }, Permission: 'FULL_CONTROL'
}

function handleError (message, callback) {
  message = message || 'Failed to process request.'
  return callback(new Error(message))
}

// look for and remove S3BucketPublicReadAccess
const handler = async (event, context, callback) => {
  console.log('S3', CCRuleName, ' - Received event:', JSON.stringify(event, null, 2))

  if (!event || !event.resource || event.ruleId !== CCRuleCode) {
    return handleError('Invalid event', callback)
  }

  var s3 = new S3Client({ apiVersion: '2006-03-01' })

  await utils.filterAcl(s3, event.resource, readAcpAllUsers).then(() => {
    callback(null, 'Success')
  }).catch((err) => {
    console.log(err, err.stack)
    callback(err, 'failed to auto-remediate', CCRuleCode)
  })
}

module.exports = {
  handler: handler
}
