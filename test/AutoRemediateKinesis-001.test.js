let event = {
    "ruleId": "Kinesis-001",
    "resource": "mystream",
    "region" : "ap-southeast-2",
    "status": "FAILURE"
  }
   let AutoRemediate = require('../functions/AutoRemediateKinesis-001')
   AutoRemediate.handler(event, {}, function (err, data) {
      console.log(err)
      console.log('data', JSON.stringify(data, null, 2))
  })
