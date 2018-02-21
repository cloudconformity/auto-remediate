module.exports = {
  'AutoRemediateRDS-008': {
    'enabled': false
  },

  'AutoRemediateS3-001': {
    'enabled': false
  },

  'AutoRemediateS3-012': {
    'enabled': false
  },

  'AutoRemediateConfig-001': {
    'enabled': false,
    'S3BucketName': ''
  },

  'AutoRemediateCFM-005': {
    'enabled': false
  },

  'AutoRemediateCT-001': {
    'enabled': false,
    'Name': 'GlobalTrail',
    'S3BucketName': '',
    'IncludeGlobalServiceEvents': true,
    'IsMultiRegionTrail': true,
    'S3KeyPrefix': ''
  },

  'AutoRemediateRS-001': {
    'enabled': false
  },

  'AutoRemediateIAM-001': {
    'enabled': false
  },

  'AutoRemediateEC2-002': {
    'enabled': false
  },

  'AutoRemediateEC2-005': {
    'enabled': false
  }
}
