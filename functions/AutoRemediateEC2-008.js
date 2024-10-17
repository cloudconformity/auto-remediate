const AccessRevoker = require('../utils/security_group_access_revoker')

const TCP_MSSQL_PORT = 1433
const PROTOCOL = 'tcp'

/**
 * Lambda function to remove the inbound rule that allow unrestricted access through TCP port 1433 (used by MSSQL Database Server) from the selected EC2 security group.
 */

module.exports.handler = (event, context, callback) => {
  console.log('UnrestrictedMSSQLAccess - Received event:', JSON.stringify(event, null, 2))

  if (!event || !event.resource || !event.region) {
    return handleError('Invalid event')
  }

  AccessRevoker.revoke(PROTOCOL, TCP_MSSQL_PORT, event.resource, event.region, function (err, result) {
    if (err) {
      console.log('Error', err)
      return handleError(err.message ? err.message : 'removing mssql database access on port 1433 failed')
    }
    console.log('Result', result)
    return callback(null, 'Successfully processed event')
  })

  function handleError (message) {
    message = message || 'Failed to process request.'
    throw new Error(message)
  }
}
