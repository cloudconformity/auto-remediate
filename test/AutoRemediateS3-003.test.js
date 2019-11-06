'use strict'

const source = require('../functions/AutoRemediateS3-003')
var AWS = require('aws-sdk-mock')

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

let awsMockCallback = (jestFn) => {
  return function (params, callback) {
    try {
      let result = jestFn(params, callback)
      callback(null, result)
    } catch (err) {
      callback(err)
    }
  }
}

describe('S3-003 AutoRemediation', () => {
  let getBucketAclMock
  let putBucketAclMock
  let grantReadAcpAllUsers = {
    Grantee: { Type: 'Group', URI: 'http://acs.amazonaws.com/groups/global/AllUsers' }, Permission: 'READ_ACP'
  }
  let grantReadAllUsers = {
    Grantee: { Type: 'Group', URI: 'http://acs.amazonaws.com/groups/global/AllUsers' }, Permission: 'READ'
  }
  let grantWriteAcpAllUsers = {
    Grantee: { Type: 'Group', URI: 'http://acs.amazonaws.com/groups/global/AllUsers' }, Permission: 'WRITE_ACP'
  }
  let grantWriteAllUsers = {
    Grantee: { Type: 'Group', URI: 'http://acs.amazonaws.com/groups/global/AllUsers' }, Permission: 'WRITE'
  }
  let grantWriteAuthenticatedUsers = {
    Grantee: { Type: 'Group', URI: 'http://acs.amazonaws.com/groups/global/AuthenticatedUsers' }, Permission: 'WRITE'
  }
  let grantFullControlCanonicalUser = {
    Grantee: { 'DisplayName': 'user_name', 'ID': 'account_user_id123455667890abcdef', 'Type': 'CanonicalUser' }, Permission: 'FULL_CONTROL'
  }

  beforeEach(() => {
    getBucketAclMock = jest.fn()
    putBucketAclMock = jest.fn()
    AWS.mock('S3', 'getBucketAcl', awsMockCallback(getBucketAclMock))
    AWS.mock('S3', 'putBucketAcl', awsMockCallback(putBucketAclMock))
  })

  afterEach(() => {
    AWS.restore()
  })

  describe('valid invocation', () => {
    beforeEach((done) => {
      getBucketAclMock.mockImplementation(() => {
        return {
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
        }
      })
      const mockCallback = (err, data) => {
        if (err) {
          done.fail()
        } else {
          done()
        }
      }
      source.handler(sampleEvent, jest.fn(), mockCallback)
    })

    it('should get the correct bucket ACL from S3', () => {
      let expectedParams = {
        Bucket: 'sample-bucket'
      }
      expect(getBucketAclMock).toHaveBeenCalledWith(expectedParams, expect.any(Function))
    })

    it('should set a new ACL on the affected bucket', () => {
      let expectedParams = {
        Bucket: 'sample-bucket',
        AccessControlPolicy: expect.any(Object)
      }
      expect(putBucketAclMock).toHaveBeenCalled()
      expect(putBucketAclMock).toHaveBeenCalledWith(expectedParams, expect.any(Function))
    })

    it('should remove WRITE grants for AllUsers', () => {
      expect(putBucketAclMock).not.toHaveBeenCalledWith(expect.objectContaining(grantWriteAllUsers), expect.any(Function))
    })

    it('should keep WRITE grants for other users', () => {
      let expectedGrant = {
        AccessControlPolicy: {
          Grants: expect.arrayContaining([grantWriteAuthenticatedUsers]),
          Owner: expect.any(Object)
        }
      }
      expect(putBucketAclMock).toHaveBeenCalledWith(expect.objectContaining(expectedGrant), expect.any(Function))
    })

    it('should keep READ grants for All Users', () => {
      let expectedGrant = {
        AccessControlPolicy: {
          Grants: expect.arrayContaining([grantReadAllUsers]),
          Owner: expect.any(Object)
        }
      }
      expect(putBucketAclMock).toHaveBeenCalledWith(expect.objectContaining(expectedGrant), expect.any(Function))
    })

    it('should keep READ_ACP grants for All Users', () => {
      let expectedGrant = {
        AccessControlPolicy: {
          Grants: expect.arrayContaining([grantReadAcpAllUsers]),
          Owner: expect.any(Object)
        }
      }
      expect(putBucketAclMock).toHaveBeenCalledWith(expect.objectContaining(expectedGrant), expect.any(Function))
    })

    it('should keep WRITE_ACP grants for All Users', () => {
      let expectedGrant = {
        AccessControlPolicy: {
          Grants: expect.arrayContaining([grantWriteAcpAllUsers]),
          Owner: expect.any(Object)
        }
      }
      expect(putBucketAclMock).toHaveBeenCalledWith(expect.objectContaining(expectedGrant), expect.any(Function))
    })

    it('should keep FULL_CONTROL grants for Canonical User', () => {
      let expectedGrant = {
        AccessControlPolicy: {
          Grants: expect.arrayContaining([grantFullControlCanonicalUser]),
          Owner: expect.any(Object)
        }
      }
      expect(putBucketAclMock).toHaveBeenCalledWith(expect.objectContaining(expectedGrant), expect.any(Function))
    })
  })

  describe('invalid invocation', () => {
    let mockCallback = (done) => {
      return (err, data) => {
        expect(err).toBeDefined()
        expect(getBucketAclMock).not.toHaveBeenCalled()
        expect(putBucketAclMock).not.toHaveBeenCalled()
        done()
      }
    }

    it('should fail when event is undefined', done => {
      source.handler(undefined, jest.fn(), mockCallback(done))
    })

    it('should fail when "resource" missing from the event', done => {
      let malformedEvent = {
        ruleId: 'S3-003'
      }
      source.handler(malformedEvent, jest.fn(), mockCallback(done))
    })

    it('should fail when the incorrect rule is received', done => {
      let malformedEvent = {
        resource: 'sample-bucket',
        ruleId: 'S3-00x'
      }
      source.handler(malformedEvent, jest.fn(), mockCallback(done))
    })
  })
})
