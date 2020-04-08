'use strict'
const AWS = require('aws-sdk')
/**
* Lambda function enforce EKS Endpoint not to be public
*
*/
module.exports.handler = (event, context, callback) => {
  console.log('EKS Publicly Accessible Cluster Endpoints  - Received event:', JSON.stringify(event, null, 2))
  if (!event || !event.resource || !event.region) {
    return handleError('Invalid event')
  }

  console.log('Info', event.resource)

  let params = {
    name: event.resource, 
    resourcesVpcConfig: {
      endpointPrivateAccess: true ,
      endpointPublicAccess: false,
    }
  };

  let eks = new AWS.EKS({region: event.region})

  eks.updateClusterConfig(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response

    if (err) {
      console.log('Error', err)
      return handleError(err.message ? err.message : 'Failed to modify cluster configuration')
    }
    return callback(null, 'Successfully processed event')

  });

  function handleError (message) {
    message = message || 'Failed to process request.'
    return callback(new Error(message))
  }
}
