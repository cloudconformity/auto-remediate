'use strict'

const utils = require('../utils/S3_utils')
const { S3Client } = require('@aws-sdk/client-s3')

const CCRuleCode = 'S3-009'
const CCRuleName = 'BucketAuthenticatedUsersWriteAcpAccess'

const authenticatedUsersWriteAcpAccess = {
  Grantee: { Type: 'Group', URI: 'http://acs.amazonaws.com/groups/global/AuthenticatedUsers' }, Permission: 'WRITE_ACP'
}

function handleError (message, callback) {
  message = message || 'Failed to process request.'
  return callback(new Error(message))
}

// look for and remove S3 BucketAuthenticatedUsersWriteAcpAccess
const handler = async (event, context, callback) => {
  console.log('S3', CCRuleName, ' - Received event:', JSON.stringify(event, null, 2))

  if (!event || !event.resource || event.ruleId !== CCRuleCode) {
    return handleError('Invalid event', callback)
  }

  var s3 = new S3Client({ apiVersion: '2006-03-01' })

  try {
    await utils.filterAcl(s3, event.resource, authenticatedUsersWriteAcpAccess)
    callback(null, 'Success')
  } catch (err) {
    console.log(err, err.stack)
    callback(err, 'failed to auto-remediate', CCRuleCode)
  }
}

module.exports = {
  handler: handler
}
