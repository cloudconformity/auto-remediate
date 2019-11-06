'use strict'
let AccessRevoker = require('../utils/security_group_access_revoker')

const TCP_MYSQL_PORT = 3306
const PROTOCOL = 'tcp'

/**
 * Lambda function to remove the inbound rule that allow unrestricted access through TCP port 3306 (used by MYSQL Database Server) from the selected EC2 security group.
 */

module.exports.handler = (event, context, callback) => {
  console.log('UnrestrictedMYSQLAccess - Received event:', JSON.stringify(event, null, 2))

  if (!event || !event.resource || !event.region) {
    return handleError('Invalid event')
  }

  AccessRevoker.revoke(PROTOCOL, TCP_MYSQL_PORT, event.resource, event.region, function (err, result) {
    if (err) {
      console.log('Error', err)
      return handleError(err.message ? err.message : 'removing mysql database access on port 3306 failed')
    }
    console.log('Result', result)
    return callback(null, 'Successfully processed event')
  })

  function handleError (message) {
    message = message || 'Failed to process request.'
    return callback(new Error(message))
  }
}
