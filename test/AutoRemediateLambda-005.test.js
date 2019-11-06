var AWS = require('aws-sdk-mock');


let success_event = {
  "id": "ccc:oZX1TUZ6p:Lambda-005:Lambda:ca-central-1:PranaysOpenLambda",
  "organisationId": "9bZA_h76p",
  "accountId": "oZX1TUZ6p",
  "ruleId": "Lambda-005",
  "ruleTitle": "Lambda Function With Admin Privileges",
  "service": "Lambda",
  "region": "ca-central-1",
  "riskLevel": "MEDIUM",
  "categories": [
      "security"
  ],
  "compliances": [
      "PCI",
      "APRA",
      "MAS",
      "AWAF",
      "NIST4"
  ],
  "message": "Lambda Function PranaysOpenLambda does not have full admin privileges",
  "resource": "PranaysOpenLambda",
  "status": "SUCCESS",
  "notScored": false,
  "lastStatusUpdateDate": 1561226215539,
  "ccrn": "ccrn:aws:oZX1TUZ6p:Lambda:ca-central-1:PranaysOpenLambda",
  "tags": [],
  "cost": 0,
  "waste": 0,
  "lastModifiedDate": 1561226215539,
  "lastModifiedBy": "SYSTEM",
  "createdDate": 1561226215539,
  "createdBy": "SYSTEM",
  "resolutionPageURL": "https://www.cloudconformity.com/conformity-rules/Lambda/function-with-admin-privileges.html#9bZA_h76p"
}
let context = {
  "callbackWaitsForEmptyEventLoop": true,
  "logGroupName": "/aws/lambda/auto-remediate-v1-AutoRemediateLambda-005",
  "logStreamName": "2019/06/22/[$LATEST]8c7efe50746e49c99520477e53997273",
  "functionName": "auto-remediate-v1-AutoRemediateLambda-005",
  "memoryLimitInMB": "128",
  "functionVersion": "$LATEST",
  "invokeid": "f8597f1a-dc45-4532-af51-478850ace90e",
  "awsRequestId": "f8597f1a-dc45-4532-af51-478850ace90e",
  "invokedFunctionArn": "arn:aws:lambda:ca-central-1:936214665790:function:auto-remediate-v1-AutoRemediateLambda-005"
}

let failure_event = {
  "id": "ccc:oZX1TUZ6p:Lambda-005:Lambda:ca-central-1:Lambda-004",
  "organisationId": "9bZA_h76p",
  "accountId": "oZX1TUZ6p",
  "ruleId": "Lambda-005",
  "ruleTitle": "Lambda Function With Admin Privileges",
  "service": "Lambda",
  "region": "ca-central-1",
  "riskLevel": "MEDIUM",
  "categories": [
      "security"
  ],
  "compliances": [
      "PCI",
      "APRA",
      "MAS",
      "AWAF",
      "NIST4"
  ],
  "message": "Lambda Function Lambda-004 has full admin privileges",
  "resource": "Lambda-004",
  "status": "FAILURE",
  "notScored": false,
  "failureDiscoveryDate": 1561233492557,
  "lastStatusUpdateDate": 1561233492557,
  "ccrn": "ccrn:aws:oZX1TUZ6p:Lambda:ca-central-1:Lambda-004",
  "tags": [],
  "cost": 0,
  "waste": 0,
  "lastModifiedDate": 1561233492557,
  "lastModifiedBy": "SYSTEM",
  "createdDate": 1561233492557,
  "createdBy": "SYSTEM",
  "resolutionPageURL": "https://www.cloudconformity.com/conformity-rules/Lambda/function-with-admin-privileges.html#9bZA_h76p"
}
  let AutoRemediate = require('../functions/AutoRemediateLambda-005')

  // describe("Run basic test", function() {
  //   it("run", function(){
  //     AutoRemediate.handler(success_event, context, function(err,data){
  //       console.log(err)
  //       console.log('data', JSON.stringify(data, null, 2))
  //     })
  //   })
  // })

  describe("Run Failure event received test", function() {
    it("run", async() => {
      data = await AutoRemediate.handler(failure_event, context, function(err,data){
        console.log(err)
        console.log('data', JSON.stringify(data, null, 2))
      })
      console.log(data)
    })
  })

  AWS.restore()