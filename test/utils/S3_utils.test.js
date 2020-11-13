'use strict'

const utils = require('../../utils/S3_utils')
const clonedeep = require('lodash.clonedeep')

describe('S3_utils', () => {
  const grantReadAcpAllUsers = {
    Grantee: { Type: 'Group', URI: 'http://acs.amazonaws.com/groups/global/AllUsers' }, Permission: 'READ_ACP'
  }
  const grantReadAllUsers = {
    Grantee: { Type: 'Group', URI: 'http://acs.amazonaws.com/groups/global/AllUsers' }, Permission: 'READ'
  }
  const grantReadAcpAuthenticatedUsers = {
    Grantee: { Type: 'Group', URI: 'http://acs.amazonaws.com/groups/global/AuthenticatedUsers' }, Permission: 'READ_ACP'
  }

  describe('#filterAclGrants', () => {
    let sampleAcl
    beforeEach(() => {
      sampleAcl = {
        Owner: { DisplayName: 'user_name', ID: '2ce976687c4d75ad5a026cfc3c1f0397e39a0df116faf88c1fd90f2faa291c8b' },
        Grants: [grantReadAcpAllUsers, grantReadAllUsers]
      }
    })
    it('should not mutate the input param', () => {
      const original = clonedeep(sampleAcl)
      utils.filterAclGrants(sampleAcl, grantReadAcpAllUsers)
      expect(sampleAcl).toEqual(original)
    })

    it('should return a copy when grant is undefined', () => {
      const result = utils.filterAclGrants(sampleAcl)
      expect(result).toEqual(sampleAcl)
    })

    it('should return a copy of the acl when no match exists', () => {
      const result = utils.filterAclGrants(sampleAcl, grantReadAcpAuthenticatedUsers)
      expect(result).toEqual(sampleAcl)
    })

    it('should remove a single match', () => {
      sampleAcl.Grants = clonedeep([grantReadAcpAllUsers, grantReadAllUsers])
      const result = utils.filterAclGrants(sampleAcl, grantReadAcpAllUsers)
      expect(result.Grants).toEqual([grantReadAllUsers])
    })

    it('should remove multiple matches', () => {
      sampleAcl.Grants = clonedeep([grantReadAcpAllUsers, grantReadAllUsers, grantReadAcpAllUsers])
      const result = utils.filterAclGrants(sampleAcl, grantReadAcpAllUsers)
      expect(result.Grants).toEqual([grantReadAllUsers])
    })

    it('should fail when acl is undefined', () => {
      const invalidCall = () => utils.filterAclGrants(undefined, grantReadAcpAllUsers)
      expect(invalidCall).toThrow(expect.anything())
    })

    it('should not match when Grantee differs', () => {
      sampleAcl.Grants = clonedeep([grantReadAcpAllUsers])
      const result = utils.filterAclGrants(sampleAcl, grantReadAcpAuthenticatedUsers)
      expect(result.Grants).toEqual([grantReadAcpAllUsers])
    })
  })
})
