'use strict'
let AccessRevoker = require('../utils/security_group_access_revoker')

const TCP_RPC_PORT = 135
const PROTOCOL = 'tcp'

/**
 * Lambda function to remove the inbound rule that allow unrestricted access through TCP port 135 from the selected EC2 security group.
 */

module.exports.handler = (event, context, callback) => {
  console.log('UnrestrictedRPCAccess - Received event:', JSON.stringify(event, null, 2))

  if (!event || !event.resource || !event.region) {
    return handleError('Invalid event')
  }

  AccessRevoker.revoke(PROTOCOL, TCP_TELNET_PORT, event.resource, event.region, function (err, result) {
    if (err) {
      console.log('Error', err)
      return handleError(err.message ? err.message : 'removing RPC access on port 135 failed')
    }
    console.log('Result', result)
    return callback(null, 'Successfully processed event')
  })

  function handleError (message) {
    message = message || 'Failed to process request.'
    return callback(new Error(message))
  }
}
