import * as cdk from "aws-cdk-lib";
import * as iam from "aws-cdk-lib/aws-iam";
import * as kms from "aws-cdk-lib/aws-kms";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as logs from "aws-cdk-lib/aws-logs";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as sns from "aws-cdk-lib/aws-sns";
import * as sqs from "aws-cdk-lib/aws-sqs";

export interface AutoRemediateStackProps extends cdk.StackProps {}

/**
 * The AWS CloudFormation template for this Serverless application
 */
export class AutoRemediateStack extends cdk.Stack {
  public constructor(
    scope: cdk.App,
    id: string,
    props: AutoRemediateStackProps = {},
  ) {
    super(scope, id, props);

    // Resources
    const autoRemediateCfm005Role = new iam.CfnRole(
      this,
      "AutoRemediateCFM005Role",
      {
        roleName: "AutoRemediateCFM-005Role",
        assumeRolePolicyDocument: {
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Allow",
              Principal: {
                Service: ["lambda.amazonaws.com"],
              },
              Action: ["sts:AssumeRole"],
            },
          ],
        },
        policies: [
          {
            policyName: "AutoRemediationXRayPolicy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: ["xray:PutTraceSegments", "xray:PutTelemetryRecords"],
                  Resource: "*",
                },
              ],
            },
          },
          {
            policyName: "AutoRemediateCFM-005Policy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: [
                    "logs:CreateLogGroup",
                    "logs:CreateLogStream",
                    "logs:PutLogEvents",
                  ],
                  Resource: [
                    [
                      "arn:aws:logs",
                      this.region,
                      this.account,
                      "log-group:/aws/lambda/*:*:*",
                    ].join(":"),
                  ],
                },
                {
                  Effect: "Allow",
                  Action: ["cloudformation:UpdateTerminationProtection"],
                  Resource: "*",
                },
              ],
            },
          },
        ],
      },
    );

    const autoRemediateCfmDash005LogGroup = new logs.CfnLogGroup(
      this,
      "AutoRemediateCFMDash005LogGroup",
      {
        logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateCFM-005",
        retentionInDays: 30,
      },
    );

    const autoRemediateCt001Role = new iam.CfnRole(
      this,
      "AutoRemediateCT001Role",
      {
        roleName: "AutoRemediateCT-001Role",
        assumeRolePolicyDocument: {
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Allow",
              Principal: {
                Service: ["lambda.amazonaws.com"],
              },
              Action: ["sts:AssumeRole"],
            },
          ],
        },
        policies: [
          {
            policyName: "AutoRemediationXRayPolicy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: ["xray:PutTraceSegments", "xray:PutTelemetryRecords"],
                  Resource: "*",
                },
              ],
            },
          },
          {
            policyName: "AutoRemediateCT-001Policy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: [
                    "logs:CreateLogGroup",
                    "logs:CreateLogStream",
                    "logs:PutLogEvents",
                  ],
                  Resource: [
                    [
                      "arn:aws:logs",
                      this.region,
                      this.account,
                      "log-group:/aws/lambda/*:*:*",
                    ].join(":"),
                  ],
                },
                {
                  Effect: "Allow",
                  Action: ["cloudtrail:UpdateTrail"],
                  Resource: "*",
                },
              ],
            },
          },
        ],
      },
    );

    const autoRemediateCt003Role = new iam.CfnRole(
      this,
      "AutoRemediateCT003Role",
      {
        roleName: "AutoRemediateCT-003Role",
        assumeRolePolicyDocument: {
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Allow",
              Principal: {
                Service: ["lambda.amazonaws.com"],
              },
              Action: ["sts:AssumeRole"],
            },
          ],
        },
        policies: [
          {
            policyName: "AutoRemediationXRayPolicy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: ["xray:PutTraceSegments", "xray:PutTelemetryRecords"],
                  Resource: "*",
                },
              ],
            },
          },
          {
            policyName: "AutoRemediateCT-003Policy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: [
                    "logs:CreateLogGroup",
                    "logs:CreateLogStream",
                    "logs:PutLogEvents",
                  ],
                  Resource: [
                    [
                      "arn:aws:logs",
                      this.region,
                      this.account,
                      "log-group:/aws/lambda/*:*:*",
                    ].join(":"),
                  ],
                },
                {
                  Effect: "Allow",
                  Action: ["s3:PutBucketAcl"],
                  Resource: "*",
                },
              ],
            },
          },
        ],
      },
    );

    const autoRemediateCtDash001LogGroup = new logs.CfnLogGroup(
      this,
      "AutoRemediateCTDash001LogGroup",
      {
        logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateCT-001",
        retentionInDays: 30,
      },
    );

    const autoRemediateCtDash003LogGroup = new logs.CfnLogGroup(
      this,
      "AutoRemediateCTDash003LogGroup",
      {
        logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateCT-003",
        retentionInDays: 30,
      },
    );

    const autoRemediateConfig001Role = new iam.CfnRole(
      this,
      "AutoRemediateConfig001Role",
      {
        roleName: "AutoRemediateConfig-001Role",
        assumeRolePolicyDocument: {
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Allow",
              Principal: {
                Service: ["lambda.amazonaws.com"],
              },
              Action: ["sts:AssumeRole"],
            },
          ],
        },
        policies: [
          {
            policyName: "AutoRemediationXRayPolicy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: ["xray:PutTraceSegments", "xray:PutTelemetryRecords"],
                  Resource: "*",
                },
              ],
            },
          },
          {
            policyName: "AutoRemediateConfig-001Policy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: [
                    "logs:CreateLogGroup",
                    "logs:CreateLogStream",
                    "logs:PutLogEvents",
                  ],
                  Resource: [
                    [
                      "arn:aws:logs",
                      this.region,
                      this.account,
                      "log-group:/aws/lambda/*:*:*",
                    ].join(":"),
                  ],
                },
                {
                  Effect: "Allow",
                  Action: [
                    "config:PutConfigurationRecorder",
                    "config:PutDeliveryChannel",
                    "config:StartConfigurationRecorder",
                  ],
                  Resource: "*",
                },
                {
                  Effect: "Allow",
                  Action: [
                    "iam:AttachRolePolicy",
                    "iam:CreateRole",
                    "iam:GetRole",
                    "iam:PutRolePolicy",
                  ],
                  Resource: "*",
                },
                {
                  Effect: "Allow",
                  Action: ["sts:GetCallerIdentity"],
                  Resource: "*",
                },
              ],
            },
          },
        ],
      },
    );

    const autoRemediateConfigDash001LogGroup = new logs.CfnLogGroup(
      this,
      "AutoRemediateConfigDash001LogGroup",
      {
        logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateConfig-001",
        retentionInDays: 30,
      },
    );

    const autoRemediateEbs009Role = new iam.CfnRole(
      this,
      "AutoRemediateEBS009Role",
      {
        roleName: "AutoRemediateEBS-009Role",
        assumeRolePolicyDocument: {
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Allow",
              Principal: {
                Service: ["lambda.amazonaws.com"],
              },
              Action: ["sts:AssumeRole"],
            },
          ],
        },
        policies: [
          {
            policyName: "AutoRemediationXRayPolicy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: ["xray:PutTraceSegments", "xray:PutTelemetryRecords"],
                  Resource: "*",
                },
              ],
            },
          },
          {
            policyName: "AutoRemediateEBS-009Policy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: [
                    "logs:CreateLogGroup",
                    "logs:CreateLogStream",
                    "logs:PutLogEvents",
                  ],
                  Resource: [
                    [
                      "arn:aws:logs",
                      this.region,
                      this.account,
                      "log-group:/aws/lambda/*:*:*",
                    ].join(":"),
                  ],
                },
                {
                  Effect: "Allow",
                  Action: ["ec2:ModifySnapshotAttribute"],
                  Resource: "*",
                },
              ],
            },
          },
        ],
      },
    );

    const autoRemediateEbsDash009LogGroup = new logs.CfnLogGroup(
      this,
      "AutoRemediateEBSDash009LogGroup",
      {
        logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateEBS-009",
        retentionInDays: 30,
      },
    );

    const autoRemediateEc2002Role = new iam.CfnRole(
      this,
      "AutoRemediateEC2002Role",
      {
        roleName: "AutoRemediateEC2-002Role",
        assumeRolePolicyDocument: {
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Allow",
              Principal: {
                Service: ["lambda.amazonaws.com"],
              },
              Action: ["sts:AssumeRole"],
            },
          ],
        },
        policies: [
          {
            policyName: "AutoRemediationXRayPolicy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: ["xray:PutTraceSegments", "xray:PutTelemetryRecords"],
                  Resource: "*",
                },
              ],
            },
          },
          {
            policyName: "AutoRemediateEC2-002Policy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: [
                    "logs:CreateLogGroup",
                    "logs:CreateLogStream",
                    "logs:PutLogEvents",
                  ],
                  Resource: [
                    [
                      "arn:aws:logs",
                      this.region,
                      this.account,
                      "log-group:/aws/lambda/*:*:*",
                    ].join(":"),
                  ],
                },
                {
                  Effect: "Allow",
                  Action: ["ec2:RevokeSecurityGroupIngress"],
                  Resource: "*",
                },
              ],
            },
          },
        ],
      },
    );

    const autoRemediateEc2003Role = new iam.CfnRole(
      this,
      "AutoRemediateEC2003Role",
      {
        roleName: "AutoRemediateEC2-003Role",
        assumeRolePolicyDocument: {
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Allow",
              Principal: {
                Service: ["lambda.amazonaws.com"],
              },
              Action: ["sts:AssumeRole"],
            },
          ],
        },
        policies: [
          {
            policyName: "AutoRemediationXRayPolicy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: ["xray:PutTraceSegments", "xray:PutTelemetryRecords"],
                  Resource: "*",
                },
              ],
            },
          },
          {
            policyName: "AutoRemediateEC2-003Policy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: [
                    "logs:CreateLogGroup",
                    "logs:CreateLogStream",
                    "logs:PutLogEvents",
                  ],
                  Resource: [
                    [
                      "arn:aws:logs",
                      this.region,
                      this.account,
                      "log-group:/aws/lambda/*:*:*",
                    ].join(":"),
                  ],
                },
                {
                  Effect: "Allow",
                  Action: ["ec2:RevokeSecurityGroupIngress"],
                  Resource: "*",
                },
              ],
            },
          },
        ],
      },
    );

    const autoRemediateEc2004Role = new iam.CfnRole(
      this,
      "AutoRemediateEC2004Role",
      {
        roleName: "AutoRemediateEC2-004Role",
        assumeRolePolicyDocument: {
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Allow",
              Principal: {
                Service: ["lambda.amazonaws.com"],
              },
              Action: ["sts:AssumeRole"],
            },
          ],
        },
        policies: [
          {
            policyName: "AutoRemediationXRayPolicy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: ["xray:PutTraceSegments", "xray:PutTelemetryRecords"],
                  Resource: "*",
                },
              ],
            },
          },
          {
            policyName: "AutoRemediateEC2-004Policy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: [
                    "logs:CreateLogGroup",
                    "logs:CreateLogStream",
                    "logs:PutLogEvents",
                  ],
                  Resource: [
                    [
                      "arn:aws:logs",
                      this.region,
                      this.account,
                      "log-group:/aws/lambda/*:*:*",
                    ].join(":"),
                  ],
                },
                {
                  Effect: "Allow",
                  Action: ["ec2:RevokeSecurityGroupIngress"],
                  Resource: "*",
                },
              ],
            },
          },
        ],
      },
    );

    const autoRemediateEc2005Role = new iam.CfnRole(
      this,
      "AutoRemediateEC2005Role",
      {
        roleName: "AutoRemediateEC2-005Role",
        assumeRolePolicyDocument: {
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Allow",
              Principal: {
                Service: ["lambda.amazonaws.com"],
              },
              Action: ["sts:AssumeRole"],
            },
          ],
        },
        policies: [
          {
            policyName: "AutoRemediationXRayPolicy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: ["xray:PutTraceSegments", "xray:PutTelemetryRecords"],
                  Resource: "*",
                },
              ],
            },
          },
          {
            policyName: "AutoRemediateEC2-005Policy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: [
                    "logs:CreateLogGroup",
                    "logs:CreateLogStream",
                    "logs:PutLogEvents",
                  ],
                  Resource: [
                    [
                      "arn:aws:logs",
                      this.region,
                      this.account,
                      "log-group:/aws/lambda/*:*:*",
                    ].join(":"),
                  ],
                },
                {
                  Effect: "Allow",
                  Action: ["ec2:RevokeSecurityGroupIngress"],
                  Resource: "*",
                },
              ],
            },
          },
        ],
      },
    );

    const autoRemediateEc2006Role = new iam.CfnRole(
      this,
      "AutoRemediateEC2006Role",
      {
        roleName: "AutoRemediateEC2-006Role",
        assumeRolePolicyDocument: {
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Allow",
              Principal: {
                Service: ["lambda.amazonaws.com"],
              },
              Action: ["sts:AssumeRole"],
            },
          ],
        },
        policies: [
          {
            policyName: "AutoRemediationXRayPolicy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: ["xray:PutTraceSegments", "xray:PutTelemetryRecords"],
                  Resource: "*",
                },
              ],
            },
          },
          {
            policyName: "AutoRemediateEC2-006Policy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: [
                    "logs:CreateLogGroup",
                    "logs:CreateLogStream",
                    "logs:PutLogEvents",
                  ],
                  Resource: [
                    [
                      "arn:aws:logs",
                      this.region,
                      this.account,
                      "log-group:/aws/lambda/*:*:*",
                    ].join(":"),
                  ],
                },
                {
                  Effect: "Allow",
                  Action: ["ec2:RevokeSecurityGroupIngress"],
                  Resource: "*",
                },
              ],
            },
          },
        ],
      },
    );

    const autoRemediateEc2008Role = new iam.CfnRole(
      this,
      "AutoRemediateEC2008Role",
      {
        roleName: "AutoRemediateEC2-008Role",
        assumeRolePolicyDocument: {
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Allow",
              Principal: {
                Service: ["lambda.amazonaws.com"],
              },
              Action: ["sts:AssumeRole"],
            },
          ],
        },
        policies: [
          {
            policyName: "AutoRemediationXRayPolicy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: ["xray:PutTraceSegments", "xray:PutTelemetryRecords"],
                  Resource: "*",
                },
              ],
            },
          },
          {
            policyName: "AutoRemediateEC2-008Policy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: [
                    "logs:CreateLogGroup",
                    "logs:CreateLogStream",
                    "logs:PutLogEvents",
                  ],
                  Resource: [
                    [
                      "arn:aws:logs",
                      this.region,
                      this.account,
                      "log-group:/aws/lambda/*:*:*",
                    ].join(":"),
                  ],
                },
                {
                  Effect: "Allow",
                  Action: ["ec2:RevokeSecurityGroupIngress"],
                  Resource: "*",
                },
              ],
            },
          },
        ],
      },
    );

    const autoRemediateEc2019Role = new iam.CfnRole(
      this,
      "AutoRemediateEC2019Role",
      {
        roleName: "AutoRemediateEC2-019Role",
        assumeRolePolicyDocument: {
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Allow",
              Principal: {
                Service: ["lambda.amazonaws.com"],
              },
              Action: ["sts:AssumeRole"],
            },
          ],
        },
        policies: [
          {
            policyName: "AutoRemediationXRayPolicy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: ["xray:PutTraceSegments", "xray:PutTelemetryRecords"],
                  Resource: "*",
                },
              ],
            },
          },
          {
            policyName: "AutoRemediateEC2-019Policy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: [
                    "logs:CreateLogGroup",
                    "logs:CreateLogStream",
                    "logs:PutLogEvents",
                  ],
                  Resource: [
                    [
                      "arn:aws:logs",
                      this.region,
                      this.account,
                      "log-group:/aws/lambda/*:*:*",
                    ].join(":"),
                  ],
                },
                {
                  Effect: "Allow",
                  Action: ["ec2:ModifyImageAttribute"],
                  Resource: "*",
                },
              ],
            },
          },
        ],
      },
    );

    const autoRemediateEc2038Role = new iam.CfnRole(
      this,
      "AutoRemediateEC2038Role",
      {
        roleName: "AutoRemediateEC2-038Role",
        assumeRolePolicyDocument: {
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Allow",
              Principal: {
                Service: ["lambda.amazonaws.com"],
              },
              Action: ["sts:AssumeRole"],
            },
          ],
        },
        policies: [
          {
            policyName: "AutoRemediationXRayPolicy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: ["xray:PutTraceSegments", "xray:PutTelemetryRecords"],
                  Resource: "*",
                },
              ],
            },
          },
          {
            policyName: "AutoRemediateEC2-038Policy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: [
                    "logs:CreateLogGroup",
                    "logs:CreateLogStream",
                    "logs:PutLogEvents",
                  ],
                  Resource: [
                    [
                      "arn:aws:logs",
                      this.region,
                      this.account,
                      "log-group:/aws/lambda/*:*:*",
                    ].join(":"),
                  ],
                },
                {
                  Effect: "Allow",
                  Action: ["ec2:RevokeSecurityGroupIngress"],
                  Resource: "*",
                },
              ],
            },
          },
        ],
      },
    );

    const autoRemediateEc2039Role = new iam.CfnRole(
      this,
      "AutoRemediateEC2039Role",
      {
        roleName: "AutoRemediateEC2-039Role",
        assumeRolePolicyDocument: {
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Allow",
              Principal: {
                Service: ["lambda.amazonaws.com"],
              },
              Action: ["sts:AssumeRole"],
            },
          ],
        },
        policies: [
          {
            policyName: "AutoRemediationXRayPolicy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: ["xray:PutTraceSegments", "xray:PutTelemetryRecords"],
                  Resource: "*",
                },
              ],
            },
          },
          {
            policyName: "AutoRemediateEC2-039Policy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: [
                    "logs:CreateLogGroup",
                    "logs:CreateLogStream",
                    "logs:PutLogEvents",
                  ],
                  Resource: [
                    [
                      "arn:aws:logs",
                      this.region,
                      this.account,
                      "log-group:/aws/lambda/*:*:*",
                    ].join(":"),
                  ],
                },
                {
                  Effect: "Allow",
                  Action: ["ec2:RevokeSecurityGroupIngress"],
                  Resource: "*",
                },
              ],
            },
          },
        ],
      },
    );

    const autoRemediateEc2040Role = new iam.CfnRole(
      this,
      "AutoRemediateEC2040Role",
      {
        roleName: "AutoRemediateEC2-040Role",
        assumeRolePolicyDocument: {
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Allow",
              Principal: {
                Service: ["lambda.amazonaws.com"],
              },
              Action: ["sts:AssumeRole"],
            },
          ],
        },
        policies: [
          {
            policyName: "AutoRemediationXRayPolicy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: ["xray:PutTraceSegments", "xray:PutTelemetryRecords"],
                  Resource: "*",
                },
              ],
            },
          },
          {
            policyName: "AutoRemediateEC2-040Policy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: [
                    "logs:CreateLogGroup",
                    "logs:CreateLogStream",
                    "logs:PutLogEvents",
                  ],
                  Resource: [
                    [
                      "arn:aws:logs",
                      this.region,
                      this.account,
                      "log-group:/aws/lambda/*:*:*",
                    ].join(":"),
                  ],
                },
                {
                  Effect: "Allow",
                  Action: ["ec2:RevokeSecurityGroupIngress"],
                  Resource: "*",
                },
              ],
            },
          },
        ],
      },
    );

    const autoRemediateEc2042Role = new iam.CfnRole(
      this,
      "AutoRemediateEC2042Role",
      {
        roleName: "AutoRemediateEC2-042Role",
        assumeRolePolicyDocument: {
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Allow",
              Principal: {
                Service: ["lambda.amazonaws.com"],
              },
              Action: ["sts:AssumeRole"],
            },
          ],
        },
        policies: [
          {
            policyName: "AutoRemediationXRayPolicy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: ["xray:PutTraceSegments", "xray:PutTelemetryRecords"],
                  Resource: "*",
                },
              ],
            },
          },
          {
            policyName: "AutoRemediateEC2-042Policy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: [
                    "logs:CreateLogGroup",
                    "logs:CreateLogStream",
                    "logs:PutLogEvents",
                  ],
                  Resource: [
                    [
                      "arn:aws:logs",
                      this.region,
                      this.account,
                      "log-group:/aws/lambda/*:*:*",
                    ].join(":"),
                  ],
                },
                {
                  Effect: "Allow",
                  Action: ["ec2:RevokeSecurityGroupIngress"],
                  Resource: "*",
                },
              ],
            },
          },
        ],
      },
    );

    const autoRemediateEc2043Role = new iam.CfnRole(
      this,
      "AutoRemediateEC2043Role",
      {
        roleName: "AutoRemediateEC2-043Role",
        assumeRolePolicyDocument: {
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Allow",
              Principal: {
                Service: ["lambda.amazonaws.com"],
              },
              Action: ["sts:AssumeRole"],
            },
          ],
        },
        policies: [
          {
            policyName: "AutoRemediationXRayPolicy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: ["xray:PutTraceSegments", "xray:PutTelemetryRecords"],
                  Resource: "*",
                },
              ],
            },
          },
          {
            policyName: "AutoRemediateEC2-043Policy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: [
                    "logs:CreateLogGroup",
                    "logs:CreateLogStream",
                    "logs:PutLogEvents",
                  ],
                  Resource: [
                    [
                      "arn:aws:logs",
                      this.region,
                      this.account,
                      "log-group:/aws/lambda/*:*:*",
                    ].join(":"),
                  ],
                },
                {
                  Effect: "Allow",
                  Action: ["ec2:RevokeSecurityGroupIngress"],
                  Resource: "*",
                },
              ],
            },
          },
        ],
      },
    );

    const autoRemediateEc2045Role = new iam.CfnRole(
      this,
      "AutoRemediateEC2045Role",
      {
        roleName: "AutoRemediateEC2-045Role",
        assumeRolePolicyDocument: {
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Allow",
              Principal: {
                Service: ["lambda.amazonaws.com"],
              },
              Action: ["sts:AssumeRole"],
            },
          ],
        },
        policies: [
          {
            policyName: "AutoRemediationXRayPolicy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: ["xray:PutTraceSegments", "xray:PutTelemetryRecords"],
                  Resource: "*",
                },
              ],
            },
          },
          {
            policyName: "AutoRemediateEC2-045Policy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: [
                    "logs:CreateLogGroup",
                    "logs:CreateLogStream",
                    "logs:PutLogEvents",
                  ],
                  Resource: [
                    [
                      "arn:aws:logs",
                      this.region,
                      this.account,
                      "log-group:/aws/lambda/*:*:*",
                    ].join(":"),
                  ],
                },
                {
                  Effect: "Allow",
                  Action: ["ec2:RevokeSecurityGroupIngress"],
                  Resource: "*",
                },
              ],
            },
          },
        ],
      },
    );

    const autoRemediateEc2Dash002LogGroup = new logs.CfnLogGroup(
      this,
      "AutoRemediateEC2Dash002LogGroup",
      {
        logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateEC2-002",
        retentionInDays: 30,
      },
    );

    const autoRemediateEc2Dash003LogGroup = new logs.CfnLogGroup(
      this,
      "AutoRemediateEC2Dash003LogGroup",
      {
        logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateEC2-003",
        retentionInDays: 30,
      },
    );

    const autoRemediateEc2Dash004LogGroup = new logs.CfnLogGroup(
      this,
      "AutoRemediateEC2Dash004LogGroup",
      {
        logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateEC2-004",
        retentionInDays: 30,
      },
    );

    const autoRemediateEc2Dash005LogGroup = new logs.CfnLogGroup(
      this,
      "AutoRemediateEC2Dash005LogGroup",
      {
        logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateEC2-005",
        retentionInDays: 30,
      },
    );

    const autoRemediateEc2Dash006LogGroup = new logs.CfnLogGroup(
      this,
      "AutoRemediateEC2Dash006LogGroup",
      {
        logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateEC2-006",
        retentionInDays: 30,
      },
    );

    const autoRemediateEc2Dash008LogGroup = new logs.CfnLogGroup(
      this,
      "AutoRemediateEC2Dash008LogGroup",
      {
        logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateEC2-008",
        retentionInDays: 30,
      },
    );

    const autoRemediateEc2Dash019LogGroup = new logs.CfnLogGroup(
      this,
      "AutoRemediateEC2Dash019LogGroup",
      {
        logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateEC2-019",
        retentionInDays: 30,
      },
    );

    const autoRemediateEc2Dash038LogGroup = new logs.CfnLogGroup(
      this,
      "AutoRemediateEC2Dash038LogGroup",
      {
        logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateEC2-038",
        retentionInDays: 30,
      },
    );

    const autoRemediateEc2Dash039LogGroup = new logs.CfnLogGroup(
      this,
      "AutoRemediateEC2Dash039LogGroup",
      {
        logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateEC2-039",
        retentionInDays: 30,
      },
    );

    const autoRemediateEc2Dash040LogGroup = new logs.CfnLogGroup(
      this,
      "AutoRemediateEC2Dash040LogGroup",
      {
        logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateEC2-040",
        retentionInDays: 30,
      },
    );

    const autoRemediateEc2Dash043LogGroup = new logs.CfnLogGroup(
      this,
      "AutoRemediateEC2Dash043LogGroup",
      {
        logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateEC2-043",
        retentionInDays: 30,
      },
    );

    const autoRemediateEc2Dash045LogGroup = new logs.CfnLogGroup(
      this,
      "AutoRemediateEC2Dash045LogGroup",
      {
        logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateEC2-045",
        retentionInDays: 30,
      },
    );

    const autoRemediateGd001Role = new iam.CfnRole(
      this,
      "AutoRemediateGD001Role",
      {
        roleName: "AutoRemediateGD-001Role",
        assumeRolePolicyDocument: {
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Allow",
              Principal: {
                Service: ["lambda.amazonaws.com"],
              },
              Action: ["sts:AssumeRole"],
            },
          ],
        },
        policies: [
          {
            policyName: "AutoRemediationXRayPolicy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: ["xray:PutTraceSegments", "xray:PutTelemetryRecords"],
                  Resource: "*",
                },
              ],
            },
          },
          {
            policyName: "AutoRemediateGD-001Policy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: [
                    "logs:CreateLogGroup",
                    "logs:CreateLogStream",
                    "logs:PutLogEvents",
                  ],
                  Resource: [
                    [
                      "arn:aws:logs",
                      this.region,
                      this.account,
                      "log-group:/aws/lambda/*:*:*",
                    ].join(":"),
                  ],
                },
                {
                  Effect: "Allow",
                  Action: [
                    "guardduty:CreateDetector",
                    "iam:CreateServiceLinkedRole",
                  ],
                  Resource: "*",
                },
              ],
            },
          },
        ],
      },
    );

    const autoRemediateGdDash001LogGroup = new logs.CfnLogGroup(
      this,
      "AutoRemediateGDDash001LogGroup",
      {
        logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateGD-001",
        retentionInDays: 30,
      },
    );

    const autoRemediateIam001Role = new iam.CfnRole(
      this,
      "AutoRemediateIAM001Role",
      {
        roleName: "AutoRemediateIAM-001Role",
        assumeRolePolicyDocument: {
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Allow",
              Principal: {
                Service: ["lambda.amazonaws.com"],
              },
              Action: ["sts:AssumeRole"],
            },
          ],
        },
        policies: [
          {
            policyName: "AutoRemediationXRayPolicy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: ["xray:PutTraceSegments", "xray:PutTelemetryRecords"],
                  Resource: "*",
                },
              ],
            },
          },
          {
            policyName: "AutoRemediateIAM-001Policy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: [
                    "logs:CreateLogGroup",
                    "logs:CreateLogStream",
                    "logs:PutLogEvents",
                  ],
                  Resource: [
                    [
                      "arn:aws:logs",
                      this.region,
                      this.account,
                      "log-group:/aws/lambda/*:*:*",
                    ].join(":"),
                  ],
                },
                {
                  Effect: "Allow",
                  Action: ["iam:UpdateAccessKey"],
                  Resource: "*",
                },
              ],
            },
          },
        ],
      },
    );

    const autoRemediateIam029Role = new iam.CfnRole(
      this,
      "AutoRemediateIAM029Role",
      {
        roleName: "AutoRemediateIAM-029Role",
        assumeRolePolicyDocument: {
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Allow",
              Principal: {
                Service: ["lambda.amazonaws.com"],
              },
              Action: ["sts:AssumeRole"],
            },
          ],
        },
        policies: [
          {
            policyName: "AutoRemediationXRayPolicy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: ["xray:PutTraceSegments", "xray:PutTelemetryRecords"],
                  Resource: "*",
                },
              ],
            },
          },
          {
            policyName: "AutoRemediateIAM-029Policy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: [
                    "logs:CreateLogGroup",
                    "logs:CreateLogStream",
                    "logs:PutLogEvents",
                  ],
                  Resource: [
                    [
                      "arn:aws:logs",
                      this.region,
                      this.account,
                      "log-group:/aws/lambda/*:*:*",
                    ].join(":"),
                  ],
                },
                {
                  Effect: "Allow",
                  Action: [
                    "iam:DeleteUser",
                    "iam:DeleteUserPolicy",
                    "iam:DeleteLoginProfile",
                    "iam:DetachUserPolicy",
                    "iam:ListAttachedUserPolicies",
                    "iam:ListUserPolicies",
                    "iam:ListGroupsForUser",
                    "iam:RemoveUserFromGroup",
                  ],
                  Resource: "*",
                },
              ],
            },
          },
        ],
      },
    );

    const autoRemediateIam038Role = new iam.CfnRole(
      this,
      "AutoRemediateIAM038Role",
      {
        roleName: "AutoRemediateIAM-038Role",
        assumeRolePolicyDocument: {
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Allow",
              Principal: {
                Service: ["lambda.amazonaws.com"],
              },
              Action: ["sts:AssumeRole"],
            },
          ],
        },
        policies: [
          {
            policyName: "AutoRemediationXRayPolicy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: ["xray:PutTraceSegments", "xray:PutTelemetryRecords"],
                  Resource: "*",
                },
              ],
            },
          },
          {
            policyName: "AutoRemediateIAM-038Policy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: [
                    "logs:CreateLogGroup",
                    "logs:CreateLogStream",
                    "logs:PutLogEvents",
                  ],
                  Resource: [
                    [
                      "arn:aws:logs",
                      this.region,
                      this.account,
                      "log-group:/aws/lambda/*:*:*",
                    ].join(":"),
                  ],
                },
                {
                  Effect: "Allow",
                  Action: ["iam:UpdateAccessKey"],
                  Resource: "*",
                },
              ],
            },
          },
        ],
      },
    );

    const autoRemediateIamDash001LogGroup = new logs.CfnLogGroup(
      this,
      "AutoRemediateIAMDash001LogGroup",
      {
        logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateIAM-001",
        retentionInDays: 30,
      },
    );

    const autoRemediateIamDash029LogGroup = new logs.CfnLogGroup(
      this,
      "AutoRemediateIAMDash029LogGroup",
      {
        logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateIAM-029",
        retentionInDays: 30,
      },
    );

    const autoRemediateIamDash038LogGroup = new logs.CfnLogGroup(
      this,
      "AutoRemediateIAMDash038LogGroup",
      {
        logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateIAM-038",
        retentionInDays: 30,
      },
    );

    const autoRemediateKms002Role = new iam.CfnRole(
      this,
      "AutoRemediateKMS002Role",
      {
        roleName: "AutoRemediateKMS-002Role",
        assumeRolePolicyDocument: {
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Allow",
              Principal: {
                Service: ["lambda.amazonaws.com"],
              },
              Action: ["sts:AssumeRole"],
            },
          ],
        },
        policies: [
          {
            policyName: "AutoRemediationXRayPolicy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: ["xray:PutTraceSegments", "xray:PutTelemetryRecords"],
                  Resource: "*",
                },
              ],
            },
          },
          {
            policyName: "AutoRemediateKMS-002Policy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: [
                    "logs:CreateLogGroup",
                    "logs:CreateLogStream",
                    "logs:PutLogEvents",
                  ],
                  Resource: [
                    [
                      "arn:aws:logs",
                      this.region,
                      this.account,
                      "log-group:/aws/lambda/*:*:*",
                    ].join(":"),
                  ],
                },
                {
                  Effect: "Allow",
                  Action: ["kms:EnableKeyRotation"],
                  Resource: "*",
                },
              ],
            },
          },
        ],
      },
    );

    const autoRemediateKms004Role = new iam.CfnRole(
      this,
      "AutoRemediateKMS004Role",
      {
        roleName: "AutoRemediateKMS-004Role",
        assumeRolePolicyDocument: {
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Allow",
              Principal: {
                Service: ["lambda.amazonaws.com"],
              },
              Action: ["sts:AssumeRole"],
            },
          ],
        },
        policies: [
          {
            policyName: "AutoRemediationXRayPolicy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: ["xray:PutTraceSegments", "xray:PutTelemetryRecords"],
                  Resource: "*",
                },
              ],
            },
          },
          {
            policyName: "AutoRemediateKMS-004Policy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: [
                    "logs:CreateLogGroup",
                    "logs:CreateLogStream",
                    "logs:PutLogEvents",
                  ],
                  Resource: [
                    [
                      "arn:aws:logs",
                      this.region,
                      this.account,
                      "log-group:/aws/lambda/*:*:*",
                    ].join(":"),
                  ],
                },
                {
                  Effect: "Allow",
                  Action: ["kms:CancelKeyDeletion"],
                  Resource: "*",
                },
              ],
            },
          },
        ],
      },
    );

    const autoRemediateKmsDash002LogGroup = new logs.CfnLogGroup(
      this,
      "AutoRemediateKMSDash002LogGroup",
      {
        logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateKMS-002",
        retentionInDays: 30,
      },
    );

    const autoRemediateKmsDash004LogGroup = new logs.CfnLogGroup(
      this,
      "AutoRemediateKMSDash004LogGroup",
      {
        logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateKMS-004",
        retentionInDays: 30,
      },
    );

    const autoRemediateKinesis001Role = new iam.CfnRole(
      this,
      "AutoRemediateKinesis001Role",
      {
        roleName: "AutoRemediateKinesis-001Role",
        assumeRolePolicyDocument: {
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Allow",
              Principal: {
                Service: ["lambda.amazonaws.com"],
              },
              Action: ["sts:AssumeRole"],
            },
          ],
        },
        policies: [
          {
            policyName: "AutoRemediationXRayPolicy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: ["xray:PutTraceSegments", "xray:PutTelemetryRecords"],
                  Resource: "*",
                },
              ],
            },
          },
          {
            policyName: "Kinesis-001Policy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: [
                    "logs:CreateLogGroup",
                    "logs:CreateLogStream",
                    "logs:PutLogEvents",
                  ],
                  Resource: [
                    [
                      "arn:aws:logs",
                      this.region,
                      this.account,
                      "log-group:/aws/lambda/*:*:*",
                    ].join(":"),
                  ],
                },
                {
                  Effect: "Allow",
                  Action: [
                    "kms:ListKeys",
                    "kms:ListAliases",
                    "kms:DescribeKey",
                    "kinesis:StartStreamEncryption",
                  ],
                  Resource: "*",
                },
              ],
            },
          },
        ],
      },
    );

    const autoRemediateKinesisDash001LogGroup = new logs.CfnLogGroup(
      this,
      "AutoRemediateKinesisDash001LogGroup",
      {
        logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateKinesis-001",
        retentionInDays: 30,
      },
    );

    const autoRemediateLambda003Role = new iam.CfnRole(
      this,
      "AutoRemediateLambda003Role",
      {
        roleName: "AutoRemediateLambda-003Role",
        assumeRolePolicyDocument: {
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Allow",
              Principal: {
                Service: ["lambda.amazonaws.com"],
              },
              Action: ["sts:AssumeRole"],
            },
          ],
        },
        policies: [
          {
            policyName: "AutoRemediationXRayPolicy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: ["xray:PutTraceSegments", "xray:PutTelemetryRecords"],
                  Resource: "*",
                },
              ],
            },
          },
          {
            policyName: "AutoRemediateLambda-003Policy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: [
                    "logs:CreateLogGroup",
                    "logs:CreateLogStream",
                    "logs:PutLogEvents",
                  ],
                  Resource: [
                    [
                      "arn:aws:logs",
                      this.region,
                      this.account,
                      "log-group:/aws/lambda/*:*:*",
                    ].join(":"),
                  ],
                },
                {
                  Effect: "Allow",
                  Action: [
                    "lambda:UpdateFunctionConfiguration",
                    "lambda:GetFunctionConfiguration",
                    "iam:AttachRolePolicy",
                  ],
                  Resource: "*",
                },
              ],
            },
          },
        ],
      },
    );

    const autoRemediateLambdaDash003LogGroup = new logs.CfnLogGroup(
      this,
      "AutoRemediateLambdaDash003LogGroup",
      {
        logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateLambda-003",
        retentionInDays: 30,
      },
    );

    const autoRemediateOrchestratorLogGroup = new logs.CfnLogGroup(
      this,
      "AutoRemediateOrchestratorLogGroup",
      {
        logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateOrchestrator",
        retentionInDays: 30,
      },
    );

    const autoRemediateOrganizations002Role = new iam.CfnRole(
      this,
      "AutoRemediateOrganizations002Role",
      {
        roleName: "AutoRemediateOrganizations-002Role",
        assumeRolePolicyDocument: {
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Allow",
              Principal: {
                Service: ["lambda.amazonaws.com"],
              },
              Action: ["sts:AssumeRole"],
            },
          ],
        },
        policies: [
          {
            policyName: "AutoRemediationXRayPolicy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: ["xray:PutTraceSegments", "xray:PutTelemetryRecords"],
                  Resource: "*",
                },
              ],
            },
          },
          {
            policyName: "AutoRemediateOrganizations-002Policy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: [
                    "logs:CreateLogGroup",
                    "logs:CreateLogStream",
                    "logs:PutLogEvents",
                  ],
                  Resource: [
                    [
                      "arn:aws:logs",
                      this.region,
                      this.account,
                      "log-group:/aws/lambda/*:*:*",
                    ].join(":"),
                  ],
                },
                {
                  Effect: "Allow",
                  Action: ["organizations:EnableAllFeatures"],
                  Resource: "*",
                },
              ],
            },
          },
        ],
      },
    );

    const autoRemediateOrganizationsDash002LogGroup = new logs.CfnLogGroup(
      this,
      "AutoRemediateOrganizationsDash002LogGroup",
      {
        logGroupName:
          "/aws/lambda/auto-remediate-v1-AutoRemediateOrganizations-002",
        retentionInDays: 30,
      },
    );

    const autoRemediateRds006Role = new iam.CfnRole(
      this,
      "AutoRemediateRDS006Role",
      {
        roleName: "AutoRemediateRDS-006Role",
        assumeRolePolicyDocument: {
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Allow",
              Principal: {
                Service: ["lambda.amazonaws.com"],
              },
              Action: ["sts:AssumeRole"],
            },
          ],
        },
        policies: [
          {
            policyName: "AutoRemediationXRayPolicy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: ["xray:PutTraceSegments", "xray:PutTelemetryRecords"],
                  Resource: "*",
                },
              ],
            },
          },
          {
            policyName: "AutoRemediateRDS-006Policy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: [
                    "logs:CreateLogGroup",
                    "logs:CreateLogStream",
                    "logs:PutLogEvents",
                  ],
                  Resource: [
                    [
                      "arn:aws:logs",
                      this.region,
                      this.account,
                      "log-group:/aws/lambda/*:*:*",
                    ].join(":"),
                  ],
                },
                {
                  Effect: "Allow",
                  Action: ["rds:ModifyDbInstance"],
                  Resource: "*",
                },
              ],
            },
          },
        ],
      },
    );

    const autoRemediateRds008Role = new iam.CfnRole(
      this,
      "AutoRemediateRDS008Role",
      {
        roleName: "AutoRemediateRDS-008Role",
        assumeRolePolicyDocument: {
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Allow",
              Principal: {
                Service: ["lambda.amazonaws.com"],
              },
              Action: ["sts:AssumeRole"],
            },
          ],
        },
        policies: [
          {
            policyName: "AutoRemediationXRayPolicy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: ["xray:PutTraceSegments", "xray:PutTelemetryRecords"],
                  Resource: "*",
                },
              ],
            },
          },
          {
            policyName: "AutoRemediateRDS-008Policy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: [
                    "logs:CreateLogGroup",
                    "logs:CreateLogStream",
                    "logs:PutLogEvents",
                  ],
                  Resource: [
                    [
                      "arn:aws:logs",
                      this.region,
                      this.account,
                      "log-group:/aws/lambda/*:*:*",
                    ].join(":"),
                  ],
                },
                {
                  Effect: "Allow",
                  Action: ["rds:ModifyDBInstance"],
                  Resource: "*",
                },
              ],
            },
          },
        ],
      },
    );

    const autoRemediateRds023Role = new iam.CfnRole(
      this,
      "AutoRemediateRDS023Role",
      {
        roleName: "AutoRemediateRDS-023Role",
        assumeRolePolicyDocument: {
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Allow",
              Principal: {
                Service: ["lambda.amazonaws.com"],
              },
              Action: ["sts:AssumeRole"],
            },
          ],
        },
        policies: [
          {
            policyName: "AutoRemediationXRayPolicy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: ["xray:PutTraceSegments", "xray:PutTelemetryRecords"],
                  Resource: "*",
                },
              ],
            },
          },
          {
            policyName: "AutoRemediateRDS-023Policy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: [
                    "logs:CreateLogGroup",
                    "logs:CreateLogStream",
                    "logs:PutLogEvents",
                  ],
                  Resource: [
                    [
                      "arn:aws:logs",
                      this.region,
                      this.account,
                      "log-group:/aws/lambda/*:*:*",
                    ].join(":"),
                  ],
                },
                {
                  Effect: "Allow",
                  Action: ["rds:ModifyDBSnapshotAttribute"],
                  Resource: "*",
                },
              ],
            },
          },
        ],
      },
    );

    const autoRemediateRdsDash006LogGroup = new logs.CfnLogGroup(
      this,
      "AutoRemediateRDSDash006LogGroup",
      {
        logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateRDS-006",
        retentionInDays: 30,
      },
    );

    const autoRemediateRdsDash008LogGroup = new logs.CfnLogGroup(
      this,
      "AutoRemediateRDSDash008LogGroup",
      {
        logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateRDS-008",
        retentionInDays: 30,
      },
    );

    const autoRemediateRdsDash023LogGroup = new logs.CfnLogGroup(
      this,
      "AutoRemediateRDSDash023LogGroup",
      {
        logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateRDS-023",
        retentionInDays: 30,
      },
    );

    const autoRemediateRs001Role = new iam.CfnRole(
      this,
      "AutoRemediateRS001Role",
      {
        roleName: "AutoRemediateRS-001Role",
        assumeRolePolicyDocument: {
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Allow",
              Principal: {
                Service: ["lambda.amazonaws.com"],
              },
              Action: ["sts:AssumeRole"],
            },
          ],
        },
        policies: [
          {
            policyName: "AutoRemediationXRayPolicy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: ["xray:PutTraceSegments", "xray:PutTelemetryRecords"],
                  Resource: "*",
                },
              ],
            },
          },
          {
            policyName: "AutoRemediateRS-001Policy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: [
                    "logs:CreateLogGroup",
                    "logs:CreateLogStream",
                    "logs:PutLogEvents",
                  ],
                  Resource: [
                    [
                      "arn:aws:logs",
                      this.region,
                      this.account,
                      "log-group:/aws/lambda/*:*:*",
                    ].join(":"),
                  ],
                },
                {
                  Effect: "Allow",
                  Action: ["redshift:ModifyCluster"],
                  Resource: "*",
                },
              ],
            },
          },
        ],
      },
    );

    const autoRemediateRs019Role = new iam.CfnRole(
      this,
      "AutoRemediateRS019Role",
      {
        roleName: "AutoRemediateRS-019Role",
        assumeRolePolicyDocument: {
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Allow",
              Principal: {
                Service: ["lambda.amazonaws.com"],
              },
              Action: ["sts:AssumeRole"],
            },
          ],
        },
        policies: [
          {
            policyName: "AutoRemediationXRayPolicy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: ["xray:PutTraceSegments", "xray:PutTelemetryRecords"],
                  Resource: "*",
                },
              ],
            },
          },
          {
            policyName: "AutoRemediateRS-019Policy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: [
                    "logs:CreateLogGroup",
                    "logs:CreateLogStream",
                    "logs:PutLogEvents",
                  ],
                  Resource: [
                    [
                      "arn:aws:logs",
                      this.region,
                      this.account,
                      "log-group:/aws/lambda/*:*:*",
                    ].join(":"),
                  ],
                },
                {
                  Effect: "Allow",
                  Action: ["redshift:ModifyCluster"],
                  Resource: "*",
                },
              ],
            },
          },
        ],
      },
    );

    const autoRemediateRs023Role = new iam.CfnRole(
      this,
      "AutoRemediateRS023Role",
      {
        roleName: "AutoRemediateRS-023Role",
        assumeRolePolicyDocument: {
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Allow",
              Principal: {
                Service: ["lambda.amazonaws.com"],
              },
              Action: ["sts:AssumeRole"],
            },
          ],
        },
        policies: [
          {
            policyName: "AutoRemediationXRayPolicy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: ["xray:PutTraceSegments", "xray:PutTelemetryRecords"],
                  Resource: "*",
                },
              ],
            },
          },
          {
            policyName: "AutoRemediateRS-023Policy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: [
                    "logs:CreateLogGroup",
                    "logs:CreateLogStream",
                    "logs:PutLogEvents",
                  ],
                  Resource: [
                    [
                      "arn:aws:logs",
                      this.region,
                      this.account,
                      "log-group:/aws/lambda/*:*:*",
                    ].join(":"),
                  ],
                },
                {
                  Effect: "Allow",
                  Action: ["redshift:ModifyClusterParameterGroup"],
                  Resource: "*",
                },
              ],
            },
          },
        ],
      },
    );

    const autoRemediateRsDash001LogGroup = new logs.CfnLogGroup(
      this,
      "AutoRemediateRSDash001LogGroup",
      {
        logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateRS-001",
        retentionInDays: 30,
      },
    );

    const autoRemediateRsDash019LogGroup = new logs.CfnLogGroup(
      this,
      "AutoRemediateRSDash019LogGroup",
      {
        logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateRS-019",
        retentionInDays: 30,
      },
    );

    const autoRemediateRsDash023LogGroup = new logs.CfnLogGroup(
      this,
      "AutoRemediateRSDash023LogGroup",
      {
        logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateRS-023",
        retentionInDays: 30,
      },
    );

    const autoRemediateS3001Role = new iam.CfnRole(
      this,
      "AutoRemediateS3001Role",
      {
        roleName: "AutoRemediateS3-001Role",
        assumeRolePolicyDocument: {
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Allow",
              Principal: {
                Service: ["lambda.amazonaws.com"],
              },
              Action: ["sts:AssumeRole"],
            },
          ],
        },
        policies: [
          {
            policyName: "AutoRemediationXRayPolicy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: ["xray:PutTraceSegments", "xray:PutTelemetryRecords"],
                  Resource: "*",
                },
              ],
            },
          },
          {
            policyName: "AutoRemediateS3-001Policy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: [
                    "logs:CreateLogGroup",
                    "logs:CreateLogStream",
                    "logs:PutLogEvents",
                  ],
                  Resource: [
                    [
                      "arn:aws:logs",
                      this.region,
                      this.account,
                      "log-group:/aws/lambda/*:*:*",
                    ].join(":"),
                  ],
                },
                {
                  Effect: "Allow",
                  Action: ["s3:GetBucketAcl", "s3:PutBucketAcl"],
                  Resource: "*",
                },
              ],
            },
          },
        ],
      },
    );

    const autoRemediateS3002Role = new iam.CfnRole(
      this,
      "AutoRemediateS3002Role",
      {
        roleName: "AutoRemediateS3-002Role",
        assumeRolePolicyDocument: {
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Allow",
              Principal: {
                Service: ["lambda.amazonaws.com"],
              },
              Action: ["sts:AssumeRole"],
            },
          ],
        },
        policies: [
          {
            policyName: "AutoRemediationXRayPolicy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: ["xray:PutTraceSegments", "xray:PutTelemetryRecords"],
                  Resource: "*",
                },
              ],
            },
          },
          {
            policyName: "AutoRemediateS3-002Policy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: [
                    "logs:CreateLogGroup",
                    "logs:CreateLogStream",
                    "logs:PutLogEvents",
                  ],
                  Resource: [
                    [
                      "arn:aws:logs",
                      this.region,
                      this.account,
                      "log-group:/aws/lambda/*:*:*",
                    ].join(":"),
                  ],
                },
                {
                  Effect: "Allow",
                  Action: ["s3:GetBucketAcl", "s3:PutBucketAcl"],
                  Resource: "*",
                },
              ],
            },
          },
        ],
      },
    );

    const autoRemediateS3003Role = new iam.CfnRole(
      this,
      "AutoRemediateS3003Role",
      {
        roleName: "AutoRemediateS3-003Role",
        assumeRolePolicyDocument: {
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Allow",
              Principal: {
                Service: ["lambda.amazonaws.com"],
              },
              Action: ["sts:AssumeRole"],
            },
          ],
        },
        policies: [
          {
            policyName: "AutoRemediationXRayPolicy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: ["xray:PutTraceSegments", "xray:PutTelemetryRecords"],
                  Resource: "*",
                },
              ],
            },
          },
          {
            policyName: "AutoRemediateS3-003Policy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: [
                    "logs:CreateLogGroup",
                    "logs:CreateLogStream",
                    "logs:PutLogEvents",
                  ],
                  Resource: [
                    [
                      "arn:aws:logs",
                      this.region,
                      this.account,
                      "log-group:/aws/lambda/*:*:*",
                    ].join(":"),
                  ],
                },
                {
                  Effect: "Allow",
                  Action: ["s3:GetBucketAcl", "s3:PutBucketAcl"],
                  Resource: "*",
                },
              ],
            },
          },
        ],
      },
    );

    const autoRemediateS3004Role = new iam.CfnRole(
      this,
      "AutoRemediateS3004Role",
      {
        roleName: "AutoRemediateS3-004Role",
        assumeRolePolicyDocument: {
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Allow",
              Principal: {
                Service: ["lambda.amazonaws.com"],
              },
              Action: ["sts:AssumeRole"],
            },
          ],
        },
        policies: [
          {
            policyName: "AutoRemediationXRayPolicy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: ["xray:PutTraceSegments", "xray:PutTelemetryRecords"],
                  Resource: "*",
                },
              ],
            },
          },
          {
            policyName: "AutoRemediateS3-004Policy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: [
                    "logs:CreateLogGroup",
                    "logs:CreateLogStream",
                    "logs:PutLogEvents",
                  ],
                  Resource: [
                    [
                      "arn:aws:logs",
                      this.region,
                      this.account,
                      "log-group:/aws/lambda/*:*:*",
                    ].join(":"),
                  ],
                },
                {
                  Effect: "Allow",
                  Action: ["s3:GetBucketAcl", "s3:PutBucketAcl"],
                  Resource: "*",
                },
              ],
            },
          },
        ],
      },
    );

    const autoRemediateS3005Role = new iam.CfnRole(
      this,
      "AutoRemediateS3005Role",
      {
        roleName: "AutoRemediateS3-005Role",
        assumeRolePolicyDocument: {
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Allow",
              Principal: {
                Service: ["lambda.amazonaws.com"],
              },
              Action: ["sts:AssumeRole"],
            },
          ],
        },
        policies: [
          {
            policyName: "AutoRemediationXRayPolicy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: ["xray:PutTraceSegments", "xray:PutTelemetryRecords"],
                  Resource: "*",
                },
              ],
            },
          },
          {
            policyName: "AutoRemediateS3-005Policy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: [
                    "logs:CreateLogGroup",
                    "logs:CreateLogStream",
                    "logs:PutLogEvents",
                  ],
                  Resource: [
                    [
                      "arn:aws:logs",
                      this.region,
                      this.account,
                      "log-group:/aws/lambda/*:*:*",
                    ].join(":"),
                  ],
                },
                {
                  Effect: "Allow",
                  Action: ["s3:GetBucketAcl", "s3:PutBucketAcl"],
                  Resource: "*",
                },
              ],
            },
          },
        ],
      },
    );

    const autoRemediateS3006Role = new iam.CfnRole(
      this,
      "AutoRemediateS3006Role",
      {
        roleName: "AutoRemediateS3-006Role",
        assumeRolePolicyDocument: {
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Allow",
              Principal: {
                Service: ["lambda.amazonaws.com"],
              },
              Action: ["sts:AssumeRole"],
            },
          ],
        },
        policies: [
          {
            policyName: "AutoRemediationXRayPolicy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: ["xray:PutTraceSegments", "xray:PutTelemetryRecords"],
                  Resource: "*",
                },
              ],
            },
          },
          {
            policyName: "AutoRemediateS3-006Policy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: [
                    "logs:CreateLogGroup",
                    "logs:CreateLogStream",
                    "logs:PutLogEvents",
                  ],
                  Resource: [
                    [
                      "arn:aws:logs",
                      this.region,
                      this.account,
                      "log-group:/aws/lambda/*:*:*",
                    ].join(":"),
                  ],
                },
                {
                  Effect: "Allow",
                  Action: ["s3:GetBucketAcl", "s3:PutBucketAcl"],
                  Resource: "*",
                },
              ],
            },
          },
        ],
      },
    );

    const autoRemediateS3007Role = new iam.CfnRole(
      this,
      "AutoRemediateS3007Role",
      {
        roleName: "AutoRemediateS3-007Role",
        assumeRolePolicyDocument: {
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Allow",
              Principal: {
                Service: ["lambda.amazonaws.com"],
              },
              Action: ["sts:AssumeRole"],
            },
          ],
        },
        policies: [
          {
            policyName: "AutoRemediationXRayPolicy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: ["xray:PutTraceSegments", "xray:PutTelemetryRecords"],
                  Resource: "*",
                },
              ],
            },
          },
          {
            policyName: "AutoRemediateS3-007Policy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: [
                    "logs:CreateLogGroup",
                    "logs:CreateLogStream",
                    "logs:PutLogEvents",
                  ],
                  Resource: [
                    [
                      "arn:aws:logs",
                      this.region,
                      this.account,
                      "log-group:/aws/lambda/*:*:*",
                    ].join(":"),
                  ],
                },
                {
                  Effect: "Allow",
                  Action: ["s3:GetBucketAcl", "s3:PutBucketAcl"],
                  Resource: "*",
                },
              ],
            },
          },
        ],
      },
    );

    const autoRemediateS3008Role = new iam.CfnRole(
      this,
      "AutoRemediateS3008Role",
      {
        roleName: "AutoRemediateS3-008Role",
        assumeRolePolicyDocument: {
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Allow",
              Principal: {
                Service: ["lambda.amazonaws.com"],
              },
              Action: ["sts:AssumeRole"],
            },
          ],
        },
        policies: [
          {
            policyName: "AutoRemediationXRayPolicy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: ["xray:PutTraceSegments", "xray:PutTelemetryRecords"],
                  Resource: "*",
                },
              ],
            },
          },
          {
            policyName: "AutoRemediateS3-008Policy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: [
                    "logs:CreateLogGroup",
                    "logs:CreateLogStream",
                    "logs:PutLogEvents",
                  ],
                  Resource: [
                    [
                      "arn:aws:logs",
                      this.region,
                      this.account,
                      "log-group:/aws/lambda/*:*:*",
                    ].join(":"),
                  ],
                },
                {
                  Effect: "Allow",
                  Action: ["s3:GetBucketAcl", "s3:PutBucketAcl"],
                  Resource: "*",
                },
              ],
            },
          },
        ],
      },
    );

    const autoRemediateS3009Role = new iam.CfnRole(
      this,
      "AutoRemediateS3009Role",
      {
        roleName: "AutoRemediateS3-009Role",
        assumeRolePolicyDocument: {
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Allow",
              Principal: {
                Service: ["lambda.amazonaws.com"],
              },
              Action: ["sts:AssumeRole"],
            },
          ],
        },
        policies: [
          {
            policyName: "AutoRemediationXRayPolicy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: ["xray:PutTraceSegments", "xray:PutTelemetryRecords"],
                  Resource: "*",
                },
              ],
            },
          },
          {
            policyName: "AutoRemediateS3-009Policy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: [
                    "logs:CreateLogGroup",
                    "logs:CreateLogStream",
                    "logs:PutLogEvents",
                  ],
                  Resource: [
                    [
                      "arn:aws:logs",
                      this.region,
                      this.account,
                      "log-group:/aws/lambda/*:*:*",
                    ].join(":"),
                  ],
                },
                {
                  Effect: "Allow",
                  Action: ["s3:GetBucketAcl", "s3:PutBucketAcl"],
                  Resource: "*",
                },
              ],
            },
          },
        ],
      },
    );

    const autoRemediateS3010Role = new iam.CfnRole(
      this,
      "AutoRemediateS3010Role",
      {
        roleName: "AutoRemediateS3-010Role",
        assumeRolePolicyDocument: {
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Allow",
              Principal: {
                Service: ["lambda.amazonaws.com"],
              },
              Action: ["sts:AssumeRole"],
            },
          ],
        },
        policies: [
          {
            policyName: "AutoRemediationXRayPolicy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: ["xray:PutTraceSegments", "xray:PutTelemetryRecords"],
                  Resource: "*",
                },
              ],
            },
          },
          {
            policyName: "AutoRemediateS3-010Policy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: [
                    "logs:CreateLogGroup",
                    "logs:CreateLogStream",
                    "logs:PutLogEvents",
                  ],
                  Resource: [
                    [
                      "arn:aws:logs",
                      this.region,
                      this.account,
                      "log-group:/aws/lambda/*:*:*",
                    ].join(":"),
                  ],
                },
                {
                  Effect: "Allow",
                  Action: ["s3:GetBucketAcl", "s3:PutBucketAcl"],
                  Resource: "*",
                },
              ],
            },
          },
        ],
      },
    );

    const autoRemediateS3012Role = new iam.CfnRole(
      this,
      "AutoRemediateS3012Role",
      {
        roleName: "AutoRemediateS3-012Role",
        assumeRolePolicyDocument: {
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Allow",
              Principal: {
                Service: ["lambda.amazonaws.com"],
              },
              Action: ["sts:AssumeRole"],
            },
          ],
        },
        policies: [
          {
            policyName: "AutoRemediationXRayPolicy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: ["xray:PutTraceSegments", "xray:PutTelemetryRecords"],
                  Resource: "*",
                },
              ],
            },
          },
          {
            policyName: "AutoRemediateS3-012Policy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: [
                    "logs:CreateLogGroup",
                    "logs:CreateLogStream",
                    "logs:PutLogEvents",
                  ],
                  Resource: [
                    [
                      "arn:aws:logs",
                      this.region,
                      this.account,
                      "log-group:/aws/lambda/*:*:*",
                    ].join(":"),
                  ],
                },
                {
                  Effect: "Allow",
                  Action: ["s3:PutBucketVersioning"],
                  Resource: "*",
                },
              ],
            },
          },
        ],
      },
    );

    const autoRemediateS3014Role = new iam.CfnRole(
      this,
      "AutoRemediateS3014Role",
      {
        roleName: "AutoRemediateS3-014Role",
        assumeRolePolicyDocument: {
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Allow",
              Principal: {
                Service: ["lambda.amazonaws.com"],
              },
              Action: ["sts:AssumeRole"],
            },
          ],
        },
        policies: [
          {
            policyName: "AutoRemediationXRayPolicy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: ["xray:PutTraceSegments", "xray:PutTelemetryRecords"],
                  Resource: "*",
                },
              ],
            },
          },
          {
            policyName: "AutoRemediateS3-014Policy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: [
                    "logs:CreateLogGroup",
                    "logs:CreateLogStream",
                    "logs:PutLogEvents",
                  ],
                  Resource: [
                    [
                      "arn:aws:logs",
                      this.region,
                      this.account,
                      "log-group:/aws/lambda/*:*:*",
                    ].join(":"),
                  ],
                },
                {
                  Effect: "Allow",
                  Action: ["s3:GetBucketPolicy", "s3:PutBucketPolicy"],
                  Resource: "*",
                },
              ],
            },
          },
        ],
      },
    );

    const autoRemediateS3016Role = new iam.CfnRole(
      this,
      "AutoRemediateS3016Role",
      {
        roleName: "AutoRemediateS3-016Role",
        assumeRolePolicyDocument: {
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Allow",
              Principal: {
                Service: ["lambda.amazonaws.com"],
              },
              Action: ["sts:AssumeRole"],
            },
          ],
        },
        policies: [
          {
            policyName: "AutoRemediationXRayPolicy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: ["xray:PutTraceSegments", "xray:PutTelemetryRecords"],
                  Resource: "*",
                },
              ],
            },
          },
          {
            policyName: "AutoRemediateS3-016Policy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: [
                    "logs:CreateLogGroup",
                    "logs:CreateLogStream",
                    "logs:PutLogEvents",
                  ],
                  Resource: [
                    [
                      "arn:aws:logs",
                      this.region,
                      this.account,
                      "log-group:/aws/lambda/*:*:*",
                    ].join(":"),
                  ],
                },
                {
                  Effect: "Allow",
                  Action: ["s3:GetBucketPolicy", "s3:PutBucketPolicy"],
                  Resource: "*",
                },
              ],
            },
          },
        ],
      },
    );

    const autoRemediateS3Dash001LogGroup = new logs.CfnLogGroup(
      this,
      "AutoRemediateS3Dash001LogGroup",
      {
        logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateS3-001",
        retentionInDays: 30,
      },
    );

    const autoRemediateS3Dash002LogGroup = new logs.CfnLogGroup(
      this,
      "AutoRemediateS3Dash002LogGroup",
      {
        logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateS3-002",
        retentionInDays: 30,
      },
    );

    const autoRemediateS3Dash003LogGroup = new logs.CfnLogGroup(
      this,
      "AutoRemediateS3Dash003LogGroup",
      {
        logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateS3-003",
        retentionInDays: 30,
      },
    );

    const autoRemediateS3Dash004LogGroup = new logs.CfnLogGroup(
      this,
      "AutoRemediateS3Dash004LogGroup",
      {
        logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateS3-004",
        retentionInDays: 30,
      },
    );

    const autoRemediateS3Dash005LogGroup = new logs.CfnLogGroup(
      this,
      "AutoRemediateS3Dash005LogGroup",
      {
        logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateS3-005",
        retentionInDays: 30,
      },
    );

    const autoRemediateS3Dash006LogGroup = new logs.CfnLogGroup(
      this,
      "AutoRemediateS3Dash006LogGroup",
      {
        logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateS3-006",
        retentionInDays: 30,
      },
    );

    const autoRemediateS3Dash007LogGroup = new logs.CfnLogGroup(
      this,
      "AutoRemediateS3Dash007LogGroup",
      {
        logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateS3-007",
        retentionInDays: 30,
      },
    );

    const autoRemediateS3Dash008LogGroup = new logs.CfnLogGroup(
      this,
      "AutoRemediateS3Dash008LogGroup",
      {
        logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateS3-008",
        retentionInDays: 30,
      },
    );

    const autoRemediateS3Dash009LogGroup = new logs.CfnLogGroup(
      this,
      "AutoRemediateS3Dash009LogGroup",
      {
        logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateS3-009",
        retentionInDays: 30,
      },
    );

    const autoRemediateS3Dash010LogGroup = new logs.CfnLogGroup(
      this,
      "AutoRemediateS3Dash010LogGroup",
      {
        logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateS3-010",
        retentionInDays: 30,
      },
    );

    const autoRemediateS3Dash012LogGroup = new logs.CfnLogGroup(
      this,
      "AutoRemediateS3Dash012LogGroup",
      {
        logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateS3-012",
        retentionInDays: 30,
      },
    );

    const autoRemediateS3Dash014LogGroup = new logs.CfnLogGroup(
      this,
      "AutoRemediateS3Dash014LogGroup",
      {
        logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateS3-014",
        retentionInDays: 30,
      },
    );

    const autoRemediateS3Dash016LogGroup = new logs.CfnLogGroup(
      this,
      "AutoRemediateS3Dash016LogGroup",
      {
        logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateS3-016",
        retentionInDays: 30,
      },
    );

    const autoRemediateSqs004Role = new iam.CfnRole(
      this,
      "AutoRemediateSQS004Role",
      {
        roleName: "AutoRemediateSQS-004Role",
        assumeRolePolicyDocument: {
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Allow",
              Principal: {
                Service: ["lambda.amazonaws.com"],
              },
              Action: ["sts:AssumeRole"],
            },
          ],
        },
        policies: [
          {
            policyName: "AutoRemediationXRayPolicy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: ["xray:PutTraceSegments", "xray:PutTelemetryRecords"],
                  Resource: "*",
                },
              ],
            },
          },
          {
            policyName: "SQS-004Policy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: [
                    "logs:CreateLogGroup",
                    "logs:CreateLogStream",
                    "logs:PutLogEvents",
                  ],
                  Resource: [
                    [
                      "arn:aws:logs",
                      this.region,
                      this.account,
                      "log-group:/aws/lambda/*:*:*",
                    ].join(":"),
                  ],
                },
                {
                  Effect: "Allow",
                  Action: [
                    "kms:ListKeys",
                    "kms:ListAliases",
                    "kms:DescribeKey",
                    "sqs:SetQueueAttributes",
                  ],
                  Resource: "*",
                },
              ],
            },
          },
        ],
      },
    );

    const autoRemediateSqsDash004LogGroup = new logs.CfnLogGroup(
      this,
      "AutoRemediateSQSDash004LogGroup",
      {
        logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateSQS-004",
        retentionInDays: 30,
      },
    );

    const autoRemediateTrustedAdvisor003Role = new iam.CfnRole(
      this,
      "AutoRemediateTrustedAdvisor003Role",
      {
        roleName: "AutoRemediateTrustedAdvisor-003Role",
        assumeRolePolicyDocument: {
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Allow",
              Principal: {
                Service: ["lambda.amazonaws.com"],
              },
              Action: ["sts:AssumeRole"],
            },
          ],
        },
        policies: [
          {
            policyName: "AutoRemediationXRayPolicy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: ["xray:PutTraceSegments", "xray:PutTelemetryRecords"],
                  Resource: "*",
                },
              ],
            },
          },
          {
            policyName: "AutoRemediateTrustedAdvisor-003Policy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: [
                    "logs:CreateLogGroup",
                    "logs:CreateLogStream",
                    "logs:PutLogEvents",
                  ],
                  Resource: [
                    [
                      "arn:aws:logs",
                      this.region,
                      this.account,
                      "log-group:/aws/lambda/*:*:*",
                    ].join(":"),
                  ],
                },
                {
                  Effect: "Allow",
                  Action: ["iam:UpdateAccessKey"],
                  Resource: "*",
                },
              ],
            },
          },
        ],
      },
    );

    const autoRemediateVpc001Role = new iam.CfnRole(
      this,
      "AutoRemediateVPC001Role",
      {
        roleName: "AutoRemediateVPC-001Role",
        assumeRolePolicyDocument: {
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Allow",
              Principal: {
                Service: ["lambda.amazonaws.com"],
              },
              Action: ["sts:AssumeRole"],
            },
          ],
        },
        policies: [
          {
            policyName: "AutoRemediationXRayPolicy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: ["xray:PutTraceSegments", "xray:PutTelemetryRecords"],
                  Resource: "*",
                },
              ],
            },
          },
          {
            policyName: "AutoRemediateVPC-001Policy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: [
                    "logs:CreateLogGroup",
                    "logs:CreateLogStream",
                    "logs:PutLogEvents",
                  ],
                  Resource: [
                    [
                      "arn:aws:logs",
                      this.region,
                      this.account,
                      "log-group:/aws/lambda/*:*:*",
                    ].join(":"),
                  ],
                },
                {
                  Effect: "Allow",
                  Action: [
                    "iam:AttachRolePolicy",
                    "iam:CreateRole",
                    "iam:GetRole",
                    "iam:PutRolePolicy",
                  ],
                  Resource: "*",
                },
                {
                  Effect: "Allow",
                  Action: ["ec2:CreateFlowLogs", "ec2:DescribeFlowLogs"],
                  Resource: "*",
                },
                {
                  Effect: "Allow",
                  Action: ["iam:PassRole"],
                  Resource: [
                    ["arn:aws:iam:", this.account, "role/VPCFlowLogRole"].join(
                      ":",
                    ),
                  ],
                },
              ],
            },
          },
        ],
      },
    );

    const autoRemediateVpcDash001LogGroup = new logs.CfnLogGroup(
      this,
      "AutoRemediateVPCDash001LogGroup",
      {
        logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateVPC-001",
        retentionInDays: 30,
      },
    );

    const kmsKeySqsQueueFromSns = new kms.CfnKey(
      this,
      "KmsKeySqsQueueFromSns",
      {
        description:
          "Encrypts messages publishes to an SQS queue from an SNS topic",
        enableKeyRotation: true,
        keyPolicy: {
          Version: "2012-10-17",
          Id: "Conformity-SNS-to-SQS-Key-us-west-2",
          Statement: [
            {
              Sid: "Enable IAM User Permissions",
              Effect: "Allow",
              Principal: {
                AWS: ["arn:aws:iam::811620960246:root"],
              },
              Action: "kms:*",
              Resource: "*",
            },
            {
              Sid: "Allow SQS",
              Effect: "Allow",
              Principal: {
                Service: "sqs.amazonaws.com",
              },
              Action: ["kms:GenerateDataKey", "kms:Decrypt", "kms:Encrypt"],
              Resource: "*",
            },
            {
              Sid: "Allow SNS",
              Effect: "Allow",
              Principal: {
                Service: "sns.amazonaws.com",
              },
              Action: ["kms:GenerateDataKey", "kms:Decrypt", "kms:Encrypt"],
              Resource: "*",
            },
          ],
        },
      },
    );

    const snsTopicAutoRemediate = new sns.CfnTopic(
      this,
      "SNSTopicAutoRemediate",
      {
        displayName: "CloudConformity Topic",
        kmsMasterKeyId: "alias/aws/sns",
        topicName: "CloudConformity",
        tags: [
          {
            key: "Service",
            value: "auto-remediate",
          },
          {
            key: "Name",
            value: "CloudConformity",
          },
          {
            key: "Owner",
            value: "CloudConformity",
          },
        ],
      },
    );

    const trustedAdvisorDash003LogGroup = new logs.CfnLogGroup(
      this,
      "TrustedAdvisorDash003LogGroup",
      {
        logGroupName: "/aws/lambda/auto-remediate-v1-TrustedAdvisor-003",
        retentionInDays: 30,
      },
    );

    const functionsPath = "./functions";

    const autoRemediateCfmDash005LambdaFunction = new lambda.Function(
      this,
      "AutoRemediateCFMDash005LambdaFunction",
      {
        code: lambda.Code.fromAsset(functionsPath),
        handler: "AutoRemediateCFM-005.handler",
        runtime: lambda.Runtime.NODEJS_24_X,
        functionName: "auto-remediate-v1-AutoRemediateCFM-005",
        memorySize: 128,
        timeout: cdk.Duration.seconds(120),
        role: iam.Role.fromRoleArn(
          this,
          "AutoRemediateCFMDash005RoleRef",
          autoRemediateCfm005Role.attrArn,
        ),
        tracing: lambda.Tracing.ACTIVE,
        logGroup: logs.LogGroup.fromLogGroupName(
          this,
          "AutoRemediateCFMDash005LogGroupRef",
          autoRemediateCfmDash005LogGroup.ref,
        ),
      },
    );

    cdk.Tags.of(autoRemediateCfmDash005LambdaFunction).add(
      "Name",
      "Auto Remediate CFM-005",
    );
    cdk.Tags.of(autoRemediateCfmDash005LambdaFunction).add(
      "Owner",
      "CloudConformity",
    );
    cdk.Tags.of(autoRemediateCfmDash005LambdaFunction).add(
      "Role",
      "Auto Remediate",
    );
    cdk.Tags.of(autoRemediateCfmDash005LambdaFunction).add(
      "Environment",
      "Ops",
    );

    autoRemediateCfmDash005LambdaFunction.node.addDependency(
      autoRemediateCfmDash005LogGroup,
    );
    autoRemediateCfmDash005LambdaFunction.node.addDependency(
      autoRemediateCfm005Role,
    );

    const autoRemediateCtDash001LambdaFunction = new lambda.Function(
      this,
      "AutoRemediateCTDash001LambdaFunction",
      {
        code: lambda.Code.fromAsset(functionsPath),
        handler: "AutoRemediateCT-001.handler",
        runtime: lambda.Runtime.NODEJS_24_X,
        functionName: "auto-remediate-v1-AutoRemediateCT-001",
        memorySize: 128,
        timeout: cdk.Duration.seconds(10),
        role: iam.Role.fromRoleArn(
          this,
          "AutoRemediateCTDash001LambdaFunctionRoleRef",
          autoRemediateCt001Role.attrArn,
        ),
        tracing: lambda.Tracing.ACTIVE,
        logGroup: logs.LogGroup.fromLogGroupName(
          this,
          "AutoRemediateCTDash001LambdaFunctionLogGroupRef",
          autoRemediateCtDash001LogGroup.ref,
        ),
      },
    );

    cdk.Tags.of(autoRemediateCtDash001LambdaFunction).add(
      "Name",
      "Auto Remediate CT-001",
    );
    cdk.Tags.of(autoRemediateCtDash001LambdaFunction).add(
      "Owner",
      "CloudConformity",
    );
    cdk.Tags.of(autoRemediateCtDash001LambdaFunction).add(
      "Role",
      "Auto Remediate",
    );
    cdk.Tags.of(autoRemediateCtDash001LambdaFunction).add("Environment", "Ops");

    autoRemediateCtDash001LambdaFunction.node.addDependency(
      autoRemediateCtDash001LogGroup,
    );
    autoRemediateCtDash001LambdaFunction.node.addDependency(
      autoRemediateCt001Role,
    );

    const autoRemediateCtDash003LambdaFunction = new lambda.Function(
      this,
      "AutoRemediateCTDash003LambdaFunction",
      {
        code: lambda.Code.fromAsset(functionsPath),
        handler: "AutoRemediateCT-003.handler",
        runtime: lambda.Runtime.NODEJS_24_X,
        functionName: "auto-remediate-v1-AutoRemediateCT-003",
        memorySize: 128,
        timeout: cdk.Duration.seconds(120),
        role: iam.Role.fromRoleArn(
          this,
          "AutoRemediateCTDash003LambdaFunctionRoleRef",
          autoRemediateCt003Role.attrArn,
        ),
        tracing: lambda.Tracing.ACTIVE,
        logGroup: logs.LogGroup.fromLogGroupName(
          this,
          "AutoRemediateCTDash003LambdaFunctionLogGroupRef",
          autoRemediateCtDash003LogGroup.ref,
        ),
      },
    );

    cdk.Tags.of(autoRemediateCtDash003LambdaFunction).add(
      "Name",
      "Auto Remediate CT-003",
    );
    cdk.Tags.of(autoRemediateCtDash003LambdaFunction).add(
      "Owner",
      "CloudConformity",
    );
    cdk.Tags.of(autoRemediateCtDash003LambdaFunction).add(
      "Role",
      "Auto Remediate",
    );
    cdk.Tags.of(autoRemediateCtDash003LambdaFunction).add("Environment", "Ops");

    autoRemediateCtDash003LambdaFunction.node.addDependency(
      autoRemediateCtDash003LogGroup,
    );
    autoRemediateCtDash003LambdaFunction.node.addDependency(
      autoRemediateCt003Role,
    );

    const autoRemediateConfigDash001LambdaFunction = new lambda.Function(
      this,
      "AutoRemediateConfigDash001LambdaFunction",
      {
        code: lambda.Code.fromAsset(functionsPath),
        handler: "AutoRemediateConfig-001.handler",
        runtime: lambda.Runtime.NODEJS_24_X,
        functionName: "auto-remediate-v1-AutoRemediateConfig-001",
        memorySize: 128,
        timeout: cdk.Duration.seconds(120),
        role: iam.Role.fromRoleArn(
          this,
          "AutoRemediateConfigDash001LambdaFunctionRoleRef",
          autoRemediateConfig001Role.attrArn,
        ),
        tracing: lambda.Tracing.ACTIVE,
        logGroup: logs.LogGroup.fromLogGroupName(
          this,
          "AutoRemediateConfigDash001LambdaFunctionLogGroupRef",
          autoRemediateConfigDash001LogGroup.ref,
        ),
      },
    );

    cdk.Tags.of(autoRemediateConfigDash001LambdaFunction).add(
      "Name",
      "Auto Remediate Config-001",
    );
    cdk.Tags.of(autoRemediateConfigDash001LambdaFunction).add(
      "Owner",
      "CloudConformity",
    );
    cdk.Tags.of(autoRemediateConfigDash001LambdaFunction).add(
      "Role",
      "Auto Remediate",
    );
    cdk.Tags.of(autoRemediateConfigDash001LambdaFunction).add(
      "Environment",
      "Ops",
    );

    autoRemediateConfigDash001LambdaFunction.node.addDependency(
      autoRemediateConfigDash001LogGroup,
    );
    autoRemediateConfigDash001LambdaFunction.node.addDependency(
      autoRemediateConfig001Role,
    );

    const autoRemediateEbsDash009LambdaFunction = new lambda.Function(
      this,
      "AutoRemediateEBSDash009LambdaFunction",
      {
        code: lambda.Code.fromAsset(functionsPath),
        handler: "AutoRemediateEBS-009.handler",
        runtime: lambda.Runtime.NODEJS_24_X,
        functionName: "auto-remediate-v1-AutoRemediateEBS-009",
        memorySize: 128,
        timeout: cdk.Duration.seconds(120),
        role: iam.Role.fromRoleArn(
          this,
          "AutoRemediateEBSDash009LambdaFunctionRoleRef",
          autoRemediateEbs009Role.attrArn,
        ),
        tracing: lambda.Tracing.ACTIVE,
        logGroup: logs.LogGroup.fromLogGroupName(
          this,
          "AutoRemediateEBSDash009LambdaFunctionLogGroupRef",
          autoRemediateEbsDash009LogGroup.ref,
        ),
      },
    );

    cdk.Tags.of(autoRemediateEbsDash009LambdaFunction).add(
      "Name",
      "Auto Remediate EBS-009",
    );
    cdk.Tags.of(autoRemediateEbsDash009LambdaFunction).add(
      "Owner",
      "CloudConformity",
    );
    cdk.Tags.of(autoRemediateEbsDash009LambdaFunction).add(
      "Role",
      "Auto Remediate",
    );
    cdk.Tags.of(autoRemediateEbsDash009LambdaFunction).add(
      "Environment",
      "Ops",
    );

    autoRemediateEbsDash009LambdaFunction.node.addDependency(
      autoRemediateEbsDash009LogGroup,
    );
    autoRemediateEbsDash009LambdaFunction.node.addDependency(
      autoRemediateEbs009Role,
    );

    const autoRemediateEc2Dash002LambdaFunction = new lambda.Function(
      this,
      "AutoRemediateEC2Dash002LambdaFunction",
      {
        code: lambda.Code.fromAsset(functionsPath),
        handler: "AutoRemediateEC2-002.handler",
        runtime: lambda.Runtime.NODEJS_24_X,
        functionName: "auto-remediate-v1-AutoRemediateEC2-002",
        memorySize: 128,
        timeout: cdk.Duration.seconds(120),
        role: iam.Role.fromRoleArn(
          this,
          "AutoRemediateEC2Dash002LambdaFunctionRoleRef",
          autoRemediateEc2002Role.attrArn,
        ),
        tracing: lambda.Tracing.ACTIVE,
        logGroup: logs.LogGroup.fromLogGroupName(
          this,
          "AutoRemediateEC2Dash002LambdaFunctionLogGroupRef",
          autoRemediateEc2Dash002LogGroup.ref,
        ),
      },
    );

    cdk.Tags.of(autoRemediateEc2Dash002LambdaFunction).add(
      "Name",
      "Auto Remediate EC2-002",
    );
    cdk.Tags.of(autoRemediateEc2Dash002LambdaFunction).add(
      "Owner",
      "CloudConformity",
    );
    cdk.Tags.of(autoRemediateEc2Dash002LambdaFunction).add(
      "Role",
      "Auto Remediate",
    );
    cdk.Tags.of(autoRemediateEc2Dash002LambdaFunction).add(
      "Environment",
      "Ops",
    );

    autoRemediateEc2Dash002LambdaFunction.node.addDependency(
      autoRemediateEc2Dash002LogGroup,
    );
    autoRemediateEc2Dash002LambdaFunction.node.addDependency(
      autoRemediateEc2002Role,
    );

    const autoRemediateEc2Dash003LambdaFunction = new lambda.Function(
      this,
      "AutoRemediateEC2Dash003LambdaFunction",
      {
        code: lambda.Code.fromAsset(functionsPath),
        handler: "AutoRemediateEC2-003.handler",
        runtime: lambda.Runtime.NODEJS_24_X,
        functionName: "auto-remediate-v1-AutoRemediateEC2-003",
        memorySize: 128,
        timeout: cdk.Duration.seconds(120),
        role: iam.Role.fromRoleArn(
          this,
          "AutoRemediateEC2Dash003LambdaFunctionRoleRef",
          autoRemediateEc2003Role.attrArn,
        ),
        tracing: lambda.Tracing.ACTIVE,
        logGroup: logs.LogGroup.fromLogGroupName(
          this,
          "AutoRemediateEC2Dash003LambdaFunctionLogGroupRef",
          autoRemediateEc2Dash003LogGroup.ref,
        ),
      },
    );

    cdk.Tags.of(autoRemediateEc2Dash003LambdaFunction).add(
      "Name",
      "Auto Remediate EC2-003",
    );
    cdk.Tags.of(autoRemediateEc2Dash003LambdaFunction).add(
      "Owner",
      "CloudConformity",
    );
    cdk.Tags.of(autoRemediateEc2Dash003LambdaFunction).add(
      "Role",
      "Auto Remediate",
    );
    cdk.Tags.of(autoRemediateEc2Dash003LambdaFunction).add(
      "Environment",
      "Ops",
    );

    autoRemediateEc2Dash003LambdaFunction.node.addDependency(
      autoRemediateEc2Dash003LogGroup,
    );
    autoRemediateEc2Dash003LambdaFunction.node.addDependency(
      autoRemediateEc2003Role,
    );

    const autoRemediateEc2Dash004LambdaFunction = new lambda.Function(
      this,
      "AutoRemediateEC2Dash004LambdaFunction",
      {
        code: lambda.Code.fromAsset(functionsPath),
        handler: "AutoRemediateEC2-004.handler",
        runtime: lambda.Runtime.NODEJS_24_X,
        functionName: "auto-remediate-v1-AutoRemediateEC2-004",
        memorySize: 128,
        timeout: cdk.Duration.seconds(120),
        role: iam.Role.fromRoleArn(
          this,
          "AutoRemediateEC2Dash004LambdaFunctionRoleRef",
          autoRemediateEc2004Role.attrArn,
        ),
        tracing: lambda.Tracing.ACTIVE,
        logGroup: logs.LogGroup.fromLogGroupName(
          this,
          "AutoRemediateEC2Dash004LambdaFunctionLogGroupRef",
          autoRemediateEc2Dash004LogGroup.ref,
        ),
      },
    );

    cdk.Tags.of(autoRemediateEc2Dash004LambdaFunction).add(
      "Name",
      "Auto Remediate EC2-004",
    );
    cdk.Tags.of(autoRemediateEc2Dash004LambdaFunction).add(
      "Owner",
      "CloudConformity",
    );
    cdk.Tags.of(autoRemediateEc2Dash004LambdaFunction).add(
      "Role",
      "Auto Remediate",
    );
    cdk.Tags.of(autoRemediateEc2Dash004LambdaFunction).add(
      "Environment",
      "Ops",
    );

    autoRemediateEc2Dash004LambdaFunction.node.addDependency(
      autoRemediateEc2Dash004LogGroup,
    );
    autoRemediateEc2Dash004LambdaFunction.node.addDependency(
      autoRemediateEc2004Role,
    );

    const autoRemediateEc2Dash005LambdaFunction = new lambda.Function(
      this,
      "AutoRemediateEC2Dash005LambdaFunction",
      {
        code: lambda.Code.fromAsset(functionsPath),
        handler: "AutoRemediateEC2-005.handler",
        runtime: lambda.Runtime.NODEJS_24_X,
        functionName: "auto-remediate-v1-AutoRemediateEC2-005",
        memorySize: 128,
        timeout: cdk.Duration.seconds(120),
        role: iam.Role.fromRoleArn(
          this,
          "AutoRemediateEC2Dash005LambdaFunctionRoleRef",
          autoRemediateEc2005Role.attrArn,
        ),
        tracing: lambda.Tracing.ACTIVE,
        logGroup: logs.LogGroup.fromLogGroupName(
          this,
          "AutoRemediateEC2Dash005LambdaFunctionLogGroupRef",
          autoRemediateEc2Dash005LogGroup.ref,
        ),
      },
    );

    cdk.Tags.of(autoRemediateEc2Dash005LambdaFunction).add(
      "Name",
      "Auto Remediate EC2-005",
    );
    cdk.Tags.of(autoRemediateEc2Dash005LambdaFunction).add(
      "Owner",
      "CloudConformity",
    );
    cdk.Tags.of(autoRemediateEc2Dash005LambdaFunction).add(
      "Role",
      "Auto Remediate",
    );
    cdk.Tags.of(autoRemediateEc2Dash005LambdaFunction).add(
      "Environment",
      "Ops",
    );

    autoRemediateEc2Dash005LambdaFunction.node.addDependency(
      autoRemediateEc2Dash005LogGroup,
    );
    autoRemediateEc2Dash005LambdaFunction.node.addDependency(
      autoRemediateEc2005Role,
    );

    const autoRemediateEc2Dash006LambdaFunction = new lambda.Function(
      this,
      "AutoRemediateEC2Dash006LambdaFunction",
      {
        code: lambda.Code.fromAsset(functionsPath),
        handler: "AutoRemediateEC2-006.handler",
        runtime: lambda.Runtime.NODEJS_24_X,
        functionName: "auto-remediate-v1-AutoRemediateEC2-006",
        memorySize: 128,
        timeout: cdk.Duration.seconds(120),
        role: iam.Role.fromRoleArn(
          this,
          "AutoRemediateEC2Dash006LambdaFunctionRoleRef",
          autoRemediateEc2006Role.attrArn,
        ),
        tracing: lambda.Tracing.ACTIVE,
        logGroup: logs.LogGroup.fromLogGroupName(
          this,
          "AutoRemediateEC2Dash006LambdaFunctionLogGroupRef",
          autoRemediateEc2Dash006LogGroup.ref,
        ),
      },
    );

    cdk.Tags.of(autoRemediateEc2Dash006LambdaFunction).add(
      "Name",
      "Auto Remediate EC2-006",
    );
    cdk.Tags.of(autoRemediateEc2Dash006LambdaFunction).add(
      "Owner",
      "CloudConformity",
    );
    cdk.Tags.of(autoRemediateEc2Dash006LambdaFunction).add(
      "Role",
      "Auto Remediate",
    );
    cdk.Tags.of(autoRemediateEc2Dash006LambdaFunction).add(
      "Environment",
      "Ops",
    );

    autoRemediateEc2Dash006LambdaFunction.node.addDependency(
      autoRemediateEc2Dash006LogGroup,
    );
    autoRemediateEc2Dash006LambdaFunction.node.addDependency(
      autoRemediateEc2006Role,
    );

    const autoRemediateEc2Dash008LambdaFunction = new lambda.Function(
      this,
      "AutoRemediateEC2Dash008LambdaFunction",
      {
        code: lambda.Code.fromAsset(functionsPath),
        handler: "AutoRemediateEC2-008.handler",
        runtime: lambda.Runtime.NODEJS_24_X,
        functionName: "auto-remediate-v1-AutoRemediateEC2-008",
        memorySize: 128,
        timeout: cdk.Duration.seconds(120),
        role: iam.Role.fromRoleArn(
          this,
          "AutoRemediateEC2Dash008LambdaFunctionRoleRef",
          autoRemediateEc2008Role.attrArn,
        ),
        tracing: lambda.Tracing.ACTIVE,
        logGroup: logs.LogGroup.fromLogGroupName(
          this,
          "AutoRemediateEC2Dash008LambdaFunctionLogGroupRef",
          autoRemediateEc2Dash008LogGroup.ref,
        ),
      },
    );

    cdk.Tags.of(autoRemediateEc2Dash008LambdaFunction).add(
      "Name",
      "Auto Remediate EC2-008",
    );
    cdk.Tags.of(autoRemediateEc2Dash008LambdaFunction).add(
      "Owner",
      "CloudConformity",
    );
    cdk.Tags.of(autoRemediateEc2Dash008LambdaFunction).add(
      "Role",
      "Auto Remediate",
    );
    cdk.Tags.of(autoRemediateEc2Dash008LambdaFunction).add(
      "Environment",
      "Ops",
    );

    autoRemediateEc2Dash008LambdaFunction.node.addDependency(
      autoRemediateEc2Dash008LogGroup,
    );
    autoRemediateEc2Dash008LambdaFunction.node.addDependency(
      autoRemediateEc2008Role,
    );

    const autoRemediateEc2Dash019LambdaFunction = new lambda.Function(
      this,
      "AutoRemediateEC2Dash019LambdaFunction",
      {
        code: lambda.Code.fromAsset(functionsPath),
        handler: "AutoRemediateEC2-019.handler",
        runtime: lambda.Runtime.NODEJS_24_X,
        functionName: "auto-remediate-v1-AutoRemediateEC2-019",
        memorySize: 128,
        timeout: cdk.Duration.seconds(120),
        role: iam.Role.fromRoleArn(
          this,
          "AutoRemediateEC2Dash019LambdaFunctionRoleRef",
          autoRemediateEc2019Role.attrArn,
        ),
        tracing: lambda.Tracing.ACTIVE,
        logGroup: logs.LogGroup.fromLogGroupName(
          this,
          "AutoRemediateEC2Dash019LambdaFunctionLogGroupRef",
          autoRemediateEc2Dash019LogGroup.ref,
        ),
      },
    );

    cdk.Tags.of(autoRemediateEc2Dash019LambdaFunction).add(
      "Name",
      "Auto Remediate EC2-019",
    );
    cdk.Tags.of(autoRemediateEc2Dash019LambdaFunction).add(
      "Owner",
      "CloudConformity",
    );
    cdk.Tags.of(autoRemediateEc2Dash019LambdaFunction).add(
      "Role",
      "Auto Remediate",
    );
    cdk.Tags.of(autoRemediateEc2Dash019LambdaFunction).add(
      "Environment",
      "Ops",
    );

    autoRemediateEc2Dash019LambdaFunction.node.addDependency(
      autoRemediateEc2Dash019LogGroup,
    );
    autoRemediateEc2Dash019LambdaFunction.node.addDependency(
      autoRemediateEc2019Role,
    );

    const autoRemediateEc2Dash038LambdaFunction = new lambda.Function(
      this,
      "AutoRemediateEC2Dash038LambdaFunction",
      {
        code: lambda.Code.fromAsset(functionsPath),
        handler: "AutoRemediateEC2-038.handler",
        runtime: lambda.Runtime.NODEJS_24_X,
        functionName: "auto-remediate-v1-AutoRemediateEC2-038",
        memorySize: 128,
        timeout: cdk.Duration.seconds(120),
        role: iam.Role.fromRoleArn(
          this,
          "AutoRemediateEC2Dash038LambdaFunctionRoleRef",
          autoRemediateEc2038Role.attrArn,
        ),
        tracing: lambda.Tracing.ACTIVE,
        logGroup: logs.LogGroup.fromLogGroupName(
          this,
          "AutoRemediateEC2Dash038LambdaFunctionLogGroupRef",
          autoRemediateEc2Dash038LogGroup.ref,
        ),
      },
    );

    cdk.Tags.of(autoRemediateEc2Dash038LambdaFunction).add(
      "Name",
      "Auto Remediate EC2-038",
    );
    cdk.Tags.of(autoRemediateEc2Dash038LambdaFunction).add(
      "Owner",
      "CloudConformity",
    );
    cdk.Tags.of(autoRemediateEc2Dash038LambdaFunction).add(
      "Role",
      "Auto Remediate",
    );
    cdk.Tags.of(autoRemediateEc2Dash038LambdaFunction).add(
      "Environment",
      "Ops",
    );

    autoRemediateEc2Dash038LambdaFunction.node.addDependency(
      autoRemediateEc2Dash038LogGroup,
    );
    autoRemediateEc2Dash038LambdaFunction.node.addDependency(
      autoRemediateEc2038Role,
    );

    const autoRemediateEc2Dash039LambdaFunction = new lambda.Function(
      this,
      "AutoRemediateEC2Dash039LambdaFunction",
      {
        code: lambda.Code.fromAsset(functionsPath),
        handler: "AutoRemediateEC2-039.handler",
        runtime: lambda.Runtime.NODEJS_24_X,
        functionName: "auto-remediate-v1-AutoRemediateEC2-039",
        memorySize: 128,
        timeout: cdk.Duration.seconds(120),
        role: iam.Role.fromRoleArn(
          this,
          "AutoRemediateEC2Dash039LambdaFunctionRoleRef",
          autoRemediateEc2039Role.attrArn,
        ),
        tracing: lambda.Tracing.ACTIVE,
        logGroup: logs.LogGroup.fromLogGroupName(
          this,
          "AutoRemediateEC2Dash039LambdaFunctionLogGroupRef",
          autoRemediateEc2Dash039LogGroup.ref,
        ),
      },
    );

    cdk.Tags.of(autoRemediateEc2Dash039LambdaFunction).add(
      "Name",
      "Auto Remediate EC2-039",
    );
    cdk.Tags.of(autoRemediateEc2Dash039LambdaFunction).add(
      "Owner",
      "CloudConformity",
    );
    cdk.Tags.of(autoRemediateEc2Dash039LambdaFunction).add(
      "Role",
      "Auto Remediate",
    );
    cdk.Tags.of(autoRemediateEc2Dash039LambdaFunction).add(
      "Environment",
      "Ops",
    );

    autoRemediateEc2Dash039LambdaFunction.node.addDependency(
      autoRemediateEc2Dash039LogGroup,
    );
    autoRemediateEc2Dash039LambdaFunction.node.addDependency(
      autoRemediateEc2039Role,
    );

    const autoRemediateEc2Dash040LambdaFunction = new lambda.Function(
      this,
      "AutoRemediateEC2Dash040LambdaFunction",
      {
        code: lambda.Code.fromAsset(functionsPath),
        handler: "AutoRemediateEC2-040.handler",
        runtime: lambda.Runtime.NODEJS_24_X,
        functionName: "auto-remediate-v1-AutoRemediateEC2-040",
        memorySize: 128,
        timeout: cdk.Duration.seconds(120),
        role: iam.Role.fromRoleArn(
          this,
          "AutoRemediateEC2Dash040LambdaFunctionRoleRef",
          autoRemediateEc2040Role.attrArn,
        ),
        tracing: lambda.Tracing.ACTIVE,
        logGroup: logs.LogGroup.fromLogGroupName(
          this,
          "AutoRemediateEC2Dash040LambdaFunctionLogGroupRef",
          autoRemediateEc2Dash040LogGroup.ref,
        ),
      },
    );

    cdk.Tags.of(autoRemediateEc2Dash040LambdaFunction).add(
      "Name",
      "Auto Remediate EC2-040",
    );
    cdk.Tags.of(autoRemediateEc2Dash040LambdaFunction).add(
      "Owner",
      "CloudConformity",
    );
    cdk.Tags.of(autoRemediateEc2Dash040LambdaFunction).add(
      "Role",
      "Auto Remediate",
    );
    cdk.Tags.of(autoRemediateEc2Dash040LambdaFunction).add(
      "Environment",
      "Ops",
    );

    autoRemediateEc2Dash040LambdaFunction.node.addDependency(
      autoRemediateEc2Dash040LogGroup,
    );
    autoRemediateEc2Dash040LambdaFunction.node.addDependency(
      autoRemediateEc2040Role,
    );

    const autoRemediateEc2Dash043LambdaFunction = new lambda.Function(
      this,
      "AutoRemediateEC2Dash043LambdaFunction",
      {
        code: lambda.Code.fromAsset(functionsPath),
        handler: "AutoRemediateEC2-043.handler",
        runtime: lambda.Runtime.NODEJS_24_X,
        functionName: "auto-remediate-v1-AutoRemediateEC2-043",
        memorySize: 128,
        timeout: cdk.Duration.seconds(120),
        role: iam.Role.fromRoleArn(
          this,
          "AutoRemediateEC2Dash043LambdaFunctionRoleRef",
          autoRemediateEc2043Role.attrArn,
        ),
        tracing: lambda.Tracing.ACTIVE,
        logGroup: logs.LogGroup.fromLogGroupName(
          this,
          "AutoRemediateEC2Dash043LambdaFunctionLogGroupRef",
          autoRemediateEc2Dash043LogGroup.ref,
        ),
      },
    );

    cdk.Tags.of(autoRemediateEc2Dash043LambdaFunction).add(
      "Name",
      "Auto Remediate EC2-043",
    );
    cdk.Tags.of(autoRemediateEc2Dash043LambdaFunction).add(
      "Owner",
      "CloudConformity",
    );
    cdk.Tags.of(autoRemediateEc2Dash043LambdaFunction).add(
      "Role",
      "Auto Remediate",
    );
    cdk.Tags.of(autoRemediateEc2Dash043LambdaFunction).add(
      "Environment",
      "Ops",
    );

    autoRemediateEc2Dash043LambdaFunction.node.addDependency(
      autoRemediateEc2Dash043LogGroup,
    );
    autoRemediateEc2Dash043LambdaFunction.node.addDependency(
      autoRemediateEc2043Role,
    );

    const autoRemediateEc2Dash045LambdaFunction = new lambda.Function(
      this,
      "AutoRemediateEC2Dash045LambdaFunction",
      {
        code: lambda.Code.fromAsset(functionsPath),
        handler: "AutoRemediateEC2-045.handler",
        runtime: lambda.Runtime.NODEJS_24_X,
        functionName: "auto-remediate-v1-AutoRemediateEC2-045",
        memorySize: 128,
        timeout: cdk.Duration.seconds(120),
        role: iam.Role.fromRoleArn(
          this,
          "AutoRemediateEC2Dash045LambdaFunctionRoleRef",
          autoRemediateEc2045Role.attrArn,
        ),
        tracing: lambda.Tracing.ACTIVE,
        logGroup: logs.LogGroup.fromLogGroupName(
          this,
          "AutoRemediateEC2Dash045LambdaFunctionLogGroupRef",
          autoRemediateEc2Dash045LogGroup.ref,
        ),
      },
    );

    cdk.Tags.of(autoRemediateEc2Dash045LambdaFunction).add(
      "Name",
      "Auto Remediate EC2-045",
    );
    cdk.Tags.of(autoRemediateEc2Dash045LambdaFunction).add(
      "Owner",
      "CloudConformity",
    );
    cdk.Tags.of(autoRemediateEc2Dash045LambdaFunction).add(
      "Role",
      "Auto Remediate",
    );
    cdk.Tags.of(autoRemediateEc2Dash045LambdaFunction).add(
      "Environment",
      "Ops",
    );

    autoRemediateEc2Dash045LambdaFunction.node.addDependency(
      autoRemediateEc2Dash045LogGroup,
    );
    autoRemediateEc2Dash045LambdaFunction.node.addDependency(
      autoRemediateEc2045Role,
    );

    const autoRemediateGdDash001LambdaFunction = new lambda.Function(
      this,
      "AutoRemediateGDDash001LambdaFunction",
      {
        code: lambda.Code.fromAsset(functionsPath),
        handler: "AutoRemediateGD-001.handler",
        runtime: lambda.Runtime.NODEJS_24_X,
        functionName: "auto-remediate-v1-AutoRemediateGD-001",
        memorySize: 128,
        timeout: cdk.Duration.seconds(10),
        role: iam.Role.fromRoleArn(
          this,
          "AutoRemediateGDDash001LambdaFunctionRoleRef",
          autoRemediateGd001Role.attrArn,
        ),
        tracing: lambda.Tracing.ACTIVE,
        logGroup: logs.LogGroup.fromLogGroupName(
          this,
          "AutoRemediateGDDash001LambdaFunctionLogGroupRef",
          autoRemediateGdDash001LogGroup.ref,
        ),
      },
    );

    cdk.Tags.of(autoRemediateGdDash001LambdaFunction).add(
      "Name",
      "Auto Remediate GD-001",
    );
    cdk.Tags.of(autoRemediateGdDash001LambdaFunction).add(
      "Owner",
      "CloudConformity",
    );
    cdk.Tags.of(autoRemediateGdDash001LambdaFunction).add(
      "Role",
      "Auto Remediate",
    );
    cdk.Tags.of(autoRemediateGdDash001LambdaFunction).add("Environment", "Ops");

    autoRemediateGdDash001LambdaFunction.node.addDependency(
      autoRemediateGdDash001LogGroup,
    );
    autoRemediateGdDash001LambdaFunction.node.addDependency(
      autoRemediateGd001Role,
    );

    const autoRemediateIamDash001LambdaFunction = new lambda.Function(
      this,
      "AutoRemediateIAMDash001LambdaFunction",
      {
        code: lambda.Code.fromAsset(functionsPath),
        handler: "AutoRemediateIAM-001.handler",
        runtime: lambda.Runtime.NODEJS_24_X,
        functionName: "auto-remediate-v1-AutoRemediateIAM-001",
        memorySize: 128,
        timeout: cdk.Duration.seconds(10),
        role: iam.Role.fromRoleArn(
          this,
          "AutoRemediateIAMDash001LambdaFunctionRoleRef",
          autoRemediateIam001Role.attrArn,
        ),
        tracing: lambda.Tracing.ACTIVE,
        logGroup: logs.LogGroup.fromLogGroupName(
          this,
          "AutoRemediateIAMDash001LambdaFunctionLogGroupRef",
          autoRemediateIamDash001LogGroup.ref,
        ),
      },
    );

    cdk.Tags.of(autoRemediateIamDash001LambdaFunction).add(
      "Name",
      "Auto Remediate IAM-001",
    );
    cdk.Tags.of(autoRemediateIamDash001LambdaFunction).add(
      "Owner",
      "CloudConformity",
    );
    cdk.Tags.of(autoRemediateIamDash001LambdaFunction).add(
      "Role",
      "Auto Remediate",
    );
    cdk.Tags.of(autoRemediateIamDash001LambdaFunction).add(
      "Environment",
      "Ops",
    );

    autoRemediateIamDash001LambdaFunction.node.addDependency(
      autoRemediateIamDash001LogGroup,
    );
    autoRemediateIamDash001LambdaFunction.node.addDependency(
      autoRemediateIam001Role,
    );

    const autoRemediateIamDash029LambdaFunction = new lambda.Function(
      this,
      "AutoRemediateIAMDash029LambdaFunction",
      {
        code: lambda.Code.fromAsset(functionsPath),
        handler: "AutoRemediateIAM-029.handler",
        runtime: lambda.Runtime.NODEJS_24_X,
        functionName: "auto-remediate-v1-AutoRemediateIAM-029",
        memorySize: 128,
        timeout: cdk.Duration.seconds(10),
        role: iam.Role.fromRoleArn(
          this,
          "AutoRemediateIAMDash029LambdaFunctionRoleRef",
          autoRemediateIam029Role.attrArn,
        ),
        tracing: lambda.Tracing.ACTIVE,
        logGroup: logs.LogGroup.fromLogGroupName(
          this,
          "AutoRemediateIAMDash029LambdaFunctionLogGroupRef",
          autoRemediateIamDash029LogGroup.ref,
        ),
      },
    );

    cdk.Tags.of(autoRemediateIamDash029LambdaFunction).add(
      "Name",
      "Auto Remediate IAM-029",
    );
    cdk.Tags.of(autoRemediateIamDash029LambdaFunction).add(
      "Owner",
      "CloudConformity",
    );
    cdk.Tags.of(autoRemediateIamDash029LambdaFunction).add(
      "Role",
      "Auto Remediate",
    );
    cdk.Tags.of(autoRemediateIamDash029LambdaFunction).add(
      "Environment",
      "Ops",
    );

    autoRemediateIamDash029LambdaFunction.node.addDependency(
      autoRemediateIamDash029LogGroup,
    );
    autoRemediateIamDash029LambdaFunction.node.addDependency(
      autoRemediateIam029Role,
    );

    const autoRemediateIamDash038LambdaFunction = new lambda.Function(
      this,
      "AutoRemediateIAMDash038LambdaFunction",
      {
        code: lambda.Code.fromAsset(functionsPath),
        handler: "AutoRemediateIAM-038.handler",
        runtime: lambda.Runtime.NODEJS_24_X,
        functionName: "auto-remediate-v1-AutoRemediateIAM-038",
        memorySize: 128,
        timeout: cdk.Duration.seconds(10),
        role: iam.Role.fromRoleArn(
          this,
          "AutoRemediateIAMDash038LambdaFunctionRoleRef",
          autoRemediateIam038Role.attrArn,
        ),
        tracing: lambda.Tracing.ACTIVE,
        logGroup: logs.LogGroup.fromLogGroupName(
          this,
          "AutoRemediateIAMDash038LambdaFunctionLogGroupRef",
          autoRemediateIamDash038LogGroup.ref,
        ),
      },
    );

    cdk.Tags.of(autoRemediateIamDash038LambdaFunction).add(
      "Name",
      "Auto Remediate IAM-038",
    );
    cdk.Tags.of(autoRemediateIamDash038LambdaFunction).add(
      "Owner",
      "CloudConformity",
    );
    cdk.Tags.of(autoRemediateIamDash038LambdaFunction).add(
      "Role",
      "Auto Remediate",
    );
    cdk.Tags.of(autoRemediateIamDash038LambdaFunction).add(
      "Environment",
      "Ops",
    );

    autoRemediateIamDash038LambdaFunction.node.addDependency(
      autoRemediateIamDash038LogGroup,
    );
    autoRemediateIamDash038LambdaFunction.node.addDependency(
      autoRemediateIam038Role,
    );

    const autoRemediateKmsDash002LambdaFunction = new lambda.Function(
      this,
      "AutoRemediateKMSDash002LambdaFunction",
      {
        code: lambda.Code.fromAsset(functionsPath),
        handler: "AutoRemediateKMS-002.handler",
        runtime: lambda.Runtime.NODEJS_24_X,
        functionName: "auto-remediate-v1-AutoRemediateKMS-002",
        memorySize: 128,
        timeout: cdk.Duration.seconds(120),
        role: iam.Role.fromRoleArn(
          this,
          "AutoRemediateKMSDash002LambdaFunctionRoleRef",
          autoRemediateKms002Role.attrArn,
        ),
        tracing: lambda.Tracing.ACTIVE,
        logGroup: logs.LogGroup.fromLogGroupName(
          this,
          "AutoRemediateKMSDash002LambdaFunctionLogGroupRef",
          autoRemediateKmsDash002LogGroup.ref,
        ),
      },
    );

    cdk.Tags.of(autoRemediateKmsDash002LambdaFunction).add(
      "Name",
      "Auto Remediate KMS-002",
    );
    cdk.Tags.of(autoRemediateKmsDash002LambdaFunction).add(
      "Owner",
      "CloudConformity",
    );
    cdk.Tags.of(autoRemediateKmsDash002LambdaFunction).add(
      "Role",
      "Auto Remediate",
    );
    cdk.Tags.of(autoRemediateKmsDash002LambdaFunction).add(
      "Environment",
      "Ops",
    );

    autoRemediateKmsDash002LambdaFunction.node.addDependency(
      autoRemediateKmsDash002LogGroup,
    );
    autoRemediateKmsDash002LambdaFunction.node.addDependency(
      autoRemediateKms002Role,
    );

    const autoRemediateKmsDash004LambdaFunction = new lambda.Function(
      this,
      "AutoRemediateKMSDash004LambdaFunction",
      {
        code: lambda.Code.fromAsset(functionsPath),
        handler: "AutoRemediateKMS-004.handler",
        runtime: lambda.Runtime.NODEJS_24_X,
        functionName: "auto-remediate-v1-AutoRemediateKMS-004",
        memorySize: 128,
        timeout: cdk.Duration.seconds(120),
        role: iam.Role.fromRoleArn(
          this,
          "AutoRemediateKMSDash004LambdaFunctionRoleRef",
          autoRemediateKms004Role.attrArn,
        ),
        tracing: lambda.Tracing.ACTIVE,
        logGroup: logs.LogGroup.fromLogGroupName(
          this,
          "AutoRemediateKMSDash004LambdaFunctionLogGroupRef",
          autoRemediateKmsDash004LogGroup.ref,
        ),
      },
    );

    cdk.Tags.of(autoRemediateKmsDash004LambdaFunction).add(
      "Name",
      "Auto Remediate KMS-004",
    );
    cdk.Tags.of(autoRemediateKmsDash004LambdaFunction).add(
      "Owner",
      "CloudConformity",
    );
    cdk.Tags.of(autoRemediateKmsDash004LambdaFunction).add(
      "Role",
      "Auto Remediate",
    );
    cdk.Tags.of(autoRemediateKmsDash004LambdaFunction).add(
      "Environment",
      "Ops",
    );

    autoRemediateKmsDash004LambdaFunction.node.addDependency(
      autoRemediateKmsDash004LogGroup,
    );
    autoRemediateKmsDash004LambdaFunction.node.addDependency(
      autoRemediateKms004Role,
    );

    const autoRemediateKinesisDash001LambdaFunction = new lambda.Function(
      this,
      "AutoRemediateKinesisDash001LambdaFunction",
      {
        code: lambda.Code.fromAsset(functionsPath),
        handler: "AutoRemediateKinesis-001.handler",
        runtime: lambda.Runtime.NODEJS_24_X,
        functionName: "auto-remediate-v1-AutoRemediateKinesis-001",
        memorySize: 128,
        timeout: cdk.Duration.seconds(120),
        role: iam.Role.fromRoleArn(
          this,
          "AutoRemediateKinesisDash001LambdaFunctionRoleRef",
          autoRemediateKinesis001Role.attrArn,
        ),
        tracing: lambda.Tracing.ACTIVE,
        logGroup: logs.LogGroup.fromLogGroupName(
          this,
          "AutoRemediateKinesisDash001LambdaFunctionLogGroupRef",
          autoRemediateKinesisDash001LogGroup.ref,
        ),
      },
    );

    cdk.Tags.of(autoRemediateKinesisDash001LambdaFunction).add(
      "Name",
      "Auto Remediate Kinesis-001",
    );
    cdk.Tags.of(autoRemediateKinesisDash001LambdaFunction).add(
      "Owner",
      "CloudConformity",
    );
    cdk.Tags.of(autoRemediateKinesisDash001LambdaFunction).add(
      "Role",
      "Auto Remediate",
    );
    cdk.Tags.of(autoRemediateKinesisDash001LambdaFunction).add(
      "Environment",
      "Ops",
    );

    autoRemediateKinesisDash001LambdaFunction.node.addDependency(
      autoRemediateKinesisDash001LogGroup,
    );
    autoRemediateKinesisDash001LambdaFunction.node.addDependency(
      autoRemediateKinesis001Role,
    );

    const autoRemediateLambdaDash003LambdaFunction = new lambda.Function(
      this,
      "AutoRemediateLambdaDash003LambdaFunction",
      {
        code: lambda.Code.fromAsset(functionsPath),
        handler: "AutoRemediateLambda-003.handler",
        runtime: lambda.Runtime.NODEJS_24_X,
        functionName: "auto-remediate-v1-AutoRemediateLambda-003",
        memorySize: 128,
        timeout: cdk.Duration.seconds(10),
        role: iam.Role.fromRoleArn(
          this,
          "AutoRemediateLambdaDash003LambdaFunctionRoleRef",
          autoRemediateLambda003Role.attrArn,
        ),
        tracing: lambda.Tracing.ACTIVE,
        logGroup: logs.LogGroup.fromLogGroupName(
          this,
          "AutoRemediateLambdaDash003LambdaFunctionLogGroupRef",
          autoRemediateLambdaDash003LogGroup.ref,
        ),
      },
    );

    cdk.Tags.of(autoRemediateLambdaDash003LambdaFunction).add(
      "Name",
      "Auto Remediate Lambda-003",
    );
    cdk.Tags.of(autoRemediateLambdaDash003LambdaFunction).add(
      "Owner",
      "CloudConformity",
    );
    cdk.Tags.of(autoRemediateLambdaDash003LambdaFunction).add(
      "Role",
      "Auto Remediate",
    );
    cdk.Tags.of(autoRemediateLambdaDash003LambdaFunction).add(
      "Environment",
      "Ops",
    );

    autoRemediateLambdaDash003LambdaFunction.node.addDependency(
      autoRemediateLambdaDash003LogGroup,
    );
    autoRemediateLambdaDash003LambdaFunction.node.addDependency(
      autoRemediateLambda003Role,
    );

    const autoRemediateOrganizationsDash002LambdaFunction = new lambda.Function(
      this,
      "AutoRemediateOrganizationsDash002LambdaFunction",
      {
        code: lambda.Code.fromAsset(functionsPath),
        handler: "AutoRemediateOrganizations-002.handler",
        runtime: lambda.Runtime.NODEJS_24_X,
        functionName: "auto-remediate-v1-AutoRemediateOrganizations-002",
        memorySize: 128,
        timeout: cdk.Duration.seconds(10),
        role: iam.Role.fromRoleArn(
          this,
          "AutoRemediateOrganizationsDash002LambdaFunctionRoleRef",
          autoRemediateOrganizations002Role.attrArn,
        ),
        tracing: lambda.Tracing.ACTIVE,
        logGroup: logs.LogGroup.fromLogGroupName(
          this,
          "AutoRemediateOrganizationsDash002LambdaFunctionLogGroupRef",
          autoRemediateOrganizationsDash002LogGroup.ref,
        ),
      },
    );

    cdk.Tags.of(autoRemediateOrganizationsDash002LambdaFunction).add(
      "Name",
      "Auto Remediate Organizations-002",
    );
    cdk.Tags.of(autoRemediateOrganizationsDash002LambdaFunction).add(
      "Owner",
      "CloudConformity",
    );
    cdk.Tags.of(autoRemediateOrganizationsDash002LambdaFunction).add(
      "Role",
      "Auto Remediate",
    );
    cdk.Tags.of(autoRemediateOrganizationsDash002LambdaFunction).add(
      "Environment",
      "Ops",
    );

    autoRemediateOrganizationsDash002LambdaFunction.node.addDependency(
      autoRemediateOrganizationsDash002LogGroup,
    );
    autoRemediateOrganizationsDash002LambdaFunction.node.addDependency(
      autoRemediateOrganizations002Role,
    );

    const autoRemediateQueueDlq = new sqs.CfnQueue(
      this,
      "AutoRemediateQueueDLQ",
      {
        queueName: "auto-remediate-v1-queue-dlq",
        kmsMasterKeyId: kmsKeySqsQueueFromSns.attrArn,
        tags: [
          {
            key: "Service",
            value: "auto-remediate",
          },
          {
            key: "Name",
            value: "AutoRemediateQueueDLQ",
          },
          {
            key: "Owner",
            value: "CloudConformity",
          },
        ],
      },
    );

    const autoRemediateRdsDash006LambdaFunction = new lambda.Function(
      this,
      "AutoRemediateRDSDash006LambdaFunction",
      {
        code: lambda.Code.fromAsset(functionsPath),
        handler: "AutoRemediateRDS-006.handler",
        runtime: lambda.Runtime.NODEJS_24_X,
        functionName: "auto-remediate-v1-AutoRemediateRDS-006",
        memorySize: 128,
        timeout: cdk.Duration.seconds(120),
        role: iam.Role.fromRoleArn(
          this,
          "AutoRemediateRDSDash006LambdaFunctionRoleRef",
          autoRemediateRds006Role.attrArn,
        ),
        tracing: lambda.Tracing.ACTIVE,
        logGroup: logs.LogGroup.fromLogGroupName(
          this,
          "AutoRemediateRDSDash006LambdaFunctionLogGroupRef",
          autoRemediateRdsDash006LogGroup.ref,
        ),
      },
    );

    cdk.Tags.of(autoRemediateRdsDash006LambdaFunction).add(
      "Name",
      "Auto Remediate RDS-006",
    );
    cdk.Tags.of(autoRemediateRdsDash006LambdaFunction).add(
      "Owner",
      "CloudConformity",
    );
    cdk.Tags.of(autoRemediateRdsDash006LambdaFunction).add(
      "Role",
      "Auto Remediate",
    );
    cdk.Tags.of(autoRemediateRdsDash006LambdaFunction).add(
      "Environment",
      "Ops",
    );

    autoRemediateRdsDash006LambdaFunction.node.addDependency(
      autoRemediateRdsDash006LogGroup,
    );
    autoRemediateRdsDash006LambdaFunction.node.addDependency(
      autoRemediateRds006Role,
    );

    const autoRemediateRdsDash008LambdaFunction = new lambda.Function(
      this,
      "AutoRemediateRDSDash008LambdaFunction",
      {
        code: lambda.Code.fromAsset(functionsPath),
        handler: "AutoRemediateRDS-008.handler",
        runtime: lambda.Runtime.NODEJS_24_X,
        functionName: "auto-remediate-v1-AutoRemediateRDS-008",
        memorySize: 128,
        timeout: cdk.Duration.seconds(10),
        role: iam.Role.fromRoleArn(
          this,
          "AutoRemediateRDSDash008LambdaFunctionRoleRef",
          autoRemediateRds008Role.attrArn,
        ),
        tracing: lambda.Tracing.ACTIVE,
        logGroup: logs.LogGroup.fromLogGroupName(
          this,
          "AutoRemediateRDSDash008LambdaFunctionLogGroupRef",
          autoRemediateRdsDash008LogGroup.ref,
        ),
      },
    );

    cdk.Tags.of(autoRemediateRdsDash008LambdaFunction).add(
      "Name",
      "Auto Remediate RDS-008",
    );
    cdk.Tags.of(autoRemediateRdsDash008LambdaFunction).add(
      "Owner",
      "CloudConformity",
    );
    cdk.Tags.of(autoRemediateRdsDash008LambdaFunction).add(
      "Role",
      "Auto Remediate",
    );
    cdk.Tags.of(autoRemediateRdsDash008LambdaFunction).add(
      "Environment",
      "Ops",
    );

    autoRemediateRdsDash008LambdaFunction.node.addDependency(
      autoRemediateRdsDash008LogGroup,
    );
    autoRemediateRdsDash008LambdaFunction.node.addDependency(
      autoRemediateRds008Role,
    );

    const autoRemediateRdsDash023LambdaFunction = new lambda.Function(
      this,
      "AutoRemediateRDSDash023LambdaFunction",
      {
        code: lambda.Code.fromAsset(functionsPath),
        handler: "AutoRemediateRDS-023.handler",
        runtime: lambda.Runtime.NODEJS_24_X,
        functionName: "auto-remediate-v1-AutoRemediateRDS-023",
        memorySize: 128,
        timeout: cdk.Duration.seconds(10),
        role: iam.Role.fromRoleArn(
          this,
          "AutoRemediateRDSDash023LambdaFunctionRoleRef",
          autoRemediateRds023Role.attrArn,
        ),
        tracing: lambda.Tracing.ACTIVE,
        logGroup: logs.LogGroup.fromLogGroupName(
          this,
          "AutoRemediateRDSDash023LambdaFunctionLogGroupRef",
          autoRemediateRdsDash023LogGroup.ref,
        ),
      },
    );

    cdk.Tags.of(autoRemediateRdsDash023LambdaFunction).add(
      "Name",
      "Auto Remediate RDS-023",
    );
    cdk.Tags.of(autoRemediateRdsDash023LambdaFunction).add(
      "Owner",
      "CloudConformity",
    );
    cdk.Tags.of(autoRemediateRdsDash023LambdaFunction).add(
      "Role",
      "Auto Remediate",
    );
    cdk.Tags.of(autoRemediateRdsDash023LambdaFunction).add(
      "Environment",
      "Ops",
    );

    autoRemediateRdsDash023LambdaFunction.node.addDependency(
      autoRemediateRdsDash023LogGroup,
    );
    autoRemediateRdsDash023LambdaFunction.node.addDependency(
      autoRemediateRds023Role,
    );

    const autoRemediateRsDash001LambdaFunction = new lambda.Function(
      this,
      "AutoRemediateRSDash001LambdaFunction",
      {
        code: lambda.Code.fromAsset(functionsPath),
        handler: "AutoRemediateRS-001.handler",
        runtime: lambda.Runtime.NODEJS_24_X,
        functionName: "auto-remediate-v1-AutoRemediateRS-001",
        memorySize: 128,
        timeout: cdk.Duration.seconds(120),
        role: iam.Role.fromRoleArn(
          this,
          "AutoRemediateRSDash001LambdaFunctionRoleRef",
          autoRemediateRs001Role.attrArn,
        ),
        tracing: lambda.Tracing.ACTIVE,
        logGroup: logs.LogGroup.fromLogGroupName(
          this,
          "AutoRemediateRSDash001LambdaFunctionLogGroupRef",
          autoRemediateRsDash001LogGroup.ref,
        ),
      },
    );

    cdk.Tags.of(autoRemediateRsDash001LambdaFunction).add(
      "Name",
      "Auto Remediate RS-001",
    );
    cdk.Tags.of(autoRemediateRsDash001LambdaFunction).add(
      "Owner",
      "CloudConformity",
    );
    cdk.Tags.of(autoRemediateRsDash001LambdaFunction).add(
      "Role",
      "Auto Remediate",
    );
    cdk.Tags.of(autoRemediateRsDash001LambdaFunction).add("Environment", "Ops");

    autoRemediateRsDash001LambdaFunction.node.addDependency(
      autoRemediateRsDash001LogGroup,
    );
    autoRemediateRsDash001LambdaFunction.node.addDependency(
      autoRemediateRs001Role,
    );

    const autoRemediateRsDash019LambdaFunction = new lambda.Function(
      this,
      "AutoRemediateRSDash019LambdaFunction",
      {
        code: lambda.Code.fromAsset(functionsPath),
        handler: "AutoRemediateRS-019.handler",
        runtime: lambda.Runtime.NODEJS_24_X,
        functionName: "auto-remediate-v1-AutoRemediateRS-019",
        memorySize: 128,
        timeout: cdk.Duration.seconds(120),
        role: iam.Role.fromRoleArn(
          this,
          "AutoRemediateRSDash019LambdaFunctionRoleRef",
          autoRemediateRs019Role.attrArn,
        ),
        tracing: lambda.Tracing.ACTIVE,
        logGroup: logs.LogGroup.fromLogGroupName(
          this,
          "AutoRemediateRSDash019LambdaFunctionLogGroupRef",
          autoRemediateRsDash019LogGroup.ref,
        ),
      },
    );

    cdk.Tags.of(autoRemediateRsDash019LambdaFunction).add(
      "Name",
      "Auto Remediate RS-019",
    );
    cdk.Tags.of(autoRemediateRsDash019LambdaFunction).add(
      "Owner",
      "CloudConformity",
    );
    cdk.Tags.of(autoRemediateRsDash019LambdaFunction).add(
      "Role",
      "Auto Remediate",
    );
    cdk.Tags.of(autoRemediateRsDash019LambdaFunction).add("Environment", "Ops");

    autoRemediateRsDash019LambdaFunction.node.addDependency(
      autoRemediateRsDash019LogGroup,
    );
    autoRemediateRsDash019LambdaFunction.node.addDependency(
      autoRemediateRs019Role,
    );

    const autoRemediateRsDash023LambdaFunction = new lambda.Function(
      this,
      "AutoRemediateRSDash023LambdaFunction",
      {
        code: lambda.Code.fromAsset(functionsPath),
        handler: "AutoRemediateRS-023.handler",
        runtime: lambda.Runtime.NODEJS_24_X,
        functionName: "auto-remediate-v1-AutoRemediateRS-023",
        memorySize: 128,
        timeout: cdk.Duration.seconds(120),
        role: iam.Role.fromRoleArn(
          this,
          "AutoRemediateRSDash023LambdaFunctionRoleRef",
          autoRemediateRs023Role.attrArn,
        ),
        tracing: lambda.Tracing.ACTIVE,
        logGroup: logs.LogGroup.fromLogGroupName(
          this,
          "AutoRemediateRSDash023LambdaFunctionLogGroupRef",
          autoRemediateRsDash023LogGroup.ref,
        ),
      },
    );

    cdk.Tags.of(autoRemediateRsDash023LambdaFunction).add(
      "Name",
      "Auto Remediate RS-023",
    );
    cdk.Tags.of(autoRemediateRsDash023LambdaFunction).add(
      "Owner",
      "CloudConformity",
    );
    cdk.Tags.of(autoRemediateRsDash023LambdaFunction).add(
      "Role",
      "Auto Remediate",
    );
    cdk.Tags.of(autoRemediateRsDash023LambdaFunction).add("Environment", "Ops");

    autoRemediateRsDash023LambdaFunction.node.addDependency(
      autoRemediateRsDash023LogGroup,
    );
    autoRemediateRsDash023LambdaFunction.node.addDependency(
      autoRemediateRs023Role,
    );

    const autoRemediateS3Dash001LambdaFunction = new lambda.Function(
      this,
      "AutoRemediateS3Dash001LambdaFunction",
      {
        code: lambda.Code.fromAsset(functionsPath),
        handler: "AutoRemediateS3-001.handler",
        runtime: lambda.Runtime.NODEJS_24_X,
        functionName: "auto-remediate-v1-AutoRemediateS3-001",
        memorySize: 128,
        timeout: cdk.Duration.seconds(10),
        role: iam.Role.fromRoleArn(
          this,
          "AutoRemediateS3Dash001LambdaFunctionRoleRef",
          autoRemediateS3001Role.attrArn,
        ),
        tracing: lambda.Tracing.ACTIVE,
        logGroup: logs.LogGroup.fromLogGroupName(
          this,
          "AutoRemediateS3Dash001LambdaFunctionLogGroupRef",
          autoRemediateS3Dash001LogGroup.ref,
        ),
      },
    );

    cdk.Tags.of(autoRemediateS3Dash001LambdaFunction).add(
      "Name",
      "Auto Remediate S3-001",
    );
    cdk.Tags.of(autoRemediateS3Dash001LambdaFunction).add(
      "Owner",
      "CloudConformity",
    );
    cdk.Tags.of(autoRemediateS3Dash001LambdaFunction).add(
      "Role",
      "Auto Remediate",
    );
    cdk.Tags.of(autoRemediateS3Dash001LambdaFunction).add("Environment", "Ops");

    autoRemediateS3Dash001LambdaFunction.node.addDependency(
      autoRemediateS3Dash001LogGroup,
    );
    autoRemediateS3Dash001LambdaFunction.node.addDependency(
      autoRemediateS3001Role,
    );

    const autoRemediateS3Dash002LambdaFunction = new lambda.Function(
      this,
      "AutoRemediateS3Dash002LambdaFunction",
      {
        code: lambda.Code.fromAsset(functionsPath),
        handler: "AutoRemediateS3-002.handler",
        runtime: lambda.Runtime.NODEJS_24_X,
        functionName: "auto-remediate-v1-AutoRemediateS3-002",
        memorySize: 128,
        timeout: cdk.Duration.seconds(10),
        role: iam.Role.fromRoleArn(
          this,
          "AutoRemediateS3Dash002LambdaFunctionRoleRef",
          autoRemediateS3002Role.attrArn,
        ),
        tracing: lambda.Tracing.ACTIVE,
        logGroup: logs.LogGroup.fromLogGroupName(
          this,
          "AutoRemediateS3Dash002LambdaFunctionLogGroupRef",
          autoRemediateS3Dash002LogGroup.ref,
        ),
      },
    );

    cdk.Tags.of(autoRemediateS3Dash002LambdaFunction).add(
      "Name",
      "Auto Remediate S3-002",
    );
    cdk.Tags.of(autoRemediateS3Dash002LambdaFunction).add(
      "Owner",
      "CloudConformity",
    );
    cdk.Tags.of(autoRemediateS3Dash002LambdaFunction).add(
      "Role",
      "Auto Remediate",
    );
    cdk.Tags.of(autoRemediateS3Dash002LambdaFunction).add("Environment", "Ops");

    autoRemediateS3Dash002LambdaFunction.node.addDependency(
      autoRemediateS3Dash002LogGroup,
    );
    autoRemediateS3Dash002LambdaFunction.node.addDependency(
      autoRemediateS3002Role,
    );

    const autoRemediateS3Dash003LambdaFunction = new lambda.Function(
      this,
      "AutoRemediateS3Dash003LambdaFunction",
      {
        code: lambda.Code.fromAsset(functionsPath),
        handler: "AutoRemediateS3-003.handler",
        runtime: lambda.Runtime.NODEJS_24_X,
        functionName: "auto-remediate-v1-AutoRemediateS3-003",
        memorySize: 128,
        timeout: cdk.Duration.seconds(10),
        role: iam.Role.fromRoleArn(
          this,
          "AutoRemediateS3Dash003LambdaFunctionRoleRef",
          autoRemediateS3003Role.attrArn,
        ),
        tracing: lambda.Tracing.ACTIVE,
        logGroup: logs.LogGroup.fromLogGroupName(
          this,
          "AutoRemediateS3Dash003LambdaFunctionLogGroupRef",
          autoRemediateS3Dash003LogGroup.ref,
        ),
      },
    );

    cdk.Tags.of(autoRemediateS3Dash003LambdaFunction).add(
      "Name",
      "Auto Remediate S3-003",
    );
    cdk.Tags.of(autoRemediateS3Dash003LambdaFunction).add(
      "Owner",
      "CloudConformity",
    );
    cdk.Tags.of(autoRemediateS3Dash003LambdaFunction).add(
      "Role",
      "Auto Remediate",
    );
    cdk.Tags.of(autoRemediateS3Dash003LambdaFunction).add("Environment", "Ops");

    autoRemediateS3Dash003LambdaFunction.node.addDependency(
      autoRemediateS3Dash003LogGroup,
    );
    autoRemediateS3Dash003LambdaFunction.node.addDependency(
      autoRemediateS3003Role,
    );

    const autoRemediateS3Dash004LambdaFunction = new lambda.Function(
      this,
      "AutoRemediateS3Dash004LambdaFunction",
      {
        code: lambda.Code.fromAsset(functionsPath),
        handler: "AutoRemediateS3-004.handler",
        runtime: lambda.Runtime.NODEJS_24_X,
        functionName: "auto-remediate-v1-AutoRemediateS3-004",
        memorySize: 128,
        timeout: cdk.Duration.seconds(10),
        role: iam.Role.fromRoleArn(
          this,
          "AutoRemediateS3Dash004LambdaFunctionRoleRef",
          autoRemediateS3004Role.attrArn,
        ),
        tracing: lambda.Tracing.ACTIVE,
        logGroup: logs.LogGroup.fromLogGroupName(
          this,
          "AutoRemediateS3Dash004LambdaFunctionLogGroupRef",
          autoRemediateS3Dash004LogGroup.ref,
        ),
      },
    );

    cdk.Tags.of(autoRemediateS3Dash004LambdaFunction).add(
      "Name",
      "Auto Remediate S3-004",
    );
    cdk.Tags.of(autoRemediateS3Dash004LambdaFunction).add(
      "Owner",
      "CloudConformity",
    );
    cdk.Tags.of(autoRemediateS3Dash004LambdaFunction).add(
      "Role",
      "Auto Remediate",
    );
    cdk.Tags.of(autoRemediateS3Dash004LambdaFunction).add("Environment", "Ops");

    autoRemediateS3Dash004LambdaFunction.node.addDependency(
      autoRemediateS3Dash004LogGroup,
    );
    autoRemediateS3Dash004LambdaFunction.node.addDependency(
      autoRemediateS3004Role,
    );

    const autoRemediateS3Dash005LambdaFunction = new lambda.Function(
      this,
      "AutoRemediateS3Dash005LambdaFunction",
      {
        code: lambda.Code.fromAsset(functionsPath),
        handler: "AutoRemediateS3-005.handler",
        runtime: lambda.Runtime.NODEJS_24_X,
        functionName: "auto-remediate-v1-AutoRemediateS3-005",
        memorySize: 128,
        timeout: cdk.Duration.seconds(10),
        role: iam.Role.fromRoleArn(
          this,
          "AutoRemediateS3Dash005LambdaFunctionRoleRef",
          autoRemediateS3005Role.attrArn,
        ),
        tracing: lambda.Tracing.ACTIVE,
        logGroup: logs.LogGroup.fromLogGroupName(
          this,
          "AutoRemediateS3Dash005LambdaFunctionLogGroupRef",
          autoRemediateS3Dash005LogGroup.ref,
        ),
      },
    );

    cdk.Tags.of(autoRemediateS3Dash005LambdaFunction).add(
      "Name",
      "Auto Remediate S3-005",
    );
    cdk.Tags.of(autoRemediateS3Dash005LambdaFunction).add(
      "Owner",
      "CloudConformity",
    );
    cdk.Tags.of(autoRemediateS3Dash005LambdaFunction).add(
      "Role",
      "Auto Remediate",
    );
    cdk.Tags.of(autoRemediateS3Dash005LambdaFunction).add("Environment", "Ops");

    autoRemediateS3Dash005LambdaFunction.node.addDependency(
      autoRemediateS3Dash005LogGroup,
    );
    autoRemediateS3Dash005LambdaFunction.node.addDependency(
      autoRemediateS3005Role,
    );

    const autoRemediateS3Dash006LambdaFunction = new lambda.Function(
      this,
      "AutoRemediateS3Dash006LambdaFunction",
      {
        code: lambda.Code.fromAsset(functionsPath),
        handler: "AutoRemediateS3-006.handler",
        runtime: lambda.Runtime.NODEJS_24_X,
        functionName: "auto-remediate-v1-AutoRemediateS3-006",
        memorySize: 128,
        timeout: cdk.Duration.seconds(10),
        role: iam.Role.fromRoleArn(
          this,
          "AutoRemediateS3Dash006LambdaFunctionRoleRef",
          autoRemediateS3006Role.attrArn,
        ),
        tracing: lambda.Tracing.ACTIVE,
        logGroup: logs.LogGroup.fromLogGroupName(
          this,
          "AutoRemediateS3Dash006LambdaFunctionLogGroupRef",
          autoRemediateS3Dash006LogGroup.ref,
        ),
      },
    );

    cdk.Tags.of(autoRemediateS3Dash006LambdaFunction).add(
      "Name",
      "Auto Remediate S3-006",
    );
    cdk.Tags.of(autoRemediateS3Dash006LambdaFunction).add(
      "Owner",
      "CloudConformity",
    );
    cdk.Tags.of(autoRemediateS3Dash006LambdaFunction).add(
      "Role",
      "Auto Remediate",
    );
    cdk.Tags.of(autoRemediateS3Dash006LambdaFunction).add("Environment", "Ops");

    autoRemediateS3Dash006LambdaFunction.node.addDependency(
      autoRemediateS3Dash006LogGroup,
    );
    autoRemediateS3Dash006LambdaFunction.node.addDependency(
      autoRemediateS3006Role,
    );

    const autoRemediateS3Dash007LambdaFunction = new lambda.Function(
      this,
      "AutoRemediateS3Dash007LambdaFunction",
      {
        code: lambda.Code.fromAsset(functionsPath),
        handler: "AutoRemediateS3-007.handler",
        runtime: lambda.Runtime.NODEJS_24_X,
        functionName: "auto-remediate-v1-AutoRemediateS3-007",
        memorySize: 128,
        timeout: cdk.Duration.seconds(10),
        role: iam.Role.fromRoleArn(
          this,
          "AutoRemediateS3Dash007LambdaFunctionRoleRef",
          autoRemediateS3007Role.attrArn,
        ),
        tracing: lambda.Tracing.ACTIVE,
        logGroup: logs.LogGroup.fromLogGroupName(
          this,
          "AutoRemediateS3Dash007LambdaFunctionLogGroupRef",
          autoRemediateS3Dash007LogGroup.ref,
        ),
      },
    );

    cdk.Tags.of(autoRemediateS3Dash007LambdaFunction).add(
      "Name",
      "Auto Remediate S3-007",
    );
    cdk.Tags.of(autoRemediateS3Dash007LambdaFunction).add(
      "Owner",
      "CloudConformity",
    );
    cdk.Tags.of(autoRemediateS3Dash007LambdaFunction).add(
      "Role",
      "Auto Remediate",
    );
    cdk.Tags.of(autoRemediateS3Dash007LambdaFunction).add("Environment", "Ops");

    autoRemediateS3Dash007LambdaFunction.node.addDependency(
      autoRemediateS3Dash007LogGroup,
    );
    autoRemediateS3Dash007LambdaFunction.node.addDependency(
      autoRemediateS3007Role,
    );

    const autoRemediateS3Dash008LambdaFunction = new lambda.Function(
      this,
      "AutoRemediateS3Dash008LambdaFunction",
      {
        code: lambda.Code.fromAsset(functionsPath),
        handler: "AutoRemediateS3-008.handler",
        runtime: lambda.Runtime.NODEJS_24_X,
        functionName: "auto-remediate-v1-AutoRemediateS3-008",
        memorySize: 128,
        timeout: cdk.Duration.seconds(10),
        role: iam.Role.fromRoleArn(
          this,
          "AutoRemediateS3Dash008LambdaFunctionRoleRef",
          autoRemediateS3008Role.attrArn,
        ),
        tracing: lambda.Tracing.ACTIVE,
        logGroup: logs.LogGroup.fromLogGroupName(
          this,
          "AutoRemediateS3Dash008LambdaFunctionLogGroupRef",
          autoRemediateS3Dash008LogGroup.ref,
        ),
      },
    );

    cdk.Tags.of(autoRemediateS3Dash008LambdaFunction).add(
      "Name",
      "Auto Remediate S3-008",
    );
    cdk.Tags.of(autoRemediateS3Dash008LambdaFunction).add(
      "Owner",
      "CloudConformity",
    );
    cdk.Tags.of(autoRemediateS3Dash008LambdaFunction).add(
      "Role",
      "Auto Remediate",
    );
    cdk.Tags.of(autoRemediateS3Dash008LambdaFunction).add("Environment", "Ops");

    autoRemediateS3Dash008LambdaFunction.node.addDependency(
      autoRemediateS3Dash008LogGroup,
    );
    autoRemediateS3Dash008LambdaFunction.node.addDependency(
      autoRemediateS3008Role,
    );

    const autoRemediateS3Dash009LambdaFunction = new lambda.Function(
      this,
      "AutoRemediateS3Dash009LambdaFunction",
      {
        code: lambda.Code.fromAsset(functionsPath),
        handler: "AutoRemediateS3-009.handler",
        runtime: lambda.Runtime.NODEJS_24_X,
        functionName: "auto-remediate-v1-AutoRemediateS3-009",
        memorySize: 128,
        timeout: cdk.Duration.seconds(10),
        role: iam.Role.fromRoleArn(
          this,
          "AutoRemediateS3Dash009LambdaFunctionRoleRef",
          autoRemediateS3009Role.attrArn,
        ),
        tracing: lambda.Tracing.ACTIVE,
        logGroup: logs.LogGroup.fromLogGroupName(
          this,
          "AutoRemediateS3Dash009LambdaFunctionLogGroupRef",
          autoRemediateS3Dash009LogGroup.ref,
        ),
      },
    );

    cdk.Tags.of(autoRemediateS3Dash009LambdaFunction).add(
      "Name",
      "Auto Remediate S3-009",
    );
    cdk.Tags.of(autoRemediateS3Dash009LambdaFunction).add(
      "Owner",
      "CloudConformity",
    );
    cdk.Tags.of(autoRemediateS3Dash009LambdaFunction).add(
      "Role",
      "Auto Remediate",
    );
    cdk.Tags.of(autoRemediateS3Dash009LambdaFunction).add("Environment", "Ops");

    autoRemediateS3Dash009LambdaFunction.node.addDependency(
      autoRemediateS3Dash009LogGroup,
    );
    autoRemediateS3Dash009LambdaFunction.node.addDependency(
      autoRemediateS3009Role,
    );

    const autoRemediateS3Dash010LambdaFunction = new lambda.Function(
      this,
      "AutoRemediateS3Dash010LambdaFunction",
      {
        code: lambda.Code.fromAsset(functionsPath),
        handler: "AutoRemediateS3-010.handler",
        runtime: lambda.Runtime.NODEJS_24_X,
        functionName: "auto-remediate-v1-AutoRemediateS3-010",
        memorySize: 128,
        timeout: cdk.Duration.seconds(10),
        role: iam.Role.fromRoleArn(
          this,
          "AutoRemediateS3Dash010LambdaFunctionRoleRef",
          autoRemediateS3010Role.attrArn,
        ),
        tracing: lambda.Tracing.ACTIVE,
        logGroup: logs.LogGroup.fromLogGroupName(
          this,
          "AutoRemediateS3Dash010LambdaFunctionLogGroupRef",
          autoRemediateS3Dash010LogGroup.ref,
        ),
      },
    );

    cdk.Tags.of(autoRemediateS3Dash010LambdaFunction).add(
      "Name",
      "Auto Remediate S3-010",
    );
    cdk.Tags.of(autoRemediateS3Dash010LambdaFunction).add(
      "Owner",
      "CloudConformity",
    );
    cdk.Tags.of(autoRemediateS3Dash010LambdaFunction).add(
      "Role",
      "Auto Remediate",
    );
    cdk.Tags.of(autoRemediateS3Dash010LambdaFunction).add("Environment", "Ops");

    autoRemediateS3Dash010LambdaFunction.node.addDependency(
      autoRemediateS3Dash010LogGroup,
    );
    autoRemediateS3Dash010LambdaFunction.node.addDependency(
      autoRemediateS3010Role,
    );

    const autoRemediateS3Dash012LambdaFunction = new lambda.Function(
      this,
      "AutoRemediateS3Dash012LambdaFunction",
      {
        code: lambda.Code.fromAsset(functionsPath),
        handler: "AutoRemediateS3-012.handler",
        runtime: lambda.Runtime.NODEJS_24_X,
        functionName: "auto-remediate-v1-AutoRemediateS3-012",
        memorySize: 128,
        timeout: cdk.Duration.seconds(10),
        role: iam.Role.fromRoleArn(
          this,
          "AutoRemediateS3Dash012LambdaFunctionRoleRef",
          autoRemediateS3012Role.attrArn,
        ),
        tracing: lambda.Tracing.ACTIVE,
        logGroup: logs.LogGroup.fromLogGroupName(
          this,
          "AutoRemediateS3Dash012LambdaFunctionLogGroupRef",
          autoRemediateS3Dash012LogGroup.ref,
        ),
      },
    );

    cdk.Tags.of(autoRemediateS3Dash012LambdaFunction).add(
      "Name",
      "Auto Remediate S3-012",
    );
    cdk.Tags.of(autoRemediateS3Dash012LambdaFunction).add(
      "Owner",
      "CloudConformity",
    );
    cdk.Tags.of(autoRemediateS3Dash012LambdaFunction).add(
      "Role",
      "Auto Remediate",
    );
    cdk.Tags.of(autoRemediateS3Dash012LambdaFunction).add("Environment", "Ops");

    autoRemediateS3Dash012LambdaFunction.node.addDependency(
      autoRemediateS3Dash012LogGroup,
    );
    autoRemediateS3Dash012LambdaFunction.node.addDependency(
      autoRemediateS3012Role,
    );

    const autoRemediateS3Dash014LambdaFunction = new lambda.Function(
      this,
      "AutoRemediateS3Dash014LambdaFunction",
      {
        code: lambda.Code.fromAsset(functionsPath),
        handler: "AutoRemediateS3-014.handler",
        runtime: lambda.Runtime.NODEJS_24_X,
        functionName: "auto-remediate-v1-AutoRemediateS3-014",
        memorySize: 128,
        timeout: cdk.Duration.seconds(10),
        role: iam.Role.fromRoleArn(
          this,
          "AutoRemediateS3Dash014LambdaFunctionRoleRef",
          autoRemediateS3014Role.attrArn,
        ),
        tracing: lambda.Tracing.ACTIVE,
        logGroup: logs.LogGroup.fromLogGroupName(
          this,
          "AutoRemediateS3Dash014LambdaFunctionLogGroupRef",
          autoRemediateS3Dash014LogGroup.ref,
        ),
      },
    );

    cdk.Tags.of(autoRemediateS3Dash014LambdaFunction).add(
      "Name",
      "Auto Remediate S3-014",
    );
    cdk.Tags.of(autoRemediateS3Dash014LambdaFunction).add(
      "Owner",
      "CloudConformity",
    );
    cdk.Tags.of(autoRemediateS3Dash014LambdaFunction).add(
      "Role",
      "Auto Remediate",
    );
    cdk.Tags.of(autoRemediateS3Dash014LambdaFunction).add("Environment", "Ops");

    autoRemediateS3Dash014LambdaFunction.node.addDependency(
      autoRemediateS3Dash014LogGroup,
    );
    autoRemediateS3Dash014LambdaFunction.node.addDependency(
      autoRemediateS3014Role,
    );

    const autoRemediateS3Dash016LambdaFunction = new lambda.Function(
      this,
      "AutoRemediateS3Dash016LambdaFunction",
      {
        code: lambda.Code.fromAsset(functionsPath),
        handler: "AutoRemediateS3-016.handler",
        runtime: lambda.Runtime.NODEJS_24_X,
        functionName: "auto-remediate-v1-AutoRemediateS3-016",
        memorySize: 128,
        timeout: cdk.Duration.seconds(10),
        role: iam.Role.fromRoleArn(
          this,
          "AutoRemediateS3Dash016LambdaFunctionRoleRef",
          autoRemediateS3016Role.attrArn,
        ),
        tracing: lambda.Tracing.ACTIVE,
        logGroup: logs.LogGroup.fromLogGroupName(
          this,
          "AutoRemediateS3Dash016LambdaFunctionLogGroupRef",
          autoRemediateS3Dash016LogGroup.ref,
        ),
      },
    );

    cdk.Tags.of(autoRemediateS3Dash016LambdaFunction).add(
      "Name",
      "Auto Remediate S3-016",
    );
    cdk.Tags.of(autoRemediateS3Dash016LambdaFunction).add(
      "Owner",
      "CloudConformity",
    );
    cdk.Tags.of(autoRemediateS3Dash016LambdaFunction).add(
      "Role",
      "Auto Remediate",
    );
    cdk.Tags.of(autoRemediateS3Dash016LambdaFunction).add("Environment", "Ops");

    autoRemediateS3Dash016LambdaFunction.node.addDependency(
      autoRemediateS3Dash016LogGroup,
    );
    autoRemediateS3Dash016LambdaFunction.node.addDependency(
      autoRemediateS3016Role,
    );

    const autoRemediateSqsDash004LambdaFunction = new lambda.Function(
      this,
      "AutoRemediateSQSDash004LambdaFunction",
      {
        code: lambda.Code.fromAsset(functionsPath),
        handler: "AutoRemediateSQS-004.handler",
        runtime: lambda.Runtime.NODEJS_24_X,
        functionName: "auto-remediate-v1-AutoRemediateSQS-004",
        memorySize: 128,
        timeout: cdk.Duration.seconds(120),
        role: iam.Role.fromRoleArn(
          this,
          "AutoRemediateSQSDash004LambdaFunctionRoleRef",
          autoRemediateSqs004Role.attrArn,
        ),
        tracing: lambda.Tracing.ACTIVE,
        logGroup: logs.LogGroup.fromLogGroupName(
          this,
          "AutoRemediateSQSDash004LambdaFunctionLogGroupRef",
          autoRemediateSqsDash004LogGroup.ref,
        ),
      },
    );

    cdk.Tags.of(autoRemediateSqsDash004LambdaFunction).add(
      "Name",
      "Auto Remediate SQS-004",
    );
    cdk.Tags.of(autoRemediateSqsDash004LambdaFunction).add(
      "Owner",
      "CloudConformity",
    );
    cdk.Tags.of(autoRemediateSqsDash004LambdaFunction).add(
      "Role",
      "Auto Remediate",
    );
    cdk.Tags.of(autoRemediateSqsDash004LambdaFunction).add(
      "Environment",
      "Ops",
    );

    autoRemediateSqsDash004LambdaFunction.node.addDependency(
      autoRemediateSqsDash004LogGroup,
    );
    autoRemediateSqsDash004LambdaFunction.node.addDependency(
      autoRemediateSqs004Role,
    );

    const autoRemediateVpcDash001LambdaFunction = new lambda.Function(
      this,
      "AutoRemediateVPCDash001LambdaFunction",
      {
        code: lambda.Code.fromAsset(functionsPath),
        handler: "AutoRemediateVPC-001.handler",
        runtime: lambda.Runtime.NODEJS_24_X,
        functionName: "auto-remediate-v1-AutoRemediateVPC-001",
        memorySize: 128,
        timeout: cdk.Duration.seconds(120),
        role: iam.Role.fromRoleArn(
          this,
          "AutoRemediateVPCDash001LambdaFunctionRoleRef",
          autoRemediateVpc001Role.attrArn,
        ),
        tracing: lambda.Tracing.ACTIVE,
        logGroup: logs.LogGroup.fromLogGroupName(
          this,
          "AutoRemediateVPCDash001LambdaFunctionLogGroupRef",
          autoRemediateVpcDash001LogGroup.ref,
        ),
      },
    );

    cdk.Tags.of(autoRemediateVpcDash001LambdaFunction).add(
      "Name",
      "Auto Remediate VPC-001",
    );
    cdk.Tags.of(autoRemediateVpcDash001LambdaFunction).add(
      "Owner",
      "CloudConformity",
    );
    cdk.Tags.of(autoRemediateVpcDash001LambdaFunction).add(
      "Role",
      "Auto Remediate",
    );
    cdk.Tags.of(autoRemediateVpcDash001LambdaFunction).add(
      "Environment",
      "Ops",
    );

    autoRemediateVpcDash001LambdaFunction.node.addDependency(
      autoRemediateVpcDash001LogGroup,
    );
    autoRemediateVpcDash001LambdaFunction.node.addDependency(
      autoRemediateVpc001Role,
    );

    const keyAlias = new kms.CfnAlias(this, "KeyAlias", {
      aliasName: "alias/SNS-to-SQS-Key-us-west-2",
      targetKeyId: kmsKeySqsQueueFromSns.ref,
    });

    const trustedAdvisorDash003LambdaFunction = new lambda.Function(
      this,
      "TrustedAdvisorDash003LambdaFunction",
      {
        code: lambda.Code.fromAsset(functionsPath),
        handler: "AutoRemediateTrustedAdvisor-003.handler",
        runtime: lambda.Runtime.NODEJS_24_X,
        functionName: "auto-remediate-v1-TrustedAdvisor-003",
        memorySize: 128,
        timeout: cdk.Duration.seconds(120),
        role: iam.Role.fromRoleArn(
          this,
          "TrustedAdvisorDash003LambdaFunctionRoleRef",
          autoRemediateTrustedAdvisor003Role.attrArn,
        ),
        tracing: lambda.Tracing.ACTIVE,
        logGroup: logs.LogGroup.fromLogGroupName(
          this,
          "TrustedAdvisorDash003LambdaFunctionLogGroupRef",
          trustedAdvisorDash003LogGroup.ref,
        ),
      },
    );

    cdk.Tags.of(trustedAdvisorDash003LambdaFunction).add(
      "Name",
      "Auto Remediate TrustedAdvisor-003",
    );
    cdk.Tags.of(trustedAdvisorDash003LambdaFunction).add(
      "Owner",
      "CloudConformity",
    );
    cdk.Tags.of(trustedAdvisorDash003LambdaFunction).add(
      "Role",
      "Auto Remediate",
    );
    cdk.Tags.of(trustedAdvisorDash003LambdaFunction).add("Environment", "Ops");

    trustedAdvisorDash003LambdaFunction.node.addDependency(
      trustedAdvisorDash003LogGroup,
    );
    trustedAdvisorDash003LambdaFunction.node.addDependency(
      autoRemediateTrustedAdvisor003Role,
    );

    const autoRemediateQueue = new sqs.CfnQueue(this, "AutoRemediateQueue", {
      queueName: "auto-remediate-v1-queue",
      visibilityTimeout: 10,
      delaySeconds: 3,
      redrivePolicy: {
        deadLetterTargetArn: autoRemediateQueueDlq.attrArn,
        maxReceiveCount: 3,
      },
      kmsMasterKeyId: kmsKeySqsQueueFromSns.attrArn,
      tags: [
        {
          key: "Service",
          value: "auto-remediate",
        },
        {
          key: "Name",
          value: "AutoRemediateQueue",
        },
        {
          key: "Owner",
          value: "CloudConformity",
        },
      ],
    });

    const autoRemediateOrchestratorRole = new iam.CfnRole(
      this,
      "AutoRemediateOrchestratorRole",
      {
        roleName: "AutoRemediateOrchestratorRole",
        assumeRolePolicyDocument: {
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Allow",
              Principal: {
                Service: ["lambda.amazonaws.com"],
              },
              Action: ["sts:AssumeRole"],
            },
          ],
        },
        policies: [
          {
            policyName: "AutoRemediationXRayPolicy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: ["xray:PutTraceSegments", "xray:PutTelemetryRecords"],
                  Resource: "*",
                },
              ],
            },
          },
          {
            policyName: "AutoRemediateOrchestratorPolicy",
            policyDocument: {
              Statement: [
                {
                  Effect: "Allow",
                  Action: [
                    "logs:CreateLogGroup",
                    "logs:CreateLogStream",
                    "logs:PutLogEvents",
                  ],
                  Resource: [
                    [
                      "arn:aws:logs",
                      this.region,
                      this.account,
                      "log-group:/aws/lambda/*:*:*",
                    ].join(":"),
                  ],
                },
                {
                  Effect: "Allow",
                  Action: ["lambda:InvokeFunction"],
                  Resource: "*",
                },
                {
                  Effect: "Allow",
                  Action: ["kms:Decrypt", "kms:GenerateDataKey"],
                  Resource: kmsKeySqsQueueFromSns.attrArn,
                },
                {
                  Effect: "Allow",
                  Action: [
                    "sqs:SendMessage",
                    "sqs:ReceiveMessage",
                    "sqs:DeleteMessage",
                    "sqs:ListQueues*",
                    "sqs:GetQueueAttributes",
                  ],
                  Resource: autoRemediateQueue.attrArn,
                },
              ],
            },
          },
        ],
      },
    );

    const autoRemediateQueueSubscription = new sns.CfnSubscription(
      this,
      "AutoRemediateQueueSubscription",
      {
        topicArn: snsTopicAutoRemediate.ref,
        endpoint: autoRemediateQueue.attrArn,
        protocol: "sqs",
        rawMessageDelivery: true,
      },
    );

    const snsToAutoRemediateQueueSqsPolicy = new sqs.CfnQueuePolicy(
      this,
      "SNSToAutoRemediateQueueSqsPolicy",
      {
        policyDocument: {
          Version: "2012-10-17",
          Statement: [
            {
              Sid: "allow-sns-messages",
              Effect: "Allow",
              Principal: "*",
              Resource: autoRemediateQueue.attrArn,
              Action: "SQS:SendMessage",
              Condition: {
                ArnEquals: {
                  "aws:SourceArn": snsTopicAutoRemediate.ref,
                },
              },
            },
          ],
        },
        queues: [autoRemediateQueue.ref],
      },
    );

    const autoRemediateOrchestratorLambdaFunction = new lambda.Function(
      this,
      "AutoRemediateOrchestratorLambdaFunction",
      {
        code: lambda.Code.fromAsset(functionsPath),
        handler: "AutoRemediateOrchestrator.handler",
        runtime: lambda.Runtime.NODEJS_24_X,
        functionName: "auto-remediate-v1-AutoRemediateOrchestrator",
        memorySize: 128,
        timeout: cdk.Duration.seconds(10),
        role: iam.Role.fromRoleArn(
          this,
          "AutoRemediateOrchestratorLambdaFunctionRoleRef",
          autoRemediateOrchestratorRole.attrArn,
        ),
        tracing: lambda.Tracing.ACTIVE,
        logGroup: logs.LogGroup.fromLogGroupName(
          this,
          "AutoRemediateOrchestratorLambdaFunctionLogGroupRef",
          autoRemediateOrchestratorLogGroup.ref,
        ),
      },
    );

    cdk.Tags.of(autoRemediateOrchestratorLambdaFunction).add(
      "Name",
      "Auto Remediate Orchestrator",
    );
    cdk.Tags.of(autoRemediateOrchestratorLambdaFunction).add(
      "Owner",
      "CloudConformity",
    );
    cdk.Tags.of(autoRemediateOrchestratorLambdaFunction).add(
      "Role",
      "Auto Remediate",
    );
    cdk.Tags.of(autoRemediateOrchestratorLambdaFunction).add(
      "Environment",
      "Ops",
    );

    autoRemediateOrchestratorLambdaFunction.node.addDependency(
      autoRemediateOrchestratorLogGroup,
    );
    autoRemediateOrchestratorLambdaFunction.node.addDependency(
      autoRemediateOrchestratorRole,
    );

    const autoRemediateOrchestratorEventSourceMappingSqsAutoRemediateQueue =
      new lambda.CfnEventSourceMapping(
        this,
        "AutoRemediateOrchestratorEventSourceMappingSQSAutoRemediateQueue",
        {
          batchSize: 1,
          eventSourceArn: autoRemediateQueue.attrArn,
          functionName: autoRemediateOrchestratorLambdaFunction.functionArn,
          enabled: true,
        },
      );
    autoRemediateOrchestratorEventSourceMappingSqsAutoRemediateQueue.addDependency(
      autoRemediateOrchestratorRole,
    );
  }
}
