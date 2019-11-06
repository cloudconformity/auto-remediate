'use strict'
const AWS = require('aws-sdk')

/**
 * Lambda function to disable public API Gateway endpoints
 */

module.exports.handler = (event, context, callback) => {
  console.log('Public API endpoint - Received event:', JSON.stringify(event, null, 2))

  if (!event || !event.resource) {
    return handleError('Invalid event')
  }

  let ec2 = new AWS.EC2()
   
  function getVpcEndpointId({}, callback) {
    ec2.describeVpcEndpoints({}, function (err, result) {
      if (err) {
        console.log('Error', err)
        return handleError(err.message ? err.message : 'No Gateway VPC Endpoints found')
      }
      let vpcEndpointId = ""
      for (var i = 0; i < result.VpcEndpoints.length; i++) {
        let endpoint = result.VpcEndpoints[i]
        if (endpoint.VpcEndpointType == 'Gateway'){
          vpcEndpointId = endpoint.VpcEndpointId
        }
      }
      return callback(vpcEndpointId)
    })
  }

  let RestApiId = event.resource
  let ag = new AWS.APIGateway()
  
  var config_params = {
    restApiId: RestApiId, /* required */
    patchOperations: [
      {
        op: 'replace',
        path: '/endpointConfiguration/types/REGIONAL',
        value: 'PRIVATE'
      }
  ]};

  ag.updateRestApi(config_params, function (err, result) {
    if (err) {
      console.log('Error', err)
      return handleError(err.message ? err.message : 'setting endpoint to PRIVATE failed')
    }
      getVpcEndpointId({}, function(result) {
          var policy_params = {
            restApiId: RestApiId, /* required */
            patchOperations: [
              {
                op: 'replace',
                path: '/policy',
                value: "{\"Version\":\"2012-10-17\",\"Statement\":[{\"Effect\":\"Allow\",\"Principal\":\"*\",\"Action\":\"execute-api:Invoke\",\"Resource\":\"arn:aws:execute-api:::*\"},{\"Effect\":\"Deny\",\"Principal\":\"*\",\"Action\":\"execute-api:Invoke\",\"Resource\":\"arn:aws:execute-api:::*\",\"Condition\":{\"StringNotEquals\":{\"aws:SourceVpce\":\"" + result + "\"}}}]}"
              }
          ]};
          
        ag.updateRestApi(policy_params, function (err, result) {
          if (err) {
          console.log('Error', err)
          return handleError(err.message ? err.message : 'setting endpoint policy failed')
          }
        })
    
      });

  })
    
  return callback(null, 'Successfully processed event')
  
  function handleError (message) {
    message = message || 'Failed to process request.'
    return callback(new Error(message))
  }
}