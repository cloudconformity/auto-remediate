"use strict";
const AWS = require("aws-sdk");
/**
 * Lambda function enforce Elastic Block Store (EBS) volume snapshots not to be public
 *
 */
module.exports.handler = (event, context, callback) => {
	console.log(
		"Publicly Accessible EBS Snapshot  - Received event:",
		JSON.stringify(event, null, 2)
	);
	if (!event || !event.resource || !event.region) {
		return handleError("Invalid event");
	}

	const params = {
		SnapshotId: event.resource,
		Attribute: "createVolumePermission",
		OperationType: "remove",
		GroupNames: ["all"]
	};

	const EC2 = new AWS.EC2({ region: event.region });

	EC2.modifySnapshotAttribute(params, function (err, result) {
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
