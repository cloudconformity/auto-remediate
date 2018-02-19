"use strict";

const source = require('../functions/AutoRemediateS3-002');

//const config = require('./config');
const AWS = require("aws-sdk");

const CCRuleCode = 'S3-002';
const CCRuleName = 'BucketPublicReadAcpAccess';
const allUsersURI = 'http://acs.amazonaws.com/groups/global/AllUsers';
const readAcpPermission = "READ_ACP";
const aclSkeleton = '{"Owner":"", "Grants":[]}'; // skeleton for new permission grants

function errorCallback(msg) {
  console.log(msg);
}

 describe('call lambda', () => {
    it('tries to call lambda', () => {
      // handler = (event, context, callback)
      source.handler("event", null, errorCallback);
    });
 });

describe('S3-002 READ_ACP auto-remediation', () => {

    describe('S3 ACL Grants shall transfer to new ACL except for READ_ACP grant', () => {

        describe('S3 ACL with READ_ACP grant', () => {
            it('is not transfered to new ACL', () => {
                var aclNew = JSON.parse(aclSkeleton);
                const readAcpGrant = JSON.parse('{ "Grantee": { "Type": "Group", "URI": "http://acs.amazonaws.com/groups/global/SomeUsers" }, "Permission": "READ_ACP" }');

                expect(readAcpGrant.Permission).toBe('READ_ACP');
                expect(source.removeAcpPermission(readAcpGrant, aclNew)).toEqual(JSON.parse(aclSkeleton));
            });
        });

        describe('S3 ACL with READ grant', () => {
            it('is transfered to new ACL', () => {
                var aclNew = JSON.parse(aclSkeleton);
                const readGrant = JSON.parse('{ "Grantee": { "Type": "Group", "URI": "http://acs.amazonaws.com/groups/global/AllUsers" }, "Permission": "READ" }');
                const readAcl = JSON.parse('{ "Owner":"", "Grants":[ { "Grantee": { "Type": "Group", "URI": "http://acs.amazonaws.com/groups/global/AllUsers" }, "Permission": "READ" } ] }');

                expect(readGrant.Permission).toBe('READ');
                expect(source.removeAcpPermission(readGrant, aclNew)).toEqual(readAcl);
            });
        });

        describe('S3 ACL with WRITE grant', () => {
            it('is transfered to new ACL', () => {
                var aclNew = JSON.parse(aclSkeleton);
                const readGrant = JSON.parse('{ "Grantee": { "Type": "Group", "URI": "http://acs.amazonaws.com/groups/global/AllUsers" }, "Permission": "WRITE" }');
                const readAcl = JSON.parse('{ "Owner":"", "Grants":[ { "Grantee": { "Type": "Group", "URI": "http://acs.amazonaws.com/groups/global/AllUsers" }, "Permission": "WRITE" } ] }');

                expect(readGrant.Permission).toBe('WRITE');
                expect(source.removeAcpPermission(readGrant, aclNew)).toEqual(readAcl);
            });
        });

        describe('S3 ACL with WRITE_ACP grant', () => {
            it('is transfered to new ACL', () => {
                var aclNew = JSON.parse(aclSkeleton);
                const readGrant = JSON.parse('{ "Grantee": { "Type": "Group", "URI": "http://acs.amazonaws.com/groups/global/AllUsers" }, "Permission": "WRITE_ACP" }');
                const readAcl = JSON.parse('{ "Owner":"", "Grants":[ { "Grantee": { "Type": "Group", "URI": "http://acs.amazonaws.com/groups/global/AllUsers" }, "Permission": "WRITE_ACP" } ] }');

                expect(readGrant.Permission).toBe('WRITE_ACP');
                expect(source.removeAcpPermission(readGrant, aclNew)).toEqual(readAcl);
            });
        });
    });

    describe('S3 Bucket Owner entry will transfer to the new ACL', () => {
        describe('S3 Bucket Owner entry with DisplayName and ID', () => {
            it('is transferred to the new ACL', () => {
                var newAcl = JSON.parse(aclSkeleton);
                const oldAcl = JSON.parse('{ "Owner": { "DisplayName": "user_name", "ID": "2ce976687c4d75ad5a026cfc3c1f0397e39a0df116faf88c1fd90f2faa291c8b" }, "Grants":[ { "Grantee": { "Type": "Group", "URI": "http://acs.amazonaws.com/groups/global/AllUsers" }, "Permission": "READ" } ] }');

                expect(oldAcl.Owner.DisplayName).toBe('user_name');
                expect(oldAcl.Owner.ID).toBe('2ce976687c4d75ad5a026cfc3c1f0397e39a0df116faf88c1fd90f2faa291c8b');

                source.transferOwner(oldAcl, newAcl);
                expect(newAcl.Owner.DisplayName).toBe('user_name');
                expect(newAcl.Owner.ID).toBe('2ce976687c4d75ad5a026cfc3c1f0397e39a0df116faf88c1fd90f2faa291c8b');
            });
        });
    });

    describe('S3 Bucket ACL shall transfer to the new ACL, apart from grant for allUsersURI with READ_ACP permission', () => {

        describe('S3 Bucket ACL with grants for allUsersURI with READ, WRITE, WRITE_ACP, READ_ACP permission', () => {
            it('is transferred to new ACL with grant for allUsersURI with READ, WRITE, WRITE_ACP permission but without allUsersURI with READ_ACP permission', () => {
                var newAcl = JSON.parse(aclSkeleton);
                const oldAcl = JSON.parse('{ \
                    "Owner": { "DisplayName": "user_name", "ID": "2ce976687c4d75ad5a026cfc3c1f0397e39a0df116faf88c1fd90f2faa291c8b" }, \
                    "Grants":[ \
                        { "Grantee": { \
                            "Type": "Group", \
                            "URI": "http://acs.amazonaws.com/groups/global/AllUsers" \
                          }, \
                          "Permission": "READ" \
                        }, \
                        { "Grantee": { \
                            "Type": "Group", \
                            "URI": "http://acs.amazonaws.com/groups/global/AllUsers" \
                          }, \
                          "Permission": "WRITE" \
                        }, \
                        { "Grantee": { \
                            "Type": "Group", \
                            "URI": "http://acs.amazonaws.com/groups/global/AllUsers" \
                          }, \
                          "Permission": "WRITE_ACP" \
                        }, \
                        { "Grantee": { \
                            "Type": "Group", \
                            "URI": "http://acs.amazonaws.com/groups/global/AllUsers" \
                          }, \
                          "Permission": "READ_ACP" \
                        } \
                    ] \
                }');

                const expectedAcl = JSON.parse('{ \
                    "Owner": { "DisplayName": "user_name", "ID": "2ce976687c4d75ad5a026cfc3c1f0397e39a0df116faf88c1fd90f2faa291c8b" }, \
                    "Grants":[ \
                        { "Grantee": { \
                            "Type": "Group", \
                            "URI": "http://acs.amazonaws.com/groups/global/AllUsers" \
                          }, \
                          "Permission": "READ" \
                        }, \
                        { "Grantee": { \
                            "Type": "Group", \
                            "URI": "http://acs.amazonaws.com/groups/global/AllUsers" \
                          }, \
                          "Permission": "WRITE" \
                        }, \
                        { "Grantee": { \
                            "Type": "Group", \
                            "URI": "http://acs.amazonaws.com/groups/global/AllUsers" \
                          }, \
                          "Permission": "WRITE_ACP" \
                        } \
                    ] \
                }');

                expect(oldAcl.Owner.DisplayName).toBe('user_name');
                expect(oldAcl.Owner.ID).toBe('2ce976687c4d75ad5a026cfc3c1f0397e39a0df116faf88c1fd90f2faa291c8b');

                source.transferAcl(oldAcl, newAcl);
                expect(newAcl.Owner).toEqual(expectedAcl.Owner);
                expect(newAcl).toEqual(expectedAcl);
            });
        });

        describe('S3 Bucket ACL with grants for CanonicalUser with READ_ACP permission and allUsersURI with READ_ACP permission', () => {
            it('is transferred to new ACL with grants for CanonicalUser with READ_ACP permission only', () => {
                var newAcl = JSON.parse(aclSkeleton);
                const oldAcl = JSON.parse('{ \
                    "Owner": { "DisplayName": "user_name", "ID": "2ce976687c4d75ad5a026cfc3c1f0397e39a0df116faf88c1fd90f2faa291c8b" }, \
                    "Grants":[ \
                        { "Grantee": { \
                            "Type": "Group", \
                            "URI": "http://acs.amazonaws.com/groups/global/AllUsers" \
                          }, \
                          "Permission": "READ_ACP" \
                        }, \
                        { "Grantee": { \
                            "DisplayName": "user_name", \
                            "ID": "2ce976687c4d75ad5a026cfc3c1f0397e39a0df116faf88c1fd90f2faa291c8b", \
                            "Type": "CanonicalUser" \
                          }, \
                          "Permission": "READ_ACP" \
                        } \
                    ] \
                }');

                const expectedAcl = JSON.parse('{ \
                    "Owner": { "DisplayName": "user_name", "ID": "2ce976687c4d75ad5a026cfc3c1f0397e39a0df116faf88c1fd90f2faa291c8b" }, \
                    "Grants":[ \
                        { "Grantee": { \
                            "DisplayName": "user_name", \
                            "ID": "2ce976687c4d75ad5a026cfc3c1f0397e39a0df116faf88c1fd90f2faa291c8b", \
                            "Type": "CanonicalUser" \
                          }, \
                          "Permission": "READ_ACP" \
                         } \
                    ] \
                }');

                expect(oldAcl.Owner.DisplayName).toBe('user_name');
                expect(oldAcl.Owner.ID).toBe('2ce976687c4d75ad5a026cfc3c1f0397e39a0df116faf88c1fd90f2faa291c8b');

                source.transferAcl(oldAcl, newAcl);
                expect(newAcl.Owner).toEqual(expectedAcl.Owner);
                expect(newAcl).toEqual(expectedAcl);
            });
        });
    });
});

/*
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
