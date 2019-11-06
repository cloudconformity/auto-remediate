
'use strict'

const AWS = require('aws-sdk')
const CONFIG = require('./config')['AutoRemediateRS-019']

/**
 * Lambda function to Enable Automated Snapshot Retention Period for AWS Redshift 
 */

module.exports.handler = (event, context, callback) => {
  console.log('AWS Redshift Automated Snapshot Retention Period - Received event:', JSON.stringify(event, null, 2))

  if (!event || !event.resource) {
    return handleError('Invalid event')
  }


  let params = {
    ClusterIdentifier : event.resource,
    AutomatedSnapshotRetentionPeriod: CONFIG['RetentionPeriod'],

  }

  let Redshift = new AWS.Redshift({region: event.region})

  Redshift.modifyCluster(params, function (err, result) {
    if (err) {
      console.log('Error', err)
      return handleError(err.message ? err.message : 'Modify Cluster failed')
    }

    console.log('Result', result)
    return callback(null, 'Successfully processed event')
  })

  function handleError (message) {
    message = message || 'Failed to process request.'
    return callback(new Error(message))
  }
}
