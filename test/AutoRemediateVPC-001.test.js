const event = {
  ruleId: 'VPC-001',
  resource: 'vpc-68c3000d',
  region: 'ap-southeast-2',
  status: 'FAILURE'
}
const AutoRemediate = require('../functions/AutoRemediateVPC-001')
AutoRemediate.handler(event, {}, function (err, data) {
  console.log(err)
  console.log('data', JSON.stringify(data, null, 2))
})
