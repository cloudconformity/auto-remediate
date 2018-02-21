const AWS = require('aws-sdk')

function revokeSecurityGroupAccess (protocol, port, resource, region) {
  let params = {
    GroupId: resource,
    IpPermissions: [
      {
        FromPort: port,
        ToPort: port,
        IpProtocol: protocol,
        IpRanges: [{ CidrIp: '0.0.0.0/0' }]
      },
      {
        FromPort: port,
        ToPort: port,
        IpProtocol: protocol,
        Ipv6Ranges: [{ CidrIpv6: '::/0' }]
      }
    ]
  }

  let ec2 = new AWS.EC2({ region: region })

  ec2.revokeSecurityGroupIngress(params, function (err, result) {
    if (err) {
      throw err
    }

    console.log('Result', result)
    return result
  })
}

exports.revoke = revokeSecurityGroupAccess
