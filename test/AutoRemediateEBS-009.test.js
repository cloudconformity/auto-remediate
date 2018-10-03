let event = {
  'resource': 'snap-41df37a1',
  'region': 'us-east-1'
}

let AutoRemediate = require('../functions/AutoRemediateEBS-009')

AutoRemediate.handler(event, {}, function (err, data) {
  console.log(err)
  console.log('data', JSON.stringify(data, null, 2))
})
