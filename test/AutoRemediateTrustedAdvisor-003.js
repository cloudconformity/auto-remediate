let event = {
  "ruleId": "TrustedAdvisor-003",
  "resource": "your_aws_key_id",
  "region" : "ap-southeast-2",
  "status": "FAILURE"
}


let AutoRemediate = require('../functions/AutoRemediateTrustedAdvisor-003')

AutoRemediate.handler(event, {}, function (err, data) {
	console.log(err)
	console.log('data', JSON.stringify(data, null, 2))
})
