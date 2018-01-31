"use strict";

const AWS = require("aws-sdk");
const TCP_PORT = 22;
const TCP_PROTOCOL = 'tcp';

/**
 * Lambda function to remove the inbound rule that allow unrestricted access through TCP port 22 from the selected EC2 security group.
 */

module.exports.handler = (event, context, callback) => {

	console.log('UnrestrictedSSHAccess - Received event:', JSON.stringify(event, null, 2));

	if (!event || !event.resource || !event.region) {
		return handleError("Invalid event");
	}

	let params = {
		GroupName: event.resource,
		IpPermissions: [
			{
				FromPort: TCP_PORT,
				ToPort: TCP_PORT,
				IpProtocol: TCP_PROTOCOL,
				IpRanges: [{ CidrIp: '0.0.0.0/0' }]
			},
			{
				FromPort: TCP_PORT,
				ToPort: TCP_PORT,
				IpProtocol: TCP_PROTOCOL,
				Ipv6Ranges: [{ CidrIpv6: '::/0' }]
			}
		]
	};

	let ec2 = new AWS.EC2({ region: event.region });

	ec2.revokeSecurityGroupIngress(params, function (err, result) {

		if (err) {

			console.log("Error", err);
			return handleError(err.message ? err.message : "removing ssh access failed");

		}

		console.log("Result", result);
		return callback(null, "Successfully processed event");

	});

	function handleError(message) {

		message = message || "Failed to process request.";
		return callback(new Error(message));

	}

};
