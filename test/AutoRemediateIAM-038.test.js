const event = {
  resource: 'AKIA----------------'
}

const AutoRemediate = require('../functions/AutoRemediateIAM-038')

AutoRemediate.handler(event, {}, function (err, data) {
  console.log(err)
  console.log('data', JSON.stringify(data, null, 2))
})
