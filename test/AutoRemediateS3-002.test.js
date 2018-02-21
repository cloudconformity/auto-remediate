"use strict";

const source = require('../functions/AutoRemediateS3-002');
//const  utils = require('../functions/S3_utils');
var AWS = require('aws-sdk-mock');

//const config = require('./config');
//const AWS = require("aws-sdk");

const CCRuleCode = 'S3-002';
const CCRuleName = 'BucketPublicReadAcpAccess';
//const allUsersURI = 'http://acs.amazonaws.com/groups/global/AllUsers';
const readAcpPermission = "READ_ACP";
const aclSkeleton = '{"Owner":"", "Grants":[]}'; // skeleton for new permission grants

const sampleEvent = {id: "ccc:HJzFMHchx:S3-001:S3:ap-southeast-2:sample-bucket", 
  organisationId: "some-organisation", 
  accountId: "abcdef", 
  ruleId: "S3-002", 
  ruleTitle: "S3 Bucket Public 'READ_ACP' Access", 
  service: "S3", 
  region: "ap-southeast-2", 
  riskLevel: "VERY_HIGH", 
  categories: [ 
    "security" 
  ], 
  compliances: [ 
    "AWAF" 
  ], 
  message: "Bucket sample-bucket allows public 'READ_ACP' access.", 
  resource: "sample-bucket", 
  status: "FAILURE", 
  statusRiskLevel: "FAILURE:1", 
  lastUpdatedDate: null, 
  lastUpdatedBy: "SYSTEM", 
  resolvedBy: "SYSTEM", 
  eventId: "Skzp7ra1WW", 
  ccrn: "ccrn:aws:HJzFMHchx:S3:global:sample-bucket", 
  tags: [], 
  cost: "0", 
  waste: "0", 
  lastModifiedDate: "1511060191925", 
  lastModifiedBy: "SYSTEM" } 

function errorCallback(msg) {
    console.log(msg);
}

let awsMockCallback = (jestFn) => {
    return function(params,callback){
        try{
            let result = jestFn(params, callback)
            callback(null,result)
        }catch(err){
            callback(err) 
        }
    }
}

/*
 describe('call lambda', () => {
    it('tries to call lambda', () => {
      AWS.mock('S3', 'getBucketAcl', "return from getBucketAcl");

      // handler = (event, context, callback)
      source.handler(JSON.parse(eventString), null, errorCallback);
    });
 });
*/

describe('S3-002#handler()', () => {
    let getBucketAclMock

    beforeEach((done) => {
        getBucketAclMock = jest.fn().mockImplementation(() => {
            console.log('returning stuff')
            return {
                Owner: {
                    DisplayName: "user_name", ID: "account_user_id123455667890abcdef"
                }, Grants: [
                    {
                        Grantee: {
                            DisplayName: "user_name", ID: "account_user_id123455667890abcdef", Type: "CanonicalUser"
                        }, Permission: "FULL_CONTROL"
                    },
                    {
                        Grantee: { Type: "Group", URI: "http://acs.amazonaws.com/groups/global/AllUsers" }, Permission: "READ_ACP"
                    },
                    {
                        Grantee: { Type: "Group", URI: "http://acs.amazonaws.com/groups/global/AllUsers" }, Permission: "READ"
                    }
                ]
            }
    
        })

        AWS.mock('S3', "getBucketAcl", awsMockCallback(getBucketAclMock))
        const mockCallback = (err, data) => {
            if (err) {
                done.fail()
            } else {
                done()
            }
        }
        source.handler(sampleEvent, jest.fn(), mockCallback)
    })

    afterEach(() => {
        AWS.restore()
    })

    it('should get the correct bucket ACL from S3', () => {
        let expectedParams = {
            Bucket: "sample-bucket"
        }
        expect(getBucketAclMock).toHaveBeenCalledWith(expectedParams, expect.any(Function))
    })
});
