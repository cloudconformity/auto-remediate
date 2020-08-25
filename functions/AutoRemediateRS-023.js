"use strict";

const AWS = require("aws-sdk");

/**
 * Lambda function to enable Redshift User Activity Logging
 */

module.exports.handler = (event, context, callback) => {
	console.log(
		"Enable Redshift User Activity Logging  - Received event:",
		JSON.stringify(event, null, 2)
	);

	if (!event || !event.resource) {
		return handleError("Invalid event");
	}

	const params = {
		ParameterGroupName: event.resource,
		Parameters: [
			{
				ParameterName: "enable_user_activity_logging",
				ParameterValue: "true"
			}
		]
	};

	const Redshift = new AWS.Redshift({ region: event.region });

	Redshift.modifyClusterParameterGroup(params, function (err, result) {
		if (err) {
			console.log("Error", err);
			return handleError(err.message ? err.message : "modify cluster parameter group failed");
		}

		console.log("Result", result);
		return callback(null, "Successfully processed event");
	});

	function handleError(message) {
		message = message || "Failed to process request.";
		return callback(new Error(message));
	}
};
