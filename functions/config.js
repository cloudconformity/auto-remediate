module.exports = {
  /*
    Enter the Security Group Ids and the Subnet Ids of the VPC you want to attach the Lambdas to
    for example:
        securityGroupIds: ["sg-0e12345b6ca7e89d0"],
        subnetIds: ["subnet-0010d2034f56ec789", "subnet-0b1bc234bda567fba"]
   */
  vpc: {
    securityGroupIds: [""],
    subnetIds: [""]
  },

  function: {
    "AutoRemediateRDS-008": {
      enabled: true
    },

    "AutoRemediateS3-001": {
      enabled: true
    },

    "AutoRemediateS3-002": {
      enabled: true
    },

    "AutoRemediateS3-003": {
      enabled: true
    },

    "AutoRemediateS3-004": {
      enabled: true
    },

    "AutoRemediateS3-005": {
      enabled: true
    },

    "AutoRemediateS3-006": {
      enabled: true
    },

    "AutoRemediateS3-007": {
      enabled: true
    },

    "AutoRemediateS3-008": {
      enabled: true
    },

    "AutoRemediateS3-009": {
      enabled: true
    },

    "AutoRemediateS3-010": {
      enabled: true
    },

    "AutoRemediateS3-012": {
      enabled: true
    },

    "AutoRemediateConfig-001": {
      enabled: true,
      S3BucketName: ""
    },

    "AutoRemediateCFM-005": {
      enabled: true
    },

    "AutoRemediateCT-001": {
      enabled: true,
      Name: "GlobalTrail",
      S3BucketName: "",
      IncludeGlobalServiceEvents: true,
      IsMultiRegionTrail: true,
      S3KeyPrefix: ""
    },

    "AutoRemediateRS-001": {
      enabled: true
    },

    "AutoRemediateIAM-001": {
      enabled: true
    },

    "AutoRemediateEC2-002": {
      enabled: true
    },

    "AutoRemediateEC2-003": {
      enabled: true
    },

    "AutoRemediateEC2-004": {
      enabled: true
    },

    "AutoRemediateEC2-005": {
      enabled: true
    },

    "AutoRemediateEC2-006": {
      enabled: true
    },

    "AutoRemediateEC2-008": {
      enabled: true
    },

    "AutoRemediateEC2-038": {
      enabled: true
    },

    "AutoRemediateEC2-039": {
      enabled: true
    },

    "AutoRemediateEC2-040": {
      enabled: true
    },

    "AutoRemediateEC2-043": {
      enabled: true
    },

    "AutoRemediateEC2-045": {
      enabled: true
    },

    "AutoRemediateIAM-038": {
      enabled: true
    },

    "AutoRemediateKinesis-001": {
      enabled: true,
      KmsKeyId: "alias/aws/kinesis"
    },

    "AutoRemediateVPC-001": {
      enabled: true
    },

    "AutoRemediateEC2-019": {
      enabled: true
    },

    "AutoRemediateCT-003": {
      enabled: true
    },

    "AutoRemediateRds-006": {
      enabled: true
    },

    "AutoRemediateRDS-006": {
      enabled: true
    },

    "AutoRemediateRDS-023": {
      enabled: true
    },

    "AutoRemediateKMS-004": {
      enabled: true
    },

    "AutoRemediateRS-023": {
      enabled: true
    },

    "AutoRemediateGD-001": {
      enabled: true
    },

    "AutoRemediateOrganizations-002": {
      enabled: true
    },

    "AutoRemediateLambda-003": {
      enabled: true
    },

    "AutoRemediateS3-016": {
      enabled: true
    },

    "AutoRemediateS3-014": {
      enabled: true
    },

    "AutoRemediateTrustedAdvisor-003": {
      enabled: true
    },

    "AutoRemediateKMS-002": {
      enabled: true
    },

    "AutoRemediateRS-019": {
      enabled: true,
      RetentionPeriod: 7
    }
  }
};
