
let event = {
  'resource': 'your_redshift_parmatet_group',
  'region': 'us-east-1'
}

let AutoRemediate = require('../functions/AutoRemediateRS-023')

AutoRemediate.handler(event, {}, function (err, data) {
  console.log(err)
  console.log('data', JSON.stringify(data, null, 2))
})
