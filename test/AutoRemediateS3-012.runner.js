const event = {
  resource: 'YOUR_BUCKET_NAME'
}

const AutoRemediate = require('../functions/AutoRemediateS3-012')

AutoRemediate.handler(event, {}, function (err, data) {
  console.log(err)
  console.log('data', JSON.stringify(data, null, 2))
})
