var AWS = require('aws-sdk-mock');
let AutoRemediate = require('../functions/AutoRemediateLambda-004')

var success_event = {
    "id": "ccc:oZX1TUZ6p:Lambda-004:Lambda:ca-central-1:auto-remediate-v1-AutoRemediateLambda-002",
    "organisationId": "9bZA_h76p",
    "accountId": "oZX1TUZ6p",
    "ruleId": "Lambda-004",
    "ruleTitle": "Function Exposed",
    "link": "https://ca-central-1.console.aws.amazon.com/lambda/home?region=ca-central-1#/functions/auto-remediate-v1-AutoRemediateLambda-002",
    "service": "Lambda",
    "region": "ca-central-1",
    "riskLevel": "HIGH",
    "categories": [
        "security"
    ],
    "compliances": [
        "PCI",
        "GDPR",
        "APRA",
        "MAS",
        "AWAF"
    ],
    "message": "Lambda Function auto-remediate-v1-AutoRemediateLambda-002 is not exposed to everyone",
    "resource": "auto-remediate-v1-AutoRemediateLambda-002",
    "descriptorType": "lambda-function",
    "resourceName": "Lambda Function",
    "status": "SUCCESS",
    "lastStatusUpdateDate": 1561245568439,
    "eventId": "jcxkW9YswCwh_fbJy-aH",
    "ccrn": "ccrn:aws:oZX1TUZ6p:Lambda:ca-central-1:auto-remediate-v1-AutoRemediateLambda-002",
    "tags": [],
    "cost": null,
    "waste": null,
    "lastModifiedDate": 1561245577401,
"lastModifiedBy": "SYSTEM",
    "createdDate": 1561245568439,
    "createdBy": "SYSTEM",
    "resolutionPageURL": "https://www.cloudconformity.com/conformity-rules/Lambda/function-exposed.html#9bZA_h76p"
}

var failure_event = {
    "id": "ccc:oZX1TUZ6p:Lambda-004:Lambda:ca-central-1:Lambda-004",
    "organisationId": "9bZA_h76p",
    "accountId": "oZX1TUZ6p",
    "ruleId": "Lambda-004",
    "ruleTitle": "Function Exposed",
    "link": "https://ca-central-1.console.aws.amazon.com/lambda/home?region=ca-central-1#/functions/Lambda-004",
    "service": "Lambda",
    "region": "ca-central-1",
    "riskLevel": "HIGH",
    "categories": [
        "security"
    ],
    "compliances": [
        "PCI",
        "GDPR",
        "APRA",
        "MAS",
        "AWAF"
    ],
    "message": "Lambda Function Lambda-004 has [lambda:Invoke] permissions granted to everyone",
    "resource": "AutoRemediateOrchestrator",
    "descriptorType": "lambda-function",
    "resourceName": "Lambda Function",
    "status": "FAILURE",
    "lastUpdatedDate": 1561232578000,
    "lastUpdatedBy": null,
    "failureDiscoveryDate": 1561233332308,
    "failureIntroducedBy": null,
    "lastStatusUpdateDate": 1561233332308,
    "eventId": "MENbTDa0EFCvPTbRS-P",
    "ccrn": "ccrn:aws:oZX1TUZ6p:Lambda:ca-central-1:Lambda-004",
    "tags": [],
    "cost": 0,
    "waste": 0,
    "lastModifiedDate": 1561233332308,
    "lastModifiedBy": "SYSTEM",
    "createdDate": 1561232615293,
    "createdBy": "SYSTEM",
    "resolutionPageURL": "https://www.cloudconformity.com/conformity-rules/Lambda/function-exposed.html#9bZA_h76p"
}
var context = {
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

describe("Run failure event received test", () => {
    it("run", async() => {
        let data = await AutoRemediate.handler(failure_event, context, function(err,data){
        
        })
        console.log(data)
    })
})

AWS.restore()