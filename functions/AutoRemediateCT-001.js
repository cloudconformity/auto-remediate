"use strict";

const AWS = require("aws-sdk");

/**
* Lambda function to automatically remediate CloudTrail not Enabled
*
*/
module.exports.handler = (event, context, callback) => {

	console.log('CloudTrail not Global - Received event:', JSON.stringify(event, null, 2));

	if (!event || !event.ccrn || !event.resource || !event.region) {
		return handleError("Invalid event");
	}

	var cloudtrail = new AWS.CloudTrail({apiVersion: '2013-11-01'});
	cloudtrail.createTrail({

		Name: 'GlobalTrail',
		S3BucketName: 'cc-remediate-cloudtrail',
		// CloudWatchLogsLogGroupArn: 'STRING_VALUE',
		// CloudWatchLogsRoleArn: 'STRING_VALUE',
		IncludeGlobalServiceEvents: true,
		IsMultiRegionTrail: true ,
		// KmsKeyId: 'STRING_VALUE',
		S3KeyPrefix: 'cloudtrail-global',
		// SnsTopicName: 'STRING_VALUE'

	} , (err, result) => {

		if (err) {
				console.log("Error" + err);
				return handleError(err.message ? err.message : "Make CloudTrail global failed");
	  }
		
		//console.log("Result"+ result);
		return callback(null, "Successfully processed event");
	});

	function handleError(message) {

		message = message || "Failed to process request.";
		return callback(new Error(message));

	}

};
