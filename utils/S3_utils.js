"use strict";
const isEqual = require('lodash.isequal')
const filterAclGrants = function( acl, grantToRemove) {

  return {
    Owner: acl.Owner,
    Grants: acl.Grants.filter(grant => !isEqual(grant, grantToRemove) )
  }
}

const getAcl = function (s3, bucketName) {
  var getAclParams = {
    Bucket: bucketName
  };
  return s3.getBucketAcl(getAclParams).promise();
}

const putAcl = function (s3, bucketName, acl) {
  const putAclParams = {
    Bucket: bucketName,
    AccessControlPolicy: acl
  };
  return s3.putBucketAcl(putAclParams).promise();
}

const filterAcl = function (s3, bucketName, grantToRemove) {
  return getAcl(s3, bucketName)
    .then(acl => {
      return filterAclGrants(acl, grantToRemove)
    })
    .then(filteredAcl => {
      return putAcl(s3, bucketName, filteredAcl)
    }).then(putAclResponse => {
      console.log('result>' + JSON.stringify(putAclResponse));
    })
}

module.exports = {
  filterAclGrants: filterAclGrants,
  filterAcl: filterAcl
}

