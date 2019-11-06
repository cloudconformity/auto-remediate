
let event = {
    'resource': 'privatetest2',
    'region' : 'ap-southeast-2'
  }
  
  let AutoRemediate = require('../functions/AutoRemediateS3-014')
  
  AutoRemediate.handler(event, {}, function (err, data) {
    console.log(err)
    console.log('data', JSON.stringify(data, null, 2))
  })
