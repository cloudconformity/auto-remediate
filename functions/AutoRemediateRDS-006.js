"use strict";
const AWS = require("aws-sdk");
/**
 * Lambda function to enable Update Minor Version flag for AWS RDS
 *
 */
module.exports.handler = (event, context, callback) => {
	console.log(" Update Minor Version for RDS - Received event:", JSON.stringify(event, null, 2));
	if (!event || !event.resource || !event.region) {
		return handleError("Invalid event");
	}

	const params = {
		DBInstanceIdentifier: event.resource,
		AutoMinorVersionUpgrade: true,
		ApplyImmediately: true
	};

	const RDS = new AWS.RDS({ region: event.region });

	RDS.modifyDBInstance(params, function (err, result) {
		if (err) {
			console.log("Error", err);
			return handleError(err.message ? err.message : "Failed to modify DB Instance");
		}
		console.log("Result", result);
		return callback(null, "Successfully processed event");
	});

	function handleError(message) {
		message = message || "Failed to process request.";
		return callback(new Error(message));
	}
};
