module.exports = {
  "AWS::Lambda::Function": { destination: "Function" },
  "AWS::IAM::Role": { destination: "Role" },
  "AWS::Logs::LogGroup": { destination: "Log" },
  "AWS::Lambda::Version": { desination: "Function" },
  "AWS::S3::BucketPolicy": { desination: "Policy" },
  "AWS::SQS::QueuePolicy": { desination: "Policy" },
  "AWS::SNS::Subscription": { destination: "Infrastructure" },
  "AWS::S3::Bucket": { destination: "Infrastructure" },
  "AWS::KMS::Key": { destination: "Infrastructure" },
  "AWS::KMS::Alias": { destination: "Infrastructure" },
  "AWS::SNS::Topic": { destination: "Infrastructure" },
  "AWS::SQS::Queue": { destination: "Infrastructure" }
};
