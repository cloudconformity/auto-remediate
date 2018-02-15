"use strict";
const source = require('../functions/AutoRemediateS3-002.js');

//const config = require('./config');
const AWS = require("aws-sdk");

const CCRuleCode = 'S3-002';
const CCRuleName = 'BucketPublicReadAcpAccess';
const allUsersURI = 'http://acs.amazonaws.com/groups/global/AllUsers';
const readAcpPermission = "READ_ACP";
const aclSkeleton = JSON.parse('{"Owner":"", "Grants":[]}'); // skeleton for new permission grants

describe('S3 ACL Grant transfer to new ACL for READ_ACP grant for allUsersURI group', () => {
    test('S3 ACL READ_ACP grant is transfered to new ACL if not from allUsersURI', () => {
        var aclNew = aclSkeleton;
        const readAcpGrant = JSON.parse('{ "Grantee": { "Type": "Group", "URI": "http://acs.amazonaws.com/groups/global/SomeUsers" }, "Permission": "READ_ACP" }');

        expect(readAcpGrant.Permission).toBe('READ_ACP');
        expect(source.remediateAllUsers(readAcpGrant, aclNew)).toEqual(aclSkeleton);
    });

    test('S3 ACL READ_ACP grant is not transfered to new ACL if from allUsersURI', () => {
        var aclNew = aclSkeleton;
        const readAcpGrant = JSON.parse('{ "Grantee": { "Type": "Group", "URI": "http://acs.amazonaws.com/groups/global/AllUsers" }, "Permission": "READ_ACP" }');

        expect(readAcpGrant.Permission).toBe('READ_ACP');
        expect(source.remediateAllUsers(readAcpGrant, aclNew)).toEqual(aclSkeleton);
    });

    test('S3 ACL READ grant is transfered to new ACL if from allUsersURI', () => {
        var aclNew = aclSkeleton;
        const readGrant = JSON.parse('{ "Grantee": { "Type": "Group", "URI": "http://acs.amazonaws.com/groups/global/AllUsers" }, "Permission": "READ" }');
        const readAcl = JSON.parse('{ "Owner":"", "Grants":[ { "Grantee": { "Type": "Group", "URI": "http://acs.amazonaws.com/groups/global/AllUsers" }, "Permission": "READ" } ] }');

        expect(readGrant.Permission).toBe('READ');
        expect(source.remediateAllUsers(readGrant, aclNew)).toEqual(readAcl);
    });
});

describe('S3 Bucket Owner entry is transferred to the new ACL', () => {

    test('S3 Owner entry is transferred to the new ACL', () => {
        var newAcl = aclSkeleton;
        const oldAcl = JSON.parse('{ "Owner": { "DisplayName": "user_name", "ID": "2ce976687c4d75ad5a026cfc3c1f0397e39a0df116faf88c1fd90f2faa291c8b" }, "Grants":[ { "Grantee": { "Type": "Group", "URI": "http://acs.amazonaws.com/groups/global/AllUsers" }, "Permission": "READ" } ] }');

        expect(oldAcl.Owner.DisplayName).toBe('user_name');
        expect(oldAcl.Owner.ID).toBe('2ce976687c4d75ad5a026cfc3c1f0397e39a0df116faf88c1fd90f2faa291c8b');

        source.transferOwner(oldAcl, newAcl);
        expect(newAcl.Owner.DisplayName).toBe('user_name');
        expect(newAcl.Owner.ID).toBe('2ce976687c4d75ad5a026cfc3c1f0397e39a0df116faf88c1fd90f2faa291c8b');
    });
});

describe('S3 Bucket ACL is transferred to the new ACL, apart from allUsersURI && readAcpPermission', () => {

    test('Complete ACL with allUsersURI and no readAcpPermission is transferred to new ACL', () => {
        var newAcl = aclSkeleton;
        const oldAcl = JSON.parse('{ \
          "Owner": { "DisplayName": "user_name", "ID": "2ce976687c4d75ad5a026cfc3c1f0397e39a0df116faf88c1fd90f2faa291c8b" }, \
          "Grants":[ \
            { "Grantee": { \
                "Type": "Group", \
                "URI": "http://acs.amazonaws.com/groups/global/AllUsers" }, \
                "Permission": "READ" \
            }, \
            { "Grantee": { \
                "DisplayName": "user_name", \
                "ID": "2ce976687c4d75ad5a026cfc3c1f0397e39a0df116faf88c1fd90f2faa291c8b", \
                "Type": "CanonicalUser", \
                "URI": "http://acs.amazonaws.com/groups/global/AllUsers" }, \
                "Permission": "FULL_CONTROL" \
            } \
          ] \
        }');

        expect(oldAcl.Owner.DisplayName).toBe('user_name');
        expect(oldAcl.Owner.ID).toBe('2ce976687c4d75ad5a026cfc3c1f0397e39a0df116faf88c1fd90f2faa291c8b');

        source.transferAcl(oldAcl, newAcl);
        expect(newAcl.Owner.DisplayName).toBe('user_name');
        expect(newAcl.Owner.ID).toBe('2ce976687c4d75ad5a026cfc3c1f0397e39a0df116faf88c1fd90f2faa291c8b');
    });

    test('ACL with allUsersURI and readAcpPermission is transferred to new ACL without readAcpPermission', () => {
        var newAcl = aclSkeleton;
        const oldAcl = JSON.parse('{ "Owner": { "DisplayName": "user_name", "ID": "2ce976687c4d75ad5a026cfc3c1f0397e39a0df116faf88c1fd90f2faa291c8b" }, "Grants":[ { "Grantee": { "Type": "Group", "URI": "http://acs.amazonaws.com/groups/global/AllUsers" }, "Permission": "READ" } ] }');

        expect(oldAcl.Owner.DisplayName).toBe('user_name');
        expect(oldAcl.Owner.ID).toBe('2ce976687c4d75ad5a026cfc3c1f0397e39a0df116faf88c1fd90f2faa291c8b');

        source.transferAcl(oldAcl, newAcl);
        expect(newAcl.Owner.DisplayName).toBe('user_name');
        expect(newAcl.Owner.ID).toBe('2ce976687c4d75ad5a026cfc3c1f0397e39a0df116faf88c1fd90f2faa291c8b');
    });
});

/*
// complete ACL is transferred, apart from allUsersURI && readAcpPermission, json is well-formed.
function transferAcl(oldAcl, newAcl) {
    transferOwner(oldAcl, newAcl);

    // now, act on any grants to all users - and just copy over any other grants
    aclWas.Grants.forEach(function (grant, i) {
        if (grant.Grantee.URI == allUsersURI) {
            remediateAllUsers(grant, aclNew)
        }
        else {
            aclNew['Grants'].push(grant)
        };

    });

    return newAcl;
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

    getAclPromise.then((aclWas) => {
        transferAcl(aclWas, aclNew);
    }).then(() => {
        const putAclParams = {
            Bucket: event.resource,
            AccessControlPolicy: aclNew
        };

        let putAclPromise = s3.putBucketAcl(putAclParams).promise();
        putAclPromise.then((result) => {
            console.log('result>' + JSON.stringify(result));
        })
    }).catch((err) => {
        console.log(err, err.stack);
        callback(err, 'failed to auto-remediate', CCRuleCode);
    });

    callback(null, 'Success');
};
*/
