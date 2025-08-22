const { EC2Client, RevokeSecurityGroupEgressCommand, DescribeSecurityGroupRulesCommand } = require('@aws-sdk/client-ec2')

const ANY_IPV4 = '0.0.0.0/0'
const ANY_IPV6 = '::/0'
// Removes all egress rules from a security group that allows any IPV4 or IPV6.
module.exports.handler = async (event) => {
  console.log('UnrestrictedEgress - Received event:', JSON.stringify(event, null, 2))

  if (!event || !event.resource || !event.region) {
    throw new Error('invalid event')
  }

  const region = event.region
  const groupId = event.resource

  try {
    const ec2 = new EC2Client({ region: region })
    const describeResponse = await ec2.send(new DescribeSecurityGroupRulesCommand({
      Filters: [
        {
          Name: 'group-id',
          Values: [
            groupId
          ]
        }
      ]
    }))

    const offendingRuleIds = describeResponse.SecurityGroupRules
      .filter((rule) => rule.IsEgress === true)
      .filter((rule) => rule.CidrIpv4 === ANY_IPV4 || rule.CidrIpv6 === ANY_IPV6)
      .map((rule) => rule.SecurityGroupRuleId)
      .filter((id) => id !== undefined)

    if (offendingRuleIds.length === 0) {
      return 'done'
    }

    const delResponse = await ec2.send(new RevokeSecurityGroupEgressCommand({
      GroupId: groupId,
      SecurityGroupRuleIds: offendingRuleIds
    }))

    console.log(delResponse)
  } catch (err) {
    console.log(err)
  }
  return 'done'
}
