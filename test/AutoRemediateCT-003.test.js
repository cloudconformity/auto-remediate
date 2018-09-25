
let event = {
    "ruleId": "CT-003",
    "resource": "cloudtrail-global-logging-s3-bucket",
    "region" : "ap-southeast-2",
    "status": "FAILURE"
  }
   let AutoRemediate = require('../functions/AutoRemediateCT-003')
   AutoRemediate.handler(event, {}, function (err, data) {
      console.log(err)
      console.log('data', JSON.stringify(data, null, 2))
  })
