"use strict";

const AWS = require("aws-sdk");

AWS.config.update({
	maxRetries: 10
});

AWS.events.on("retry", function (resp) {
	// retry all requests with a 5 sec delay (if they are retry-able)
	if (resp.error) {
		resp.error.retryDelay = 5000;
	}
});

// Using the native promise implementation of the JavaScript engine
AWS.config.setPromisesDependency(null);

const Utils = require("./Utils.js");

/**
 * This function Alter Bucket policy to enforce AWS S3 bucket are not publicly accessible
 * * <b>Note:</b> Here we assume that the S3 Bucket has a policy with the
 * "Effect" : "Allow" and "Principal" : "*"
 * Which cause  S3-014 rule to fail.
 *
 * This Function replace Principal in the policy with account root user
 */
module.exports.handler = (event, context, callback) => {
	console.log(
		"S3 Bucket Public Access Via Policy - Received event:",
		JSON.stringify(event, null, 2)
	);

	if (!event || !event.region) {
		return handleError("Invalid event");
	}

	const S3Bucket = event.resource;

	return Utils.getAccountId()
		.then(function (accountId) {
			console.log("AWS Account ID:", accountId);

			return AlterBucketPolicyPrincipal(S3Bucket, accountId).then(function () {
				console.log("SES is Enabled for bucket ", event.resource);
				return callback(null, "Successfully processed event");
			});
		})
		.catch(function (err) {
			console.log("Error", err);
			return handleError(err.message ? err.message : "Failed to enable AWS Config");
		});

	// eslint-disable-next-line no-shadow
	function AlterBucketPolicyPrincipal(S3Bucket, accountId) {
		const S3 = new AWS.S3();

		return S3.getBucketPolicy({ Bucket: S3Bucket })
			.promise()
			.then(function (data) {
				console.log(
					"Retrieved Bucket Policy:",
					JSON.stringify(JSON.parse(data.Policy), undefined, 2)
				);

				const BucketPolicy = JSON.parse(data.Policy);

				const statements = BucketPolicy.Statement;

				for (let i = 0; i < statements.length; i++) {
					const currentStatement = statements[i];
					console.log("Processing statement " + i + "  ...");
					for (const key in currentStatement) {
						if (
							// eslint-disable-next-line no-prototype-builtins
							currentStatement.hasOwnProperty(key) &&
							currentStatement[key] == "Allow"
						) {
							if (currentStatement["Principal"] == "*") {
								currentStatement["Principal"] = {
									AWS: "arn:aws:iam::" + accountId + ":root"
								};
								console.log("Altered Principal to the root user");
								console.log(currentStatement);
							}
						}
					}
				}

				const PutBucketPolicyParams = {
					Policy: JSON.stringify(BucketPolicy),
					Bucket: S3Bucket
				};

				return (
					S3.putBucketPolicy(PutBucketPolicyParams)
						.promise()
						// eslint-disable-next-line no-shadow
						.then(function (data) {
							console.log("Successfully put bucket policy");
							return data.Policy;
						})
				);
			})
			.catch(function (err) {
				console.log(err.message);
				throw err;
			});
	}

	function handleError(message) {
		message = message || "Failed to process request.";
		return callback(new Error(message));
	}
};
