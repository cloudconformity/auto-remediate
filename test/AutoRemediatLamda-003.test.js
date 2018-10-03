let event = {
    'resource': 'auto-remediate-v1-AutoRemediateIAM-038',
    'region' : 'ap-southeast-2'
  }
  
  let AutoRemediate = require('../functions/AutoRemediateLambda-003')
  
  AutoRemediate.handler(event, {}, function (err, data) {
    console.log(err)
    console.log('data', JSON.stringify(data, null, 2))
  })
  