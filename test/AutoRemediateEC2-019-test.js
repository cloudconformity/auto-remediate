let event = {
  "resource": "ami-0afd9aa15c54e1210",
  "region": "ap-southeast-2"
}

let AutoRemediate = require('../functions/AutoRemediateEC2-019')

AutoRemediate.handler(event, {}, function (err, data) {
  console.log(err)
  console.log('data', JSON.stringify(data, null, 2))
})
