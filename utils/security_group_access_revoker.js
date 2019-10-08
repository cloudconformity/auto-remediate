const AWS = require("aws-sdk");

const revokeSecurityGroupAccess = (protocol, port, resource, region, callback) => {
  let ec2 = new AWS.EC2({ region: region });

  let params = {
    GroupId: resource,
    IpPermissions: [
      {
        FromPort: port,
        ToPort: port,
        IpProtocol: protocol,
        IpRanges: [{ CidrIp: "0.0.0.0/0" }]
      }
    ]
  };

  return ec2
    .revokeSecurityGroupIngress(params)
    .promise()
    .then(data => {
      console.log("Revoking %s, %s on 0.0.0.0/0 succeeded");
      console.log(data);
    })
    .catch(err => {
      console.log("Revoking %s, %s on 0.0.0.0/0 failed");
      console.error(err);
    })
    .then(() => {
      let params = {
        GroupId: resource,
        IpPermissions: [
          {
            FromPort: port,
            ToPort: port,
            IpProtocol: protocol,
            IpRanges: [{ CidrIp: "::/0" }]
          }
        ]
      };

      return ec2.revokeSecurityGroupIngress(params).promise();
    })
    .then(data => {
      console.log("Revoking %s, %s on ::/0 succeeded");
      console.log(data);
    })
    .catch(err => {
      console.log("Revoking %s, %s on ::/0 failed");
      console.error(err);
    })
    .then(() => {
      callback(null, "done");
    });
};

exports.revoke = revokeSecurityGroupAccess;
