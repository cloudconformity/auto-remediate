const {
  IAMClient,
  DeleteUserCommand,
  DeleteUserPolicyCommand,
  DeleteLoginProfileCommand,
  ListAttachedUserPoliciesCommand,
  ListUserPoliciesCommand,
  DetachUserPolicyCommand,
  ListGroupsForUserCommand,
  RemoveUserFromGroupCommand
} = require('@aws-sdk/client-iam')

const handler = async ({ region, resource }) => {
  const client = new IAMClient({ region })
  resource = resource.replace('users-', '')

  await removeUserRelatedResources(client, resource)

  const deleteUser = new DeleteUserCommand({
    UserName: resource
  })
  await client.send(deleteUser)
}

// Before deleting an IAM user we must remove the related resources.
// https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_remove.html
const removeUserRelatedResources = async (client, username) => {
  const deleteLoginProfile = new DeleteLoginProfileCommand({
    UserName: username
  })
  await client.send(deleteLoginProfile)

  const listUserPolicies = new ListUserPoliciesCommand({
    UserName: username
  })
  const listUserPoliciesResponse = await client.send(listUserPolicies)

  for (const policyName of listUserPoliciesResponse.PolicyNames) {
    const deleteUserPolicy = new DeleteUserPolicyCommand({
      UserName: username,
      PolicyName: policyName
    })
    await client.send(deleteUserPolicy)
  }

  const listAttachedPolicies = new ListAttachedUserPoliciesCommand({
    UserName: username
  })
  const listAttachedPoliciesResponse = await client.send(listAttachedPolicies)

  for (const policy of listAttachedPoliciesResponse.AttachedPolicies) {
    const detachUserPolicy = new DetachUserPolicyCommand({
      UserName: username,
      PolicyArn: policy.PolicyArn
    })
    await client.send(detachUserPolicy)
  }

  const listGroups = new ListGroupsForUserCommand({
    UserName: username
  })
  const listGroupsResponse = await client.send(listGroups)

  for (const group of listGroupsResponse.Groups) {
    const removeUserFromGroup = new RemoveUserFromGroupCommand({
      UserName: username,
      GroupName: group.GroupName
    })
    await client.send(removeUserFromGroup)
  }
}

module.exports = {
  handler
}
