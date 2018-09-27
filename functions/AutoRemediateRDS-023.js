'use strict'

const AWS = require('aws-sdk')

/**
 * Lambda function to enforce AWS Relational Database Service (RDS) database snapshots not to be shared publicly 
 */

module.exports.handler = (event, context, callback) => {
  console.log('RDS Snapshot Publicly Accessible  - Received event:', JSON.stringify(event, null, 2))

  if (!event || !event.resource) {
    return handleError('Invalid event')
  }

  let params = {
    DBSnapshotIdentifier: event.resource,
    AttributeName: 'restore',
    ValuesToRemove: [
      'all'
    ]

  }

  let RDS = new AWS.RDS()

  RDS.modifyDBSnapshotAttribute(params, function (err, result) {
    if (err) {
      console.log('Error', err)
      return handleError(err.message ? err.message : 'Modify Db Snapshot failed')
    }

    console.log('Result', result)
    return callback(null, 'Successfully processed event')
  })

  function handleError (message) {
    message = message || 'Failed to process request.'
    return callback(new Error(message))
  }
}
