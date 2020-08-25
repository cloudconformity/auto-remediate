"use strict";

const AWS = require("aws-sdk");

/**
 * Lambda function to deactivate access keys older than 90 days
 */

module.exports.handler = (event, context, callback) => {
	console.log(
		"AWS IAM Access Keys Rotation- 90 Days - Received event:",
		JSON.stringify(event, null, 2)
	);

	if (!event || !event.resource) {
		return handleError("Invalid event");
	}

	const params = {
		AccessKeyId: event.resource,
		Status: "Inactive"
	};

	const IAM = new AWS.IAM();

	IAM.updateAccessKey(params, function (err, result) {
		if (err) {
			console.log("Error", err);
			return handleError(err.message ? err.message : "update Access Key failed");
		}

		console.log("Result", result);
		return callback(null, "Successfully processed event");
	});

	function handleError(message) {
		message = message || "Failed to process request.";
		return callback(new Error(message));
	}
};
