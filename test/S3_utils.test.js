"use strict";

const utils = require('../functions/S3_utils');

const CCRuleCode = 'S3-002';
const CCRuleName = 'BucketPublicReadAcpAccess';
const readAcpPermission = "READ_ACP";
const aclSkeleton = '{"Owner":"", "Grants":[]}'; // skeleton for new permission grants

describe('S3_utils', () => {

    describe('#removeAcpPermission', () => {

        describe('when ACL grant contains READ_ACP permission', () => {
            it('is not transfered to new ACL', () => {
                var aclNew = JSON.parse(aclSkeleton);
                const readAcpGrant = JSON.parse('{ "Grantee": { "Type": "Group", "URI": "http://acs.amazonaws.com/groups/global/SomeUsers" }, "Permission": "READ_ACP" }');

                expect(readAcpGrant.Permission).toBe('READ_ACP');
                expect(utils.removeAcpPermission(readAcpGrant, aclNew)).toEqual(JSON.parse(aclSkeleton));
            });
        });

        describe('when ACL grant contains READ permission', () => {
            it('is transfered to new ACL', () => {
                var aclNew = JSON.parse(aclSkeleton);
                const readGrant = JSON.parse('{ "Grantee": { "Type": "Group", "URI": "http://acs.amazonaws.com/groups/global/AllUsers" }, "Permission": "READ" }');
                const readAcl = JSON.parse('{ "Owner":"", "Grants":[ { "Grantee": { "Type": "Group", "URI": "http://acs.amazonaws.com/groups/global/AllUsers" }, "Permission": "READ" } ] }');

                expect(readGrant.Permission).toBe('READ');
                expect(utils.removeAcpPermission(readGrant, aclNew)).toEqual(readAcl);
            });
        });

        describe('when ACL grant contains WRITE permission', () => {
            it('is transfered to new ACL', () => {
                var aclNew = JSON.parse(aclSkeleton);
                const readGrant = JSON.parse('{ "Grantee": { "Type": "Group", "URI": "http://acs.amazonaws.com/groups/global/AllUsers" }, "Permission": "WRITE" }');
                const readAcl = JSON.parse('{ "Owner":"", "Grants":[ { "Grantee": { "Type": "Group", "URI": "http://acs.amazonaws.com/groups/global/AllUsers" }, "Permission": "WRITE" } ] }');

                expect(readGrant.Permission).toBe('WRITE');
                expect(utils.removeAcpPermission(readGrant, aclNew)).toEqual(readAcl);
            });
        });

        describe('when ACL grant contains WRITE_ACP permission', () => {
            it('is transfered to new ACL', () => {
                var aclNew = JSON.parse(aclSkeleton);
                const readGrant = JSON.parse('{ "Grantee": { "Type": "Group", "URI": "http://acs.amazonaws.com/groups/global/AllUsers" }, "Permission": "WRITE_ACP" }');
                const readAcl = JSON.parse('{ "Owner":"", "Grants":[ { "Grantee": { "Type": "Group", "URI": "http://acs.amazonaws.com/groups/global/AllUsers" }, "Permission": "WRITE_ACP" } ] }');

                expect(readGrant.Permission).toBe('WRITE_ACP');
                expect(utils.removeAcpPermission(readGrant, aclNew)).toEqual(readAcl);
            });
        });
    });

    describe('#transferOwner', () => {
        describe('Bucket Owner entry', () => {
            it('is transferred to the new ACL', () => {
                var newAcl = JSON.parse(aclSkeleton);
                const oldAcl = JSON.parse('{ "Owner": { "DisplayName": "user_name", "ID": "2ce976687c4d75ad5a026cfc3c1f0397e39a0df116faf88c1fd90f2faa291c8b" }, "Grants":[ { "Grantee": { "Type": "Group", "URI": "http://acs.amazonaws.com/groups/global/AllUsers" }, "Permission": "READ" } ] }');

                expect(oldAcl.Owner.DisplayName).toBe('user_name');
                expect(oldAcl.Owner.ID).toBe('2ce976687c4d75ad5a026cfc3c1f0397e39a0df116faf88c1fd90f2faa291c8b');

                utils.transferOwner(oldAcl, newAcl);
                expect(newAcl.Owner.DisplayName).toBe('user_name');
                expect(newAcl.Owner.ID).toBe('2ce976687c4d75ad5a026cfc3c1f0397e39a0df116faf88c1fd90f2faa291c8b');
            });
        });
    });

    describe('#transferAclWithoutReadAcp', () => {

        describe('ACL with grants for allUsersURI with READ, WRITE, WRITE_ACP, READ_ACP permission', () => {
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

                utils.transferAclWithoutReadAcp(oldAcl, newAcl);
                expect(newAcl.Owner).toEqual(expectedAcl.Owner);
                expect(newAcl).toEqual(expectedAcl);
            });
        });

        describe('ACL with grants for CanonicalUser with READ_ACP permission and allUsersURI with READ_ACP permission', () => {
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

                utils.transferAclWithoutReadAcp(oldAcl, newAcl);
                expect(newAcl.Owner).toEqual(expectedAcl.Owner);
                expect(newAcl).toEqual(expectedAcl);
            });
        });
    });
});
