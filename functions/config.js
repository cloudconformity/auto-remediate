module.exports = {

	//Whether or not the auto-remediate function is enabled
	"AutoRemediateRDS-008": true,
	"AutoRemediateS3-001": true,
	"AutoRemediateConfig-001": true,
	"AutoRemediateCFM-005": true,

	// Configure S3 bucket for AWS Config. This bucket receives configuration history and configuration snapshot files, which contain details for the resources that AWS Config records.
	"CONFIG_S3_BUCKET": "",

}
