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

const eventString = '{"id": "ccc:HJzFMHchx:S3-001:S3:ap-southeast-2:test.datablaize.io", \
  "organisationId": "HJdoJr9hx", \
  "accountId": "HJzFMHchx", \
  "ruleId": "S3-002", \
  "ruleTitle": "S3 Bucket Public \'READ_ACP\' Access", \
  "service": "S3", \
  "region": "ap-southeast-2", \
  "riskLevel": "VERY_HIGH", \
  "categories": [ \
    "security" \
  ], \
  "compliances": [ \
    "AWAF" \
  ], \
  "message": "Bucket test.datablaize.io allows public \'READ_ACP\' access.", \
  "resource": "test.datablaize.io", \
  "status": "FAILURE", \
  "statusRiskLevel": "FAILURE:1", \
  "lastUpdatedDate": null, \
  "lastUpdatedBy": "SYSTEM", \
  "resolvedBy": "SYSTEM", \
  "eventId": "Skzp7ra1WW", \
  "ccrn": "ccrn:aws:HJzFMHchx:S3:global:test.datablaize.io", \
  "tags": [], \
  "cost": 0, \
  "waste": 0, \
  "lastModifiedDate": 1511060191925, \
  "lastModifiedBy": "SYSTEM" }' ;

function errorCallback(msg) {
  console.log(msg);
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
    // TODO - create sample event
    let sampleEvent = {
        resource: 'foo',
        ruleId: "S3-002"
    }


    let getBucketAclMock = jest.fn().mockImplementation( () => {

        return {
            // TODO - fill in expected S3 response
        }

    })

    beforeEach( (done) => {
        AWS.mock('S3', "getBucketAcl", getBucketAclMock)
        const mockCallback = (err,data) => {
            if(err){
                done.fail()
            }else{
                done()
            }
        }
        source.handler(sampleEvent, jest.fn(), mockCallback)
    } )

    afterEach( () => {
        AWS.restore()
    })

    it('should get the correct bucket ACL from S3', () => {
        expect(getBucketAclMock).toHaveBeenCalled()
        fail('todo - check S3 service called as expected')
    })
});
