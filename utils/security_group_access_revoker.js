const { EC2Client, RevokeSecurityGroupIngressCommand } = require('@aws-sdk/client-ec2')

const revokeSecurityGroupAccess = async (protocol, port, resource, region, callback) => {
  const ec2 = new EC2Client({ region: region })

  const params = {
    GroupId: resource,
    IpPermissions: [
      {
        FromPort: port,
        ToPort: port,
        IpProtocol: protocol,
        IpRanges: [{ CidrIp: '0.0.0.0/0' }]
      }
    ]
  }
  try {
    const revokeIngressResponse = await ec2.send(new RevokeSecurityGroupIngressCommand(params))
    console.log('Revoking %s, %s on 0.0.0.0/0 succeeded')
    console.log(revokeIngressResponse)
  } catch (err) {
    console.log('Revoking %s, %s on 0.0.0.0/0 failed')
    console.error(err)
  }

  try {
    params.IpPermissions[0].IpRanges[0].CidrIp = '::/0'
    const revokeIngressResponse = await ec2.send(new RevokeSecurityGroupIngressCommand(params))
    console.log('Revoking %s, %s on ::/0 succeeded')
    console.log(revokeIngressResponse)
  } catch (err) {
    console.log('Revoking %s, %s on ::/0 failed')
    console.error(err)
  }

  return callback(null, 'done')
}

exports.revoke = revokeSecurityGroupAccess
