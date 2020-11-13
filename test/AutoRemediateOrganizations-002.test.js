const event = {

}

const AutoRemediate = require('../functions/AutoRemediateOrganizations-002')

AutoRemediate.handler(event, {}, function (err, data) {
  console.log(err)
  console.log('data', JSON.stringify(data, null, 2))
})
