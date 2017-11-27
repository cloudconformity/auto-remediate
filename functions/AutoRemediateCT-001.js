"use strict";

const config = require('./config');
const AWS = require("aws-sdk");

/**
* Lambda function to automatically remediate CloudTrail not Global
*/
module.exports.handler = (event, context, callback) => {

	console.log('CloudTrail not Global - Received event:', JSON.stringify(event, null, 2));

	if (!event || !event.region || event.ruleId !== "CT-001") {
		return handleError("Invalid event");
	}

	let params = {
		Name:                       config["AutoRemediateCT-001"]["Name"],
		S3BucketName:               config["AutoRemediateCT-001"]["S3BucketName"],
		IncludeGlobalServiceEvents: config["AutoRemediateCT-001"]["IncludeGlobalServiceEvents"],
		IsMultiRegionTrail:         config["AutoRemediateCT-001"]["IsMultiRegionTrail"],
		S3KeyPrefix:                config["AutoRemediateCT-001"]["S3KeyPrefix"]

	};

	let CloudTrail = new AWS.CloudTrail({apiVersion: '2013-11-01'});

	CloudTrail.updateTrail(params , (err, result) => {

		if (err) {
			console.log("Error" + err);
			return handleError(err.message ? err.message : "Make CloudTrail global in account failed");
	  	}

		console.log("Result", result);
		return callback(null, "Successfully processed event");

	});

	function handleError(message) {

		message = message || "Failed to process request.";
		return callback(new Error(message));

	}

};
