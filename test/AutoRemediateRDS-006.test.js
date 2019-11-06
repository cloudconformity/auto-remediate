
let event = {
  "ruleId": "RDS-006",
  "resource": "MY-RDS-INSTANCE",
  "region" : "ap-southeast-2",
  "status": "FAILURE"
}
 let AutoRemediate = require('../functions/AutoRemediateRDS-006')
 AutoRemediate.handler(event, {}, function (err, data) {
    console.log(err)
    console.log('data', JSON.stringify(data, null, 2))
})
