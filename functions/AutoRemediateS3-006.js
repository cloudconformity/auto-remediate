
const utils = require('../utils/S3_utils')
const { S3Client } = require('@aws-sdk/client-s3')

const CCRuleCode = 'S3-006'
const CCRuleName = 'BucketAuthenticatedUsersReadAccess'

const readAuthenticatedUsers = {
  Grantee: { Type: 'Group', URI: 'http://acs.amazonaws.com/groups/global/AuthenticatedUsers' }, Permission: 'READ'
}

function handleError (message) {
  message = message || 'Failed to process request.'
  throw new Error(message)
}

// look for and remove S3 BucketAuthenticatedUsersReadAccess
const handler = async (event) => {
  console.log('S3', CCRuleName, ' - Received event:', JSON.stringify(event, null, 2))

  if (!event || !event.resource || event.ruleId !== CCRuleCode) {
    return handleError('Invalid event')
  }

  var s3 = new S3Client({ apiVersion: '2006-03-01' })

  try {
    await utils.filterAcl(s3, event.resource, readAuthenticatedUsers)
    return 'Success'
  } catch (err) {
    console.log(err, err.stack)
    throw new Error(`failed to auto-remediate ${CCRuleCode}: ${err}`)
  }
}

module.exports = {
  handler: handler
}
