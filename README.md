# [Cloud Conformity](https://www.cloudconformity.com/?utm_source=github) Auto Remediation

## Disclaimer
This early "Auto Remediation" is subject to change. Cloud Conformity will use commercially reasonable efforts to support the previous version of the project.
This project is provided on an ‘AS IS’ and ‘WHEN AVAILABLE’ basis.  Cloud Conformity has no liability to user as a result of any changes made to their AWS infrastructure by installing this project.

Auto Remediation is an MIT open-source project, actively maintained by Cloud Conformity team.

## How it works

The following image shows how Cloud Conformity Auto Remediation works:

![Cloud Conformity Auto Remediation](images/how-it-works.png)

Here's an example:

1. A user makes an S3 bucket publicly readable via S3 Access Control Lists (ACLs)
2. Cloud Conformity identifies the risk in real-time
3. Cloud Conformity publishes a message to the specified SNS Topic
3. SNS topic triggers the Orchestrator lambda function which in turns calls S3 bucket auto-remediate function
4. S3 BucketPublicReadAccess Auto Remediate Function (AutoRemediateS3-001) updates the S3 bucket ACL and closes the security gap


## Prerequisites
1. Install [Node.js](https://nodejs.org/en/) v18 or later.

## Installation
> Note that you need to follow the [Deleting a stack on the AWS CloudFormation console](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-console-delete-stack.html) to delete the current stack if you plan to update to the latest version.


1. Create a working copy of "Cloud Conformity Auto Remediation" repository by running the following command:
```bash
git clone https://github.com/cloudconformity/auto-remediate.git
```
2. Change directory to auto-remediation:

```bash
cd auto-remediate
```
3. `IMPORTANT` Update `functions/config.json` with required configurations. Please note that all the rules in config file are disabled by default to prevent unwanted changes. User needs to enable the ones they need manually.
4. `IMPORTANT` Make any other necessary adjustments before deployment.
5. Run `npm install` before deploying so that the node_modules folder would be available to AWS

```bash
npm install
```
6. Finally deploy

```bash
npx serverless deploy --region us-west-2
```

## Message Format

The table below gives more information about SNS Message format:

| Name  | Values |
| ------------- | ------------- |
|  organisationId | Your Cloud Conformity Organisation Id |
|  accountId | Your Cloud Conformity Account Id |
|  accountName | Your Cloud Conformity Account Name |
|  service  | AutoScaling \| CloudFormation \| CloudFront \| CloudTrail \| CloudWatch \| CloudWatchEvents \|<br />CloudWatchLogs \| Config \| DynamoDB \| EBS \| EC2 \| ElastiCache \| Elasticsearch \| ELB \| IAM \|<br />KMS \| RDS \| Redshift \| ResourceGroup \| Route53 \| S3 \| SES \| SNS \| SQS \| VPC \| WAF \|<br />ACM \| Inspector \| TrustedAdvisor \| Shield \| EMR \| Lambda \| Support \| Organizations \|<br />Kinesis \| EFS<br /><br />For more information about services, please refer to [Cloud Conformity Services Endpoint](https://us-west-2.cloudconformity.com/v1/services) |
|  region  | global \| us-east-2 \| us-east-1 \| us-west-1 \| us-west-2 \| ap-south-1 \| ap-northeast-2 \|<br />ap-southeast-1 \| ap-southeast-2 \| ap-northeast-1 \| ca-central-1 \| eu-central-1 \| eu-west-1 \|<br /> eu-west-2 \| sa-east-1 <br /><br />For more information about regions, please refer to [Cloud Conformity Region Endpoint](https://us-west-2.cloudconformity.com/v1/regions) |
|  id | Check Id |
|  resource | AWS Resource |
|  ccrn | Cloud Conformity Resource Name |
|  ruleId  | e.g. S3-001 <br /><br />For more information about rules, please refer to [Cloud Conformity Services Endpoint](https://us-west-2.cloudconformity.com/v1/services) |
|  ruleTitle  | e.g. BucketPublicReadAccess <br /><br />For more information about rules, please refer to [Cloud Conformity Services Endpoint](https://us-west-2.cloudconformity.com/v1/services) |
|  statuses | SUCCESS \| FAILURE |
|  categories  | security \| cost-optimisation \| reliability \| performance-efficiency  \| operational-excellence <br /><br />For more information about categories, please refer to [Cloud Conformity Services Endpoint](https://us-west-2.cloudconformity.com/v1/services) |
|  riskLevels  | LOW\| MEDIUM \| HIGH \| VERY_HIGH \| EXTREME <br /><br />For more information about risk levels, please refer to [Cloud Conformity Services Endpoint](https://us-west-2.cloudconformity.com/v1/services) |
|  message  | e.g. Bucket my-bucket-name allows public 'READ' access |
|  createdDate  | The date when the check was created<br /><br />The numeric value of the specified date as the number of milliseconds since January 1, 1970, 00:00:00 UTC |
|  failureDiscoveryDate  | The date when the check the failure was discovered<br /><br />The numeric value of the specified date as the number of milliseconds since January 1, 1970, 00:00:00 UTC |
|  tags  | Any assigned metadata tags to your AWS resources |


## Auto Remediate Functions

The table below lists the supported auto auto-remediate functions:

| Service  | Rule Id | Description |
| ------------- | ------------- | ------------- |
|  CloudFormation | [CFM-005](https://www.cloudconformity.com/knowledge-base/aws/CloudFormation/stack-termination-protection.html)    | Ensure Termination Protection feature is enabled for your AWS CloudFormation stacks |
|  Config | [Config-001](https://www.cloudconformity.com/knowledge-base/aws/Config/aws-config-enabled.html)    | Ensure AWS Config is enabled in all regions |
|  S3  | [S3-001](https://www.cloudconformity.com/knowledge-base/aws/S3/s3-bucket-public-read-access.html) | Ensure S3 buckets do not allow public READ access |
|  S3  | [S3-002](https://www.cloudconformity.com/knowledge-base/aws/S3/s3-bucket-public-read-acp-access.html) | Ensure S3 buckets do not allow public READ_ACP access |
|  S3  | [S3-003](https://www.cloudconformity.com/knowledge-base/aws/S3/s3-bucket-public-write-access.html) | Ensure S3 buckets do not allow public WRITE access |
|  S3  | [S3-004](https://www.cloudconformity.com/knowledge-base/aws/S3/s3-bucket-public-write-acp-access.html) | Ensure S3 buckets do not allow public WRITE_ACP access |
|  S3  | [S3-005](https://www.cloudconformity.com/knowledge-base/aws/S3/s3-bucket-public-full-control-access.html) | Ensure S3 buckets do not allow public FULL_CONTROL access |
|  S3  | [S3-006](https://www.cloudconformity.com/knowledge-base/aws/S3/s3-bucket-authenticated-users-read-access.html) | Ensure S3 buckets do not allow authenticated users READ access |
|  S3  | [S3-007](https://www.cloudconformity.com/knowledge-base/aws/S3/s3-bucket-authenticated-users-read-acp-access.html) | Ensure S3 buckets do not allow authenticated users READ_ACP access |
|  S3  | [S3-008](https://www.cloudconformity.com/knowledge-base/aws/S3/s3-bucket-authenticated-users-write-access.html) | Ensure S3 buckets do not allow authenticated users WRITE access |
|  S3  | [S3-009](https://www.cloudconformity.com/knowledge-base/aws/S3/s3-bucket-authenticated-users-write-acp-access.html) | Ensure S3 buckets do not allow authenticated users WRITE_ACP access |
|  S3  | [S3-010](https://www.cloudconformity.com/knowledge-base/aws/S3/s3-bucket-authenticated-users-full-control-access.html) | Ensure S3 buckets do not allow authenticated users FULL_CONTROL access |
|  S3  | [S3-012](https://www.cloudconformity.com/knowledge-base/aws/S3/s3-bucket-versioning-enabled.html) | Enable versioning for AWS S3 buckets |
|  RDS | [RDS-008](https://www.cloudconformity.com/knowledge-base/aws/RDS/rds-publicly-accessible.html)    | Ensure RDS instances are not public facing to minimise security risks |
|  CloudTrail | [CT-001](https://www.cloudconformity.com/knowledge-base/aws/CloudTrail/cloudtrail-enabled.html)    | Ensure CloudTrail API logging is activated for all Regions |
|  Redshift | [RS-001](https://www.cloudconformity.com/knowledge-base/aws/Redshift/redshift-cluster-publicly-accessible.html)    | Ensure Redshift clusters are not publicly accessible to minimise security risks |
|  IAM | [IAM-001](https://www.cloudconformity.com/knowledge-base/aws/IAM/access-keys-rotated-30-days.html)    | Ensure that all your IAM user access keys are rotated every month  |
|  EC2 | [EC2-002](https://www.cloudconformity.com/knowledge-base/aws/EC2/unrestricted-ssh-access.html)    | Ensure that there is no unrestricted access through TCP port 22 from the selected EC2 security group  |
|  EC2 | [EC2-003](https://www.cloudconformity.com/knowledge-base/aws/EC2/unrestricted-rdp-access.html)    | Ensure that there is no unrestricted access through TCP port 3389 (which is used for MS Remote Desktop Protocol) from the selected EC2 security group  |
|  EC2 | [EC2-004](https://www.cloudconformity.com/knowledge-base/aws/EC2/unrestricted-oracle-access.html)    | Ensure that there is no unrestricted access through TCP port 1521 (which is used by Oracle Database Server) from the selected EC2 security group  |
|  EC2 | [EC2-005](https://www.cloudconformity.com/knowledge-base/aws/EC2/unrestricted-mysql-access.html)    | Ensure that there is no unrestricted access through TCP port 3306 (which is used by MYSQL Database Server) from the selected EC2 security group  |
|  EC2 | [EC2-006](https://www.cloudconformity.com/knowledge-base/aws/EC2/unrestricted-postgresql-access.html)    | Ensure that there is no unrestricted access through TCP port 5432 (which is used by PostgreSQL Database Server) from the selected EC2 security group  |
|  EC2 | [EC2-008](https://www.cloudconformity.com/knowledge-base/aws/EC2/unrestricted-mssql-access.html)    | Ensure that there is no unrestricted access through TCP port 1433 (which is used by Microsoft MYSQL Database Server) from the selected EC2 security group  |
|  EC2 | [EC2-038](https://www.cloudconformity.com/knowledge-base/aws/EC2/unrestricted-telnet-access.html)    | Ensure that there is no unrestricted access through TCP port 23 (which is used by Telnet) from the selected EC2 security group  |
|  EC2 | [EC2-039](https://www.cloudconformity.com/knowledge-base/aws/EC2/unrestricted-smtp-access.html)    | Ensure that there is no unrestricted access through TCP port 25 (which is used by SMTP) from the selected EC2 security group  |
|  EC2 | [EC2-040](https://www.cloudconformity.com/knowledge-base/aws/EC2/unrestricted-rcp-access.html)    | Ensure that there is no unrestricted access through TCP port 135 (which is used client/server communication by Microsoft Message Queuing, as well as other Microsoft Windows/Windows Server software.) from the selected EC2 security group  |
|  EC2 | [EC2-043](https://www.cloudconformity.com/knowledge-base/aws/EC2/unrestricted-cifs-access.html)    | Ensure that there is no unrestricted access through TCP port 445 (which is used by CIFS for file/printer sharing and other network communications) from the selected EC2 security group  |
|  EC2 | [EC2-045](https://www.cloudconformity.com/knowledge-base/aws/EC2/unrestricted-mongodb-access.html)    | Ensure that there is no unrestricted access through TCP port 27017 (which is used by MongoDB database) from the selected EC2 security group |
| Kinesis | [Kinesis-001](https://www.cloudconformity.com/knowledge-base/aws/Kinesis/server-side-encryption.html)    | Ensure that your AWS Kinesis streams are encrypted using Server-Side Encryption (SSE) in order to meet strict regulatory requirements and improve the security of your data at rest.  |
| SQS | [SQS-004](https://www.cloudconformity.com/knowledge-base/aws/EC2/unrestricted-mongodb-access.html)    | Ensure that your Amazon Simple Queue Service (SQS) queues are protecting the contents of their messages using Server-Side Encryption (SSE). |
|  EC2 | [EC2-045](https://www.cloudconformity.com/knowledge-base/aws/EC2/unrestricted-mongodb-access.html)    | Ensure that there is no unrestricted access through TCP port 27017 (which is used by MongoDB database) from the selected EC2 security group  |
|  IAM | [IAM-038](https://www.cloudconformity.com/knowledge-base/aws/IAM/access-keys-rotated-90-days.html)    | Ensure that all your IAM user access keys are rotated every month in order to decrease the likelihood of accidental exposures and protect your AWS resources against unauthorized access  |
|  VPC | [VPC-001](https://www.cloudconformity.com/knowledge-base/aws/EC2/unrestricted-cifs-access.html)    | Ensure that  Flow Logs feature is Enabled for your account to capture network traffic data to and from your Virtual Private Cloud (VPC) |
|  EC2 | [EC2-019](https://www.cloudconformity.com/knowledge-base/aws/EC2/publicly-shared-ami.html)    | Ensure that your AWS AMIs are not publicly shared with the other AWS accounts in order to avoid exposing sensitive data.   |
|  CloudTrail | [CT-003](https://www.cloudconformity.com/knowledge-base/aws/CloudTrail/cloudtrail-bucket-publicly-accessible.html)    | Ensure there are not any AWS CloudTrail logging buckets are publicly accessible, in order to determine if your AWS account could be at risk.  |
|  RDS | [RDS-006](https://www.cloudconformity.com/knowledge-base/aws/RDS/rds-auto-minor-version-upgrade.html)    | Ensure that your RDS database instances have the Auto Minor Version Upgrade flag enabled in order to receive automatically minor engine upgrades during the specified maintenance window  |
|  EBS | [EBS-009](https://www.cloudconformity.com/knowledge-base/aws/EBS/public-snapshots.html)    | Ensure that your AWS Elastic Block Store (EBS) volume snapshots are not public (i.e. publicly shared with other AWS accounts) in order to avoid exposing personal and sensitive data.  |
|  RDS | [RDS-023](https://www.cloudconformity.com/knowledge-base/aws/RDS/public-snapshots.html)    | Ensure that your AWS Relational Database Service (RDS) database snapshots are not publicly accessible (i.e. shared with all AWS accounts and users) in order to avoid exposing your private data. |
|  KMS | [KMS-004](https://www.cloudconformity.com/knowledge-base/aws/KMS/kms-customer-master-key-pending-deletion.html)    | Identify any disabled AWS KMS Customer Master Keys (CMK) that have been accidentally or intentionally scheduled for deletion in order to prevent losing any data encrypted with these keys. |
|  RedShift | [RS-023](https://www.cloudconformity.com/knowledge-base/aws/Redshift/user-activity-log.html)    |Ensure that user activity logging is enabled for your AWS Redshift clusters in order to log each query before it is performed on the clusters database.  |
|  GuardDuty | [GD-001](https://www.cloudconformity.com/knowledge-base/aws/GuardDuty/guardduty-enabled.html)    | Ensure that Amazon GuardDuty service is currently enabled in order to protect your AWS environment and infrastructure  |
|  Organizations | [Organizations-002](https://www.cloudconformity.com/knowledge-base/aws/Organizations/all-features.html)    | Ensure that All Features is enabled within your Amazon Organizations to achieve full control over the use of AWS services and actions across multiple AWS accounts using Service Control Policies (SCPs). |
|  Lambda | [Lambda-003](https://www.cloudconformity.com/knowledge-base/aws/Lambda/tracing.html) | Ensure that tracing is enabled for your AWS Lambda functions in order to gain visibility into the functions execution and performance. |
|  S3 | [S3-016](https://www.cloudconformity.com/knowledge-base/aws/S3/server-side-encryption.html)    | Ensure that your AWS S3 buckets are protecting their sensitive data at rest by enforcing Server-Side Encryption  |
|  S3 | [S3-014](https://www.cloudconformity.com/knowledge-base/aws/EC2/unrestricted-mongodb-access.html)    | Ensure that your AWS S3 buckets are not publicly accessible via bucket policies in order to protect against unauthorized access. |
|  TrustedAdvisor | [TrustedAdvisor-003](https://www.cloudconformity.com/knowledge-base/aws/TrustedAdvisor/exposed-access-keys.html)    | Ensure that there are not any exposed Amazon IAM access keys in order to protect your AWS     resources against unapproved access |
|  KMS | [KMS-002](https://www.cloudconformity.com/knowledge-base/aws/KMS/key-rotation-enabled.html)    | Ensure that the KMS Key Rotation is Enabled which allows you to set an yearly rotation schedule for your CMK  |
|  RedShift | [RS-019](https://www.cloudconformity.com/knowledge-base/aws/Redshift/automated-snapshot-retention-period.html)    | Ensure that the automated snapshot retention period set for your AWS Redshift clusters is a positive number, meaning that automated backups are enabled for the clusters |



For more information about `Rule Id`, please refer to [Cloud Conformity Services Endpoint](https://us-west-2.cloudconformity.com/v1/services)

Note: if you want to exclude auto-remediate resources for certain rules, you can use Conformity Profile, for example, `exclude-rules.json`. The example profile provides a list of rules to exlude low risk rules or rules that require extra resources or configurations. 

## How to contribute

You are welcome to contribute to "Cloud Conformity Auto Remediation"

1. [Fork](https://help.github.com/articles/fork-a-repo/) the project
2. Make a well commented and clean commit to the repository
3. Create a [pull request](https://help.github.com/articles/about-pull-requests/)

## Styleguide

The styleguide used for this project is
[Standard](https://standardjs.com/) forced by [eslint](https://github.com/eslint/eslint).
To run eslint, you only need to run `npm run lint [filename]` or to
run for the whole project, run `npm run lint '**/*.js'`.
Refer to package.json for more info.

The main rules are as follows:
* 2 spaces – for indentation
* Single quotes for strings – except to avoid escaping
* No unused variables – this one catches tons of bugs!
* No semicolons – It's fine. Really!
* Never start a line with (, [, or `
* Space after keywords if (condition) { ... }
* Space after function name function name (arg) { ... }
* Always use === instead of == – but obj == null is allowed to check null || undefined.
* Always handle the node.js err function parameter
* Always prefix browser globals with window – except document and navigator are okay

## About

Protect, Detect, Correct. The most complete solution to avoid critical threats and vulnerabilities in your AWS environments. Awarded both AWS Cloud Management Tools Competency and Security Partner Competency, Cloud Conformity’s security and optimization platform delivers continuous assurance that your infrastructure is risk-free and compliant as your cloud presence grows.
