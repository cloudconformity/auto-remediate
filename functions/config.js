module.exports = {

	//Whether or not the auto-remediate function is enabled
	"AutoRemediateRDS-008": true,
	"AutoRemediateS3-001": true,
	"AutoRemediateCT-001": true,
	"AutoRemediateConfig-001": true,
	"AutoRemediateCFM-005": true,

	// Configure S3 bucket for AWS Config. This bucket receives configuration history and configuration snapshot files, which contain details for the resources that AWS Config records.
	"CONFIG_S3_BUCKET": "",

	// Configuration options for auto-remediating CloudTrail not global issue
	"CT-001": {
		"Name": 'GlobalTrail',
		"S3BucketName": 'cc-remediate-cloudtrail',
		"IncludeGlobalServiceEvents": (event.region === "us-east-1"),
		"IsMultiRegionTrail": true,
		"S3KeyPrefix": 'cloudtrail-global'
	}

}
