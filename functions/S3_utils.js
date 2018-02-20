"use strict";

const config = require('./config');
const AWS = require("aws-sdk");

const allUsersURI = 'http://acs.amazonaws.com/groups/global/AllUsers'
const readAcpPermission = "READ_ACP"

module.exports = {

  removeAcpPermission: function (thisGrant, newAcl) {
    if (thisGrant.Permission != readAcpPermission) {  // any besides READ_ACP are passed through
      newAcl['Grants'].push(thisGrant);
    }

    return newAcl;
  },

  transferOwner: function (oldAcl, newAcl) {
    newAcl.Owner = oldAcl.Owner; // transfer the existing bucket owner

    return newAcl;
  },

  transferAclWithoutReadAcp: function (oldAcl, newAcl) {
    var that = this;  // keep the reference for use within a local scope
    this.transferOwner(oldAcl, newAcl);

//    console.log("from transferAcl:", JSON.stringify(oldAcl.Grants));
//    oldAcl.Grants.forEach(function (grant) { console.log(grant) } );


    // now, act on any grants to all users - and just copy over any other grants
    oldAcl.Grants.forEach(function (grant, i) { if (grant.Grantee.URI == allUsersURI) { that.removeAcpPermission(grant, newAcl) } else { newAcl['Grants'].push(grant) }; });

    return newAcl;
  }
}

