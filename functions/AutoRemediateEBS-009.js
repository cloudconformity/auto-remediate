const { EC2Client, ModifySnapshotAttributeCommand } = require('@aws-sdk/client-ec2')
/**
* Lambda function enforce Elastic Block Store (EBS) volume snapshots not to be public
*
*/
const handler = async (event, context, callback) => {
  console.log('Publicly Accessible EBS Snapshot  - Received event:', JSON.stringify(event, null, 2))
  if (!event || !event.resource || !event.region) {
    return handleError('Invalid event')
  }

  const params = {
    SnapshotId: event.resource,
    Attribute: 'createVolumePermission',
    OperationType: 'remove',
    GroupNames: [
      'all'
    ]

  }

  const EC2 = new EC2Client({ region: event.region })

  try {
    const result = await EC2.send(new ModifySnapshotAttributeCommand(params))
    console.log('Result', result)
    return 'Successfully processed event'
  } catch (err) {
    console.log('Error', err)
    return handleError(err.message ? err.message : 'Failed to modify DB Instance')
  }

  function handleError (message) {
    message = message || 'Failed to process request.'
    throw new Error(message)
  }
}

module.exports = { handler }
