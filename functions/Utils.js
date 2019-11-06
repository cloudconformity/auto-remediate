const AWS = require('aws-sdk')

module.exports = {
  /**
   * <b>Returns AWS Account ID whose credentials are used to call the API</b>
   *
   */
  getAccountId: function () {
    let STS = new AWS.STS({apiVersion: '2011-06-15'})

    return STS.getCallerIdentity({}).promise().then(function (data) {
      return data.Account
    })
  }
}
