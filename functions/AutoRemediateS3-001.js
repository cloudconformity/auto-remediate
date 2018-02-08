"use strict";

const config = require('./config');
const AWS = require("aws-sdk");

//S3BucketPublicReadAccess
module.exports.handler = (event, context, callback) => {

  console.log('S3 BucketPublicReadAccess - Received event:', JSON.stringify(event, null, 2));

  if (!event || !event.resource || event.ruleId !== "S3-001") {
    return handleError("Invalid event");
  }

  var s3 = new AWS.S3({ apiVersion: '2006-03-01' });

  // this code is included to provide a record for debugging
  var params = {
    Bucket: event.resource
  };
  let getAclPromise = s3.getBucketAcl(params).promise();

  getAclPromise
    .then((data) => { console.log(data) })
    .catch((err) => { console.log(err, err.stack) });

  // actually close off access
  var params = {
    Bucket: event.resource,
    ACL: "private",
  };
  let putAclPromise = s3.putBucketAcl(params).promise();

  putAclPromise
    .then((data) => { console.log(data) })
    .catch((err) => {
      console.log(err, err.stack);
      callback(err, "Failed to auto-remediate S3-001");
    });

  callback(null, "Success");

};
