const event = {
	ruleId: "S3-001",
	ruleTitle: "S3 Bucket Public 'READ' Access",
	service: "S3",
	region: "us-east-1",
	riskLevel: "VERY_HIGH",
	resource: "open-bucket-created-by-mike",
	status: "FAILURE"
};

const AutoRemediate = require("../functions/AutoRemediateS3-001");

AutoRemediate.handler(event, {}, function (err, data) {
	console.log(err);
	console.log("data", JSON.stringify(data, null, 2));
});
