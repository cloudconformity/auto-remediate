"use strict";
const source = require('../functions/AutoRemediateS3-002.js');

//const config = require('./config');
const AWS = require("aws-sdk");

const CCRuleCode = 'S3-002';
const CCRuleName = 'BucketPublicReadAcpAccess';
const allUsersURI = 'http://acs.amazonaws.com/groups/global/AllUsers';
const readAcpPermission = "READ_ACP";
const aclSkeleton = JSON.parse('{"Owner":"", "Grants":[]}'); // skeleton for new permission grants

describe('S3 ACL Grant transfer to new ACL for READ_ACP grant for allUsersURI group', () => 
{
    test('S3 ACL READ_ACP grant is transfered to new ACL if not from allUsersURI', () => 
    {
        var aclNew = aclSkeleton;
        const readAcpGrant = JSON.parse('{ "Grantee": { "Type": "Group", "URI": "http://acs.amazonaws.com/groups/global/SomeUsers" }, "Permission": "READ_ACP" }');

        expect( readAcpGrant.Permission ).toBe( 'READ_ACP' );
        expect(source.remediateAllUsers( readAcpGrant, aclNew ) ).toEqual( aclSkeleton );
    });

    test('S3 ACL READ_ACP grant is not transfered to new ACL if from allUsersURI', () => 
    {
        var aclNew = aclSkeleton;
        const readAcpGrant = JSON.parse('{ "Grantee": { "Type": "Group", "URI": "http://acs.amazonaws.com/groups/global/AllUsers" }, "Permission": "READ_ACP" }');

        expect( readAcpGrant.Permission ).toBe( 'READ_ACP' );
        expect(source.remediateAllUsers( readAcpGrant, aclNew ) ).toEqual( aclSkeleton );
    });

    test('S3 ACL READ grant is transfered to new ACL if from allUsersURI', () => 
    {
        var aclNew = aclSkeleton;
        const readGrant = JSON.parse('{ "Grantee": { "Type": "Group", "URI": "http://acs.amazonaws.com/groups/global/AllUsers" }, "Permission": "READ" }');
        const readAcl = JSON.parse('{ "Owner":"", "Grants":[ { "Grantee": { "Type": "Group", "URI": "http://acs.amazonaws.com/groups/global/AllUsers" }, "Permission": "READ" } ] }');

        expect( readGrant.Permission ).toBe( 'READ' );
        expect(source.remediateAllUsers( readGrant, aclNew ) ).toEqual( readAcl );
        //console.log( JSON.stringify( readAcl ) );
    });
});

/*
// all grants aside from allUsersURI && readAcpPermission are transferred, json is well-formed.
function remediateAllUsers(thisGrant, newAcl) 
{
    if (thisGrant.Permission != readAcpPermission) {
        // any besides READ are passed through
        newAcl['Grants'].push(thisGrant);
    }

    return newAcl;
}

// check that the owner has been transferred - DisplayName & ID, that the json is well-formed?
function transferOwner(oldAcl, newAcl) 
{
    aclNew.Owner = aclWas.Owner;

    // transfer the existing bucket owner
    return newAcl;
}

// complete ACL is transferred, apart from allUsersURI && readAcpPermission, json is well-formed.
function transferAcl(oldAcl, newAcl) 
{
    transferOwner(oldAcl, newAcl);

    // now, act on any grants to all users - and just copy over any other grants
    aclWas.Grants.forEach( function ( grant, i ) {
        if ( grant.Grantee.URI == allUsersURI ) {
            remediateAllUsers( grant, aclNew ) 
        }
        else {
            aclNew['Grants'].push( grant ) 
        };

    } );

    return newAcl;
}

// look for and remove S3BucketPublicReadAccess
module.exports.handler = (event, context, callback) => 
{
    console.log('S3', CCRuleName, ' - Received event:', JSON.stringify(event, null, 2));

    if (!event || !event.resource || event.ruleId !== CCRuleCode) {
        return handleError('Invalid event');
    }

    var s3 = new AWS.S3({ apiVersion : '2006-03-01' });

    var aclWas;
    var aclNew = JSON.parse('{"Owner":"", "Grants":[]}'); // skeleton for new permission grants

    var getAclParams = {
        Bucket : event.resource 
    };
    let getAclPromise = s3.getBucketAcl(getAclParams).promise();

    getAclPromise .then((aclWas) => {
        transferAcl(aclWas, aclNew);
    }) .then(() => 
    {
        const putAclParams = {
            Bucket : event.resource,
            AccessControlPolicy : aclNew 
        };

        let putAclPromise = s3.putBucketAcl(putAclParams).promise();
        putAclPromise .then((result) => {
            console.log('result>' + JSON.stringify(result));
        }) 
    }) .catch ((err) => {
        console.log(err, err.stack);
        callback(err, 'failed to auto-remediate', CCRuleCode);
    });

    callback(null, 'Success');
};
*/
