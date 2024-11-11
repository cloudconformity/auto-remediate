
const source = require('../functions/AutoRemediateS3-003')
const { S3Client, GetBucketAclCommand, PutBucketAclCommand } = require('@aws-sdk/client-s3')
const { mockClient } = require('aws-sdk-client-mock')
// eslint-disable-next-line node/no-extraneous-require
require('aws-sdk-client-mock-jest')

const sampleEvent = {
  id: 'ccc:HJzFMHchx:S3-003:S3:ap-southeast-2:sample-bucket',
  organisationId: 'some-organisation',
  accountId: 'abcdef',
  ruleId: 'S3-003',
  ruleTitle: "S3 Bucket Public 'WRITE' Access",
  service: 'S3',
  region: 'ap-southeast-2',
  riskLevel: 'VERY_HIGH',
  categories: [
    'security'
  ],
  compliances: [
    'AWAF'
  ],
  message: "Bucket sample-bucket allows public 'WRITE' access.",
  resource: 'sample-bucket',
  status: 'FAILURE',
  statusRiskLevel: 'FAILURE:1',
  lastUpdatedDate: null,
  lastUpdatedBy: 'SYSTEM',
  resolvedBy: 'SYSTEM',
  eventId: 'Skzp7ra1WW',
  ccrn: 'ccrn:aws:HJzFMHchx:S3:global:sample-bucket',
  tags: [],
  cost: '0',
  waste: '0',
  lastModifiedDate: '1511060191925',
  lastModifiedBy: 'SYSTEM'
}

describe('S3-003 AutoRemediation', () => {
  const grantReadAcpAllUsers = {
    Grantee: { Type: 'Group', URI: 'http://acs.amazonaws.com/groups/global/AllUsers' }, Permission: 'READ_ACP'
  }
  const grantReadAllUsers = {
    Grantee: { Type: 'Group', URI: 'http://acs.amazonaws.com/groups/global/AllUsers' }, Permission: 'READ'
  }
  const grantWriteAcpAllUsers = {
    Grantee: { Type: 'Group', URI: 'http://acs.amazonaws.com/groups/global/AllUsers' }, Permission: 'WRITE_ACP'
  }
  const grantWriteAllUsers = {
    Grantee: { Type: 'Group', URI: 'http://acs.amazonaws.com/groups/global/AllUsers' }, Permission: 'WRITE'
  }
  const grantWriteAuthenticatedUsers = {
    Grantee: { Type: 'Group', URI: 'http://acs.amazonaws.com/groups/global/AuthenticatedUsers' }, Permission: 'WRITE'
  }
  const grantFullControlCanonicalUser = {
    Grantee: { DisplayName: 'user_name', ID: 'account_user_id123455667890abcdef', Type: 'CanonicalUser' }, Permission: 'FULL_CONTROL'
  }

  const mockS3 = mockClient(S3Client)

  afterEach(() => {
    mockS3.reset()
  })

  describe('valid invocation', () => {
    beforeEach(async () => {
      mockS3.on(GetBucketAclCommand).resolves({
        Owner: {
          DisplayName: 'user_name', ID: 'account_user_id123455667890abcdef'
        },
        Grants: [
          {
            Grantee: {
              DisplayName: 'user_name', ID: 'account_user_id123455667890abcdef', Type: 'CanonicalUser'
            },
            Permission: 'FULL_CONTROL'
          },
          grantReadAllUsers,
          grantReadAcpAllUsers,
          grantWriteAllUsers,
          grantWriteAcpAllUsers,
          grantWriteAuthenticatedUsers,
          grantFullControlCanonicalUser
        ]
      })

      await source.handler(sampleEvent)
    })

    it('should get the correct bucket ACL from S3', () => {
      const expectedParams = {
        Bucket: 'sample-bucket'
      }
      expect(mockS3).toHaveReceivedCommandWith(GetBucketAclCommand, expectedParams)
    })

    it('should set a new ACL on the affected bucket', () => {
      const expectedParams = {
        Bucket: 'sample-bucket',
        AccessControlPolicy: expect.any(Object)
      }
      expect(mockS3).toHaveReceivedCommandWith(PutBucketAclCommand, expectedParams)
    })

    it('should remove WRITE grants for AllUsers', () => {
      expect(mockS3).not.toHaveReceivedCommandWith(PutBucketAclCommand, grantWriteAllUsers)
    })

    it('should keep WRITE grants for other users', () => {
      const expectedGrant = {
        AccessControlPolicy: {
          Grants: expect.arrayContaining([grantWriteAuthenticatedUsers]),
          Owner: expect.any(Object)
        }
      }
      expect(mockS3).toHaveReceivedCommandWith(PutBucketAclCommand, expectedGrant)
    })

    it('should keep READ grants for All Users', () => {
      const expectedGrant = {
        AccessControlPolicy: {
          Grants: expect.arrayContaining([grantReadAllUsers]),
          Owner: expect.any(Object)
        }
      }
      expect(mockS3).toHaveReceivedCommandWith(PutBucketAclCommand, expectedGrant)
    })

    it('should keep READ_ACP grants for All Users', () => {
      const expectedGrant = {
        AccessControlPolicy: {
          Grants: expect.arrayContaining([grantReadAcpAllUsers]),
          Owner: expect.any(Object)
        }
      }
      expect(mockS3).toHaveReceivedCommandWith(PutBucketAclCommand, expectedGrant)
    })

    it('should keep WRITE_ACP grants for All Users', () => {
      const expectedGrant = {
        AccessControlPolicy: {
          Grants: expect.arrayContaining([grantWriteAcpAllUsers]),
          Owner: expect.any(Object)
        }
      }
      expect(mockS3).toHaveReceivedCommandWith(PutBucketAclCommand, expectedGrant)
    })

    it('should keep FULL_CONTROL grants for Canonical User', () => {
      const expectedGrant = {
        AccessControlPolicy: {
          Grants: expect.arrayContaining([grantFullControlCanonicalUser]),
          Owner: expect.any(Object)
        }
      }
      expect(mockS3).toHaveReceivedCommandWith(PutBucketAclCommand, expectedGrant)
    })
  })

  describe('invalid invocation', () => {
    it('should fail when event is undefined', async () => {
      await expect(source.handler(undefined))
        .rejects
        .toThrow('Invalid event')
      expect(mockS3).not.toHaveReceivedCommand(GetBucketAclCommand)
      expect(mockS3).not.toHaveReceivedCommand(PutBucketAclCommand)
    })

    it('should fail when "resource" missing from the event', async () => {
      const malformedEvent = {
        ruleId: 'S3-003'
      }
      await expect(source.handler(malformedEvent))
        .rejects
        .toThrow('Invalid event')
      expect(mockS3).not.toHaveReceivedCommand(GetBucketAclCommand)
      expect(mockS3).not.toHaveReceivedCommand(PutBucketAclCommand)
    })

    it('should fail when the incorrect rule is received', async () => {
      const malformedEvent = {
        resource: 'sample-bucket',
        ruleId: 'S3-00x'
      }
      await expect(source.handler(malformedEvent))
        .rejects
        .toThrow('Invalid event')
      expect(mockS3).not.toHaveReceivedCommand(GetBucketAclCommand)
      expect(mockS3).not.toHaveReceivedCommand(PutBucketAclCommand)
    })
  })
})
