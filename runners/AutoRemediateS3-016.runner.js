const event = {
  resource: 'privatetest2',
  region: 'ap-southeast-2'
}

const AutoRemediate = require('../functions/AutoRemediateS3-016')

AutoRemediate.handler(event, {}, function (err, data) {
  console.log(err)
  console.log('data', JSON.stringify(data, null, 2))
})
