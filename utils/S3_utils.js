const { GetBucketAclCommand, PutBucketAclCommand } = require('@aws-sdk/client-s3')
const isEqual = require('lodash.isequal')
const filterAclGrants = function (acl, grantToRemove) {
  return {
    Owner: acl.Owner,
    Grants: acl.Grants.filter(grant => !isEqual(grant, grantToRemove))
  }
}

const getAcl = async (s3, bucketName) => {
  var getAclParams = {
    Bucket: bucketName
  }
  return s3.send(new GetBucketAclCommand(getAclParams))
}

const putAcl = async (s3, bucketName, acl) => {
  const putAclParams = {
    Bucket: bucketName,
    AccessControlPolicy: acl
  }
  return s3.send(new PutBucketAclCommand(putAclParams))
}

const filterAcl = async (s3, bucketName, grantToRemove) => {
  const acl = await getAcl(s3, bucketName)
  const filteredAcl = await filterAclGrants(acl, grantToRemove)
  const putAclResponse = await putAcl(s3, bucketName, filteredAcl)

  console.log('result>' + JSON.stringify(putAclResponse))
}

module.exports = {
  filterAclGrants: filterAclGrants,
  filterAcl: filterAcl
}
