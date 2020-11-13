const event = {
  resource: 'my-db-snapshot',
  region: 'ap-southeast-2b'
}

const AutoRemediate = require('../functions/AutoRemediateRDS-023')

AutoRemediate.handler(event, {}, function (err, data) {
  console.log(err)
  console.log('data', JSON.stringify(data, null, 2))
})
