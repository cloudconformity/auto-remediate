"use strict";

const config = require('./config');
const  utils = require('./S3_utils');
const AWS = require("aws-sdk");

const CCRuleCode = 'S3-002'
const CCRuleName = 'BucketPublicReadAcpAccess'
//const allUsersURI = 'http://acs.amazonaws.com/groups/global/AllUsers'
//const readAcpPermission = "READ_ACP"


// look for and remove S3BucketPublicReadAccess
const handler = (event, context, callback) => {

  console.log('S3', CCRuleName, ' - Received event:', JSON.stringify(event, null, 2));

  if (!event || !event.resource || event.ruleId !== CCRuleCode) {
    return handleError('Invalid event');
  }

  var s3 = new AWS.S3({ apiVersion: '2006-03-01' });

  var aclWas;
  var aclNew = JSON.parse('{"Owner":"", "Grants":[]}'); // skeleton for new permission grants

  var getAclParams = {
    Bucket: event.resource
  };
  let getAclPromise = s3.getBucketAcl(getAclParams).promise();

  getAclPromise
    .then((aclWas) => {
      utils.transferAclWithoutReadAcp(aclWas, aclNew);
    })
    .then(() => {
      const putAclParams = {
        Bucket: event.resource,
        AccessControlPolicy: aclNew
      };
      let putAclPromise = s3.putBucketAcl(putAclParams).promise();

      putAclPromise
        .then((result) => {
          console.log('result>' + JSON.stringify(result));
        })
    })
    .catch((err) => {
      console.log(err, err.stack);
      callback(err, 'failed to auto-remediate', CCRuleCode);
    })

  callback(null, 'Success');

  function handleError(message) {
    message = message || 'Failed to process request.'
    return callback(new Error(message));
  }

};

module.exports = {
  handler: handler,
}
