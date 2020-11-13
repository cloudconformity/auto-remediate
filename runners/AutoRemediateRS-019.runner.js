const event = {
  resource: 'YOUR_RS_CLUSTER_ID',
  region: 'us-east-1'
}

const AutoRemediate = require('../functions/AutoRemediateRS-019')

AutoRemediate.handler(event, {}, function (err, data) {
  console.log(err)
  console.log('data', JSON.stringify(data, null, 2))
})
