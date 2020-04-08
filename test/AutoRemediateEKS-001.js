let event = {
  'resource': 'EKS-TEST',
  'region': 'us-east-1'
}

let AutoRemediate = require('../functions/AutoRemediateEKS-001')

AutoRemediate.handler(event, {}, function (err, data) {
  console.log(err)
  console.log('data', JSON.stringify(data, null, 2))
})
