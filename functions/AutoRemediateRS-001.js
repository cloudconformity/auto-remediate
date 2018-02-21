'use strict'

const AWS = require('aws-sdk')

/**
 * Lambda function to make Redshift Cluster private to minimise security risks
 *
 */

module.exports.handler = (event, context, callback) => {
  console.log('ClusterPubliclyAccessible - Received event:', JSON.stringify(event, null, 2))

  if (!event || !event.ccrn || !event.resource || !event.region) {
    return handleError('Invalid event')
  }

  let params = {
    ClusterIdentifier: event.resource,
    PubliclyAccessible: false
  }

  let Redshift = new AWS.Redshift({region: event.region})

  Redshift.modifyCluster(params, function (err, result) {
    if (err) {
      console.log('Error', err)
      return handleError(err.message ? err.message : 'Failed to make Redshift cluster private')
    }

    console.log('Result', result)
    return callback(null, 'Successfully processed event')
  })

  function handleError (message) {
    message = message || 'Failed to process request.'
    return callback(new Error(message))
  }
}
