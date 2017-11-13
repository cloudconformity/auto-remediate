"use strict";

const AWS = require("aws-sdk");

/**
* Lambda function to automatically remediate CloudTrail not Global
*/
module.exports.handler = (event, context, callback) => {

	console.log('CloudTrail not Global - Received event:', JSON.stringify(event, null, 2));

	if (!event || !event.region || event.ruleId !== "CT-001") {
		return handleError("Invalid event");
	}

	var cloudtrail = new AWS.CloudTrail({apiVersion: '2013-11-01'});
	cloudtrail.updateTrail({

		Name: 'GlobalTrail',
		S3BucketName: 'cc-remediate-cloudtrail',
		IncludeGlobalServiceEvents: true,
		IsMultiRegionTrail: true ,
		S3KeyPrefix: 'cloudtrail-global',

		} , (err, result) => {

		if (err) {
				console.log("Error" + err);
				return handleError(err.message ? err.message : "Make CloudTrail global in account failed");
	  }

		return callback(null, "Successfully processed event");
	});

	function handleError(message) {

		message = message || "Failed to process request.";
		return callback(new Error(message));

	}

};
