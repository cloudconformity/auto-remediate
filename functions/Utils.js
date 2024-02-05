const { STSClient, GetCallerIdentityCommand } = require('@aws-sdk/client-sts')

module.exports = {
  /**
   * <b>Returns AWS Account ID whose credentials are used to call the API</b>
   *
   */
  getAccountId: async function () {
    const STS = new STSClient({ apiVersion: '2011-06-15' })

    const { Account: account } = await STS.send(new GetCallerIdentityCommand({}))
    return account
  }
}
