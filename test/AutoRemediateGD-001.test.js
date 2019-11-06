let event = {
	"ruleId": "GD-001",
	"region": "us-east-1",
	"status": "FAILURE"
}

let AutoRemediate = require('../functions/AutoRemediateGD-001')

AutoRemediate.handler(event, {}, function (err, data) {
	console.log(err)
	console.log('data', JSON.stringify(data, null, 2))
})
