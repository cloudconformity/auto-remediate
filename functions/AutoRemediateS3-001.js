"use strict";

const config = require('./config');
const AWS = require("aws-sdk");

//S3BucketPublicReadAccess
module.exports.handler = (event, context, callback) => {

	console.log('S3 BucketPublicReadAccess - Received event:', JSON.stringify(event, null, 2));

		if (!event || !event.resource || event.ruleId !== "S3-001") {
			return handleError("Invalid event");
		}

    var s3 = new AWS.S3({apiVersion: '2006-03-01'});

    // this code is included to provide a record for debugging
    var params = {
      Bucket: event.resource
    };
    s3.getBucketAcl(params, function(err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else     console.log(data);           // successful response
    });

    // actually close off access
    var params = {
      Bucket: event.resource,
      ACL: "private",
    };
    s3.putBucketAcl(params, function(err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else     console.log(data);           // successful response
    });

	callback(null, "Success");

};
