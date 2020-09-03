module.exports = {
  "AWS::Lambda::Function": { destination: "Function" },
  "AWS::IAM::Role": { destination: "Role" },
  "AWS::Logs::LogGroup": { destination: "Log" },
  "AWS::Lambda::Version": { desination: "Function" },
  "AWS::S3::BucketPolicy": { desination: "Policy" },
  "AWS::SQS::QueuePolicy": { desination: "Policy" }
};
