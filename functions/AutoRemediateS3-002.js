"use strict";

const config = require('./config');
const AWS = require("aws-sdk");

const CCRuleCode = 'S3-002'
const CCRuleName = 'BucketPublicReadAcpAccess'
const allUsersURI = 'http://acs.amazonaws.com/groups/global/AllUsers'
const readAcpPermission = "READ_ACP"

module.exports = {

  removeAcpPermission: function (thisGrant, newAcl) {
    console.log("in removeAcpPermission:", thisGrant.Permission);
    if (thisGrant.Permission != readAcpPermission) {  // any besides READ_ACP are passed through
      newAcl['Grants'].push(thisGrant);
    }

    return newAcl;
  },

  transferOwner: function (oldAcl, newAcl) {
    newAcl.Owner = oldAcl.Owner; // transfer the existing bucket owner

    return newAcl;
  },

  transferAcl: function (oldAcl, newAcl) {
    var that = this;
    this.transferOwner(oldAcl, newAcl);

    // now, act on any grants to all users - and just copy over any other grants
    oldAcl.Grants.forEach(function (grant, i) { if (grant.Grantee.URI == allUsersURI) { that.removeAcpPermission(grant, newAcl) } else { newAcl['Grants'].push(grant) }; })

    return newAcl;
  }
}

// look for and remove S3BucketPublicReadAccess
module.exports.handler = (event, context, callback) => {

  console.log('S3', CCRuleName, ' - Received event:', JSON.stringify(event, null, 2));

  if (!event || !event.resource || event.ruleId !== CCRuleCode) {
    return handleError('Invalid event');
  }

  var s3 = new AWS.S3({ apiVersion: '2006-03-01' });

  var aclWas;
  var aclNew = JSON.parse('{"Owner":"", "Grants":[]}'); // skeleton for new permission grants

  var getAclParams = {
    Bucket: event.resource
  };
  let getAclPromise = s3.getBucketAcl(getAclParams).promise();

  getAclPromise
    .then((aclWas) => {
      transferAcl(aclWas, aclNew);
    })
    .then(() => {
      const putAclParams = {
        Bucket: event.resource,
        AccessControlPolicy: aclNew
      };
      let putAclPromise = s3.putBucketAcl(putAclParams).promise();

      putAclPromise
        .then((result) => {
          console.log('result>' + JSON.stringify(result));
        })
    })
    .catch((err) => {
      console.log(err, err.stack);
      callback(err, 'failed to auto-remediate', CCRuleCode);
    })

  callback(null, 'Success');
};
