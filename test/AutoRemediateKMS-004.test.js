let event = {
  'resource': 'your_kms_key_id',
  'region': 'us-east-1'
}

let AutoRemediate = require('../functions/AutoRemediateKMS-004')

AutoRemediate.handler(event, {}, function (err, data) {
  console.log(err)
  console.log('data', JSON.stringify(data, null, 2))
})
