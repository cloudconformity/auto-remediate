"use strict";

//S3BucketPublicReadAccess
module.exports.handler = (event, context, callback) => {

	console.log('S3 BucketPublicReadAccess - Received event:', JSON.stringify(event, null, 2));

	callback(null, "Success");

};
