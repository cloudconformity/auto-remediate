const event = {
  resource: 'YOUR_SECURITY_GROUP_NAME',
  region: 'us-east-1'
}

const AutoRemediate = require('../functions/AutoRemediateEC2-005')

AutoRemediate.handler(event, {}, function (err, data) {
  console.log(err)
  console.log('data', JSON.stringify(data, null, 2))
})
