module.exports = {
	"AutoRemediateRDS-008": true,
	"AutoRemediateS3-001": true,
	"AutoRemediateCT-001": true,
	
	"CT-001": {
		"Name": 'GlobalTrail',
		"S3BucketName": 'cc-remediate-cloudtrail',
		"IncludeGlobalServiceEvents": true,
		"IsMultiRegionTrail": true,
		"S3KeyPrefix": 'cloudtrail-global'
	}
}
