let event = {
    "ruleId": "SQS-004",
    "resource": "https://sqs.ap-southeast-2.amazonaws.com/12345678/mysqs",
    "region" : "ap-southeast-2",
    "status": "FAILURE"
  }
   let AutoRemediate = require('../functions/AutoRemediateSQS-004')
   AutoRemediate.handler(event, {}, function (err, data) {
      console.log(err)
      console.log('data', JSON.stringify(data, null, 2))
  })
