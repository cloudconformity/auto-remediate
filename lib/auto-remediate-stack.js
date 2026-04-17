"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoRemediateStack = void 0;
const cdk = __importStar(require("aws-cdk-lib"));
const iam = __importStar(require("aws-cdk-lib/aws-iam"));
const kms = __importStar(require("aws-cdk-lib/aws-kms"));
const lambda = __importStar(require("aws-cdk-lib/aws-lambda"));
const logs = __importStar(require("aws-cdk-lib/aws-logs"));
const sns = __importStar(require("aws-cdk-lib/aws-sns"));
const sqs = __importStar(require("aws-cdk-lib/aws-sqs"));
/**
 * The AWS CloudFormation template for this Serverless application
 */
class AutoRemediateStack extends cdk.Stack {
    /**
     * Current Lambda function version
     */
    autoRemediateOrchestratorLambdaFunctionQualifiedArn;
    /**
     * Current Lambda function version
     */
    autoRemediateS3Dash016LambdaFunctionQualifiedArn;
    /**
     * Current Lambda function version
     */
    autoRemediateIamDash001LambdaFunctionQualifiedArn;
    /**
     * Current Lambda function version
     */
    autoRemediateIamDash029LambdaFunctionQualifiedArn;
    /**
     * Current Lambda function version
     */
    autoRemediateCtDash001LambdaFunctionQualifiedArn;
    /**
     * Current Lambda function version
     */
    autoRemediateLambdaDash003LambdaFunctionQualifiedArn;
    /**
     * Current Lambda function version
     */
    autoRemediateS3Dash001LambdaFunctionQualifiedArn;
    /**
     * Current Lambda function version
     */
    autoRemediateS3Dash002LambdaFunctionQualifiedArn;
    /**
     * Current Lambda function version
     */
    autoRemediateIamDash038LambdaFunctionQualifiedArn;
    /**
     * Current Lambda function version
     */
    autoRemediateS3Dash014LambdaFunctionQualifiedArn;
    /**
     * Current Lambda function version
     */
    autoRemediateS3Dash003LambdaFunctionQualifiedArn;
    /**
     * Current Lambda function version
     */
    autoRemediateKmsDash002LambdaFunctionQualifiedArn;
    /**
     * Current Lambda function version
     */
    autoRemediateS3Dash004LambdaFunctionQualifiedArn;
    /**
     * Current Lambda function version
     */
    autoRemediateRdsDash023LambdaFunctionQualifiedArn;
    /**
     * Current Lambda function version
     */
    autoRemediateGdDash001LambdaFunctionQualifiedArn;
    /**
     * Current Lambda function version
     */
    autoRemediateS3Dash005LambdaFunctionQualifiedArn;
    /**
     * Current Lambda function version
     */
    autoRemediateS3Dash006LambdaFunctionQualifiedArn;
    /**
     * Current Lambda function version
     */
    autoRemediateS3Dash007LambdaFunctionQualifiedArn;
    /**
     * Current Lambda function version
     */
    autoRemediateKmsDash004LambdaFunctionQualifiedArn;
    /**
     * Current Lambda function version
     */
    autoRemediateOrganizationsDash002LambdaFunctionQualifiedArn;
    /**
     * Current Lambda function version
     */
    autoRemediateS3Dash008LambdaFunctionQualifiedArn;
    /**
     * Current Lambda function version
     */
    autoRemediateS3Dash009LambdaFunctionQualifiedArn;
    /**
     * Current Lambda function version
     */
    autoRemediateCtDash003LambdaFunctionQualifiedArn;
    /**
     * Current Lambda function version
     */
    autoRemediateRdsDash006LambdaFunctionQualifiedArn;
    /**
     * Current Lambda function version
     */
    autoRemediateS3Dash010LambdaFunctionQualifiedArn;
    /**
     * Current Lambda function version
     */
    autoRemediateS3Dash012LambdaFunctionQualifiedArn;
    /**
     * Current Lambda function version
     */
    autoRemediateSqsDash004LambdaFunctionQualifiedArn;
    /**
     * Current Lambda function version
     */
    autoRemediateRdsDash008LambdaFunctionQualifiedArn;
    /**
     * Current Lambda function version
     */
    autoRemediateConfigDash001LambdaFunctionQualifiedArn;
    /**
     * Current Lambda function version
     */
    autoRemediateCfmDash005LambdaFunctionQualifiedArn;
    /**
     * Current Lambda function version
     */
    autoRemediateVpcDash001LambdaFunctionQualifiedArn;
    /**
     * Current Lambda function version
     */
    autoRemediateEbsDash009LambdaFunctionQualifiedArn;
    /**
     * Current Lambda function version
     */
    autoRemediateRsDash001LambdaFunctionQualifiedArn;
    /**
     * Current Lambda function version
     */
    autoRemediateEc2Dash002LambdaFunctionQualifiedArn;
    /**
     * Current Lambda function version
     */
    autoRemediateRsDash019LambdaFunctionQualifiedArn;
    /**
     * Current Lambda function version
     */
    autoRemediateEc2Dash003LambdaFunctionQualifiedArn;
    /**
     * Current Lambda function version
     */
    autoRemediateEc2Dash005LambdaFunctionQualifiedArn;
    /**
     * Current Lambda function version
     */
    autoRemediateEc2Dash019LambdaFunctionQualifiedArn;
    /**
     * Current Lambda function version
     */
    autoRemediateEc2Dash004LambdaFunctionQualifiedArn;
    /**
     * Current Lambda function version
     */
    autoRemediateEc2Dash006LambdaFunctionQualifiedArn;
    /**
     * Current Lambda function version
     */
    autoRemediateEc2Dash008LambdaFunctionQualifiedArn;
    /**
     * Current Lambda function version
     */
    autoRemediateEc2Dash043LambdaFunctionQualifiedArn;
    /**
     * Current Lambda function version
     */
    autoRemediateRsDash023LambdaFunctionQualifiedArn;
    /**
     * Current Lambda function version
     */
    autoRemediateEc2Dash045LambdaFunctionQualifiedArn;
    /**
     * Current Lambda function version
     */
    autoRemediateEc2Dash038LambdaFunctionQualifiedArn;
    /**
     * Current Lambda function version
     */
    autoRemediateEc2Dash040LambdaFunctionQualifiedArn;
    /**
     * Current Lambda function version
     */
    autoRemediateEc2Dash039LambdaFunctionQualifiedArn;
    /**
     * Current Lambda function version
     */
    trustedAdvisorDash003LambdaFunctionQualifiedArn;
    /**
     * Current Lambda function version
     */
    autoRemediateKinesisDash001LambdaFunctionQualifiedArn;
    constructor(scope, id, props = {}) {
        super(scope, id, props);
        // Resources
        const autoRemediateCfm005Role = new iam.CfnRole(this, "AutoRemediateCFM005Role", {
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
        });
        const autoRemediateCfmDash005LogGroup = new logs.CfnLogGroup(this, "AutoRemediateCFMDash005LogGroup", {
            logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateCFM-005",
            retentionInDays: 30,
        });
        const autoRemediateCt001Role = new iam.CfnRole(this, "AutoRemediateCT001Role", {
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
        });
        const autoRemediateCt003Role = new iam.CfnRole(this, "AutoRemediateCT003Role", {
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
        });
        const autoRemediateCtDash001LogGroup = new logs.CfnLogGroup(this, "AutoRemediateCTDash001LogGroup", {
            logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateCT-001",
            retentionInDays: 30,
        });
        const autoRemediateCtDash003LogGroup = new logs.CfnLogGroup(this, "AutoRemediateCTDash003LogGroup", {
            logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateCT-003",
            retentionInDays: 30,
        });
        const autoRemediateConfig001Role = new iam.CfnRole(this, "AutoRemediateConfig001Role", {
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
        });
        const autoRemediateConfigDash001LogGroup = new logs.CfnLogGroup(this, "AutoRemediateConfigDash001LogGroup", {
            logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateConfig-001",
            retentionInDays: 30,
        });
        const autoRemediateEbs009Role = new iam.CfnRole(this, "AutoRemediateEBS009Role", {
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
        });
        const autoRemediateEbsDash009LogGroup = new logs.CfnLogGroup(this, "AutoRemediateEBSDash009LogGroup", {
            logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateEBS-009",
            retentionInDays: 30,
        });
        const autoRemediateEc2002Role = new iam.CfnRole(this, "AutoRemediateEC2002Role", {
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
        });
        const autoRemediateEc2003Role = new iam.CfnRole(this, "AutoRemediateEC2003Role", {
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
        });
        const autoRemediateEc2004Role = new iam.CfnRole(this, "AutoRemediateEC2004Role", {
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
        });
        const autoRemediateEc2005Role = new iam.CfnRole(this, "AutoRemediateEC2005Role", {
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
        });
        const autoRemediateEc2006Role = new iam.CfnRole(this, "AutoRemediateEC2006Role", {
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
        });
        const autoRemediateEc2008Role = new iam.CfnRole(this, "AutoRemediateEC2008Role", {
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
        });
        const autoRemediateEc2019Role = new iam.CfnRole(this, "AutoRemediateEC2019Role", {
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
        });
        const autoRemediateEc2038Role = new iam.CfnRole(this, "AutoRemediateEC2038Role", {
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
        });
        const autoRemediateEc2039Role = new iam.CfnRole(this, "AutoRemediateEC2039Role", {
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
        });
        const autoRemediateEc2040Role = new iam.CfnRole(this, "AutoRemediateEC2040Role", {
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
        });
        const autoRemediateEc2042Role = new iam.CfnRole(this, "AutoRemediateEC2042Role", {
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
        });
        const autoRemediateEc2043Role = new iam.CfnRole(this, "AutoRemediateEC2043Role", {
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
        });
        const autoRemediateEc2045Role = new iam.CfnRole(this, "AutoRemediateEC2045Role", {
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
        });
        const autoRemediateEc2Dash002LogGroup = new logs.CfnLogGroup(this, "AutoRemediateEC2Dash002LogGroup", {
            logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateEC2-002",
            retentionInDays: 30,
        });
        const autoRemediateEc2Dash003LogGroup = new logs.CfnLogGroup(this, "AutoRemediateEC2Dash003LogGroup", {
            logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateEC2-003",
            retentionInDays: 30,
        });
        const autoRemediateEc2Dash004LogGroup = new logs.CfnLogGroup(this, "AutoRemediateEC2Dash004LogGroup", {
            logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateEC2-004",
            retentionInDays: 30,
        });
        const autoRemediateEc2Dash005LogGroup = new logs.CfnLogGroup(this, "AutoRemediateEC2Dash005LogGroup", {
            logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateEC2-005",
            retentionInDays: 30,
        });
        const autoRemediateEc2Dash006LogGroup = new logs.CfnLogGroup(this, "AutoRemediateEC2Dash006LogGroup", {
            logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateEC2-006",
            retentionInDays: 30,
        });
        const autoRemediateEc2Dash008LogGroup = new logs.CfnLogGroup(this, "AutoRemediateEC2Dash008LogGroup", {
            logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateEC2-008",
            retentionInDays: 30,
        });
        const autoRemediateEc2Dash019LogGroup = new logs.CfnLogGroup(this, "AutoRemediateEC2Dash019LogGroup", {
            logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateEC2-019",
            retentionInDays: 30,
        });
        const autoRemediateEc2Dash038LogGroup = new logs.CfnLogGroup(this, "AutoRemediateEC2Dash038LogGroup", {
            logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateEC2-038",
            retentionInDays: 30,
        });
        const autoRemediateEc2Dash039LogGroup = new logs.CfnLogGroup(this, "AutoRemediateEC2Dash039LogGroup", {
            logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateEC2-039",
            retentionInDays: 30,
        });
        const autoRemediateEc2Dash040LogGroup = new logs.CfnLogGroup(this, "AutoRemediateEC2Dash040LogGroup", {
            logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateEC2-040",
            retentionInDays: 30,
        });
        const autoRemediateEc2Dash043LogGroup = new logs.CfnLogGroup(this, "AutoRemediateEC2Dash043LogGroup", {
            logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateEC2-043",
            retentionInDays: 30,
        });
        const autoRemediateEc2Dash045LogGroup = new logs.CfnLogGroup(this, "AutoRemediateEC2Dash045LogGroup", {
            logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateEC2-045",
            retentionInDays: 30,
        });
        const autoRemediateGd001Role = new iam.CfnRole(this, "AutoRemediateGD001Role", {
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
        });
        const autoRemediateGdDash001LogGroup = new logs.CfnLogGroup(this, "AutoRemediateGDDash001LogGroup", {
            logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateGD-001",
            retentionInDays: 30,
        });
        const autoRemediateIam001Role = new iam.CfnRole(this, "AutoRemediateIAM001Role", {
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
        });
        const autoRemediateIam029Role = new iam.CfnRole(this, "AutoRemediateIAM029Role", {
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
        });
        const autoRemediateIam038Role = new iam.CfnRole(this, "AutoRemediateIAM038Role", {
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
        });
        const autoRemediateIamDash001LogGroup = new logs.CfnLogGroup(this, "AutoRemediateIAMDash001LogGroup", {
            logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateIAM-001",
            retentionInDays: 30,
        });
        const autoRemediateIamDash029LogGroup = new logs.CfnLogGroup(this, "AutoRemediateIAMDash029LogGroup", {
            logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateIAM-029",
            retentionInDays: 30,
        });
        const autoRemediateIamDash038LogGroup = new logs.CfnLogGroup(this, "AutoRemediateIAMDash038LogGroup", {
            logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateIAM-038",
            retentionInDays: 30,
        });
        const autoRemediateKms002Role = new iam.CfnRole(this, "AutoRemediateKMS002Role", {
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
        });
        const autoRemediateKms004Role = new iam.CfnRole(this, "AutoRemediateKMS004Role", {
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
        });
        const autoRemediateKmsDash002LogGroup = new logs.CfnLogGroup(this, "AutoRemediateKMSDash002LogGroup", {
            logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateKMS-002",
            retentionInDays: 30,
        });
        const autoRemediateKmsDash004LogGroup = new logs.CfnLogGroup(this, "AutoRemediateKMSDash004LogGroup", {
            logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateKMS-004",
            retentionInDays: 30,
        });
        const autoRemediateKinesis001Role = new iam.CfnRole(this, "AutoRemediateKinesis001Role", {
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
        });
        const autoRemediateKinesisDash001LogGroup = new logs.CfnLogGroup(this, "AutoRemediateKinesisDash001LogGroup", {
            logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateKinesis-001",
            retentionInDays: 30,
        });
        const autoRemediateLambda003Role = new iam.CfnRole(this, "AutoRemediateLambda003Role", {
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
        });
        const autoRemediateLambdaDash003LogGroup = new logs.CfnLogGroup(this, "AutoRemediateLambdaDash003LogGroup", {
            logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateLambda-003",
            retentionInDays: 30,
        });
        const autoRemediateOrchestratorLogGroup = new logs.CfnLogGroup(this, "AutoRemediateOrchestratorLogGroup", {
            logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateOrchestrator",
            retentionInDays: 30,
        });
        const autoRemediateOrganizations002Role = new iam.CfnRole(this, "AutoRemediateOrganizations002Role", {
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
        });
        const autoRemediateOrganizationsDash002LogGroup = new logs.CfnLogGroup(this, "AutoRemediateOrganizationsDash002LogGroup", {
            logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateOrganizations-002",
            retentionInDays: 30,
        });
        const autoRemediateRds006Role = new iam.CfnRole(this, "AutoRemediateRDS006Role", {
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
        });
        const autoRemediateRds008Role = new iam.CfnRole(this, "AutoRemediateRDS008Role", {
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
        });
        const autoRemediateRds023Role = new iam.CfnRole(this, "AutoRemediateRDS023Role", {
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
        });
        const autoRemediateRdsDash006LogGroup = new logs.CfnLogGroup(this, "AutoRemediateRDSDash006LogGroup", {
            logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateRDS-006",
            retentionInDays: 30,
        });
        const autoRemediateRdsDash008LogGroup = new logs.CfnLogGroup(this, "AutoRemediateRDSDash008LogGroup", {
            logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateRDS-008",
            retentionInDays: 30,
        });
        const autoRemediateRdsDash023LogGroup = new logs.CfnLogGroup(this, "AutoRemediateRDSDash023LogGroup", {
            logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateRDS-023",
            retentionInDays: 30,
        });
        const autoRemediateRs001Role = new iam.CfnRole(this, "AutoRemediateRS001Role", {
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
        });
        const autoRemediateRs019Role = new iam.CfnRole(this, "AutoRemediateRS019Role", {
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
        });
        const autoRemediateRs023Role = new iam.CfnRole(this, "AutoRemediateRS023Role", {
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
        });
        const autoRemediateRsDash001LogGroup = new logs.CfnLogGroup(this, "AutoRemediateRSDash001LogGroup", {
            logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateRS-001",
            retentionInDays: 30,
        });
        const autoRemediateRsDash019LogGroup = new logs.CfnLogGroup(this, "AutoRemediateRSDash019LogGroup", {
            logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateRS-019",
            retentionInDays: 30,
        });
        const autoRemediateRsDash023LogGroup = new logs.CfnLogGroup(this, "AutoRemediateRSDash023LogGroup", {
            logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateRS-023",
            retentionInDays: 30,
        });
        const autoRemediateS3001Role = new iam.CfnRole(this, "AutoRemediateS3001Role", {
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
        });
        const autoRemediateS3002Role = new iam.CfnRole(this, "AutoRemediateS3002Role", {
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
        });
        const autoRemediateS3003Role = new iam.CfnRole(this, "AutoRemediateS3003Role", {
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
        });
        const autoRemediateS3004Role = new iam.CfnRole(this, "AutoRemediateS3004Role", {
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
        });
        const autoRemediateS3005Role = new iam.CfnRole(this, "AutoRemediateS3005Role", {
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
        });
        const autoRemediateS3006Role = new iam.CfnRole(this, "AutoRemediateS3006Role", {
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
        });
        const autoRemediateS3007Role = new iam.CfnRole(this, "AutoRemediateS3007Role", {
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
        });
        const autoRemediateS3008Role = new iam.CfnRole(this, "AutoRemediateS3008Role", {
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
        });
        const autoRemediateS3009Role = new iam.CfnRole(this, "AutoRemediateS3009Role", {
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
        });
        const autoRemediateS3010Role = new iam.CfnRole(this, "AutoRemediateS3010Role", {
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
        });
        const autoRemediateS3012Role = new iam.CfnRole(this, "AutoRemediateS3012Role", {
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
        });
        const autoRemediateS3014Role = new iam.CfnRole(this, "AutoRemediateS3014Role", {
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
        });
        const autoRemediateS3016Role = new iam.CfnRole(this, "AutoRemediateS3016Role", {
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
        });
        const autoRemediateS3Dash001LogGroup = new logs.CfnLogGroup(this, "AutoRemediateS3Dash001LogGroup", {
            logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateS3-001",
            retentionInDays: 30,
        });
        const autoRemediateS3Dash002LogGroup = new logs.CfnLogGroup(this, "AutoRemediateS3Dash002LogGroup", {
            logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateS3-002",
            retentionInDays: 30,
        });
        const autoRemediateS3Dash003LogGroup = new logs.CfnLogGroup(this, "AutoRemediateS3Dash003LogGroup", {
            logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateS3-003",
            retentionInDays: 30,
        });
        const autoRemediateS3Dash004LogGroup = new logs.CfnLogGroup(this, "AutoRemediateS3Dash004LogGroup", {
            logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateS3-004",
            retentionInDays: 30,
        });
        const autoRemediateS3Dash005LogGroup = new logs.CfnLogGroup(this, "AutoRemediateS3Dash005LogGroup", {
            logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateS3-005",
            retentionInDays: 30,
        });
        const autoRemediateS3Dash006LogGroup = new logs.CfnLogGroup(this, "AutoRemediateS3Dash006LogGroup", {
            logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateS3-006",
            retentionInDays: 30,
        });
        const autoRemediateS3Dash007LogGroup = new logs.CfnLogGroup(this, "AutoRemediateS3Dash007LogGroup", {
            logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateS3-007",
            retentionInDays: 30,
        });
        const autoRemediateS3Dash008LogGroup = new logs.CfnLogGroup(this, "AutoRemediateS3Dash008LogGroup", {
            logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateS3-008",
            retentionInDays: 30,
        });
        const autoRemediateS3Dash009LogGroup = new logs.CfnLogGroup(this, "AutoRemediateS3Dash009LogGroup", {
            logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateS3-009",
            retentionInDays: 30,
        });
        const autoRemediateS3Dash010LogGroup = new logs.CfnLogGroup(this, "AutoRemediateS3Dash010LogGroup", {
            logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateS3-010",
            retentionInDays: 30,
        });
        const autoRemediateS3Dash012LogGroup = new logs.CfnLogGroup(this, "AutoRemediateS3Dash012LogGroup", {
            logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateS3-012",
            retentionInDays: 30,
        });
        const autoRemediateS3Dash014LogGroup = new logs.CfnLogGroup(this, "AutoRemediateS3Dash014LogGroup", {
            logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateS3-014",
            retentionInDays: 30,
        });
        const autoRemediateS3Dash016LogGroup = new logs.CfnLogGroup(this, "AutoRemediateS3Dash016LogGroup", {
            logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateS3-016",
            retentionInDays: 30,
        });
        const autoRemediateSqs004Role = new iam.CfnRole(this, "AutoRemediateSQS004Role", {
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
        });
        const autoRemediateSqsDash004LogGroup = new logs.CfnLogGroup(this, "AutoRemediateSQSDash004LogGroup", {
            logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateSQS-004",
            retentionInDays: 30,
        });
        const autoRemediateTrustedAdvisor003Role = new iam.CfnRole(this, "AutoRemediateTrustedAdvisor003Role", {
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
        });
        const autoRemediateVpc001Role = new iam.CfnRole(this, "AutoRemediateVPC001Role", {
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
                                    ["arn:aws:iam:", this.account, "role/VPCFlowLogRole"].join(":"),
                                ],
                            },
                        ],
                    },
                },
            ],
        });
        const autoRemediateVpcDash001LogGroup = new logs.CfnLogGroup(this, "AutoRemediateVPCDash001LogGroup", {
            logGroupName: "/aws/lambda/auto-remediate-v1-AutoRemediateVPC-001",
            retentionInDays: 30,
        });
        const kmsKeySqsQueueFromSns = new kms.CfnKey(this, "KmsKeySqsQueueFromSns", {
            description: "Encrypts messages publishes to an SQS queue from an SNS topic",
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
        });
        const snsTopicAutoRemediate = new sns.CfnTopic(this, "SNSTopicAutoRemediate", {
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
        });
        const trustedAdvisorDash003LogGroup = new logs.CfnLogGroup(this, "TrustedAdvisorDash003LogGroup", {
            logGroupName: "/aws/lambda/auto-remediate-v1-TrustedAdvisor-003",
            retentionInDays: 30,
        });
        const functionsPath = "./functions";
        const autoRemediateCfmDash005LambdaFunction = new lambda.Function(this, "AutoRemediateCFMDash005LambdaFunction", {
            code: lambda.Code.fromAsset(functionsPath),
            handler: "AutoRemediateCFM-005.handler",
            runtime: lambda.Runtime.NODEJS_24_X,
            functionName: "auto-remediate-v1-AutoRemediateCFM-005",
            memorySize: 128,
            timeout: cdk.Duration.seconds(120),
            role: iam.Role.fromRoleArn(this, "AutoRemediateCFMDash005RoleRef", autoRemediateCfm005Role.attrArn),
            tracing: lambda.Tracing.ACTIVE,
            logGroup: logs.LogGroup.fromLogGroupName(this, "AutoRemediateCFMDash005LogGroupRef", autoRemediateCfmDash005LogGroup.ref),
        });
        cdk.Tags.of(autoRemediateCfmDash005LambdaFunction).add("Name", "Auto Remediate CFM-005");
        cdk.Tags.of(autoRemediateCfmDash005LambdaFunction).add("Owner", "CloudConformity");
        cdk.Tags.of(autoRemediateCfmDash005LambdaFunction).add("Role", "Auto Remediate");
        cdk.Tags.of(autoRemediateCfmDash005LambdaFunction).add("Environment", "Ops");
        autoRemediateCfmDash005LambdaFunction.node.addDependency(autoRemediateCfmDash005LogGroup);
        autoRemediateCfmDash005LambdaFunction.node.addDependency(autoRemediateCfm005Role);
        const autoRemediateCtDash001LambdaFunction = new lambda.Function(this, "AutoRemediateCTDash001LambdaFunction", {
            code: lambda.Code.fromAsset(functionsPath),
            handler: "AutoRemediateCT-001.handler",
            runtime: lambda.Runtime.NODEJS_24_X,
            functionName: "auto-remediate-v1-AutoRemediateCT-001",
            memorySize: 128,
            timeout: cdk.Duration.seconds(10),
            role: iam.Role.fromRoleArn(this, "AutoRemediateCTDash001LambdaFunctionRoleRef", autoRemediateCt001Role.attrArn),
            tracing: lambda.Tracing.ACTIVE,
            logGroup: logs.LogGroup.fromLogGroupName(this, "AutoRemediateCTDash001LambdaFunctionLogGroupRef", autoRemediateCtDash001LogGroup.ref),
        });
        cdk.Tags.of(autoRemediateCtDash001LambdaFunction).add("Name", "Auto Remediate CT-001");
        cdk.Tags.of(autoRemediateCtDash001LambdaFunction).add("Owner", "CloudConformity");
        cdk.Tags.of(autoRemediateCtDash001LambdaFunction).add("Role", "Auto Remediate");
        cdk.Tags.of(autoRemediateCtDash001LambdaFunction).add("Environment", "Ops");
        autoRemediateCtDash001LambdaFunction.node.addDependency(autoRemediateCtDash001LogGroup);
        autoRemediateCtDash001LambdaFunction.node.addDependency(autoRemediateCt001Role);
        const autoRemediateCtDash003LambdaFunction = new lambda.Function(this, "AutoRemediateCTDash003LambdaFunction", {
            code: lambda.Code.fromAsset(functionsPath),
            handler: "AutoRemediateCT-003.handler",
            runtime: lambda.Runtime.NODEJS_24_X,
            functionName: "auto-remediate-v1-AutoRemediateCT-003",
            memorySize: 128,
            timeout: cdk.Duration.seconds(120),
            role: iam.Role.fromRoleArn(this, "AutoRemediateCTDash003LambdaFunctionRoleRef", autoRemediateCt003Role.attrArn),
            tracing: lambda.Tracing.ACTIVE,
            logGroup: logs.LogGroup.fromLogGroupName(this, "AutoRemediateCTDash003LambdaFunctionLogGroupRef", autoRemediateCtDash003LogGroup.ref),
        });
        cdk.Tags.of(autoRemediateCtDash003LambdaFunction).add("Name", "Auto Remediate CT-003");
        cdk.Tags.of(autoRemediateCtDash003LambdaFunction).add("Owner", "CloudConformity");
        cdk.Tags.of(autoRemediateCtDash003LambdaFunction).add("Role", "Auto Remediate");
        cdk.Tags.of(autoRemediateCtDash003LambdaFunction).add("Environment", "Ops");
        autoRemediateCtDash003LambdaFunction.node.addDependency(autoRemediateCtDash003LogGroup);
        autoRemediateCtDash003LambdaFunction.node.addDependency(autoRemediateCt003Role);
        const autoRemediateConfigDash001LambdaFunction = new lambda.Function(this, "AutoRemediateConfigDash001LambdaFunction", {
            code: lambda.Code.fromAsset(functionsPath),
            handler: "AutoRemediateConfig-001.handler",
            runtime: lambda.Runtime.NODEJS_24_X,
            functionName: "auto-remediate-v1-AutoRemediateConfig-001",
            memorySize: 128,
            timeout: cdk.Duration.seconds(120),
            role: iam.Role.fromRoleArn(this, "AutoRemediateConfigDash001LambdaFunctionRoleRef", autoRemediateConfig001Role.attrArn),
            tracing: lambda.Tracing.ACTIVE,
            logGroup: logs.LogGroup.fromLogGroupName(this, "AutoRemediateConfigDash001LambdaFunctionLogGroupRef", autoRemediateConfigDash001LogGroup.ref),
        });
        cdk.Tags.of(autoRemediateConfigDash001LambdaFunction).add("Name", "Auto Remediate Config-001");
        cdk.Tags.of(autoRemediateConfigDash001LambdaFunction).add("Owner", "CloudConformity");
        cdk.Tags.of(autoRemediateConfigDash001LambdaFunction).add("Role", "Auto Remediate");
        cdk.Tags.of(autoRemediateConfigDash001LambdaFunction).add("Environment", "Ops");
        autoRemediateConfigDash001LambdaFunction.node.addDependency(autoRemediateConfigDash001LogGroup);
        autoRemediateConfigDash001LambdaFunction.node.addDependency(autoRemediateConfig001Role);
        const autoRemediateEbsDash009LambdaFunction = new lambda.Function(this, "AutoRemediateEBSDash009LambdaFunction", {
            code: lambda.Code.fromAsset(functionsPath),
            handler: "AutoRemediateEBS-009.handler",
            runtime: lambda.Runtime.NODEJS_24_X,
            functionName: "auto-remediate-v1-AutoRemediateEBS-009",
            memorySize: 128,
            timeout: cdk.Duration.seconds(120),
            role: iam.Role.fromRoleArn(this, "AutoRemediateEBSDash009LambdaFunctionRoleRef", autoRemediateEbs009Role.attrArn),
            tracing: lambda.Tracing.ACTIVE,
            logGroup: logs.LogGroup.fromLogGroupName(this, "AutoRemediateEBSDash009LambdaFunctionLogGroupRef", autoRemediateEbsDash009LogGroup.ref),
        });
        cdk.Tags.of(autoRemediateEbsDash009LambdaFunction).add("Name", "Auto Remediate EBS-009");
        cdk.Tags.of(autoRemediateEbsDash009LambdaFunction).add("Owner", "CloudConformity");
        cdk.Tags.of(autoRemediateEbsDash009LambdaFunction).add("Role", "Auto Remediate");
        cdk.Tags.of(autoRemediateEbsDash009LambdaFunction).add("Environment", "Ops");
        autoRemediateEbsDash009LambdaFunction.node.addDependency(autoRemediateEbsDash009LogGroup);
        autoRemediateEbsDash009LambdaFunction.node.addDependency(autoRemediateEbs009Role);
        const autoRemediateEc2Dash002LambdaFunction = new lambda.Function(this, "AutoRemediateEC2Dash002LambdaFunction", {
            code: lambda.Code.fromAsset(functionsPath),
            handler: "AutoRemediateEC2-002.handler",
            runtime: lambda.Runtime.NODEJS_24_X,
            functionName: "auto-remediate-v1-AutoRemediateEC2-002",
            memorySize: 128,
            timeout: cdk.Duration.seconds(120),
            role: iam.Role.fromRoleArn(this, "AutoRemediateEC2Dash002LambdaFunctionRoleRef", autoRemediateEc2002Role.attrArn),
            tracing: lambda.Tracing.ACTIVE,
            logGroup: logs.LogGroup.fromLogGroupName(this, "AutoRemediateEC2Dash002LambdaFunctionLogGroupRef", autoRemediateEc2Dash002LogGroup.ref),
        });
        cdk.Tags.of(autoRemediateEc2Dash002LambdaFunction).add("Name", "Auto Remediate EC2-002");
        cdk.Tags.of(autoRemediateEc2Dash002LambdaFunction).add("Owner", "CloudConformity");
        cdk.Tags.of(autoRemediateEc2Dash002LambdaFunction).add("Role", "Auto Remediate");
        cdk.Tags.of(autoRemediateEc2Dash002LambdaFunction).add("Environment", "Ops");
        autoRemediateEc2Dash002LambdaFunction.node.addDependency(autoRemediateEc2Dash002LogGroup);
        autoRemediateEc2Dash002LambdaFunction.node.addDependency(autoRemediateEc2002Role);
        const autoRemediateEc2Dash003LambdaFunction = new lambda.Function(this, "AutoRemediateEC2Dash003LambdaFunction", {
            code: lambda.Code.fromAsset(functionsPath),
            handler: "AutoRemediateEC2-003.handler",
            runtime: lambda.Runtime.NODEJS_24_X,
            functionName: "auto-remediate-v1-AutoRemediateEC2-003",
            memorySize: 128,
            timeout: cdk.Duration.seconds(120),
            role: iam.Role.fromRoleArn(this, "AutoRemediateEC2Dash003LambdaFunctionRoleRef", autoRemediateEc2003Role.attrArn),
            tracing: lambda.Tracing.ACTIVE,
            logGroup: logs.LogGroup.fromLogGroupName(this, "AutoRemediateEC2Dash003LambdaFunctionLogGroupRef", autoRemediateEc2Dash003LogGroup.ref),
        });
        cdk.Tags.of(autoRemediateEc2Dash003LambdaFunction).add("Name", "Auto Remediate EC2-003");
        cdk.Tags.of(autoRemediateEc2Dash003LambdaFunction).add("Owner", "CloudConformity");
        cdk.Tags.of(autoRemediateEc2Dash003LambdaFunction).add("Role", "Auto Remediate");
        cdk.Tags.of(autoRemediateEc2Dash003LambdaFunction).add("Environment", "Ops");
        autoRemediateEc2Dash003LambdaFunction.node.addDependency(autoRemediateEc2Dash003LogGroup);
        autoRemediateEc2Dash003LambdaFunction.node.addDependency(autoRemediateEc2003Role);
        const autoRemediateEc2Dash004LambdaFunction = new lambda.Function(this, "AutoRemediateEC2Dash004LambdaFunction", {
            code: lambda.Code.fromAsset(functionsPath),
            handler: "AutoRemediateEC2-004.handler",
            runtime: lambda.Runtime.NODEJS_24_X,
            functionName: "auto-remediate-v1-AutoRemediateEC2-004",
            memorySize: 128,
            timeout: cdk.Duration.seconds(120),
            role: iam.Role.fromRoleArn(this, "AutoRemediateEC2Dash004LambdaFunctionRoleRef", autoRemediateEc2004Role.attrArn),
            tracing: lambda.Tracing.ACTIVE,
            logGroup: logs.LogGroup.fromLogGroupName(this, "AutoRemediateEC2Dash004LambdaFunctionLogGroupRef", autoRemediateEc2Dash004LogGroup.ref),
        });
        cdk.Tags.of(autoRemediateEc2Dash004LambdaFunction).add("Name", "Auto Remediate EC2-004");
        cdk.Tags.of(autoRemediateEc2Dash004LambdaFunction).add("Owner", "CloudConformity");
        cdk.Tags.of(autoRemediateEc2Dash004LambdaFunction).add("Role", "Auto Remediate");
        cdk.Tags.of(autoRemediateEc2Dash004LambdaFunction).add("Environment", "Ops");
        autoRemediateEc2Dash004LambdaFunction.node.addDependency(autoRemediateEc2Dash004LogGroup);
        autoRemediateEc2Dash004LambdaFunction.node.addDependency(autoRemediateEc2004Role);
        const autoRemediateEc2Dash005LambdaFunction = new lambda.Function(this, "AutoRemediateEC2Dash005LambdaFunction", {
            code: lambda.Code.fromAsset(functionsPath),
            handler: "AutoRemediateEC2-005.handler",
            runtime: lambda.Runtime.NODEJS_24_X,
            functionName: "auto-remediate-v1-AutoRemediateEC2-005",
            memorySize: 128,
            timeout: cdk.Duration.seconds(120),
            role: iam.Role.fromRoleArn(this, "AutoRemediateEC2Dash005LambdaFunctionRoleRef", autoRemediateEc2005Role.attrArn),
            tracing: lambda.Tracing.ACTIVE,
            logGroup: logs.LogGroup.fromLogGroupName(this, "AutoRemediateEC2Dash005LambdaFunctionLogGroupRef", autoRemediateEc2Dash005LogGroup.ref),
        });
        cdk.Tags.of(autoRemediateEc2Dash005LambdaFunction).add("Name", "Auto Remediate EC2-005");
        cdk.Tags.of(autoRemediateEc2Dash005LambdaFunction).add("Owner", "CloudConformity");
        cdk.Tags.of(autoRemediateEc2Dash005LambdaFunction).add("Role", "Auto Remediate");
        cdk.Tags.of(autoRemediateEc2Dash005LambdaFunction).add("Environment", "Ops");
        autoRemediateEc2Dash005LambdaFunction.node.addDependency(autoRemediateEc2Dash005LogGroup);
        autoRemediateEc2Dash005LambdaFunction.node.addDependency(autoRemediateEc2005Role);
        const autoRemediateEc2Dash006LambdaFunction = new lambda.Function(this, "AutoRemediateEC2Dash006LambdaFunction", {
            code: lambda.Code.fromAsset(functionsPath),
            handler: "AutoRemediateEC2-006.handler",
            runtime: lambda.Runtime.NODEJS_24_X,
            functionName: "auto-remediate-v1-AutoRemediateEC2-006",
            memorySize: 128,
            timeout: cdk.Duration.seconds(120),
            role: iam.Role.fromRoleArn(this, "AutoRemediateEC2Dash006LambdaFunctionRoleRef", autoRemediateEc2006Role.attrArn),
            tracing: lambda.Tracing.ACTIVE,
            logGroup: logs.LogGroup.fromLogGroupName(this, "AutoRemediateEC2Dash006LambdaFunctionLogGroupRef", autoRemediateEc2Dash006LogGroup.ref),
        });
        cdk.Tags.of(autoRemediateEc2Dash006LambdaFunction).add("Name", "Auto Remediate EC2-006");
        cdk.Tags.of(autoRemediateEc2Dash006LambdaFunction).add("Owner", "CloudConformity");
        cdk.Tags.of(autoRemediateEc2Dash006LambdaFunction).add("Role", "Auto Remediate");
        cdk.Tags.of(autoRemediateEc2Dash006LambdaFunction).add("Environment", "Ops");
        autoRemediateEc2Dash006LambdaFunction.node.addDependency(autoRemediateEc2Dash006LogGroup);
        autoRemediateEc2Dash006LambdaFunction.node.addDependency(autoRemediateEc2006Role);
        const autoRemediateEc2Dash008LambdaFunction = new lambda.Function(this, "AutoRemediateEC2Dash008LambdaFunction", {
            code: lambda.Code.fromAsset(functionsPath),
            handler: "AutoRemediateEC2-008.handler",
            runtime: lambda.Runtime.NODEJS_24_X,
            functionName: "auto-remediate-v1-AutoRemediateEC2-008",
            memorySize: 128,
            timeout: cdk.Duration.seconds(120),
            role: iam.Role.fromRoleArn(this, "AutoRemediateEC2Dash008LambdaFunctionRoleRef", autoRemediateEc2008Role.attrArn),
            tracing: lambda.Tracing.ACTIVE,
            logGroup: logs.LogGroup.fromLogGroupName(this, "AutoRemediateEC2Dash008LambdaFunctionLogGroupRef", autoRemediateEc2Dash008LogGroup.ref),
        });
        cdk.Tags.of(autoRemediateEc2Dash008LambdaFunction).add("Name", "Auto Remediate EC2-008");
        cdk.Tags.of(autoRemediateEc2Dash008LambdaFunction).add("Owner", "CloudConformity");
        cdk.Tags.of(autoRemediateEc2Dash008LambdaFunction).add("Role", "Auto Remediate");
        cdk.Tags.of(autoRemediateEc2Dash008LambdaFunction).add("Environment", "Ops");
        autoRemediateEc2Dash008LambdaFunction.node.addDependency(autoRemediateEc2Dash008LogGroup);
        autoRemediateEc2Dash008LambdaFunction.node.addDependency(autoRemediateEc2008Role);
        const autoRemediateEc2Dash019LambdaFunction = new lambda.Function(this, "AutoRemediateEC2Dash019LambdaFunction", {
            code: lambda.Code.fromAsset(functionsPath),
            handler: "AutoRemediateEC2-019.handler",
            runtime: lambda.Runtime.NODEJS_24_X,
            functionName: "auto-remediate-v1-AutoRemediateEC2-019",
            memorySize: 128,
            timeout: cdk.Duration.seconds(120),
            role: iam.Role.fromRoleArn(this, "AutoRemediateEC2Dash019LambdaFunctionRoleRef", autoRemediateEc2019Role.attrArn),
            tracing: lambda.Tracing.ACTIVE,
            logGroup: logs.LogGroup.fromLogGroupName(this, "AutoRemediateEC2Dash019LambdaFunctionLogGroupRef", autoRemediateEc2Dash019LogGroup.ref),
        });
        cdk.Tags.of(autoRemediateEc2Dash019LambdaFunction).add("Name", "Auto Remediate EC2-019");
        cdk.Tags.of(autoRemediateEc2Dash019LambdaFunction).add("Owner", "CloudConformity");
        cdk.Tags.of(autoRemediateEc2Dash019LambdaFunction).add("Role", "Auto Remediate");
        cdk.Tags.of(autoRemediateEc2Dash019LambdaFunction).add("Environment", "Ops");
        autoRemediateEc2Dash019LambdaFunction.node.addDependency(autoRemediateEc2Dash019LogGroup);
        autoRemediateEc2Dash019LambdaFunction.node.addDependency(autoRemediateEc2019Role);
        const autoRemediateEc2Dash038LambdaFunction = new lambda.Function(this, "AutoRemediateEC2Dash038LambdaFunction", {
            code: lambda.Code.fromAsset(functionsPath),
            handler: "AutoRemediateEC2-038.handler",
            runtime: lambda.Runtime.NODEJS_24_X,
            functionName: "auto-remediate-v1-AutoRemediateEC2-038",
            memorySize: 128,
            timeout: cdk.Duration.seconds(120),
            role: iam.Role.fromRoleArn(this, "AutoRemediateEC2Dash038LambdaFunctionRoleRef", autoRemediateEc2038Role.attrArn),
            tracing: lambda.Tracing.ACTIVE,
            logGroup: logs.LogGroup.fromLogGroupName(this, "AutoRemediateEC2Dash038LambdaFunctionLogGroupRef", autoRemediateEc2Dash038LogGroup.ref),
        });
        cdk.Tags.of(autoRemediateEc2Dash038LambdaFunction).add("Name", "Auto Remediate EC2-038");
        cdk.Tags.of(autoRemediateEc2Dash038LambdaFunction).add("Owner", "CloudConformity");
        cdk.Tags.of(autoRemediateEc2Dash038LambdaFunction).add("Role", "Auto Remediate");
        cdk.Tags.of(autoRemediateEc2Dash038LambdaFunction).add("Environment", "Ops");
        autoRemediateEc2Dash038LambdaFunction.node.addDependency(autoRemediateEc2Dash038LogGroup);
        autoRemediateEc2Dash038LambdaFunction.node.addDependency(autoRemediateEc2038Role);
        const autoRemediateEc2Dash039LambdaFunction = new lambda.Function(this, "AutoRemediateEC2Dash039LambdaFunction", {
            code: lambda.Code.fromAsset(functionsPath),
            handler: "AutoRemediateEC2-039.handler",
            runtime: lambda.Runtime.NODEJS_24_X,
            functionName: "auto-remediate-v1-AutoRemediateEC2-039",
            memorySize: 128,
            timeout: cdk.Duration.seconds(120),
            role: iam.Role.fromRoleArn(this, "AutoRemediateEC2Dash039LambdaFunctionRoleRef", autoRemediateEc2039Role.attrArn),
            tracing: lambda.Tracing.ACTIVE,
            logGroup: logs.LogGroup.fromLogGroupName(this, "AutoRemediateEC2Dash039LambdaFunctionLogGroupRef", autoRemediateEc2Dash039LogGroup.ref),
        });
        cdk.Tags.of(autoRemediateEc2Dash039LambdaFunction).add("Name", "Auto Remediate EC2-039");
        cdk.Tags.of(autoRemediateEc2Dash039LambdaFunction).add("Owner", "CloudConformity");
        cdk.Tags.of(autoRemediateEc2Dash039LambdaFunction).add("Role", "Auto Remediate");
        cdk.Tags.of(autoRemediateEc2Dash039LambdaFunction).add("Environment", "Ops");
        autoRemediateEc2Dash039LambdaFunction.node.addDependency(autoRemediateEc2Dash039LogGroup);
        autoRemediateEc2Dash039LambdaFunction.node.addDependency(autoRemediateEc2039Role);
        const autoRemediateEc2Dash040LambdaFunction = new lambda.Function(this, "AutoRemediateEC2Dash040LambdaFunction", {
            code: lambda.Code.fromAsset(functionsPath),
            handler: "AutoRemediateEC2-040.handler",
            runtime: lambda.Runtime.NODEJS_24_X,
            functionName: "auto-remediate-v1-AutoRemediateEC2-040",
            memorySize: 128,
            timeout: cdk.Duration.seconds(120),
            role: iam.Role.fromRoleArn(this, "AutoRemediateEC2Dash040LambdaFunctionRoleRef", autoRemediateEc2040Role.attrArn),
            tracing: lambda.Tracing.ACTIVE,
            logGroup: logs.LogGroup.fromLogGroupName(this, "AutoRemediateEC2Dash040LambdaFunctionLogGroupRef", autoRemediateEc2Dash040LogGroup.ref),
        });
        cdk.Tags.of(autoRemediateEc2Dash040LambdaFunction).add("Name", "Auto Remediate EC2-040");
        cdk.Tags.of(autoRemediateEc2Dash040LambdaFunction).add("Owner", "CloudConformity");
        cdk.Tags.of(autoRemediateEc2Dash040LambdaFunction).add("Role", "Auto Remediate");
        cdk.Tags.of(autoRemediateEc2Dash040LambdaFunction).add("Environment", "Ops");
        autoRemediateEc2Dash040LambdaFunction.node.addDependency(autoRemediateEc2Dash040LogGroup);
        autoRemediateEc2Dash040LambdaFunction.node.addDependency(autoRemediateEc2040Role);
        const autoRemediateEc2Dash043LambdaFunction = new lambda.Function(this, "AutoRemediateEC2Dash043LambdaFunction", {
            code: lambda.Code.fromAsset(functionsPath),
            handler: "AutoRemediateEC2-043.handler",
            runtime: lambda.Runtime.NODEJS_24_X,
            functionName: "auto-remediate-v1-AutoRemediateEC2-043",
            memorySize: 128,
            timeout: cdk.Duration.seconds(120),
            role: iam.Role.fromRoleArn(this, "AutoRemediateEC2Dash043LambdaFunctionRoleRef", autoRemediateEc2043Role.attrArn),
            tracing: lambda.Tracing.ACTIVE,
            logGroup: logs.LogGroup.fromLogGroupName(this, "AutoRemediateEC2Dash043LambdaFunctionLogGroupRef", autoRemediateEc2Dash043LogGroup.ref),
        });
        cdk.Tags.of(autoRemediateEc2Dash043LambdaFunction).add("Name", "Auto Remediate EC2-043");
        cdk.Tags.of(autoRemediateEc2Dash043LambdaFunction).add("Owner", "CloudConformity");
        cdk.Tags.of(autoRemediateEc2Dash043LambdaFunction).add("Role", "Auto Remediate");
        cdk.Tags.of(autoRemediateEc2Dash043LambdaFunction).add("Environment", "Ops");
        autoRemediateEc2Dash043LambdaFunction.node.addDependency(autoRemediateEc2Dash043LogGroup);
        autoRemediateEc2Dash043LambdaFunction.node.addDependency(autoRemediateEc2043Role);
        const autoRemediateEc2Dash045LambdaFunction = new lambda.Function(this, "AutoRemediateEC2Dash045LambdaFunction", {
            code: lambda.Code.fromAsset(functionsPath),
            handler: "AutoRemediateEC2-045.handler",
            runtime: lambda.Runtime.NODEJS_24_X,
            functionName: "auto-remediate-v1-AutoRemediateEC2-045",
            memorySize: 128,
            timeout: cdk.Duration.seconds(120),
            role: iam.Role.fromRoleArn(this, "AutoRemediateEC2Dash045LambdaFunctionRoleRef", autoRemediateEc2045Role.attrArn),
            tracing: lambda.Tracing.ACTIVE,
            logGroup: logs.LogGroup.fromLogGroupName(this, "AutoRemediateEC2Dash045LambdaFunctionLogGroupRef", autoRemediateEc2Dash045LogGroup.ref),
        });
        cdk.Tags.of(autoRemediateEc2Dash045LambdaFunction).add("Name", "Auto Remediate EC2-045");
        cdk.Tags.of(autoRemediateEc2Dash045LambdaFunction).add("Owner", "CloudConformity");
        cdk.Tags.of(autoRemediateEc2Dash045LambdaFunction).add("Role", "Auto Remediate");
        cdk.Tags.of(autoRemediateEc2Dash045LambdaFunction).add("Environment", "Ops");
        autoRemediateEc2Dash045LambdaFunction.node.addDependency(autoRemediateEc2Dash045LogGroup);
        autoRemediateEc2Dash045LambdaFunction.node.addDependency(autoRemediateEc2045Role);
        const autoRemediateGdDash001LambdaFunction = new lambda.Function(this, "AutoRemediateGDDash001LambdaFunction", {
            code: lambda.Code.fromAsset(functionsPath),
            handler: "AutoRemediateGD-001.handler",
            runtime: lambda.Runtime.NODEJS_24_X,
            functionName: "auto-remediate-v1-AutoRemediateGD-001",
            memorySize: 128,
            timeout: cdk.Duration.seconds(10),
            role: iam.Role.fromRoleArn(this, "AutoRemediateGDDash001LambdaFunctionRoleRef", autoRemediateGd001Role.attrArn),
            tracing: lambda.Tracing.ACTIVE,
            logGroup: logs.LogGroup.fromLogGroupName(this, "AutoRemediateGDDash001LambdaFunctionLogGroupRef", autoRemediateGdDash001LogGroup.ref),
        });
        cdk.Tags.of(autoRemediateGdDash001LambdaFunction).add("Name", "Auto Remediate GD-001");
        cdk.Tags.of(autoRemediateGdDash001LambdaFunction).add("Owner", "CloudConformity");
        cdk.Tags.of(autoRemediateGdDash001LambdaFunction).add("Role", "Auto Remediate");
        cdk.Tags.of(autoRemediateGdDash001LambdaFunction).add("Environment", "Ops");
        autoRemediateGdDash001LambdaFunction.node.addDependency(autoRemediateGdDash001LogGroup);
        autoRemediateGdDash001LambdaFunction.node.addDependency(autoRemediateGd001Role);
        const autoRemediateIamDash001LambdaFunction = new lambda.Function(this, "AutoRemediateIAMDash001LambdaFunction", {
            code: lambda.Code.fromAsset(functionsPath),
            handler: "AutoRemediateIAM-001.handler",
            runtime: lambda.Runtime.NODEJS_24_X,
            functionName: "auto-remediate-v1-AutoRemediateIAM-001",
            memorySize: 128,
            timeout: cdk.Duration.seconds(10),
            role: iam.Role.fromRoleArn(this, "AutoRemediateIAMDash001LambdaFunctionRoleRef", autoRemediateIam001Role.attrArn),
            tracing: lambda.Tracing.ACTIVE,
            logGroup: logs.LogGroup.fromLogGroupName(this, "AutoRemediateIAMDash001LambdaFunctionLogGroupRef", autoRemediateIamDash001LogGroup.ref),
        });
        cdk.Tags.of(autoRemediateIamDash001LambdaFunction).add("Name", "Auto Remediate IAM-001");
        cdk.Tags.of(autoRemediateIamDash001LambdaFunction).add("Owner", "CloudConformity");
        cdk.Tags.of(autoRemediateIamDash001LambdaFunction).add("Role", "Auto Remediate");
        cdk.Tags.of(autoRemediateIamDash001LambdaFunction).add("Environment", "Ops");
        autoRemediateIamDash001LambdaFunction.node.addDependency(autoRemediateIamDash001LogGroup);
        autoRemediateIamDash001LambdaFunction.node.addDependency(autoRemediateIam001Role);
        const autoRemediateIamDash029LambdaFunction = new lambda.Function(this, "AutoRemediateIAMDash029LambdaFunction", {
            code: lambda.Code.fromAsset(functionsPath),
            handler: "AutoRemediateIAM-029.handler",
            runtime: lambda.Runtime.NODEJS_24_X,
            functionName: "auto-remediate-v1-AutoRemediateIAM-029",
            memorySize: 128,
            timeout: cdk.Duration.seconds(10),
            role: iam.Role.fromRoleArn(this, "AutoRemediateIAMDash029LambdaFunctionRoleRef", autoRemediateIam029Role.attrArn),
            tracing: lambda.Tracing.ACTIVE,
            logGroup: logs.LogGroup.fromLogGroupName(this, "AutoRemediateIAMDash029LambdaFunctionLogGroupRef", autoRemediateIamDash029LogGroup.ref),
        });
        cdk.Tags.of(autoRemediateIamDash029LambdaFunction).add("Name", "Auto Remediate IAM-029");
        cdk.Tags.of(autoRemediateIamDash029LambdaFunction).add("Owner", "CloudConformity");
        cdk.Tags.of(autoRemediateIamDash029LambdaFunction).add("Role", "Auto Remediate");
        cdk.Tags.of(autoRemediateIamDash029LambdaFunction).add("Environment", "Ops");
        autoRemediateIamDash029LambdaFunction.node.addDependency(autoRemediateIamDash029LogGroup);
        autoRemediateIamDash029LambdaFunction.node.addDependency(autoRemediateIam029Role);
        const autoRemediateIamDash038LambdaFunction = new lambda.Function(this, "AutoRemediateIAMDash038LambdaFunction", {
            code: lambda.Code.fromAsset(functionsPath),
            handler: "AutoRemediateIAM-038.handler",
            runtime: lambda.Runtime.NODEJS_24_X,
            functionName: "auto-remediate-v1-AutoRemediateIAM-038",
            memorySize: 128,
            timeout: cdk.Duration.seconds(10),
            role: iam.Role.fromRoleArn(this, "AutoRemediateIAMDash038LambdaFunctionRoleRef", autoRemediateIam038Role.attrArn),
            tracing: lambda.Tracing.ACTIVE,
            logGroup: logs.LogGroup.fromLogGroupName(this, "AutoRemediateIAMDash038LambdaFunctionLogGroupRef", autoRemediateIamDash038LogGroup.ref),
        });
        cdk.Tags.of(autoRemediateIamDash038LambdaFunction).add("Name", "Auto Remediate IAM-038");
        cdk.Tags.of(autoRemediateIamDash038LambdaFunction).add("Owner", "CloudConformity");
        cdk.Tags.of(autoRemediateIamDash038LambdaFunction).add("Role", "Auto Remediate");
        cdk.Tags.of(autoRemediateIamDash038LambdaFunction).add("Environment", "Ops");
        autoRemediateIamDash038LambdaFunction.node.addDependency(autoRemediateIamDash038LogGroup);
        autoRemediateIamDash038LambdaFunction.node.addDependency(autoRemediateIam038Role);
        const autoRemediateKmsDash002LambdaFunction = new lambda.Function(this, "AutoRemediateKMSDash002LambdaFunction", {
            code: lambda.Code.fromAsset(functionsPath),
            handler: "AutoRemediateKMS-002.handler",
            runtime: lambda.Runtime.NODEJS_24_X,
            functionName: "auto-remediate-v1-AutoRemediateKMS-002",
            memorySize: 128,
            timeout: cdk.Duration.seconds(120),
            role: iam.Role.fromRoleArn(this, "AutoRemediateKMSDash002LambdaFunctionRoleRef", autoRemediateKms002Role.attrArn),
            tracing: lambda.Tracing.ACTIVE,
            logGroup: logs.LogGroup.fromLogGroupName(this, "AutoRemediateKMSDash002LambdaFunctionLogGroupRef", autoRemediateKmsDash002LogGroup.ref),
        });
        cdk.Tags.of(autoRemediateKmsDash002LambdaFunction).add("Name", "Auto Remediate KMS-002");
        cdk.Tags.of(autoRemediateKmsDash002LambdaFunction).add("Owner", "CloudConformity");
        cdk.Tags.of(autoRemediateKmsDash002LambdaFunction).add("Role", "Auto Remediate");
        cdk.Tags.of(autoRemediateKmsDash002LambdaFunction).add("Environment", "Ops");
        autoRemediateKmsDash002LambdaFunction.node.addDependency(autoRemediateKmsDash002LogGroup);
        autoRemediateKmsDash002LambdaFunction.node.addDependency(autoRemediateKms002Role);
        const autoRemediateKmsDash004LambdaFunction = new lambda.Function(this, "AutoRemediateKMSDash004LambdaFunction", {
            code: lambda.Code.fromAsset(functionsPath),
            handler: "AutoRemediateKMS-004.handler",
            runtime: lambda.Runtime.NODEJS_24_X,
            functionName: "auto-remediate-v1-AutoRemediateKMS-004",
            memorySize: 128,
            timeout: cdk.Duration.seconds(120),
            role: iam.Role.fromRoleArn(this, "AutoRemediateKMSDash004LambdaFunctionRoleRef", autoRemediateKms004Role.attrArn),
            tracing: lambda.Tracing.ACTIVE,
            logGroup: logs.LogGroup.fromLogGroupName(this, "AutoRemediateKMSDash004LambdaFunctionLogGroupRef", autoRemediateKmsDash004LogGroup.ref),
        });
        cdk.Tags.of(autoRemediateKmsDash004LambdaFunction).add("Name", "Auto Remediate KMS-004");
        cdk.Tags.of(autoRemediateKmsDash004LambdaFunction).add("Owner", "CloudConformity");
        cdk.Tags.of(autoRemediateKmsDash004LambdaFunction).add("Role", "Auto Remediate");
        cdk.Tags.of(autoRemediateKmsDash004LambdaFunction).add("Environment", "Ops");
        autoRemediateKmsDash004LambdaFunction.node.addDependency(autoRemediateKmsDash004LogGroup);
        autoRemediateKmsDash004LambdaFunction.node.addDependency(autoRemediateKms004Role);
        const autoRemediateKinesisDash001LambdaFunction = new lambda.Function(this, "AutoRemediateKinesisDash001LambdaFunction", {
            code: lambda.Code.fromAsset(functionsPath),
            handler: "AutoRemediateKinesis-001.handler",
            runtime: lambda.Runtime.NODEJS_24_X,
            functionName: "auto-remediate-v1-AutoRemediateKinesis-001",
            memorySize: 128,
            timeout: cdk.Duration.seconds(120),
            role: iam.Role.fromRoleArn(this, "AutoRemediateKinesisDash001LambdaFunctionRoleRef", autoRemediateKinesis001Role.attrArn),
            tracing: lambda.Tracing.ACTIVE,
            logGroup: logs.LogGroup.fromLogGroupName(this, "AutoRemediateKinesisDash001LambdaFunctionLogGroupRef", autoRemediateKinesisDash001LogGroup.ref),
        });
        cdk.Tags.of(autoRemediateKinesisDash001LambdaFunction).add("Name", "Auto Remediate Kinesis-001");
        cdk.Tags.of(autoRemediateKinesisDash001LambdaFunction).add("Owner", "CloudConformity");
        cdk.Tags.of(autoRemediateKinesisDash001LambdaFunction).add("Role", "Auto Remediate");
        cdk.Tags.of(autoRemediateKinesisDash001LambdaFunction).add("Environment", "Ops");
        autoRemediateKinesisDash001LambdaFunction.node.addDependency(autoRemediateKinesisDash001LogGroup);
        autoRemediateKinesisDash001LambdaFunction.node.addDependency(autoRemediateKinesis001Role);
        const autoRemediateLambdaDash003LambdaFunction = new lambda.Function(this, "AutoRemediateLambdaDash003LambdaFunction", {
            code: lambda.Code.fromAsset(functionsPath),
            handler: "AutoRemediateLambda-003.handler",
            runtime: lambda.Runtime.NODEJS_24_X,
            functionName: "auto-remediate-v1-AutoRemediateLambda-003",
            memorySize: 128,
            timeout: cdk.Duration.seconds(10),
            role: iam.Role.fromRoleArn(this, "AutoRemediateLambdaDash003LambdaFunctionRoleRef", autoRemediateLambda003Role.attrArn),
            tracing: lambda.Tracing.ACTIVE,
            logGroup: logs.LogGroup.fromLogGroupName(this, "AutoRemediateLambdaDash003LambdaFunctionLogGroupRef", autoRemediateLambdaDash003LogGroup.ref),
        });
        cdk.Tags.of(autoRemediateLambdaDash003LambdaFunction).add("Name", "Auto Remediate Lambda-003");
        cdk.Tags.of(autoRemediateLambdaDash003LambdaFunction).add("Owner", "CloudConformity");
        cdk.Tags.of(autoRemediateLambdaDash003LambdaFunction).add("Role", "Auto Remediate");
        cdk.Tags.of(autoRemediateLambdaDash003LambdaFunction).add("Environment", "Ops");
        autoRemediateLambdaDash003LambdaFunction.node.addDependency(autoRemediateLambdaDash003LogGroup);
        autoRemediateLambdaDash003LambdaFunction.node.addDependency(autoRemediateLambda003Role);
        const autoRemediateOrganizationsDash002LambdaFunction = new lambda.Function(this, "AutoRemediateOrganizationsDash002LambdaFunction", {
            code: lambda.Code.fromAsset(functionsPath),
            handler: "AutoRemediateOrganizations-002.handler",
            runtime: lambda.Runtime.NODEJS_24_X,
            functionName: "auto-remediate-v1-AutoRemediateOrganizations-002",
            memorySize: 128,
            timeout: cdk.Duration.seconds(10),
            role: iam.Role.fromRoleArn(this, "AutoRemediateOrganizationsDash002LambdaFunctionRoleRef", autoRemediateOrganizations002Role.attrArn),
            tracing: lambda.Tracing.ACTIVE,
            logGroup: logs.LogGroup.fromLogGroupName(this, "AutoRemediateOrganizationsDash002LambdaFunctionLogGroupRef", autoRemediateOrganizationsDash002LogGroup.ref),
        });
        cdk.Tags.of(autoRemediateOrganizationsDash002LambdaFunction).add("Name", "Auto Remediate Organizations-002");
        cdk.Tags.of(autoRemediateOrganizationsDash002LambdaFunction).add("Owner", "CloudConformity");
        cdk.Tags.of(autoRemediateOrganizationsDash002LambdaFunction).add("Role", "Auto Remediate");
        cdk.Tags.of(autoRemediateOrganizationsDash002LambdaFunction).add("Environment", "Ops");
        autoRemediateOrganizationsDash002LambdaFunction.node.addDependency(autoRemediateOrganizationsDash002LogGroup);
        autoRemediateOrganizationsDash002LambdaFunction.node.addDependency(autoRemediateOrganizations002Role);
        const autoRemediateQueueDlq = new sqs.CfnQueue(this, "AutoRemediateQueueDLQ", {
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
        });
        const autoRemediateRdsDash006LambdaFunction = new lambda.Function(this, "AutoRemediateRDSDash006LambdaFunction", {
            code: lambda.Code.fromAsset(functionsPath),
            handler: "AutoRemediateRDS-006.handler",
            runtime: lambda.Runtime.NODEJS_24_X,
            functionName: "auto-remediate-v1-AutoRemediateRDS-006",
            memorySize: 128,
            timeout: cdk.Duration.seconds(120),
            role: iam.Role.fromRoleArn(this, "AutoRemediateRDSDash006LambdaFunctionRoleRef", autoRemediateRds006Role.attrArn),
            tracing: lambda.Tracing.ACTIVE,
            logGroup: logs.LogGroup.fromLogGroupName(this, "AutoRemediateRDSDash006LambdaFunctionLogGroupRef", autoRemediateRdsDash006LogGroup.ref),
        });
        cdk.Tags.of(autoRemediateRdsDash006LambdaFunction).add("Name", "Auto Remediate RDS-006");
        cdk.Tags.of(autoRemediateRdsDash006LambdaFunction).add("Owner", "CloudConformity");
        cdk.Tags.of(autoRemediateRdsDash006LambdaFunction).add("Role", "Auto Remediate");
        cdk.Tags.of(autoRemediateRdsDash006LambdaFunction).add("Environment", "Ops");
        autoRemediateRdsDash006LambdaFunction.node.addDependency(autoRemediateRdsDash006LogGroup);
        autoRemediateRdsDash006LambdaFunction.node.addDependency(autoRemediateRds006Role);
        const autoRemediateRdsDash008LambdaFunction = new lambda.Function(this, "AutoRemediateRDSDash008LambdaFunction", {
            code: lambda.Code.fromAsset(functionsPath),
            handler: "AutoRemediateRDS-008.handler",
            runtime: lambda.Runtime.NODEJS_24_X,
            functionName: "auto-remediate-v1-AutoRemediateRDS-008",
            memorySize: 128,
            timeout: cdk.Duration.seconds(10),
            role: iam.Role.fromRoleArn(this, "AutoRemediateRDSDash008LambdaFunctionRoleRef", autoRemediateRds008Role.attrArn),
            tracing: lambda.Tracing.ACTIVE,
            logGroup: logs.LogGroup.fromLogGroupName(this, "AutoRemediateRDSDash008LambdaFunctionLogGroupRef", autoRemediateRdsDash008LogGroup.ref),
        });
        cdk.Tags.of(autoRemediateRdsDash008LambdaFunction).add("Name", "Auto Remediate RDS-008");
        cdk.Tags.of(autoRemediateRdsDash008LambdaFunction).add("Owner", "CloudConformity");
        cdk.Tags.of(autoRemediateRdsDash008LambdaFunction).add("Role", "Auto Remediate");
        cdk.Tags.of(autoRemediateRdsDash008LambdaFunction).add("Environment", "Ops");
        autoRemediateRdsDash008LambdaFunction.node.addDependency(autoRemediateRdsDash008LogGroup);
        autoRemediateRdsDash008LambdaFunction.node.addDependency(autoRemediateRds008Role);
        const autoRemediateRdsDash023LambdaFunction = new lambda.Function(this, "AutoRemediateRDSDash023LambdaFunction", {
            code: lambda.Code.fromAsset(functionsPath),
            handler: "AutoRemediateRDS-023.handler",
            runtime: lambda.Runtime.NODEJS_24_X,
            functionName: "auto-remediate-v1-AutoRemediateRDS-023",
            memorySize: 128,
            timeout: cdk.Duration.seconds(10),
            role: iam.Role.fromRoleArn(this, "AutoRemediateRDSDash023LambdaFunctionRoleRef", autoRemediateRds023Role.attrArn),
            tracing: lambda.Tracing.ACTIVE,
            logGroup: logs.LogGroup.fromLogGroupName(this, "AutoRemediateRDSDash023LambdaFunctionLogGroupRef", autoRemediateRdsDash023LogGroup.ref),
        });
        cdk.Tags.of(autoRemediateRdsDash023LambdaFunction).add("Name", "Auto Remediate RDS-023");
        cdk.Tags.of(autoRemediateRdsDash023LambdaFunction).add("Owner", "CloudConformity");
        cdk.Tags.of(autoRemediateRdsDash023LambdaFunction).add("Role", "Auto Remediate");
        cdk.Tags.of(autoRemediateRdsDash023LambdaFunction).add("Environment", "Ops");
        autoRemediateRdsDash023LambdaFunction.node.addDependency(autoRemediateRdsDash023LogGroup);
        autoRemediateRdsDash023LambdaFunction.node.addDependency(autoRemediateRds023Role);
        const autoRemediateRsDash001LambdaFunction = new lambda.Function(this, "AutoRemediateRSDash001LambdaFunction", {
            code: lambda.Code.fromAsset(functionsPath),
            handler: "AutoRemediateRS-001.handler",
            runtime: lambda.Runtime.NODEJS_24_X,
            functionName: "auto-remediate-v1-AutoRemediateRS-001",
            memorySize: 128,
            timeout: cdk.Duration.seconds(120),
            role: iam.Role.fromRoleArn(this, "AutoRemediateRSDash001LambdaFunctionRoleRef", autoRemediateRs001Role.attrArn),
            tracing: lambda.Tracing.ACTIVE,
            logGroup: logs.LogGroup.fromLogGroupName(this, "AutoRemediateRSDash001LambdaFunctionLogGroupRef", autoRemediateRsDash001LogGroup.ref),
        });
        cdk.Tags.of(autoRemediateRsDash001LambdaFunction).add("Name", "Auto Remediate RS-001");
        cdk.Tags.of(autoRemediateRsDash001LambdaFunction).add("Owner", "CloudConformity");
        cdk.Tags.of(autoRemediateRsDash001LambdaFunction).add("Role", "Auto Remediate");
        cdk.Tags.of(autoRemediateRsDash001LambdaFunction).add("Environment", "Ops");
        autoRemediateRsDash001LambdaFunction.node.addDependency(autoRemediateRsDash001LogGroup);
        autoRemediateRsDash001LambdaFunction.node.addDependency(autoRemediateRs001Role);
        const autoRemediateRsDash019LambdaFunction = new lambda.Function(this, "AutoRemediateRSDash019LambdaFunction", {
            code: lambda.Code.fromAsset(functionsPath),
            handler: "AutoRemediateRS-019.handler",
            runtime: lambda.Runtime.NODEJS_24_X,
            functionName: "auto-remediate-v1-AutoRemediateRS-019",
            memorySize: 128,
            timeout: cdk.Duration.seconds(120),
            role: iam.Role.fromRoleArn(this, "AutoRemediateRSDash019LambdaFunctionRoleRef", autoRemediateRs019Role.attrArn),
            tracing: lambda.Tracing.ACTIVE,
            logGroup: logs.LogGroup.fromLogGroupName(this, "AutoRemediateRSDash019LambdaFunctionLogGroupRef", autoRemediateRsDash019LogGroup.ref),
        });
        cdk.Tags.of(autoRemediateRsDash019LambdaFunction).add("Name", "Auto Remediate RS-019");
        cdk.Tags.of(autoRemediateRsDash019LambdaFunction).add("Owner", "CloudConformity");
        cdk.Tags.of(autoRemediateRsDash019LambdaFunction).add("Role", "Auto Remediate");
        cdk.Tags.of(autoRemediateRsDash019LambdaFunction).add("Environment", "Ops");
        autoRemediateRsDash019LambdaFunction.node.addDependency(autoRemediateRsDash019LogGroup);
        autoRemediateRsDash019LambdaFunction.node.addDependency(autoRemediateRs019Role);
        const autoRemediateRsDash023LambdaFunction = new lambda.Function(this, "AutoRemediateRSDash023LambdaFunction", {
            code: lambda.Code.fromAsset(functionsPath),
            handler: "AutoRemediateRS-023.handler",
            runtime: lambda.Runtime.NODEJS_24_X,
            functionName: "auto-remediate-v1-AutoRemediateRS-023",
            memorySize: 128,
            timeout: cdk.Duration.seconds(120),
            role: iam.Role.fromRoleArn(this, "AutoRemediateRSDash023LambdaFunctionRoleRef", autoRemediateRs023Role.attrArn),
            tracing: lambda.Tracing.ACTIVE,
            logGroup: logs.LogGroup.fromLogGroupName(this, "AutoRemediateRSDash023LambdaFunctionLogGroupRef", autoRemediateRsDash023LogGroup.ref),
        });
        cdk.Tags.of(autoRemediateRsDash023LambdaFunction).add("Name", "Auto Remediate RS-023");
        cdk.Tags.of(autoRemediateRsDash023LambdaFunction).add("Owner", "CloudConformity");
        cdk.Tags.of(autoRemediateRsDash023LambdaFunction).add("Role", "Auto Remediate");
        cdk.Tags.of(autoRemediateRsDash023LambdaFunction).add("Environment", "Ops");
        autoRemediateRsDash023LambdaFunction.node.addDependency(autoRemediateRsDash023LogGroup);
        autoRemediateRsDash023LambdaFunction.node.addDependency(autoRemediateRs023Role);
        const autoRemediateS3Dash001LambdaFunction = new lambda.Function(this, "AutoRemediateS3Dash001LambdaFunction", {
            code: lambda.Code.fromAsset(functionsPath),
            handler: "AutoRemediateS3-001.handler",
            runtime: lambda.Runtime.NODEJS_24_X,
            functionName: "auto-remediate-v1-AutoRemediateS3-001",
            memorySize: 128,
            timeout: cdk.Duration.seconds(10),
            role: iam.Role.fromRoleArn(this, "AutoRemediateS3Dash001LambdaFunctionRoleRef", autoRemediateS3001Role.attrArn),
            tracing: lambda.Tracing.ACTIVE,
            logGroup: logs.LogGroup.fromLogGroupName(this, "AutoRemediateS3Dash001LambdaFunctionLogGroupRef", autoRemediateS3Dash001LogGroup.ref),
        });
        cdk.Tags.of(autoRemediateS3Dash001LambdaFunction).add("Name", "Auto Remediate S3-001");
        cdk.Tags.of(autoRemediateS3Dash001LambdaFunction).add("Owner", "CloudConformity");
        cdk.Tags.of(autoRemediateS3Dash001LambdaFunction).add("Role", "Auto Remediate");
        cdk.Tags.of(autoRemediateS3Dash001LambdaFunction).add("Environment", "Ops");
        autoRemediateS3Dash001LambdaFunction.node.addDependency(autoRemediateS3Dash001LogGroup);
        autoRemediateS3Dash001LambdaFunction.node.addDependency(autoRemediateS3001Role);
        const autoRemediateS3Dash002LambdaFunction = new lambda.Function(this, "AutoRemediateS3Dash002LambdaFunction", {
            code: lambda.Code.fromAsset(functionsPath),
            handler: "AutoRemediateS3-002.handler",
            runtime: lambda.Runtime.NODEJS_24_X,
            functionName: "auto-remediate-v1-AutoRemediateS3-002",
            memorySize: 128,
            timeout: cdk.Duration.seconds(10),
            role: iam.Role.fromRoleArn(this, "AutoRemediateS3Dash002LambdaFunctionRoleRef", autoRemediateS3002Role.attrArn),
            tracing: lambda.Tracing.ACTIVE,
            logGroup: logs.LogGroup.fromLogGroupName(this, "AutoRemediateS3Dash002LambdaFunctionLogGroupRef", autoRemediateS3Dash002LogGroup.ref),
        });
        cdk.Tags.of(autoRemediateS3Dash002LambdaFunction).add("Name", "Auto Remediate S3-002");
        cdk.Tags.of(autoRemediateS3Dash002LambdaFunction).add("Owner", "CloudConformity");
        cdk.Tags.of(autoRemediateS3Dash002LambdaFunction).add("Role", "Auto Remediate");
        cdk.Tags.of(autoRemediateS3Dash002LambdaFunction).add("Environment", "Ops");
        autoRemediateS3Dash002LambdaFunction.node.addDependency(autoRemediateS3Dash002LogGroup);
        autoRemediateS3Dash002LambdaFunction.node.addDependency(autoRemediateS3002Role);
        const autoRemediateS3Dash003LambdaFunction = new lambda.Function(this, "AutoRemediateS3Dash003LambdaFunction", {
            code: lambda.Code.fromAsset(functionsPath),
            handler: "AutoRemediateS3-003.handler",
            runtime: lambda.Runtime.NODEJS_24_X,
            functionName: "auto-remediate-v1-AutoRemediateS3-003",
            memorySize: 128,
            timeout: cdk.Duration.seconds(10),
            role: iam.Role.fromRoleArn(this, "AutoRemediateS3Dash003LambdaFunctionRoleRef", autoRemediateS3003Role.attrArn),
            tracing: lambda.Tracing.ACTIVE,
            logGroup: logs.LogGroup.fromLogGroupName(this, "AutoRemediateS3Dash003LambdaFunctionLogGroupRef", autoRemediateS3Dash003LogGroup.ref),
        });
        cdk.Tags.of(autoRemediateS3Dash003LambdaFunction).add("Name", "Auto Remediate S3-003");
        cdk.Tags.of(autoRemediateS3Dash003LambdaFunction).add("Owner", "CloudConformity");
        cdk.Tags.of(autoRemediateS3Dash003LambdaFunction).add("Role", "Auto Remediate");
        cdk.Tags.of(autoRemediateS3Dash003LambdaFunction).add("Environment", "Ops");
        autoRemediateS3Dash003LambdaFunction.node.addDependency(autoRemediateS3Dash003LogGroup);
        autoRemediateS3Dash003LambdaFunction.node.addDependency(autoRemediateS3003Role);
        const autoRemediateS3Dash004LambdaFunction = new lambda.Function(this, "AutoRemediateS3Dash004LambdaFunction", {
            code: lambda.Code.fromAsset(functionsPath),
            handler: "AutoRemediateS3-004.handler",
            runtime: lambda.Runtime.NODEJS_24_X,
            functionName: "auto-remediate-v1-AutoRemediateS3-004",
            memorySize: 128,
            timeout: cdk.Duration.seconds(10),
            role: iam.Role.fromRoleArn(this, "AutoRemediateS3Dash004LambdaFunctionRoleRef", autoRemediateS3004Role.attrArn),
            tracing: lambda.Tracing.ACTIVE,
            logGroup: logs.LogGroup.fromLogGroupName(this, "AutoRemediateS3Dash004LambdaFunctionLogGroupRef", autoRemediateS3Dash004LogGroup.ref),
        });
        cdk.Tags.of(autoRemediateS3Dash004LambdaFunction).add("Name", "Auto Remediate S3-004");
        cdk.Tags.of(autoRemediateS3Dash004LambdaFunction).add("Owner", "CloudConformity");
        cdk.Tags.of(autoRemediateS3Dash004LambdaFunction).add("Role", "Auto Remediate");
        cdk.Tags.of(autoRemediateS3Dash004LambdaFunction).add("Environment", "Ops");
        autoRemediateS3Dash004LambdaFunction.node.addDependency(autoRemediateS3Dash004LogGroup);
        autoRemediateS3Dash004LambdaFunction.node.addDependency(autoRemediateS3004Role);
        const autoRemediateS3Dash005LambdaFunction = new lambda.Function(this, "AutoRemediateS3Dash005LambdaFunction", {
            code: lambda.Code.fromAsset(functionsPath),
            handler: "AutoRemediateS3-005.handler",
            runtime: lambda.Runtime.NODEJS_24_X,
            functionName: "auto-remediate-v1-AutoRemediateS3-005",
            memorySize: 128,
            timeout: cdk.Duration.seconds(10),
            role: iam.Role.fromRoleArn(this, "AutoRemediateS3Dash005LambdaFunctionRoleRef", autoRemediateS3005Role.attrArn),
            tracing: lambda.Tracing.ACTIVE,
            logGroup: logs.LogGroup.fromLogGroupName(this, "AutoRemediateS3Dash005LambdaFunctionLogGroupRef", autoRemediateS3Dash005LogGroup.ref),
        });
        cdk.Tags.of(autoRemediateS3Dash005LambdaFunction).add("Name", "Auto Remediate S3-005");
        cdk.Tags.of(autoRemediateS3Dash005LambdaFunction).add("Owner", "CloudConformity");
        cdk.Tags.of(autoRemediateS3Dash005LambdaFunction).add("Role", "Auto Remediate");
        cdk.Tags.of(autoRemediateS3Dash005LambdaFunction).add("Environment", "Ops");
        autoRemediateS3Dash005LambdaFunction.node.addDependency(autoRemediateS3Dash005LogGroup);
        autoRemediateS3Dash005LambdaFunction.node.addDependency(autoRemediateS3005Role);
        const autoRemediateS3Dash006LambdaFunction = new lambda.Function(this, "AutoRemediateS3Dash006LambdaFunction", {
            code: lambda.Code.fromAsset(functionsPath),
            handler: "AutoRemediateS3-006.handler",
            runtime: lambda.Runtime.NODEJS_24_X,
            functionName: "auto-remediate-v1-AutoRemediateS3-006",
            memorySize: 128,
            timeout: cdk.Duration.seconds(10),
            role: iam.Role.fromRoleArn(this, "AutoRemediateS3Dash006LambdaFunctionRoleRef", autoRemediateS3006Role.attrArn),
            tracing: lambda.Tracing.ACTIVE,
            logGroup: logs.LogGroup.fromLogGroupName(this, "AutoRemediateS3Dash006LambdaFunctionLogGroupRef", autoRemediateS3Dash006LogGroup.ref),
        });
        cdk.Tags.of(autoRemediateS3Dash006LambdaFunction).add("Name", "Auto Remediate S3-006");
        cdk.Tags.of(autoRemediateS3Dash006LambdaFunction).add("Owner", "CloudConformity");
        cdk.Tags.of(autoRemediateS3Dash006LambdaFunction).add("Role", "Auto Remediate");
        cdk.Tags.of(autoRemediateS3Dash006LambdaFunction).add("Environment", "Ops");
        autoRemediateS3Dash006LambdaFunction.node.addDependency(autoRemediateS3Dash006LogGroup);
        autoRemediateS3Dash006LambdaFunction.node.addDependency(autoRemediateS3006Role);
        const autoRemediateS3Dash007LambdaFunction = new lambda.Function(this, "AutoRemediateS3Dash007LambdaFunction", {
            code: lambda.Code.fromAsset(functionsPath),
            handler: "AutoRemediateS3-007.handler",
            runtime: lambda.Runtime.NODEJS_24_X,
            functionName: "auto-remediate-v1-AutoRemediateS3-007",
            memorySize: 128,
            timeout: cdk.Duration.seconds(10),
            role: iam.Role.fromRoleArn(this, "AutoRemediateS3Dash007LambdaFunctionRoleRef", autoRemediateS3007Role.attrArn),
            tracing: lambda.Tracing.ACTIVE,
            logGroup: logs.LogGroup.fromLogGroupName(this, "AutoRemediateS3Dash007LambdaFunctionLogGroupRef", autoRemediateS3Dash007LogGroup.ref),
        });
        cdk.Tags.of(autoRemediateS3Dash007LambdaFunction).add("Name", "Auto Remediate S3-007");
        cdk.Tags.of(autoRemediateS3Dash007LambdaFunction).add("Owner", "CloudConformity");
        cdk.Tags.of(autoRemediateS3Dash007LambdaFunction).add("Role", "Auto Remediate");
        cdk.Tags.of(autoRemediateS3Dash007LambdaFunction).add("Environment", "Ops");
        autoRemediateS3Dash007LambdaFunction.node.addDependency(autoRemediateS3Dash007LogGroup);
        autoRemediateS3Dash007LambdaFunction.node.addDependency(autoRemediateS3007Role);
        const autoRemediateS3Dash008LambdaFunction = new lambda.Function(this, "AutoRemediateS3Dash008LambdaFunction", {
            code: lambda.Code.fromAsset(functionsPath),
            handler: "AutoRemediateS3-008.handler",
            runtime: lambda.Runtime.NODEJS_24_X,
            functionName: "auto-remediate-v1-AutoRemediateS3-008",
            memorySize: 128,
            timeout: cdk.Duration.seconds(10),
            role: iam.Role.fromRoleArn(this, "AutoRemediateS3Dash008LambdaFunctionRoleRef", autoRemediateS3008Role.attrArn),
            tracing: lambda.Tracing.ACTIVE,
            logGroup: logs.LogGroup.fromLogGroupName(this, "AutoRemediateS3Dash008LambdaFunctionLogGroupRef", autoRemediateS3Dash008LogGroup.ref),
        });
        cdk.Tags.of(autoRemediateS3Dash008LambdaFunction).add("Name", "Auto Remediate S3-008");
        cdk.Tags.of(autoRemediateS3Dash008LambdaFunction).add("Owner", "CloudConformity");
        cdk.Tags.of(autoRemediateS3Dash008LambdaFunction).add("Role", "Auto Remediate");
        cdk.Tags.of(autoRemediateS3Dash008LambdaFunction).add("Environment", "Ops");
        autoRemediateS3Dash008LambdaFunction.node.addDependency(autoRemediateS3Dash008LogGroup);
        autoRemediateS3Dash008LambdaFunction.node.addDependency(autoRemediateS3008Role);
        const autoRemediateS3Dash009LambdaFunction = new lambda.Function(this, "AutoRemediateS3Dash009LambdaFunction", {
            code: lambda.Code.fromAsset(functionsPath),
            handler: "AutoRemediateS3-009.handler",
            runtime: lambda.Runtime.NODEJS_24_X,
            functionName: "auto-remediate-v1-AutoRemediateS3-009",
            memorySize: 128,
            timeout: cdk.Duration.seconds(10),
            role: iam.Role.fromRoleArn(this, "AutoRemediateS3Dash009LambdaFunctionRoleRef", autoRemediateS3009Role.attrArn),
            tracing: lambda.Tracing.ACTIVE,
            logGroup: logs.LogGroup.fromLogGroupName(this, "AutoRemediateS3Dash009LambdaFunctionLogGroupRef", autoRemediateS3Dash009LogGroup.ref),
        });
        cdk.Tags.of(autoRemediateS3Dash009LambdaFunction).add("Name", "Auto Remediate S3-009");
        cdk.Tags.of(autoRemediateS3Dash009LambdaFunction).add("Owner", "CloudConformity");
        cdk.Tags.of(autoRemediateS3Dash009LambdaFunction).add("Role", "Auto Remediate");
        cdk.Tags.of(autoRemediateS3Dash009LambdaFunction).add("Environment", "Ops");
        autoRemediateS3Dash009LambdaFunction.node.addDependency(autoRemediateS3Dash009LogGroup);
        autoRemediateS3Dash009LambdaFunction.node.addDependency(autoRemediateS3009Role);
        const autoRemediateS3Dash010LambdaFunction = new lambda.Function(this, "AutoRemediateS3Dash010LambdaFunction", {
            code: lambda.Code.fromAsset(functionsPath),
            handler: "AutoRemediateS3-010.handler",
            runtime: lambda.Runtime.NODEJS_24_X,
            functionName: "auto-remediate-v1-AutoRemediateS3-010",
            memorySize: 128,
            timeout: cdk.Duration.seconds(10),
            role: iam.Role.fromRoleArn(this, "AutoRemediateS3Dash010LambdaFunctionRoleRef", autoRemediateS3010Role.attrArn),
            tracing: lambda.Tracing.ACTIVE,
            logGroup: logs.LogGroup.fromLogGroupName(this, "AutoRemediateS3Dash010LambdaFunctionLogGroupRef", autoRemediateS3Dash010LogGroup.ref),
        });
        cdk.Tags.of(autoRemediateS3Dash010LambdaFunction).add("Name", "Auto Remediate S3-010");
        cdk.Tags.of(autoRemediateS3Dash010LambdaFunction).add("Owner", "CloudConformity");
        cdk.Tags.of(autoRemediateS3Dash010LambdaFunction).add("Role", "Auto Remediate");
        cdk.Tags.of(autoRemediateS3Dash010LambdaFunction).add("Environment", "Ops");
        autoRemediateS3Dash010LambdaFunction.node.addDependency(autoRemediateS3Dash010LogGroup);
        autoRemediateS3Dash010LambdaFunction.node.addDependency(autoRemediateS3010Role);
        const autoRemediateS3Dash012LambdaFunction = new lambda.Function(this, "AutoRemediateS3Dash012LambdaFunction", {
            code: lambda.Code.fromAsset(functionsPath),
            handler: "AutoRemediateS3-012.handler",
            runtime: lambda.Runtime.NODEJS_24_X,
            functionName: "auto-remediate-v1-AutoRemediateS3-012",
            memorySize: 128,
            timeout: cdk.Duration.seconds(10),
            role: iam.Role.fromRoleArn(this, "AutoRemediateS3Dash012LambdaFunctionRoleRef", autoRemediateS3012Role.attrArn),
            tracing: lambda.Tracing.ACTIVE,
            logGroup: logs.LogGroup.fromLogGroupName(this, "AutoRemediateS3Dash012LambdaFunctionLogGroupRef", autoRemediateS3Dash012LogGroup.ref),
        });
        cdk.Tags.of(autoRemediateS3Dash012LambdaFunction).add("Name", "Auto Remediate S3-012");
        cdk.Tags.of(autoRemediateS3Dash012LambdaFunction).add("Owner", "CloudConformity");
        cdk.Tags.of(autoRemediateS3Dash012LambdaFunction).add("Role", "Auto Remediate");
        cdk.Tags.of(autoRemediateS3Dash012LambdaFunction).add("Environment", "Ops");
        autoRemediateS3Dash012LambdaFunction.node.addDependency(autoRemediateS3Dash012LogGroup);
        autoRemediateS3Dash012LambdaFunction.node.addDependency(autoRemediateS3012Role);
        const autoRemediateS3Dash014LambdaFunction = new lambda.Function(this, "AutoRemediateS3Dash014LambdaFunction", {
            code: lambda.Code.fromAsset(functionsPath),
            handler: "AutoRemediateS3-014.handler",
            runtime: lambda.Runtime.NODEJS_24_X,
            functionName: "auto-remediate-v1-AutoRemediateS3-014",
            memorySize: 128,
            timeout: cdk.Duration.seconds(10),
            role: iam.Role.fromRoleArn(this, "AutoRemediateS3Dash014LambdaFunctionRoleRef", autoRemediateS3014Role.attrArn),
            tracing: lambda.Tracing.ACTIVE,
            logGroup: logs.LogGroup.fromLogGroupName(this, "AutoRemediateS3Dash014LambdaFunctionLogGroupRef", autoRemediateS3Dash014LogGroup.ref),
        });
        cdk.Tags.of(autoRemediateS3Dash014LambdaFunction).add("Name", "Auto Remediate S3-014");
        cdk.Tags.of(autoRemediateS3Dash014LambdaFunction).add("Owner", "CloudConformity");
        cdk.Tags.of(autoRemediateS3Dash014LambdaFunction).add("Role", "Auto Remediate");
        cdk.Tags.of(autoRemediateS3Dash014LambdaFunction).add("Environment", "Ops");
        autoRemediateS3Dash014LambdaFunction.node.addDependency(autoRemediateS3Dash014LogGroup);
        autoRemediateS3Dash014LambdaFunction.node.addDependency(autoRemediateS3014Role);
        const autoRemediateS3Dash016LambdaFunction = new lambda.Function(this, "AutoRemediateS3Dash016LambdaFunction", {
            code: lambda.Code.fromAsset(functionsPath),
            handler: "AutoRemediateS3-016.handler",
            runtime: lambda.Runtime.NODEJS_24_X,
            functionName: "auto-remediate-v1-AutoRemediateS3-016",
            memorySize: 128,
            timeout: cdk.Duration.seconds(10),
            role: iam.Role.fromRoleArn(this, "AutoRemediateS3Dash016LambdaFunctionRoleRef", autoRemediateS3016Role.attrArn),
            tracing: lambda.Tracing.ACTIVE,
            logGroup: logs.LogGroup.fromLogGroupName(this, "AutoRemediateS3Dash016LambdaFunctionLogGroupRef", autoRemediateS3Dash016LogGroup.ref),
        });
        cdk.Tags.of(autoRemediateS3Dash016LambdaFunction).add("Name", "Auto Remediate S3-016");
        cdk.Tags.of(autoRemediateS3Dash016LambdaFunction).add("Owner", "CloudConformity");
        cdk.Tags.of(autoRemediateS3Dash016LambdaFunction).add("Role", "Auto Remediate");
        cdk.Tags.of(autoRemediateS3Dash016LambdaFunction).add("Environment", "Ops");
        autoRemediateS3Dash016LambdaFunction.node.addDependency(autoRemediateS3Dash016LogGroup);
        autoRemediateS3Dash016LambdaFunction.node.addDependency(autoRemediateS3016Role);
        const autoRemediateSqsDash004LambdaFunction = new lambda.Function(this, "AutoRemediateSQSDash004LambdaFunction", {
            code: lambda.Code.fromAsset(functionsPath),
            handler: "AutoRemediateSQS-004.handler",
            runtime: lambda.Runtime.NODEJS_24_X,
            functionName: "auto-remediate-v1-AutoRemediateSQS-004",
            memorySize: 128,
            timeout: cdk.Duration.seconds(120),
            role: iam.Role.fromRoleArn(this, "AutoRemediateSQSDash004LambdaFunctionRoleRef", autoRemediateSqs004Role.attrArn),
            tracing: lambda.Tracing.ACTIVE,
            logGroup: logs.LogGroup.fromLogGroupName(this, "AutoRemediateSQSDash004LambdaFunctionLogGroupRef", autoRemediateSqsDash004LogGroup.ref),
        });
        cdk.Tags.of(autoRemediateSqsDash004LambdaFunction).add("Name", "Auto Remediate SQS-004");
        cdk.Tags.of(autoRemediateSqsDash004LambdaFunction).add("Owner", "CloudConformity");
        cdk.Tags.of(autoRemediateSqsDash004LambdaFunction).add("Role", "Auto Remediate");
        cdk.Tags.of(autoRemediateSqsDash004LambdaFunction).add("Environment", "Ops");
        autoRemediateSqsDash004LambdaFunction.node.addDependency(autoRemediateSqsDash004LogGroup);
        autoRemediateSqsDash004LambdaFunction.node.addDependency(autoRemediateSqs004Role);
        const autoRemediateVpcDash001LambdaFunction = new lambda.Function(this, "AutoRemediateVPCDash001LambdaFunction", {
            code: lambda.Code.fromAsset(functionsPath),
            handler: "AutoRemediateVPC-001.handler",
            runtime: lambda.Runtime.NODEJS_24_X,
            functionName: "auto-remediate-v1-AutoRemediateVPC-001",
            memorySize: 128,
            timeout: cdk.Duration.seconds(120),
            role: iam.Role.fromRoleArn(this, "AutoRemediateVPCDash001LambdaFunctionRoleRef", autoRemediateVpc001Role.attrArn),
            tracing: lambda.Tracing.ACTIVE,
            logGroup: logs.LogGroup.fromLogGroupName(this, "AutoRemediateVPCDash001LambdaFunctionLogGroupRef", autoRemediateVpcDash001LogGroup.ref),
        });
        cdk.Tags.of(autoRemediateVpcDash001LambdaFunction).add("Name", "Auto Remediate VPC-001");
        cdk.Tags.of(autoRemediateVpcDash001LambdaFunction).add("Owner", "CloudConformity");
        cdk.Tags.of(autoRemediateVpcDash001LambdaFunction).add("Role", "Auto Remediate");
        cdk.Tags.of(autoRemediateVpcDash001LambdaFunction).add("Environment", "Ops");
        autoRemediateVpcDash001LambdaFunction.node.addDependency(autoRemediateVpcDash001LogGroup);
        autoRemediateVpcDash001LambdaFunction.node.addDependency(autoRemediateVpc001Role);
        const keyAlias = new kms.CfnAlias(this, "KeyAlias", {
            aliasName: "alias/SNS-to-SQS-Key-us-west-2",
            targetKeyId: kmsKeySqsQueueFromSns.ref,
        });
        const trustedAdvisorDash003LambdaFunction = new lambda.Function(this, "TrustedAdvisorDash003LambdaFunction", {
            code: lambda.Code.fromAsset(functionsPath),
            handler: "AutoRemediateTrustedAdvisor-003.handler",
            runtime: lambda.Runtime.NODEJS_24_X,
            functionName: "auto-remediate-v1-TrustedAdvisor-003",
            memorySize: 128,
            timeout: cdk.Duration.seconds(120),
            role: iam.Role.fromRoleArn(this, "TrustedAdvisorDash003LambdaFunctionRoleRef", autoRemediateTrustedAdvisor003Role.attrArn),
            tracing: lambda.Tracing.ACTIVE,
            logGroup: logs.LogGroup.fromLogGroupName(this, "TrustedAdvisorDash003LambdaFunctionLogGroupRef", trustedAdvisorDash003LogGroup.ref),
        });
        cdk.Tags.of(trustedAdvisorDash003LambdaFunction).add("Name", "Auto Remediate TrustedAdvisor-003");
        cdk.Tags.of(trustedAdvisorDash003LambdaFunction).add("Owner", "CloudConformity");
        cdk.Tags.of(trustedAdvisorDash003LambdaFunction).add("Role", "Auto Remediate");
        cdk.Tags.of(trustedAdvisorDash003LambdaFunction).add("Environment", "Ops");
        trustedAdvisorDash003LambdaFunction.node.addDependency(trustedAdvisorDash003LogGroup);
        trustedAdvisorDash003LambdaFunction.node.addDependency(autoRemediateTrustedAdvisor003Role);
        const autoRemediateCfmDash005LambdaVersionCpRo8Yp5kRzmomioEFkFlWsYfDc5vDaw1QphAcfI = new lambda.CfnVersion(this, "AutoRemediateCFMDash005LambdaVersionCpRO8Yp5kRzmomioEFkFLWsYfDc5vDaw1QphAcfI", {
            functionName: autoRemediateCfmDash005LambdaFunction.functionName,
            codeSha256: "hGdfixZeJvMfhs+BvHZWhnd3RfPP13V5rZflT89l4NQ=",
        });
        autoRemediateCfmDash005LambdaVersionCpRo8Yp5kRzmomioEFkFlWsYfDc5vDaw1QphAcfI.cfnOptions.deletionPolicy =
            cdk.CfnDeletionPolicy.RETAIN;
        const autoRemediateCtDash001LambdaVersionlJxIWwfO99hRiDjhHcFddTIkZoksCg9I5z90w50sPwE = new lambda.CfnVersion(this, "AutoRemediateCTDash001LambdaVersionlJxIWwfO99HRiDjhHCFddTIkZOKSCg9I5z90w50sPwE", {
            functionName: autoRemediateCtDash001LambdaFunction.functionName,
            codeSha256: "hGdfixZeJvMfhs+BvHZWhnd3RfPP13V5rZflT89l4NQ=",
        });
        autoRemediateCtDash001LambdaVersionlJxIWwfO99hRiDjhHcFddTIkZoksCg9I5z90w50sPwE.cfnOptions.deletionPolicy =
            cdk.CfnDeletionPolicy.RETAIN;
        const autoRemediateCtDash003LambdaVersion6gYqAZxmLimxJwto2n2Bf9Wi5u48smRxM02AuMxG4 = new lambda.CfnVersion(this, "AutoRemediateCTDash003LambdaVersion6gYqAZxmLimxJWTO2N2Bf9WI5u48smRxM02AuMxG4", {
            functionName: autoRemediateCtDash003LambdaFunction.functionName,
            codeSha256: "hGdfixZeJvMfhs+BvHZWhnd3RfPP13V5rZflT89l4NQ=",
        });
        autoRemediateCtDash003LambdaVersion6gYqAZxmLimxJwto2n2Bf9Wi5u48smRxM02AuMxG4.cfnOptions.deletionPolicy =
            cdk.CfnDeletionPolicy.RETAIN;
        const autoRemediateConfigDash001LambdaVersionjL799qjXTnLGeqrb7sP8gh6kSlf45cFXm3UlCaU20k = new lambda.CfnVersion(this, "AutoRemediateConfigDash001LambdaVersionjL799qjXTnLGeqrb7sP8GH6kSlf45cFXm3UlCaU20k", {
            functionName: autoRemediateConfigDash001LambdaFunction.functionName,
            codeSha256: "hGdfixZeJvMfhs+BvHZWhnd3RfPP13V5rZflT89l4NQ=",
        });
        autoRemediateConfigDash001LambdaVersionjL799qjXTnLGeqrb7sP8gh6kSlf45cFXm3UlCaU20k.cfnOptions.deletionPolicy =
            cdk.CfnDeletionPolicy.RETAIN;
        const autoRemediateEbsDash009LambdaVersiongYxhCxyh8a1eSuoERhfdFf14uUwr7cuaCAsCPz7Fsg0 = new lambda.CfnVersion(this, "AutoRemediateEBSDash009LambdaVersiongYxhCXYH8a1eSuoERhfdFF14uUWR7cuaCAsCPz7FSG0", {
            functionName: autoRemediateEbsDash009LambdaFunction.functionName,
            codeSha256: "hGdfixZeJvMfhs+BvHZWhnd3RfPP13V5rZflT89l4NQ=",
        });
        autoRemediateEbsDash009LambdaVersiongYxhCxyh8a1eSuoERhfdFf14uUwr7cuaCAsCPz7Fsg0.cfnOptions.deletionPolicy =
            cdk.CfnDeletionPolicy.RETAIN;
        const autoRemediateEc2Dash002LambdaVersionPLe9B4jgzEt6jdF2osnSrDmUyqrTScuu1p20qkQhNaq = new lambda.CfnVersion(this, "AutoRemediateEC2Dash002LambdaVersionPLe9B4JGZEt6jdF2osnSrDmUyqrTScuu1p20qkQhNAQ", {
            functionName: autoRemediateEc2Dash002LambdaFunction.functionName,
            codeSha256: "hGdfixZeJvMfhs+BvHZWhnd3RfPP13V5rZflT89l4NQ=",
        });
        autoRemediateEc2Dash002LambdaVersionPLe9B4jgzEt6jdF2osnSrDmUyqrTScuu1p20qkQhNaq.cfnOptions.deletionPolicy =
            cdk.CfnDeletionPolicy.RETAIN;
        const autoRemediateEc2Dash003LambdaVersionhbSo9yT72uDvry1sm4ClrogBiStkt9duIsj5FhNc6U = new lambda.CfnVersion(this, "AutoRemediateEC2Dash003LambdaVersionhbSo9yT72uDVRY1SM4ClrogBiSTKT9duIsj5FhNc6U", {
            functionName: autoRemediateEc2Dash003LambdaFunction.functionName,
            codeSha256: "hGdfixZeJvMfhs+BvHZWhnd3RfPP13V5rZflT89l4NQ=",
        });
        autoRemediateEc2Dash003LambdaVersionhbSo9yT72uDvry1sm4ClrogBiStkt9duIsj5FhNc6U.cfnOptions.deletionPolicy =
            cdk.CfnDeletionPolicy.RETAIN;
        const autoRemediateEc2Dash004LambdaVersionZ5zYh3XpGzZa78mz9l8Il1BgYtJuae8IVunrNtGdePo = new lambda.CfnVersion(this, "AutoRemediateEC2Dash004LambdaVersionZ5zYH3XpGzZA78mz9l8IL1BgYTJuae8IVunrNtGDEPo", {
            functionName: autoRemediateEc2Dash004LambdaFunction.functionName,
            codeSha256: "hGdfixZeJvMfhs+BvHZWhnd3RfPP13V5rZflT89l4NQ=",
        });
        autoRemediateEc2Dash004LambdaVersionZ5zYh3XpGzZa78mz9l8Il1BgYtJuae8IVunrNtGdePo.cfnOptions.deletionPolicy =
            cdk.CfnDeletionPolicy.RETAIN;
        const autoRemediateEc2Dash005LambdaVersionvK9875w0hdFxLsHteVgCzIyPf7rhOqea66ww0aBw = new lambda.CfnVersion(this, "AutoRemediateEC2Dash005LambdaVersionvK9875W0hdFxLsHteVGCzIYPf7rhOQEA66ww0aBw", {
            functionName: autoRemediateEc2Dash005LambdaFunction.functionName,
            codeSha256: "hGdfixZeJvMfhs+BvHZWhnd3RfPP13V5rZflT89l4NQ=",
        });
        autoRemediateEc2Dash005LambdaVersionvK9875w0hdFxLsHteVgCzIyPf7rhOqea66ww0aBw.cfnOptions.deletionPolicy =
            cdk.CfnDeletionPolicy.RETAIN;
        const autoRemediateEc2Dash006LambdaVersionG4Gcb91i6od4PWplI2xHZkK1mWpLig5Ncu0ZcZ7qE2q = new lambda.CfnVersion(this, "AutoRemediateEC2Dash006LambdaVersionG4Gcb91i6od4PWplI2xHZkK1mWpLig5NCU0ZcZ7qE2Q", {
            functionName: autoRemediateEc2Dash006LambdaFunction.functionName,
            codeSha256: "hGdfixZeJvMfhs+BvHZWhnd3RfPP13V5rZflT89l4NQ=",
        });
        autoRemediateEc2Dash006LambdaVersionG4Gcb91i6od4PWplI2xHZkK1mWpLig5Ncu0ZcZ7qE2q.cfnOptions.deletionPolicy =
            cdk.CfnDeletionPolicy.RETAIN;
        const autoRemediateEc2Dash008LambdaVersionS68mLHzsdugehAwXmYZtUdg7B1vteyWzta64Uly = new lambda.CfnVersion(this, "AutoRemediateEC2Dash008LambdaVersionS68mLHzsdugehAwXmYZtUdg7B1vteyWzta64ULY", {
            functionName: autoRemediateEc2Dash008LambdaFunction.functionName,
            codeSha256: "hGdfixZeJvMfhs+BvHZWhnd3RfPP13V5rZflT89l4NQ=",
        });
        autoRemediateEc2Dash008LambdaVersionS68mLHzsdugehAwXmYZtUdg7B1vteyWzta64Uly.cfnOptions.deletionPolicy =
            cdk.CfnDeletionPolicy.RETAIN;
        const autoRemediateEc2Dash019LambdaVersionQ2rHKcpe5Yx6MKkNusDa90vZf37JzwBoh7aUPclGwWo = new lambda.CfnVersion(this, "AutoRemediateEC2Dash019LambdaVersionQ2rHKcpe5Yx6MKkNUSDa90vZF37JzwBoh7aUPclGWWo", {
            functionName: autoRemediateEc2Dash019LambdaFunction.functionName,
            codeSha256: "hGdfixZeJvMfhs+BvHZWhnd3RfPP13V5rZflT89l4NQ=",
        });
        autoRemediateEc2Dash019LambdaVersionQ2rHKcpe5Yx6MKkNusDa90vZf37JzwBoh7aUPclGwWo.cfnOptions.deletionPolicy =
            cdk.CfnDeletionPolicy.RETAIN;
        const autoRemediateEc2Dash038LambdaVersionFQtsy4omn5BWurlfNrbY8jptCiXrHq8cU4MqooOEgc = new lambda.CfnVersion(this, "AutoRemediateEC2Dash038LambdaVersionFQtsy4omn5BWurlfNrbY8JPTCiXrHq8cU4MqooOEgc", {
            functionName: autoRemediateEc2Dash038LambdaFunction.functionName,
            codeSha256: "hGdfixZeJvMfhs+BvHZWhnd3RfPP13V5rZflT89l4NQ=",
        });
        autoRemediateEc2Dash038LambdaVersionFQtsy4omn5BWurlfNrbY8jptCiXrHq8cU4MqooOEgc.cfnOptions.deletionPolicy =
            cdk.CfnDeletionPolicy.RETAIN;
        const autoRemediateEc2Dash039LambdaVersionvOmDFrEjZotx6bwP9lNlua15nqTrWdmpOcS7fQp7e = new lambda.CfnVersion(this, "AutoRemediateEC2Dash039LambdaVersionvOmDFrEjZOTX6bwP9LNlua15nqTRWdmpOcS7fQP7E", {
            functionName: autoRemediateEc2Dash039LambdaFunction.functionName,
            codeSha256: "hGdfixZeJvMfhs+BvHZWhnd3RfPP13V5rZflT89l4NQ=",
        });
        autoRemediateEc2Dash039LambdaVersionvOmDFrEjZotx6bwP9lNlua15nqTrWdmpOcS7fQp7e.cfnOptions.deletionPolicy =
            cdk.CfnDeletionPolicy.RETAIN;
        const autoRemediateEc2Dash040LambdaVersionjCtEdKdDot6VnAdDuvMrNvYmjs3oIqXbS8kRw4K5nYs = new lambda.CfnVersion(this, "AutoRemediateEC2Dash040LambdaVersionjCtEdKdDOT6VnADDuvMRNvYMJS3OIqXbS8KRw4K5NYs", {
            functionName: autoRemediateEc2Dash040LambdaFunction.functionName,
            codeSha256: "hGdfixZeJvMfhs+BvHZWhnd3RfPP13V5rZflT89l4NQ=",
        });
        autoRemediateEc2Dash040LambdaVersionjCtEdKdDot6VnAdDuvMrNvYmjs3oIqXbS8kRw4K5nYs.cfnOptions.deletionPolicy =
            cdk.CfnDeletionPolicy.RETAIN;
        const autoRemediateEc2Dash043LambdaVersionhufyIy4FxtgRlXxm5eh0x1zTmvPiNgqWhtjwxbL7rCs = new lambda.CfnVersion(this, "AutoRemediateEC2Dash043LambdaVersionhufyIY4FxtgRlXxm5eh0x1zTmvPiNGQWhtjwxbL7RCs", {
            functionName: autoRemediateEc2Dash043LambdaFunction.functionName,
            codeSha256: "hGdfixZeJvMfhs+BvHZWhnd3RfPP13V5rZflT89l4NQ=",
        });
        autoRemediateEc2Dash043LambdaVersionhufyIy4FxtgRlXxm5eh0x1zTmvPiNgqWhtjwxbL7rCs.cfnOptions.deletionPolicy =
            cdk.CfnDeletionPolicy.RETAIN;
        const autoRemediateEc2Dash045LambdaVersioniKBcVkHt3fqtP63ElfJ9z6vZ6bUeWa0OmDqTiUxRe = new lambda.CfnVersion(this, "AutoRemediateEC2Dash045LambdaVersioniKBcVkHt3fqtP63ElfJ9Z6vZ6BUeWa0OMDqTIUxRE", {
            functionName: autoRemediateEc2Dash045LambdaFunction.functionName,
            codeSha256: "hGdfixZeJvMfhs+BvHZWhnd3RfPP13V5rZflT89l4NQ=",
        });
        autoRemediateEc2Dash045LambdaVersioniKBcVkHt3fqtP63ElfJ9z6vZ6bUeWa0OmDqTiUxRe.cfnOptions.deletionPolicy =
            cdk.CfnDeletionPolicy.RETAIN;
        const autoRemediateGdDash001LambdaVersionk7n3MpGk8FgdGsEvJyH5c0C7tKe9fSj7ygjYy6tsX8 = new lambda.CfnVersion(this, "AutoRemediateGDDash001LambdaVersionk7n3MpGk8FGDGsEVJyH5c0C7tKE9fSj7ygjYy6tsX8", {
            functionName: autoRemediateGdDash001LambdaFunction.functionName,
            codeSha256: "hGdfixZeJvMfhs+BvHZWhnd3RfPP13V5rZflT89l4NQ=",
        });
        autoRemediateGdDash001LambdaVersionk7n3MpGk8FgdGsEvJyH5c0C7tKe9fSj7ygjYy6tsX8.cfnOptions.deletionPolicy =
            cdk.CfnDeletionPolicy.RETAIN;
        const autoRemediateIamDash001LambdaVersionLectZtpIrwGhpd05C1hGTrlWsGpa2UWlUZqp7L5Syo = new lambda.CfnVersion(this, "AutoRemediateIAMDash001LambdaVersionLectZtpIRWGhpd05C1hGTrlWSGpa2UWlUZqp7L5Syo", {
            functionName: autoRemediateIamDash001LambdaFunction.functionName,
            codeSha256: "hGdfixZeJvMfhs+BvHZWhnd3RfPP13V5rZflT89l4NQ=",
        });
        autoRemediateIamDash001LambdaVersionLectZtpIrwGhpd05C1hGTrlWsGpa2UWlUZqp7L5Syo.cfnOptions.deletionPolicy =
            cdk.CfnDeletionPolicy.RETAIN;
        const autoRemediateIamDash029LambdaVersionVYgynpuloWlLyahfvClCcz8hhpXcOcIc9ZryXsJi7w8 = new lambda.CfnVersion(this, "AutoRemediateIAMDash029LambdaVersionVYgynpuloWlLYAHFVClCcz8hhpXCOcIc9ZRYXsJI7W8", {
            functionName: autoRemediateIamDash029LambdaFunction.functionName,
            codeSha256: "hGdfixZeJvMfhs+BvHZWhnd3RfPP13V5rZflT89l4NQ=",
        });
        autoRemediateIamDash029LambdaVersionVYgynpuloWlLyahfvClCcz8hhpXcOcIc9ZryXsJi7w8.cfnOptions.deletionPolicy =
            cdk.CfnDeletionPolicy.RETAIN;
        const autoRemediateIamDash038LambdaVersion5coRmW2CpQuefrUtqjaWehf0sMmo06FqJp4yUmLq8 = new lambda.CfnVersion(this, "AutoRemediateIAMDash038LambdaVersion5coRmW2CpQUEFRUtqjaWehf0sMMO06FqJP4yUMLq8", {
            functionName: autoRemediateIamDash038LambdaFunction.functionName,
            codeSha256: "hGdfixZeJvMfhs+BvHZWhnd3RfPP13V5rZflT89l4NQ=",
        });
        autoRemediateIamDash038LambdaVersion5coRmW2CpQuefrUtqjaWehf0sMmo06FqJp4yUmLq8.cfnOptions.deletionPolicy =
            cdk.CfnDeletionPolicy.RETAIN;
        const autoRemediateKmsDash002LambdaVersionP6oqsDktA5e0pQkiZ2YzuWkyJ7aB7irDsi6Ate8dl20 = new lambda.CfnVersion(this, "AutoRemediateKMSDash002LambdaVersionP6OQSDktA5e0pQkiZ2YzuWkyJ7aB7irDSI6Ate8dl20", {
            functionName: autoRemediateKmsDash002LambdaFunction.functionName,
            codeSha256: "hGdfixZeJvMfhs+BvHZWhnd3RfPP13V5rZflT89l4NQ=",
        });
        autoRemediateKmsDash002LambdaVersionP6oqsDktA5e0pQkiZ2YzuWkyJ7aB7irDsi6Ate8dl20.cfnOptions.deletionPolicy =
            cdk.CfnDeletionPolicy.RETAIN;
        const autoRemediateKmsDash004LambdaVersionngqq46Zp4FLjataYzxu6XxYWm40Kg2wPcDfn1eBoAgg = new lambda.CfnVersion(this, "AutoRemediateKMSDash004LambdaVersionngqq46Zp4FLjataYzxu6XxYWm40KG2WPcDFN1EBoAgg", {
            functionName: autoRemediateKmsDash004LambdaFunction.functionName,
            codeSha256: "hGdfixZeJvMfhs+BvHZWhnd3RfPP13V5rZflT89l4NQ=",
        });
        autoRemediateKmsDash004LambdaVersionngqq46Zp4FLjataYzxu6XxYWm40Kg2wPcDfn1eBoAgg.cfnOptions.deletionPolicy =
            cdk.CfnDeletionPolicy.RETAIN;
        const autoRemediateKinesisDash001LambdaVersionKLqwg2nHj0MsnipDnAaKalNfL0ZymvDnBhnKHp04 = new lambda.CfnVersion(this, "AutoRemediateKinesisDash001LambdaVersionKLqwg2nHJ0MsnipDNAaKALNfL0ZymvDnBhnKHp04", {
            functionName: autoRemediateKinesisDash001LambdaFunction.functionName,
            codeSha256: "hGdfixZeJvMfhs+BvHZWhnd3RfPP13V5rZflT89l4NQ=",
        });
        autoRemediateKinesisDash001LambdaVersionKLqwg2nHj0MsnipDnAaKalNfL0ZymvDnBhnKHp04.cfnOptions.deletionPolicy =
            cdk.CfnDeletionPolicy.RETAIN;
        const autoRemediateLambdaDash003LambdaVersionIr15Ts65ImxYZb3yMin3Zdrq5xHqC0lSlgfcGSfU = new lambda.CfnVersion(this, "AutoRemediateLambdaDash003LambdaVersionIr15Ts65ImxYZb3yMIN3Zdrq5xHqC0lSlgfcGSfU", {
            functionName: autoRemediateLambdaDash003LambdaFunction.functionName,
            codeSha256: "hGdfixZeJvMfhs+BvHZWhnd3RfPP13V5rZflT89l4NQ=",
        });
        autoRemediateLambdaDash003LambdaVersionIr15Ts65ImxYZb3yMin3Zdrq5xHqC0lSlgfcGSfU.cfnOptions.deletionPolicy =
            cdk.CfnDeletionPolicy.RETAIN;
        const autoRemediateOrganizationsDash002LambdaVersionVbw8q6niLGbdy8PDzJz2mfvWyBe5dCrUrzZe7V2gfk = new lambda.CfnVersion(this, "AutoRemediateOrganizationsDash002LambdaVersionVBW8Q6niLGbdy8PDzJZ2MFVWyBE5DCrURZZe7V2gfk", {
            functionName: autoRemediateOrganizationsDash002LambdaFunction.functionName,
            codeSha256: "hGdfixZeJvMfhs+BvHZWhnd3RfPP13V5rZflT89l4NQ=",
        });
        autoRemediateOrganizationsDash002LambdaVersionVbw8q6niLGbdy8PDzJz2mfvWyBe5dCrUrzZe7V2gfk.cfnOptions.deletionPolicy =
            cdk.CfnDeletionPolicy.RETAIN;
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
        const autoRemediateRdsDash006LambdaVersionOXj4KdOXdDoPJgOtRcpdWmGUhK88cwYzYkMmmrdVas = new lambda.CfnVersion(this, "AutoRemediateRDSDash006LambdaVersionOXj4KdOXdDoPJgOtRCPDWmGUhK88cwYZYkMMMRDVas", {
            functionName: autoRemediateRdsDash006LambdaFunction.functionName,
            codeSha256: "hGdfixZeJvMfhs+BvHZWhnd3RfPP13V5rZflT89l4NQ=",
        });
        autoRemediateRdsDash006LambdaVersionOXj4KdOXdDoPJgOtRcpdWmGUhK88cwYzYkMmmrdVas.cfnOptions.deletionPolicy =
            cdk.CfnDeletionPolicy.RETAIN;
        const autoRemediateRdsDash008LambdaVersionfefNt3DwsIu7Yysk29l66lMptq8AtfvUcUhUmIhGc = new lambda.CfnVersion(this, "AutoRemediateRDSDash008LambdaVersionfefNt3DwsIu7Yysk29l66lMPTQ8AtfvUCUhUmIHGc", {
            functionName: autoRemediateRdsDash008LambdaFunction.functionName,
            codeSha256: "hGdfixZeJvMfhs+BvHZWhnd3RfPP13V5rZflT89l4NQ=",
        });
        autoRemediateRdsDash008LambdaVersionfefNt3DwsIu7Yysk29l66lMptq8AtfvUcUhUmIhGc.cfnOptions.deletionPolicy =
            cdk.CfnDeletionPolicy.RETAIN;
        const autoRemediateRdsDash023LambdaVersion5liQr9NKohYwJdCmB8uWrJxnfvru4kRyrBm5Um0yOc = new lambda.CfnVersion(this, "AutoRemediateRDSDash023LambdaVersion5liQr9NKohYWJdCmB8uWrJxnfvru4kRYRBm5UM0YOc", {
            functionName: autoRemediateRdsDash023LambdaFunction.functionName,
            codeSha256: "hGdfixZeJvMfhs+BvHZWhnd3RfPP13V5rZflT89l4NQ=",
        });
        autoRemediateRdsDash023LambdaVersion5liQr9NKohYwJdCmB8uWrJxnfvru4kRyrBm5Um0yOc.cfnOptions.deletionPolicy =
            cdk.CfnDeletionPolicy.RETAIN;
        const autoRemediateRsDash001LambdaVersionBtCYxyL5Yak4J83tH11o8wnVruuz55XhbMuyOiLrc = new lambda.CfnVersion(this, "AutoRemediateRSDash001LambdaVersionBtCYxyL5Yak4J83tH11o8wnVruuz55XhbMUYOiLrc", {
            functionName: autoRemediateRsDash001LambdaFunction.functionName,
            codeSha256: "hGdfixZeJvMfhs+BvHZWhnd3RfPP13V5rZflT89l4NQ=",
        });
        autoRemediateRsDash001LambdaVersionBtCYxyL5Yak4J83tH11o8wnVruuz55XhbMuyOiLrc.cfnOptions.deletionPolicy =
            cdk.CfnDeletionPolicy.RETAIN;
        const autoRemediateRsDash019LambdaVersionKfu2nvwiUgtccd55c2h1Jjk3qFhw64tkPwabKe02sM = new lambda.CfnVersion(this, "AutoRemediateRSDash019LambdaVersionKfu2nvwiUGTCCD55C2h1JJK3qFhw64tkPwabKe02sM", {
            functionName: autoRemediateRsDash019LambdaFunction.functionName,
            codeSha256: "hGdfixZeJvMfhs+BvHZWhnd3RfPP13V5rZflT89l4NQ=",
        });
        autoRemediateRsDash019LambdaVersionKfu2nvwiUgtccd55c2h1Jjk3qFhw64tkPwabKe02sM.cfnOptions.deletionPolicy =
            cdk.CfnDeletionPolicy.RETAIN;
        const autoRemediateRsDash023LambdaVersion8xEPq4XBeL7f9H9xn6jWFfppKv6kq9cTzk3bxw7AexA = new lambda.CfnVersion(this, "AutoRemediateRSDash023LambdaVersion8xEPq4XBeL7f9H9xn6jWFfppKV6KQ9cTZK3BXW7AexA", {
            functionName: autoRemediateRsDash023LambdaFunction.functionName,
            codeSha256: "hGdfixZeJvMfhs+BvHZWhnd3RfPP13V5rZflT89l4NQ=",
        });
        autoRemediateRsDash023LambdaVersion8xEPq4XBeL7f9H9xn6jWFfppKv6kq9cTzk3bxw7AexA.cfnOptions.deletionPolicy =
            cdk.CfnDeletionPolicy.RETAIN;
        const autoRemediateS3Dash001LambdaVersionSIlNPvV8gXa6Yjm11u9nIiSBveAlkuohkQdBFoHcEo = new lambda.CfnVersion(this, "AutoRemediateS3Dash001LambdaVersionSIlNPvV8GXa6YJM11U9NIiSBveALKUOHKQdBFoHcEo", {
            functionName: autoRemediateS3Dash001LambdaFunction.functionName,
            codeSha256: "hGdfixZeJvMfhs+BvHZWhnd3RfPP13V5rZflT89l4NQ=",
        });
        autoRemediateS3Dash001LambdaVersionSIlNPvV8gXa6Yjm11u9nIiSBveAlkuohkQdBFoHcEo.cfnOptions.deletionPolicy =
            cdk.CfnDeletionPolicy.RETAIN;
        const autoRemediateS3Dash002LambdaVersionoZtUqG5puhWrAxu2AweRAcJftexuDpF3wwwUrE3rE = new lambda.CfnVersion(this, "AutoRemediateS3Dash002LambdaVersionoZtUqG5puhWrAxu2AweRAcJFTEXUDpF3WWWUrE3rE", {
            functionName: autoRemediateS3Dash002LambdaFunction.functionName,
            codeSha256: "hGdfixZeJvMfhs+BvHZWhnd3RfPP13V5rZflT89l4NQ=",
        });
        autoRemediateS3Dash002LambdaVersionoZtUqG5puhWrAxu2AweRAcJftexuDpF3wwwUrE3rE.cfnOptions.deletionPolicy =
            cdk.CfnDeletionPolicy.RETAIN;
        const autoRemediateS3Dash003LambdaVersionLet5f4ycG0UzsTzXy3oT0b2nKsJkruoo8bZeWokMd8 = new lambda.CfnVersion(this, "AutoRemediateS3Dash003LambdaVersionLET5F4ycG0UzsTzXY3oT0b2nKsJkruoo8bZEWokMD8", {
            functionName: autoRemediateS3Dash003LambdaFunction.functionName,
            codeSha256: "hGdfixZeJvMfhs+BvHZWhnd3RfPP13V5rZflT89l4NQ=",
        });
        autoRemediateS3Dash003LambdaVersionLet5f4ycG0UzsTzXy3oT0b2nKsJkruoo8bZeWokMd8.cfnOptions.deletionPolicy =
            cdk.CfnDeletionPolicy.RETAIN;
        const autoRemediateS3Dash004LambdaVersiondU713a2wMCiJttkwNvlyOdIt6FobmL3tpAdyNkma = new lambda.CfnVersion(this, "AutoRemediateS3Dash004LambdaVersiondU713a2wMCiJTTKWNvlyOdIT6FobmL3tpAdyNKMA", {
            functionName: autoRemediateS3Dash004LambdaFunction.functionName,
            codeSha256: "hGdfixZeJvMfhs+BvHZWhnd3RfPP13V5rZflT89l4NQ=",
        });
        autoRemediateS3Dash004LambdaVersiondU713a2wMCiJttkwNvlyOdIt6FobmL3tpAdyNkma.cfnOptions.deletionPolicy =
            cdk.CfnDeletionPolicy.RETAIN;
        const autoRemediateS3Dash005LambdaVersionCxiXtPwYeOuEp9s74QkIddXAeVm7ZbTqPypyYhIk = new lambda.CfnVersion(this, "AutoRemediateS3Dash005LambdaVersionCxiXTPwYeOUEp9s74QkIddXAeVm7ZbTqPYPYYhIk", {
            functionName: autoRemediateS3Dash005LambdaFunction.functionName,
            codeSha256: "hGdfixZeJvMfhs+BvHZWhnd3RfPP13V5rZflT89l4NQ=",
        });
        autoRemediateS3Dash005LambdaVersionCxiXtPwYeOuEp9s74QkIddXAeVm7ZbTqPypyYhIk.cfnOptions.deletionPolicy =
            cdk.CfnDeletionPolicy.RETAIN;
        const autoRemediateS3Dash006LambdaVersion64xviViXpYbcxQ8qx9p1zbWi56h8CpAtWi1tMvPtAcc = new lambda.CfnVersion(this, "AutoRemediateS3Dash006LambdaVersion64xviViXPYbcxQ8QX9P1zbWI56h8CPAtWI1TMvPTAcc", {
            functionName: autoRemediateS3Dash006LambdaFunction.functionName,
            codeSha256: "hGdfixZeJvMfhs+BvHZWhnd3RfPP13V5rZflT89l4NQ=",
        });
        autoRemediateS3Dash006LambdaVersion64xviViXpYbcxQ8qx9p1zbWi56h8CpAtWi1tMvPtAcc.cfnOptions.deletionPolicy =
            cdk.CfnDeletionPolicy.RETAIN;
        const autoRemediateS3Dash007LambdaVersion5Ig5DOrwZyd3aXumvQtatKaQzWq8sa3AxC0aJkclHg = new lambda.CfnVersion(this, "AutoRemediateS3Dash007LambdaVersion5Ig5DOrwZYD3aXumvQtatKAQzWQ8sa3AxC0AJkclHg", {
            functionName: autoRemediateS3Dash007LambdaFunction.functionName,
            codeSha256: "hGdfixZeJvMfhs+BvHZWhnd3RfPP13V5rZflT89l4NQ=",
        });
        autoRemediateS3Dash007LambdaVersion5Ig5DOrwZyd3aXumvQtatKaQzWq8sa3AxC0aJkclHg.cfnOptions.deletionPolicy =
            cdk.CfnDeletionPolicy.RETAIN;
        const autoRemediateS3Dash008LambdaVersionvFa0r0zTyQxybpQFidl45vEfnBgtkGLb5lNYaN4Xk0o = new lambda.CfnVersion(this, "AutoRemediateS3Dash008LambdaVersionvFa0r0zTYQxybpQFidl45vEfnBgtkGLb5lNYaN4Xk0o", {
            functionName: autoRemediateS3Dash008LambdaFunction.functionName,
            codeSha256: "hGdfixZeJvMfhs+BvHZWhnd3RfPP13V5rZflT89l4NQ=",
        });
        autoRemediateS3Dash008LambdaVersionvFa0r0zTyQxybpQFidl45vEfnBgtkGLb5lNYaN4Xk0o.cfnOptions.deletionPolicy =
            cdk.CfnDeletionPolicy.RETAIN;
        const autoRemediateS3Dash009LambdaVersionUreqiQerFjgrNXx3Z2t5FdWc7BaJxfTiD2n7DLsApg = new lambda.CfnVersion(this, "AutoRemediateS3Dash009LambdaVersionUREQIQerFjgrNXx3Z2T5FdWC7BaJXFTiD2n7DLsApg", {
            functionName: autoRemediateS3Dash009LambdaFunction.functionName,
            codeSha256: "hGdfixZeJvMfhs+BvHZWhnd3RfPP13V5rZflT89l4NQ=",
        });
        autoRemediateS3Dash009LambdaVersionUreqiQerFjgrNXx3Z2t5FdWc7BaJxfTiD2n7DLsApg.cfnOptions.deletionPolicy =
            cdk.CfnDeletionPolicy.RETAIN;
        const autoRemediateS3Dash010LambdaVersionrQkfNdYZicistYVc0w2XlfLjSlYqofcfAta7fTn5E = new lambda.CfnVersion(this, "AutoRemediateS3Dash010LambdaVersionrQKFNdYZicistYVc0w2XlfLjSlYqofcfAta7fTn5E", {
            functionName: autoRemediateS3Dash010LambdaFunction.functionName,
            codeSha256: "hGdfixZeJvMfhs+BvHZWhnd3RfPP13V5rZflT89l4NQ=",
        });
        autoRemediateS3Dash010LambdaVersionrQkfNdYZicistYVc0w2XlfLjSlYqofcfAta7fTn5E.cfnOptions.deletionPolicy =
            cdk.CfnDeletionPolicy.RETAIN;
        const autoRemediateS3Dash012LambdaVersionCyQhS2iGZa4ndtBeOuLOgViM8858fVwHwPd1B9abs = new lambda.CfnVersion(this, "AutoRemediateS3Dash012LambdaVersionCYQhS2iGZa4ndtBEOuLOgViM8858FVwHWPd1B9abs", {
            functionName: autoRemediateS3Dash012LambdaFunction.functionName,
            codeSha256: "hGdfixZeJvMfhs+BvHZWhnd3RfPP13V5rZflT89l4NQ=",
        });
        autoRemediateS3Dash012LambdaVersionCyQhS2iGZa4ndtBeOuLOgViM8858fVwHwPd1B9abs.cfnOptions.deletionPolicy =
            cdk.CfnDeletionPolicy.RETAIN;
        const autoRemediateS3Dash014LambdaVersionQpkXyGme21lb6uo8U3iU3y5f8Awp3ug2fx8hbFlhVmi = new lambda.CfnVersion(this, "AutoRemediateS3Dash014LambdaVersionQpkXyGme21lb6uo8U3iU3Y5f8Awp3ug2fx8hbFlhVMI", {
            functionName: autoRemediateS3Dash014LambdaFunction.functionName,
            codeSha256: "hGdfixZeJvMfhs+BvHZWhnd3RfPP13V5rZflT89l4NQ=",
        });
        autoRemediateS3Dash014LambdaVersionQpkXyGme21lb6uo8U3iU3y5f8Awp3ug2fx8hbFlhVmi.cfnOptions.deletionPolicy =
            cdk.CfnDeletionPolicy.RETAIN;
        const autoRemediateS3Dash016LambdaVersionJCn2df5rPxgY3DqCqKsLhbAssroCous4HaDbObp50 = new lambda.CfnVersion(this, "AutoRemediateS3Dash016LambdaVersionJCn2df5rPxgY3DqCQKsLhbAssroCOUS4HaDbOBP50", {
            functionName: autoRemediateS3Dash016LambdaFunction.functionName,
            codeSha256: "hGdfixZeJvMfhs+BvHZWhnd3RfPP13V5rZflT89l4NQ=",
        });
        autoRemediateS3Dash016LambdaVersionJCn2df5rPxgY3DqCqKsLhbAssroCous4HaDbObp50.cfnOptions.deletionPolicy =
            cdk.CfnDeletionPolicy.RETAIN;
        const autoRemediateSqsDash004LambdaVersion1NeuFovVGhyb0G1dpayJhkGhxjrr0tyn11VaSjXolks = new lambda.CfnVersion(this, "AutoRemediateSQSDash004LambdaVersion1NeuFovVGhyb0G1DPAYJhkGHXJRR0TYN11VaSJXolks", {
            functionName: autoRemediateSqsDash004LambdaFunction.functionName,
            codeSha256: "hGdfixZeJvMfhs+BvHZWhnd3RfPP13V5rZflT89l4NQ=",
        });
        autoRemediateSqsDash004LambdaVersion1NeuFovVGhyb0G1dpayJhkGhxjrr0tyn11VaSjXolks.cfnOptions.deletionPolicy =
            cdk.CfnDeletionPolicy.RETAIN;
        const autoRemediateVpcDash001LambdaVersionl176RZnNilnMcsMb6d84th2QbyInXt4RQdEAeMNkbn0 = new lambda.CfnVersion(this, "AutoRemediateVPCDash001LambdaVersionl176RZnNILNMcsMB6d84th2QbyINXt4RQdEAeMNkbn0", {
            functionName: autoRemediateVpcDash001LambdaFunction.functionName,
            codeSha256: "hGdfixZeJvMfhs+BvHZWhnd3RfPP13V5rZflT89l4NQ=",
        });
        autoRemediateVpcDash001LambdaVersionl176RZnNilnMcsMb6d84th2QbyInXt4RQdEAeMNkbn0.cfnOptions.deletionPolicy =
            cdk.CfnDeletionPolicy.RETAIN;
        const trustedAdvisorDash003LambdaVersiondT3ccpZv2BkoGmLOf9nkq9P7zdEzOlbx8Ts9IuReQ = new lambda.CfnVersion(this, "TrustedAdvisorDash003LambdaVersiondT3ccpZv2BKOGmLOf9nkq9P7ZDEzOLBX8Ts9IuReQ", {
            functionName: trustedAdvisorDash003LambdaFunction.functionName,
            codeSha256: "hGdfixZeJvMfhs+BvHZWhnd3RfPP13V5rZflT89l4NQ=",
        });
        trustedAdvisorDash003LambdaVersiondT3ccpZv2BkoGmLOf9nkq9P7zdEzOlbx8Ts9IuReQ.cfnOptions.deletionPolicy =
            cdk.CfnDeletionPolicy.RETAIN;
        const autoRemediateOrchestratorRole = new iam.CfnRole(this, "AutoRemediateOrchestratorRole", {
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
        });
        const autoRemediateQueueSubscription = new sns.CfnSubscription(this, "AutoRemediateQueueSubscription", {
            topicArn: snsTopicAutoRemediate.ref,
            endpoint: autoRemediateQueue.attrArn,
            protocol: "sqs",
            rawMessageDelivery: true,
        });
        const snsToAutoRemediateQueueSqsPolicy = new sqs.CfnQueuePolicy(this, "SNSToAutoRemediateQueueSqsPolicy", {
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
        });
        const autoRemediateOrchestratorLambdaFunction = new lambda.Function(this, "AutoRemediateOrchestratorLambdaFunction", {
            code: lambda.Code.fromAsset(functionsPath),
            handler: "AutoRemediateOrchestrator.handler",
            runtime: lambda.Runtime.NODEJS_24_X,
            functionName: "auto-remediate-v1-AutoRemediateOrchestrator",
            memorySize: 128,
            timeout: cdk.Duration.seconds(10),
            role: iam.Role.fromRoleArn(this, "AutoRemediateOrchestratorLambdaFunctionRoleRef", autoRemediateOrchestratorRole.attrArn),
            tracing: lambda.Tracing.ACTIVE,
            logGroup: logs.LogGroup.fromLogGroupName(this, "AutoRemediateOrchestratorLambdaFunctionLogGroupRef", autoRemediateOrchestratorLogGroup.ref),
        });
        cdk.Tags.of(autoRemediateOrchestratorLambdaFunction).add("Name", "Auto Remediate Orchestrator");
        cdk.Tags.of(autoRemediateOrchestratorLambdaFunction).add("Owner", "CloudConformity");
        cdk.Tags.of(autoRemediateOrchestratorLambdaFunction).add("Role", "Auto Remediate");
        cdk.Tags.of(autoRemediateOrchestratorLambdaFunction).add("Environment", "Ops");
        autoRemediateOrchestratorLambdaFunction.node.addDependency(autoRemediateOrchestratorLogGroup);
        autoRemediateOrchestratorLambdaFunction.node.addDependency(autoRemediateOrchestratorRole);
        const autoRemediateOrchestratorEventSourceMappingSqsAutoRemediateQueue = new lambda.CfnEventSourceMapping(this, "AutoRemediateOrchestratorEventSourceMappingSQSAutoRemediateQueue", {
            batchSize: 1,
            eventSourceArn: autoRemediateQueue.attrArn,
            functionName: autoRemediateOrchestratorLambdaFunction.functionArn,
            enabled: true,
        });
        autoRemediateOrchestratorEventSourceMappingSqsAutoRemediateQueue.addDependency(autoRemediateOrchestratorRole);
        const autoRemediateOrchestratorLambdaVersion2dHiv5vUuEs55jxUlsj4tKVyeHkyEv0ex88YiUbI = new lambda.CfnVersion(this, "AutoRemediateOrchestratorLambdaVersion2dHIV5vUuES55jxUlsj4tKVyeHkyEv0ex88YIUbI", {
            functionName: autoRemediateOrchestratorLambdaFunction.functionName,
            codeSha256: "hGdfixZeJvMfhs+BvHZWhnd3RfPP13V5rZflT89l4NQ=",
        });
        autoRemediateOrchestratorLambdaVersion2dHiv5vUuEs55jxUlsj4tKVyeHkyEv0ex88YiUbI.cfnOptions.deletionPolicy =
            cdk.CfnDeletionPolicy.RETAIN;
        // Outputs
        this.autoRemediateOrchestratorLambdaFunctionQualifiedArn =
            autoRemediateOrchestratorLambdaVersion2dHiv5vUuEs55jxUlsj4tKVyeHkyEv0ex88YiUbI.ref;
        new cdk.CfnOutput(this, "CfnOutputAutoRemediateOrchestratorLambdaFunctionQualifiedArn", {
            key: "AutoRemediateOrchestratorLambdaFunctionQualifiedArn",
            description: "Current Lambda function version",
            exportName: "sls-auto-remediate-v1-AutoRemediateOrchestratorLambdaFunctionQualifiedArn",
            value: this.autoRemediateOrchestratorLambdaFunctionQualifiedArn.toString(),
        });
        this.autoRemediateS3Dash016LambdaFunctionQualifiedArn =
            autoRemediateS3Dash016LambdaVersionJCn2df5rPxgY3DqCqKsLhbAssroCous4HaDbObp50.ref;
        new cdk.CfnOutput(this, "CfnOutputAutoRemediateS3Dash016LambdaFunctionQualifiedArn", {
            key: "AutoRemediateS3Dash016LambdaFunctionQualifiedArn",
            description: "Current Lambda function version",
            exportName: "sls-auto-remediate-v1-AutoRemediateS3Dash016LambdaFunctionQualifiedArn",
            value: this.autoRemediateS3Dash016LambdaFunctionQualifiedArn.toString(),
        });
        this.autoRemediateIamDash001LambdaFunctionQualifiedArn =
            autoRemediateIamDash001LambdaVersionLectZtpIrwGhpd05C1hGTrlWsGpa2UWlUZqp7L5Syo.ref;
        new cdk.CfnOutput(this, "CfnOutputAutoRemediateIAMDash001LambdaFunctionQualifiedArn", {
            key: "AutoRemediateIAMDash001LambdaFunctionQualifiedArn",
            description: "Current Lambda function version",
            exportName: "sls-auto-remediate-v1-AutoRemediateIAMDash001LambdaFunctionQualifiedArn",
            value: this.autoRemediateIamDash001LambdaFunctionQualifiedArn.toString(),
        });
        this.autoRemediateIamDash029LambdaFunctionQualifiedArn =
            autoRemediateIamDash029LambdaVersionVYgynpuloWlLyahfvClCcz8hhpXcOcIc9ZryXsJi7w8.ref;
        new cdk.CfnOutput(this, "CfnOutputAutoRemediateIAMDash029LambdaFunctionQualifiedArn", {
            key: "AutoRemediateIAMDash029LambdaFunctionQualifiedArn",
            description: "Current Lambda function version",
            exportName: "sls-auto-remediate-v1-AutoRemediateIAMDash029LambdaFunctionQualifiedArn",
            value: this.autoRemediateIamDash029LambdaFunctionQualifiedArn.toString(),
        });
        this.autoRemediateCtDash001LambdaFunctionQualifiedArn =
            autoRemediateCtDash001LambdaVersionlJxIWwfO99hRiDjhHcFddTIkZoksCg9I5z90w50sPwE.ref;
        new cdk.CfnOutput(this, "CfnOutputAutoRemediateCTDash001LambdaFunctionQualifiedArn", {
            key: "AutoRemediateCTDash001LambdaFunctionQualifiedArn",
            description: "Current Lambda function version",
            exportName: "sls-auto-remediate-v1-AutoRemediateCTDash001LambdaFunctionQualifiedArn",
            value: this.autoRemediateCtDash001LambdaFunctionQualifiedArn.toString(),
        });
        this.autoRemediateLambdaDash003LambdaFunctionQualifiedArn =
            autoRemediateLambdaDash003LambdaVersionIr15Ts65ImxYZb3yMin3Zdrq5xHqC0lSlgfcGSfU.ref;
        new cdk.CfnOutput(this, "CfnOutputAutoRemediateLambdaDash003LambdaFunctionQualifiedArn", {
            key: "AutoRemediateLambdaDash003LambdaFunctionQualifiedArn",
            description: "Current Lambda function version",
            exportName: "sls-auto-remediate-v1-AutoRemediateLambdaDash003LambdaFunctionQualifiedArn",
            value: this.autoRemediateLambdaDash003LambdaFunctionQualifiedArn.toString(),
        });
        this.autoRemediateS3Dash001LambdaFunctionQualifiedArn =
            autoRemediateS3Dash001LambdaVersionSIlNPvV8gXa6Yjm11u9nIiSBveAlkuohkQdBFoHcEo.ref;
        new cdk.CfnOutput(this, "CfnOutputAutoRemediateS3Dash001LambdaFunctionQualifiedArn", {
            key: "AutoRemediateS3Dash001LambdaFunctionQualifiedArn",
            description: "Current Lambda function version",
            exportName: "sls-auto-remediate-v1-AutoRemediateS3Dash001LambdaFunctionQualifiedArn",
            value: this.autoRemediateS3Dash001LambdaFunctionQualifiedArn.toString(),
        });
        this.autoRemediateS3Dash002LambdaFunctionQualifiedArn =
            autoRemediateS3Dash002LambdaVersionoZtUqG5puhWrAxu2AweRAcJftexuDpF3wwwUrE3rE.ref;
        new cdk.CfnOutput(this, "CfnOutputAutoRemediateS3Dash002LambdaFunctionQualifiedArn", {
            key: "AutoRemediateS3Dash002LambdaFunctionQualifiedArn",
            description: "Current Lambda function version",
            exportName: "sls-auto-remediate-v1-AutoRemediateS3Dash002LambdaFunctionQualifiedArn",
            value: this.autoRemediateS3Dash002LambdaFunctionQualifiedArn.toString(),
        });
        this.autoRemediateIamDash038LambdaFunctionQualifiedArn =
            autoRemediateIamDash038LambdaVersion5coRmW2CpQuefrUtqjaWehf0sMmo06FqJp4yUmLq8.ref;
        new cdk.CfnOutput(this, "CfnOutputAutoRemediateIAMDash038LambdaFunctionQualifiedArn", {
            key: "AutoRemediateIAMDash038LambdaFunctionQualifiedArn",
            description: "Current Lambda function version",
            exportName: "sls-auto-remediate-v1-AutoRemediateIAMDash038LambdaFunctionQualifiedArn",
            value: this.autoRemediateIamDash038LambdaFunctionQualifiedArn.toString(),
        });
        this.autoRemediateS3Dash014LambdaFunctionQualifiedArn =
            autoRemediateS3Dash014LambdaVersionQpkXyGme21lb6uo8U3iU3y5f8Awp3ug2fx8hbFlhVmi.ref;
        new cdk.CfnOutput(this, "CfnOutputAutoRemediateS3Dash014LambdaFunctionQualifiedArn", {
            key: "AutoRemediateS3Dash014LambdaFunctionQualifiedArn",
            description: "Current Lambda function version",
            exportName: "sls-auto-remediate-v1-AutoRemediateS3Dash014LambdaFunctionQualifiedArn",
            value: this.autoRemediateS3Dash014LambdaFunctionQualifiedArn.toString(),
        });
        this.autoRemediateS3Dash003LambdaFunctionQualifiedArn =
            autoRemediateS3Dash003LambdaVersionLet5f4ycG0UzsTzXy3oT0b2nKsJkruoo8bZeWokMd8.ref;
        new cdk.CfnOutput(this, "CfnOutputAutoRemediateS3Dash003LambdaFunctionQualifiedArn", {
            key: "AutoRemediateS3Dash003LambdaFunctionQualifiedArn",
            description: "Current Lambda function version",
            exportName: "sls-auto-remediate-v1-AutoRemediateS3Dash003LambdaFunctionQualifiedArn",
            value: this.autoRemediateS3Dash003LambdaFunctionQualifiedArn.toString(),
        });
        this.autoRemediateKmsDash002LambdaFunctionQualifiedArn =
            autoRemediateKmsDash002LambdaVersionP6oqsDktA5e0pQkiZ2YzuWkyJ7aB7irDsi6Ate8dl20.ref;
        new cdk.CfnOutput(this, "CfnOutputAutoRemediateKMSDash002LambdaFunctionQualifiedArn", {
            key: "AutoRemediateKMSDash002LambdaFunctionQualifiedArn",
            description: "Current Lambda function version",
            exportName: "sls-auto-remediate-v1-AutoRemediateKMSDash002LambdaFunctionQualifiedArn",
            value: this.autoRemediateKmsDash002LambdaFunctionQualifiedArn.toString(),
        });
        this.autoRemediateS3Dash004LambdaFunctionQualifiedArn =
            autoRemediateS3Dash004LambdaVersiondU713a2wMCiJttkwNvlyOdIt6FobmL3tpAdyNkma.ref;
        new cdk.CfnOutput(this, "CfnOutputAutoRemediateS3Dash004LambdaFunctionQualifiedArn", {
            key: "AutoRemediateS3Dash004LambdaFunctionQualifiedArn",
            description: "Current Lambda function version",
            exportName: "sls-auto-remediate-v1-AutoRemediateS3Dash004LambdaFunctionQualifiedArn",
            value: this.autoRemediateS3Dash004LambdaFunctionQualifiedArn.toString(),
        });
        this.autoRemediateRdsDash023LambdaFunctionQualifiedArn =
            autoRemediateRdsDash023LambdaVersion5liQr9NKohYwJdCmB8uWrJxnfvru4kRyrBm5Um0yOc.ref;
        new cdk.CfnOutput(this, "CfnOutputAutoRemediateRDSDash023LambdaFunctionQualifiedArn", {
            key: "AutoRemediateRDSDash023LambdaFunctionQualifiedArn",
            description: "Current Lambda function version",
            exportName: "sls-auto-remediate-v1-AutoRemediateRDSDash023LambdaFunctionQualifiedArn",
            value: this.autoRemediateRdsDash023LambdaFunctionQualifiedArn.toString(),
        });
        this.autoRemediateGdDash001LambdaFunctionQualifiedArn =
            autoRemediateGdDash001LambdaVersionk7n3MpGk8FgdGsEvJyH5c0C7tKe9fSj7ygjYy6tsX8.ref;
        new cdk.CfnOutput(this, "CfnOutputAutoRemediateGDDash001LambdaFunctionQualifiedArn", {
            key: "AutoRemediateGDDash001LambdaFunctionQualifiedArn",
            description: "Current Lambda function version",
            exportName: "sls-auto-remediate-v1-AutoRemediateGDDash001LambdaFunctionQualifiedArn",
            value: this.autoRemediateGdDash001LambdaFunctionQualifiedArn.toString(),
        });
        this.autoRemediateS3Dash005LambdaFunctionQualifiedArn =
            autoRemediateS3Dash005LambdaVersionCxiXtPwYeOuEp9s74QkIddXAeVm7ZbTqPypyYhIk.ref;
        new cdk.CfnOutput(this, "CfnOutputAutoRemediateS3Dash005LambdaFunctionQualifiedArn", {
            key: "AutoRemediateS3Dash005LambdaFunctionQualifiedArn",
            description: "Current Lambda function version",
            exportName: "sls-auto-remediate-v1-AutoRemediateS3Dash005LambdaFunctionQualifiedArn",
            value: this.autoRemediateS3Dash005LambdaFunctionQualifiedArn.toString(),
        });
        this.autoRemediateS3Dash006LambdaFunctionQualifiedArn =
            autoRemediateS3Dash006LambdaVersion64xviViXpYbcxQ8qx9p1zbWi56h8CpAtWi1tMvPtAcc.ref;
        new cdk.CfnOutput(this, "CfnOutputAutoRemediateS3Dash006LambdaFunctionQualifiedArn", {
            key: "AutoRemediateS3Dash006LambdaFunctionQualifiedArn",
            description: "Current Lambda function version",
            exportName: "sls-auto-remediate-v1-AutoRemediateS3Dash006LambdaFunctionQualifiedArn",
            value: this.autoRemediateS3Dash006LambdaFunctionQualifiedArn.toString(),
        });
        this.autoRemediateS3Dash007LambdaFunctionQualifiedArn =
            autoRemediateS3Dash007LambdaVersion5Ig5DOrwZyd3aXumvQtatKaQzWq8sa3AxC0aJkclHg.ref;
        new cdk.CfnOutput(this, "CfnOutputAutoRemediateS3Dash007LambdaFunctionQualifiedArn", {
            key: "AutoRemediateS3Dash007LambdaFunctionQualifiedArn",
            description: "Current Lambda function version",
            exportName: "sls-auto-remediate-v1-AutoRemediateS3Dash007LambdaFunctionQualifiedArn",
            value: this.autoRemediateS3Dash007LambdaFunctionQualifiedArn.toString(),
        });
        this.autoRemediateKmsDash004LambdaFunctionQualifiedArn =
            autoRemediateKmsDash004LambdaVersionngqq46Zp4FLjataYzxu6XxYWm40Kg2wPcDfn1eBoAgg.ref;
        new cdk.CfnOutput(this, "CfnOutputAutoRemediateKMSDash004LambdaFunctionQualifiedArn", {
            key: "AutoRemediateKMSDash004LambdaFunctionQualifiedArn",
            description: "Current Lambda function version",
            exportName: "sls-auto-remediate-v1-AutoRemediateKMSDash004LambdaFunctionQualifiedArn",
            value: this.autoRemediateKmsDash004LambdaFunctionQualifiedArn.toString(),
        });
        this.autoRemediateOrganizationsDash002LambdaFunctionQualifiedArn =
            autoRemediateOrganizationsDash002LambdaVersionVbw8q6niLGbdy8PDzJz2mfvWyBe5dCrUrzZe7V2gfk.ref;
        new cdk.CfnOutput(this, "CfnOutputAutoRemediateOrganizationsDash002LambdaFunctionQualifiedArn", {
            key: "AutoRemediateOrganizationsDash002LambdaFunctionQualifiedArn",
            description: "Current Lambda function version",
            exportName: "sls-auto-remediate-v1-AutoRemediateOrganizationsDash002LambdaFunctionQualifiedArn",
            value: this.autoRemediateOrganizationsDash002LambdaFunctionQualifiedArn.toString(),
        });
        this.autoRemediateS3Dash008LambdaFunctionQualifiedArn =
            autoRemediateS3Dash008LambdaVersionvFa0r0zTyQxybpQFidl45vEfnBgtkGLb5lNYaN4Xk0o.ref;
        new cdk.CfnOutput(this, "CfnOutputAutoRemediateS3Dash008LambdaFunctionQualifiedArn", {
            key: "AutoRemediateS3Dash008LambdaFunctionQualifiedArn",
            description: "Current Lambda function version",
            exportName: "sls-auto-remediate-v1-AutoRemediateS3Dash008LambdaFunctionQualifiedArn",
            value: this.autoRemediateS3Dash008LambdaFunctionQualifiedArn.toString(),
        });
        this.autoRemediateS3Dash009LambdaFunctionQualifiedArn =
            autoRemediateS3Dash009LambdaVersionUreqiQerFjgrNXx3Z2t5FdWc7BaJxfTiD2n7DLsApg.ref;
        new cdk.CfnOutput(this, "CfnOutputAutoRemediateS3Dash009LambdaFunctionQualifiedArn", {
            key: "AutoRemediateS3Dash009LambdaFunctionQualifiedArn",
            description: "Current Lambda function version",
            exportName: "sls-auto-remediate-v1-AutoRemediateS3Dash009LambdaFunctionQualifiedArn",
            value: this.autoRemediateS3Dash009LambdaFunctionQualifiedArn.toString(),
        });
        this.autoRemediateCtDash003LambdaFunctionQualifiedArn =
            autoRemediateCtDash003LambdaVersion6gYqAZxmLimxJwto2n2Bf9Wi5u48smRxM02AuMxG4.ref;
        new cdk.CfnOutput(this, "CfnOutputAutoRemediateCTDash003LambdaFunctionQualifiedArn", {
            key: "AutoRemediateCTDash003LambdaFunctionQualifiedArn",
            description: "Current Lambda function version",
            exportName: "sls-auto-remediate-v1-AutoRemediateCTDash003LambdaFunctionQualifiedArn",
            value: this.autoRemediateCtDash003LambdaFunctionQualifiedArn.toString(),
        });
        this.autoRemediateRdsDash006LambdaFunctionQualifiedArn =
            autoRemediateRdsDash006LambdaVersionOXj4KdOXdDoPJgOtRcpdWmGUhK88cwYzYkMmmrdVas.ref;
        new cdk.CfnOutput(this, "CfnOutputAutoRemediateRDSDash006LambdaFunctionQualifiedArn", {
            key: "AutoRemediateRDSDash006LambdaFunctionQualifiedArn",
            description: "Current Lambda function version",
            exportName: "sls-auto-remediate-v1-AutoRemediateRDSDash006LambdaFunctionQualifiedArn",
            value: this.autoRemediateRdsDash006LambdaFunctionQualifiedArn.toString(),
        });
        this.autoRemediateS3Dash010LambdaFunctionQualifiedArn =
            autoRemediateS3Dash010LambdaVersionrQkfNdYZicistYVc0w2XlfLjSlYqofcfAta7fTn5E.ref;
        new cdk.CfnOutput(this, "CfnOutputAutoRemediateS3Dash010LambdaFunctionQualifiedArn", {
            key: "AutoRemediateS3Dash010LambdaFunctionQualifiedArn",
            description: "Current Lambda function version",
            exportName: "sls-auto-remediate-v1-AutoRemediateS3Dash010LambdaFunctionQualifiedArn",
            value: this.autoRemediateS3Dash010LambdaFunctionQualifiedArn.toString(),
        });
        this.autoRemediateS3Dash012LambdaFunctionQualifiedArn =
            autoRemediateS3Dash012LambdaVersionCyQhS2iGZa4ndtBeOuLOgViM8858fVwHwPd1B9abs.ref;
        new cdk.CfnOutput(this, "CfnOutputAutoRemediateS3Dash012LambdaFunctionQualifiedArn", {
            key: "AutoRemediateS3Dash012LambdaFunctionQualifiedArn",
            description: "Current Lambda function version",
            exportName: "sls-auto-remediate-v1-AutoRemediateS3Dash012LambdaFunctionQualifiedArn",
            value: this.autoRemediateS3Dash012LambdaFunctionQualifiedArn.toString(),
        });
        this.autoRemediateSqsDash004LambdaFunctionQualifiedArn =
            autoRemediateSqsDash004LambdaVersion1NeuFovVGhyb0G1dpayJhkGhxjrr0tyn11VaSjXolks.ref;
        new cdk.CfnOutput(this, "CfnOutputAutoRemediateSQSDash004LambdaFunctionQualifiedArn", {
            key: "AutoRemediateSQSDash004LambdaFunctionQualifiedArn",
            description: "Current Lambda function version",
            exportName: "sls-auto-remediate-v1-AutoRemediateSQSDash004LambdaFunctionQualifiedArn",
            value: this.autoRemediateSqsDash004LambdaFunctionQualifiedArn.toString(),
        });
        this.autoRemediateRdsDash008LambdaFunctionQualifiedArn =
            autoRemediateRdsDash008LambdaVersionfefNt3DwsIu7Yysk29l66lMptq8AtfvUcUhUmIhGc.ref;
        new cdk.CfnOutput(this, "CfnOutputAutoRemediateRDSDash008LambdaFunctionQualifiedArn", {
            key: "AutoRemediateRDSDash008LambdaFunctionQualifiedArn",
            description: "Current Lambda function version",
            exportName: "sls-auto-remediate-v1-AutoRemediateRDSDash008LambdaFunctionQualifiedArn",
            value: this.autoRemediateRdsDash008LambdaFunctionQualifiedArn.toString(),
        });
        this.autoRemediateConfigDash001LambdaFunctionQualifiedArn =
            autoRemediateConfigDash001LambdaVersionjL799qjXTnLGeqrb7sP8gh6kSlf45cFXm3UlCaU20k.ref;
        new cdk.CfnOutput(this, "CfnOutputAutoRemediateConfigDash001LambdaFunctionQualifiedArn", {
            key: "AutoRemediateConfigDash001LambdaFunctionQualifiedArn",
            description: "Current Lambda function version",
            exportName: "sls-auto-remediate-v1-AutoRemediateConfigDash001LambdaFunctionQualifiedArn",
            value: this.autoRemediateConfigDash001LambdaFunctionQualifiedArn.toString(),
        });
        this.autoRemediateCfmDash005LambdaFunctionQualifiedArn =
            autoRemediateCfmDash005LambdaVersionCpRo8Yp5kRzmomioEFkFlWsYfDc5vDaw1QphAcfI.ref;
        new cdk.CfnOutput(this, "CfnOutputAutoRemediateCFMDash005LambdaFunctionQualifiedArn", {
            key: "AutoRemediateCFMDash005LambdaFunctionQualifiedArn",
            description: "Current Lambda function version",
            exportName: "sls-auto-remediate-v1-AutoRemediateCFMDash005LambdaFunctionQualifiedArn",
            value: this.autoRemediateCfmDash005LambdaFunctionQualifiedArn.toString(),
        });
        this.autoRemediateVpcDash001LambdaFunctionQualifiedArn =
            autoRemediateVpcDash001LambdaVersionl176RZnNilnMcsMb6d84th2QbyInXt4RQdEAeMNkbn0.ref;
        new cdk.CfnOutput(this, "CfnOutputAutoRemediateVPCDash001LambdaFunctionQualifiedArn", {
            key: "AutoRemediateVPCDash001LambdaFunctionQualifiedArn",
            description: "Current Lambda function version",
            exportName: "sls-auto-remediate-v1-AutoRemediateVPCDash001LambdaFunctionQualifiedArn",
            value: this.autoRemediateVpcDash001LambdaFunctionQualifiedArn.toString(),
        });
        this.autoRemediateEbsDash009LambdaFunctionQualifiedArn =
            autoRemediateEbsDash009LambdaVersiongYxhCxyh8a1eSuoERhfdFf14uUwr7cuaCAsCPz7Fsg0.ref;
        new cdk.CfnOutput(this, "CfnOutputAutoRemediateEBSDash009LambdaFunctionQualifiedArn", {
            key: "AutoRemediateEBSDash009LambdaFunctionQualifiedArn",
            description: "Current Lambda function version",
            exportName: "sls-auto-remediate-v1-AutoRemediateEBSDash009LambdaFunctionQualifiedArn",
            value: this.autoRemediateEbsDash009LambdaFunctionQualifiedArn.toString(),
        });
        this.autoRemediateRsDash001LambdaFunctionQualifiedArn =
            autoRemediateRsDash001LambdaVersionBtCYxyL5Yak4J83tH11o8wnVruuz55XhbMuyOiLrc.ref;
        new cdk.CfnOutput(this, "CfnOutputAutoRemediateRSDash001LambdaFunctionQualifiedArn", {
            key: "AutoRemediateRSDash001LambdaFunctionQualifiedArn",
            description: "Current Lambda function version",
            exportName: "sls-auto-remediate-v1-AutoRemediateRSDash001LambdaFunctionQualifiedArn",
            value: this.autoRemediateRsDash001LambdaFunctionQualifiedArn.toString(),
        });
        this.autoRemediateEc2Dash002LambdaFunctionQualifiedArn =
            autoRemediateEc2Dash002LambdaVersionPLe9B4jgzEt6jdF2osnSrDmUyqrTScuu1p20qkQhNaq.ref;
        new cdk.CfnOutput(this, "CfnOutputAutoRemediateEC2Dash002LambdaFunctionQualifiedArn", {
            key: "AutoRemediateEC2Dash002LambdaFunctionQualifiedArn",
            description: "Current Lambda function version",
            exportName: "sls-auto-remediate-v1-AutoRemediateEC2Dash002LambdaFunctionQualifiedArn",
            value: this.autoRemediateEc2Dash002LambdaFunctionQualifiedArn.toString(),
        });
        this.autoRemediateRsDash019LambdaFunctionQualifiedArn =
            autoRemediateRsDash019LambdaVersionKfu2nvwiUgtccd55c2h1Jjk3qFhw64tkPwabKe02sM.ref;
        new cdk.CfnOutput(this, "CfnOutputAutoRemediateRSDash019LambdaFunctionQualifiedArn", {
            key: "AutoRemediateRSDash019LambdaFunctionQualifiedArn",
            description: "Current Lambda function version",
            exportName: "sls-auto-remediate-v1-AutoRemediateRSDash019LambdaFunctionQualifiedArn",
            value: this.autoRemediateRsDash019LambdaFunctionQualifiedArn.toString(),
        });
        this.autoRemediateEc2Dash003LambdaFunctionQualifiedArn =
            autoRemediateEc2Dash003LambdaVersionhbSo9yT72uDvry1sm4ClrogBiStkt9duIsj5FhNc6U.ref;
        new cdk.CfnOutput(this, "CfnOutputAutoRemediateEC2Dash003LambdaFunctionQualifiedArn", {
            key: "AutoRemediateEC2Dash003LambdaFunctionQualifiedArn",
            description: "Current Lambda function version",
            exportName: "sls-auto-remediate-v1-AutoRemediateEC2Dash003LambdaFunctionQualifiedArn",
            value: this.autoRemediateEc2Dash003LambdaFunctionQualifiedArn.toString(),
        });
        this.autoRemediateEc2Dash005LambdaFunctionQualifiedArn =
            autoRemediateEc2Dash005LambdaVersionvK9875w0hdFxLsHteVgCzIyPf7rhOqea66ww0aBw.ref;
        new cdk.CfnOutput(this, "CfnOutputAutoRemediateEC2Dash005LambdaFunctionQualifiedArn", {
            key: "AutoRemediateEC2Dash005LambdaFunctionQualifiedArn",
            description: "Current Lambda function version",
            exportName: "sls-auto-remediate-v1-AutoRemediateEC2Dash005LambdaFunctionQualifiedArn",
            value: this.autoRemediateEc2Dash005LambdaFunctionQualifiedArn.toString(),
        });
        this.autoRemediateEc2Dash019LambdaFunctionQualifiedArn =
            autoRemediateEc2Dash019LambdaVersionQ2rHKcpe5Yx6MKkNusDa90vZf37JzwBoh7aUPclGwWo.ref;
        new cdk.CfnOutput(this, "CfnOutputAutoRemediateEC2Dash019LambdaFunctionQualifiedArn", {
            key: "AutoRemediateEC2Dash019LambdaFunctionQualifiedArn",
            description: "Current Lambda function version",
            exportName: "sls-auto-remediate-v1-AutoRemediateEC2Dash019LambdaFunctionQualifiedArn",
            value: this.autoRemediateEc2Dash019LambdaFunctionQualifiedArn.toString(),
        });
        this.autoRemediateEc2Dash004LambdaFunctionQualifiedArn =
            autoRemediateEc2Dash004LambdaVersionZ5zYh3XpGzZa78mz9l8Il1BgYtJuae8IVunrNtGdePo.ref;
        new cdk.CfnOutput(this, "CfnOutputAutoRemediateEC2Dash004LambdaFunctionQualifiedArn", {
            key: "AutoRemediateEC2Dash004LambdaFunctionQualifiedArn",
            description: "Current Lambda function version",
            exportName: "sls-auto-remediate-v1-AutoRemediateEC2Dash004LambdaFunctionQualifiedArn",
            value: this.autoRemediateEc2Dash004LambdaFunctionQualifiedArn.toString(),
        });
        this.autoRemediateEc2Dash006LambdaFunctionQualifiedArn =
            autoRemediateEc2Dash006LambdaVersionG4Gcb91i6od4PWplI2xHZkK1mWpLig5Ncu0ZcZ7qE2q.ref;
        new cdk.CfnOutput(this, "CfnOutputAutoRemediateEC2Dash006LambdaFunctionQualifiedArn", {
            key: "AutoRemediateEC2Dash006LambdaFunctionQualifiedArn",
            description: "Current Lambda function version",
            exportName: "sls-auto-remediate-v1-AutoRemediateEC2Dash006LambdaFunctionQualifiedArn",
            value: this.autoRemediateEc2Dash006LambdaFunctionQualifiedArn.toString(),
        });
        this.autoRemediateEc2Dash008LambdaFunctionQualifiedArn =
            autoRemediateEc2Dash008LambdaVersionS68mLHzsdugehAwXmYZtUdg7B1vteyWzta64Uly.ref;
        new cdk.CfnOutput(this, "CfnOutputAutoRemediateEC2Dash008LambdaFunctionQualifiedArn", {
            key: "AutoRemediateEC2Dash008LambdaFunctionQualifiedArn",
            description: "Current Lambda function version",
            exportName: "sls-auto-remediate-v1-AutoRemediateEC2Dash008LambdaFunctionQualifiedArn",
            value: this.autoRemediateEc2Dash008LambdaFunctionQualifiedArn.toString(),
        });
        this.autoRemediateEc2Dash043LambdaFunctionQualifiedArn =
            autoRemediateEc2Dash043LambdaVersionhufyIy4FxtgRlXxm5eh0x1zTmvPiNgqWhtjwxbL7rCs.ref;
        new cdk.CfnOutput(this, "CfnOutputAutoRemediateEC2Dash043LambdaFunctionQualifiedArn", {
            key: "AutoRemediateEC2Dash043LambdaFunctionQualifiedArn",
            description: "Current Lambda function version",
            exportName: "sls-auto-remediate-v1-AutoRemediateEC2Dash043LambdaFunctionQualifiedArn",
            value: this.autoRemediateEc2Dash043LambdaFunctionQualifiedArn.toString(),
        });
        this.autoRemediateRsDash023LambdaFunctionQualifiedArn =
            autoRemediateRsDash023LambdaVersion8xEPq4XBeL7f9H9xn6jWFfppKv6kq9cTzk3bxw7AexA.ref;
        new cdk.CfnOutput(this, "CfnOutputAutoRemediateRSDash023LambdaFunctionQualifiedArn", {
            key: "AutoRemediateRSDash023LambdaFunctionQualifiedArn",
            description: "Current Lambda function version",
            exportName: "sls-auto-remediate-v1-AutoRemediateRSDash023LambdaFunctionQualifiedArn",
            value: this.autoRemediateRsDash023LambdaFunctionQualifiedArn.toString(),
        });
        this.autoRemediateEc2Dash045LambdaFunctionQualifiedArn =
            autoRemediateEc2Dash045LambdaVersioniKBcVkHt3fqtP63ElfJ9z6vZ6bUeWa0OmDqTiUxRe.ref;
        new cdk.CfnOutput(this, "CfnOutputAutoRemediateEC2Dash045LambdaFunctionQualifiedArn", {
            key: "AutoRemediateEC2Dash045LambdaFunctionQualifiedArn",
            description: "Current Lambda function version",
            exportName: "sls-auto-remediate-v1-AutoRemediateEC2Dash045LambdaFunctionQualifiedArn",
            value: this.autoRemediateEc2Dash045LambdaFunctionQualifiedArn.toString(),
        });
        this.autoRemediateEc2Dash038LambdaFunctionQualifiedArn =
            autoRemediateEc2Dash038LambdaVersionFQtsy4omn5BWurlfNrbY8jptCiXrHq8cU4MqooOEgc.ref;
        new cdk.CfnOutput(this, "CfnOutputAutoRemediateEC2Dash038LambdaFunctionQualifiedArn", {
            key: "AutoRemediateEC2Dash038LambdaFunctionQualifiedArn",
            description: "Current Lambda function version",
            exportName: "sls-auto-remediate-v1-AutoRemediateEC2Dash038LambdaFunctionQualifiedArn",
            value: this.autoRemediateEc2Dash038LambdaFunctionQualifiedArn.toString(),
        });
        this.autoRemediateEc2Dash040LambdaFunctionQualifiedArn =
            autoRemediateEc2Dash040LambdaVersionjCtEdKdDot6VnAdDuvMrNvYmjs3oIqXbS8kRw4K5nYs.ref;
        new cdk.CfnOutput(this, "CfnOutputAutoRemediateEC2Dash040LambdaFunctionQualifiedArn", {
            key: "AutoRemediateEC2Dash040LambdaFunctionQualifiedArn",
            description: "Current Lambda function version",
            exportName: "sls-auto-remediate-v1-AutoRemediateEC2Dash040LambdaFunctionQualifiedArn",
            value: this.autoRemediateEc2Dash040LambdaFunctionQualifiedArn.toString(),
        });
        this.autoRemediateEc2Dash039LambdaFunctionQualifiedArn =
            autoRemediateEc2Dash039LambdaVersionvOmDFrEjZotx6bwP9lNlua15nqTrWdmpOcS7fQp7e.ref;
        new cdk.CfnOutput(this, "CfnOutputAutoRemediateEC2Dash039LambdaFunctionQualifiedArn", {
            key: "AutoRemediateEC2Dash039LambdaFunctionQualifiedArn",
            description: "Current Lambda function version",
            exportName: "sls-auto-remediate-v1-AutoRemediateEC2Dash039LambdaFunctionQualifiedArn",
            value: this.autoRemediateEc2Dash039LambdaFunctionQualifiedArn.toString(),
        });
        this.trustedAdvisorDash003LambdaFunctionQualifiedArn =
            trustedAdvisorDash003LambdaVersiondT3ccpZv2BkoGmLOf9nkq9P7zdEzOlbx8Ts9IuReQ.ref;
        new cdk.CfnOutput(this, "CfnOutputTrustedAdvisorDash003LambdaFunctionQualifiedArn", {
            key: "TrustedAdvisorDash003LambdaFunctionQualifiedArn",
            description: "Current Lambda function version",
            exportName: "sls-auto-remediate-v1-TrustedAdvisorDash003LambdaFunctionQualifiedArn",
            value: this.trustedAdvisorDash003LambdaFunctionQualifiedArn.toString(),
        });
        this.autoRemediateKinesisDash001LambdaFunctionQualifiedArn =
            autoRemediateKinesisDash001LambdaVersionKLqwg2nHj0MsnipDnAaKalNfL0ZymvDnBhnKHp04.ref;
        new cdk.CfnOutput(this, "CfnOutputAutoRemediateKinesisDash001LambdaFunctionQualifiedArn", {
            key: "AutoRemediateKinesisDash001LambdaFunctionQualifiedArn",
            description: "Current Lambda function version",
            exportName: "sls-auto-remediate-v1-AutoRemediateKinesisDash001LambdaFunctionQualifiedArn",
            value: this.autoRemediateKinesisDash001LambdaFunctionQualifiedArn.toString(),
        });
    }
}
exports.AutoRemediateStack = AutoRemediateStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by1yZW1lZGlhdGUtc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRvLXJlbWVkaWF0ZS1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBbUM7QUFDbkMseURBQTJDO0FBQzNDLHlEQUEyQztBQUMzQywrREFBaUQ7QUFDakQsMkRBQTZDO0FBRTdDLHlEQUEyQztBQUMzQyx5REFBMkM7QUFJM0M7O0dBRUc7QUFDSCxNQUFhLGtCQUFtQixTQUFRLEdBQUcsQ0FBQyxLQUFLO0lBQy9DOztPQUVHO0lBQ2EsbURBQW1ELENBQUM7SUFDcEU7O09BRUc7SUFDYSxnREFBZ0QsQ0FBQztJQUNqRTs7T0FFRztJQUNhLGlEQUFpRCxDQUFDO0lBQ2xFOztPQUVHO0lBQ2EsaURBQWlELENBQUM7SUFDbEU7O09BRUc7SUFDYSxnREFBZ0QsQ0FBQztJQUNqRTs7T0FFRztJQUNhLG9EQUFvRCxDQUFDO0lBQ3JFOztPQUVHO0lBQ2EsZ0RBQWdELENBQUM7SUFDakU7O09BRUc7SUFDYSxnREFBZ0QsQ0FBQztJQUNqRTs7T0FFRztJQUNhLGlEQUFpRCxDQUFDO0lBQ2xFOztPQUVHO0lBQ2EsZ0RBQWdELENBQUM7SUFDakU7O09BRUc7SUFDYSxnREFBZ0QsQ0FBQztJQUNqRTs7T0FFRztJQUNhLGlEQUFpRCxDQUFDO0lBQ2xFOztPQUVHO0lBQ2EsZ0RBQWdELENBQUM7SUFDakU7O09BRUc7SUFDYSxpREFBaUQsQ0FBQztJQUNsRTs7T0FFRztJQUNhLGdEQUFnRCxDQUFDO0lBQ2pFOztPQUVHO0lBQ2EsZ0RBQWdELENBQUM7SUFDakU7O09BRUc7SUFDYSxnREFBZ0QsQ0FBQztJQUNqRTs7T0FFRztJQUNhLGdEQUFnRCxDQUFDO0lBQ2pFOztPQUVHO0lBQ2EsaURBQWlELENBQUM7SUFDbEU7O09BRUc7SUFDYSwyREFBMkQsQ0FBQztJQUM1RTs7T0FFRztJQUNhLGdEQUFn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QVEsRUFBRTtTQUN4RSxDQUNGLENBQUM7UUFDRixJQUFJLENBQUMscURBQXFEO1lBQ3hELGdGQUFnRixDQUFDLEdBQUcsQ0FBQztRQUN2RixJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQ2YsSUFBSSxFQUNKLGdFQUFnRSxFQUNoRTtZQUNFLEdBQUcsRUFBRSx1REFBdUQ7WUFDNUQsV0FBVyxFQUFFLGlDQUFpQztZQUM5QyxVQUFVLEVBQ1IsNkVBQTZFO1lBQy9FLEtBQUssRUFDSCxJQUFJLENBQUMscURBQXNELENBQUMsUUFBUSxFQUFFO1NBQ3pFLENBQ0YsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQWo1T0QsZ0RBaTVPQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tIFwiYXdzLWNkay1saWJcIjtcbmltcG9ydCAqIGFzIGlhbSBmcm9tIFwiYXdzLWNkay1saWIvYXdzLWlhbVwiO1xuaW1wb3J0ICogYXMga21zIGZyb20gXCJhd3MtY2RrLWxpYi9hd3Mta21zXCI7XG5pbXBvcnQgKiBhcyBsYW1iZGEgZnJvbSBcImF3cy1jZGstbGliL2F3cy1sYW1iZGFcIjtcbmltcG9ydCAqIGFzIGxvZ3MgZnJvbSBcImF3cy1jZGstbGliL2F3cy1sb2dzXCI7XG5pbXBvcnQgKiBhcyBzMyBmcm9tIFwiYXdzLWNkay1saWIvYXdzLXMzXCI7XG5pbXBvcnQgKiBhcyBzbnMgZnJvbSBcImF3cy1jZGstbGliL2F3cy1zbnNcIjtcbmltcG9ydCAqIGFzIHNxcyBmcm9tIFwiYXdzLWNkay1saWIvYXdzLXNxc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEF1dG9SZW1lZGlhdGVTdGFja1Byb3BzIGV4dGVuZHMgY2RrLlN0YWNrUHJvcHMge31cblxuLyoqXG4gKiBUaGUgQVdTIENsb3VkRm9ybWF0aW9uIHRlbXBsYXRlIGZvciB0aGlzIFNlcnZlcmxlc3MgYXBwbGljYXRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEF1dG9SZW1lZGlhdGVTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XG4gIC8qKlxuICAgKiBDdXJyZW50IExhbWJkYSBmdW5jdGlvbiB2ZXJzaW9uXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgYXV0b1JlbWVkaWF0ZU9yY2hlc3RyYXRvckxhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuO1xuICAvKipcbiAgICogQ3VycmVudCBMYW1iZGEgZnVuY3Rpb24gdmVyc2lvblxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGF1dG9SZW1lZGlhdGVTM0Rhc2gwMTZMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFybjtcbiAgLyoqXG4gICAqIEN1cnJlbnQgTGFtYmRhIGZ1bmN0aW9uIHZlcnNpb25cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBhdXRvUmVtZWRpYXRlSWFtRGFzaDAwMUxhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuO1xuICAvKipcbiAgICogQ3VycmVudCBMYW1iZGEgZnVuY3Rpb24gdmVyc2lvblxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGF1dG9SZW1lZGlhdGVJYW1EYXNoMDI5TGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm47XG4gIC8qKlxuICAgKiBDdXJyZW50IExhbWJkYSBmdW5jdGlvbiB2ZXJzaW9uXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgYXV0b1JlbWVkaWF0ZUN0RGFzaDAwMUxhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuO1xuICAvKipcbiAgICogQ3VycmVudCBMYW1iZGEgZnVuY3Rpb24gdmVyc2lvblxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGF1dG9SZW1lZGlhdGVMYW1iZGFEYXNoMDAzTGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm47XG4gIC8qKlxuICAgKiBDdXJyZW50IExhbWJkYSBmdW5jdGlvbiB2ZXJzaW9uXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgYXV0b1JlbWVkaWF0ZVMzRGFzaDAwMUxhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuO1xuICAvKipcbiAgICogQ3VycmVudCBMYW1iZGEgZnVuY3Rpb24gdmVyc2lvblxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGF1dG9SZW1lZGlhdGVTM0Rhc2gwMDJMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFybjtcbiAgLyoqXG4gICAqIEN1cnJlbnQgTGFtYmRhIGZ1bmN0aW9uIHZlcnNpb25cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBhdXRvUmVtZWRpYXRlSWFtRGFzaDAzOExhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuO1xuICAvKipcbiAgICogQ3VycmVudCBMYW1iZGEgZnVuY3Rpb24gdmVyc2lvblxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGF1dG9SZW1lZGlhdGVTM0Rhc2gwMTRMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFybjtcbiAgLyoqXG4gICAqIEN1cnJlbnQgTGFtYmRhIGZ1bmN0aW9uIHZlcnNpb25cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBhdXRvUmVtZWRpYXRlUzNEYXNoMDAzTGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm47XG4gIC8qKlxuICAgKiBDdXJyZW50IExhbWJkYSBmdW5jdGlvbiB2ZXJzaW9uXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgYXV0b1JlbWVkaWF0ZUttc0Rhc2gwMDJMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFybjtcbiAgLyoqXG4gICAqIEN1cnJlbnQgTGFtYmRhIGZ1bmN0aW9uIHZlcnNpb25cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBhdXRvUmVtZWRpYXRlUzNEYXNoMDA0TGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm47XG4gIC8qKlxuICAgKiBDdXJyZW50IExhbWJkYSBmdW5jdGlvbiB2ZXJzaW9uXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgYXV0b1JlbWVkaWF0ZVJkc0Rhc2gwMjNMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFybjtcbiAgLyoqXG4gICAqIEN1cnJlbnQgTGFtYmRhIGZ1bmN0aW9uIHZlcnNpb25cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBhdXRvUmVtZWRpYXRlR2REYXNoMDAxTGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm47XG4gIC8qKlxuICAgKiBDdXJyZW50IExhbWJkYSBmdW5jdGlvbiB2ZXJzaW9uXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgYXV0b1JlbWVkaWF0ZVMzRGFzaDAwNUxhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuO1xuICAvKipcbiAgICogQ3VycmVudCBMYW1iZGEgZnVuY3Rpb24gdmVyc2lvblxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGF1dG9SZW1lZGlhdGVTM0Rhc2gwMDZMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFybjtcbiAgLyoqXG4gICAqIEN1cnJlbnQgTGFtYmRhIGZ1bmN0aW9uIHZlcnNpb25cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBhdXRvUmVtZWRpYXRlUzNEYXNoMDA3TGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm47XG4gIC8qKlxuICAgKiBDdXJyZW50IExhbWJkYSBmdW5jdGlvbiB2ZXJzaW9uXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgYXV0b1JlbWVkaWF0ZUttc0Rhc2gwMDRMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFybjtcbiAgLyoqXG4gICAqIEN1cnJlbnQgTGFtYmRhIGZ1bmN0aW9uIHZlcnNpb25cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBhdXRvUmVtZWRpYXRlT3JnYW5pemF0aW9uc0Rhc2gwMDJMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFybjtcbiAgLyoqXG4gICAqIEN1cnJlbnQgTGFtYmRhIGZ1bmN0aW9uIHZlcnNpb25cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBhdXRvUmVtZWRpYXRlUzNEYXNoMDA4TGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm47XG4gIC8qKlxuICAgKiBDdXJyZW50IExhbWJkYSBmdW5jdGlvbiB2ZXJzaW9uXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgYXV0b1JlbWVkaWF0ZVMzRGFzaDAwOUxhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuO1xuICAvKipcbiAgICogQ3VycmVudCBMYW1iZGEgZnVuY3Rpb24gdmVyc2lvblxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGF1dG9SZW1lZGlhdGVDdERhc2gwMDNMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFybjtcbiAgLyoqXG4gICAqIEN1cnJlbnQgTGFtYmRhIGZ1bmN0aW9uIHZlcnNpb25cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBhdXRvUmVtZWRpYXRlUmRzRGFzaDAwNkxhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuO1xuICAvKipcbiAgICogQ3VycmVudCBMYW1iZGEgZnVuY3Rpb24gdmVyc2lvblxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGF1dG9SZW1lZGlhdGVTM0Rhc2gwMTBMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFybjtcbiAgLyoqXG4gICAqIEN1cnJlbnQgTGFtYmRhIGZ1bmN0aW9uIHZlcnNpb25cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBhdXRvUmVtZWRpYXRlUzNEYXNoMDEyTGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm47XG4gIC8qKlxuICAgKiBDdXJyZW50IExhbWJkYSBmdW5jdGlvbiB2ZXJzaW9uXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgYXV0b1JlbWVkaWF0ZVNxc0Rhc2gwMDRMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFybjtcbiAgLyoqXG4gICAqIEN1cnJlbnQgTGFtYmRhIGZ1bmN0aW9uIHZlcnNpb25cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBhdXRvUmVtZWRpYXRlUmRzRGFzaDAwOExhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuO1xuICAvKipcbiAgICogQ3VycmVudCBMYW1iZGEgZnVuY3Rpb24gdmVyc2lvblxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGF1dG9SZW1lZGlhdGVDb25maWdEYXNoMDAxTGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm47XG4gIC8qKlxuICAgKiBDdXJyZW50IExhbWJkYSBmdW5jdGlvbiB2ZXJzaW9uXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgYXV0b1JlbWVkaWF0ZUNmbURhc2gwMDVMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFybjtcbiAgLyoqXG4gICAqIEN1cnJlbnQgTGFtYmRhIGZ1bmN0aW9uIHZlcnNpb25cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBhdXRvUmVtZWRpYXRlVnBjRGFzaDAwMUxhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuO1xuICAvKipcbiAgICogQ3VycmVudCBMYW1iZGEgZnVuY3Rpb24gdmVyc2lvblxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGF1dG9SZW1lZGlhdGVFYnNEYXNoMDA5TGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm47XG4gIC8qKlxuICAgKiBDdXJyZW50IExhbWJkYSBmdW5jdGlvbiB2ZXJzaW9uXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgYXV0b1JlbWVkaWF0ZVJzRGFzaDAwMUxhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuO1xuICAvKipcbiAgICogQ3VycmVudCBMYW1iZGEgZnVuY3Rpb24gdmVyc2lvblxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGF1dG9SZW1lZGlhdGVFYzJEYXNoMDAyTGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm47XG4gIC8qKlxuICAgKiBDdXJyZW50IExhbWJkYSBmdW5jdGlvbiB2ZXJzaW9uXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgYXV0b1JlbWVkaWF0ZVJzRGFzaDAxOUxhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuO1xuICAvKipcbiAgICogQ3VycmVudCBMYW1iZGEgZnVuY3Rpb24gdmVyc2lvblxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGF1dG9SZW1lZGlhdGVFYzJEYXNoMDAzTGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm47XG4gIC8qKlxuICAgKiBDdXJyZW50IExhbWJkYSBmdW5jdGlvbiB2ZXJzaW9uXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgYXV0b1JlbWVkaWF0ZUVjMkRhc2gwMDVMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFybjtcbiAgLyoqXG4gICAqIEN1cnJlbnQgTGFtYmRhIGZ1bmN0aW9uIHZlcnNpb25cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBhdXRvUmVtZWRpYXRlRWMyRGFzaDAxOUxhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuO1xuICAvKipcbiAgICogQ3VycmVudCBMYW1iZGEgZnVuY3Rpb24gdmVyc2lvblxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGF1dG9SZW1lZGlhdGVFYzJEYXNoMDA0TGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm47XG4gIC8qKlxuICAgKiBDdXJyZW50IExhbWJkYSBmdW5jdGlvbiB2ZXJzaW9uXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgYXV0b1JlbWVkaWF0ZUVjMkRhc2gwMDZMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFybjtcbiAgLyoqXG4gICAqIEN1cnJlbnQgTGFtYmRhIGZ1bmN0aW9uIHZlcnNpb25cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBhdXRvUmVtZWRpYXRlRWMyRGFzaDAwOExhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuO1xuICAvKipcbiAgICogQ3VycmVudCBMYW1iZGEgZnVuY3Rpb24gdmVyc2lvblxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGF1dG9SZW1lZGlhdGVFYzJEYXNoMDQzTGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm47XG4gIC8qKlxuICAgKiBDdXJyZW50IExhbWJkYSBmdW5jdGlvbiB2ZXJzaW9uXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgYXV0b1JlbWVkaWF0ZVJzRGFzaDAyM0xhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuO1xuICAvKipcbiAgICogQ3VycmVudCBMYW1iZGEgZnVuY3Rpb24gdmVyc2lvblxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGF1dG9SZW1lZGlhdGVFYzJEYXNoMDQ1TGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm47XG4gIC8qKlxuICAgKiBDdXJyZW50IExhbWJkYSBmdW5jdGlvbiB2ZXJzaW9uXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgYXV0b1JlbWVkaWF0ZUVjMkRhc2gwMzhMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFybjtcbiAgLyoqXG4gICAqIEN1cnJlbnQgTGFtYmRhIGZ1bmN0aW9uIHZlcnNpb25cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBhdXRvUmVtZWRpYXRlRWMyRGFzaDA0MExhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuO1xuICAvKipcbiAgICogQ3VycmVudCBMYW1iZGEgZnVuY3Rpb24gdmVyc2lvblxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGF1dG9SZW1lZGlhdGVFYzJEYXNoMDM5TGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm47XG4gIC8qKlxuICAgKiBDdXJyZW50IExhbWJkYSBmdW5jdGlvbiB2ZXJzaW9uXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgdHJ1c3RlZEFkdmlzb3JEYXNoMDAzTGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm47XG4gIC8qKlxuICAgKiBDdXJyZW50IExhbWJkYSBmdW5jdGlvbiB2ZXJzaW9uXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgYXV0b1JlbWVkaWF0ZUtpbmVzaXNEYXNoMDAxTGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm47XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHNjb3BlOiBjZGsuQXBwLFxuICAgIGlkOiBzdHJpbmcsXG4gICAgcHJvcHM6IEF1dG9SZW1lZGlhdGVTdGFja1Byb3BzID0ge30sXG4gICkge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuXG4gICAgLy8gUmVzb3VyY2VzXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZUNmbTAwNVJvbGUgPSBuZXcgaWFtLkNmblJvbGUoXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlQ0ZNMDA1Um9sZVwiLFxuICAgICAge1xuICAgICAgICByb2xlTmFtZTogXCJBdXRvUmVtZWRpYXRlQ0ZNLTAwNVJvbGVcIixcbiAgICAgICAgYXNzdW1lUm9sZVBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgVmVyc2lvbjogXCIyMDEyLTEwLTE3XCIsXG4gICAgICAgICAgU3RhdGVtZW50OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICBQcmluY2lwYWw6IHtcbiAgICAgICAgICAgICAgICBTZXJ2aWNlOiBbXCJsYW1iZGEuYW1hem9uYXdzLmNvbVwiXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgQWN0aW9uOiBbXCJzdHM6QXNzdW1lUm9sZVwiXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgcG9saWNpZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwb2xpY3lOYW1lOiBcIkF1dG9SZW1lZGlhdGlvblhSYXlQb2xpY3lcIixcbiAgICAgICAgICAgIHBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgICAgIFN0YXRlbWVudDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgQWN0aW9uOiBbXCJ4cmF5OlB1dFRyYWNlU2VnbWVudHNcIiwgXCJ4cmF5OlB1dFRlbGVtZXRyeVJlY29yZHNcIl0sXG4gICAgICAgICAgICAgICAgICBSZXNvdXJjZTogXCIqXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwb2xpY3lOYW1lOiBcIkF1dG9SZW1lZGlhdGVDRk0tMDA1UG9saWN5XCIsXG4gICAgICAgICAgICBwb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgICAgICBTdGF0ZW1lbnQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICAgIEFjdGlvbjogW1xuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6Q3JlYXRlTG9nR3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsb2dzOkNyZWF0ZUxvZ1N0cmVhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6UHV0TG9nRXZlbnRzXCIsXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgUmVzb3VyY2U6IFtcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIFwiYXJuOmF3czpsb2dzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpb24sXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NvdW50LFxuICAgICAgICAgICAgICAgICAgICAgIFwibG9nLWdyb3VwOi9hd3MvbGFtYmRhLyo6KjoqXCIsXG4gICAgICAgICAgICAgICAgICAgIF0uam9pbihcIjpcIiksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgICAgICBBY3Rpb246IFtcImNsb3VkZm9ybWF0aW9uOlVwZGF0ZVRlcm1pbmF0aW9uUHJvdGVjdGlvblwiXSxcbiAgICAgICAgICAgICAgICAgIFJlc291cmNlOiBcIipcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZUNmbURhc2gwMDVMb2dHcm91cCA9IG5ldyBsb2dzLkNmbkxvZ0dyb3VwKFxuICAgICAgdGhpcyxcbiAgICAgIFwiQXV0b1JlbWVkaWF0ZUNGTURhc2gwMDVMb2dHcm91cFwiLFxuICAgICAge1xuICAgICAgICBsb2dHcm91cE5hbWU6IFwiL2F3cy9sYW1iZGEvYXV0by1yZW1lZGlhdGUtdjEtQXV0b1JlbWVkaWF0ZUNGTS0wMDVcIixcbiAgICAgICAgcmV0ZW50aW9uSW5EYXlzOiAzMCxcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVDdDAwMVJvbGUgPSBuZXcgaWFtLkNmblJvbGUoXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlQ1QwMDFSb2xlXCIsXG4gICAgICB7XG4gICAgICAgIHJvbGVOYW1lOiBcIkF1dG9SZW1lZGlhdGVDVC0wMDFSb2xlXCIsXG4gICAgICAgIGFzc3VtZVJvbGVQb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgIFZlcnNpb246IFwiMjAxMi0xMC0xN1wiLFxuICAgICAgICAgIFN0YXRlbWVudDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgUHJpbmNpcGFsOiB7XG4gICAgICAgICAgICAgICAgU2VydmljZTogW1wibGFtYmRhLmFtYXpvbmF3cy5jb21cIl0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIEFjdGlvbjogW1wic3RzOkFzc3VtZVJvbGVcIl0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHBvbGljaWVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgcG9saWN5TmFtZTogXCJBdXRvUmVtZWRpYXRpb25YUmF5UG9saWN5XCIsXG4gICAgICAgICAgICBwb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgICAgICBTdGF0ZW1lbnQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICAgIEFjdGlvbjogW1wieHJheTpQdXRUcmFjZVNlZ21lbnRzXCIsIFwieHJheTpQdXRUZWxlbWV0cnlSZWNvcmRzXCJdLFxuICAgICAgICAgICAgICAgICAgUmVzb3VyY2U6IFwiKlwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgcG9saWN5TmFtZTogXCJBdXRvUmVtZWRpYXRlQ1QtMDAxUG9saWN5XCIsXG4gICAgICAgICAgICBwb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgICAgICBTdGF0ZW1lbnQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICAgIEFjdGlvbjogW1xuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6Q3JlYXRlTG9nR3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsb2dzOkNyZWF0ZUxvZ1N0cmVhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6UHV0TG9nRXZlbnRzXCIsXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgUmVzb3VyY2U6IFtcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIFwiYXJuOmF3czpsb2dzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpb24sXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NvdW50LFxuICAgICAgICAgICAgICAgICAgICAgIFwibG9nLWdyb3VwOi9hd3MvbGFtYmRhLyo6KjoqXCIsXG4gICAgICAgICAgICAgICAgICAgIF0uam9pbihcIjpcIiksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgICAgICBBY3Rpb246IFtcImNsb3VkdHJhaWw6VXBkYXRlVHJhaWxcIl0sXG4gICAgICAgICAgICAgICAgICBSZXNvdXJjZTogXCIqXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVDdDAwM1JvbGUgPSBuZXcgaWFtLkNmblJvbGUoXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlQ1QwMDNSb2xlXCIsXG4gICAgICB7XG4gICAgICAgIHJvbGVOYW1lOiBcIkF1dG9SZW1lZGlhdGVDVC0wMDNSb2xlXCIsXG4gICAgICAgIGFzc3VtZVJvbGVQb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgIFZlcnNpb246IFwiMjAxMi0xMC0xN1wiLFxuICAgICAgICAgIFN0YXRlbWVudDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgUHJpbmNpcGFsOiB7XG4gICAgICAgICAgICAgICAgU2VydmljZTogW1wibGFtYmRhLmFtYXpvbmF3cy5jb21cIl0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIEFjdGlvbjogW1wic3RzOkFzc3VtZVJvbGVcIl0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHBvbGljaWVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgcG9saWN5TmFtZTogXCJBdXRvUmVtZWRpYXRpb25YUmF5UG9saWN5XCIsXG4gICAgICAgICAgICBwb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgICAgICBTdGF0ZW1lbnQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICAgIEFjdGlvbjogW1wieHJheTpQdXRUcmFjZVNlZ21lbnRzXCIsIFwieHJheTpQdXRUZWxlbWV0cnlSZWNvcmRzXCJdLFxuICAgICAgICAgICAgICAgICAgUmVzb3VyY2U6IFwiKlwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgcG9saWN5TmFtZTogXCJBdXRvUmVtZWRpYXRlQ1QtMDAzUG9saWN5XCIsXG4gICAgICAgICAgICBwb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgICAgICBTdGF0ZW1lbnQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICAgIEFjdGlvbjogW1xuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6Q3JlYXRlTG9nR3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsb2dzOkNyZWF0ZUxvZ1N0cmVhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6UHV0TG9nRXZlbnRzXCIsXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgUmVzb3VyY2U6IFtcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIFwiYXJuOmF3czpsb2dzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpb24sXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NvdW50LFxuICAgICAgICAgICAgICAgICAgICAgIFwibG9nLWdyb3VwOi9hd3MvbGFtYmRhLyo6KjoqXCIsXG4gICAgICAgICAgICAgICAgICAgIF0uam9pbihcIjpcIiksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgICAgICBBY3Rpb246IFtcInMzOlB1dEJ1Y2tldEFjbFwiXSxcbiAgICAgICAgICAgICAgICAgIFJlc291cmNlOiBcIipcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZUN0RGFzaDAwMUxvZ0dyb3VwID0gbmV3IGxvZ3MuQ2ZuTG9nR3JvdXAoXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlQ1REYXNoMDAxTG9nR3JvdXBcIixcbiAgICAgIHtcbiAgICAgICAgbG9nR3JvdXBOYW1lOiBcIi9hd3MvbGFtYmRhL2F1dG8tcmVtZWRpYXRlLXYxLUF1dG9SZW1lZGlhdGVDVC0wMDFcIixcbiAgICAgICAgcmV0ZW50aW9uSW5EYXlzOiAzMCxcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVDdERhc2gwMDNMb2dHcm91cCA9IG5ldyBsb2dzLkNmbkxvZ0dyb3VwKFxuICAgICAgdGhpcyxcbiAgICAgIFwiQXV0b1JlbWVkaWF0ZUNURGFzaDAwM0xvZ0dyb3VwXCIsXG4gICAgICB7XG4gICAgICAgIGxvZ0dyb3VwTmFtZTogXCIvYXdzL2xhbWJkYS9hdXRvLXJlbWVkaWF0ZS12MS1BdXRvUmVtZWRpYXRlQ1QtMDAzXCIsXG4gICAgICAgIHJldGVudGlvbkluRGF5czogMzAsXG4gICAgICB9LFxuICAgICk7XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlQ29uZmlnMDAxUm9sZSA9IG5ldyBpYW0uQ2ZuUm9sZShcbiAgICAgIHRoaXMsXG4gICAgICBcIkF1dG9SZW1lZGlhdGVDb25maWcwMDFSb2xlXCIsXG4gICAgICB7XG4gICAgICAgIHJvbGVOYW1lOiBcIkF1dG9SZW1lZGlhdGVDb25maWctMDAxUm9sZVwiLFxuICAgICAgICBhc3N1bWVSb2xlUG9saWN5RG9jdW1lbnQ6IHtcbiAgICAgICAgICBWZXJzaW9uOiBcIjIwMTItMTAtMTdcIixcbiAgICAgICAgICBTdGF0ZW1lbnQ6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgIFByaW5jaXBhbDoge1xuICAgICAgICAgICAgICAgIFNlcnZpY2U6IFtcImxhbWJkYS5hbWF6b25hd3MuY29tXCJdLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBBY3Rpb246IFtcInN0czpBc3N1bWVSb2xlXCJdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBwb2xpY2llczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBvbGljeU5hbWU6IFwiQXV0b1JlbWVkaWF0aW9uWFJheVBvbGljeVwiLFxuICAgICAgICAgICAgcG9saWN5RG9jdW1lbnQ6IHtcbiAgICAgICAgICAgICAgU3RhdGVtZW50OiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgICAgICBBY3Rpb246IFtcInhyYXk6UHV0VHJhY2VTZWdtZW50c1wiLCBcInhyYXk6UHV0VGVsZW1ldHJ5UmVjb3Jkc1wiXSxcbiAgICAgICAgICAgICAgICAgIFJlc291cmNlOiBcIipcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBvbGljeU5hbWU6IFwiQXV0b1JlbWVkaWF0ZUNvbmZpZy0wMDFQb2xpY3lcIixcbiAgICAgICAgICAgIHBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgICAgIFN0YXRlbWVudDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgQWN0aW9uOiBbXG4gICAgICAgICAgICAgICAgICAgIFwibG9nczpDcmVhdGVMb2dHcm91cFwiLFxuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6Q3JlYXRlTG9nU3RyZWFtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibG9nczpQdXRMb2dFdmVudHNcIixcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBSZXNvdXJjZTogW1xuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgXCJhcm46YXdzOmxvZ3NcIixcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZ2lvbixcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgXCJsb2ctZ3JvdXA6L2F3cy9sYW1iZGEvKjoqOipcIixcbiAgICAgICAgICAgICAgICAgICAgXS5qb2luKFwiOlwiKSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICAgIEFjdGlvbjogW1xuICAgICAgICAgICAgICAgICAgICBcImNvbmZpZzpQdXRDb25maWd1cmF0aW9uUmVjb3JkZXJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJjb25maWc6UHV0RGVsaXZlcnlDaGFubmVsXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY29uZmlnOlN0YXJ0Q29uZmlndXJhdGlvblJlY29yZGVyXCIsXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgUmVzb3VyY2U6IFwiKlwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgICAgICBBY3Rpb246IFtcbiAgICAgICAgICAgICAgICAgICAgXCJpYW06QXR0YWNoUm9sZVBvbGljeVwiLFxuICAgICAgICAgICAgICAgICAgICBcImlhbTpDcmVhdGVSb2xlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiaWFtOkdldFJvbGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJpYW06UHV0Um9sZVBvbGljeVwiLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFJlc291cmNlOiBcIipcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgQWN0aW9uOiBbXCJzdHM6R2V0Q2FsbGVySWRlbnRpdHlcIl0sXG4gICAgICAgICAgICAgICAgICBSZXNvdXJjZTogXCIqXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVDb25maWdEYXNoMDAxTG9nR3JvdXAgPSBuZXcgbG9ncy5DZm5Mb2dHcm91cChcbiAgICAgIHRoaXMsXG4gICAgICBcIkF1dG9SZW1lZGlhdGVDb25maWdEYXNoMDAxTG9nR3JvdXBcIixcbiAgICAgIHtcbiAgICAgICAgbG9nR3JvdXBOYW1lOiBcIi9hd3MvbGFtYmRhL2F1dG8tcmVtZWRpYXRlLXYxLUF1dG9SZW1lZGlhdGVDb25maWctMDAxXCIsXG4gICAgICAgIHJldGVudGlvbkluRGF5czogMzAsXG4gICAgICB9LFxuICAgICk7XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlRWJzMDA5Um9sZSA9IG5ldyBpYW0uQ2ZuUm9sZShcbiAgICAgIHRoaXMsXG4gICAgICBcIkF1dG9SZW1lZGlhdGVFQlMwMDlSb2xlXCIsXG4gICAgICB7XG4gICAgICAgIHJvbGVOYW1lOiBcIkF1dG9SZW1lZGlhdGVFQlMtMDA5Um9sZVwiLFxuICAgICAgICBhc3N1bWVSb2xlUG9saWN5RG9jdW1lbnQ6IHtcbiAgICAgICAgICBWZXJzaW9uOiBcIjIwMTItMTAtMTdcIixcbiAgICAgICAgICBTdGF0ZW1lbnQ6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgIFByaW5jaXBhbDoge1xuICAgICAgICAgICAgICAgIFNlcnZpY2U6IFtcImxhbWJkYS5hbWF6b25hd3MuY29tXCJdLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBBY3Rpb246IFtcInN0czpBc3N1bWVSb2xlXCJdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBwb2xpY2llczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBvbGljeU5hbWU6IFwiQXV0b1JlbWVkaWF0aW9uWFJheVBvbGljeVwiLFxuICAgICAgICAgICAgcG9saWN5RG9jdW1lbnQ6IHtcbiAgICAgICAgICAgICAgU3RhdGVtZW50OiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgICAgICBBY3Rpb246IFtcInhyYXk6UHV0VHJhY2VTZWdtZW50c1wiLCBcInhyYXk6UHV0VGVsZW1ldHJ5UmVjb3Jkc1wiXSxcbiAgICAgICAgICAgICAgICAgIFJlc291cmNlOiBcIipcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBvbGljeU5hbWU6IFwiQXV0b1JlbWVkaWF0ZUVCUy0wMDlQb2xpY3lcIixcbiAgICAgICAgICAgIHBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgICAgIFN0YXRlbWVudDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgQWN0aW9uOiBbXG4gICAgICAgICAgICAgICAgICAgIFwibG9nczpDcmVhdGVMb2dHcm91cFwiLFxuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6Q3JlYXRlTG9nU3RyZWFtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibG9nczpQdXRMb2dFdmVudHNcIixcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBSZXNvdXJjZTogW1xuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgXCJhcm46YXdzOmxvZ3NcIixcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZ2lvbixcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgXCJsb2ctZ3JvdXA6L2F3cy9sYW1iZGEvKjoqOipcIixcbiAgICAgICAgICAgICAgICAgICAgXS5qb2luKFwiOlwiKSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICAgIEFjdGlvbjogW1wiZWMyOk1vZGlmeVNuYXBzaG90QXR0cmlidXRlXCJdLFxuICAgICAgICAgICAgICAgICAgUmVzb3VyY2U6IFwiKlwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICk7XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlRWJzRGFzaDAwOUxvZ0dyb3VwID0gbmV3IGxvZ3MuQ2ZuTG9nR3JvdXAoXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlRUJTRGFzaDAwOUxvZ0dyb3VwXCIsXG4gICAgICB7XG4gICAgICAgIGxvZ0dyb3VwTmFtZTogXCIvYXdzL2xhbWJkYS9hdXRvLXJlbWVkaWF0ZS12MS1BdXRvUmVtZWRpYXRlRUJTLTAwOVwiLFxuICAgICAgICByZXRlbnRpb25JbkRheXM6IDMwLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZUVjMjAwMlJvbGUgPSBuZXcgaWFtLkNmblJvbGUoXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlRUMyMDAyUm9sZVwiLFxuICAgICAge1xuICAgICAgICByb2xlTmFtZTogXCJBdXRvUmVtZWRpYXRlRUMyLTAwMlJvbGVcIixcbiAgICAgICAgYXNzdW1lUm9sZVBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgVmVyc2lvbjogXCIyMDEyLTEwLTE3XCIsXG4gICAgICAgICAgU3RhdGVtZW50OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICBQcmluY2lwYWw6IHtcbiAgICAgICAgICAgICAgICBTZXJ2aWNlOiBbXCJsYW1iZGEuYW1hem9uYXdzLmNvbVwiXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgQWN0aW9uOiBbXCJzdHM6QXNzdW1lUm9sZVwiXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgcG9saWNpZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwb2xpY3lOYW1lOiBcIkF1dG9SZW1lZGlhdGlvblhSYXlQb2xpY3lcIixcbiAgICAgICAgICAgIHBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgICAgIFN0YXRlbWVudDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgQWN0aW9uOiBbXCJ4cmF5OlB1dFRyYWNlU2VnbWVudHNcIiwgXCJ4cmF5OlB1dFRlbGVtZXRyeVJlY29yZHNcIl0sXG4gICAgICAgICAgICAgICAgICBSZXNvdXJjZTogXCIqXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwb2xpY3lOYW1lOiBcIkF1dG9SZW1lZGlhdGVFQzItMDAyUG9saWN5XCIsXG4gICAgICAgICAgICBwb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgICAgICBTdGF0ZW1lbnQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICAgIEFjdGlvbjogW1xuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6Q3JlYXRlTG9nR3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsb2dzOkNyZWF0ZUxvZ1N0cmVhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6UHV0TG9nRXZlbnRzXCIsXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgUmVzb3VyY2U6IFtcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIFwiYXJuOmF3czpsb2dzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpb24sXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NvdW50LFxuICAgICAgICAgICAgICAgICAgICAgIFwibG9nLWdyb3VwOi9hd3MvbGFtYmRhLyo6KjoqXCIsXG4gICAgICAgICAgICAgICAgICAgIF0uam9pbihcIjpcIiksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgICAgICBBY3Rpb246IFtcImVjMjpSZXZva2VTZWN1cml0eUdyb3VwSW5ncmVzc1wiXSxcbiAgICAgICAgICAgICAgICAgIFJlc291cmNlOiBcIipcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZUVjMjAwM1JvbGUgPSBuZXcgaWFtLkNmblJvbGUoXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlRUMyMDAzUm9sZVwiLFxuICAgICAge1xuICAgICAgICByb2xlTmFtZTogXCJBdXRvUmVtZWRpYXRlRUMyLTAwM1JvbGVcIixcbiAgICAgICAgYXNzdW1lUm9sZVBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgVmVyc2lvbjogXCIyMDEyLTEwLTE3XCIsXG4gICAgICAgICAgU3RhdGVtZW50OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICBQcmluY2lwYWw6IHtcbiAgICAgICAgICAgICAgICBTZXJ2aWNlOiBbXCJsYW1iZGEuYW1hem9uYXdzLmNvbVwiXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgQWN0aW9uOiBbXCJzdHM6QXNzdW1lUm9sZVwiXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgcG9saWNpZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwb2xpY3lOYW1lOiBcIkF1dG9SZW1lZGlhdGlvblhSYXlQb2xpY3lcIixcbiAgICAgICAgICAgIHBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgICAgIFN0YXRlbWVudDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgQWN0aW9uOiBbXCJ4cmF5OlB1dFRyYWNlU2VnbWVudHNcIiwgXCJ4cmF5OlB1dFRlbGVtZXRyeVJlY29yZHNcIl0sXG4gICAgICAgICAgICAgICAgICBSZXNvdXJjZTogXCIqXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwb2xpY3lOYW1lOiBcIkF1dG9SZW1lZGlhdGVFQzItMDAzUG9saWN5XCIsXG4gICAgICAgICAgICBwb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgICAgICBTdGF0ZW1lbnQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICAgIEFjdGlvbjogW1xuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6Q3JlYXRlTG9nR3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsb2dzOkNyZWF0ZUxvZ1N0cmVhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6UHV0TG9nRXZlbnRzXCIsXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgUmVzb3VyY2U6IFtcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIFwiYXJuOmF3czpsb2dzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpb24sXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NvdW50LFxuICAgICAgICAgICAgICAgICAgICAgIFwibG9nLWdyb3VwOi9hd3MvbGFtYmRhLyo6KjoqXCIsXG4gICAgICAgICAgICAgICAgICAgIF0uam9pbihcIjpcIiksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgICAgICBBY3Rpb246IFtcImVjMjpSZXZva2VTZWN1cml0eUdyb3VwSW5ncmVzc1wiXSxcbiAgICAgICAgICAgICAgICAgIFJlc291cmNlOiBcIipcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZUVjMjAwNFJvbGUgPSBuZXcgaWFtLkNmblJvbGUoXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlRUMyMDA0Um9sZVwiLFxuICAgICAge1xuICAgICAgICByb2xlTmFtZTogXCJBdXRvUmVtZWRpYXRlRUMyLTAwNFJvbGVcIixcbiAgICAgICAgYXNzdW1lUm9sZVBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgVmVyc2lvbjogXCIyMDEyLTEwLTE3XCIsXG4gICAgICAgICAgU3RhdGVtZW50OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICBQcmluY2lwYWw6IHtcbiAgICAgICAgICAgICAgICBTZXJ2aWNlOiBbXCJsYW1iZGEuYW1hem9uYXdzLmNvbVwiXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgQWN0aW9uOiBbXCJzdHM6QXNzdW1lUm9sZVwiXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgcG9saWNpZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwb2xpY3lOYW1lOiBcIkF1dG9SZW1lZGlhdGlvblhSYXlQb2xpY3lcIixcbiAgICAgICAgICAgIHBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgICAgIFN0YXRlbWVudDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgQWN0aW9uOiBbXCJ4cmF5OlB1dFRyYWNlU2VnbWVudHNcIiwgXCJ4cmF5OlB1dFRlbGVtZXRyeVJlY29yZHNcIl0sXG4gICAgICAgICAgICAgICAgICBSZXNvdXJjZTogXCIqXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwb2xpY3lOYW1lOiBcIkF1dG9SZW1lZGlhdGVFQzItMDA0UG9saWN5XCIsXG4gICAgICAgICAgICBwb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgICAgICBTdGF0ZW1lbnQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICAgIEFjdGlvbjogW1xuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6Q3JlYXRlTG9nR3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsb2dzOkNyZWF0ZUxvZ1N0cmVhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6UHV0TG9nRXZlbnRzXCIsXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgUmVzb3VyY2U6IFtcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIFwiYXJuOmF3czpsb2dzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpb24sXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NvdW50LFxuICAgICAgICAgICAgICAgICAgICAgIFwibG9nLWdyb3VwOi9hd3MvbGFtYmRhLyo6KjoqXCIsXG4gICAgICAgICAgICAgICAgICAgIF0uam9pbihcIjpcIiksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgICAgICBBY3Rpb246IFtcImVjMjpSZXZva2VTZWN1cml0eUdyb3VwSW5ncmVzc1wiXSxcbiAgICAgICAgICAgICAgICAgIFJlc291cmNlOiBcIipcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZUVjMjAwNVJvbGUgPSBuZXcgaWFtLkNmblJvbGUoXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlRUMyMDA1Um9sZVwiLFxuICAgICAge1xuICAgICAgICByb2xlTmFtZTogXCJBdXRvUmVtZWRpYXRlRUMyLTAwNVJvbGVcIixcbiAgICAgICAgYXNzdW1lUm9sZVBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgVmVyc2lvbjogXCIyMDEyLTEwLTE3XCIsXG4gICAgICAgICAgU3RhdGVtZW50OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICBQcmluY2lwYWw6IHtcbiAgICAgICAgICAgICAgICBTZXJ2aWNlOiBbXCJsYW1iZGEuYW1hem9uYXdzLmNvbVwiXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgQWN0aW9uOiBbXCJzdHM6QXNzdW1lUm9sZVwiXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgcG9saWNpZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwb2xpY3lOYW1lOiBcIkF1dG9SZW1lZGlhdGlvblhSYXlQb2xpY3lcIixcbiAgICAgICAgICAgIHBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgICAgIFN0YXRlbWVudDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgQWN0aW9uOiBbXCJ4cmF5OlB1dFRyYWNlU2VnbWVudHNcIiwgXCJ4cmF5OlB1dFRlbGVtZXRyeVJlY29yZHNcIl0sXG4gICAgICAgICAgICAgICAgICBSZXNvdXJjZTogXCIqXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwb2xpY3lOYW1lOiBcIkF1dG9SZW1lZGlhdGVFQzItMDA1UG9saWN5XCIsXG4gICAgICAgICAgICBwb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgICAgICBTdGF0ZW1lbnQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICAgIEFjdGlvbjogW1xuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6Q3JlYXRlTG9nR3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsb2dzOkNyZWF0ZUxvZ1N0cmVhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6UHV0TG9nRXZlbnRzXCIsXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgUmVzb3VyY2U6IFtcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIFwiYXJuOmF3czpsb2dzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpb24sXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NvdW50LFxuICAgICAgICAgICAgICAgICAgICAgIFwibG9nLWdyb3VwOi9hd3MvbGFtYmRhLyo6KjoqXCIsXG4gICAgICAgICAgICAgICAgICAgIF0uam9pbihcIjpcIiksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgICAgICBBY3Rpb246IFtcImVjMjpSZXZva2VTZWN1cml0eUdyb3VwSW5ncmVzc1wiXSxcbiAgICAgICAgICAgICAgICAgIFJlc291cmNlOiBcIipcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZUVjMjAwNlJvbGUgPSBuZXcgaWFtLkNmblJvbGUoXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlRUMyMDA2Um9sZVwiLFxuICAgICAge1xuICAgICAgICByb2xlTmFtZTogXCJBdXRvUmVtZWRpYXRlRUMyLTAwNlJvbGVcIixcbiAgICAgICAgYXNzdW1lUm9sZVBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgVmVyc2lvbjogXCIyMDEyLTEwLTE3XCIsXG4gICAgICAgICAgU3RhdGVtZW50OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICBQcmluY2lwYWw6IHtcbiAgICAgICAgICAgICAgICBTZXJ2aWNlOiBbXCJsYW1iZGEuYW1hem9uYXdzLmNvbVwiXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgQWN0aW9uOiBbXCJzdHM6QXNzdW1lUm9sZVwiXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgcG9saWNpZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwb2xpY3lOYW1lOiBcIkF1dG9SZW1lZGlhdGlvblhSYXlQb2xpY3lcIixcbiAgICAgICAgICAgIHBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgICAgIFN0YXRlbWVudDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgQWN0aW9uOiBbXCJ4cmF5OlB1dFRyYWNlU2VnbWVudHNcIiwgXCJ4cmF5OlB1dFRlbGVtZXRyeVJlY29yZHNcIl0sXG4gICAgICAgICAgICAgICAgICBSZXNvdXJjZTogXCIqXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwb2xpY3lOYW1lOiBcIkF1dG9SZW1lZGlhdGVFQzItMDA2UG9saWN5XCIsXG4gICAgICAgICAgICBwb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgICAgICBTdGF0ZW1lbnQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICAgIEFjdGlvbjogW1xuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6Q3JlYXRlTG9nR3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsb2dzOkNyZWF0ZUxvZ1N0cmVhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6UHV0TG9nRXZlbnRzXCIsXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgUmVzb3VyY2U6IFtcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIFwiYXJuOmF3czpsb2dzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpb24sXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NvdW50LFxuICAgICAgICAgICAgICAgICAgICAgIFwibG9nLWdyb3VwOi9hd3MvbGFtYmRhLyo6KjoqXCIsXG4gICAgICAgICAgICAgICAgICAgIF0uam9pbihcIjpcIiksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgICAgICBBY3Rpb246IFtcImVjMjpSZXZva2VTZWN1cml0eUdyb3VwSW5ncmVzc1wiXSxcbiAgICAgICAgICAgICAgICAgIFJlc291cmNlOiBcIipcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZUVjMjAwOFJvbGUgPSBuZXcgaWFtLkNmblJvbGUoXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlRUMyMDA4Um9sZVwiLFxuICAgICAge1xuICAgICAgICByb2xlTmFtZTogXCJBdXRvUmVtZWRpYXRlRUMyLTAwOFJvbGVcIixcbiAgICAgICAgYXNzdW1lUm9sZVBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgVmVyc2lvbjogXCIyMDEyLTEwLTE3XCIsXG4gICAgICAgICAgU3RhdGVtZW50OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICBQcmluY2lwYWw6IHtcbiAgICAgICAgICAgICAgICBTZXJ2aWNlOiBbXCJsYW1iZGEuYW1hem9uYXdzLmNvbVwiXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgQWN0aW9uOiBbXCJzdHM6QXNzdW1lUm9sZVwiXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgcG9saWNpZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwb2xpY3lOYW1lOiBcIkF1dG9SZW1lZGlhdGlvblhSYXlQb2xpY3lcIixcbiAgICAgICAgICAgIHBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgICAgIFN0YXRlbWVudDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgQWN0aW9uOiBbXCJ4cmF5OlB1dFRyYWNlU2VnbWVudHNcIiwgXCJ4cmF5OlB1dFRlbGVtZXRyeVJlY29yZHNcIl0sXG4gICAgICAgICAgICAgICAgICBSZXNvdXJjZTogXCIqXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwb2xpY3lOYW1lOiBcIkF1dG9SZW1lZGlhdGVFQzItMDA4UG9saWN5XCIsXG4gICAgICAgICAgICBwb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgICAgICBTdGF0ZW1lbnQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICAgIEFjdGlvbjogW1xuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6Q3JlYXRlTG9nR3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsb2dzOkNyZWF0ZUxvZ1N0cmVhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6UHV0TG9nRXZlbnRzXCIsXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgUmVzb3VyY2U6IFtcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIFwiYXJuOmF3czpsb2dzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpb24sXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NvdW50LFxuICAgICAgICAgICAgICAgICAgICAgIFwibG9nLWdyb3VwOi9hd3MvbGFtYmRhLyo6KjoqXCIsXG4gICAgICAgICAgICAgICAgICAgIF0uam9pbihcIjpcIiksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgICAgICBBY3Rpb246IFtcImVjMjpSZXZva2VTZWN1cml0eUdyb3VwSW5ncmVzc1wiXSxcbiAgICAgICAgICAgICAgICAgIFJlc291cmNlOiBcIipcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZUVjMjAxOVJvbGUgPSBuZXcgaWFtLkNmblJvbGUoXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlRUMyMDE5Um9sZVwiLFxuICAgICAge1xuICAgICAgICByb2xlTmFtZTogXCJBdXRvUmVtZWRpYXRlRUMyLTAxOVJvbGVcIixcbiAgICAgICAgYXNzdW1lUm9sZVBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgVmVyc2lvbjogXCIyMDEyLTEwLTE3XCIsXG4gICAgICAgICAgU3RhdGVtZW50OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICBQcmluY2lwYWw6IHtcbiAgICAgICAgICAgICAgICBTZXJ2aWNlOiBbXCJsYW1iZGEuYW1hem9uYXdzLmNvbVwiXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgQWN0aW9uOiBbXCJzdHM6QXNzdW1lUm9sZVwiXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgcG9saWNpZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwb2xpY3lOYW1lOiBcIkF1dG9SZW1lZGlhdGlvblhSYXlQb2xpY3lcIixcbiAgICAgICAgICAgIHBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgICAgIFN0YXRlbWVudDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgQWN0aW9uOiBbXCJ4cmF5OlB1dFRyYWNlU2VnbWVudHNcIiwgXCJ4cmF5OlB1dFRlbGVtZXRyeVJlY29yZHNcIl0sXG4gICAgICAgICAgICAgICAgICBSZXNvdXJjZTogXCIqXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwb2xpY3lOYW1lOiBcIkF1dG9SZW1lZGlhdGVFQzItMDE5UG9saWN5XCIsXG4gICAgICAgICAgICBwb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgICAgICBTdGF0ZW1lbnQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICAgIEFjdGlvbjogW1xuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6Q3JlYXRlTG9nR3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsb2dzOkNyZWF0ZUxvZ1N0cmVhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6UHV0TG9nRXZlbnRzXCIsXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgUmVzb3VyY2U6IFtcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIFwiYXJuOmF3czpsb2dzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpb24sXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NvdW50LFxuICAgICAgICAgICAgICAgICAgICAgIFwibG9nLWdyb3VwOi9hd3MvbGFtYmRhLyo6KjoqXCIsXG4gICAgICAgICAgICAgICAgICAgIF0uam9pbihcIjpcIiksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgICAgICBBY3Rpb246IFtcImVjMjpNb2RpZnlJbWFnZUF0dHJpYnV0ZVwiXSxcbiAgICAgICAgICAgICAgICAgIFJlc291cmNlOiBcIipcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZUVjMjAzOFJvbGUgPSBuZXcgaWFtLkNmblJvbGUoXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlRUMyMDM4Um9sZVwiLFxuICAgICAge1xuICAgICAgICByb2xlTmFtZTogXCJBdXRvUmVtZWRpYXRlRUMyLTAzOFJvbGVcIixcbiAgICAgICAgYXNzdW1lUm9sZVBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgVmVyc2lvbjogXCIyMDEyLTEwLTE3XCIsXG4gICAgICAgICAgU3RhdGVtZW50OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICBQcmluY2lwYWw6IHtcbiAgICAgICAgICAgICAgICBTZXJ2aWNlOiBbXCJsYW1iZGEuYW1hem9uYXdzLmNvbVwiXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgQWN0aW9uOiBbXCJzdHM6QXNzdW1lUm9sZVwiXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgcG9saWNpZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwb2xpY3lOYW1lOiBcIkF1dG9SZW1lZGlhdGlvblhSYXlQb2xpY3lcIixcbiAgICAgICAgICAgIHBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgICAgIFN0YXRlbWVudDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgQWN0aW9uOiBbXCJ4cmF5OlB1dFRyYWNlU2VnbWVudHNcIiwgXCJ4cmF5OlB1dFRlbGVtZXRyeVJlY29yZHNcIl0sXG4gICAgICAgICAgICAgICAgICBSZXNvdXJjZTogXCIqXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwb2xpY3lOYW1lOiBcIkF1dG9SZW1lZGlhdGVFQzItMDM4UG9saWN5XCIsXG4gICAgICAgICAgICBwb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgICAgICBTdGF0ZW1lbnQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICAgIEFjdGlvbjogW1xuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6Q3JlYXRlTG9nR3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsb2dzOkNyZWF0ZUxvZ1N0cmVhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6UHV0TG9nRXZlbnRzXCIsXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgUmVzb3VyY2U6IFtcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIFwiYXJuOmF3czpsb2dzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpb24sXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NvdW50LFxuICAgICAgICAgICAgICAgICAgICAgIFwibG9nLWdyb3VwOi9hd3MvbGFtYmRhLyo6KjoqXCIsXG4gICAgICAgICAgICAgICAgICAgIF0uam9pbihcIjpcIiksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgICAgICBBY3Rpb246IFtcImVjMjpSZXZva2VTZWN1cml0eUdyb3VwSW5ncmVzc1wiXSxcbiAgICAgICAgICAgICAgICAgIFJlc291cmNlOiBcIipcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZUVjMjAzOVJvbGUgPSBuZXcgaWFtLkNmblJvbGUoXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlRUMyMDM5Um9sZVwiLFxuICAgICAge1xuICAgICAgICByb2xlTmFtZTogXCJBdXRvUmVtZWRpYXRlRUMyLTAzOVJvbGVcIixcbiAgICAgICAgYXNzdW1lUm9sZVBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgVmVyc2lvbjogXCIyMDEyLTEwLTE3XCIsXG4gICAgICAgICAgU3RhdGVtZW50OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICBQcmluY2lwYWw6IHtcbiAgICAgICAgICAgICAgICBTZXJ2aWNlOiBbXCJsYW1iZGEuYW1hem9uYXdzLmNvbVwiXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgQWN0aW9uOiBbXCJzdHM6QXNzdW1lUm9sZVwiXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgcG9saWNpZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwb2xpY3lOYW1lOiBcIkF1dG9SZW1lZGlhdGlvblhSYXlQb2xpY3lcIixcbiAgICAgICAgICAgIHBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgICAgIFN0YXRlbWVudDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgQWN0aW9uOiBbXCJ4cmF5OlB1dFRyYWNlU2VnbWVudHNcIiwgXCJ4cmF5OlB1dFRlbGVtZXRyeVJlY29yZHNcIl0sXG4gICAgICAgICAgICAgICAgICBSZXNvdXJjZTogXCIqXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwb2xpY3lOYW1lOiBcIkF1dG9SZW1lZGlhdGVFQzItMDM5UG9saWN5XCIsXG4gICAgICAgICAgICBwb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgICAgICBTdGF0ZW1lbnQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICAgIEFjdGlvbjogW1xuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6Q3JlYXRlTG9nR3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsb2dzOkNyZWF0ZUxvZ1N0cmVhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6UHV0TG9nRXZlbnRzXCIsXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgUmVzb3VyY2U6IFtcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIFwiYXJuOmF3czpsb2dzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpb24sXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NvdW50LFxuICAgICAgICAgICAgICAgICAgICAgIFwibG9nLWdyb3VwOi9hd3MvbGFtYmRhLyo6KjoqXCIsXG4gICAgICAgICAgICAgICAgICAgIF0uam9pbihcIjpcIiksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgICAgICBBY3Rpb246IFtcImVjMjpSZXZva2VTZWN1cml0eUdyb3VwSW5ncmVzc1wiXSxcbiAgICAgICAgICAgICAgICAgIFJlc291cmNlOiBcIipcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZUVjMjA0MFJvbGUgPSBuZXcgaWFtLkNmblJvbGUoXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlRUMyMDQwUm9sZVwiLFxuICAgICAge1xuICAgICAgICByb2xlTmFtZTogXCJBdXRvUmVtZWRpYXRlRUMyLTA0MFJvbGVcIixcbiAgICAgICAgYXNzdW1lUm9sZVBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgVmVyc2lvbjogXCIyMDEyLTEwLTE3XCIsXG4gICAgICAgICAgU3RhdGVtZW50OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICBQcmluY2lwYWw6IHtcbiAgICAgICAgICAgICAgICBTZXJ2aWNlOiBbXCJsYW1iZGEuYW1hem9uYXdzLmNvbVwiXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgQWN0aW9uOiBbXCJzdHM6QXNzdW1lUm9sZVwiXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgcG9saWNpZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwb2xpY3lOYW1lOiBcIkF1dG9SZW1lZGlhdGlvblhSYXlQb2xpY3lcIixcbiAgICAgICAgICAgIHBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgICAgIFN0YXRlbWVudDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgQWN0aW9uOiBbXCJ4cmF5OlB1dFRyYWNlU2VnbWVudHNcIiwgXCJ4cmF5OlB1dFRlbGVtZXRyeVJlY29yZHNcIl0sXG4gICAgICAgICAgICAgICAgICBSZXNvdXJjZTogXCIqXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwb2xpY3lOYW1lOiBcIkF1dG9SZW1lZGlhdGVFQzItMDQwUG9saWN5XCIsXG4gICAgICAgICAgICBwb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgICAgICBTdGF0ZW1lbnQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICAgIEFjdGlvbjogW1xuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6Q3JlYXRlTG9nR3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsb2dzOkNyZWF0ZUxvZ1N0cmVhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6UHV0TG9nRXZlbnRzXCIsXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgUmVzb3VyY2U6IFtcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIFwiYXJuOmF3czpsb2dzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpb24sXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NvdW50LFxuICAgICAgICAgICAgICAgICAgICAgIFwibG9nLWdyb3VwOi9hd3MvbGFtYmRhLyo6KjoqXCIsXG4gICAgICAgICAgICAgICAgICAgIF0uam9pbihcIjpcIiksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgICAgICBBY3Rpb246IFtcImVjMjpSZXZva2VTZWN1cml0eUdyb3VwSW5ncmVzc1wiXSxcbiAgICAgICAgICAgICAgICAgIFJlc291cmNlOiBcIipcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZUVjMjA0MlJvbGUgPSBuZXcgaWFtLkNmblJvbGUoXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlRUMyMDQyUm9sZVwiLFxuICAgICAge1xuICAgICAgICByb2xlTmFtZTogXCJBdXRvUmVtZWRpYXRlRUMyLTA0MlJvbGVcIixcbiAgICAgICAgYXNzdW1lUm9sZVBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgVmVyc2lvbjogXCIyMDEyLTEwLTE3XCIsXG4gICAgICAgICAgU3RhdGVtZW50OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICBQcmluY2lwYWw6IHtcbiAgICAgICAgICAgICAgICBTZXJ2aWNlOiBbXCJsYW1iZGEuYW1hem9uYXdzLmNvbVwiXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgQWN0aW9uOiBbXCJzdHM6QXNzdW1lUm9sZVwiXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgcG9saWNpZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwb2xpY3lOYW1lOiBcIkF1dG9SZW1lZGlhdGlvblhSYXlQb2xpY3lcIixcbiAgICAgICAgICAgIHBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgICAgIFN0YXRlbWVudDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgQWN0aW9uOiBbXCJ4cmF5OlB1dFRyYWNlU2VnbWVudHNcIiwgXCJ4cmF5OlB1dFRlbGVtZXRyeVJlY29yZHNcIl0sXG4gICAgICAgICAgICAgICAgICBSZXNvdXJjZTogXCIqXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwb2xpY3lOYW1lOiBcIkF1dG9SZW1lZGlhdGVFQzItMDQyUG9saWN5XCIsXG4gICAgICAgICAgICBwb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgICAgICBTdGF0ZW1lbnQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICAgIEFjdGlvbjogW1xuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6Q3JlYXRlTG9nR3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsb2dzOkNyZWF0ZUxvZ1N0cmVhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6UHV0TG9nRXZlbnRzXCIsXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgUmVzb3VyY2U6IFtcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIFwiYXJuOmF3czpsb2dzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpb24sXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NvdW50LFxuICAgICAgICAgICAgICAgICAgICAgIFwibG9nLWdyb3VwOi9hd3MvbGFtYmRhLyo6KjoqXCIsXG4gICAgICAgICAgICAgICAgICAgIF0uam9pbihcIjpcIiksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgICAgICBBY3Rpb246IFtcImVjMjpSZXZva2VTZWN1cml0eUdyb3VwSW5ncmVzc1wiXSxcbiAgICAgICAgICAgICAgICAgIFJlc291cmNlOiBcIipcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZUVjMjA0M1JvbGUgPSBuZXcgaWFtLkNmblJvbGUoXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlRUMyMDQzUm9sZVwiLFxuICAgICAge1xuICAgICAgICByb2xlTmFtZTogXCJBdXRvUmVtZWRpYXRlRUMyLTA0M1JvbGVcIixcbiAgICAgICAgYXNzdW1lUm9sZVBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgVmVyc2lvbjogXCIyMDEyLTEwLTE3XCIsXG4gICAgICAgICAgU3RhdGVtZW50OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICBQcmluY2lwYWw6IHtcbiAgICAgICAgICAgICAgICBTZXJ2aWNlOiBbXCJsYW1iZGEuYW1hem9uYXdzLmNvbVwiXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgQWN0aW9uOiBbXCJzdHM6QXNzdW1lUm9sZVwiXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgcG9saWNpZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwb2xpY3lOYW1lOiBcIkF1dG9SZW1lZGlhdGlvblhSYXlQb2xpY3lcIixcbiAgICAgICAgICAgIHBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgICAgIFN0YXRlbWVudDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgQWN0aW9uOiBbXCJ4cmF5OlB1dFRyYWNlU2VnbWVudHNcIiwgXCJ4cmF5OlB1dFRlbGVtZXRyeVJlY29yZHNcIl0sXG4gICAgICAgICAgICAgICAgICBSZXNvdXJjZTogXCIqXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwb2xpY3lOYW1lOiBcIkF1dG9SZW1lZGlhdGVFQzItMDQzUG9saWN5XCIsXG4gICAgICAgICAgICBwb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgICAgICBTdGF0ZW1lbnQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICAgIEFjdGlvbjogW1xuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6Q3JlYXRlTG9nR3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsb2dzOkNyZWF0ZUxvZ1N0cmVhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6UHV0TG9nRXZlbnRzXCIsXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgUmVzb3VyY2U6IFtcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIFwiYXJuOmF3czpsb2dzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpb24sXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NvdW50LFxuICAgICAgICAgICAgICAgICAgICAgIFwibG9nLWdyb3VwOi9hd3MvbGFtYmRhLyo6KjoqXCIsXG4gICAgICAgICAgICAgICAgICAgIF0uam9pbihcIjpcIiksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgICAgICBBY3Rpb246IFtcImVjMjpSZXZva2VTZWN1cml0eUdyb3VwSW5ncmVzc1wiXSxcbiAgICAgICAgICAgICAgICAgIFJlc291cmNlOiBcIipcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZUVjMjA0NVJvbGUgPSBuZXcgaWFtLkNmblJvbGUoXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlRUMyMDQ1Um9sZVwiLFxuICAgICAge1xuICAgICAgICByb2xlTmFtZTogXCJBdXRvUmVtZWRpYXRlRUMyLTA0NVJvbGVcIixcbiAgICAgICAgYXNzdW1lUm9sZVBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgVmVyc2lvbjogXCIyMDEyLTEwLTE3XCIsXG4gICAgICAgICAgU3RhdGVtZW50OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICBQcmluY2lwYWw6IHtcbiAgICAgICAgICAgICAgICBTZXJ2aWNlOiBbXCJsYW1iZGEuYW1hem9uYXdzLmNvbVwiXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgQWN0aW9uOiBbXCJzdHM6QXNzdW1lUm9sZVwiXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgcG9saWNpZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwb2xpY3lOYW1lOiBcIkF1dG9SZW1lZGlhdGlvblhSYXlQb2xpY3lcIixcbiAgICAgICAgICAgIHBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgICAgIFN0YXRlbWVudDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgQWN0aW9uOiBbXCJ4cmF5OlB1dFRyYWNlU2VnbWVudHNcIiwgXCJ4cmF5OlB1dFRlbGVtZXRyeVJlY29yZHNcIl0sXG4gICAgICAgICAgICAgICAgICBSZXNvdXJjZTogXCIqXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwb2xpY3lOYW1lOiBcIkF1dG9SZW1lZGlhdGVFQzItMDQ1UG9saWN5XCIsXG4gICAgICAgICAgICBwb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgICAgICBTdGF0ZW1lbnQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICAgIEFjdGlvbjogW1xuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6Q3JlYXRlTG9nR3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsb2dzOkNyZWF0ZUxvZ1N0cmVhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6UHV0TG9nRXZlbnRzXCIsXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgUmVzb3VyY2U6IFtcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIFwiYXJuOmF3czpsb2dzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpb24sXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NvdW50LFxuICAgICAgICAgICAgICAgICAgICAgIFwibG9nLWdyb3VwOi9hd3MvbGFtYmRhLyo6KjoqXCIsXG4gICAgICAgICAgICAgICAgICAgIF0uam9pbihcIjpcIiksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgICAgICBBY3Rpb246IFtcImVjMjpSZXZva2VTZWN1cml0eUdyb3VwSW5ncmVzc1wiXSxcbiAgICAgICAgICAgICAgICAgIFJlc291cmNlOiBcIipcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZUVjMkRhc2gwMDJMb2dHcm91cCA9IG5ldyBsb2dzLkNmbkxvZ0dyb3VwKFxuICAgICAgdGhpcyxcbiAgICAgIFwiQXV0b1JlbWVkaWF0ZUVDMkRhc2gwMDJMb2dHcm91cFwiLFxuICAgICAge1xuICAgICAgICBsb2dHcm91cE5hbWU6IFwiL2F3cy9sYW1iZGEvYXV0by1yZW1lZGlhdGUtdjEtQXV0b1JlbWVkaWF0ZUVDMi0wMDJcIixcbiAgICAgICAgcmV0ZW50aW9uSW5EYXlzOiAzMCxcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVFYzJEYXNoMDAzTG9nR3JvdXAgPSBuZXcgbG9ncy5DZm5Mb2dHcm91cChcbiAgICAgIHRoaXMsXG4gICAgICBcIkF1dG9SZW1lZGlhdGVFQzJEYXNoMDAzTG9nR3JvdXBcIixcbiAgICAgIHtcbiAgICAgICAgbG9nR3JvdXBOYW1lOiBcIi9hd3MvbGFtYmRhL2F1dG8tcmVtZWRpYXRlLXYxLUF1dG9SZW1lZGlhdGVFQzItMDAzXCIsXG4gICAgICAgIHJldGVudGlvbkluRGF5czogMzAsXG4gICAgICB9LFxuICAgICk7XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlRWMyRGFzaDAwNExvZ0dyb3VwID0gbmV3IGxvZ3MuQ2ZuTG9nR3JvdXAoXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlRUMyRGFzaDAwNExvZ0dyb3VwXCIsXG4gICAgICB7XG4gICAgICAgIGxvZ0dyb3VwTmFtZTogXCIvYXdzL2xhbWJkYS9hdXRvLXJlbWVkaWF0ZS12MS1BdXRvUmVtZWRpYXRlRUMyLTAwNFwiLFxuICAgICAgICByZXRlbnRpb25JbkRheXM6IDMwLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZUVjMkRhc2gwMDVMb2dHcm91cCA9IG5ldyBsb2dzLkNmbkxvZ0dyb3VwKFxuICAgICAgdGhpcyxcbiAgICAgIFwiQXV0b1JlbWVkaWF0ZUVDMkRhc2gwMDVMb2dHcm91cFwiLFxuICAgICAge1xuICAgICAgICBsb2dHcm91cE5hbWU6IFwiL2F3cy9sYW1iZGEvYXV0by1yZW1lZGlhdGUtdjEtQXV0b1JlbWVkaWF0ZUVDMi0wMDVcIixcbiAgICAgICAgcmV0ZW50aW9uSW5EYXlzOiAzMCxcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVFYzJEYXNoMDA2TG9nR3JvdXAgPSBuZXcgbG9ncy5DZm5Mb2dHcm91cChcbiAgICAgIHRoaXMsXG4gICAgICBcIkF1dG9SZW1lZGlhdGVFQzJEYXNoMDA2TG9nR3JvdXBcIixcbiAgICAgIHtcbiAgICAgICAgbG9nR3JvdXBOYW1lOiBcIi9hd3MvbGFtYmRhL2F1dG8tcmVtZWRpYXRlLXYxLUF1dG9SZW1lZGlhdGVFQzItMDA2XCIsXG4gICAgICAgIHJldGVudGlvbkluRGF5czogMzAsXG4gICAgICB9LFxuICAgICk7XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlRWMyRGFzaDAwOExvZ0dyb3VwID0gbmV3IGxvZ3MuQ2ZuTG9nR3JvdXAoXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlRUMyRGFzaDAwOExvZ0dyb3VwXCIsXG4gICAgICB7XG4gICAgICAgIGxvZ0dyb3VwTmFtZTogXCIvYXdzL2xhbWJkYS9hdXRvLXJlbWVkaWF0ZS12MS1BdXRvUmVtZWRpYXRlRUMyLTAwOFwiLFxuICAgICAgICByZXRlbnRpb25JbkRheXM6IDMwLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZUVjMkRhc2gwMTlMb2dHcm91cCA9IG5ldyBsb2dzLkNmbkxvZ0dyb3VwKFxuICAgICAgdGhpcyxcbiAgICAgIFwiQXV0b1JlbWVkaWF0ZUVDMkRhc2gwMTlMb2dHcm91cFwiLFxuICAgICAge1xuICAgICAgICBsb2dHcm91cE5hbWU6IFwiL2F3cy9sYW1iZGEvYXV0by1yZW1lZGlhdGUtdjEtQXV0b1JlbWVkaWF0ZUVDMi0wMTlcIixcbiAgICAgICAgcmV0ZW50aW9uSW5EYXlzOiAzMCxcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVFYzJEYXNoMDM4TG9nR3JvdXAgPSBuZXcgbG9ncy5DZm5Mb2dHcm91cChcbiAgICAgIHRoaXMsXG4gICAgICBcIkF1dG9SZW1lZGlhdGVFQzJEYXNoMDM4TG9nR3JvdXBcIixcbiAgICAgIHtcbiAgICAgICAgbG9nR3JvdXBOYW1lOiBcIi9hd3MvbGFtYmRhL2F1dG8tcmVtZWRpYXRlLXYxLUF1dG9SZW1lZGlhdGVFQzItMDM4XCIsXG4gICAgICAgIHJldGVudGlvbkluRGF5czogMzAsXG4gICAgICB9LFxuICAgICk7XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlRWMyRGFzaDAzOUxvZ0dyb3VwID0gbmV3IGxvZ3MuQ2ZuTG9nR3JvdXAoXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlRUMyRGFzaDAzOUxvZ0dyb3VwXCIsXG4gICAgICB7XG4gICAgICAgIGxvZ0dyb3VwTmFtZTogXCIvYXdzL2xhbWJkYS9hdXRvLXJlbWVkaWF0ZS12MS1BdXRvUmVtZWRpYXRlRUMyLTAzOVwiLFxuICAgICAgICByZXRlbnRpb25JbkRheXM6IDMwLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZUVjMkRhc2gwNDBMb2dHcm91cCA9IG5ldyBsb2dzLkNmbkxvZ0dyb3VwKFxuICAgICAgdGhpcyxcbiAgICAgIFwiQXV0b1JlbWVkaWF0ZUVDMkRhc2gwNDBMb2dHcm91cFwiLFxuICAgICAge1xuICAgICAgICBsb2dHcm91cE5hbWU6IFwiL2F3cy9sYW1iZGEvYXV0by1yZW1lZGlhdGUtdjEtQXV0b1JlbWVkaWF0ZUVDMi0wNDBcIixcbiAgICAgICAgcmV0ZW50aW9uSW5EYXlzOiAzMCxcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVFYzJEYXNoMDQzTG9nR3JvdXAgPSBuZXcgbG9ncy5DZm5Mb2dHcm91cChcbiAgICAgIHRoaXMsXG4gICAgICBcIkF1dG9SZW1lZGlhdGVFQzJEYXNoMDQzTG9nR3JvdXBcIixcbiAgICAgIHtcbiAgICAgICAgbG9nR3JvdXBOYW1lOiBcIi9hd3MvbGFtYmRhL2F1dG8tcmVtZWRpYXRlLXYxLUF1dG9SZW1lZGlhdGVFQzItMDQzXCIsXG4gICAgICAgIHJldGVudGlvbkluRGF5czogMzAsXG4gICAgICB9LFxuICAgICk7XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlRWMyRGFzaDA0NUxvZ0dyb3VwID0gbmV3IGxvZ3MuQ2ZuTG9nR3JvdXAoXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlRUMyRGFzaDA0NUxvZ0dyb3VwXCIsXG4gICAgICB7XG4gICAgICAgIGxvZ0dyb3VwTmFtZTogXCIvYXdzL2xhbWJkYS9hdXRvLXJlbWVkaWF0ZS12MS1BdXRvUmVtZWRpYXRlRUMyLTA0NVwiLFxuICAgICAgICByZXRlbnRpb25JbkRheXM6IDMwLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZUdkMDAxUm9sZSA9IG5ldyBpYW0uQ2ZuUm9sZShcbiAgICAgIHRoaXMsXG4gICAgICBcIkF1dG9SZW1lZGlhdGVHRDAwMVJvbGVcIixcbiAgICAgIHtcbiAgICAgICAgcm9sZU5hbWU6IFwiQXV0b1JlbWVkaWF0ZUdELTAwMVJvbGVcIixcbiAgICAgICAgYXNzdW1lUm9sZVBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgVmVyc2lvbjogXCIyMDEyLTEwLTE3XCIsXG4gICAgICAgICAgU3RhdGVtZW50OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICBQcmluY2lwYWw6IHtcbiAgICAgICAgICAgICAgICBTZXJ2aWNlOiBbXCJsYW1iZGEuYW1hem9uYXdzLmNvbVwiXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgQWN0aW9uOiBbXCJzdHM6QXNzdW1lUm9sZVwiXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgcG9saWNpZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwb2xpY3lOYW1lOiBcIkF1dG9SZW1lZGlhdGlvblhSYXlQb2xpY3lcIixcbiAgICAgICAgICAgIHBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgICAgIFN0YXRlbWVudDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgQWN0aW9uOiBbXCJ4cmF5OlB1dFRyYWNlU2VnbWVudHNcIiwgXCJ4cmF5OlB1dFRlbGVtZXRyeVJlY29yZHNcIl0sXG4gICAgICAgICAgICAgICAgICBSZXNvdXJjZTogXCIqXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwb2xpY3lOYW1lOiBcIkF1dG9SZW1lZGlhdGVHRC0wMDFQb2xpY3lcIixcbiAgICAgICAgICAgIHBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgICAgIFN0YXRlbWVudDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgQWN0aW9uOiBbXG4gICAgICAgICAgICAgICAgICAgIFwibG9nczpDcmVhdGVMb2dHcm91cFwiLFxuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6Q3JlYXRlTG9nU3RyZWFtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibG9nczpQdXRMb2dFdmVudHNcIixcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBSZXNvdXJjZTogW1xuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgXCJhcm46YXdzOmxvZ3NcIixcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZ2lvbixcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgXCJsb2ctZ3JvdXA6L2F3cy9sYW1iZGEvKjoqOipcIixcbiAgICAgICAgICAgICAgICAgICAgXS5qb2luKFwiOlwiKSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICAgIEFjdGlvbjogW1xuICAgICAgICAgICAgICAgICAgICBcImd1YXJkZHV0eTpDcmVhdGVEZXRlY3RvclwiLFxuICAgICAgICAgICAgICAgICAgICBcImlhbTpDcmVhdGVTZXJ2aWNlTGlua2VkUm9sZVwiLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFJlc291cmNlOiBcIipcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZUdkRGFzaDAwMUxvZ0dyb3VwID0gbmV3IGxvZ3MuQ2ZuTG9nR3JvdXAoXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlR0REYXNoMDAxTG9nR3JvdXBcIixcbiAgICAgIHtcbiAgICAgICAgbG9nR3JvdXBOYW1lOiBcIi9hd3MvbGFtYmRhL2F1dG8tcmVtZWRpYXRlLXYxLUF1dG9SZW1lZGlhdGVHRC0wMDFcIixcbiAgICAgICAgcmV0ZW50aW9uSW5EYXlzOiAzMCxcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVJYW0wMDFSb2xlID0gbmV3IGlhbS5DZm5Sb2xlKFxuICAgICAgdGhpcyxcbiAgICAgIFwiQXV0b1JlbWVkaWF0ZUlBTTAwMVJvbGVcIixcbiAgICAgIHtcbiAgICAgICAgcm9sZU5hbWU6IFwiQXV0b1JlbWVkaWF0ZUlBTS0wMDFSb2xlXCIsXG4gICAgICAgIGFzc3VtZVJvbGVQb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgIFZlcnNpb246IFwiMjAxMi0xMC0xN1wiLFxuICAgICAgICAgIFN0YXRlbWVudDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgUHJpbmNpcGFsOiB7XG4gICAgICAgICAgICAgICAgU2VydmljZTogW1wibGFtYmRhLmFtYXpvbmF3cy5jb21cIl0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIEFjdGlvbjogW1wic3RzOkFzc3VtZVJvbGVcIl0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHBvbGljaWVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgcG9saWN5TmFtZTogXCJBdXRvUmVtZWRpYXRpb25YUmF5UG9saWN5XCIsXG4gICAgICAgICAgICBwb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgICAgICBTdGF0ZW1lbnQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICAgIEFjdGlvbjogW1wieHJheTpQdXRUcmFjZVNlZ21lbnRzXCIsIFwieHJheTpQdXRUZWxlbWV0cnlSZWNvcmRzXCJdLFxuICAgICAgICAgICAgICAgICAgUmVzb3VyY2U6IFwiKlwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgcG9saWN5TmFtZTogXCJBdXRvUmVtZWRpYXRlSUFNLTAwMVBvbGljeVwiLFxuICAgICAgICAgICAgcG9saWN5RG9jdW1lbnQ6IHtcbiAgICAgICAgICAgICAgU3RhdGVtZW50OiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgICAgICBBY3Rpb246IFtcbiAgICAgICAgICAgICAgICAgICAgXCJsb2dzOkNyZWF0ZUxvZ0dyb3VwXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibG9nczpDcmVhdGVMb2dTdHJlYW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJsb2dzOlB1dExvZ0V2ZW50c1wiLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFJlc291cmNlOiBbXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBcImFybjphd3M6bG9nc1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVnaW9uLFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWNjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICBcImxvZy1ncm91cDovYXdzL2xhbWJkYS8qOio6KlwiLFxuICAgICAgICAgICAgICAgICAgICBdLmpvaW4oXCI6XCIpLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgQWN0aW9uOiBbXCJpYW06VXBkYXRlQWNjZXNzS2V5XCJdLFxuICAgICAgICAgICAgICAgICAgUmVzb3VyY2U6IFwiKlwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICk7XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlSWFtMDI5Um9sZSA9IG5ldyBpYW0uQ2ZuUm9sZShcbiAgICAgIHRoaXMsXG4gICAgICBcIkF1dG9SZW1lZGlhdGVJQU0wMjlSb2xlXCIsXG4gICAgICB7XG4gICAgICAgIHJvbGVOYW1lOiBcIkF1dG9SZW1lZGlhdGVJQU0tMDI5Um9sZVwiLFxuICAgICAgICBhc3N1bWVSb2xlUG9saWN5RG9jdW1lbnQ6IHtcbiAgICAgICAgICBWZXJzaW9uOiBcIjIwMTItMTAtMTdcIixcbiAgICAgICAgICBTdGF0ZW1lbnQ6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgIFByaW5jaXBhbDoge1xuICAgICAgICAgICAgICAgIFNlcnZpY2U6IFtcImxhbWJkYS5hbWF6b25hd3MuY29tXCJdLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBBY3Rpb246IFtcInN0czpBc3N1bWVSb2xlXCJdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBwb2xpY2llczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBvbGljeU5hbWU6IFwiQXV0b1JlbWVkaWF0aW9uWFJheVBvbGljeVwiLFxuICAgICAgICAgICAgcG9saWN5RG9jdW1lbnQ6IHtcbiAgICAgICAgICAgICAgU3RhdGVtZW50OiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgICAgICBBY3Rpb246IFtcInhyYXk6UHV0VHJhY2VTZWdtZW50c1wiLCBcInhyYXk6UHV0VGVsZW1ldHJ5UmVjb3Jkc1wiXSxcbiAgICAgICAgICAgICAgICAgIFJlc291cmNlOiBcIipcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBvbGljeU5hbWU6IFwiQXV0b1JlbWVkaWF0ZUlBTS0wMjlQb2xpY3lcIixcbiAgICAgICAgICAgIHBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgICAgIFN0YXRlbWVudDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgQWN0aW9uOiBbXG4gICAgICAgICAgICAgICAgICAgIFwibG9nczpDcmVhdGVMb2dHcm91cFwiLFxuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6Q3JlYXRlTG9nU3RyZWFtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibG9nczpQdXRMb2dFdmVudHNcIixcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBSZXNvdXJjZTogW1xuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgXCJhcm46YXdzOmxvZ3NcIixcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZ2lvbixcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgXCJsb2ctZ3JvdXA6L2F3cy9sYW1iZGEvKjoqOipcIixcbiAgICAgICAgICAgICAgICAgICAgXS5qb2luKFwiOlwiKSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICAgIEFjdGlvbjogW1xuICAgICAgICAgICAgICAgICAgICBcImlhbTpEZWxldGVVc2VyXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiaWFtOkRlbGV0ZVVzZXJQb2xpY3lcIixcbiAgICAgICAgICAgICAgICAgICAgXCJpYW06RGVsZXRlTG9naW5Qcm9maWxlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiaWFtOkRldGFjaFVzZXJQb2xpY3lcIixcbiAgICAgICAgICAgICAgICAgICAgXCJpYW06TGlzdEF0dGFjaGVkVXNlclBvbGljaWVzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiaWFtOkxpc3RVc2VyUG9saWNpZXNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJpYW06TGlzdEdyb3Vwc0ZvclVzZXJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJpYW06UmVtb3ZlVXNlckZyb21Hcm91cFwiLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFJlc291cmNlOiBcIipcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZUlhbTAzOFJvbGUgPSBuZXcgaWFtLkNmblJvbGUoXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlSUFNMDM4Um9sZVwiLFxuICAgICAge1xuICAgICAgICByb2xlTmFtZTogXCJBdXRvUmVtZWRpYXRlSUFNLTAzOFJvbGVcIixcbiAgICAgICAgYXNzdW1lUm9sZVBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgVmVyc2lvbjogXCIyMDEyLTEwLTE3XCIsXG4gICAgICAgICAgU3RhdGVtZW50OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICBQcmluY2lwYWw6IHtcbiAgICAgICAgICAgICAgICBTZXJ2aWNlOiBbXCJsYW1iZGEuYW1hem9uYXdzLmNvbVwiXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgQWN0aW9uOiBbXCJzdHM6QXNzdW1lUm9sZVwiXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgcG9saWNpZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwb2xpY3lOYW1lOiBcIkF1dG9SZW1lZGlhdGlvblhSYXlQb2xpY3lcIixcbiAgICAgICAgICAgIHBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgICAgIFN0YXRlbWVudDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgQWN0aW9uOiBbXCJ4cmF5OlB1dFRyYWNlU2VnbWVudHNcIiwgXCJ4cmF5OlB1dFRlbGVtZXRyeVJlY29yZHNcIl0sXG4gICAgICAgICAgICAgICAgICBSZXNvdXJjZTogXCIqXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwb2xpY3lOYW1lOiBcIkF1dG9SZW1lZGlhdGVJQU0tMDM4UG9saWN5XCIsXG4gICAgICAgICAgICBwb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgICAgICBTdGF0ZW1lbnQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICAgIEFjdGlvbjogW1xuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6Q3JlYXRlTG9nR3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsb2dzOkNyZWF0ZUxvZ1N0cmVhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6UHV0TG9nRXZlbnRzXCIsXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgUmVzb3VyY2U6IFtcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIFwiYXJuOmF3czpsb2dzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpb24sXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NvdW50LFxuICAgICAgICAgICAgICAgICAgICAgIFwibG9nLWdyb3VwOi9hd3MvbGFtYmRhLyo6KjoqXCIsXG4gICAgICAgICAgICAgICAgICAgIF0uam9pbihcIjpcIiksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgICAgICBBY3Rpb246IFtcImlhbTpVcGRhdGVBY2Nlc3NLZXlcIl0sXG4gICAgICAgICAgICAgICAgICBSZXNvdXJjZTogXCIqXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVJYW1EYXNoMDAxTG9nR3JvdXAgPSBuZXcgbG9ncy5DZm5Mb2dHcm91cChcbiAgICAgIHRoaXMsXG4gICAgICBcIkF1dG9SZW1lZGlhdGVJQU1EYXNoMDAxTG9nR3JvdXBcIixcbiAgICAgIHtcbiAgICAgICAgbG9nR3JvdXBOYW1lOiBcIi9hd3MvbGFtYmRhL2F1dG8tcmVtZWRpYXRlLXYxLUF1dG9SZW1lZGlhdGVJQU0tMDAxXCIsXG4gICAgICAgIHJldGVudGlvbkluRGF5czogMzAsXG4gICAgICB9LFxuICAgICk7XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlSWFtRGFzaDAyOUxvZ0dyb3VwID0gbmV3IGxvZ3MuQ2ZuTG9nR3JvdXAoXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlSUFNRGFzaDAyOUxvZ0dyb3VwXCIsXG4gICAgICB7XG4gICAgICAgIGxvZ0dyb3VwTmFtZTogXCIvYXdzL2xhbWJkYS9hdXRvLXJlbWVkaWF0ZS12MS1BdXRvUmVtZWRpYXRlSUFNLTAyOVwiLFxuICAgICAgICByZXRlbnRpb25JbkRheXM6IDMwLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZUlhbURhc2gwMzhMb2dHcm91cCA9IG5ldyBsb2dzLkNmbkxvZ0dyb3VwKFxuICAgICAgdGhpcyxcbiAgICAgIFwiQXV0b1JlbWVkaWF0ZUlBTURhc2gwMzhMb2dHcm91cFwiLFxuICAgICAge1xuICAgICAgICBsb2dHcm91cE5hbWU6IFwiL2F3cy9sYW1iZGEvYXV0by1yZW1lZGlhdGUtdjEtQXV0b1JlbWVkaWF0ZUlBTS0wMzhcIixcbiAgICAgICAgcmV0ZW50aW9uSW5EYXlzOiAzMCxcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVLbXMwMDJSb2xlID0gbmV3IGlhbS5DZm5Sb2xlKFxuICAgICAgdGhpcyxcbiAgICAgIFwiQXV0b1JlbWVkaWF0ZUtNUzAwMlJvbGVcIixcbiAgICAgIHtcbiAgICAgICAgcm9sZU5hbWU6IFwiQXV0b1JlbWVkaWF0ZUtNUy0wMDJSb2xlXCIsXG4gICAgICAgIGFzc3VtZVJvbGVQb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgIFZlcnNpb246IFwiMjAxMi0xMC0xN1wiLFxuICAgICAgICAgIFN0YXRlbWVudDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgUHJpbmNpcGFsOiB7XG4gICAgICAgICAgICAgICAgU2VydmljZTogW1wibGFtYmRhLmFtYXpvbmF3cy5jb21cIl0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIEFjdGlvbjogW1wic3RzOkFzc3VtZVJvbGVcIl0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHBvbGljaWVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgcG9saWN5TmFtZTogXCJBdXRvUmVtZWRpYXRpb25YUmF5UG9saWN5XCIsXG4gICAgICAgICAgICBwb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgICAgICBTdGF0ZW1lbnQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICAgIEFjdGlvbjogW1wieHJheTpQdXRUcmFjZVNlZ21lbnRzXCIsIFwieHJheTpQdXRUZWxlbWV0cnlSZWNvcmRzXCJdLFxuICAgICAgICAgICAgICAgICAgUmVzb3VyY2U6IFwiKlwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgcG9saWN5TmFtZTogXCJBdXRvUmVtZWRpYXRlS01TLTAwMlBvbGljeVwiLFxuICAgICAgICAgICAgcG9saWN5RG9jdW1lbnQ6IHtcbiAgICAgICAgICAgICAgU3RhdGVtZW50OiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgICAgICBBY3Rpb246IFtcbiAgICAgICAgICAgICAgICAgICAgXCJsb2dzOkNyZWF0ZUxvZ0dyb3VwXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibG9nczpDcmVhdGVMb2dTdHJlYW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJsb2dzOlB1dExvZ0V2ZW50c1wiLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFJlc291cmNlOiBbXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBcImFybjphd3M6bG9nc1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVnaW9uLFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWNjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICBcImxvZy1ncm91cDovYXdzL2xhbWJkYS8qOio6KlwiLFxuICAgICAgICAgICAgICAgICAgICBdLmpvaW4oXCI6XCIpLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgQWN0aW9uOiBbXCJrbXM6RW5hYmxlS2V5Um90YXRpb25cIl0sXG4gICAgICAgICAgICAgICAgICBSZXNvdXJjZTogXCIqXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVLbXMwMDRSb2xlID0gbmV3IGlhbS5DZm5Sb2xlKFxuICAgICAgdGhpcyxcbiAgICAgIFwiQXV0b1JlbWVkaWF0ZUtNUzAwNFJvbGVcIixcbiAgICAgIHtcbiAgICAgICAgcm9sZU5hbWU6IFwiQXV0b1JlbWVkaWF0ZUtNUy0wMDRSb2xlXCIsXG4gICAgICAgIGFzc3VtZVJvbGVQb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgIFZlcnNpb246IFwiMjAxMi0xMC0xN1wiLFxuICAgICAgICAgIFN0YXRlbWVudDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgUHJpbmNpcGFsOiB7XG4gICAgICAgICAgICAgICAgU2VydmljZTogW1wibGFtYmRhLmFtYXpvbmF3cy5jb21cIl0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIEFjdGlvbjogW1wic3RzOkFzc3VtZVJvbGVcIl0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHBvbGljaWVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgcG9saWN5TmFtZTogXCJBdXRvUmVtZWRpYXRpb25YUmF5UG9saWN5XCIsXG4gICAgICAgICAgICBwb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgICAgICBTdGF0ZW1lbnQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICAgIEFjdGlvbjogW1wieHJheTpQdXRUcmFjZVNlZ21lbnRzXCIsIFwieHJheTpQdXRUZWxlbWV0cnlSZWNvcmRzXCJdLFxuICAgICAgICAgICAgICAgICAgUmVzb3VyY2U6IFwiKlwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgcG9saWN5TmFtZTogXCJBdXRvUmVtZWRpYXRlS01TLTAwNFBvbGljeVwiLFxuICAgICAgICAgICAgcG9saWN5RG9jdW1lbnQ6IHtcbiAgICAgICAgICAgICAgU3RhdGVtZW50OiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgICAgICBBY3Rpb246IFtcbiAgICAgICAgICAgICAgICAgICAgXCJsb2dzOkNyZWF0ZUxvZ0dyb3VwXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibG9nczpDcmVhdGVMb2dTdHJlYW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJsb2dzOlB1dExvZ0V2ZW50c1wiLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFJlc291cmNlOiBbXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBcImFybjphd3M6bG9nc1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVnaW9uLFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWNjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICBcImxvZy1ncm91cDovYXdzL2xhbWJkYS8qOio6KlwiLFxuICAgICAgICAgICAgICAgICAgICBdLmpvaW4oXCI6XCIpLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgQWN0aW9uOiBbXCJrbXM6Q2FuY2VsS2V5RGVsZXRpb25cIl0sXG4gICAgICAgICAgICAgICAgICBSZXNvdXJjZTogXCIqXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVLbXNEYXNoMDAyTG9nR3JvdXAgPSBuZXcgbG9ncy5DZm5Mb2dHcm91cChcbiAgICAgIHRoaXMsXG4gICAgICBcIkF1dG9SZW1lZGlhdGVLTVNEYXNoMDAyTG9nR3JvdXBcIixcbiAgICAgIHtcbiAgICAgICAgbG9nR3JvdXBOYW1lOiBcIi9hd3MvbGFtYmRhL2F1dG8tcmVtZWRpYXRlLXYxLUF1dG9SZW1lZGlhdGVLTVMtMDAyXCIsXG4gICAgICAgIHJldGVudGlvbkluRGF5czogMzAsXG4gICAgICB9LFxuICAgICk7XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlS21zRGFzaDAwNExvZ0dyb3VwID0gbmV3IGxvZ3MuQ2ZuTG9nR3JvdXAoXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlS01TRGFzaDAwNExvZ0dyb3VwXCIsXG4gICAgICB7XG4gICAgICAgIGxvZ0dyb3VwTmFtZTogXCIvYXdzL2xhbWJkYS9hdXRvLXJlbWVkaWF0ZS12MS1BdXRvUmVtZWRpYXRlS01TLTAwNFwiLFxuICAgICAgICByZXRlbnRpb25JbkRheXM6IDMwLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZUtpbmVzaXMwMDFSb2xlID0gbmV3IGlhbS5DZm5Sb2xlKFxuICAgICAgdGhpcyxcbiAgICAgIFwiQXV0b1JlbWVkaWF0ZUtpbmVzaXMwMDFSb2xlXCIsXG4gICAgICB7XG4gICAgICAgIHJvbGVOYW1lOiBcIkF1dG9SZW1lZGlhdGVLaW5lc2lzLTAwMVJvbGVcIixcbiAgICAgICAgYXNzdW1lUm9sZVBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgVmVyc2lvbjogXCIyMDEyLTEwLTE3XCIsXG4gICAgICAgICAgU3RhdGVtZW50OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICBQcmluY2lwYWw6IHtcbiAgICAgICAgICAgICAgICBTZXJ2aWNlOiBbXCJsYW1iZGEuYW1hem9uYXdzLmNvbVwiXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgQWN0aW9uOiBbXCJzdHM6QXNzdW1lUm9sZVwiXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgcG9saWNpZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwb2xpY3lOYW1lOiBcIkF1dG9SZW1lZGlhdGlvblhSYXlQb2xpY3lcIixcbiAgICAgICAgICAgIHBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgICAgIFN0YXRlbWVudDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgQWN0aW9uOiBbXCJ4cmF5OlB1dFRyYWNlU2VnbWVudHNcIiwgXCJ4cmF5OlB1dFRlbGVtZXRyeVJlY29yZHNcIl0sXG4gICAgICAgICAgICAgICAgICBSZXNvdXJjZTogXCIqXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwb2xpY3lOYW1lOiBcIktpbmVzaXMtMDAxUG9saWN5XCIsXG4gICAgICAgICAgICBwb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgICAgICBTdGF0ZW1lbnQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICAgIEFjdGlvbjogW1xuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6Q3JlYXRlTG9nR3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsb2dzOkNyZWF0ZUxvZ1N0cmVhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6UHV0TG9nRXZlbnRzXCIsXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgUmVzb3VyY2U6IFtcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIFwiYXJuOmF3czpsb2dzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpb24sXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NvdW50LFxuICAgICAgICAgICAgICAgICAgICAgIFwibG9nLWdyb3VwOi9hd3MvbGFtYmRhLyo6KjoqXCIsXG4gICAgICAgICAgICAgICAgICAgIF0uam9pbihcIjpcIiksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgICAgICBBY3Rpb246IFtcbiAgICAgICAgICAgICAgICAgICAgXCJrbXM6TGlzdEtleXNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJrbXM6TGlzdEFsaWFzZXNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJrbXM6RGVzY3JpYmVLZXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJraW5lc2lzOlN0YXJ0U3RyZWFtRW5jcnlwdGlvblwiLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFJlc291cmNlOiBcIipcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZUtpbmVzaXNEYXNoMDAxTG9nR3JvdXAgPSBuZXcgbG9ncy5DZm5Mb2dHcm91cChcbiAgICAgIHRoaXMsXG4gICAgICBcIkF1dG9SZW1lZGlhdGVLaW5lc2lzRGFzaDAwMUxvZ0dyb3VwXCIsXG4gICAgICB7XG4gICAgICAgIGxvZ0dyb3VwTmFtZTogXCIvYXdzL2xhbWJkYS9hdXRvLXJlbWVkaWF0ZS12MS1BdXRvUmVtZWRpYXRlS2luZXNpcy0wMDFcIixcbiAgICAgICAgcmV0ZW50aW9uSW5EYXlzOiAzMCxcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVMYW1iZGEwMDNSb2xlID0gbmV3IGlhbS5DZm5Sb2xlKFxuICAgICAgdGhpcyxcbiAgICAgIFwiQXV0b1JlbWVkaWF0ZUxhbWJkYTAwM1JvbGVcIixcbiAgICAgIHtcbiAgICAgICAgcm9sZU5hbWU6IFwiQXV0b1JlbWVkaWF0ZUxhbWJkYS0wMDNSb2xlXCIsXG4gICAgICAgIGFzc3VtZVJvbGVQb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgIFZlcnNpb246IFwiMjAxMi0xMC0xN1wiLFxuICAgICAgICAgIFN0YXRlbWVudDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgUHJpbmNpcGFsOiB7XG4gICAgICAgICAgICAgICAgU2VydmljZTogW1wibGFtYmRhLmFtYXpvbmF3cy5jb21cIl0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIEFjdGlvbjogW1wic3RzOkFzc3VtZVJvbGVcIl0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHBvbGljaWVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgcG9saWN5TmFtZTogXCJBdXRvUmVtZWRpYXRpb25YUmF5UG9saWN5XCIsXG4gICAgICAgICAgICBwb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgICAgICBTdGF0ZW1lbnQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICAgIEFjdGlvbjogW1wieHJheTpQdXRUcmFjZVNlZ21lbnRzXCIsIFwieHJheTpQdXRUZWxlbWV0cnlSZWNvcmRzXCJdLFxuICAgICAgICAgICAgICAgICAgUmVzb3VyY2U6IFwiKlwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgcG9saWN5TmFtZTogXCJBdXRvUmVtZWRpYXRlTGFtYmRhLTAwM1BvbGljeVwiLFxuICAgICAgICAgICAgcG9saWN5RG9jdW1lbnQ6IHtcbiAgICAgICAgICAgICAgU3RhdGVtZW50OiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgICAgICBBY3Rpb246IFtcbiAgICAgICAgICAgICAgICAgICAgXCJsb2dzOkNyZWF0ZUxvZ0dyb3VwXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibG9nczpDcmVhdGVMb2dTdHJlYW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJsb2dzOlB1dExvZ0V2ZW50c1wiLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFJlc291cmNlOiBbXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBcImFybjphd3M6bG9nc1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVnaW9uLFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWNjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICBcImxvZy1ncm91cDovYXdzL2xhbWJkYS8qOio6KlwiLFxuICAgICAgICAgICAgICAgICAgICBdLmpvaW4oXCI6XCIpLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgQWN0aW9uOiBbXG4gICAgICAgICAgICAgICAgICAgIFwibGFtYmRhOlVwZGF0ZUZ1bmN0aW9uQ29uZmlndXJhdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICBcImxhbWJkYTpHZXRGdW5jdGlvbkNvbmZpZ3VyYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgXCJpYW06QXR0YWNoUm9sZVBvbGljeVwiLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFJlc291cmNlOiBcIipcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZUxhbWJkYURhc2gwMDNMb2dHcm91cCA9IG5ldyBsb2dzLkNmbkxvZ0dyb3VwKFxuICAgICAgdGhpcyxcbiAgICAgIFwiQXV0b1JlbWVkaWF0ZUxhbWJkYURhc2gwMDNMb2dHcm91cFwiLFxuICAgICAge1xuICAgICAgICBsb2dHcm91cE5hbWU6IFwiL2F3cy9sYW1iZGEvYXV0by1yZW1lZGlhdGUtdjEtQXV0b1JlbWVkaWF0ZUxhbWJkYS0wMDNcIixcbiAgICAgICAgcmV0ZW50aW9uSW5EYXlzOiAzMCxcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVPcmNoZXN0cmF0b3JMb2dHcm91cCA9IG5ldyBsb2dzLkNmbkxvZ0dyb3VwKFxuICAgICAgdGhpcyxcbiAgICAgIFwiQXV0b1JlbWVkaWF0ZU9yY2hlc3RyYXRvckxvZ0dyb3VwXCIsXG4gICAgICB7XG4gICAgICAgIGxvZ0dyb3VwTmFtZTogXCIvYXdzL2xhbWJkYS9hdXRvLXJlbWVkaWF0ZS12MS1BdXRvUmVtZWRpYXRlT3JjaGVzdHJhdG9yXCIsXG4gICAgICAgIHJldGVudGlvbkluRGF5czogMzAsXG4gICAgICB9LFxuICAgICk7XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlT3JnYW5pemF0aW9uczAwMlJvbGUgPSBuZXcgaWFtLkNmblJvbGUoXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlT3JnYW5pemF0aW9uczAwMlJvbGVcIixcbiAgICAgIHtcbiAgICAgICAgcm9sZU5hbWU6IFwiQXV0b1JlbWVkaWF0ZU9yZ2FuaXphdGlvbnMtMDAyUm9sZVwiLFxuICAgICAgICBhc3N1bWVSb2xlUG9saWN5RG9jdW1lbnQ6IHtcbiAgICAgICAgICBWZXJzaW9uOiBcIjIwMTItMTAtMTdcIixcbiAgICAgICAgICBTdGF0ZW1lbnQ6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgIFByaW5jaXBhbDoge1xuICAgICAgICAgICAgICAgIFNlcnZpY2U6IFtcImxhbWJkYS5hbWF6b25hd3MuY29tXCJdLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBBY3Rpb246IFtcInN0czpBc3N1bWVSb2xlXCJdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBwb2xpY2llczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBvbGljeU5hbWU6IFwiQXV0b1JlbWVkaWF0aW9uWFJheVBvbGljeVwiLFxuICAgICAgICAgICAgcG9saWN5RG9jdW1lbnQ6IHtcbiAgICAgICAgICAgICAgU3RhdGVtZW50OiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgICAgICBBY3Rpb246IFtcInhyYXk6UHV0VHJhY2VTZWdtZW50c1wiLCBcInhyYXk6UHV0VGVsZW1ldHJ5UmVjb3Jkc1wiXSxcbiAgICAgICAgICAgICAgICAgIFJlc291cmNlOiBcIipcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBvbGljeU5hbWU6IFwiQXV0b1JlbWVkaWF0ZU9yZ2FuaXphdGlvbnMtMDAyUG9saWN5XCIsXG4gICAgICAgICAgICBwb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgICAgICBTdGF0ZW1lbnQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICAgIEFjdGlvbjogW1xuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6Q3JlYXRlTG9nR3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsb2dzOkNyZWF0ZUxvZ1N0cmVhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6UHV0TG9nRXZlbnRzXCIsXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgUmVzb3VyY2U6IFtcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIFwiYXJuOmF3czpsb2dzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpb24sXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NvdW50LFxuICAgICAgICAgICAgICAgICAgICAgIFwibG9nLWdyb3VwOi9hd3MvbGFtYmRhLyo6KjoqXCIsXG4gICAgICAgICAgICAgICAgICAgIF0uam9pbihcIjpcIiksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgICAgICBBY3Rpb246IFtcIm9yZ2FuaXphdGlvbnM6RW5hYmxlQWxsRmVhdHVyZXNcIl0sXG4gICAgICAgICAgICAgICAgICBSZXNvdXJjZTogXCIqXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVPcmdhbml6YXRpb25zRGFzaDAwMkxvZ0dyb3VwID0gbmV3IGxvZ3MuQ2ZuTG9nR3JvdXAoXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlT3JnYW5pemF0aW9uc0Rhc2gwMDJMb2dHcm91cFwiLFxuICAgICAge1xuICAgICAgICBsb2dHcm91cE5hbWU6XG4gICAgICAgICAgXCIvYXdzL2xhbWJkYS9hdXRvLXJlbWVkaWF0ZS12MS1BdXRvUmVtZWRpYXRlT3JnYW5pemF0aW9ucy0wMDJcIixcbiAgICAgICAgcmV0ZW50aW9uSW5EYXlzOiAzMCxcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVSZHMwMDZSb2xlID0gbmV3IGlhbS5DZm5Sb2xlKFxuICAgICAgdGhpcyxcbiAgICAgIFwiQXV0b1JlbWVkaWF0ZVJEUzAwNlJvbGVcIixcbiAgICAgIHtcbiAgICAgICAgcm9sZU5hbWU6IFwiQXV0b1JlbWVkaWF0ZVJEUy0wMDZSb2xlXCIsXG4gICAgICAgIGFzc3VtZVJvbGVQb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgIFZlcnNpb246IFwiMjAxMi0xMC0xN1wiLFxuICAgICAgICAgIFN0YXRlbWVudDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgUHJpbmNpcGFsOiB7XG4gICAgICAgICAgICAgICAgU2VydmljZTogW1wibGFtYmRhLmFtYXpvbmF3cy5jb21cIl0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIEFjdGlvbjogW1wic3RzOkFzc3VtZVJvbGVcIl0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHBvbGljaWVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgcG9saWN5TmFtZTogXCJBdXRvUmVtZWRpYXRpb25YUmF5UG9saWN5XCIsXG4gICAgICAgICAgICBwb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgICAgICBTdGF0ZW1lbnQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICAgIEFjdGlvbjogW1wieHJheTpQdXRUcmFjZVNlZ21lbnRzXCIsIFwieHJheTpQdXRUZWxlbWV0cnlSZWNvcmRzXCJdLFxuICAgICAgICAgICAgICAgICAgUmVzb3VyY2U6IFwiKlwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgcG9saWN5TmFtZTogXCJBdXRvUmVtZWRpYXRlUkRTLTAwNlBvbGljeVwiLFxuICAgICAgICAgICAgcG9saWN5RG9jdW1lbnQ6IHtcbiAgICAgICAgICAgICAgU3RhdGVtZW50OiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgICAgICBBY3Rpb246IFtcbiAgICAgICAgICAgICAgICAgICAgXCJsb2dzOkNyZWF0ZUxvZ0dyb3VwXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibG9nczpDcmVhdGVMb2dTdHJlYW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJsb2dzOlB1dExvZ0V2ZW50c1wiLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFJlc291cmNlOiBbXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBcImFybjphd3M6bG9nc1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVnaW9uLFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWNjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICBcImxvZy1ncm91cDovYXdzL2xhbWJkYS8qOio6KlwiLFxuICAgICAgICAgICAgICAgICAgICBdLmpvaW4oXCI6XCIpLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgQWN0aW9uOiBbXCJyZHM6TW9kaWZ5RGJJbnN0YW5jZVwiXSxcbiAgICAgICAgICAgICAgICAgIFJlc291cmNlOiBcIipcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZVJkczAwOFJvbGUgPSBuZXcgaWFtLkNmblJvbGUoXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlUkRTMDA4Um9sZVwiLFxuICAgICAge1xuICAgICAgICByb2xlTmFtZTogXCJBdXRvUmVtZWRpYXRlUkRTLTAwOFJvbGVcIixcbiAgICAgICAgYXNzdW1lUm9sZVBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgVmVyc2lvbjogXCIyMDEyLTEwLTE3XCIsXG4gICAgICAgICAgU3RhdGVtZW50OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICBQcmluY2lwYWw6IHtcbiAgICAgICAgICAgICAgICBTZXJ2aWNlOiBbXCJsYW1iZGEuYW1hem9uYXdzLmNvbVwiXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgQWN0aW9uOiBbXCJzdHM6QXNzdW1lUm9sZVwiXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgcG9saWNpZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwb2xpY3lOYW1lOiBcIkF1dG9SZW1lZGlhdGlvblhSYXlQb2xpY3lcIixcbiAgICAgICAgICAgIHBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgICAgIFN0YXRlbWVudDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgQWN0aW9uOiBbXCJ4cmF5OlB1dFRyYWNlU2VnbWVudHNcIiwgXCJ4cmF5OlB1dFRlbGVtZXRyeVJlY29yZHNcIl0sXG4gICAgICAgICAgICAgICAgICBSZXNvdXJjZTogXCIqXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwb2xpY3lOYW1lOiBcIkF1dG9SZW1lZGlhdGVSRFMtMDA4UG9saWN5XCIsXG4gICAgICAgICAgICBwb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgICAgICBTdGF0ZW1lbnQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICAgIEFjdGlvbjogW1xuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6Q3JlYXRlTG9nR3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsb2dzOkNyZWF0ZUxvZ1N0cmVhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6UHV0TG9nRXZlbnRzXCIsXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgUmVzb3VyY2U6IFtcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIFwiYXJuOmF3czpsb2dzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpb24sXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NvdW50LFxuICAgICAgICAgICAgICAgICAgICAgIFwibG9nLWdyb3VwOi9hd3MvbGFtYmRhLyo6KjoqXCIsXG4gICAgICAgICAgICAgICAgICAgIF0uam9pbihcIjpcIiksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgICAgICBBY3Rpb246IFtcInJkczpNb2RpZnlEQkluc3RhbmNlXCJdLFxuICAgICAgICAgICAgICAgICAgUmVzb3VyY2U6IFwiKlwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICk7XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlUmRzMDIzUm9sZSA9IG5ldyBpYW0uQ2ZuUm9sZShcbiAgICAgIHRoaXMsXG4gICAgICBcIkF1dG9SZW1lZGlhdGVSRFMwMjNSb2xlXCIsXG4gICAgICB7XG4gICAgICAgIHJvbGVOYW1lOiBcIkF1dG9SZW1lZGlhdGVSRFMtMDIzUm9sZVwiLFxuICAgICAgICBhc3N1bWVSb2xlUG9saWN5RG9jdW1lbnQ6IHtcbiAgICAgICAgICBWZXJzaW9uOiBcIjIwMTItMTAtMTdcIixcbiAgICAgICAgICBTdGF0ZW1lbnQ6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgIFByaW5jaXBhbDoge1xuICAgICAgICAgICAgICAgIFNlcnZpY2U6IFtcImxhbWJkYS5hbWF6b25hd3MuY29tXCJdLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBBY3Rpb246IFtcInN0czpBc3N1bWVSb2xlXCJdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBwb2xpY2llczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBvbGljeU5hbWU6IFwiQXV0b1JlbWVkaWF0aW9uWFJheVBvbGljeVwiLFxuICAgICAgICAgICAgcG9saWN5RG9jdW1lbnQ6IHtcbiAgICAgICAgICAgICAgU3RhdGVtZW50OiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgICAgICBBY3Rpb246IFtcInhyYXk6UHV0VHJhY2VTZWdtZW50c1wiLCBcInhyYXk6UHV0VGVsZW1ldHJ5UmVjb3Jkc1wiXSxcbiAgICAgICAgICAgICAgICAgIFJlc291cmNlOiBcIipcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBvbGljeU5hbWU6IFwiQXV0b1JlbWVkaWF0ZVJEUy0wMjNQb2xpY3lcIixcbiAgICAgICAgICAgIHBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgICAgIFN0YXRlbWVudDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgQWN0aW9uOiBbXG4gICAgICAgICAgICAgICAgICAgIFwibG9nczpDcmVhdGVMb2dHcm91cFwiLFxuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6Q3JlYXRlTG9nU3RyZWFtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibG9nczpQdXRMb2dFdmVudHNcIixcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBSZXNvdXJjZTogW1xuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgXCJhcm46YXdzOmxvZ3NcIixcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZ2lvbixcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgXCJsb2ctZ3JvdXA6L2F3cy9sYW1iZGEvKjoqOipcIixcbiAgICAgICAgICAgICAgICAgICAgXS5qb2luKFwiOlwiKSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICAgIEFjdGlvbjogW1wicmRzOk1vZGlmeURCU25hcHNob3RBdHRyaWJ1dGVcIl0sXG4gICAgICAgICAgICAgICAgICBSZXNvdXJjZTogXCIqXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVSZHNEYXNoMDA2TG9nR3JvdXAgPSBuZXcgbG9ncy5DZm5Mb2dHcm91cChcbiAgICAgIHRoaXMsXG4gICAgICBcIkF1dG9SZW1lZGlhdGVSRFNEYXNoMDA2TG9nR3JvdXBcIixcbiAgICAgIHtcbiAgICAgICAgbG9nR3JvdXBOYW1lOiBcIi9hd3MvbGFtYmRhL2F1dG8tcmVtZWRpYXRlLXYxLUF1dG9SZW1lZGlhdGVSRFMtMDA2XCIsXG4gICAgICAgIHJldGVudGlvbkluRGF5czogMzAsXG4gICAgICB9LFxuICAgICk7XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlUmRzRGFzaDAwOExvZ0dyb3VwID0gbmV3IGxvZ3MuQ2ZuTG9nR3JvdXAoXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlUkRTRGFzaDAwOExvZ0dyb3VwXCIsXG4gICAgICB7XG4gICAgICAgIGxvZ0dyb3VwTmFtZTogXCIvYXdzL2xhbWJkYS9hdXRvLXJlbWVkaWF0ZS12MS1BdXRvUmVtZWRpYXRlUkRTLTAwOFwiLFxuICAgICAgICByZXRlbnRpb25JbkRheXM6IDMwLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZVJkc0Rhc2gwMjNMb2dHcm91cCA9IG5ldyBsb2dzLkNmbkxvZ0dyb3VwKFxuICAgICAgdGhpcyxcbiAgICAgIFwiQXV0b1JlbWVkaWF0ZVJEU0Rhc2gwMjNMb2dHcm91cFwiLFxuICAgICAge1xuICAgICAgICBsb2dHcm91cE5hbWU6IFwiL2F3cy9sYW1iZGEvYXV0by1yZW1lZGlhdGUtdjEtQXV0b1JlbWVkaWF0ZVJEUy0wMjNcIixcbiAgICAgICAgcmV0ZW50aW9uSW5EYXlzOiAzMCxcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVSczAwMVJvbGUgPSBuZXcgaWFtLkNmblJvbGUoXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlUlMwMDFSb2xlXCIsXG4gICAgICB7XG4gICAgICAgIHJvbGVOYW1lOiBcIkF1dG9SZW1lZGlhdGVSUy0wMDFSb2xlXCIsXG4gICAgICAgIGFzc3VtZVJvbGVQb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgIFZlcnNpb246IFwiMjAxMi0xMC0xN1wiLFxuICAgICAgICAgIFN0YXRlbWVudDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgUHJpbmNpcGFsOiB7XG4gICAgICAgICAgICAgICAgU2VydmljZTogW1wibGFtYmRhLmFtYXpvbmF3cy5jb21cIl0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIEFjdGlvbjogW1wic3RzOkFzc3VtZVJvbGVcIl0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHBvbGljaWVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgcG9saWN5TmFtZTogXCJBdXRvUmVtZWRpYXRpb25YUmF5UG9saWN5XCIsXG4gICAgICAgICAgICBwb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgICAgICBTdGF0ZW1lbnQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICAgIEFjdGlvbjogW1wieHJheTpQdXRUcmFjZVNlZ21lbnRzXCIsIFwieHJheTpQdXRUZWxlbWV0cnlSZWNvcmRzXCJdLFxuICAgICAgICAgICAgICAgICAgUmVzb3VyY2U6IFwiKlwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgcG9saWN5TmFtZTogXCJBdXRvUmVtZWRpYXRlUlMtMDAxUG9saWN5XCIsXG4gICAgICAgICAgICBwb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgICAgICBTdGF0ZW1lbnQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICAgIEFjdGlvbjogW1xuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6Q3JlYXRlTG9nR3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsb2dzOkNyZWF0ZUxvZ1N0cmVhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6UHV0TG9nRXZlbnRzXCIsXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgUmVzb3VyY2U6IFtcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIFwiYXJuOmF3czpsb2dzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpb24sXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NvdW50LFxuICAgICAgICAgICAgICAgICAgICAgIFwibG9nLWdyb3VwOi9hd3MvbGFtYmRhLyo6KjoqXCIsXG4gICAgICAgICAgICAgICAgICAgIF0uam9pbihcIjpcIiksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgICAgICBBY3Rpb246IFtcInJlZHNoaWZ0Ok1vZGlmeUNsdXN0ZXJcIl0sXG4gICAgICAgICAgICAgICAgICBSZXNvdXJjZTogXCIqXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVSczAxOVJvbGUgPSBuZXcgaWFtLkNmblJvbGUoXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlUlMwMTlSb2xlXCIsXG4gICAgICB7XG4gICAgICAgIHJvbGVOYW1lOiBcIkF1dG9SZW1lZGlhdGVSUy0wMTlSb2xlXCIsXG4gICAgICAgIGFzc3VtZVJvbGVQb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgIFZlcnNpb246IFwiMjAxMi0xMC0xN1wiLFxuICAgICAgICAgIFN0YXRlbWVudDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgUHJpbmNpcGFsOiB7XG4gICAgICAgICAgICAgICAgU2VydmljZTogW1wibGFtYmRhLmFtYXpvbmF3cy5jb21cIl0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIEFjdGlvbjogW1wic3RzOkFzc3VtZVJvbGVcIl0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHBvbGljaWVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgcG9saWN5TmFtZTogXCJBdXRvUmVtZWRpYXRpb25YUmF5UG9saWN5XCIsXG4gICAgICAgICAgICBwb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgICAgICBTdGF0ZW1lbnQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICAgIEFjdGlvbjogW1wieHJheTpQdXRUcmFjZVNlZ21lbnRzXCIsIFwieHJheTpQdXRUZWxlbWV0cnlSZWNvcmRzXCJdLFxuICAgICAgICAgICAgICAgICAgUmVzb3VyY2U6IFwiKlwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgcG9saWN5TmFtZTogXCJBdXRvUmVtZWRpYXRlUlMtMDE5UG9saWN5XCIsXG4gICAgICAgICAgICBwb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgICAgICBTdGF0ZW1lbnQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICAgIEFjdGlvbjogW1xuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6Q3JlYXRlTG9nR3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsb2dzOkNyZWF0ZUxvZ1N0cmVhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6UHV0TG9nRXZlbnRzXCIsXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgUmVzb3VyY2U6IFtcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIFwiYXJuOmF3czpsb2dzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpb24sXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NvdW50LFxuICAgICAgICAgICAgICAgICAgICAgIFwibG9nLWdyb3VwOi9hd3MvbGFtYmRhLyo6KjoqXCIsXG4gICAgICAgICAgICAgICAgICAgIF0uam9pbihcIjpcIiksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgICAgICBBY3Rpb246IFtcInJlZHNoaWZ0Ok1vZGlmeUNsdXN0ZXJcIl0sXG4gICAgICAgICAgICAgICAgICBSZXNvdXJjZTogXCIqXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVSczAyM1JvbGUgPSBuZXcgaWFtLkNmblJvbGUoXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlUlMwMjNSb2xlXCIsXG4gICAgICB7XG4gICAgICAgIHJvbGVOYW1lOiBcIkF1dG9SZW1lZGlhdGVSUy0wMjNSb2xlXCIsXG4gICAgICAgIGFzc3VtZVJvbGVQb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgIFZlcnNpb246IFwiMjAxMi0xMC0xN1wiLFxuICAgICAgICAgIFN0YXRlbWVudDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgUHJpbmNpcGFsOiB7XG4gICAgICAgICAgICAgICAgU2VydmljZTogW1wibGFtYmRhLmFtYXpvbmF3cy5jb21cIl0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIEFjdGlvbjogW1wic3RzOkFzc3VtZVJvbGVcIl0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHBvbGljaWVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgcG9saWN5TmFtZTogXCJBdXRvUmVtZWRpYXRpb25YUmF5UG9saWN5XCIsXG4gICAgICAgICAgICBwb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgICAgICBTdGF0ZW1lbnQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICAgIEFjdGlvbjogW1wieHJheTpQdXRUcmFjZVNlZ21lbnRzXCIsIFwieHJheTpQdXRUZWxlbWV0cnlSZWNvcmRzXCJdLFxuICAgICAgICAgICAgICAgICAgUmVzb3VyY2U6IFwiKlwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgcG9saWN5TmFtZTogXCJBdXRvUmVtZWRpYXRlUlMtMDIzUG9saWN5XCIsXG4gICAgICAgICAgICBwb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgICAgICBTdGF0ZW1lbnQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICAgIEFjdGlvbjogW1xuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6Q3JlYXRlTG9nR3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsb2dzOkNyZWF0ZUxvZ1N0cmVhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6UHV0TG9nRXZlbnRzXCIsXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgUmVzb3VyY2U6IFtcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIFwiYXJuOmF3czpsb2dzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpb24sXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NvdW50LFxuICAgICAgICAgICAgICAgICAgICAgIFwibG9nLWdyb3VwOi9hd3MvbGFtYmRhLyo6KjoqXCIsXG4gICAgICAgICAgICAgICAgICAgIF0uam9pbihcIjpcIiksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgICAgICBBY3Rpb246IFtcInJlZHNoaWZ0Ok1vZGlmeUNsdXN0ZXJQYXJhbWV0ZXJHcm91cFwiXSxcbiAgICAgICAgICAgICAgICAgIFJlc291cmNlOiBcIipcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZVJzRGFzaDAwMUxvZ0dyb3VwID0gbmV3IGxvZ3MuQ2ZuTG9nR3JvdXAoXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlUlNEYXNoMDAxTG9nR3JvdXBcIixcbiAgICAgIHtcbiAgICAgICAgbG9nR3JvdXBOYW1lOiBcIi9hd3MvbGFtYmRhL2F1dG8tcmVtZWRpYXRlLXYxLUF1dG9SZW1lZGlhdGVSUy0wMDFcIixcbiAgICAgICAgcmV0ZW50aW9uSW5EYXlzOiAzMCxcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVSc0Rhc2gwMTlMb2dHcm91cCA9IG5ldyBsb2dzLkNmbkxvZ0dyb3VwKFxuICAgICAgdGhpcyxcbiAgICAgIFwiQXV0b1JlbWVkaWF0ZVJTRGFzaDAxOUxvZ0dyb3VwXCIsXG4gICAgICB7XG4gICAgICAgIGxvZ0dyb3VwTmFtZTogXCIvYXdzL2xhbWJkYS9hdXRvLXJlbWVkaWF0ZS12MS1BdXRvUmVtZWRpYXRlUlMtMDE5XCIsXG4gICAgICAgIHJldGVudGlvbkluRGF5czogMzAsXG4gICAgICB9LFxuICAgICk7XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlUnNEYXNoMDIzTG9nR3JvdXAgPSBuZXcgbG9ncy5DZm5Mb2dHcm91cChcbiAgICAgIHRoaXMsXG4gICAgICBcIkF1dG9SZW1lZGlhdGVSU0Rhc2gwMjNMb2dHcm91cFwiLFxuICAgICAge1xuICAgICAgICBsb2dHcm91cE5hbWU6IFwiL2F3cy9sYW1iZGEvYXV0by1yZW1lZGlhdGUtdjEtQXV0b1JlbWVkaWF0ZVJTLTAyM1wiLFxuICAgICAgICByZXRlbnRpb25JbkRheXM6IDMwLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZVMzMDAxUm9sZSA9IG5ldyBpYW0uQ2ZuUm9sZShcbiAgICAgIHRoaXMsXG4gICAgICBcIkF1dG9SZW1lZGlhdGVTMzAwMVJvbGVcIixcbiAgICAgIHtcbiAgICAgICAgcm9sZU5hbWU6IFwiQXV0b1JlbWVkaWF0ZVMzLTAwMVJvbGVcIixcbiAgICAgICAgYXNzdW1lUm9sZVBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgVmVyc2lvbjogXCIyMDEyLTEwLTE3XCIsXG4gICAgICAgICAgU3RhdGVtZW50OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICBQcmluY2lwYWw6IHtcbiAgICAgICAgICAgICAgICBTZXJ2aWNlOiBbXCJsYW1iZGEuYW1hem9uYXdzLmNvbVwiXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgQWN0aW9uOiBbXCJzdHM6QXNzdW1lUm9sZVwiXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgcG9saWNpZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwb2xpY3lOYW1lOiBcIkF1dG9SZW1lZGlhdGlvblhSYXlQb2xpY3lcIixcbiAgICAgICAgICAgIHBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgICAgIFN0YXRlbWVudDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgQWN0aW9uOiBbXCJ4cmF5OlB1dFRyYWNlU2VnbWVudHNcIiwgXCJ4cmF5OlB1dFRlbGVtZXRyeVJlY29yZHNcIl0sXG4gICAgICAgICAgICAgICAgICBSZXNvdXJjZTogXCIqXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwb2xpY3lOYW1lOiBcIkF1dG9SZW1lZGlhdGVTMy0wMDFQb2xpY3lcIixcbiAgICAgICAgICAgIHBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgICAgIFN0YXRlbWVudDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgQWN0aW9uOiBbXG4gICAgICAgICAgICAgICAgICAgIFwibG9nczpDcmVhdGVMb2dHcm91cFwiLFxuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6Q3JlYXRlTG9nU3RyZWFtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibG9nczpQdXRMb2dFdmVudHNcIixcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBSZXNvdXJjZTogW1xuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgXCJhcm46YXdzOmxvZ3NcIixcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZ2lvbixcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgXCJsb2ctZ3JvdXA6L2F3cy9sYW1iZGEvKjoqOipcIixcbiAgICAgICAgICAgICAgICAgICAgXS5qb2luKFwiOlwiKSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICAgIEFjdGlvbjogW1wiczM6R2V0QnVja2V0QWNsXCIsIFwiczM6UHV0QnVja2V0QWNsXCJdLFxuICAgICAgICAgICAgICAgICAgUmVzb3VyY2U6IFwiKlwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICk7XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlUzMwMDJSb2xlID0gbmV3IGlhbS5DZm5Sb2xlKFxuICAgICAgdGhpcyxcbiAgICAgIFwiQXV0b1JlbWVkaWF0ZVMzMDAyUm9sZVwiLFxuICAgICAge1xuICAgICAgICByb2xlTmFtZTogXCJBdXRvUmVtZWRpYXRlUzMtMDAyUm9sZVwiLFxuICAgICAgICBhc3N1bWVSb2xlUG9saWN5RG9jdW1lbnQ6IHtcbiAgICAgICAgICBWZXJzaW9uOiBcIjIwMTItMTAtMTdcIixcbiAgICAgICAgICBTdGF0ZW1lbnQ6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgIFByaW5jaXBhbDoge1xuICAgICAgICAgICAgICAgIFNlcnZpY2U6IFtcImxhbWJkYS5hbWF6b25hd3MuY29tXCJdLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBBY3Rpb246IFtcInN0czpBc3N1bWVSb2xlXCJdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBwb2xpY2llczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBvbGljeU5hbWU6IFwiQXV0b1JlbWVkaWF0aW9uWFJheVBvbGljeVwiLFxuICAgICAgICAgICAgcG9saWN5RG9jdW1lbnQ6IHtcbiAgICAgICAgICAgICAgU3RhdGVtZW50OiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgICAgICBBY3Rpb246IFtcInhyYXk6UHV0VHJhY2VTZWdtZW50c1wiLCBcInhyYXk6UHV0VGVsZW1ldHJ5UmVjb3Jkc1wiXSxcbiAgICAgICAgICAgICAgICAgIFJlc291cmNlOiBcIipcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBvbGljeU5hbWU6IFwiQXV0b1JlbWVkaWF0ZVMzLTAwMlBvbGljeVwiLFxuICAgICAgICAgICAgcG9saWN5RG9jdW1lbnQ6IHtcbiAgICAgICAgICAgICAgU3RhdGVtZW50OiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgICAgICBBY3Rpb246IFtcbiAgICAgICAgICAgICAgICAgICAgXCJsb2dzOkNyZWF0ZUxvZ0dyb3VwXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibG9nczpDcmVhdGVMb2dTdHJlYW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJsb2dzOlB1dExvZ0V2ZW50c1wiLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFJlc291cmNlOiBbXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBcImFybjphd3M6bG9nc1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVnaW9uLFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWNjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICBcImxvZy1ncm91cDovYXdzL2xhbWJkYS8qOio6KlwiLFxuICAgICAgICAgICAgICAgICAgICBdLmpvaW4oXCI6XCIpLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgQWN0aW9uOiBbXCJzMzpHZXRCdWNrZXRBY2xcIiwgXCJzMzpQdXRCdWNrZXRBY2xcIl0sXG4gICAgICAgICAgICAgICAgICBSZXNvdXJjZTogXCIqXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVTMzAwM1JvbGUgPSBuZXcgaWFtLkNmblJvbGUoXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlUzMwMDNSb2xlXCIsXG4gICAgICB7XG4gICAgICAgIHJvbGVOYW1lOiBcIkF1dG9SZW1lZGlhdGVTMy0wMDNSb2xlXCIsXG4gICAgICAgIGFzc3VtZVJvbGVQb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgIFZlcnNpb246IFwiMjAxMi0xMC0xN1wiLFxuICAgICAgICAgIFN0YXRlbWVudDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgUHJpbmNpcGFsOiB7XG4gICAgICAgICAgICAgICAgU2VydmljZTogW1wibGFtYmRhLmFtYXpvbmF3cy5jb21cIl0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIEFjdGlvbjogW1wic3RzOkFzc3VtZVJvbGVcIl0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHBvbGljaWVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgcG9saWN5TmFtZTogXCJBdXRvUmVtZWRpYXRpb25YUmF5UG9saWN5XCIsXG4gICAgICAgICAgICBwb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgICAgICBTdGF0ZW1lbnQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICAgIEFjdGlvbjogW1wieHJheTpQdXRUcmFjZVNlZ21lbnRzXCIsIFwieHJheTpQdXRUZWxlbWV0cnlSZWNvcmRzXCJdLFxuICAgICAgICAgICAgICAgICAgUmVzb3VyY2U6IFwiKlwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgcG9saWN5TmFtZTogXCJBdXRvUmVtZWRpYXRlUzMtMDAzUG9saWN5XCIsXG4gICAgICAgICAgICBwb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgICAgICBTdGF0ZW1lbnQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICAgIEFjdGlvbjogW1xuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6Q3JlYXRlTG9nR3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsb2dzOkNyZWF0ZUxvZ1N0cmVhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6UHV0TG9nRXZlbnRzXCIsXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgUmVzb3VyY2U6IFtcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIFwiYXJuOmF3czpsb2dzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpb24sXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NvdW50LFxuICAgICAgICAgICAgICAgICAgICAgIFwibG9nLWdyb3VwOi9hd3MvbGFtYmRhLyo6KjoqXCIsXG4gICAgICAgICAgICAgICAgICAgIF0uam9pbihcIjpcIiksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgICAgICBBY3Rpb246IFtcInMzOkdldEJ1Y2tldEFjbFwiLCBcInMzOlB1dEJ1Y2tldEFjbFwiXSxcbiAgICAgICAgICAgICAgICAgIFJlc291cmNlOiBcIipcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZVMzMDA0Um9sZSA9IG5ldyBpYW0uQ2ZuUm9sZShcbiAgICAgIHRoaXMsXG4gICAgICBcIkF1dG9SZW1lZGlhdGVTMzAwNFJvbGVcIixcbiAgICAgIHtcbiAgICAgICAgcm9sZU5hbWU6IFwiQXV0b1JlbWVkaWF0ZVMzLTAwNFJvbGVcIixcbiAgICAgICAgYXNzdW1lUm9sZVBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgVmVyc2lvbjogXCIyMDEyLTEwLTE3XCIsXG4gICAgICAgICAgU3RhdGVtZW50OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICBQcmluY2lwYWw6IHtcbiAgICAgICAgICAgICAgICBTZXJ2aWNlOiBbXCJsYW1iZGEuYW1hem9uYXdzLmNvbVwiXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgQWN0aW9uOiBbXCJzdHM6QXNzdW1lUm9sZVwiXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgcG9saWNpZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwb2xpY3lOYW1lOiBcIkF1dG9SZW1lZGlhdGlvblhSYXlQb2xpY3lcIixcbiAgICAgICAgICAgIHBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgICAgIFN0YXRlbWVudDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgQWN0aW9uOiBbXCJ4cmF5OlB1dFRyYWNlU2VnbWVudHNcIiwgXCJ4cmF5OlB1dFRlbGVtZXRyeVJlY29yZHNcIl0sXG4gICAgICAgICAgICAgICAgICBSZXNvdXJjZTogXCIqXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwb2xpY3lOYW1lOiBcIkF1dG9SZW1lZGlhdGVTMy0wMDRQb2xpY3lcIixcbiAgICAgICAgICAgIHBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgICAgIFN0YXRlbWVudDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgQWN0aW9uOiBbXG4gICAgICAgICAgICAgICAgICAgIFwibG9nczpDcmVhdGVMb2dHcm91cFwiLFxuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6Q3JlYXRlTG9nU3RyZWFtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibG9nczpQdXRMb2dFdmVudHNcIixcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBSZXNvdXJjZTogW1xuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgXCJhcm46YXdzOmxvZ3NcIixcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZ2lvbixcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgXCJsb2ctZ3JvdXA6L2F3cy9sYW1iZGEvKjoqOipcIixcbiAgICAgICAgICAgICAgICAgICAgXS5qb2luKFwiOlwiKSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICAgIEFjdGlvbjogW1wiczM6R2V0QnVja2V0QWNsXCIsIFwiczM6UHV0QnVja2V0QWNsXCJdLFxuICAgICAgICAgICAgICAgICAgUmVzb3VyY2U6IFwiKlwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICk7XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlUzMwMDVSb2xlID0gbmV3IGlhbS5DZm5Sb2xlKFxuICAgICAgdGhpcyxcbiAgICAgIFwiQXV0b1JlbWVkaWF0ZVMzMDA1Um9sZVwiLFxuICAgICAge1xuICAgICAgICByb2xlTmFtZTogXCJBdXRvUmVtZWRpYXRlUzMtMDA1Um9sZVwiLFxuICAgICAgICBhc3N1bWVSb2xlUG9saWN5RG9jdW1lbnQ6IHtcbiAgICAgICAgICBWZXJzaW9uOiBcIjIwMTItMTAtMTdcIixcbiAgICAgICAgICBTdGF0ZW1lbnQ6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgIFByaW5jaXBhbDoge1xuICAgICAgICAgICAgICAgIFNlcnZpY2U6IFtcImxhbWJkYS5hbWF6b25hd3MuY29tXCJdLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBBY3Rpb246IFtcInN0czpBc3N1bWVSb2xlXCJdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBwb2xpY2llczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBvbGljeU5hbWU6IFwiQXV0b1JlbWVkaWF0aW9uWFJheVBvbGljeVwiLFxuICAgICAgICAgICAgcG9saWN5RG9jdW1lbnQ6IHtcbiAgICAgICAgICAgICAgU3RhdGVtZW50OiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgICAgICBBY3Rpb246IFtcInhyYXk6UHV0VHJhY2VTZWdtZW50c1wiLCBcInhyYXk6UHV0VGVsZW1ldHJ5UmVjb3Jkc1wiXSxcbiAgICAgICAgICAgICAgICAgIFJlc291cmNlOiBcIipcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBvbGljeU5hbWU6IFwiQXV0b1JlbWVkaWF0ZVMzLTAwNVBvbGljeVwiLFxuICAgICAgICAgICAgcG9saWN5RG9jdW1lbnQ6IHtcbiAgICAgICAgICAgICAgU3RhdGVtZW50OiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgICAgICBBY3Rpb246IFtcbiAgICAgICAgICAgICAgICAgICAgXCJsb2dzOkNyZWF0ZUxvZ0dyb3VwXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibG9nczpDcmVhdGVMb2dTdHJlYW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJsb2dzOlB1dExvZ0V2ZW50c1wiLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFJlc291cmNlOiBbXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBcImFybjphd3M6bG9nc1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVnaW9uLFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWNjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICBcImxvZy1ncm91cDovYXdzL2xhbWJkYS8qOio6KlwiLFxuICAgICAgICAgICAgICAgICAgICBdLmpvaW4oXCI6XCIpLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgQWN0aW9uOiBbXCJzMzpHZXRCdWNrZXRBY2xcIiwgXCJzMzpQdXRCdWNrZXRBY2xcIl0sXG4gICAgICAgICAgICAgICAgICBSZXNvdXJjZTogXCIqXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVTMzAwNlJvbGUgPSBuZXcgaWFtLkNmblJvbGUoXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlUzMwMDZSb2xlXCIsXG4gICAgICB7XG4gICAgICAgIHJvbGVOYW1lOiBcIkF1dG9SZW1lZGlhdGVTMy0wMDZSb2xlXCIsXG4gICAgICAgIGFzc3VtZVJvbGVQb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgIFZlcnNpb246IFwiMjAxMi0xMC0xN1wiLFxuICAgICAgICAgIFN0YXRlbWVudDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgUHJpbmNpcGFsOiB7XG4gICAgICAgICAgICAgICAgU2VydmljZTogW1wibGFtYmRhLmFtYXpvbmF3cy5jb21cIl0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIEFjdGlvbjogW1wic3RzOkFzc3VtZVJvbGVcIl0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHBvbGljaWVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgcG9saWN5TmFtZTogXCJBdXRvUmVtZWRpYXRpb25YUmF5UG9saWN5XCIsXG4gICAgICAgICAgICBwb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgICAgICBTdGF0ZW1lbnQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICAgIEFjdGlvbjogW1wieHJheTpQdXRUcmFjZVNlZ21lbnRzXCIsIFwieHJheTpQdXRUZWxlbWV0cnlSZWNvcmRzXCJdLFxuICAgICAgICAgICAgICAgICAgUmVzb3VyY2U6IFwiKlwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgcG9saWN5TmFtZTogXCJBdXRvUmVtZWRpYXRlUzMtMDA2UG9saWN5XCIsXG4gICAgICAgICAgICBwb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgICAgICBTdGF0ZW1lbnQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICAgIEFjdGlvbjogW1xuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6Q3JlYXRlTG9nR3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsb2dzOkNyZWF0ZUxvZ1N0cmVhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6UHV0TG9nRXZlbnRzXCIsXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgUmVzb3VyY2U6IFtcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIFwiYXJuOmF3czpsb2dzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpb24sXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NvdW50LFxuICAgICAgICAgICAgICAgICAgICAgIFwibG9nLWdyb3VwOi9hd3MvbGFtYmRhLyo6KjoqXCIsXG4gICAgICAgICAgICAgICAgICAgIF0uam9pbihcIjpcIiksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgICAgICBBY3Rpb246IFtcInMzOkdldEJ1Y2tldEFjbFwiLCBcInMzOlB1dEJ1Y2tldEFjbFwiXSxcbiAgICAgICAgICAgICAgICAgIFJlc291cmNlOiBcIipcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZVMzMDA3Um9sZSA9IG5ldyBpYW0uQ2ZuUm9sZShcbiAgICAgIHRoaXMsXG4gICAgICBcIkF1dG9SZW1lZGlhdGVTMzAwN1JvbGVcIixcbiAgICAgIHtcbiAgICAgICAgcm9sZU5hbWU6IFwiQXV0b1JlbWVkaWF0ZVMzLTAwN1JvbGVcIixcbiAgICAgICAgYXNzdW1lUm9sZVBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgVmVyc2lvbjogXCIyMDEyLTEwLTE3XCIsXG4gICAgICAgICAgU3RhdGVtZW50OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICBQcmluY2lwYWw6IHtcbiAgICAgICAgICAgICAgICBTZXJ2aWNlOiBbXCJsYW1iZGEuYW1hem9uYXdzLmNvbVwiXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgQWN0aW9uOiBbXCJzdHM6QXNzdW1lUm9sZVwiXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgcG9saWNpZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwb2xpY3lOYW1lOiBcIkF1dG9SZW1lZGlhdGlvblhSYXlQb2xpY3lcIixcbiAgICAgICAgICAgIHBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgICAgIFN0YXRlbWVudDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgQWN0aW9uOiBbXCJ4cmF5OlB1dFRyYWNlU2VnbWVudHNcIiwgXCJ4cmF5OlB1dFRlbGVtZXRyeVJlY29yZHNcIl0sXG4gICAgICAgICAgICAgICAgICBSZXNvdXJjZTogXCIqXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwb2xpY3lOYW1lOiBcIkF1dG9SZW1lZGlhdGVTMy0wMDdQb2xpY3lcIixcbiAgICAgICAgICAgIHBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgICAgIFN0YXRlbWVudDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgQWN0aW9uOiBbXG4gICAgICAgICAgICAgICAgICAgIFwibG9nczpDcmVhdGVMb2dHcm91cFwiLFxuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6Q3JlYXRlTG9nU3RyZWFtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibG9nczpQdXRMb2dFdmVudHNcIixcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBSZXNvdXJjZTogW1xuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgXCJhcm46YXdzOmxvZ3NcIixcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZ2lvbixcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgXCJsb2ctZ3JvdXA6L2F3cy9sYW1iZGEvKjoqOipcIixcbiAgICAgICAgICAgICAgICAgICAgXS5qb2luKFwiOlwiKSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICAgIEFjdGlvbjogW1wiczM6R2V0QnVja2V0QWNsXCIsIFwiczM6UHV0QnVja2V0QWNsXCJdLFxuICAgICAgICAgICAgICAgICAgUmVzb3VyY2U6IFwiKlwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICk7XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlUzMwMDhSb2xlID0gbmV3IGlhbS5DZm5Sb2xlKFxuICAgICAgdGhpcyxcbiAgICAgIFwiQXV0b1JlbWVkaWF0ZVMzMDA4Um9sZVwiLFxuICAgICAge1xuICAgICAgICByb2xlTmFtZTogXCJBdXRvUmVtZWRpYXRlUzMtMDA4Um9sZVwiLFxuICAgICAgICBhc3N1bWVSb2xlUG9saWN5RG9jdW1lbnQ6IHtcbiAgICAgICAgICBWZXJzaW9uOiBcIjIwMTItMTAtMTdcIixcbiAgICAgICAgICBTdGF0ZW1lbnQ6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgIFByaW5jaXBhbDoge1xuICAgICAgICAgICAgICAgIFNlcnZpY2U6IFtcImxhbWJkYS5hbWF6b25hd3MuY29tXCJdLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBBY3Rpb246IFtcInN0czpBc3N1bWVSb2xlXCJdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBwb2xpY2llczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBvbGljeU5hbWU6IFwiQXV0b1JlbWVkaWF0aW9uWFJheVBvbGljeVwiLFxuICAgICAgICAgICAgcG9saWN5RG9jdW1lbnQ6IHtcbiAgICAgICAgICAgICAgU3RhdGVtZW50OiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgICAgICBBY3Rpb246IFtcInhyYXk6UHV0VHJhY2VTZWdtZW50c1wiLCBcInhyYXk6UHV0VGVsZW1ldHJ5UmVjb3Jkc1wiXSxcbiAgICAgICAgICAgICAgICAgIFJlc291cmNlOiBcIipcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBvbGljeU5hbWU6IFwiQXV0b1JlbWVkaWF0ZVMzLTAwOFBvbGljeVwiLFxuICAgICAgICAgICAgcG9saWN5RG9jdW1lbnQ6IHtcbiAgICAgICAgICAgICAgU3RhdGVtZW50OiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgICAgICBBY3Rpb246IFtcbiAgICAgICAgICAgICAgICAgICAgXCJsb2dzOkNyZWF0ZUxvZ0dyb3VwXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibG9nczpDcmVhdGVMb2dTdHJlYW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJsb2dzOlB1dExvZ0V2ZW50c1wiLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFJlc291cmNlOiBbXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBcImFybjphd3M6bG9nc1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVnaW9uLFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWNjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICBcImxvZy1ncm91cDovYXdzL2xhbWJkYS8qOio6KlwiLFxuICAgICAgICAgICAgICAgICAgICBdLmpvaW4oXCI6XCIpLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgQWN0aW9uOiBbXCJzMzpHZXRCdWNrZXRBY2xcIiwgXCJzMzpQdXRCdWNrZXRBY2xcIl0sXG4gICAgICAgICAgICAgICAgICBSZXNvdXJjZTogXCIqXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVTMzAwOVJvbGUgPSBuZXcgaWFtLkNmblJvbGUoXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlUzMwMDlSb2xlXCIsXG4gICAgICB7XG4gICAgICAgIHJvbGVOYW1lOiBcIkF1dG9SZW1lZGlhdGVTMy0wMDlSb2xlXCIsXG4gICAgICAgIGFzc3VtZVJvbGVQb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgIFZlcnNpb246IFwiMjAxMi0xMC0xN1wiLFxuICAgICAgICAgIFN0YXRlbWVudDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgUHJpbmNpcGFsOiB7XG4gICAgICAgICAgICAgICAgU2VydmljZTogW1wibGFtYmRhLmFtYXpvbmF3cy5jb21cIl0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIEFjdGlvbjogW1wic3RzOkFzc3VtZVJvbGVcIl0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHBvbGljaWVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgcG9saWN5TmFtZTogXCJBdXRvUmVtZWRpYXRpb25YUmF5UG9saWN5XCIsXG4gICAgICAgICAgICBwb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgICAgICBTdGF0ZW1lbnQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICAgIEFjdGlvbjogW1wieHJheTpQdXRUcmFjZVNlZ21lbnRzXCIsIFwieHJheTpQdXRUZWxlbWV0cnlSZWNvcmRzXCJdLFxuICAgICAgICAgICAgICAgICAgUmVzb3VyY2U6IFwiKlwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgcG9saWN5TmFtZTogXCJBdXRvUmVtZWRpYXRlUzMtMDA5UG9saWN5XCIsXG4gICAgICAgICAgICBwb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgICAgICBTdGF0ZW1lbnQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICAgIEFjdGlvbjogW1xuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6Q3JlYXRlTG9nR3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsb2dzOkNyZWF0ZUxvZ1N0cmVhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6UHV0TG9nRXZlbnRzXCIsXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgUmVzb3VyY2U6IFtcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIFwiYXJuOmF3czpsb2dzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpb24sXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NvdW50LFxuICAgICAgICAgICAgICAgICAgICAgIFwibG9nLWdyb3VwOi9hd3MvbGFtYmRhLyo6KjoqXCIsXG4gICAgICAgICAgICAgICAgICAgIF0uam9pbihcIjpcIiksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgICAgICBBY3Rpb246IFtcInMzOkdldEJ1Y2tldEFjbFwiLCBcInMzOlB1dEJ1Y2tldEFjbFwiXSxcbiAgICAgICAgICAgICAgICAgIFJlc291cmNlOiBcIipcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZVMzMDEwUm9sZSA9IG5ldyBpYW0uQ2ZuUm9sZShcbiAgICAgIHRoaXMsXG4gICAgICBcIkF1dG9SZW1lZGlhdGVTMzAxMFJvbGVcIixcbiAgICAgIHtcbiAgICAgICAgcm9sZU5hbWU6IFwiQXV0b1JlbWVkaWF0ZVMzLTAxMFJvbGVcIixcbiAgICAgICAgYXNzdW1lUm9sZVBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgVmVyc2lvbjogXCIyMDEyLTEwLTE3XCIsXG4gICAgICAgICAgU3RhdGVtZW50OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICBQcmluY2lwYWw6IHtcbiAgICAgICAgICAgICAgICBTZXJ2aWNlOiBbXCJsYW1iZGEuYW1hem9uYXdzLmNvbVwiXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgQWN0aW9uOiBbXCJzdHM6QXNzdW1lUm9sZVwiXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgcG9saWNpZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwb2xpY3lOYW1lOiBcIkF1dG9SZW1lZGlhdGlvblhSYXlQb2xpY3lcIixcbiAgICAgICAgICAgIHBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgICAgIFN0YXRlbWVudDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgQWN0aW9uOiBbXCJ4cmF5OlB1dFRyYWNlU2VnbWVudHNcIiwgXCJ4cmF5OlB1dFRlbGVtZXRyeVJlY29yZHNcIl0sXG4gICAgICAgICAgICAgICAgICBSZXNvdXJjZTogXCIqXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwb2xpY3lOYW1lOiBcIkF1dG9SZW1lZGlhdGVTMy0wMTBQb2xpY3lcIixcbiAgICAgICAgICAgIHBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgICAgIFN0YXRlbWVudDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgQWN0aW9uOiBbXG4gICAgICAgICAgICAgICAgICAgIFwibG9nczpDcmVhdGVMb2dHcm91cFwiLFxuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6Q3JlYXRlTG9nU3RyZWFtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibG9nczpQdXRMb2dFdmVudHNcIixcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBSZXNvdXJjZTogW1xuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgXCJhcm46YXdzOmxvZ3NcIixcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZ2lvbixcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgXCJsb2ctZ3JvdXA6L2F3cy9sYW1iZGEvKjoqOipcIixcbiAgICAgICAgICAgICAgICAgICAgXS5qb2luKFwiOlwiKSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICAgIEFjdGlvbjogW1wiczM6R2V0QnVja2V0QWNsXCIsIFwiczM6UHV0QnVja2V0QWNsXCJdLFxuICAgICAgICAgICAgICAgICAgUmVzb3VyY2U6IFwiKlwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICk7XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlUzMwMTJSb2xlID0gbmV3IGlhbS5DZm5Sb2xlKFxuICAgICAgdGhpcyxcbiAgICAgIFwiQXV0b1JlbWVkaWF0ZVMzMDEyUm9sZVwiLFxuICAgICAge1xuICAgICAgICByb2xlTmFtZTogXCJBdXRvUmVtZWRpYXRlUzMtMDEyUm9sZVwiLFxuICAgICAgICBhc3N1bWVSb2xlUG9saWN5RG9jdW1lbnQ6IHtcbiAgICAgICAgICBWZXJzaW9uOiBcIjIwMTItMTAtMTdcIixcbiAgICAgICAgICBTdGF0ZW1lbnQ6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgIFByaW5jaXBhbDoge1xuICAgICAgICAgICAgICAgIFNlcnZpY2U6IFtcImxhbWJkYS5hbWF6b25hd3MuY29tXCJdLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBBY3Rpb246IFtcInN0czpBc3N1bWVSb2xlXCJdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBwb2xpY2llczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBvbGljeU5hbWU6IFwiQXV0b1JlbWVkaWF0aW9uWFJheVBvbGljeVwiLFxuICAgICAgICAgICAgcG9saWN5RG9jdW1lbnQ6IHtcbiAgICAgICAgICAgICAgU3RhdGVtZW50OiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgICAgICBBY3Rpb246IFtcInhyYXk6UHV0VHJhY2VTZWdtZW50c1wiLCBcInhyYXk6UHV0VGVsZW1ldHJ5UmVjb3Jkc1wiXSxcbiAgICAgICAgICAgICAgICAgIFJlc291cmNlOiBcIipcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBvbGljeU5hbWU6IFwiQXV0b1JlbWVkaWF0ZVMzLTAxMlBvbGljeVwiLFxuICAgICAgICAgICAgcG9saWN5RG9jdW1lbnQ6IHtcbiAgICAgICAgICAgICAgU3RhdGVtZW50OiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgICAgICBBY3Rpb246IFtcbiAgICAgICAgICAgICAgICAgICAgXCJsb2dzOkNyZWF0ZUxvZ0dyb3VwXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibG9nczpDcmVhdGVMb2dTdHJlYW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJsb2dzOlB1dExvZ0V2ZW50c1wiLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFJlc291cmNlOiBbXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBcImFybjphd3M6bG9nc1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVnaW9uLFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWNjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICBcImxvZy1ncm91cDovYXdzL2xhbWJkYS8qOio6KlwiLFxuICAgICAgICAgICAgICAgICAgICBdLmpvaW4oXCI6XCIpLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgQWN0aW9uOiBbXCJzMzpQdXRCdWNrZXRWZXJzaW9uaW5nXCJdLFxuICAgICAgICAgICAgICAgICAgUmVzb3VyY2U6IFwiKlwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICk7XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlUzMwMTRSb2xlID0gbmV3IGlhbS5DZm5Sb2xlKFxuICAgICAgdGhpcyxcbiAgICAgIFwiQXV0b1JlbWVkaWF0ZVMzMDE0Um9sZVwiLFxuICAgICAge1xuICAgICAgICByb2xlTmFtZTogXCJBdXRvUmVtZWRpYXRlUzMtMDE0Um9sZVwiLFxuICAgICAgICBhc3N1bWVSb2xlUG9saWN5RG9jdW1lbnQ6IHtcbiAgICAgICAgICBWZXJzaW9uOiBcIjIwMTItMTAtMTdcIixcbiAgICAgICAgICBTdGF0ZW1lbnQ6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgIFByaW5jaXBhbDoge1xuICAgICAgICAgICAgICAgIFNlcnZpY2U6IFtcImxhbWJkYS5hbWF6b25hd3MuY29tXCJdLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBBY3Rpb246IFtcInN0czpBc3N1bWVSb2xlXCJdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBwb2xpY2llczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBvbGljeU5hbWU6IFwiQXV0b1JlbWVkaWF0aW9uWFJheVBvbGljeVwiLFxuICAgICAgICAgICAgcG9saWN5RG9jdW1lbnQ6IHtcbiAgICAgICAgICAgICAgU3RhdGVtZW50OiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgICAgICBBY3Rpb246IFtcInhyYXk6UHV0VHJhY2VTZWdtZW50c1wiLCBcInhyYXk6UHV0VGVsZW1ldHJ5UmVjb3Jkc1wiXSxcbiAgICAgICAgICAgICAgICAgIFJlc291cmNlOiBcIipcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBvbGljeU5hbWU6IFwiQXV0b1JlbWVkaWF0ZVMzLTAxNFBvbGljeVwiLFxuICAgICAgICAgICAgcG9saWN5RG9jdW1lbnQ6IHtcbiAgICAgICAgICAgICAgU3RhdGVtZW50OiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgICAgICBBY3Rpb246IFtcbiAgICAgICAgICAgICAgICAgICAgXCJsb2dzOkNyZWF0ZUxvZ0dyb3VwXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibG9nczpDcmVhdGVMb2dTdHJlYW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJsb2dzOlB1dExvZ0V2ZW50c1wiLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFJlc291cmNlOiBbXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBcImFybjphd3M6bG9nc1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVnaW9uLFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWNjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICBcImxvZy1ncm91cDovYXdzL2xhbWJkYS8qOio6KlwiLFxuICAgICAgICAgICAgICAgICAgICBdLmpvaW4oXCI6XCIpLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgQWN0aW9uOiBbXCJzMzpHZXRCdWNrZXRQb2xpY3lcIiwgXCJzMzpQdXRCdWNrZXRQb2xpY3lcIl0sXG4gICAgICAgICAgICAgICAgICBSZXNvdXJjZTogXCIqXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVTMzAxNlJvbGUgPSBuZXcgaWFtLkNmblJvbGUoXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlUzMwMTZSb2xlXCIsXG4gICAgICB7XG4gICAgICAgIHJvbGVOYW1lOiBcIkF1dG9SZW1lZGlhdGVTMy0wMTZSb2xlXCIsXG4gICAgICAgIGFzc3VtZVJvbGVQb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgIFZlcnNpb246IFwiMjAxMi0xMC0xN1wiLFxuICAgICAgICAgIFN0YXRlbWVudDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgUHJpbmNpcGFsOiB7XG4gICAgICAgICAgICAgICAgU2VydmljZTogW1wibGFtYmRhLmFtYXpvbmF3cy5jb21cIl0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIEFjdGlvbjogW1wic3RzOkFzc3VtZVJvbGVcIl0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHBvbGljaWVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgcG9saWN5TmFtZTogXCJBdXRvUmVtZWRpYXRpb25YUmF5UG9saWN5XCIsXG4gICAgICAgICAgICBwb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgICAgICBTdGF0ZW1lbnQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICAgIEFjdGlvbjogW1wieHJheTpQdXRUcmFjZVNlZ21lbnRzXCIsIFwieHJheTpQdXRUZWxlbWV0cnlSZWNvcmRzXCJdLFxuICAgICAgICAgICAgICAgICAgUmVzb3VyY2U6IFwiKlwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgcG9saWN5TmFtZTogXCJBdXRvUmVtZWRpYXRlUzMtMDE2UG9saWN5XCIsXG4gICAgICAgICAgICBwb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgICAgICBTdGF0ZW1lbnQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICAgIEFjdGlvbjogW1xuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6Q3JlYXRlTG9nR3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsb2dzOkNyZWF0ZUxvZ1N0cmVhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6UHV0TG9nRXZlbnRzXCIsXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgUmVzb3VyY2U6IFtcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIFwiYXJuOmF3czpsb2dzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpb24sXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NvdW50LFxuICAgICAgICAgICAgICAgICAgICAgIFwibG9nLWdyb3VwOi9hd3MvbGFtYmRhLyo6KjoqXCIsXG4gICAgICAgICAgICAgICAgICAgIF0uam9pbihcIjpcIiksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgICAgICBBY3Rpb246IFtcInMzOkdldEJ1Y2tldFBvbGljeVwiLCBcInMzOlB1dEJ1Y2tldFBvbGljeVwiXSxcbiAgICAgICAgICAgICAgICAgIFJlc291cmNlOiBcIipcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZVMzRGFzaDAwMUxvZ0dyb3VwID0gbmV3IGxvZ3MuQ2ZuTG9nR3JvdXAoXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlUzNEYXNoMDAxTG9nR3JvdXBcIixcbiAgICAgIHtcbiAgICAgICAgbG9nR3JvdXBOYW1lOiBcIi9hd3MvbGFtYmRhL2F1dG8tcmVtZWRpYXRlLXYxLUF1dG9SZW1lZGlhdGVTMy0wMDFcIixcbiAgICAgICAgcmV0ZW50aW9uSW5EYXlzOiAzMCxcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVTM0Rhc2gwMDJMb2dHcm91cCA9IG5ldyBsb2dzLkNmbkxvZ0dyb3VwKFxuICAgICAgdGhpcyxcbiAgICAgIFwiQXV0b1JlbWVkaWF0ZVMzRGFzaDAwMkxvZ0dyb3VwXCIsXG4gICAgICB7XG4gICAgICAgIGxvZ0dyb3VwTmFtZTogXCIvYXdzL2xhbWJkYS9hdXRvLXJlbWVkaWF0ZS12MS1BdXRvUmVtZWRpYXRlUzMtMDAyXCIsXG4gICAgICAgIHJldGVudGlvbkluRGF5czogMzAsXG4gICAgICB9LFxuICAgICk7XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlUzNEYXNoMDAzTG9nR3JvdXAgPSBuZXcgbG9ncy5DZm5Mb2dHcm91cChcbiAgICAgIHRoaXMsXG4gICAgICBcIkF1dG9SZW1lZGlhdGVTM0Rhc2gwMDNMb2dHcm91cFwiLFxuICAgICAge1xuICAgICAgICBsb2dHcm91cE5hbWU6IFwiL2F3cy9sYW1iZGEvYXV0by1yZW1lZGlhdGUtdjEtQXV0b1JlbWVkaWF0ZVMzLTAwM1wiLFxuICAgICAgICByZXRlbnRpb25JbkRheXM6IDMwLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZVMzRGFzaDAwNExvZ0dyb3VwID0gbmV3IGxvZ3MuQ2ZuTG9nR3JvdXAoXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlUzNEYXNoMDA0TG9nR3JvdXBcIixcbiAgICAgIHtcbiAgICAgICAgbG9nR3JvdXBOYW1lOiBcIi9hd3MvbGFtYmRhL2F1dG8tcmVtZWRpYXRlLXYxLUF1dG9SZW1lZGlhdGVTMy0wMDRcIixcbiAgICAgICAgcmV0ZW50aW9uSW5EYXlzOiAzMCxcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVTM0Rhc2gwMDVMb2dHcm91cCA9IG5ldyBsb2dzLkNmbkxvZ0dyb3VwKFxuICAgICAgdGhpcyxcbiAgICAgIFwiQXV0b1JlbWVkaWF0ZVMzRGFzaDAwNUxvZ0dyb3VwXCIsXG4gICAgICB7XG4gICAgICAgIGxvZ0dyb3VwTmFtZTogXCIvYXdzL2xhbWJkYS9hdXRvLXJlbWVkaWF0ZS12MS1BdXRvUmVtZWRpYXRlUzMtMDA1XCIsXG4gICAgICAgIHJldGVudGlvbkluRGF5czogMzAsXG4gICAgICB9LFxuICAgICk7XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlUzNEYXNoMDA2TG9nR3JvdXAgPSBuZXcgbG9ncy5DZm5Mb2dHcm91cChcbiAgICAgIHRoaXMsXG4gICAgICBcIkF1dG9SZW1lZGlhdGVTM0Rhc2gwMDZMb2dHcm91cFwiLFxuICAgICAge1xuICAgICAgICBsb2dHcm91cE5hbWU6IFwiL2F3cy9sYW1iZGEvYXV0by1yZW1lZGlhdGUtdjEtQXV0b1JlbWVkaWF0ZVMzLTAwNlwiLFxuICAgICAgICByZXRlbnRpb25JbkRheXM6IDMwLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZVMzRGFzaDAwN0xvZ0dyb3VwID0gbmV3IGxvZ3MuQ2ZuTG9nR3JvdXAoXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlUzNEYXNoMDA3TG9nR3JvdXBcIixcbiAgICAgIHtcbiAgICAgICAgbG9nR3JvdXBOYW1lOiBcIi9hd3MvbGFtYmRhL2F1dG8tcmVtZWRpYXRlLXYxLUF1dG9SZW1lZGlhdGVTMy0wMDdcIixcbiAgICAgICAgcmV0ZW50aW9uSW5EYXlzOiAzMCxcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVTM0Rhc2gwMDhMb2dHcm91cCA9IG5ldyBsb2dzLkNmbkxvZ0dyb3VwKFxuICAgICAgdGhpcyxcbiAgICAgIFwiQXV0b1JlbWVkaWF0ZVMzRGFzaDAwOExvZ0dyb3VwXCIsXG4gICAgICB7XG4gICAgICAgIGxvZ0dyb3VwTmFtZTogXCIvYXdzL2xhbWJkYS9hdXRvLXJlbWVkaWF0ZS12MS1BdXRvUmVtZWRpYXRlUzMtMDA4XCIsXG4gICAgICAgIHJldGVudGlvbkluRGF5czogMzAsXG4gICAgICB9LFxuICAgICk7XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlUzNEYXNoMDA5TG9nR3JvdXAgPSBuZXcgbG9ncy5DZm5Mb2dHcm91cChcbiAgICAgIHRoaXMsXG4gICAgICBcIkF1dG9SZW1lZGlhdGVTM0Rhc2gwMDlMb2dHcm91cFwiLFxuICAgICAge1xuICAgICAgICBsb2dHcm91cE5hbWU6IFwiL2F3cy9sYW1iZGEvYXV0by1yZW1lZGlhdGUtdjEtQXV0b1JlbWVkaWF0ZVMzLTAwOVwiLFxuICAgICAgICByZXRlbnRpb25JbkRheXM6IDMwLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZVMzRGFzaDAxMExvZ0dyb3VwID0gbmV3IGxvZ3MuQ2ZuTG9nR3JvdXAoXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlUzNEYXNoMDEwTG9nR3JvdXBcIixcbiAgICAgIHtcbiAgICAgICAgbG9nR3JvdXBOYW1lOiBcIi9hd3MvbGFtYmRhL2F1dG8tcmVtZWRpYXRlLXYxLUF1dG9SZW1lZGlhdGVTMy0wMTBcIixcbiAgICAgICAgcmV0ZW50aW9uSW5EYXlzOiAzMCxcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVTM0Rhc2gwMTJMb2dHcm91cCA9IG5ldyBsb2dzLkNmbkxvZ0dyb3VwKFxuICAgICAgdGhpcyxcbiAgICAgIFwiQXV0b1JlbWVkaWF0ZVMzRGFzaDAxMkxvZ0dyb3VwXCIsXG4gICAgICB7XG4gICAgICAgIGxvZ0dyb3VwTmFtZTogXCIvYXdzL2xhbWJkYS9hdXRvLXJlbWVkaWF0ZS12MS1BdXRvUmVtZWRpYXRlUzMtMDEyXCIsXG4gICAgICAgIHJldGVudGlvbkluRGF5czogMzAsXG4gICAgICB9LFxuICAgICk7XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlUzNEYXNoMDE0TG9nR3JvdXAgPSBuZXcgbG9ncy5DZm5Mb2dHcm91cChcbiAgICAgIHRoaXMsXG4gICAgICBcIkF1dG9SZW1lZGlhdGVTM0Rhc2gwMTRMb2dHcm91cFwiLFxuICAgICAge1xuICAgICAgICBsb2dHcm91cE5hbWU6IFwiL2F3cy9sYW1iZGEvYXV0by1yZW1lZGlhdGUtdjEtQXV0b1JlbWVkaWF0ZVMzLTAxNFwiLFxuICAgICAgICByZXRlbnRpb25JbkRheXM6IDMwLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZVMzRGFzaDAxNkxvZ0dyb3VwID0gbmV3IGxvZ3MuQ2ZuTG9nR3JvdXAoXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlUzNEYXNoMDE2TG9nR3JvdXBcIixcbiAgICAgIHtcbiAgICAgICAgbG9nR3JvdXBOYW1lOiBcIi9hd3MvbGFtYmRhL2F1dG8tcmVtZWRpYXRlLXYxLUF1dG9SZW1lZGlhdGVTMy0wMTZcIixcbiAgICAgICAgcmV0ZW50aW9uSW5EYXlzOiAzMCxcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVTcXMwMDRSb2xlID0gbmV3IGlhbS5DZm5Sb2xlKFxuICAgICAgdGhpcyxcbiAgICAgIFwiQXV0b1JlbWVkaWF0ZVNRUzAwNFJvbGVcIixcbiAgICAgIHtcbiAgICAgICAgcm9sZU5hbWU6IFwiQXV0b1JlbWVkaWF0ZVNRUy0wMDRSb2xlXCIsXG4gICAgICAgIGFzc3VtZVJvbGVQb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgIFZlcnNpb246IFwiMjAxMi0xMC0xN1wiLFxuICAgICAgICAgIFN0YXRlbWVudDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgUHJpbmNpcGFsOiB7XG4gICAgICAgICAgICAgICAgU2VydmljZTogW1wibGFtYmRhLmFtYXpvbmF3cy5jb21cIl0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIEFjdGlvbjogW1wic3RzOkFzc3VtZVJvbGVcIl0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHBvbGljaWVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgcG9saWN5TmFtZTogXCJBdXRvUmVtZWRpYXRpb25YUmF5UG9saWN5XCIsXG4gICAgICAgICAgICBwb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgICAgICBTdGF0ZW1lbnQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICAgIEFjdGlvbjogW1wieHJheTpQdXRUcmFjZVNlZ21lbnRzXCIsIFwieHJheTpQdXRUZWxlbWV0cnlSZWNvcmRzXCJdLFxuICAgICAgICAgICAgICAgICAgUmVzb3VyY2U6IFwiKlwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgcG9saWN5TmFtZTogXCJTUVMtMDA0UG9saWN5XCIsXG4gICAgICAgICAgICBwb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgICAgICBTdGF0ZW1lbnQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICAgIEFjdGlvbjogW1xuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6Q3JlYXRlTG9nR3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsb2dzOkNyZWF0ZUxvZ1N0cmVhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6UHV0TG9nRXZlbnRzXCIsXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgUmVzb3VyY2U6IFtcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIFwiYXJuOmF3czpsb2dzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpb24sXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NvdW50LFxuICAgICAgICAgICAgICAgICAgICAgIFwibG9nLWdyb3VwOi9hd3MvbGFtYmRhLyo6KjoqXCIsXG4gICAgICAgICAgICAgICAgICAgIF0uam9pbihcIjpcIiksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgICAgICBBY3Rpb246IFtcbiAgICAgICAgICAgICAgICAgICAgXCJrbXM6TGlzdEtleXNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJrbXM6TGlzdEFsaWFzZXNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJrbXM6RGVzY3JpYmVLZXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJzcXM6U2V0UXVldWVBdHRyaWJ1dGVzXCIsXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgUmVzb3VyY2U6IFwiKlwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICk7XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlU3FzRGFzaDAwNExvZ0dyb3VwID0gbmV3IGxvZ3MuQ2ZuTG9nR3JvdXAoXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlU1FTRGFzaDAwNExvZ0dyb3VwXCIsXG4gICAgICB7XG4gICAgICAgIGxvZ0dyb3VwTmFtZTogXCIvYXdzL2xhbWJkYS9hdXRvLXJlbWVkaWF0ZS12MS1BdXRvUmVtZWRpYXRlU1FTLTAwNFwiLFxuICAgICAgICByZXRlbnRpb25JbkRheXM6IDMwLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZVRydXN0ZWRBZHZpc29yMDAzUm9sZSA9IG5ldyBpYW0uQ2ZuUm9sZShcbiAgICAgIHRoaXMsXG4gICAgICBcIkF1dG9SZW1lZGlhdGVUcnVzdGVkQWR2aXNvcjAwM1JvbGVcIixcbiAgICAgIHtcbiAgICAgICAgcm9sZU5hbWU6IFwiQXV0b1JlbWVkaWF0ZVRydXN0ZWRBZHZpc29yLTAwM1JvbGVcIixcbiAgICAgICAgYXNzdW1lUm9sZVBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgVmVyc2lvbjogXCIyMDEyLTEwLTE3XCIsXG4gICAgICAgICAgU3RhdGVtZW50OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICBQcmluY2lwYWw6IHtcbiAgICAgICAgICAgICAgICBTZXJ2aWNlOiBbXCJsYW1iZGEuYW1hem9uYXdzLmNvbVwiXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgQWN0aW9uOiBbXCJzdHM6QXNzdW1lUm9sZVwiXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgcG9saWNpZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwb2xpY3lOYW1lOiBcIkF1dG9SZW1lZGlhdGlvblhSYXlQb2xpY3lcIixcbiAgICAgICAgICAgIHBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgICAgIFN0YXRlbWVudDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgQWN0aW9uOiBbXCJ4cmF5OlB1dFRyYWNlU2VnbWVudHNcIiwgXCJ4cmF5OlB1dFRlbGVtZXRyeVJlY29yZHNcIl0sXG4gICAgICAgICAgICAgICAgICBSZXNvdXJjZTogXCIqXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwb2xpY3lOYW1lOiBcIkF1dG9SZW1lZGlhdGVUcnVzdGVkQWR2aXNvci0wMDNQb2xpY3lcIixcbiAgICAgICAgICAgIHBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgICAgIFN0YXRlbWVudDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgQWN0aW9uOiBbXG4gICAgICAgICAgICAgICAgICAgIFwibG9nczpDcmVhdGVMb2dHcm91cFwiLFxuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6Q3JlYXRlTG9nU3RyZWFtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibG9nczpQdXRMb2dFdmVudHNcIixcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBSZXNvdXJjZTogW1xuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgXCJhcm46YXdzOmxvZ3NcIixcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZ2lvbixcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgXCJsb2ctZ3JvdXA6L2F3cy9sYW1iZGEvKjoqOipcIixcbiAgICAgICAgICAgICAgICAgICAgXS5qb2luKFwiOlwiKSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICAgIEFjdGlvbjogW1wiaWFtOlVwZGF0ZUFjY2Vzc0tleVwiXSxcbiAgICAgICAgICAgICAgICAgIFJlc291cmNlOiBcIipcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZVZwYzAwMVJvbGUgPSBuZXcgaWFtLkNmblJvbGUoXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlVlBDMDAxUm9sZVwiLFxuICAgICAge1xuICAgICAgICByb2xlTmFtZTogXCJBdXRvUmVtZWRpYXRlVlBDLTAwMVJvbGVcIixcbiAgICAgICAgYXNzdW1lUm9sZVBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgVmVyc2lvbjogXCIyMDEyLTEwLTE3XCIsXG4gICAgICAgICAgU3RhdGVtZW50OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICBQcmluY2lwYWw6IHtcbiAgICAgICAgICAgICAgICBTZXJ2aWNlOiBbXCJsYW1iZGEuYW1hem9uYXdzLmNvbVwiXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgQWN0aW9uOiBbXCJzdHM6QXNzdW1lUm9sZVwiXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgcG9saWNpZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwb2xpY3lOYW1lOiBcIkF1dG9SZW1lZGlhdGlvblhSYXlQb2xpY3lcIixcbiAgICAgICAgICAgIHBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgICAgIFN0YXRlbWVudDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgQWN0aW9uOiBbXCJ4cmF5OlB1dFRyYWNlU2VnbWVudHNcIiwgXCJ4cmF5OlB1dFRlbGVtZXRyeVJlY29yZHNcIl0sXG4gICAgICAgICAgICAgICAgICBSZXNvdXJjZTogXCIqXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwb2xpY3lOYW1lOiBcIkF1dG9SZW1lZGlhdGVWUEMtMDAxUG9saWN5XCIsXG4gICAgICAgICAgICBwb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgICAgICBTdGF0ZW1lbnQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICAgIEFjdGlvbjogW1xuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6Q3JlYXRlTG9nR3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsb2dzOkNyZWF0ZUxvZ1N0cmVhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6UHV0TG9nRXZlbnRzXCIsXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgUmVzb3VyY2U6IFtcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIFwiYXJuOmF3czpsb2dzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpb24sXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NvdW50LFxuICAgICAgICAgICAgICAgICAgICAgIFwibG9nLWdyb3VwOi9hd3MvbGFtYmRhLyo6KjoqXCIsXG4gICAgICAgICAgICAgICAgICAgIF0uam9pbihcIjpcIiksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgICAgICBBY3Rpb246IFtcbiAgICAgICAgICAgICAgICAgICAgXCJpYW06QXR0YWNoUm9sZVBvbGljeVwiLFxuICAgICAgICAgICAgICAgICAgICBcImlhbTpDcmVhdGVSb2xlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiaWFtOkdldFJvbGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJpYW06UHV0Um9sZVBvbGljeVwiLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFJlc291cmNlOiBcIipcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgQWN0aW9uOiBbXCJlYzI6Q3JlYXRlRmxvd0xvZ3NcIiwgXCJlYzI6RGVzY3JpYmVGbG93TG9nc1wiXSxcbiAgICAgICAgICAgICAgICAgIFJlc291cmNlOiBcIipcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgQWN0aW9uOiBbXCJpYW06UGFzc1JvbGVcIl0sXG4gICAgICAgICAgICAgICAgICBSZXNvdXJjZTogW1xuICAgICAgICAgICAgICAgICAgICBbXCJhcm46YXdzOmlhbTpcIiwgdGhpcy5hY2NvdW50LCBcInJvbGUvVlBDRmxvd0xvZ1JvbGVcIl0uam9pbihcbiAgICAgICAgICAgICAgICAgICAgICBcIjpcIixcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVWcGNEYXNoMDAxTG9nR3JvdXAgPSBuZXcgbG9ncy5DZm5Mb2dHcm91cChcbiAgICAgIHRoaXMsXG4gICAgICBcIkF1dG9SZW1lZGlhdGVWUENEYXNoMDAxTG9nR3JvdXBcIixcbiAgICAgIHtcbiAgICAgICAgbG9nR3JvdXBOYW1lOiBcIi9hd3MvbGFtYmRhL2F1dG8tcmVtZWRpYXRlLXYxLUF1dG9SZW1lZGlhdGVWUEMtMDAxXCIsXG4gICAgICAgIHJldGVudGlvbkluRGF5czogMzAsXG4gICAgICB9LFxuICAgICk7XG5cbiAgICBjb25zdCBrbXNLZXlTcXNRdWV1ZUZyb21TbnMgPSBuZXcga21zLkNmbktleShcbiAgICAgIHRoaXMsXG4gICAgICBcIkttc0tleVNxc1F1ZXVlRnJvbVNuc1wiLFxuICAgICAge1xuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIkVuY3J5cHRzIG1lc3NhZ2VzIHB1Ymxpc2hlcyB0byBhbiBTUVMgcXVldWUgZnJvbSBhbiBTTlMgdG9waWNcIixcbiAgICAgICAgZW5hYmxlS2V5Um90YXRpb246IHRydWUsXG4gICAgICAgIGtleVBvbGljeToge1xuICAgICAgICAgIFZlcnNpb246IFwiMjAxMi0xMC0xN1wiLFxuICAgICAgICAgIElkOiBcIkNvbmZvcm1pdHktU05TLXRvLVNRUy1LZXktdXMtd2VzdC0yXCIsXG4gICAgICAgICAgU3RhdGVtZW50OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFNpZDogXCJFbmFibGUgSUFNIFVzZXIgUGVybWlzc2lvbnNcIixcbiAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgIFByaW5jaXBhbDoge1xuICAgICAgICAgICAgICAgIEFXUzogW1wiYXJuOmF3czppYW06OjgxMTYyMDk2MDI0Njpyb290XCJdLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBBY3Rpb246IFwia21zOipcIixcbiAgICAgICAgICAgICAgUmVzb3VyY2U6IFwiKlwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgU2lkOiBcIkFsbG93IFNRU1wiLFxuICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgUHJpbmNpcGFsOiB7XG4gICAgICAgICAgICAgICAgU2VydmljZTogXCJzcXMuYW1hem9uYXdzLmNvbVwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBBY3Rpb246IFtcImttczpHZW5lcmF0ZURhdGFLZXlcIiwgXCJrbXM6RGVjcnlwdFwiLCBcImttczpFbmNyeXB0XCJdLFxuICAgICAgICAgICAgICBSZXNvdXJjZTogXCIqXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBTaWQ6IFwiQWxsb3cgU05TXCIsXG4gICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICBQcmluY2lwYWw6IHtcbiAgICAgICAgICAgICAgICBTZXJ2aWNlOiBcInNucy5hbWF6b25hd3MuY29tXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIEFjdGlvbjogW1wia21zOkdlbmVyYXRlRGF0YUtleVwiLCBcImttczpEZWNyeXB0XCIsIFwia21zOkVuY3J5cHRcIl0sXG4gICAgICAgICAgICAgIFJlc291cmNlOiBcIipcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIGNvbnN0IHNuc1RvcGljQXV0b1JlbWVkaWF0ZSA9IG5ldyBzbnMuQ2ZuVG9waWMoXG4gICAgICB0aGlzLFxuICAgICAgXCJTTlNUb3BpY0F1dG9SZW1lZGlhdGVcIixcbiAgICAgIHtcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQ2xvdWRDb25mb3JtaXR5IFRvcGljXCIsXG4gICAgICAgIGttc01hc3RlcktleUlkOiBcImFsaWFzL2F3cy9zbnNcIixcbiAgICAgICAgdG9waWNOYW1lOiBcIkNsb3VkQ29uZm9ybWl0eVwiLFxuICAgICAgICB0YWdzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAga2V5OiBcIlNlcnZpY2VcIixcbiAgICAgICAgICAgIHZhbHVlOiBcImF1dG8tcmVtZWRpYXRlXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBrZXk6IFwiTmFtZVwiLFxuICAgICAgICAgICAgdmFsdWU6IFwiQ2xvdWRDb25mb3JtaXR5XCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBrZXk6IFwiT3duZXJcIixcbiAgICAgICAgICAgIHZhbHVlOiBcIkNsb3VkQ29uZm9ybWl0eVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICk7XG5cbiAgICBjb25zdCB0cnVzdGVkQWR2aXNvckRhc2gwMDNMb2dHcm91cCA9IG5ldyBsb2dzLkNmbkxvZ0dyb3VwKFxuICAgICAgdGhpcyxcbiAgICAgIFwiVHJ1c3RlZEFkdmlzb3JEYXNoMDAzTG9nR3JvdXBcIixcbiAgICAgIHtcbiAgICAgICAgbG9nR3JvdXBOYW1lOiBcIi9hd3MvbGFtYmRhL2F1dG8tcmVtZWRpYXRlLXYxLVRydXN0ZWRBZHZpc29yLTAwM1wiLFxuICAgICAgICByZXRlbnRpb25JbkRheXM6IDMwLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY29uc3QgZnVuY3Rpb25zUGF0aCA9IFwiLi9mdW5jdGlvbnNcIjtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVDZm1EYXNoMDA1TGFtYmRhRnVuY3Rpb24gPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKFxuICAgICAgdGhpcyxcbiAgICAgIFwiQXV0b1JlbWVkaWF0ZUNGTURhc2gwMDVMYW1iZGFGdW5jdGlvblwiLFxuICAgICAge1xuICAgICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQoZnVuY3Rpb25zUGF0aCksXG4gICAgICAgIGhhbmRsZXI6IFwiQXV0b1JlbWVkaWF0ZUNGTS0wMDUuaGFuZGxlclwiLFxuICAgICAgICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMjRfWCxcbiAgICAgICAgZnVuY3Rpb25OYW1lOiBcImF1dG8tcmVtZWRpYXRlLXYxLUF1dG9SZW1lZGlhdGVDRk0tMDA1XCIsXG4gICAgICAgIG1lbW9yeVNpemU6IDEyOCxcbiAgICAgICAgdGltZW91dDogY2RrLkR1cmF0aW9uLnNlY29uZHMoMTIwKSxcbiAgICAgICAgcm9sZTogaWFtLlJvbGUuZnJvbVJvbGVBcm4oXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBcIkF1dG9SZW1lZGlhdGVDRk1EYXNoMDA1Um9sZVJlZlwiLFxuICAgICAgICAgIGF1dG9SZW1lZGlhdGVDZm0wMDVSb2xlLmF0dHJBcm4sXG4gICAgICAgICksXG4gICAgICAgIHRyYWNpbmc6IGxhbWJkYS5UcmFjaW5nLkFDVElWRSxcbiAgICAgICAgbG9nR3JvdXA6IGxvZ3MuTG9nR3JvdXAuZnJvbUxvZ0dyb3VwTmFtZShcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIFwiQXV0b1JlbWVkaWF0ZUNGTURhc2gwMDVMb2dHcm91cFJlZlwiLFxuICAgICAgICAgIGF1dG9SZW1lZGlhdGVDZm1EYXNoMDA1TG9nR3JvdXAucmVmLFxuICAgICAgICApLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZUNmbURhc2gwMDVMYW1iZGFGdW5jdGlvbikuYWRkKFxuICAgICAgXCJOYW1lXCIsXG4gICAgICBcIkF1dG8gUmVtZWRpYXRlIENGTS0wMDVcIixcbiAgICApO1xuICAgIGNkay5UYWdzLm9mKGF1dG9SZW1lZGlhdGVDZm1EYXNoMDA1TGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiT3duZXJcIixcbiAgICAgIFwiQ2xvdWRDb25mb3JtaXR5XCIsXG4gICAgKTtcbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlQ2ZtRGFzaDAwNUxhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIlJvbGVcIixcbiAgICAgIFwiQXV0byBSZW1lZGlhdGVcIixcbiAgICApO1xuICAgIGNkay5UYWdzLm9mKGF1dG9SZW1lZGlhdGVDZm1EYXNoMDA1TGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiRW52aXJvbm1lbnRcIixcbiAgICAgIFwiT3BzXCIsXG4gICAgKTtcblxuICAgIGF1dG9SZW1lZGlhdGVDZm1EYXNoMDA1TGFtYmRhRnVuY3Rpb24ubm9kZS5hZGREZXBlbmRlbmN5KFxuICAgICAgYXV0b1JlbWVkaWF0ZUNmbURhc2gwMDVMb2dHcm91cCxcbiAgICApO1xuICAgIGF1dG9SZW1lZGlhdGVDZm1EYXNoMDA1TGFtYmRhRnVuY3Rpb24ubm9kZS5hZGREZXBlbmRlbmN5KFxuICAgICAgYXV0b1JlbWVkaWF0ZUNmbTAwNVJvbGUsXG4gICAgKTtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVDdERhc2gwMDFMYW1iZGFGdW5jdGlvbiA9IG5ldyBsYW1iZGEuRnVuY3Rpb24oXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlQ1REYXNoMDAxTGFtYmRhRnVuY3Rpb25cIixcbiAgICAgIHtcbiAgICAgICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KGZ1bmN0aW9uc1BhdGgpLFxuICAgICAgICBoYW5kbGVyOiBcIkF1dG9SZW1lZGlhdGVDVC0wMDEuaGFuZGxlclwiLFxuICAgICAgICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMjRfWCxcbiAgICAgICAgZnVuY3Rpb25OYW1lOiBcImF1dG8tcmVtZWRpYXRlLXYxLUF1dG9SZW1lZGlhdGVDVC0wMDFcIixcbiAgICAgICAgbWVtb3J5U2l6ZTogMTI4LFxuICAgICAgICB0aW1lb3V0OiBjZGsuRHVyYXRpb24uc2Vjb25kcygxMCksXG4gICAgICAgIHJvbGU6IGlhbS5Sb2xlLmZyb21Sb2xlQXJuKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgXCJBdXRvUmVtZWRpYXRlQ1REYXNoMDAxTGFtYmRhRnVuY3Rpb25Sb2xlUmVmXCIsXG4gICAgICAgICAgYXV0b1JlbWVkaWF0ZUN0MDAxUm9sZS5hdHRyQXJuLFxuICAgICAgICApLFxuICAgICAgICB0cmFjaW5nOiBsYW1iZGEuVHJhY2luZy5BQ1RJVkUsXG4gICAgICAgIGxvZ0dyb3VwOiBsb2dzLkxvZ0dyb3VwLmZyb21Mb2dHcm91cE5hbWUoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBcIkF1dG9SZW1lZGlhdGVDVERhc2gwMDFMYW1iZGFGdW5jdGlvbkxvZ0dyb3VwUmVmXCIsXG4gICAgICAgICAgYXV0b1JlbWVkaWF0ZUN0RGFzaDAwMUxvZ0dyb3VwLnJlZixcbiAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIGNkay5UYWdzLm9mKGF1dG9SZW1lZGlhdGVDdERhc2gwMDFMYW1iZGFGdW5jdGlvbikuYWRkKFxuICAgICAgXCJOYW1lXCIsXG4gICAgICBcIkF1dG8gUmVtZWRpYXRlIENULTAwMVwiLFxuICAgICk7XG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZUN0RGFzaDAwMUxhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIk93bmVyXCIsXG4gICAgICBcIkNsb3VkQ29uZm9ybWl0eVwiLFxuICAgICk7XG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZUN0RGFzaDAwMUxhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIlJvbGVcIixcbiAgICAgIFwiQXV0byBSZW1lZGlhdGVcIixcbiAgICApO1xuICAgIGNkay5UYWdzLm9mKGF1dG9SZW1lZGlhdGVDdERhc2gwMDFMYW1iZGFGdW5jdGlvbikuYWRkKFwiRW52aXJvbm1lbnRcIiwgXCJPcHNcIik7XG5cbiAgICBhdXRvUmVtZWRpYXRlQ3REYXNoMDAxTGFtYmRhRnVuY3Rpb24ubm9kZS5hZGREZXBlbmRlbmN5KFxuICAgICAgYXV0b1JlbWVkaWF0ZUN0RGFzaDAwMUxvZ0dyb3VwLFxuICAgICk7XG4gICAgYXV0b1JlbWVkaWF0ZUN0RGFzaDAwMUxhbWJkYUZ1bmN0aW9uLm5vZGUuYWRkRGVwZW5kZW5jeShcbiAgICAgIGF1dG9SZW1lZGlhdGVDdDAwMVJvbGUsXG4gICAgKTtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVDdERhc2gwMDNMYW1iZGFGdW5jdGlvbiA9IG5ldyBsYW1iZGEuRnVuY3Rpb24oXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlQ1REYXNoMDAzTGFtYmRhRnVuY3Rpb25cIixcbiAgICAgIHtcbiAgICAgICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KGZ1bmN0aW9uc1BhdGgpLFxuICAgICAgICBoYW5kbGVyOiBcIkF1dG9SZW1lZGlhdGVDVC0wMDMuaGFuZGxlclwiLFxuICAgICAgICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMjRfWCxcbiAgICAgICAgZnVuY3Rpb25OYW1lOiBcImF1dG8tcmVtZWRpYXRlLXYxLUF1dG9SZW1lZGlhdGVDVC0wMDNcIixcbiAgICAgICAgbWVtb3J5U2l6ZTogMTI4LFxuICAgICAgICB0aW1lb3V0OiBjZGsuRHVyYXRpb24uc2Vjb25kcygxMjApLFxuICAgICAgICByb2xlOiBpYW0uUm9sZS5mcm9tUm9sZUFybihcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIFwiQXV0b1JlbWVkaWF0ZUNURGFzaDAwM0xhbWJkYUZ1bmN0aW9uUm9sZVJlZlwiLFxuICAgICAgICAgIGF1dG9SZW1lZGlhdGVDdDAwM1JvbGUuYXR0ckFybixcbiAgICAgICAgKSxcbiAgICAgICAgdHJhY2luZzogbGFtYmRhLlRyYWNpbmcuQUNUSVZFLFxuICAgICAgICBsb2dHcm91cDogbG9ncy5Mb2dHcm91cC5mcm9tTG9nR3JvdXBOYW1lKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgXCJBdXRvUmVtZWRpYXRlQ1REYXNoMDAzTGFtYmRhRnVuY3Rpb25Mb2dHcm91cFJlZlwiLFxuICAgICAgICAgIGF1dG9SZW1lZGlhdGVDdERhc2gwMDNMb2dHcm91cC5yZWYsXG4gICAgICAgICksXG4gICAgICB9LFxuICAgICk7XG5cbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlQ3REYXNoMDAzTGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiTmFtZVwiLFxuICAgICAgXCJBdXRvIFJlbWVkaWF0ZSBDVC0wMDNcIixcbiAgICApO1xuICAgIGNkay5UYWdzLm9mKGF1dG9SZW1lZGlhdGVDdERhc2gwMDNMYW1iZGFGdW5jdGlvbikuYWRkKFxuICAgICAgXCJPd25lclwiLFxuICAgICAgXCJDbG91ZENvbmZvcm1pdHlcIixcbiAgICApO1xuICAgIGNkay5UYWdzLm9mKGF1dG9SZW1lZGlhdGVDdERhc2gwMDNMYW1iZGFGdW5jdGlvbikuYWRkKFxuICAgICAgXCJSb2xlXCIsXG4gICAgICBcIkF1dG8gUmVtZWRpYXRlXCIsXG4gICAgKTtcbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlQ3REYXNoMDAzTGFtYmRhRnVuY3Rpb24pLmFkZChcIkVudmlyb25tZW50XCIsIFwiT3BzXCIpO1xuXG4gICAgYXV0b1JlbWVkaWF0ZUN0RGFzaDAwM0xhbWJkYUZ1bmN0aW9uLm5vZGUuYWRkRGVwZW5kZW5jeShcbiAgICAgIGF1dG9SZW1lZGlhdGVDdERhc2gwMDNMb2dHcm91cCxcbiAgICApO1xuICAgIGF1dG9SZW1lZGlhdGVDdERhc2gwMDNMYW1iZGFGdW5jdGlvbi5ub2RlLmFkZERlcGVuZGVuY3koXG4gICAgICBhdXRvUmVtZWRpYXRlQ3QwMDNSb2xlLFxuICAgICk7XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlQ29uZmlnRGFzaDAwMUxhbWJkYUZ1bmN0aW9uID0gbmV3IGxhbWJkYS5GdW5jdGlvbihcbiAgICAgIHRoaXMsXG4gICAgICBcIkF1dG9SZW1lZGlhdGVDb25maWdEYXNoMDAxTGFtYmRhRnVuY3Rpb25cIixcbiAgICAgIHtcbiAgICAgICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KGZ1bmN0aW9uc1BhdGgpLFxuICAgICAgICBoYW5kbGVyOiBcIkF1dG9SZW1lZGlhdGVDb25maWctMDAxLmhhbmRsZXJcIixcbiAgICAgICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzI0X1gsXG4gICAgICAgIGZ1bmN0aW9uTmFtZTogXCJhdXRvLXJlbWVkaWF0ZS12MS1BdXRvUmVtZWRpYXRlQ29uZmlnLTAwMVwiLFxuICAgICAgICBtZW1vcnlTaXplOiAxMjgsXG4gICAgICAgIHRpbWVvdXQ6IGNkay5EdXJhdGlvbi5zZWNvbmRzKDEyMCksXG4gICAgICAgIHJvbGU6IGlhbS5Sb2xlLmZyb21Sb2xlQXJuKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgXCJBdXRvUmVtZWRpYXRlQ29uZmlnRGFzaDAwMUxhbWJkYUZ1bmN0aW9uUm9sZVJlZlwiLFxuICAgICAgICAgIGF1dG9SZW1lZGlhdGVDb25maWcwMDFSb2xlLmF0dHJBcm4sXG4gICAgICAgICksXG4gICAgICAgIHRyYWNpbmc6IGxhbWJkYS5UcmFjaW5nLkFDVElWRSxcbiAgICAgICAgbG9nR3JvdXA6IGxvZ3MuTG9nR3JvdXAuZnJvbUxvZ0dyb3VwTmFtZShcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIFwiQXV0b1JlbWVkaWF0ZUNvbmZpZ0Rhc2gwMDFMYW1iZGFGdW5jdGlvbkxvZ0dyb3VwUmVmXCIsXG4gICAgICAgICAgYXV0b1JlbWVkaWF0ZUNvbmZpZ0Rhc2gwMDFMb2dHcm91cC5yZWYsXG4gICAgICAgICksXG4gICAgICB9LFxuICAgICk7XG5cbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlQ29uZmlnRGFzaDAwMUxhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIk5hbWVcIixcbiAgICAgIFwiQXV0byBSZW1lZGlhdGUgQ29uZmlnLTAwMVwiLFxuICAgICk7XG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZUNvbmZpZ0Rhc2gwMDFMYW1iZGFGdW5jdGlvbikuYWRkKFxuICAgICAgXCJPd25lclwiLFxuICAgICAgXCJDbG91ZENvbmZvcm1pdHlcIixcbiAgICApO1xuICAgIGNkay5UYWdzLm9mKGF1dG9SZW1lZGlhdGVDb25maWdEYXNoMDAxTGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiUm9sZVwiLFxuICAgICAgXCJBdXRvIFJlbWVkaWF0ZVwiLFxuICAgICk7XG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZUNvbmZpZ0Rhc2gwMDFMYW1iZGFGdW5jdGlvbikuYWRkKFxuICAgICAgXCJFbnZpcm9ubWVudFwiLFxuICAgICAgXCJPcHNcIixcbiAgICApO1xuXG4gICAgYXV0b1JlbWVkaWF0ZUNvbmZpZ0Rhc2gwMDFMYW1iZGFGdW5jdGlvbi5ub2RlLmFkZERlcGVuZGVuY3koXG4gICAgICBhdXRvUmVtZWRpYXRlQ29uZmlnRGFzaDAwMUxvZ0dyb3VwLFxuICAgICk7XG4gICAgYXV0b1JlbWVkaWF0ZUNvbmZpZ0Rhc2gwMDFMYW1iZGFGdW5jdGlvbi5ub2RlLmFkZERlcGVuZGVuY3koXG4gICAgICBhdXRvUmVtZWRpYXRlQ29uZmlnMDAxUm9sZSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZUVic0Rhc2gwMDlMYW1iZGFGdW5jdGlvbiA9IG5ldyBsYW1iZGEuRnVuY3Rpb24oXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlRUJTRGFzaDAwOUxhbWJkYUZ1bmN0aW9uXCIsXG4gICAgICB7XG4gICAgICAgIGNvZGU6IGxhbWJkYS5Db2RlLmZyb21Bc3NldChmdW5jdGlvbnNQYXRoKSxcbiAgICAgICAgaGFuZGxlcjogXCJBdXRvUmVtZWRpYXRlRUJTLTAwOS5oYW5kbGVyXCIsXG4gICAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18yNF9YLFxuICAgICAgICBmdW5jdGlvbk5hbWU6IFwiYXV0by1yZW1lZGlhdGUtdjEtQXV0b1JlbWVkaWF0ZUVCUy0wMDlcIixcbiAgICAgICAgbWVtb3J5U2l6ZTogMTI4LFxuICAgICAgICB0aW1lb3V0OiBjZGsuRHVyYXRpb24uc2Vjb25kcygxMjApLFxuICAgICAgICByb2xlOiBpYW0uUm9sZS5mcm9tUm9sZUFybihcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIFwiQXV0b1JlbWVkaWF0ZUVCU0Rhc2gwMDlMYW1iZGFGdW5jdGlvblJvbGVSZWZcIixcbiAgICAgICAgICBhdXRvUmVtZWRpYXRlRWJzMDA5Um9sZS5hdHRyQXJuLFxuICAgICAgICApLFxuICAgICAgICB0cmFjaW5nOiBsYW1iZGEuVHJhY2luZy5BQ1RJVkUsXG4gICAgICAgIGxvZ0dyb3VwOiBsb2dzLkxvZ0dyb3VwLmZyb21Mb2dHcm91cE5hbWUoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBcIkF1dG9SZW1lZGlhdGVFQlNEYXNoMDA5TGFtYmRhRnVuY3Rpb25Mb2dHcm91cFJlZlwiLFxuICAgICAgICAgIGF1dG9SZW1lZGlhdGVFYnNEYXNoMDA5TG9nR3JvdXAucmVmLFxuICAgICAgICApLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZUVic0Rhc2gwMDlMYW1iZGFGdW5jdGlvbikuYWRkKFxuICAgICAgXCJOYW1lXCIsXG4gICAgICBcIkF1dG8gUmVtZWRpYXRlIEVCUy0wMDlcIixcbiAgICApO1xuICAgIGNkay5UYWdzLm9mKGF1dG9SZW1lZGlhdGVFYnNEYXNoMDA5TGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiT3duZXJcIixcbiAgICAgIFwiQ2xvdWRDb25mb3JtaXR5XCIsXG4gICAgKTtcbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlRWJzRGFzaDAwOUxhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIlJvbGVcIixcbiAgICAgIFwiQXV0byBSZW1lZGlhdGVcIixcbiAgICApO1xuICAgIGNkay5UYWdzLm9mKGF1dG9SZW1lZGlhdGVFYnNEYXNoMDA5TGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiRW52aXJvbm1lbnRcIixcbiAgICAgIFwiT3BzXCIsXG4gICAgKTtcblxuICAgIGF1dG9SZW1lZGlhdGVFYnNEYXNoMDA5TGFtYmRhRnVuY3Rpb24ubm9kZS5hZGREZXBlbmRlbmN5KFxuICAgICAgYXV0b1JlbWVkaWF0ZUVic0Rhc2gwMDlMb2dHcm91cCxcbiAgICApO1xuICAgIGF1dG9SZW1lZGlhdGVFYnNEYXNoMDA5TGFtYmRhRnVuY3Rpb24ubm9kZS5hZGREZXBlbmRlbmN5KFxuICAgICAgYXV0b1JlbWVkaWF0ZUViczAwOVJvbGUsXG4gICAgKTtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVFYzJEYXNoMDAyTGFtYmRhRnVuY3Rpb24gPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKFxuICAgICAgdGhpcyxcbiAgICAgIFwiQXV0b1JlbWVkaWF0ZUVDMkRhc2gwMDJMYW1iZGFGdW5jdGlvblwiLFxuICAgICAge1xuICAgICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQoZnVuY3Rpb25zUGF0aCksXG4gICAgICAgIGhhbmRsZXI6IFwiQXV0b1JlbWVkaWF0ZUVDMi0wMDIuaGFuZGxlclwiLFxuICAgICAgICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMjRfWCxcbiAgICAgICAgZnVuY3Rpb25OYW1lOiBcImF1dG8tcmVtZWRpYXRlLXYxLUF1dG9SZW1lZGlhdGVFQzItMDAyXCIsXG4gICAgICAgIG1lbW9yeVNpemU6IDEyOCxcbiAgICAgICAgdGltZW91dDogY2RrLkR1cmF0aW9uLnNlY29uZHMoMTIwKSxcbiAgICAgICAgcm9sZTogaWFtLlJvbGUuZnJvbVJvbGVBcm4oXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBcIkF1dG9SZW1lZGlhdGVFQzJEYXNoMDAyTGFtYmRhRnVuY3Rpb25Sb2xlUmVmXCIsXG4gICAgICAgICAgYXV0b1JlbWVkaWF0ZUVjMjAwMlJvbGUuYXR0ckFybixcbiAgICAgICAgKSxcbiAgICAgICAgdHJhY2luZzogbGFtYmRhLlRyYWNpbmcuQUNUSVZFLFxuICAgICAgICBsb2dHcm91cDogbG9ncy5Mb2dHcm91cC5mcm9tTG9nR3JvdXBOYW1lKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgXCJBdXRvUmVtZWRpYXRlRUMyRGFzaDAwMkxhbWJkYUZ1bmN0aW9uTG9nR3JvdXBSZWZcIixcbiAgICAgICAgICBhdXRvUmVtZWRpYXRlRWMyRGFzaDAwMkxvZ0dyb3VwLnJlZixcbiAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIGNkay5UYWdzLm9mKGF1dG9SZW1lZGlhdGVFYzJEYXNoMDAyTGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiTmFtZVwiLFxuICAgICAgXCJBdXRvIFJlbWVkaWF0ZSBFQzItMDAyXCIsXG4gICAgKTtcbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlRWMyRGFzaDAwMkxhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIk93bmVyXCIsXG4gICAgICBcIkNsb3VkQ29uZm9ybWl0eVwiLFxuICAgICk7XG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZUVjMkRhc2gwMDJMYW1iZGFGdW5jdGlvbikuYWRkKFxuICAgICAgXCJSb2xlXCIsXG4gICAgICBcIkF1dG8gUmVtZWRpYXRlXCIsXG4gICAgKTtcbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlRWMyRGFzaDAwMkxhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIkVudmlyb25tZW50XCIsXG4gICAgICBcIk9wc1wiLFxuICAgICk7XG5cbiAgICBhdXRvUmVtZWRpYXRlRWMyRGFzaDAwMkxhbWJkYUZ1bmN0aW9uLm5vZGUuYWRkRGVwZW5kZW5jeShcbiAgICAgIGF1dG9SZW1lZGlhdGVFYzJEYXNoMDAyTG9nR3JvdXAsXG4gICAgKTtcbiAgICBhdXRvUmVtZWRpYXRlRWMyRGFzaDAwMkxhbWJkYUZ1bmN0aW9uLm5vZGUuYWRkRGVwZW5kZW5jeShcbiAgICAgIGF1dG9SZW1lZGlhdGVFYzIwMDJSb2xlLFxuICAgICk7XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlRWMyRGFzaDAwM0xhbWJkYUZ1bmN0aW9uID0gbmV3IGxhbWJkYS5GdW5jdGlvbihcbiAgICAgIHRoaXMsXG4gICAgICBcIkF1dG9SZW1lZGlhdGVFQzJEYXNoMDAzTGFtYmRhRnVuY3Rpb25cIixcbiAgICAgIHtcbiAgICAgICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KGZ1bmN0aW9uc1BhdGgpLFxuICAgICAgICBoYW5kbGVyOiBcIkF1dG9SZW1lZGlhdGVFQzItMDAzLmhhbmRsZXJcIixcbiAgICAgICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzI0X1gsXG4gICAgICAgIGZ1bmN0aW9uTmFtZTogXCJhdXRvLXJlbWVkaWF0ZS12MS1BdXRvUmVtZWRpYXRlRUMyLTAwM1wiLFxuICAgICAgICBtZW1vcnlTaXplOiAxMjgsXG4gICAgICAgIHRpbWVvdXQ6IGNkay5EdXJhdGlvbi5zZWNvbmRzKDEyMCksXG4gICAgICAgIHJvbGU6IGlhbS5Sb2xlLmZyb21Sb2xlQXJuKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgXCJBdXRvUmVtZWRpYXRlRUMyRGFzaDAwM0xhbWJkYUZ1bmN0aW9uUm9sZVJlZlwiLFxuICAgICAgICAgIGF1dG9SZW1lZGlhdGVFYzIwMDNSb2xlLmF0dHJBcm4sXG4gICAgICAgICksXG4gICAgICAgIHRyYWNpbmc6IGxhbWJkYS5UcmFjaW5nLkFDVElWRSxcbiAgICAgICAgbG9nR3JvdXA6IGxvZ3MuTG9nR3JvdXAuZnJvbUxvZ0dyb3VwTmFtZShcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIFwiQXV0b1JlbWVkaWF0ZUVDMkRhc2gwMDNMYW1iZGFGdW5jdGlvbkxvZ0dyb3VwUmVmXCIsXG4gICAgICAgICAgYXV0b1JlbWVkaWF0ZUVjMkRhc2gwMDNMb2dHcm91cC5yZWYsXG4gICAgICAgICksXG4gICAgICB9LFxuICAgICk7XG5cbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlRWMyRGFzaDAwM0xhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIk5hbWVcIixcbiAgICAgIFwiQXV0byBSZW1lZGlhdGUgRUMyLTAwM1wiLFxuICAgICk7XG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZUVjMkRhc2gwMDNMYW1iZGFGdW5jdGlvbikuYWRkKFxuICAgICAgXCJPd25lclwiLFxuICAgICAgXCJDbG91ZENvbmZvcm1pdHlcIixcbiAgICApO1xuICAgIGNkay5UYWdzLm9mKGF1dG9SZW1lZGlhdGVFYzJEYXNoMDAzTGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiUm9sZVwiLFxuICAgICAgXCJBdXRvIFJlbWVkaWF0ZVwiLFxuICAgICk7XG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZUVjMkRhc2gwMDNMYW1iZGFGdW5jdGlvbikuYWRkKFxuICAgICAgXCJFbnZpcm9ubWVudFwiLFxuICAgICAgXCJPcHNcIixcbiAgICApO1xuXG4gICAgYXV0b1JlbWVkaWF0ZUVjMkRhc2gwMDNMYW1iZGFGdW5jdGlvbi5ub2RlLmFkZERlcGVuZGVuY3koXG4gICAgICBhdXRvUmVtZWRpYXRlRWMyRGFzaDAwM0xvZ0dyb3VwLFxuICAgICk7XG4gICAgYXV0b1JlbWVkaWF0ZUVjMkRhc2gwMDNMYW1iZGFGdW5jdGlvbi5ub2RlLmFkZERlcGVuZGVuY3koXG4gICAgICBhdXRvUmVtZWRpYXRlRWMyMDAzUm9sZSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZUVjMkRhc2gwMDRMYW1iZGFGdW5jdGlvbiA9IG5ldyBsYW1iZGEuRnVuY3Rpb24oXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlRUMyRGFzaDAwNExhbWJkYUZ1bmN0aW9uXCIsXG4gICAgICB7XG4gICAgICAgIGNvZGU6IGxhbWJkYS5Db2RlLmZyb21Bc3NldChmdW5jdGlvbnNQYXRoKSxcbiAgICAgICAgaGFuZGxlcjogXCJBdXRvUmVtZWRpYXRlRUMyLTAwNC5oYW5kbGVyXCIsXG4gICAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18yNF9YLFxuICAgICAgICBmdW5jdGlvbk5hbWU6IFwiYXV0by1yZW1lZGlhdGUtdjEtQXV0b1JlbWVkaWF0ZUVDMi0wMDRcIixcbiAgICAgICAgbWVtb3J5U2l6ZTogMTI4LFxuICAgICAgICB0aW1lb3V0OiBjZGsuRHVyYXRpb24uc2Vjb25kcygxMjApLFxuICAgICAgICByb2xlOiBpYW0uUm9sZS5mcm9tUm9sZUFybihcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIFwiQXV0b1JlbWVkaWF0ZUVDMkRhc2gwMDRMYW1iZGFGdW5jdGlvblJvbGVSZWZcIixcbiAgICAgICAgICBhdXRvUmVtZWRpYXRlRWMyMDA0Um9sZS5hdHRyQXJuLFxuICAgICAgICApLFxuICAgICAgICB0cmFjaW5nOiBsYW1iZGEuVHJhY2luZy5BQ1RJVkUsXG4gICAgICAgIGxvZ0dyb3VwOiBsb2dzLkxvZ0dyb3VwLmZyb21Mb2dHcm91cE5hbWUoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBcIkF1dG9SZW1lZGlhdGVFQzJEYXNoMDA0TGFtYmRhRnVuY3Rpb25Mb2dHcm91cFJlZlwiLFxuICAgICAgICAgIGF1dG9SZW1lZGlhdGVFYzJEYXNoMDA0TG9nR3JvdXAucmVmLFxuICAgICAgICApLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZUVjMkRhc2gwMDRMYW1iZGFGdW5jdGlvbikuYWRkKFxuICAgICAgXCJOYW1lXCIsXG4gICAgICBcIkF1dG8gUmVtZWRpYXRlIEVDMi0wMDRcIixcbiAgICApO1xuICAgIGNkay5UYWdzLm9mKGF1dG9SZW1lZGlhdGVFYzJEYXNoMDA0TGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiT3duZXJcIixcbiAgICAgIFwiQ2xvdWRDb25mb3JtaXR5XCIsXG4gICAgKTtcbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlRWMyRGFzaDAwNExhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIlJvbGVcIixcbiAgICAgIFwiQXV0byBSZW1lZGlhdGVcIixcbiAgICApO1xuICAgIGNkay5UYWdzLm9mKGF1dG9SZW1lZGlhdGVFYzJEYXNoMDA0TGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiRW52aXJvbm1lbnRcIixcbiAgICAgIFwiT3BzXCIsXG4gICAgKTtcblxuICAgIGF1dG9SZW1lZGlhdGVFYzJEYXNoMDA0TGFtYmRhRnVuY3Rpb24ubm9kZS5hZGREZXBlbmRlbmN5KFxuICAgICAgYXV0b1JlbWVkaWF0ZUVjMkRhc2gwMDRMb2dHcm91cCxcbiAgICApO1xuICAgIGF1dG9SZW1lZGlhdGVFYzJEYXNoMDA0TGFtYmRhRnVuY3Rpb24ubm9kZS5hZGREZXBlbmRlbmN5KFxuICAgICAgYXV0b1JlbWVkaWF0ZUVjMjAwNFJvbGUsXG4gICAgKTtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVFYzJEYXNoMDA1TGFtYmRhRnVuY3Rpb24gPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKFxuICAgICAgdGhpcyxcbiAgICAgIFwiQXV0b1JlbWVkaWF0ZUVDMkRhc2gwMDVMYW1iZGFGdW5jdGlvblwiLFxuICAgICAge1xuICAgICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQoZnVuY3Rpb25zUGF0aCksXG4gICAgICAgIGhhbmRsZXI6IFwiQXV0b1JlbWVkaWF0ZUVDMi0wMDUuaGFuZGxlclwiLFxuICAgICAgICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMjRfWCxcbiAgICAgICAgZnVuY3Rpb25OYW1lOiBcImF1dG8tcmVtZWRpYXRlLXYxLUF1dG9SZW1lZGlhdGVFQzItMDA1XCIsXG4gICAgICAgIG1lbW9yeVNpemU6IDEyOCxcbiAgICAgICAgdGltZW91dDogY2RrLkR1cmF0aW9uLnNlY29uZHMoMTIwKSxcbiAgICAgICAgcm9sZTogaWFtLlJvbGUuZnJvbVJvbGVBcm4oXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBcIkF1dG9SZW1lZGlhdGVFQzJEYXNoMDA1TGFtYmRhRnVuY3Rpb25Sb2xlUmVmXCIsXG4gICAgICAgICAgYXV0b1JlbWVkaWF0ZUVjMjAwNVJvbGUuYXR0ckFybixcbiAgICAgICAgKSxcbiAgICAgICAgdHJhY2luZzogbGFtYmRhLlRyYWNpbmcuQUNUSVZFLFxuICAgICAgICBsb2dHcm91cDogbG9ncy5Mb2dHcm91cC5mcm9tTG9nR3JvdXBOYW1lKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgXCJBdXRvUmVtZWRpYXRlRUMyRGFzaDAwNUxhbWJkYUZ1bmN0aW9uTG9nR3JvdXBSZWZcIixcbiAgICAgICAgICBhdXRvUmVtZWRpYXRlRWMyRGFzaDAwNUxvZ0dyb3VwLnJlZixcbiAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIGNkay5UYWdzLm9mKGF1dG9SZW1lZGlhdGVFYzJEYXNoMDA1TGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiTmFtZVwiLFxuICAgICAgXCJBdXRvIFJlbWVkaWF0ZSBFQzItMDA1XCIsXG4gICAgKTtcbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlRWMyRGFzaDAwNUxhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIk93bmVyXCIsXG4gICAgICBcIkNsb3VkQ29uZm9ybWl0eVwiLFxuICAgICk7XG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZUVjMkRhc2gwMDVMYW1iZGFGdW5jdGlvbikuYWRkKFxuICAgICAgXCJSb2xlXCIsXG4gICAgICBcIkF1dG8gUmVtZWRpYXRlXCIsXG4gICAgKTtcbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlRWMyRGFzaDAwNUxhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIkVudmlyb25tZW50XCIsXG4gICAgICBcIk9wc1wiLFxuICAgICk7XG5cbiAgICBhdXRvUmVtZWRpYXRlRWMyRGFzaDAwNUxhbWJkYUZ1bmN0aW9uLm5vZGUuYWRkRGVwZW5kZW5jeShcbiAgICAgIGF1dG9SZW1lZGlhdGVFYzJEYXNoMDA1TG9nR3JvdXAsXG4gICAgKTtcbiAgICBhdXRvUmVtZWRpYXRlRWMyRGFzaDAwNUxhbWJkYUZ1bmN0aW9uLm5vZGUuYWRkRGVwZW5kZW5jeShcbiAgICAgIGF1dG9SZW1lZGlhdGVFYzIwMDVSb2xlLFxuICAgICk7XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlRWMyRGFzaDAwNkxhbWJkYUZ1bmN0aW9uID0gbmV3IGxhbWJkYS5GdW5jdGlvbihcbiAgICAgIHRoaXMsXG4gICAgICBcIkF1dG9SZW1lZGlhdGVFQzJEYXNoMDA2TGFtYmRhRnVuY3Rpb25cIixcbiAgICAgIHtcbiAgICAgICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KGZ1bmN0aW9uc1BhdGgpLFxuICAgICAgICBoYW5kbGVyOiBcIkF1dG9SZW1lZGlhdGVFQzItMDA2LmhhbmRsZXJcIixcbiAgICAgICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzI0X1gsXG4gICAgICAgIGZ1bmN0aW9uTmFtZTogXCJhdXRvLXJlbWVkaWF0ZS12MS1BdXRvUmVtZWRpYXRlRUMyLTAwNlwiLFxuICAgICAgICBtZW1vcnlTaXplOiAxMjgsXG4gICAgICAgIHRpbWVvdXQ6IGNkay5EdXJhdGlvbi5zZWNvbmRzKDEyMCksXG4gICAgICAgIHJvbGU6IGlhbS5Sb2xlLmZyb21Sb2xlQXJuKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgXCJBdXRvUmVtZWRpYXRlRUMyRGFzaDAwNkxhbWJkYUZ1bmN0aW9uUm9sZVJlZlwiLFxuICAgICAgICAgIGF1dG9SZW1lZGlhdGVFYzIwMDZSb2xlLmF0dHJBcm4sXG4gICAgICAgICksXG4gICAgICAgIHRyYWNpbmc6IGxhbWJkYS5UcmFjaW5nLkFDVElWRSxcbiAgICAgICAgbG9nR3JvdXA6IGxvZ3MuTG9nR3JvdXAuZnJvbUxvZ0dyb3VwTmFtZShcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIFwiQXV0b1JlbWVkaWF0ZUVDMkRhc2gwMDZMYW1iZGFGdW5jdGlvbkxvZ0dyb3VwUmVmXCIsXG4gICAgICAgICAgYXV0b1JlbWVkaWF0ZUVjMkRhc2gwMDZMb2dHcm91cC5yZWYsXG4gICAgICAgICksXG4gICAgICB9LFxuICAgICk7XG5cbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlRWMyRGFzaDAwNkxhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIk5hbWVcIixcbiAgICAgIFwiQXV0byBSZW1lZGlhdGUgRUMyLTAwNlwiLFxuICAgICk7XG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZUVjMkRhc2gwMDZMYW1iZGFGdW5jdGlvbikuYWRkKFxuICAgICAgXCJPd25lclwiLFxuICAgICAgXCJDbG91ZENvbmZvcm1pdHlcIixcbiAgICApO1xuICAgIGNkay5UYWdzLm9mKGF1dG9SZW1lZGlhdGVFYzJEYXNoMDA2TGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiUm9sZVwiLFxuICAgICAgXCJBdXRvIFJlbWVkaWF0ZVwiLFxuICAgICk7XG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZUVjMkRhc2gwMDZMYW1iZGFGdW5jdGlvbikuYWRkKFxuICAgICAgXCJFbnZpcm9ubWVudFwiLFxuICAgICAgXCJPcHNcIixcbiAgICApO1xuXG4gICAgYXV0b1JlbWVkaWF0ZUVjMkRhc2gwMDZMYW1iZGFGdW5jdGlvbi5ub2RlLmFkZERlcGVuZGVuY3koXG4gICAgICBhdXRvUmVtZWRpYXRlRWMyRGFzaDAwNkxvZ0dyb3VwLFxuICAgICk7XG4gICAgYXV0b1JlbWVkaWF0ZUVjMkRhc2gwMDZMYW1iZGFGdW5jdGlvbi5ub2RlLmFkZERlcGVuZGVuY3koXG4gICAgICBhdXRvUmVtZWRpYXRlRWMyMDA2Um9sZSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZUVjMkRhc2gwMDhMYW1iZGFGdW5jdGlvbiA9IG5ldyBsYW1iZGEuRnVuY3Rpb24oXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlRUMyRGFzaDAwOExhbWJkYUZ1bmN0aW9uXCIsXG4gICAgICB7XG4gICAgICAgIGNvZGU6IGxhbWJkYS5Db2RlLmZyb21Bc3NldChmdW5jdGlvbnNQYXRoKSxcbiAgICAgICAgaGFuZGxlcjogXCJBdXRvUmVtZWRpYXRlRUMyLTAwOC5oYW5kbGVyXCIsXG4gICAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18yNF9YLFxuICAgICAgICBmdW5jdGlvbk5hbWU6IFwiYXV0by1yZW1lZGlhdGUtdjEtQXV0b1JlbWVkaWF0ZUVDMi0wMDhcIixcbiAgICAgICAgbWVtb3J5U2l6ZTogMTI4LFxuICAgICAgICB0aW1lb3V0OiBjZGsuRHVyYXRpb24uc2Vjb25kcygxMjApLFxuICAgICAgICByb2xlOiBpYW0uUm9sZS5mcm9tUm9sZUFybihcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIFwiQXV0b1JlbWVkaWF0ZUVDMkRhc2gwMDhMYW1iZGFGdW5jdGlvblJvbGVSZWZcIixcbiAgICAgICAgICBhdXRvUmVtZWRpYXRlRWMyMDA4Um9sZS5hdHRyQXJuLFxuICAgICAgICApLFxuICAgICAgICB0cmFjaW5nOiBsYW1iZGEuVHJhY2luZy5BQ1RJVkUsXG4gICAgICAgIGxvZ0dyb3VwOiBsb2dzLkxvZ0dyb3VwLmZyb21Mb2dHcm91cE5hbWUoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBcIkF1dG9SZW1lZGlhdGVFQzJEYXNoMDA4TGFtYmRhRnVuY3Rpb25Mb2dHcm91cFJlZlwiLFxuICAgICAgICAgIGF1dG9SZW1lZGlhdGVFYzJEYXNoMDA4TG9nR3JvdXAucmVmLFxuICAgICAgICApLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZUVjMkRhc2gwMDhMYW1iZGFGdW5jdGlvbikuYWRkKFxuICAgICAgXCJOYW1lXCIsXG4gICAgICBcIkF1dG8gUmVtZWRpYXRlIEVDMi0wMDhcIixcbiAgICApO1xuICAgIGNkay5UYWdzLm9mKGF1dG9SZW1lZGlhdGVFYzJEYXNoMDA4TGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiT3duZXJcIixcbiAgICAgIFwiQ2xvdWRDb25mb3JtaXR5XCIsXG4gICAgKTtcbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlRWMyRGFzaDAwOExhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIlJvbGVcIixcbiAgICAgIFwiQXV0byBSZW1lZGlhdGVcIixcbiAgICApO1xuICAgIGNkay5UYWdzLm9mKGF1dG9SZW1lZGlhdGVFYzJEYXNoMDA4TGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiRW52aXJvbm1lbnRcIixcbiAgICAgIFwiT3BzXCIsXG4gICAgKTtcblxuICAgIGF1dG9SZW1lZGlhdGVFYzJEYXNoMDA4TGFtYmRhRnVuY3Rpb24ubm9kZS5hZGREZXBlbmRlbmN5KFxuICAgICAgYXV0b1JlbWVkaWF0ZUVjMkRhc2gwMDhMb2dHcm91cCxcbiAgICApO1xuICAgIGF1dG9SZW1lZGlhdGVFYzJEYXNoMDA4TGFtYmRhRnVuY3Rpb24ubm9kZS5hZGREZXBlbmRlbmN5KFxuICAgICAgYXV0b1JlbWVkaWF0ZUVjMjAwOFJvbGUsXG4gICAgKTtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVFYzJEYXNoMDE5TGFtYmRhRnVuY3Rpb24gPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKFxuICAgICAgdGhpcyxcbiAgICAgIFwiQXV0b1JlbWVkaWF0ZUVDMkRhc2gwMTlMYW1iZGFGdW5jdGlvblwiLFxuICAgICAge1xuICAgICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQoZnVuY3Rpb25zUGF0aCksXG4gICAgICAgIGhhbmRsZXI6IFwiQXV0b1JlbWVkaWF0ZUVDMi0wMTkuaGFuZGxlclwiLFxuICAgICAgICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMjRfWCxcbiAgICAgICAgZnVuY3Rpb25OYW1lOiBcImF1dG8tcmVtZWRpYXRlLXYxLUF1dG9SZW1lZGlhdGVFQzItMDE5XCIsXG4gICAgICAgIG1lbW9yeVNpemU6IDEyOCxcbiAgICAgICAgdGltZW91dDogY2RrLkR1cmF0aW9uLnNlY29uZHMoMTIwKSxcbiAgICAgICAgcm9sZTogaWFtLlJvbGUuZnJvbVJvbGVBcm4oXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBcIkF1dG9SZW1lZGlhdGVFQzJEYXNoMDE5TGFtYmRhRnVuY3Rpb25Sb2xlUmVmXCIsXG4gICAgICAgICAgYXV0b1JlbWVkaWF0ZUVjMjAxOVJvbGUuYXR0ckFybixcbiAgICAgICAgKSxcbiAgICAgICAgdHJhY2luZzogbGFtYmRhLlRyYWNpbmcuQUNUSVZFLFxuICAgICAgICBsb2dHcm91cDogbG9ncy5Mb2dHcm91cC5mcm9tTG9nR3JvdXBOYW1lKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgXCJBdXRvUmVtZWRpYXRlRUMyRGFzaDAxOUxhbWJkYUZ1bmN0aW9uTG9nR3JvdXBSZWZcIixcbiAgICAgICAgICBhdXRvUmVtZWRpYXRlRWMyRGFzaDAxOUxvZ0dyb3VwLnJlZixcbiAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIGNkay5UYWdzLm9mKGF1dG9SZW1lZGlhdGVFYzJEYXNoMDE5TGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiTmFtZVwiLFxuICAgICAgXCJBdXRvIFJlbWVkaWF0ZSBFQzItMDE5XCIsXG4gICAgKTtcbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlRWMyRGFzaDAxOUxhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIk93bmVyXCIsXG4gICAgICBcIkNsb3VkQ29uZm9ybWl0eVwiLFxuICAgICk7XG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZUVjMkRhc2gwMTlMYW1iZGFGdW5jdGlvbikuYWRkKFxuICAgICAgXCJSb2xlXCIsXG4gICAgICBcIkF1dG8gUmVtZWRpYXRlXCIsXG4gICAgKTtcbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlRWMyRGFzaDAxOUxhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIkVudmlyb25tZW50XCIsXG4gICAgICBcIk9wc1wiLFxuICAgICk7XG5cbiAgICBhdXRvUmVtZWRpYXRlRWMyRGFzaDAxOUxhbWJkYUZ1bmN0aW9uLm5vZGUuYWRkRGVwZW5kZW5jeShcbiAgICAgIGF1dG9SZW1lZGlhdGVFYzJEYXNoMDE5TG9nR3JvdXAsXG4gICAgKTtcbiAgICBhdXRvUmVtZWRpYXRlRWMyRGFzaDAxOUxhbWJkYUZ1bmN0aW9uLm5vZGUuYWRkRGVwZW5kZW5jeShcbiAgICAgIGF1dG9SZW1lZGlhdGVFYzIwMTlSb2xlLFxuICAgICk7XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlRWMyRGFzaDAzOExhbWJkYUZ1bmN0aW9uID0gbmV3IGxhbWJkYS5GdW5jdGlvbihcbiAgICAgIHRoaXMsXG4gICAgICBcIkF1dG9SZW1lZGlhdGVFQzJEYXNoMDM4TGFtYmRhRnVuY3Rpb25cIixcbiAgICAgIHtcbiAgICAgICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KGZ1bmN0aW9uc1BhdGgpLFxuICAgICAgICBoYW5kbGVyOiBcIkF1dG9SZW1lZGlhdGVFQzItMDM4LmhhbmRsZXJcIixcbiAgICAgICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzI0X1gsXG4gICAgICAgIGZ1bmN0aW9uTmFtZTogXCJhdXRvLXJlbWVkaWF0ZS12MS1BdXRvUmVtZWRpYXRlRUMyLTAzOFwiLFxuICAgICAgICBtZW1vcnlTaXplOiAxMjgsXG4gICAgICAgIHRpbWVvdXQ6IGNkay5EdXJhdGlvbi5zZWNvbmRzKDEyMCksXG4gICAgICAgIHJvbGU6IGlhbS5Sb2xlLmZyb21Sb2xlQXJuKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgXCJBdXRvUmVtZWRpYXRlRUMyRGFzaDAzOExhbWJkYUZ1bmN0aW9uUm9sZVJlZlwiLFxuICAgICAgICAgIGF1dG9SZW1lZGlhdGVFYzIwMzhSb2xlLmF0dHJBcm4sXG4gICAgICAgICksXG4gICAgICAgIHRyYWNpbmc6IGxhbWJkYS5UcmFjaW5nLkFDVElWRSxcbiAgICAgICAgbG9nR3JvdXA6IGxvZ3MuTG9nR3JvdXAuZnJvbUxvZ0dyb3VwTmFtZShcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIFwiQXV0b1JlbWVkaWF0ZUVDMkRhc2gwMzhMYW1iZGFGdW5jdGlvbkxvZ0dyb3VwUmVmXCIsXG4gICAgICAgICAgYXV0b1JlbWVkaWF0ZUVjMkRhc2gwMzhMb2dHcm91cC5yZWYsXG4gICAgICAgICksXG4gICAgICB9LFxuICAgICk7XG5cbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlRWMyRGFzaDAzOExhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIk5hbWVcIixcbiAgICAgIFwiQXV0byBSZW1lZGlhdGUgRUMyLTAzOFwiLFxuICAgICk7XG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZUVjMkRhc2gwMzhMYW1iZGFGdW5jdGlvbikuYWRkKFxuICAgICAgXCJPd25lclwiLFxuICAgICAgXCJDbG91ZENvbmZvcm1pdHlcIixcbiAgICApO1xuICAgIGNkay5UYWdzLm9mKGF1dG9SZW1lZGlhdGVFYzJEYXNoMDM4TGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiUm9sZVwiLFxuICAgICAgXCJBdXRvIFJlbWVkaWF0ZVwiLFxuICAgICk7XG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZUVjMkRhc2gwMzhMYW1iZGFGdW5jdGlvbikuYWRkKFxuICAgICAgXCJFbnZpcm9ubWVudFwiLFxuICAgICAgXCJPcHNcIixcbiAgICApO1xuXG4gICAgYXV0b1JlbWVkaWF0ZUVjMkRhc2gwMzhMYW1iZGFGdW5jdGlvbi5ub2RlLmFkZERlcGVuZGVuY3koXG4gICAgICBhdXRvUmVtZWRpYXRlRWMyRGFzaDAzOExvZ0dyb3VwLFxuICAgICk7XG4gICAgYXV0b1JlbWVkaWF0ZUVjMkRhc2gwMzhMYW1iZGFGdW5jdGlvbi5ub2RlLmFkZERlcGVuZGVuY3koXG4gICAgICBhdXRvUmVtZWRpYXRlRWMyMDM4Um9sZSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZUVjMkRhc2gwMzlMYW1iZGFGdW5jdGlvbiA9IG5ldyBsYW1iZGEuRnVuY3Rpb24oXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlRUMyRGFzaDAzOUxhbWJkYUZ1bmN0aW9uXCIsXG4gICAgICB7XG4gICAgICAgIGNvZGU6IGxhbWJkYS5Db2RlLmZyb21Bc3NldChmdW5jdGlvbnNQYXRoKSxcbiAgICAgICAgaGFuZGxlcjogXCJBdXRvUmVtZWRpYXRlRUMyLTAzOS5oYW5kbGVyXCIsXG4gICAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18yNF9YLFxuICAgICAgICBmdW5jdGlvbk5hbWU6IFwiYXV0by1yZW1lZGlhdGUtdjEtQXV0b1JlbWVkaWF0ZUVDMi0wMzlcIixcbiAgICAgICAgbWVtb3J5U2l6ZTogMTI4LFxuICAgICAgICB0aW1lb3V0OiBjZGsuRHVyYXRpb24uc2Vjb25kcygxMjApLFxuICAgICAgICByb2xlOiBpYW0uUm9sZS5mcm9tUm9sZUFybihcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIFwiQXV0b1JlbWVkaWF0ZUVDMkRhc2gwMzlMYW1iZGFGdW5jdGlvblJvbGVSZWZcIixcbiAgICAgICAgICBhdXRvUmVtZWRpYXRlRWMyMDM5Um9sZS5hdHRyQXJuLFxuICAgICAgICApLFxuICAgICAgICB0cmFjaW5nOiBsYW1iZGEuVHJhY2luZy5BQ1RJVkUsXG4gICAgICAgIGxvZ0dyb3VwOiBsb2dzLkxvZ0dyb3VwLmZyb21Mb2dHcm91cE5hbWUoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBcIkF1dG9SZW1lZGlhdGVFQzJEYXNoMDM5TGFtYmRhRnVuY3Rpb25Mb2dHcm91cFJlZlwiLFxuICAgICAgICAgIGF1dG9SZW1lZGlhdGVFYzJEYXNoMDM5TG9nR3JvdXAucmVmLFxuICAgICAgICApLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZUVjMkRhc2gwMzlMYW1iZGFGdW5jdGlvbikuYWRkKFxuICAgICAgXCJOYW1lXCIsXG4gICAgICBcIkF1dG8gUmVtZWRpYXRlIEVDMi0wMzlcIixcbiAgICApO1xuICAgIGNkay5UYWdzLm9mKGF1dG9SZW1lZGlhdGVFYzJEYXNoMDM5TGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiT3duZXJcIixcbiAgICAgIFwiQ2xvdWRDb25mb3JtaXR5XCIsXG4gICAgKTtcbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlRWMyRGFzaDAzOUxhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIlJvbGVcIixcbiAgICAgIFwiQXV0byBSZW1lZGlhdGVcIixcbiAgICApO1xuICAgIGNkay5UYWdzLm9mKGF1dG9SZW1lZGlhdGVFYzJEYXNoMDM5TGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiRW52aXJvbm1lbnRcIixcbiAgICAgIFwiT3BzXCIsXG4gICAgKTtcblxuICAgIGF1dG9SZW1lZGlhdGVFYzJEYXNoMDM5TGFtYmRhRnVuY3Rpb24ubm9kZS5hZGREZXBlbmRlbmN5KFxuICAgICAgYXV0b1JlbWVkaWF0ZUVjMkRhc2gwMzlMb2dHcm91cCxcbiAgICApO1xuICAgIGF1dG9SZW1lZGlhdGVFYzJEYXNoMDM5TGFtYmRhRnVuY3Rpb24ubm9kZS5hZGREZXBlbmRlbmN5KFxuICAgICAgYXV0b1JlbWVkaWF0ZUVjMjAzOVJvbGUsXG4gICAgKTtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVFYzJEYXNoMDQwTGFtYmRhRnVuY3Rpb24gPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKFxuICAgICAgdGhpcyxcbiAgICAgIFwiQXV0b1JlbWVkaWF0ZUVDMkRhc2gwNDBMYW1iZGFGdW5jdGlvblwiLFxuICAgICAge1xuICAgICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQoZnVuY3Rpb25zUGF0aCksXG4gICAgICAgIGhhbmRsZXI6IFwiQXV0b1JlbWVkaWF0ZUVDMi0wNDAuaGFuZGxlclwiLFxuICAgICAgICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMjRfWCxcbiAgICAgICAgZnVuY3Rpb25OYW1lOiBcImF1dG8tcmVtZWRpYXRlLXYxLUF1dG9SZW1lZGlhdGVFQzItMDQwXCIsXG4gICAgICAgIG1lbW9yeVNpemU6IDEyOCxcbiAgICAgICAgdGltZW91dDogY2RrLkR1cmF0aW9uLnNlY29uZHMoMTIwKSxcbiAgICAgICAgcm9sZTogaWFtLlJvbGUuZnJvbVJvbGVBcm4oXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBcIkF1dG9SZW1lZGlhdGVFQzJEYXNoMDQwTGFtYmRhRnVuY3Rpb25Sb2xlUmVmXCIsXG4gICAgICAgICAgYXV0b1JlbWVkaWF0ZUVjMjA0MFJvbGUuYXR0ckFybixcbiAgICAgICAgKSxcbiAgICAgICAgdHJhY2luZzogbGFtYmRhLlRyYWNpbmcuQUNUSVZFLFxuICAgICAgICBsb2dHcm91cDogbG9ncy5Mb2dHcm91cC5mcm9tTG9nR3JvdXBOYW1lKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgXCJBdXRvUmVtZWRpYXRlRUMyRGFzaDA0MExhbWJkYUZ1bmN0aW9uTG9nR3JvdXBSZWZcIixcbiAgICAgICAgICBhdXRvUmVtZWRpYXRlRWMyRGFzaDA0MExvZ0dyb3VwLnJlZixcbiAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIGNkay5UYWdzLm9mKGF1dG9SZW1lZGlhdGVFYzJEYXNoMDQwTGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiTmFtZVwiLFxuICAgICAgXCJBdXRvIFJlbWVkaWF0ZSBFQzItMDQwXCIsXG4gICAgKTtcbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlRWMyRGFzaDA0MExhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIk93bmVyXCIsXG4gICAgICBcIkNsb3VkQ29uZm9ybWl0eVwiLFxuICAgICk7XG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZUVjMkRhc2gwNDBMYW1iZGFGdW5jdGlvbikuYWRkKFxuICAgICAgXCJSb2xlXCIsXG4gICAgICBcIkF1dG8gUmVtZWRpYXRlXCIsXG4gICAgKTtcbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlRWMyRGFzaDA0MExhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIkVudmlyb25tZW50XCIsXG4gICAgICBcIk9wc1wiLFxuICAgICk7XG5cbiAgICBhdXRvUmVtZWRpYXRlRWMyRGFzaDA0MExhbWJkYUZ1bmN0aW9uLm5vZGUuYWRkRGVwZW5kZW5jeShcbiAgICAgIGF1dG9SZW1lZGlhdGVFYzJEYXNoMDQwTG9nR3JvdXAsXG4gICAgKTtcbiAgICBhdXRvUmVtZWRpYXRlRWMyRGFzaDA0MExhbWJkYUZ1bmN0aW9uLm5vZGUuYWRkRGVwZW5kZW5jeShcbiAgICAgIGF1dG9SZW1lZGlhdGVFYzIwNDBSb2xlLFxuICAgICk7XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlRWMyRGFzaDA0M0xhbWJkYUZ1bmN0aW9uID0gbmV3IGxhbWJkYS5GdW5jdGlvbihcbiAgICAgIHRoaXMsXG4gICAgICBcIkF1dG9SZW1lZGlhdGVFQzJEYXNoMDQzTGFtYmRhRnVuY3Rpb25cIixcbiAgICAgIHtcbiAgICAgICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KGZ1bmN0aW9uc1BhdGgpLFxuICAgICAgICBoYW5kbGVyOiBcIkF1dG9SZW1lZGlhdGVFQzItMDQzLmhhbmRsZXJcIixcbiAgICAgICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzI0X1gsXG4gICAgICAgIGZ1bmN0aW9uTmFtZTogXCJhdXRvLXJlbWVkaWF0ZS12MS1BdXRvUmVtZWRpYXRlRUMyLTA0M1wiLFxuICAgICAgICBtZW1vcnlTaXplOiAxMjgsXG4gICAgICAgIHRpbWVvdXQ6IGNkay5EdXJhdGlvbi5zZWNvbmRzKDEyMCksXG4gICAgICAgIHJvbGU6IGlhbS5Sb2xlLmZyb21Sb2xlQXJuKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgXCJBdXRvUmVtZWRpYXRlRUMyRGFzaDA0M0xhbWJkYUZ1bmN0aW9uUm9sZVJlZlwiLFxuICAgICAgICAgIGF1dG9SZW1lZGlhdGVFYzIwNDNSb2xlLmF0dHJBcm4sXG4gICAgICAgICksXG4gICAgICAgIHRyYWNpbmc6IGxhbWJkYS5UcmFjaW5nLkFDVElWRSxcbiAgICAgICAgbG9nR3JvdXA6IGxvZ3MuTG9nR3JvdXAuZnJvbUxvZ0dyb3VwTmFtZShcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIFwiQXV0b1JlbWVkaWF0ZUVDMkRhc2gwNDNMYW1iZGFGdW5jdGlvbkxvZ0dyb3VwUmVmXCIsXG4gICAgICAgICAgYXV0b1JlbWVkaWF0ZUVjMkRhc2gwNDNMb2dHcm91cC5yZWYsXG4gICAgICAgICksXG4gICAgICB9LFxuICAgICk7XG5cbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlRWMyRGFzaDA0M0xhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIk5hbWVcIixcbiAgICAgIFwiQXV0byBSZW1lZGlhdGUgRUMyLTA0M1wiLFxuICAgICk7XG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZUVjMkRhc2gwNDNMYW1iZGFGdW5jdGlvbikuYWRkKFxuICAgICAgXCJPd25lclwiLFxuICAgICAgXCJDbG91ZENvbmZvcm1pdHlcIixcbiAgICApO1xuICAgIGNkay5UYWdzLm9mKGF1dG9SZW1lZGlhdGVFYzJEYXNoMDQzTGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiUm9sZVwiLFxuICAgICAgXCJBdXRvIFJlbWVkaWF0ZVwiLFxuICAgICk7XG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZUVjMkRhc2gwNDNMYW1iZGFGdW5jdGlvbikuYWRkKFxuICAgICAgXCJFbnZpcm9ubWVudFwiLFxuICAgICAgXCJPcHNcIixcbiAgICApO1xuXG4gICAgYXV0b1JlbWVkaWF0ZUVjMkRhc2gwNDNMYW1iZGFGdW5jdGlvbi5ub2RlLmFkZERlcGVuZGVuY3koXG4gICAgICBhdXRvUmVtZWRpYXRlRWMyRGFzaDA0M0xvZ0dyb3VwLFxuICAgICk7XG4gICAgYXV0b1JlbWVkaWF0ZUVjMkRhc2gwNDNMYW1iZGFGdW5jdGlvbi5ub2RlLmFkZERlcGVuZGVuY3koXG4gICAgICBhdXRvUmVtZWRpYXRlRWMyMDQzUm9sZSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZUVjMkRhc2gwNDVMYW1iZGFGdW5jdGlvbiA9IG5ldyBsYW1iZGEuRnVuY3Rpb24oXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlRUMyRGFzaDA0NUxhbWJkYUZ1bmN0aW9uXCIsXG4gICAgICB7XG4gICAgICAgIGNvZGU6IGxhbWJkYS5Db2RlLmZyb21Bc3NldChmdW5jdGlvbnNQYXRoKSxcbiAgICAgICAgaGFuZGxlcjogXCJBdXRvUmVtZWRpYXRlRUMyLTA0NS5oYW5kbGVyXCIsXG4gICAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18yNF9YLFxuICAgICAgICBmdW5jdGlvbk5hbWU6IFwiYXV0by1yZW1lZGlhdGUtdjEtQXV0b1JlbWVkaWF0ZUVDMi0wNDVcIixcbiAgICAgICAgbWVtb3J5U2l6ZTogMTI4LFxuICAgICAgICB0aW1lb3V0OiBjZGsuRHVyYXRpb24uc2Vjb25kcygxMjApLFxuICAgICAgICByb2xlOiBpYW0uUm9sZS5mcm9tUm9sZUFybihcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIFwiQXV0b1JlbWVkaWF0ZUVDMkRhc2gwNDVMYW1iZGFGdW5jdGlvblJvbGVSZWZcIixcbiAgICAgICAgICBhdXRvUmVtZWRpYXRlRWMyMDQ1Um9sZS5hdHRyQXJuLFxuICAgICAgICApLFxuICAgICAgICB0cmFjaW5nOiBsYW1iZGEuVHJhY2luZy5BQ1RJVkUsXG4gICAgICAgIGxvZ0dyb3VwOiBsb2dzLkxvZ0dyb3VwLmZyb21Mb2dHcm91cE5hbWUoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBcIkF1dG9SZW1lZGlhdGVFQzJEYXNoMDQ1TGFtYmRhRnVuY3Rpb25Mb2dHcm91cFJlZlwiLFxuICAgICAgICAgIGF1dG9SZW1lZGlhdGVFYzJEYXNoMDQ1TG9nR3JvdXAucmVmLFxuICAgICAgICApLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZUVjMkRhc2gwNDVMYW1iZGFGdW5jdGlvbikuYWRkKFxuICAgICAgXCJOYW1lXCIsXG4gICAgICBcIkF1dG8gUmVtZWRpYXRlIEVDMi0wNDVcIixcbiAgICApO1xuICAgIGNkay5UYWdzLm9mKGF1dG9SZW1lZGlhdGVFYzJEYXNoMDQ1TGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiT3duZXJcIixcbiAgICAgIFwiQ2xvdWRDb25mb3JtaXR5XCIsXG4gICAgKTtcbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlRWMyRGFzaDA0NUxhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIlJvbGVcIixcbiAgICAgIFwiQXV0byBSZW1lZGlhdGVcIixcbiAgICApO1xuICAgIGNkay5UYWdzLm9mKGF1dG9SZW1lZGlhdGVFYzJEYXNoMDQ1TGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiRW52aXJvbm1lbnRcIixcbiAgICAgIFwiT3BzXCIsXG4gICAgKTtcblxuICAgIGF1dG9SZW1lZGlhdGVFYzJEYXNoMDQ1TGFtYmRhRnVuY3Rpb24ubm9kZS5hZGREZXBlbmRlbmN5KFxuICAgICAgYXV0b1JlbWVkaWF0ZUVjMkRhc2gwNDVMb2dHcm91cCxcbiAgICApO1xuICAgIGF1dG9SZW1lZGlhdGVFYzJEYXNoMDQ1TGFtYmRhRnVuY3Rpb24ubm9kZS5hZGREZXBlbmRlbmN5KFxuICAgICAgYXV0b1JlbWVkaWF0ZUVjMjA0NVJvbGUsXG4gICAgKTtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVHZERhc2gwMDFMYW1iZGFGdW5jdGlvbiA9IG5ldyBsYW1iZGEuRnVuY3Rpb24oXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlR0REYXNoMDAxTGFtYmRhRnVuY3Rpb25cIixcbiAgICAgIHtcbiAgICAgICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KGZ1bmN0aW9uc1BhdGgpLFxuICAgICAgICBoYW5kbGVyOiBcIkF1dG9SZW1lZGlhdGVHRC0wMDEuaGFuZGxlclwiLFxuICAgICAgICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMjRfWCxcbiAgICAgICAgZnVuY3Rpb25OYW1lOiBcImF1dG8tcmVtZWRpYXRlLXYxLUF1dG9SZW1lZGlhdGVHRC0wMDFcIixcbiAgICAgICAgbWVtb3J5U2l6ZTogMTI4LFxuICAgICAgICB0aW1lb3V0OiBjZGsuRHVyYXRpb24uc2Vjb25kcygxMCksXG4gICAgICAgIHJvbGU6IGlhbS5Sb2xlLmZyb21Sb2xlQXJuKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgXCJBdXRvUmVtZWRpYXRlR0REYXNoMDAxTGFtYmRhRnVuY3Rpb25Sb2xlUmVmXCIsXG4gICAgICAgICAgYXV0b1JlbWVkaWF0ZUdkMDAxUm9sZS5hdHRyQXJuLFxuICAgICAgICApLFxuICAgICAgICB0cmFjaW5nOiBsYW1iZGEuVHJhY2luZy5BQ1RJVkUsXG4gICAgICAgIGxvZ0dyb3VwOiBsb2dzLkxvZ0dyb3VwLmZyb21Mb2dHcm91cE5hbWUoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBcIkF1dG9SZW1lZGlhdGVHRERhc2gwMDFMYW1iZGFGdW5jdGlvbkxvZ0dyb3VwUmVmXCIsXG4gICAgICAgICAgYXV0b1JlbWVkaWF0ZUdkRGFzaDAwMUxvZ0dyb3VwLnJlZixcbiAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIGNkay5UYWdzLm9mKGF1dG9SZW1lZGlhdGVHZERhc2gwMDFMYW1iZGFGdW5jdGlvbikuYWRkKFxuICAgICAgXCJOYW1lXCIsXG4gICAgICBcIkF1dG8gUmVtZWRpYXRlIEdELTAwMVwiLFxuICAgICk7XG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZUdkRGFzaDAwMUxhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIk93bmVyXCIsXG4gICAgICBcIkNsb3VkQ29uZm9ybWl0eVwiLFxuICAgICk7XG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZUdkRGFzaDAwMUxhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIlJvbGVcIixcbiAgICAgIFwiQXV0byBSZW1lZGlhdGVcIixcbiAgICApO1xuICAgIGNkay5UYWdzLm9mKGF1dG9SZW1lZGlhdGVHZERhc2gwMDFMYW1iZGFGdW5jdGlvbikuYWRkKFwiRW52aXJvbm1lbnRcIiwgXCJPcHNcIik7XG5cbiAgICBhdXRvUmVtZWRpYXRlR2REYXNoMDAxTGFtYmRhRnVuY3Rpb24ubm9kZS5hZGREZXBlbmRlbmN5KFxuICAgICAgYXV0b1JlbWVkaWF0ZUdkRGFzaDAwMUxvZ0dyb3VwLFxuICAgICk7XG4gICAgYXV0b1JlbWVkaWF0ZUdkRGFzaDAwMUxhbWJkYUZ1bmN0aW9uLm5vZGUuYWRkRGVwZW5kZW5jeShcbiAgICAgIGF1dG9SZW1lZGlhdGVHZDAwMVJvbGUsXG4gICAgKTtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVJYW1EYXNoMDAxTGFtYmRhRnVuY3Rpb24gPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKFxuICAgICAgdGhpcyxcbiAgICAgIFwiQXV0b1JlbWVkaWF0ZUlBTURhc2gwMDFMYW1iZGFGdW5jdGlvblwiLFxuICAgICAge1xuICAgICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQoZnVuY3Rpb25zUGF0aCksXG4gICAgICAgIGhhbmRsZXI6IFwiQXV0b1JlbWVkaWF0ZUlBTS0wMDEuaGFuZGxlclwiLFxuICAgICAgICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMjRfWCxcbiAgICAgICAgZnVuY3Rpb25OYW1lOiBcImF1dG8tcmVtZWRpYXRlLXYxLUF1dG9SZW1lZGlhdGVJQU0tMDAxXCIsXG4gICAgICAgIG1lbW9yeVNpemU6IDEyOCxcbiAgICAgICAgdGltZW91dDogY2RrLkR1cmF0aW9uLnNlY29uZHMoMTApLFxuICAgICAgICByb2xlOiBpYW0uUm9sZS5mcm9tUm9sZUFybihcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIFwiQXV0b1JlbWVkaWF0ZUlBTURhc2gwMDFMYW1iZGFGdW5jdGlvblJvbGVSZWZcIixcbiAgICAgICAgICBhdXRvUmVtZWRpYXRlSWFtMDAxUm9sZS5hdHRyQXJuLFxuICAgICAgICApLFxuICAgICAgICB0cmFjaW5nOiBsYW1iZGEuVHJhY2luZy5BQ1RJVkUsXG4gICAgICAgIGxvZ0dyb3VwOiBsb2dzLkxvZ0dyb3VwLmZyb21Mb2dHcm91cE5hbWUoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBcIkF1dG9SZW1lZGlhdGVJQU1EYXNoMDAxTGFtYmRhRnVuY3Rpb25Mb2dHcm91cFJlZlwiLFxuICAgICAgICAgIGF1dG9SZW1lZGlhdGVJYW1EYXNoMDAxTG9nR3JvdXAucmVmLFxuICAgICAgICApLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZUlhbURhc2gwMDFMYW1iZGFGdW5jdGlvbikuYWRkKFxuICAgICAgXCJOYW1lXCIsXG4gICAgICBcIkF1dG8gUmVtZWRpYXRlIElBTS0wMDFcIixcbiAgICApO1xuICAgIGNkay5UYWdzLm9mKGF1dG9SZW1lZGlhdGVJYW1EYXNoMDAxTGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiT3duZXJcIixcbiAgICAgIFwiQ2xvdWRDb25mb3JtaXR5XCIsXG4gICAgKTtcbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlSWFtRGFzaDAwMUxhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIlJvbGVcIixcbiAgICAgIFwiQXV0byBSZW1lZGlhdGVcIixcbiAgICApO1xuICAgIGNkay5UYWdzLm9mKGF1dG9SZW1lZGlhdGVJYW1EYXNoMDAxTGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiRW52aXJvbm1lbnRcIixcbiAgICAgIFwiT3BzXCIsXG4gICAgKTtcblxuICAgIGF1dG9SZW1lZGlhdGVJYW1EYXNoMDAxTGFtYmRhRnVuY3Rpb24ubm9kZS5hZGREZXBlbmRlbmN5KFxuICAgICAgYXV0b1JlbWVkaWF0ZUlhbURhc2gwMDFMb2dHcm91cCxcbiAgICApO1xuICAgIGF1dG9SZW1lZGlhdGVJYW1EYXNoMDAxTGFtYmRhRnVuY3Rpb24ubm9kZS5hZGREZXBlbmRlbmN5KFxuICAgICAgYXV0b1JlbWVkaWF0ZUlhbTAwMVJvbGUsXG4gICAgKTtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVJYW1EYXNoMDI5TGFtYmRhRnVuY3Rpb24gPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKFxuICAgICAgdGhpcyxcbiAgICAgIFwiQXV0b1JlbWVkaWF0ZUlBTURhc2gwMjlMYW1iZGFGdW5jdGlvblwiLFxuICAgICAge1xuICAgICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQoZnVuY3Rpb25zUGF0aCksXG4gICAgICAgIGhhbmRsZXI6IFwiQXV0b1JlbWVkaWF0ZUlBTS0wMjkuaGFuZGxlclwiLFxuICAgICAgICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMjRfWCxcbiAgICAgICAgZnVuY3Rpb25OYW1lOiBcImF1dG8tcmVtZWRpYXRlLXYxLUF1dG9SZW1lZGlhdGVJQU0tMDI5XCIsXG4gICAgICAgIG1lbW9yeVNpemU6IDEyOCxcbiAgICAgICAgdGltZW91dDogY2RrLkR1cmF0aW9uLnNlY29uZHMoMTApLFxuICAgICAgICByb2xlOiBpYW0uUm9sZS5mcm9tUm9sZUFybihcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIFwiQXV0b1JlbWVkaWF0ZUlBTURhc2gwMjlMYW1iZGFGdW5jdGlvblJvbGVSZWZcIixcbiAgICAgICAgICBhdXRvUmVtZWRpYXRlSWFtMDI5Um9sZS5hdHRyQXJuLFxuICAgICAgICApLFxuICAgICAgICB0cmFjaW5nOiBsYW1iZGEuVHJhY2luZy5BQ1RJVkUsXG4gICAgICAgIGxvZ0dyb3VwOiBsb2dzLkxvZ0dyb3VwLmZyb21Mb2dHcm91cE5hbWUoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBcIkF1dG9SZW1lZGlhdGVJQU1EYXNoMDI5TGFtYmRhRnVuY3Rpb25Mb2dHcm91cFJlZlwiLFxuICAgICAgICAgIGF1dG9SZW1lZGlhdGVJYW1EYXNoMDI5TG9nR3JvdXAucmVmLFxuICAgICAgICApLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZUlhbURhc2gwMjlMYW1iZGFGdW5jdGlvbikuYWRkKFxuICAgICAgXCJOYW1lXCIsXG4gICAgICBcIkF1dG8gUmVtZWRpYXRlIElBTS0wMjlcIixcbiAgICApO1xuICAgIGNkay5UYWdzLm9mKGF1dG9SZW1lZGlhdGVJYW1EYXNoMDI5TGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiT3duZXJcIixcbiAgICAgIFwiQ2xvdWRDb25mb3JtaXR5XCIsXG4gICAgKTtcbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlSWFtRGFzaDAyOUxhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIlJvbGVcIixcbiAgICAgIFwiQXV0byBSZW1lZGlhdGVcIixcbiAgICApO1xuICAgIGNkay5UYWdzLm9mKGF1dG9SZW1lZGlhdGVJYW1EYXNoMDI5TGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiRW52aXJvbm1lbnRcIixcbiAgICAgIFwiT3BzXCIsXG4gICAgKTtcblxuICAgIGF1dG9SZW1lZGlhdGVJYW1EYXNoMDI5TGFtYmRhRnVuY3Rpb24ubm9kZS5hZGREZXBlbmRlbmN5KFxuICAgICAgYXV0b1JlbWVkaWF0ZUlhbURhc2gwMjlMb2dHcm91cCxcbiAgICApO1xuICAgIGF1dG9SZW1lZGlhdGVJYW1EYXNoMDI5TGFtYmRhRnVuY3Rpb24ubm9kZS5hZGREZXBlbmRlbmN5KFxuICAgICAgYXV0b1JlbWVkaWF0ZUlhbTAyOVJvbGUsXG4gICAgKTtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVJYW1EYXNoMDM4TGFtYmRhRnVuY3Rpb24gPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKFxuICAgICAgdGhpcyxcbiAgICAgIFwiQXV0b1JlbWVkaWF0ZUlBTURhc2gwMzhMYW1iZGFGdW5jdGlvblwiLFxuICAgICAge1xuICAgICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQoZnVuY3Rpb25zUGF0aCksXG4gICAgICAgIGhhbmRsZXI6IFwiQXV0b1JlbWVkaWF0ZUlBTS0wMzguaGFuZGxlclwiLFxuICAgICAgICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMjRfWCxcbiAgICAgICAgZnVuY3Rpb25OYW1lOiBcImF1dG8tcmVtZWRpYXRlLXYxLUF1dG9SZW1lZGlhdGVJQU0tMDM4XCIsXG4gICAgICAgIG1lbW9yeVNpemU6IDEyOCxcbiAgICAgICAgdGltZW91dDogY2RrLkR1cmF0aW9uLnNlY29uZHMoMTApLFxuICAgICAgICByb2xlOiBpYW0uUm9sZS5mcm9tUm9sZUFybihcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIFwiQXV0b1JlbWVkaWF0ZUlBTURhc2gwMzhMYW1iZGFGdW5jdGlvblJvbGVSZWZcIixcbiAgICAgICAgICBhdXRvUmVtZWRpYXRlSWFtMDM4Um9sZS5hdHRyQXJuLFxuICAgICAgICApLFxuICAgICAgICB0cmFjaW5nOiBsYW1iZGEuVHJhY2luZy5BQ1RJVkUsXG4gICAgICAgIGxvZ0dyb3VwOiBsb2dzLkxvZ0dyb3VwLmZyb21Mb2dHcm91cE5hbWUoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBcIkF1dG9SZW1lZGlhdGVJQU1EYXNoMDM4TGFtYmRhRnVuY3Rpb25Mb2dHcm91cFJlZlwiLFxuICAgICAgICAgIGF1dG9SZW1lZGlhdGVJYW1EYXNoMDM4TG9nR3JvdXAucmVmLFxuICAgICAgICApLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZUlhbURhc2gwMzhMYW1iZGFGdW5jdGlvbikuYWRkKFxuICAgICAgXCJOYW1lXCIsXG4gICAgICBcIkF1dG8gUmVtZWRpYXRlIElBTS0wMzhcIixcbiAgICApO1xuICAgIGNkay5UYWdzLm9mKGF1dG9SZW1lZGlhdGVJYW1EYXNoMDM4TGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiT3duZXJcIixcbiAgICAgIFwiQ2xvdWRDb25mb3JtaXR5XCIsXG4gICAgKTtcbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlSWFtRGFzaDAzOExhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIlJvbGVcIixcbiAgICAgIFwiQXV0byBSZW1lZGlhdGVcIixcbiAgICApO1xuICAgIGNkay5UYWdzLm9mKGF1dG9SZW1lZGlhdGVJYW1EYXNoMDM4TGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiRW52aXJvbm1lbnRcIixcbiAgICAgIFwiT3BzXCIsXG4gICAgKTtcblxuICAgIGF1dG9SZW1lZGlhdGVJYW1EYXNoMDM4TGFtYmRhRnVuY3Rpb24ubm9kZS5hZGREZXBlbmRlbmN5KFxuICAgICAgYXV0b1JlbWVkaWF0ZUlhbURhc2gwMzhMb2dHcm91cCxcbiAgICApO1xuICAgIGF1dG9SZW1lZGlhdGVJYW1EYXNoMDM4TGFtYmRhRnVuY3Rpb24ubm9kZS5hZGREZXBlbmRlbmN5KFxuICAgICAgYXV0b1JlbWVkaWF0ZUlhbTAzOFJvbGUsXG4gICAgKTtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVLbXNEYXNoMDAyTGFtYmRhRnVuY3Rpb24gPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKFxuICAgICAgdGhpcyxcbiAgICAgIFwiQXV0b1JlbWVkaWF0ZUtNU0Rhc2gwMDJMYW1iZGFGdW5jdGlvblwiLFxuICAgICAge1xuICAgICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQoZnVuY3Rpb25zUGF0aCksXG4gICAgICAgIGhhbmRsZXI6IFwiQXV0b1JlbWVkaWF0ZUtNUy0wMDIuaGFuZGxlclwiLFxuICAgICAgICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMjRfWCxcbiAgICAgICAgZnVuY3Rpb25OYW1lOiBcImF1dG8tcmVtZWRpYXRlLXYxLUF1dG9SZW1lZGlhdGVLTVMtMDAyXCIsXG4gICAgICAgIG1lbW9yeVNpemU6IDEyOCxcbiAgICAgICAgdGltZW91dDogY2RrLkR1cmF0aW9uLnNlY29uZHMoMTIwKSxcbiAgICAgICAgcm9sZTogaWFtLlJvbGUuZnJvbVJvbGVBcm4oXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBcIkF1dG9SZW1lZGlhdGVLTVNEYXNoMDAyTGFtYmRhRnVuY3Rpb25Sb2xlUmVmXCIsXG4gICAgICAgICAgYXV0b1JlbWVkaWF0ZUttczAwMlJvbGUuYXR0ckFybixcbiAgICAgICAgKSxcbiAgICAgICAgdHJhY2luZzogbGFtYmRhLlRyYWNpbmcuQUNUSVZFLFxuICAgICAgICBsb2dHcm91cDogbG9ncy5Mb2dHcm91cC5mcm9tTG9nR3JvdXBOYW1lKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgXCJBdXRvUmVtZWRpYXRlS01TRGFzaDAwMkxhbWJkYUZ1bmN0aW9uTG9nR3JvdXBSZWZcIixcbiAgICAgICAgICBhdXRvUmVtZWRpYXRlS21zRGFzaDAwMkxvZ0dyb3VwLnJlZixcbiAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIGNkay5UYWdzLm9mKGF1dG9SZW1lZGlhdGVLbXNEYXNoMDAyTGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiTmFtZVwiLFxuICAgICAgXCJBdXRvIFJlbWVkaWF0ZSBLTVMtMDAyXCIsXG4gICAgKTtcbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlS21zRGFzaDAwMkxhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIk93bmVyXCIsXG4gICAgICBcIkNsb3VkQ29uZm9ybWl0eVwiLFxuICAgICk7XG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZUttc0Rhc2gwMDJMYW1iZGFGdW5jdGlvbikuYWRkKFxuICAgICAgXCJSb2xlXCIsXG4gICAgICBcIkF1dG8gUmVtZWRpYXRlXCIsXG4gICAgKTtcbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlS21zRGFzaDAwMkxhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIkVudmlyb25tZW50XCIsXG4gICAgICBcIk9wc1wiLFxuICAgICk7XG5cbiAgICBhdXRvUmVtZWRpYXRlS21zRGFzaDAwMkxhbWJkYUZ1bmN0aW9uLm5vZGUuYWRkRGVwZW5kZW5jeShcbiAgICAgIGF1dG9SZW1lZGlhdGVLbXNEYXNoMDAyTG9nR3JvdXAsXG4gICAgKTtcbiAgICBhdXRvUmVtZWRpYXRlS21zRGFzaDAwMkxhbWJkYUZ1bmN0aW9uLm5vZGUuYWRkRGVwZW5kZW5jeShcbiAgICAgIGF1dG9SZW1lZGlhdGVLbXMwMDJSb2xlLFxuICAgICk7XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlS21zRGFzaDAwNExhbWJkYUZ1bmN0aW9uID0gbmV3IGxhbWJkYS5GdW5jdGlvbihcbiAgICAgIHRoaXMsXG4gICAgICBcIkF1dG9SZW1lZGlhdGVLTVNEYXNoMDA0TGFtYmRhRnVuY3Rpb25cIixcbiAgICAgIHtcbiAgICAgICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KGZ1bmN0aW9uc1BhdGgpLFxuICAgICAgICBoYW5kbGVyOiBcIkF1dG9SZW1lZGlhdGVLTVMtMDA0LmhhbmRsZXJcIixcbiAgICAgICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzI0X1gsXG4gICAgICAgIGZ1bmN0aW9uTmFtZTogXCJhdXRvLXJlbWVkaWF0ZS12MS1BdXRvUmVtZWRpYXRlS01TLTAwNFwiLFxuICAgICAgICBtZW1vcnlTaXplOiAxMjgsXG4gICAgICAgIHRpbWVvdXQ6IGNkay5EdXJhdGlvbi5zZWNvbmRzKDEyMCksXG4gICAgICAgIHJvbGU6IGlhbS5Sb2xlLmZyb21Sb2xlQXJuKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgXCJBdXRvUmVtZWRpYXRlS01TRGFzaDAwNExhbWJkYUZ1bmN0aW9uUm9sZVJlZlwiLFxuICAgICAgICAgIGF1dG9SZW1lZGlhdGVLbXMwMDRSb2xlLmF0dHJBcm4sXG4gICAgICAgICksXG4gICAgICAgIHRyYWNpbmc6IGxhbWJkYS5UcmFjaW5nLkFDVElWRSxcbiAgICAgICAgbG9nR3JvdXA6IGxvZ3MuTG9nR3JvdXAuZnJvbUxvZ0dyb3VwTmFtZShcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIFwiQXV0b1JlbWVkaWF0ZUtNU0Rhc2gwMDRMYW1iZGFGdW5jdGlvbkxvZ0dyb3VwUmVmXCIsXG4gICAgICAgICAgYXV0b1JlbWVkaWF0ZUttc0Rhc2gwMDRMb2dHcm91cC5yZWYsXG4gICAgICAgICksXG4gICAgICB9LFxuICAgICk7XG5cbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlS21zRGFzaDAwNExhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIk5hbWVcIixcbiAgICAgIFwiQXV0byBSZW1lZGlhdGUgS01TLTAwNFwiLFxuICAgICk7XG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZUttc0Rhc2gwMDRMYW1iZGFGdW5jdGlvbikuYWRkKFxuICAgICAgXCJPd25lclwiLFxuICAgICAgXCJDbG91ZENvbmZvcm1pdHlcIixcbiAgICApO1xuICAgIGNkay5UYWdzLm9mKGF1dG9SZW1lZGlhdGVLbXNEYXNoMDA0TGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiUm9sZVwiLFxuICAgICAgXCJBdXRvIFJlbWVkaWF0ZVwiLFxuICAgICk7XG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZUttc0Rhc2gwMDRMYW1iZGFGdW5jdGlvbikuYWRkKFxuICAgICAgXCJFbnZpcm9ubWVudFwiLFxuICAgICAgXCJPcHNcIixcbiAgICApO1xuXG4gICAgYXV0b1JlbWVkaWF0ZUttc0Rhc2gwMDRMYW1iZGFGdW5jdGlvbi5ub2RlLmFkZERlcGVuZGVuY3koXG4gICAgICBhdXRvUmVtZWRpYXRlS21zRGFzaDAwNExvZ0dyb3VwLFxuICAgICk7XG4gICAgYXV0b1JlbWVkaWF0ZUttc0Rhc2gwMDRMYW1iZGFGdW5jdGlvbi5ub2RlLmFkZERlcGVuZGVuY3koXG4gICAgICBhdXRvUmVtZWRpYXRlS21zMDA0Um9sZSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZUtpbmVzaXNEYXNoMDAxTGFtYmRhRnVuY3Rpb24gPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKFxuICAgICAgdGhpcyxcbiAgICAgIFwiQXV0b1JlbWVkaWF0ZUtpbmVzaXNEYXNoMDAxTGFtYmRhRnVuY3Rpb25cIixcbiAgICAgIHtcbiAgICAgICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KGZ1bmN0aW9uc1BhdGgpLFxuICAgICAgICBoYW5kbGVyOiBcIkF1dG9SZW1lZGlhdGVLaW5lc2lzLTAwMS5oYW5kbGVyXCIsXG4gICAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18yNF9YLFxuICAgICAgICBmdW5jdGlvbk5hbWU6IFwiYXV0by1yZW1lZGlhdGUtdjEtQXV0b1JlbWVkaWF0ZUtpbmVzaXMtMDAxXCIsXG4gICAgICAgIG1lbW9yeVNpemU6IDEyOCxcbiAgICAgICAgdGltZW91dDogY2RrLkR1cmF0aW9uLnNlY29uZHMoMTIwKSxcbiAgICAgICAgcm9sZTogaWFtLlJvbGUuZnJvbVJvbGVBcm4oXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBcIkF1dG9SZW1lZGlhdGVLaW5lc2lzRGFzaDAwMUxhbWJkYUZ1bmN0aW9uUm9sZVJlZlwiLFxuICAgICAgICAgIGF1dG9SZW1lZGlhdGVLaW5lc2lzMDAxUm9sZS5hdHRyQXJuLFxuICAgICAgICApLFxuICAgICAgICB0cmFjaW5nOiBsYW1iZGEuVHJhY2luZy5BQ1RJVkUsXG4gICAgICAgIGxvZ0dyb3VwOiBsb2dzLkxvZ0dyb3VwLmZyb21Mb2dHcm91cE5hbWUoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBcIkF1dG9SZW1lZGlhdGVLaW5lc2lzRGFzaDAwMUxhbWJkYUZ1bmN0aW9uTG9nR3JvdXBSZWZcIixcbiAgICAgICAgICBhdXRvUmVtZWRpYXRlS2luZXNpc0Rhc2gwMDFMb2dHcm91cC5yZWYsXG4gICAgICAgICksXG4gICAgICB9LFxuICAgICk7XG5cbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlS2luZXNpc0Rhc2gwMDFMYW1iZGFGdW5jdGlvbikuYWRkKFxuICAgICAgXCJOYW1lXCIsXG4gICAgICBcIkF1dG8gUmVtZWRpYXRlIEtpbmVzaXMtMDAxXCIsXG4gICAgKTtcbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlS2luZXNpc0Rhc2gwMDFMYW1iZGFGdW5jdGlvbikuYWRkKFxuICAgICAgXCJPd25lclwiLFxuICAgICAgXCJDbG91ZENvbmZvcm1pdHlcIixcbiAgICApO1xuICAgIGNkay5UYWdzLm9mKGF1dG9SZW1lZGlhdGVLaW5lc2lzRGFzaDAwMUxhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIlJvbGVcIixcbiAgICAgIFwiQXV0byBSZW1lZGlhdGVcIixcbiAgICApO1xuICAgIGNkay5UYWdzLm9mKGF1dG9SZW1lZGlhdGVLaW5lc2lzRGFzaDAwMUxhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIkVudmlyb25tZW50XCIsXG4gICAgICBcIk9wc1wiLFxuICAgICk7XG5cbiAgICBhdXRvUmVtZWRpYXRlS2luZXNpc0Rhc2gwMDFMYW1iZGFGdW5jdGlvbi5ub2RlLmFkZERlcGVuZGVuY3koXG4gICAgICBhdXRvUmVtZWRpYXRlS2luZXNpc0Rhc2gwMDFMb2dHcm91cCxcbiAgICApO1xuICAgIGF1dG9SZW1lZGlhdGVLaW5lc2lzRGFzaDAwMUxhbWJkYUZ1bmN0aW9uLm5vZGUuYWRkRGVwZW5kZW5jeShcbiAgICAgIGF1dG9SZW1lZGlhdGVLaW5lc2lzMDAxUm9sZSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZUxhbWJkYURhc2gwMDNMYW1iZGFGdW5jdGlvbiA9IG5ldyBsYW1iZGEuRnVuY3Rpb24oXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlTGFtYmRhRGFzaDAwM0xhbWJkYUZ1bmN0aW9uXCIsXG4gICAgICB7XG4gICAgICAgIGNvZGU6IGxhbWJkYS5Db2RlLmZyb21Bc3NldChmdW5jdGlvbnNQYXRoKSxcbiAgICAgICAgaGFuZGxlcjogXCJBdXRvUmVtZWRpYXRlTGFtYmRhLTAwMy5oYW5kbGVyXCIsXG4gICAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18yNF9YLFxuICAgICAgICBmdW5jdGlvbk5hbWU6IFwiYXV0by1yZW1lZGlhdGUtdjEtQXV0b1JlbWVkaWF0ZUxhbWJkYS0wMDNcIixcbiAgICAgICAgbWVtb3J5U2l6ZTogMTI4LFxuICAgICAgICB0aW1lb3V0OiBjZGsuRHVyYXRpb24uc2Vjb25kcygxMCksXG4gICAgICAgIHJvbGU6IGlhbS5Sb2xlLmZyb21Sb2xlQXJuKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgXCJBdXRvUmVtZWRpYXRlTGFtYmRhRGFzaDAwM0xhbWJkYUZ1bmN0aW9uUm9sZVJlZlwiLFxuICAgICAgICAgIGF1dG9SZW1lZGlhdGVMYW1iZGEwMDNSb2xlLmF0dHJBcm4sXG4gICAgICAgICksXG4gICAgICAgIHRyYWNpbmc6IGxhbWJkYS5UcmFjaW5nLkFDVElWRSxcbiAgICAgICAgbG9nR3JvdXA6IGxvZ3MuTG9nR3JvdXAuZnJvbUxvZ0dyb3VwTmFtZShcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIFwiQXV0b1JlbWVkaWF0ZUxhbWJkYURhc2gwMDNMYW1iZGFGdW5jdGlvbkxvZ0dyb3VwUmVmXCIsXG4gICAgICAgICAgYXV0b1JlbWVkaWF0ZUxhbWJkYURhc2gwMDNMb2dHcm91cC5yZWYsXG4gICAgICAgICksXG4gICAgICB9LFxuICAgICk7XG5cbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlTGFtYmRhRGFzaDAwM0xhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIk5hbWVcIixcbiAgICAgIFwiQXV0byBSZW1lZGlhdGUgTGFtYmRhLTAwM1wiLFxuICAgICk7XG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZUxhbWJkYURhc2gwMDNMYW1iZGFGdW5jdGlvbikuYWRkKFxuICAgICAgXCJPd25lclwiLFxuICAgICAgXCJDbG91ZENvbmZvcm1pdHlcIixcbiAgICApO1xuICAgIGNkay5UYWdzLm9mKGF1dG9SZW1lZGlhdGVMYW1iZGFEYXNoMDAzTGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiUm9sZVwiLFxuICAgICAgXCJBdXRvIFJlbWVkaWF0ZVwiLFxuICAgICk7XG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZUxhbWJkYURhc2gwMDNMYW1iZGFGdW5jdGlvbikuYWRkKFxuICAgICAgXCJFbnZpcm9ubWVudFwiLFxuICAgICAgXCJPcHNcIixcbiAgICApO1xuXG4gICAgYXV0b1JlbWVkaWF0ZUxhbWJkYURhc2gwMDNMYW1iZGFGdW5jdGlvbi5ub2RlLmFkZERlcGVuZGVuY3koXG4gICAgICBhdXRvUmVtZWRpYXRlTGFtYmRhRGFzaDAwM0xvZ0dyb3VwLFxuICAgICk7XG4gICAgYXV0b1JlbWVkaWF0ZUxhbWJkYURhc2gwMDNMYW1iZGFGdW5jdGlvbi5ub2RlLmFkZERlcGVuZGVuY3koXG4gICAgICBhdXRvUmVtZWRpYXRlTGFtYmRhMDAzUm9sZSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZU9yZ2FuaXphdGlvbnNEYXNoMDAyTGFtYmRhRnVuY3Rpb24gPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKFxuICAgICAgdGhpcyxcbiAgICAgIFwiQXV0b1JlbWVkaWF0ZU9yZ2FuaXphdGlvbnNEYXNoMDAyTGFtYmRhRnVuY3Rpb25cIixcbiAgICAgIHtcbiAgICAgICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KGZ1bmN0aW9uc1BhdGgpLFxuICAgICAgICBoYW5kbGVyOiBcIkF1dG9SZW1lZGlhdGVPcmdhbml6YXRpb25zLTAwMi5oYW5kbGVyXCIsXG4gICAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18yNF9YLFxuICAgICAgICBmdW5jdGlvbk5hbWU6IFwiYXV0by1yZW1lZGlhdGUtdjEtQXV0b1JlbWVkaWF0ZU9yZ2FuaXphdGlvbnMtMDAyXCIsXG4gICAgICAgIG1lbW9yeVNpemU6IDEyOCxcbiAgICAgICAgdGltZW91dDogY2RrLkR1cmF0aW9uLnNlY29uZHMoMTApLFxuICAgICAgICByb2xlOiBpYW0uUm9sZS5mcm9tUm9sZUFybihcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIFwiQXV0b1JlbWVkaWF0ZU9yZ2FuaXphdGlvbnNEYXNoMDAyTGFtYmRhRnVuY3Rpb25Sb2xlUmVmXCIsXG4gICAgICAgICAgYXV0b1JlbWVkaWF0ZU9yZ2FuaXphdGlvbnMwMDJSb2xlLmF0dHJBcm4sXG4gICAgICAgICksXG4gICAgICAgIHRyYWNpbmc6IGxhbWJkYS5UcmFjaW5nLkFDVElWRSxcbiAgICAgICAgbG9nR3JvdXA6IGxvZ3MuTG9nR3JvdXAuZnJvbUxvZ0dyb3VwTmFtZShcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIFwiQXV0b1JlbWVkaWF0ZU9yZ2FuaXphdGlvbnNEYXNoMDAyTGFtYmRhRnVuY3Rpb25Mb2dHcm91cFJlZlwiLFxuICAgICAgICAgIGF1dG9SZW1lZGlhdGVPcmdhbml6YXRpb25zRGFzaDAwMkxvZ0dyb3VwLnJlZixcbiAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIGNkay5UYWdzLm9mKGF1dG9SZW1lZGlhdGVPcmdhbml6YXRpb25zRGFzaDAwMkxhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIk5hbWVcIixcbiAgICAgIFwiQXV0byBSZW1lZGlhdGUgT3JnYW5pemF0aW9ucy0wMDJcIixcbiAgICApO1xuICAgIGNkay5UYWdzLm9mKGF1dG9SZW1lZGlhdGVPcmdhbml6YXRpb25zRGFzaDAwMkxhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIk93bmVyXCIsXG4gICAgICBcIkNsb3VkQ29uZm9ybWl0eVwiLFxuICAgICk7XG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZU9yZ2FuaXphdGlvbnNEYXNoMDAyTGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiUm9sZVwiLFxuICAgICAgXCJBdXRvIFJlbWVkaWF0ZVwiLFxuICAgICk7XG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZU9yZ2FuaXphdGlvbnNEYXNoMDAyTGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiRW52aXJvbm1lbnRcIixcbiAgICAgIFwiT3BzXCIsXG4gICAgKTtcblxuICAgIGF1dG9SZW1lZGlhdGVPcmdhbml6YXRpb25zRGFzaDAwMkxhbWJkYUZ1bmN0aW9uLm5vZGUuYWRkRGVwZW5kZW5jeShcbiAgICAgIGF1dG9SZW1lZGlhdGVPcmdhbml6YXRpb25zRGFzaDAwMkxvZ0dyb3VwLFxuICAgICk7XG4gICAgYXV0b1JlbWVkaWF0ZU9yZ2FuaXphdGlvbnNEYXNoMDAyTGFtYmRhRnVuY3Rpb24ubm9kZS5hZGREZXBlbmRlbmN5KFxuICAgICAgYXV0b1JlbWVkaWF0ZU9yZ2FuaXphdGlvbnMwMDJSb2xlLFxuICAgICk7XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlUXVldWVEbHEgPSBuZXcgc3FzLkNmblF1ZXVlKFxuICAgICAgdGhpcyxcbiAgICAgIFwiQXV0b1JlbWVkaWF0ZVF1ZXVlRExRXCIsXG4gICAgICB7XG4gICAgICAgIHF1ZXVlTmFtZTogXCJhdXRvLXJlbWVkaWF0ZS12MS1xdWV1ZS1kbHFcIixcbiAgICAgICAga21zTWFzdGVyS2V5SWQ6IGttc0tleVNxc1F1ZXVlRnJvbVNucy5hdHRyQXJuLFxuICAgICAgICB0YWdzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAga2V5OiBcIlNlcnZpY2VcIixcbiAgICAgICAgICAgIHZhbHVlOiBcImF1dG8tcmVtZWRpYXRlXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBrZXk6IFwiTmFtZVwiLFxuICAgICAgICAgICAgdmFsdWU6IFwiQXV0b1JlbWVkaWF0ZVF1ZXVlRExRXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBrZXk6IFwiT3duZXJcIixcbiAgICAgICAgICAgIHZhbHVlOiBcIkNsb3VkQ29uZm9ybWl0eVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICk7XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlUmRzRGFzaDAwNkxhbWJkYUZ1bmN0aW9uID0gbmV3IGxhbWJkYS5GdW5jdGlvbihcbiAgICAgIHRoaXMsXG4gICAgICBcIkF1dG9SZW1lZGlhdGVSRFNEYXNoMDA2TGFtYmRhRnVuY3Rpb25cIixcbiAgICAgIHtcbiAgICAgICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KGZ1bmN0aW9uc1BhdGgpLFxuICAgICAgICBoYW5kbGVyOiBcIkF1dG9SZW1lZGlhdGVSRFMtMDA2LmhhbmRsZXJcIixcbiAgICAgICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzI0X1gsXG4gICAgICAgIGZ1bmN0aW9uTmFtZTogXCJhdXRvLXJlbWVkaWF0ZS12MS1BdXRvUmVtZWRpYXRlUkRTLTAwNlwiLFxuICAgICAgICBtZW1vcnlTaXplOiAxMjgsXG4gICAgICAgIHRpbWVvdXQ6IGNkay5EdXJhdGlvbi5zZWNvbmRzKDEyMCksXG4gICAgICAgIHJvbGU6IGlhbS5Sb2xlLmZyb21Sb2xlQXJuKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgXCJBdXRvUmVtZWRpYXRlUkRTRGFzaDAwNkxhbWJkYUZ1bmN0aW9uUm9sZVJlZlwiLFxuICAgICAgICAgIGF1dG9SZW1lZGlhdGVSZHMwMDZSb2xlLmF0dHJBcm4sXG4gICAgICAgICksXG4gICAgICAgIHRyYWNpbmc6IGxhbWJkYS5UcmFjaW5nLkFDVElWRSxcbiAgICAgICAgbG9nR3JvdXA6IGxvZ3MuTG9nR3JvdXAuZnJvbUxvZ0dyb3VwTmFtZShcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIFwiQXV0b1JlbWVkaWF0ZVJEU0Rhc2gwMDZMYW1iZGFGdW5jdGlvbkxvZ0dyb3VwUmVmXCIsXG4gICAgICAgICAgYXV0b1JlbWVkaWF0ZVJkc0Rhc2gwMDZMb2dHcm91cC5yZWYsXG4gICAgICAgICksXG4gICAgICB9LFxuICAgICk7XG5cbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlUmRzRGFzaDAwNkxhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIk5hbWVcIixcbiAgICAgIFwiQXV0byBSZW1lZGlhdGUgUkRTLTAwNlwiLFxuICAgICk7XG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZVJkc0Rhc2gwMDZMYW1iZGFGdW5jdGlvbikuYWRkKFxuICAgICAgXCJPd25lclwiLFxuICAgICAgXCJDbG91ZENvbmZvcm1pdHlcIixcbiAgICApO1xuICAgIGNkay5UYWdzLm9mKGF1dG9SZW1lZGlhdGVSZHNEYXNoMDA2TGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiUm9sZVwiLFxuICAgICAgXCJBdXRvIFJlbWVkaWF0ZVwiLFxuICAgICk7XG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZVJkc0Rhc2gwMDZMYW1iZGFGdW5jdGlvbikuYWRkKFxuICAgICAgXCJFbnZpcm9ubWVudFwiLFxuICAgICAgXCJPcHNcIixcbiAgICApO1xuXG4gICAgYXV0b1JlbWVkaWF0ZVJkc0Rhc2gwMDZMYW1iZGFGdW5jdGlvbi5ub2RlLmFkZERlcGVuZGVuY3koXG4gICAgICBhdXRvUmVtZWRpYXRlUmRzRGFzaDAwNkxvZ0dyb3VwLFxuICAgICk7XG4gICAgYXV0b1JlbWVkaWF0ZVJkc0Rhc2gwMDZMYW1iZGFGdW5jdGlvbi5ub2RlLmFkZERlcGVuZGVuY3koXG4gICAgICBhdXRvUmVtZWRpYXRlUmRzMDA2Um9sZSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZVJkc0Rhc2gwMDhMYW1iZGFGdW5jdGlvbiA9IG5ldyBsYW1iZGEuRnVuY3Rpb24oXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlUkRTRGFzaDAwOExhbWJkYUZ1bmN0aW9uXCIsXG4gICAgICB7XG4gICAgICAgIGNvZGU6IGxhbWJkYS5Db2RlLmZyb21Bc3NldChmdW5jdGlvbnNQYXRoKSxcbiAgICAgICAgaGFuZGxlcjogXCJBdXRvUmVtZWRpYXRlUkRTLTAwOC5oYW5kbGVyXCIsXG4gICAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18yNF9YLFxuICAgICAgICBmdW5jdGlvbk5hbWU6IFwiYXV0by1yZW1lZGlhdGUtdjEtQXV0b1JlbWVkaWF0ZVJEUy0wMDhcIixcbiAgICAgICAgbWVtb3J5U2l6ZTogMTI4LFxuICAgICAgICB0aW1lb3V0OiBjZGsuRHVyYXRpb24uc2Vjb25kcygxMCksXG4gICAgICAgIHJvbGU6IGlhbS5Sb2xlLmZyb21Sb2xlQXJuKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgXCJBdXRvUmVtZWRpYXRlUkRTRGFzaDAwOExhbWJkYUZ1bmN0aW9uUm9sZVJlZlwiLFxuICAgICAgICAgIGF1dG9SZW1lZGlhdGVSZHMwMDhSb2xlLmF0dHJBcm4sXG4gICAgICAgICksXG4gICAgICAgIHRyYWNpbmc6IGxhbWJkYS5UcmFjaW5nLkFDVElWRSxcbiAgICAgICAgbG9nR3JvdXA6IGxvZ3MuTG9nR3JvdXAuZnJvbUxvZ0dyb3VwTmFtZShcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIFwiQXV0b1JlbWVkaWF0ZVJEU0Rhc2gwMDhMYW1iZGFGdW5jdGlvbkxvZ0dyb3VwUmVmXCIsXG4gICAgICAgICAgYXV0b1JlbWVkaWF0ZVJkc0Rhc2gwMDhMb2dHcm91cC5yZWYsXG4gICAgICAgICksXG4gICAgICB9LFxuICAgICk7XG5cbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlUmRzRGFzaDAwOExhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIk5hbWVcIixcbiAgICAgIFwiQXV0byBSZW1lZGlhdGUgUkRTLTAwOFwiLFxuICAgICk7XG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZVJkc0Rhc2gwMDhMYW1iZGFGdW5jdGlvbikuYWRkKFxuICAgICAgXCJPd25lclwiLFxuICAgICAgXCJDbG91ZENvbmZvcm1pdHlcIixcbiAgICApO1xuICAgIGNkay5UYWdzLm9mKGF1dG9SZW1lZGlhdGVSZHNEYXNoMDA4TGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiUm9sZVwiLFxuICAgICAgXCJBdXRvIFJlbWVkaWF0ZVwiLFxuICAgICk7XG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZVJkc0Rhc2gwMDhMYW1iZGFGdW5jdGlvbikuYWRkKFxuICAgICAgXCJFbnZpcm9ubWVudFwiLFxuICAgICAgXCJPcHNcIixcbiAgICApO1xuXG4gICAgYXV0b1JlbWVkaWF0ZVJkc0Rhc2gwMDhMYW1iZGFGdW5jdGlvbi5ub2RlLmFkZERlcGVuZGVuY3koXG4gICAgICBhdXRvUmVtZWRpYXRlUmRzRGFzaDAwOExvZ0dyb3VwLFxuICAgICk7XG4gICAgYXV0b1JlbWVkaWF0ZVJkc0Rhc2gwMDhMYW1iZGFGdW5jdGlvbi5ub2RlLmFkZERlcGVuZGVuY3koXG4gICAgICBhdXRvUmVtZWRpYXRlUmRzMDA4Um9sZSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZVJkc0Rhc2gwMjNMYW1iZGFGdW5jdGlvbiA9IG5ldyBsYW1iZGEuRnVuY3Rpb24oXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlUkRTRGFzaDAyM0xhbWJkYUZ1bmN0aW9uXCIsXG4gICAgICB7XG4gICAgICAgIGNvZGU6IGxhbWJkYS5Db2RlLmZyb21Bc3NldChmdW5jdGlvbnNQYXRoKSxcbiAgICAgICAgaGFuZGxlcjogXCJBdXRvUmVtZWRpYXRlUkRTLTAyMy5oYW5kbGVyXCIsXG4gICAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18yNF9YLFxuICAgICAgICBmdW5jdGlvbk5hbWU6IFwiYXV0by1yZW1lZGlhdGUtdjEtQXV0b1JlbWVkaWF0ZVJEUy0wMjNcIixcbiAgICAgICAgbWVtb3J5U2l6ZTogMTI4LFxuICAgICAgICB0aW1lb3V0OiBjZGsuRHVyYXRpb24uc2Vjb25kcygxMCksXG4gICAgICAgIHJvbGU6IGlhbS5Sb2xlLmZyb21Sb2xlQXJuKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgXCJBdXRvUmVtZWRpYXRlUkRTRGFzaDAyM0xhbWJkYUZ1bmN0aW9uUm9sZVJlZlwiLFxuICAgICAgICAgIGF1dG9SZW1lZGlhdGVSZHMwMjNSb2xlLmF0dHJBcm4sXG4gICAgICAgICksXG4gICAgICAgIHRyYWNpbmc6IGxhbWJkYS5UcmFjaW5nLkFDVElWRSxcbiAgICAgICAgbG9nR3JvdXA6IGxvZ3MuTG9nR3JvdXAuZnJvbUxvZ0dyb3VwTmFtZShcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIFwiQXV0b1JlbWVkaWF0ZVJEU0Rhc2gwMjNMYW1iZGFGdW5jdGlvbkxvZ0dyb3VwUmVmXCIsXG4gICAgICAgICAgYXV0b1JlbWVkaWF0ZVJkc0Rhc2gwMjNMb2dHcm91cC5yZWYsXG4gICAgICAgICksXG4gICAgICB9LFxuICAgICk7XG5cbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlUmRzRGFzaDAyM0xhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIk5hbWVcIixcbiAgICAgIFwiQXV0byBSZW1lZGlhdGUgUkRTLTAyM1wiLFxuICAgICk7XG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZVJkc0Rhc2gwMjNMYW1iZGFGdW5jdGlvbikuYWRkKFxuICAgICAgXCJPd25lclwiLFxuICAgICAgXCJDbG91ZENvbmZvcm1pdHlcIixcbiAgICApO1xuICAgIGNkay5UYWdzLm9mKGF1dG9SZW1lZGlhdGVSZHNEYXNoMDIzTGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiUm9sZVwiLFxuICAgICAgXCJBdXRvIFJlbWVkaWF0ZVwiLFxuICAgICk7XG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZVJkc0Rhc2gwMjNMYW1iZGFGdW5jdGlvbikuYWRkKFxuICAgICAgXCJFbnZpcm9ubWVudFwiLFxuICAgICAgXCJPcHNcIixcbiAgICApO1xuXG4gICAgYXV0b1JlbWVkaWF0ZVJkc0Rhc2gwMjNMYW1iZGFGdW5jdGlvbi5ub2RlLmFkZERlcGVuZGVuY3koXG4gICAgICBhdXRvUmVtZWRpYXRlUmRzRGFzaDAyM0xvZ0dyb3VwLFxuICAgICk7XG4gICAgYXV0b1JlbWVkaWF0ZVJkc0Rhc2gwMjNMYW1iZGFGdW5jdGlvbi5ub2RlLmFkZERlcGVuZGVuY3koXG4gICAgICBhdXRvUmVtZWRpYXRlUmRzMDIzUm9sZSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZVJzRGFzaDAwMUxhbWJkYUZ1bmN0aW9uID0gbmV3IGxhbWJkYS5GdW5jdGlvbihcbiAgICAgIHRoaXMsXG4gICAgICBcIkF1dG9SZW1lZGlhdGVSU0Rhc2gwMDFMYW1iZGFGdW5jdGlvblwiLFxuICAgICAge1xuICAgICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQoZnVuY3Rpb25zUGF0aCksXG4gICAgICAgIGhhbmRsZXI6IFwiQXV0b1JlbWVkaWF0ZVJTLTAwMS5oYW5kbGVyXCIsXG4gICAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18yNF9YLFxuICAgICAgICBmdW5jdGlvbk5hbWU6IFwiYXV0by1yZW1lZGlhdGUtdjEtQXV0b1JlbWVkaWF0ZVJTLTAwMVwiLFxuICAgICAgICBtZW1vcnlTaXplOiAxMjgsXG4gICAgICAgIHRpbWVvdXQ6IGNkay5EdXJhdGlvbi5zZWNvbmRzKDEyMCksXG4gICAgICAgIHJvbGU6IGlhbS5Sb2xlLmZyb21Sb2xlQXJuKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgXCJBdXRvUmVtZWRpYXRlUlNEYXNoMDAxTGFtYmRhRnVuY3Rpb25Sb2xlUmVmXCIsXG4gICAgICAgICAgYXV0b1JlbWVkaWF0ZVJzMDAxUm9sZS5hdHRyQXJuLFxuICAgICAgICApLFxuICAgICAgICB0cmFjaW5nOiBsYW1iZGEuVHJhY2luZy5BQ1RJVkUsXG4gICAgICAgIGxvZ0dyb3VwOiBsb2dzLkxvZ0dyb3VwLmZyb21Mb2dHcm91cE5hbWUoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBcIkF1dG9SZW1lZGlhdGVSU0Rhc2gwMDFMYW1iZGFGdW5jdGlvbkxvZ0dyb3VwUmVmXCIsXG4gICAgICAgICAgYXV0b1JlbWVkaWF0ZVJzRGFzaDAwMUxvZ0dyb3VwLnJlZixcbiAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIGNkay5UYWdzLm9mKGF1dG9SZW1lZGlhdGVSc0Rhc2gwMDFMYW1iZGFGdW5jdGlvbikuYWRkKFxuICAgICAgXCJOYW1lXCIsXG4gICAgICBcIkF1dG8gUmVtZWRpYXRlIFJTLTAwMVwiLFxuICAgICk7XG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZVJzRGFzaDAwMUxhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIk93bmVyXCIsXG4gICAgICBcIkNsb3VkQ29uZm9ybWl0eVwiLFxuICAgICk7XG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZVJzRGFzaDAwMUxhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIlJvbGVcIixcbiAgICAgIFwiQXV0byBSZW1lZGlhdGVcIixcbiAgICApO1xuICAgIGNkay5UYWdzLm9mKGF1dG9SZW1lZGlhdGVSc0Rhc2gwMDFMYW1iZGFGdW5jdGlvbikuYWRkKFwiRW52aXJvbm1lbnRcIiwgXCJPcHNcIik7XG5cbiAgICBhdXRvUmVtZWRpYXRlUnNEYXNoMDAxTGFtYmRhRnVuY3Rpb24ubm9kZS5hZGREZXBlbmRlbmN5KFxuICAgICAgYXV0b1JlbWVkaWF0ZVJzRGFzaDAwMUxvZ0dyb3VwLFxuICAgICk7XG4gICAgYXV0b1JlbWVkaWF0ZVJzRGFzaDAwMUxhbWJkYUZ1bmN0aW9uLm5vZGUuYWRkRGVwZW5kZW5jeShcbiAgICAgIGF1dG9SZW1lZGlhdGVSczAwMVJvbGUsXG4gICAgKTtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVSc0Rhc2gwMTlMYW1iZGFGdW5jdGlvbiA9IG5ldyBsYW1iZGEuRnVuY3Rpb24oXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlUlNEYXNoMDE5TGFtYmRhRnVuY3Rpb25cIixcbiAgICAgIHtcbiAgICAgICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KGZ1bmN0aW9uc1BhdGgpLFxuICAgICAgICBoYW5kbGVyOiBcIkF1dG9SZW1lZGlhdGVSUy0wMTkuaGFuZGxlclwiLFxuICAgICAgICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMjRfWCxcbiAgICAgICAgZnVuY3Rpb25OYW1lOiBcImF1dG8tcmVtZWRpYXRlLXYxLUF1dG9SZW1lZGlhdGVSUy0wMTlcIixcbiAgICAgICAgbWVtb3J5U2l6ZTogMTI4LFxuICAgICAgICB0aW1lb3V0OiBjZGsuRHVyYXRpb24uc2Vjb25kcygxMjApLFxuICAgICAgICByb2xlOiBpYW0uUm9sZS5mcm9tUm9sZUFybihcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIFwiQXV0b1JlbWVkaWF0ZVJTRGFzaDAxOUxhbWJkYUZ1bmN0aW9uUm9sZVJlZlwiLFxuICAgICAgICAgIGF1dG9SZW1lZGlhdGVSczAxOVJvbGUuYXR0ckFybixcbiAgICAgICAgKSxcbiAgICAgICAgdHJhY2luZzogbGFtYmRhLlRyYWNpbmcuQUNUSVZFLFxuICAgICAgICBsb2dHcm91cDogbG9ncy5Mb2dHcm91cC5mcm9tTG9nR3JvdXBOYW1lKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgXCJBdXRvUmVtZWRpYXRlUlNEYXNoMDE5TGFtYmRhRnVuY3Rpb25Mb2dHcm91cFJlZlwiLFxuICAgICAgICAgIGF1dG9SZW1lZGlhdGVSc0Rhc2gwMTlMb2dHcm91cC5yZWYsXG4gICAgICAgICksXG4gICAgICB9LFxuICAgICk7XG5cbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlUnNEYXNoMDE5TGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiTmFtZVwiLFxuICAgICAgXCJBdXRvIFJlbWVkaWF0ZSBSUy0wMTlcIixcbiAgICApO1xuICAgIGNkay5UYWdzLm9mKGF1dG9SZW1lZGlhdGVSc0Rhc2gwMTlMYW1iZGFGdW5jdGlvbikuYWRkKFxuICAgICAgXCJPd25lclwiLFxuICAgICAgXCJDbG91ZENvbmZvcm1pdHlcIixcbiAgICApO1xuICAgIGNkay5UYWdzLm9mKGF1dG9SZW1lZGlhdGVSc0Rhc2gwMTlMYW1iZGFGdW5jdGlvbikuYWRkKFxuICAgICAgXCJSb2xlXCIsXG4gICAgICBcIkF1dG8gUmVtZWRpYXRlXCIsXG4gICAgKTtcbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlUnNEYXNoMDE5TGFtYmRhRnVuY3Rpb24pLmFkZChcIkVudmlyb25tZW50XCIsIFwiT3BzXCIpO1xuXG4gICAgYXV0b1JlbWVkaWF0ZVJzRGFzaDAxOUxhbWJkYUZ1bmN0aW9uLm5vZGUuYWRkRGVwZW5kZW5jeShcbiAgICAgIGF1dG9SZW1lZGlhdGVSc0Rhc2gwMTlMb2dHcm91cCxcbiAgICApO1xuICAgIGF1dG9SZW1lZGlhdGVSc0Rhc2gwMTlMYW1iZGFGdW5jdGlvbi5ub2RlLmFkZERlcGVuZGVuY3koXG4gICAgICBhdXRvUmVtZWRpYXRlUnMwMTlSb2xlLFxuICAgICk7XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlUnNEYXNoMDIzTGFtYmRhRnVuY3Rpb24gPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKFxuICAgICAgdGhpcyxcbiAgICAgIFwiQXV0b1JlbWVkaWF0ZVJTRGFzaDAyM0xhbWJkYUZ1bmN0aW9uXCIsXG4gICAgICB7XG4gICAgICAgIGNvZGU6IGxhbWJkYS5Db2RlLmZyb21Bc3NldChmdW5jdGlvbnNQYXRoKSxcbiAgICAgICAgaGFuZGxlcjogXCJBdXRvUmVtZWRpYXRlUlMtMDIzLmhhbmRsZXJcIixcbiAgICAgICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzI0X1gsXG4gICAgICAgIGZ1bmN0aW9uTmFtZTogXCJhdXRvLXJlbWVkaWF0ZS12MS1BdXRvUmVtZWRpYXRlUlMtMDIzXCIsXG4gICAgICAgIG1lbW9yeVNpemU6IDEyOCxcbiAgICAgICAgdGltZW91dDogY2RrLkR1cmF0aW9uLnNlY29uZHMoMTIwKSxcbiAgICAgICAgcm9sZTogaWFtLlJvbGUuZnJvbVJvbGVBcm4oXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBcIkF1dG9SZW1lZGlhdGVSU0Rhc2gwMjNMYW1iZGFGdW5jdGlvblJvbGVSZWZcIixcbiAgICAgICAgICBhdXRvUmVtZWRpYXRlUnMwMjNSb2xlLmF0dHJBcm4sXG4gICAgICAgICksXG4gICAgICAgIHRyYWNpbmc6IGxhbWJkYS5UcmFjaW5nLkFDVElWRSxcbiAgICAgICAgbG9nR3JvdXA6IGxvZ3MuTG9nR3JvdXAuZnJvbUxvZ0dyb3VwTmFtZShcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIFwiQXV0b1JlbWVkaWF0ZVJTRGFzaDAyM0xhbWJkYUZ1bmN0aW9uTG9nR3JvdXBSZWZcIixcbiAgICAgICAgICBhdXRvUmVtZWRpYXRlUnNEYXNoMDIzTG9nR3JvdXAucmVmLFxuICAgICAgICApLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZVJzRGFzaDAyM0xhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIk5hbWVcIixcbiAgICAgIFwiQXV0byBSZW1lZGlhdGUgUlMtMDIzXCIsXG4gICAgKTtcbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlUnNEYXNoMDIzTGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiT3duZXJcIixcbiAgICAgIFwiQ2xvdWRDb25mb3JtaXR5XCIsXG4gICAgKTtcbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlUnNEYXNoMDIzTGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiUm9sZVwiLFxuICAgICAgXCJBdXRvIFJlbWVkaWF0ZVwiLFxuICAgICk7XG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZVJzRGFzaDAyM0xhbWJkYUZ1bmN0aW9uKS5hZGQoXCJFbnZpcm9ubWVudFwiLCBcIk9wc1wiKTtcblxuICAgIGF1dG9SZW1lZGlhdGVSc0Rhc2gwMjNMYW1iZGFGdW5jdGlvbi5ub2RlLmFkZERlcGVuZGVuY3koXG4gICAgICBhdXRvUmVtZWRpYXRlUnNEYXNoMDIzTG9nR3JvdXAsXG4gICAgKTtcbiAgICBhdXRvUmVtZWRpYXRlUnNEYXNoMDIzTGFtYmRhRnVuY3Rpb24ubm9kZS5hZGREZXBlbmRlbmN5KFxuICAgICAgYXV0b1JlbWVkaWF0ZVJzMDIzUm9sZSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZVMzRGFzaDAwMUxhbWJkYUZ1bmN0aW9uID0gbmV3IGxhbWJkYS5GdW5jdGlvbihcbiAgICAgIHRoaXMsXG4gICAgICBcIkF1dG9SZW1lZGlhdGVTM0Rhc2gwMDFMYW1iZGFGdW5jdGlvblwiLFxuICAgICAge1xuICAgICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQoZnVuY3Rpb25zUGF0aCksXG4gICAgICAgIGhhbmRsZXI6IFwiQXV0b1JlbWVkaWF0ZVMzLTAwMS5oYW5kbGVyXCIsXG4gICAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18yNF9YLFxuICAgICAgICBmdW5jdGlvbk5hbWU6IFwiYXV0by1yZW1lZGlhdGUtdjEtQXV0b1JlbWVkaWF0ZVMzLTAwMVwiLFxuICAgICAgICBtZW1vcnlTaXplOiAxMjgsXG4gICAgICAgIHRpbWVvdXQ6IGNkay5EdXJhdGlvbi5zZWNvbmRzKDEwKSxcbiAgICAgICAgcm9sZTogaWFtLlJvbGUuZnJvbVJvbGVBcm4oXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBcIkF1dG9SZW1lZGlhdGVTM0Rhc2gwMDFMYW1iZGFGdW5jdGlvblJvbGVSZWZcIixcbiAgICAgICAgICBhdXRvUmVtZWRpYXRlUzMwMDFSb2xlLmF0dHJBcm4sXG4gICAgICAgICksXG4gICAgICAgIHRyYWNpbmc6IGxhbWJkYS5UcmFjaW5nLkFDVElWRSxcbiAgICAgICAgbG9nR3JvdXA6IGxvZ3MuTG9nR3JvdXAuZnJvbUxvZ0dyb3VwTmFtZShcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIFwiQXV0b1JlbWVkaWF0ZVMzRGFzaDAwMUxhbWJkYUZ1bmN0aW9uTG9nR3JvdXBSZWZcIixcbiAgICAgICAgICBhdXRvUmVtZWRpYXRlUzNEYXNoMDAxTG9nR3JvdXAucmVmLFxuICAgICAgICApLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZVMzRGFzaDAwMUxhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIk5hbWVcIixcbiAgICAgIFwiQXV0byBSZW1lZGlhdGUgUzMtMDAxXCIsXG4gICAgKTtcbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlUzNEYXNoMDAxTGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiT3duZXJcIixcbiAgICAgIFwiQ2xvdWRDb25mb3JtaXR5XCIsXG4gICAgKTtcbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlUzNEYXNoMDAxTGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiUm9sZVwiLFxuICAgICAgXCJBdXRvIFJlbWVkaWF0ZVwiLFxuICAgICk7XG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZVMzRGFzaDAwMUxhbWJkYUZ1bmN0aW9uKS5hZGQoXCJFbnZpcm9ubWVudFwiLCBcIk9wc1wiKTtcblxuICAgIGF1dG9SZW1lZGlhdGVTM0Rhc2gwMDFMYW1iZGFGdW5jdGlvbi5ub2RlLmFkZERlcGVuZGVuY3koXG4gICAgICBhdXRvUmVtZWRpYXRlUzNEYXNoMDAxTG9nR3JvdXAsXG4gICAgKTtcbiAgICBhdXRvUmVtZWRpYXRlUzNEYXNoMDAxTGFtYmRhRnVuY3Rpb24ubm9kZS5hZGREZXBlbmRlbmN5KFxuICAgICAgYXV0b1JlbWVkaWF0ZVMzMDAxUm9sZSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZVMzRGFzaDAwMkxhbWJkYUZ1bmN0aW9uID0gbmV3IGxhbWJkYS5GdW5jdGlvbihcbiAgICAgIHRoaXMsXG4gICAgICBcIkF1dG9SZW1lZGlhdGVTM0Rhc2gwMDJMYW1iZGFGdW5jdGlvblwiLFxuICAgICAge1xuICAgICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQoZnVuY3Rpb25zUGF0aCksXG4gICAgICAgIGhhbmRsZXI6IFwiQXV0b1JlbWVkaWF0ZVMzLTAwMi5oYW5kbGVyXCIsXG4gICAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18yNF9YLFxuICAgICAgICBmdW5jdGlvbk5hbWU6IFwiYXV0by1yZW1lZGlhdGUtdjEtQXV0b1JlbWVkaWF0ZVMzLTAwMlwiLFxuICAgICAgICBtZW1vcnlTaXplOiAxMjgsXG4gICAgICAgIHRpbWVvdXQ6IGNkay5EdXJhdGlvbi5zZWNvbmRzKDEwKSxcbiAgICAgICAgcm9sZTogaWFtLlJvbGUuZnJvbVJvbGVBcm4oXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBcIkF1dG9SZW1lZGlhdGVTM0Rhc2gwMDJMYW1iZGFGdW5jdGlvblJvbGVSZWZcIixcbiAgICAgICAgICBhdXRvUmVtZWRpYXRlUzMwMDJSb2xlLmF0dHJBcm4sXG4gICAgICAgICksXG4gICAgICAgIHRyYWNpbmc6IGxhbWJkYS5UcmFjaW5nLkFDVElWRSxcbiAgICAgICAgbG9nR3JvdXA6IGxvZ3MuTG9nR3JvdXAuZnJvbUxvZ0dyb3VwTmFtZShcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIFwiQXV0b1JlbWVkaWF0ZVMzRGFzaDAwMkxhbWJkYUZ1bmN0aW9uTG9nR3JvdXBSZWZcIixcbiAgICAgICAgICBhdXRvUmVtZWRpYXRlUzNEYXNoMDAyTG9nR3JvdXAucmVmLFxuICAgICAgICApLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZVMzRGFzaDAwMkxhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIk5hbWVcIixcbiAgICAgIFwiQXV0byBSZW1lZGlhdGUgUzMtMDAyXCIsXG4gICAgKTtcbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlUzNEYXNoMDAyTGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiT3duZXJcIixcbiAgICAgIFwiQ2xvdWRDb25mb3JtaXR5XCIsXG4gICAgKTtcbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlUzNEYXNoMDAyTGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiUm9sZVwiLFxuICAgICAgXCJBdXRvIFJlbWVkaWF0ZVwiLFxuICAgICk7XG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZVMzRGFzaDAwMkxhbWJkYUZ1bmN0aW9uKS5hZGQoXCJFbnZpcm9ubWVudFwiLCBcIk9wc1wiKTtcblxuICAgIGF1dG9SZW1lZGlhdGVTM0Rhc2gwMDJMYW1iZGFGdW5jdGlvbi5ub2RlLmFkZERlcGVuZGVuY3koXG4gICAgICBhdXRvUmVtZWRpYXRlUzNEYXNoMDAyTG9nR3JvdXAsXG4gICAgKTtcbiAgICBhdXRvUmVtZWRpYXRlUzNEYXNoMDAyTGFtYmRhRnVuY3Rpb24ubm9kZS5hZGREZXBlbmRlbmN5KFxuICAgICAgYXV0b1JlbWVkaWF0ZVMzMDAyUm9sZSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZVMzRGFzaDAwM0xhbWJkYUZ1bmN0aW9uID0gbmV3IGxhbWJkYS5GdW5jdGlvbihcbiAgICAgIHRoaXMsXG4gICAgICBcIkF1dG9SZW1lZGlhdGVTM0Rhc2gwMDNMYW1iZGFGdW5jdGlvblwiLFxuICAgICAge1xuICAgICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQoZnVuY3Rpb25zUGF0aCksXG4gICAgICAgIGhhbmRsZXI6IFwiQXV0b1JlbWVkaWF0ZVMzLTAwMy5oYW5kbGVyXCIsXG4gICAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18yNF9YLFxuICAgICAgICBmdW5jdGlvbk5hbWU6IFwiYXV0by1yZW1lZGlhdGUtdjEtQXV0b1JlbWVkaWF0ZVMzLTAwM1wiLFxuICAgICAgICBtZW1vcnlTaXplOiAxMjgsXG4gICAgICAgIHRpbWVvdXQ6IGNkay5EdXJhdGlvbi5zZWNvbmRzKDEwKSxcbiAgICAgICAgcm9sZTogaWFtLlJvbGUuZnJvbVJvbGVBcm4oXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBcIkF1dG9SZW1lZGlhdGVTM0Rhc2gwMDNMYW1iZGFGdW5jdGlvblJvbGVSZWZcIixcbiAgICAgICAgICBhdXRvUmVtZWRpYXRlUzMwMDNSb2xlLmF0dHJBcm4sXG4gICAgICAgICksXG4gICAgICAgIHRyYWNpbmc6IGxhbWJkYS5UcmFjaW5nLkFDVElWRSxcbiAgICAgICAgbG9nR3JvdXA6IGxvZ3MuTG9nR3JvdXAuZnJvbUxvZ0dyb3VwTmFtZShcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIFwiQXV0b1JlbWVkaWF0ZVMzRGFzaDAwM0xhbWJkYUZ1bmN0aW9uTG9nR3JvdXBSZWZcIixcbiAgICAgICAgICBhdXRvUmVtZWRpYXRlUzNEYXNoMDAzTG9nR3JvdXAucmVmLFxuICAgICAgICApLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZVMzRGFzaDAwM0xhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIk5hbWVcIixcbiAgICAgIFwiQXV0byBSZW1lZGlhdGUgUzMtMDAzXCIsXG4gICAgKTtcbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlUzNEYXNoMDAzTGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiT3duZXJcIixcbiAgICAgIFwiQ2xvdWRDb25mb3JtaXR5XCIsXG4gICAgKTtcbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlUzNEYXNoMDAzTGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiUm9sZVwiLFxuICAgICAgXCJBdXRvIFJlbWVkaWF0ZVwiLFxuICAgICk7XG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZVMzRGFzaDAwM0xhbWJkYUZ1bmN0aW9uKS5hZGQoXCJFbnZpcm9ubWVudFwiLCBcIk9wc1wiKTtcblxuICAgIGF1dG9SZW1lZGlhdGVTM0Rhc2gwMDNMYW1iZGFGdW5jdGlvbi5ub2RlLmFkZERlcGVuZGVuY3koXG4gICAgICBhdXRvUmVtZWRpYXRlUzNEYXNoMDAzTG9nR3JvdXAsXG4gICAgKTtcbiAgICBhdXRvUmVtZWRpYXRlUzNEYXNoMDAzTGFtYmRhRnVuY3Rpb24ubm9kZS5hZGREZXBlbmRlbmN5KFxuICAgICAgYXV0b1JlbWVkaWF0ZVMzMDAzUm9sZSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZVMzRGFzaDAwNExhbWJkYUZ1bmN0aW9uID0gbmV3IGxhbWJkYS5GdW5jdGlvbihcbiAgICAgIHRoaXMsXG4gICAgICBcIkF1dG9SZW1lZGlhdGVTM0Rhc2gwMDRMYW1iZGFGdW5jdGlvblwiLFxuICAgICAge1xuICAgICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQoZnVuY3Rpb25zUGF0aCksXG4gICAgICAgIGhhbmRsZXI6IFwiQXV0b1JlbWVkaWF0ZVMzLTAwNC5oYW5kbGVyXCIsXG4gICAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18yNF9YLFxuICAgICAgICBmdW5jdGlvbk5hbWU6IFwiYXV0by1yZW1lZGlhdGUtdjEtQXV0b1JlbWVkaWF0ZVMzLTAwNFwiLFxuICAgICAgICBtZW1vcnlTaXplOiAxMjgsXG4gICAgICAgIHRpbWVvdXQ6IGNkay5EdXJhdGlvbi5zZWNvbmRzKDEwKSxcbiAgICAgICAgcm9sZTogaWFtLlJvbGUuZnJvbVJvbGVBcm4oXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBcIkF1dG9SZW1lZGlhdGVTM0Rhc2gwMDRMYW1iZGFGdW5jdGlvblJvbGVSZWZcIixcbiAgICAgICAgICBhdXRvUmVtZWRpYXRlUzMwMDRSb2xlLmF0dHJBcm4sXG4gICAgICAgICksXG4gICAgICAgIHRyYWNpbmc6IGxhbWJkYS5UcmFjaW5nLkFDVElWRSxcbiAgICAgICAgbG9nR3JvdXA6IGxvZ3MuTG9nR3JvdXAuZnJvbUxvZ0dyb3VwTmFtZShcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIFwiQXV0b1JlbWVkaWF0ZVMzRGFzaDAwNExhbWJkYUZ1bmN0aW9uTG9nR3JvdXBSZWZcIixcbiAgICAgICAgICBhdXRvUmVtZWRpYXRlUzNEYXNoMDA0TG9nR3JvdXAucmVmLFxuICAgICAgICApLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZVMzRGFzaDAwNExhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIk5hbWVcIixcbiAgICAgIFwiQXV0byBSZW1lZGlhdGUgUzMtMDA0XCIsXG4gICAgKTtcbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlUzNEYXNoMDA0TGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiT3duZXJcIixcbiAgICAgIFwiQ2xvdWRDb25mb3JtaXR5XCIsXG4gICAgKTtcbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlUzNEYXNoMDA0TGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiUm9sZVwiLFxuICAgICAgXCJBdXRvIFJlbWVkaWF0ZVwiLFxuICAgICk7XG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZVMzRGFzaDAwNExhbWJkYUZ1bmN0aW9uKS5hZGQoXCJFbnZpcm9ubWVudFwiLCBcIk9wc1wiKTtcblxuICAgIGF1dG9SZW1lZGlhdGVTM0Rhc2gwMDRMYW1iZGFGdW5jdGlvbi5ub2RlLmFkZERlcGVuZGVuY3koXG4gICAgICBhdXRvUmVtZWRpYXRlUzNEYXNoMDA0TG9nR3JvdXAsXG4gICAgKTtcbiAgICBhdXRvUmVtZWRpYXRlUzNEYXNoMDA0TGFtYmRhRnVuY3Rpb24ubm9kZS5hZGREZXBlbmRlbmN5KFxuICAgICAgYXV0b1JlbWVkaWF0ZVMzMDA0Um9sZSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZVMzRGFzaDAwNUxhbWJkYUZ1bmN0aW9uID0gbmV3IGxhbWJkYS5GdW5jdGlvbihcbiAgICAgIHRoaXMsXG4gICAgICBcIkF1dG9SZW1lZGlhdGVTM0Rhc2gwMDVMYW1iZGFGdW5jdGlvblwiLFxuICAgICAge1xuICAgICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQoZnVuY3Rpb25zUGF0aCksXG4gICAgICAgIGhhbmRsZXI6IFwiQXV0b1JlbWVkaWF0ZVMzLTAwNS5oYW5kbGVyXCIsXG4gICAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18yNF9YLFxuICAgICAgICBmdW5jdGlvbk5hbWU6IFwiYXV0by1yZW1lZGlhdGUtdjEtQXV0b1JlbWVkaWF0ZVMzLTAwNVwiLFxuICAgICAgICBtZW1vcnlTaXplOiAxMjgsXG4gICAgICAgIHRpbWVvdXQ6IGNkay5EdXJhdGlvbi5zZWNvbmRzKDEwKSxcbiAgICAgICAgcm9sZTogaWFtLlJvbGUuZnJvbVJvbGVBcm4oXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBcIkF1dG9SZW1lZGlhdGVTM0Rhc2gwMDVMYW1iZGFGdW5jdGlvblJvbGVSZWZcIixcbiAgICAgICAgICBhdXRvUmVtZWRpYXRlUzMwMDVSb2xlLmF0dHJBcm4sXG4gICAgICAgICksXG4gICAgICAgIHRyYWNpbmc6IGxhbWJkYS5UcmFjaW5nLkFDVElWRSxcbiAgICAgICAgbG9nR3JvdXA6IGxvZ3MuTG9nR3JvdXAuZnJvbUxvZ0dyb3VwTmFtZShcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIFwiQXV0b1JlbWVkaWF0ZVMzRGFzaDAwNUxhbWJkYUZ1bmN0aW9uTG9nR3JvdXBSZWZcIixcbiAgICAgICAgICBhdXRvUmVtZWRpYXRlUzNEYXNoMDA1TG9nR3JvdXAucmVmLFxuICAgICAgICApLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZVMzRGFzaDAwNUxhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIk5hbWVcIixcbiAgICAgIFwiQXV0byBSZW1lZGlhdGUgUzMtMDA1XCIsXG4gICAgKTtcbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlUzNEYXNoMDA1TGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiT3duZXJcIixcbiAgICAgIFwiQ2xvdWRDb25mb3JtaXR5XCIsXG4gICAgKTtcbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlUzNEYXNoMDA1TGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiUm9sZVwiLFxuICAgICAgXCJBdXRvIFJlbWVkaWF0ZVwiLFxuICAgICk7XG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZVMzRGFzaDAwNUxhbWJkYUZ1bmN0aW9uKS5hZGQoXCJFbnZpcm9ubWVudFwiLCBcIk9wc1wiKTtcblxuICAgIGF1dG9SZW1lZGlhdGVTM0Rhc2gwMDVMYW1iZGFGdW5jdGlvbi5ub2RlLmFkZERlcGVuZGVuY3koXG4gICAgICBhdXRvUmVtZWRpYXRlUzNEYXNoMDA1TG9nR3JvdXAsXG4gICAgKTtcbiAgICBhdXRvUmVtZWRpYXRlUzNEYXNoMDA1TGFtYmRhRnVuY3Rpb24ubm9kZS5hZGREZXBlbmRlbmN5KFxuICAgICAgYXV0b1JlbWVkaWF0ZVMzMDA1Um9sZSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZVMzRGFzaDAwNkxhbWJkYUZ1bmN0aW9uID0gbmV3IGxhbWJkYS5GdW5jdGlvbihcbiAgICAgIHRoaXMsXG4gICAgICBcIkF1dG9SZW1lZGlhdGVTM0Rhc2gwMDZMYW1iZGFGdW5jdGlvblwiLFxuICAgICAge1xuICAgICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQoZnVuY3Rpb25zUGF0aCksXG4gICAgICAgIGhhbmRsZXI6IFwiQXV0b1JlbWVkaWF0ZVMzLTAwNi5oYW5kbGVyXCIsXG4gICAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18yNF9YLFxuICAgICAgICBmdW5jdGlvbk5hbWU6IFwiYXV0by1yZW1lZGlhdGUtdjEtQXV0b1JlbWVkaWF0ZVMzLTAwNlwiLFxuICAgICAgICBtZW1vcnlTaXplOiAxMjgsXG4gICAgICAgIHRpbWVvdXQ6IGNkay5EdXJhdGlvbi5zZWNvbmRzKDEwKSxcbiAgICAgICAgcm9sZTogaWFtLlJvbGUuZnJvbVJvbGVBcm4oXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBcIkF1dG9SZW1lZGlhdGVTM0Rhc2gwMDZMYW1iZGFGdW5jdGlvblJvbGVSZWZcIixcbiAgICAgICAgICBhdXRvUmVtZWRpYXRlUzMwMDZSb2xlLmF0dHJBcm4sXG4gICAgICAgICksXG4gICAgICAgIHRyYWNpbmc6IGxhbWJkYS5UcmFjaW5nLkFDVElWRSxcbiAgICAgICAgbG9nR3JvdXA6IGxvZ3MuTG9nR3JvdXAuZnJvbUxvZ0dyb3VwTmFtZShcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIFwiQXV0b1JlbWVkaWF0ZVMzRGFzaDAwNkxhbWJkYUZ1bmN0aW9uTG9nR3JvdXBSZWZcIixcbiAgICAgICAgICBhdXRvUmVtZWRpYXRlUzNEYXNoMDA2TG9nR3JvdXAucmVmLFxuICAgICAgICApLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZVMzRGFzaDAwNkxhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIk5hbWVcIixcbiAgICAgIFwiQXV0byBSZW1lZGlhdGUgUzMtMDA2XCIsXG4gICAgKTtcbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlUzNEYXNoMDA2TGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiT3duZXJcIixcbiAgICAgIFwiQ2xvdWRDb25mb3JtaXR5XCIsXG4gICAgKTtcbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlUzNEYXNoMDA2TGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiUm9sZVwiLFxuICAgICAgXCJBdXRvIFJlbWVkaWF0ZVwiLFxuICAgICk7XG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZVMzRGFzaDAwNkxhbWJkYUZ1bmN0aW9uKS5hZGQoXCJFbnZpcm9ubWVudFwiLCBcIk9wc1wiKTtcblxuICAgIGF1dG9SZW1lZGlhdGVTM0Rhc2gwMDZMYW1iZGFGdW5jdGlvbi5ub2RlLmFkZERlcGVuZGVuY3koXG4gICAgICBhdXRvUmVtZWRpYXRlUzNEYXNoMDA2TG9nR3JvdXAsXG4gICAgKTtcbiAgICBhdXRvUmVtZWRpYXRlUzNEYXNoMDA2TGFtYmRhRnVuY3Rpb24ubm9kZS5hZGREZXBlbmRlbmN5KFxuICAgICAgYXV0b1JlbWVkaWF0ZVMzMDA2Um9sZSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZVMzRGFzaDAwN0xhbWJkYUZ1bmN0aW9uID0gbmV3IGxhbWJkYS5GdW5jdGlvbihcbiAgICAgIHRoaXMsXG4gICAgICBcIkF1dG9SZW1lZGlhdGVTM0Rhc2gwMDdMYW1iZGFGdW5jdGlvblwiLFxuICAgICAge1xuICAgICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQoZnVuY3Rpb25zUGF0aCksXG4gICAgICAgIGhhbmRsZXI6IFwiQXV0b1JlbWVkaWF0ZVMzLTAwNy5oYW5kbGVyXCIsXG4gICAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18yNF9YLFxuICAgICAgICBmdW5jdGlvbk5hbWU6IFwiYXV0by1yZW1lZGlhdGUtdjEtQXV0b1JlbWVkaWF0ZVMzLTAwN1wiLFxuICAgICAgICBtZW1vcnlTaXplOiAxMjgsXG4gICAgICAgIHRpbWVvdXQ6IGNkay5EdXJhdGlvbi5zZWNvbmRzKDEwKSxcbiAgICAgICAgcm9sZTogaWFtLlJvbGUuZnJvbVJvbGVBcm4oXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBcIkF1dG9SZW1lZGlhdGVTM0Rhc2gwMDdMYW1iZGFGdW5jdGlvblJvbGVSZWZcIixcbiAgICAgICAgICBhdXRvUmVtZWRpYXRlUzMwMDdSb2xlLmF0dHJBcm4sXG4gICAgICAgICksXG4gICAgICAgIHRyYWNpbmc6IGxhbWJkYS5UcmFjaW5nLkFDVElWRSxcbiAgICAgICAgbG9nR3JvdXA6IGxvZ3MuTG9nR3JvdXAuZnJvbUxvZ0dyb3VwTmFtZShcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIFwiQXV0b1JlbWVkaWF0ZVMzRGFzaDAwN0xhbWJkYUZ1bmN0aW9uTG9nR3JvdXBSZWZcIixcbiAgICAgICAgICBhdXRvUmVtZWRpYXRlUzNEYXNoMDA3TG9nR3JvdXAucmVmLFxuICAgICAgICApLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZVMzRGFzaDAwN0xhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIk5hbWVcIixcbiAgICAgIFwiQXV0byBSZW1lZGlhdGUgUzMtMDA3XCIsXG4gICAgKTtcbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlUzNEYXNoMDA3TGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiT3duZXJcIixcbiAgICAgIFwiQ2xvdWRDb25mb3JtaXR5XCIsXG4gICAgKTtcbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlUzNEYXNoMDA3TGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiUm9sZVwiLFxuICAgICAgXCJBdXRvIFJlbWVkaWF0ZVwiLFxuICAgICk7XG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZVMzRGFzaDAwN0xhbWJkYUZ1bmN0aW9uKS5hZGQoXCJFbnZpcm9ubWVudFwiLCBcIk9wc1wiKTtcblxuICAgIGF1dG9SZW1lZGlhdGVTM0Rhc2gwMDdMYW1iZGFGdW5jdGlvbi5ub2RlLmFkZERlcGVuZGVuY3koXG4gICAgICBhdXRvUmVtZWRpYXRlUzNEYXNoMDA3TG9nR3JvdXAsXG4gICAgKTtcbiAgICBhdXRvUmVtZWRpYXRlUzNEYXNoMDA3TGFtYmRhRnVuY3Rpb24ubm9kZS5hZGREZXBlbmRlbmN5KFxuICAgICAgYXV0b1JlbWVkaWF0ZVMzMDA3Um9sZSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZVMzRGFzaDAwOExhbWJkYUZ1bmN0aW9uID0gbmV3IGxhbWJkYS5GdW5jdGlvbihcbiAgICAgIHRoaXMsXG4gICAgICBcIkF1dG9SZW1lZGlhdGVTM0Rhc2gwMDhMYW1iZGFGdW5jdGlvblwiLFxuICAgICAge1xuICAgICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQoZnVuY3Rpb25zUGF0aCksXG4gICAgICAgIGhhbmRsZXI6IFwiQXV0b1JlbWVkaWF0ZVMzLTAwOC5oYW5kbGVyXCIsXG4gICAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18yNF9YLFxuICAgICAgICBmdW5jdGlvbk5hbWU6IFwiYXV0by1yZW1lZGlhdGUtdjEtQXV0b1JlbWVkaWF0ZVMzLTAwOFwiLFxuICAgICAgICBtZW1vcnlTaXplOiAxMjgsXG4gICAgICAgIHRpbWVvdXQ6IGNkay5EdXJhdGlvbi5zZWNvbmRzKDEwKSxcbiAgICAgICAgcm9sZTogaWFtLlJvbGUuZnJvbVJvbGVBcm4oXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBcIkF1dG9SZW1lZGlhdGVTM0Rhc2gwMDhMYW1iZGFGdW5jdGlvblJvbGVSZWZcIixcbiAgICAgICAgICBhdXRvUmVtZWRpYXRlUzMwMDhSb2xlLmF0dHJBcm4sXG4gICAgICAgICksXG4gICAgICAgIHRyYWNpbmc6IGxhbWJkYS5UcmFjaW5nLkFDVElWRSxcbiAgICAgICAgbG9nR3JvdXA6IGxvZ3MuTG9nR3JvdXAuZnJvbUxvZ0dyb3VwTmFtZShcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIFwiQXV0b1JlbWVkaWF0ZVMzRGFzaDAwOExhbWJkYUZ1bmN0aW9uTG9nR3JvdXBSZWZcIixcbiAgICAgICAgICBhdXRvUmVtZWRpYXRlUzNEYXNoMDA4TG9nR3JvdXAucmVmLFxuICAgICAgICApLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZVMzRGFzaDAwOExhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIk5hbWVcIixcbiAgICAgIFwiQXV0byBSZW1lZGlhdGUgUzMtMDA4XCIsXG4gICAgKTtcbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlUzNEYXNoMDA4TGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiT3duZXJcIixcbiAgICAgIFwiQ2xvdWRDb25mb3JtaXR5XCIsXG4gICAgKTtcbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlUzNEYXNoMDA4TGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiUm9sZVwiLFxuICAgICAgXCJBdXRvIFJlbWVkaWF0ZVwiLFxuICAgICk7XG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZVMzRGFzaDAwOExhbWJkYUZ1bmN0aW9uKS5hZGQoXCJFbnZpcm9ubWVudFwiLCBcIk9wc1wiKTtcblxuICAgIGF1dG9SZW1lZGlhdGVTM0Rhc2gwMDhMYW1iZGFGdW5jdGlvbi5ub2RlLmFkZERlcGVuZGVuY3koXG4gICAgICBhdXRvUmVtZWRpYXRlUzNEYXNoMDA4TG9nR3JvdXAsXG4gICAgKTtcbiAgICBhdXRvUmVtZWRpYXRlUzNEYXNoMDA4TGFtYmRhRnVuY3Rpb24ubm9kZS5hZGREZXBlbmRlbmN5KFxuICAgICAgYXV0b1JlbWVkaWF0ZVMzMDA4Um9sZSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZVMzRGFzaDAwOUxhbWJkYUZ1bmN0aW9uID0gbmV3IGxhbWJkYS5GdW5jdGlvbihcbiAgICAgIHRoaXMsXG4gICAgICBcIkF1dG9SZW1lZGlhdGVTM0Rhc2gwMDlMYW1iZGFGdW5jdGlvblwiLFxuICAgICAge1xuICAgICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQoZnVuY3Rpb25zUGF0aCksXG4gICAgICAgIGhhbmRsZXI6IFwiQXV0b1JlbWVkaWF0ZVMzLTAwOS5oYW5kbGVyXCIsXG4gICAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18yNF9YLFxuICAgICAgICBmdW5jdGlvbk5hbWU6IFwiYXV0by1yZW1lZGlhdGUtdjEtQXV0b1JlbWVkaWF0ZVMzLTAwOVwiLFxuICAgICAgICBtZW1vcnlTaXplOiAxMjgsXG4gICAgICAgIHRpbWVvdXQ6IGNkay5EdXJhdGlvbi5zZWNvbmRzKDEwKSxcbiAgICAgICAgcm9sZTogaWFtLlJvbGUuZnJvbVJvbGVBcm4oXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBcIkF1dG9SZW1lZGlhdGVTM0Rhc2gwMDlMYW1iZGFGdW5jdGlvblJvbGVSZWZcIixcbiAgICAgICAgICBhdXRvUmVtZWRpYXRlUzMwMDlSb2xlLmF0dHJBcm4sXG4gICAgICAgICksXG4gICAgICAgIHRyYWNpbmc6IGxhbWJkYS5UcmFjaW5nLkFDVElWRSxcbiAgICAgICAgbG9nR3JvdXA6IGxvZ3MuTG9nR3JvdXAuZnJvbUxvZ0dyb3VwTmFtZShcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIFwiQXV0b1JlbWVkaWF0ZVMzRGFzaDAwOUxhbWJkYUZ1bmN0aW9uTG9nR3JvdXBSZWZcIixcbiAgICAgICAgICBhdXRvUmVtZWRpYXRlUzNEYXNoMDA5TG9nR3JvdXAucmVmLFxuICAgICAgICApLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZVMzRGFzaDAwOUxhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIk5hbWVcIixcbiAgICAgIFwiQXV0byBSZW1lZGlhdGUgUzMtMDA5XCIsXG4gICAgKTtcbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlUzNEYXNoMDA5TGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiT3duZXJcIixcbiAgICAgIFwiQ2xvdWRDb25mb3JtaXR5XCIsXG4gICAgKTtcbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlUzNEYXNoMDA5TGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiUm9sZVwiLFxuICAgICAgXCJBdXRvIFJlbWVkaWF0ZVwiLFxuICAgICk7XG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZVMzRGFzaDAwOUxhbWJkYUZ1bmN0aW9uKS5hZGQoXCJFbnZpcm9ubWVudFwiLCBcIk9wc1wiKTtcblxuICAgIGF1dG9SZW1lZGlhdGVTM0Rhc2gwMDlMYW1iZGFGdW5jdGlvbi5ub2RlLmFkZERlcGVuZGVuY3koXG4gICAgICBhdXRvUmVtZWRpYXRlUzNEYXNoMDA5TG9nR3JvdXAsXG4gICAgKTtcbiAgICBhdXRvUmVtZWRpYXRlUzNEYXNoMDA5TGFtYmRhRnVuY3Rpb24ubm9kZS5hZGREZXBlbmRlbmN5KFxuICAgICAgYXV0b1JlbWVkaWF0ZVMzMDA5Um9sZSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZVMzRGFzaDAxMExhbWJkYUZ1bmN0aW9uID0gbmV3IGxhbWJkYS5GdW5jdGlvbihcbiAgICAgIHRoaXMsXG4gICAgICBcIkF1dG9SZW1lZGlhdGVTM0Rhc2gwMTBMYW1iZGFGdW5jdGlvblwiLFxuICAgICAge1xuICAgICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQoZnVuY3Rpb25zUGF0aCksXG4gICAgICAgIGhhbmRsZXI6IFwiQXV0b1JlbWVkaWF0ZVMzLTAxMC5oYW5kbGVyXCIsXG4gICAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18yNF9YLFxuICAgICAgICBmdW5jdGlvbk5hbWU6IFwiYXV0by1yZW1lZGlhdGUtdjEtQXV0b1JlbWVkaWF0ZVMzLTAxMFwiLFxuICAgICAgICBtZW1vcnlTaXplOiAxMjgsXG4gICAgICAgIHRpbWVvdXQ6IGNkay5EdXJhdGlvbi5zZWNvbmRzKDEwKSxcbiAgICAgICAgcm9sZTogaWFtLlJvbGUuZnJvbVJvbGVBcm4oXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBcIkF1dG9SZW1lZGlhdGVTM0Rhc2gwMTBMYW1iZGFGdW5jdGlvblJvbGVSZWZcIixcbiAgICAgICAgICBhdXRvUmVtZWRpYXRlUzMwMTBSb2xlLmF0dHJBcm4sXG4gICAgICAgICksXG4gICAgICAgIHRyYWNpbmc6IGxhbWJkYS5UcmFjaW5nLkFDVElWRSxcbiAgICAgICAgbG9nR3JvdXA6IGxvZ3MuTG9nR3JvdXAuZnJvbUxvZ0dyb3VwTmFtZShcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIFwiQXV0b1JlbWVkaWF0ZVMzRGFzaDAxMExhbWJkYUZ1bmN0aW9uTG9nR3JvdXBSZWZcIixcbiAgICAgICAgICBhdXRvUmVtZWRpYXRlUzNEYXNoMDEwTG9nR3JvdXAucmVmLFxuICAgICAgICApLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZVMzRGFzaDAxMExhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIk5hbWVcIixcbiAgICAgIFwiQXV0byBSZW1lZGlhdGUgUzMtMDEwXCIsXG4gICAgKTtcbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlUzNEYXNoMDEwTGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiT3duZXJcIixcbiAgICAgIFwiQ2xvdWRDb25mb3JtaXR5XCIsXG4gICAgKTtcbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlUzNEYXNoMDEwTGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiUm9sZVwiLFxuICAgICAgXCJBdXRvIFJlbWVkaWF0ZVwiLFxuICAgICk7XG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZVMzRGFzaDAxMExhbWJkYUZ1bmN0aW9uKS5hZGQoXCJFbnZpcm9ubWVudFwiLCBcIk9wc1wiKTtcblxuICAgIGF1dG9SZW1lZGlhdGVTM0Rhc2gwMTBMYW1iZGFGdW5jdGlvbi5ub2RlLmFkZERlcGVuZGVuY3koXG4gICAgICBhdXRvUmVtZWRpYXRlUzNEYXNoMDEwTG9nR3JvdXAsXG4gICAgKTtcbiAgICBhdXRvUmVtZWRpYXRlUzNEYXNoMDEwTGFtYmRhRnVuY3Rpb24ubm9kZS5hZGREZXBlbmRlbmN5KFxuICAgICAgYXV0b1JlbWVkaWF0ZVMzMDEwUm9sZSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZVMzRGFzaDAxMkxhbWJkYUZ1bmN0aW9uID0gbmV3IGxhbWJkYS5GdW5jdGlvbihcbiAgICAgIHRoaXMsXG4gICAgICBcIkF1dG9SZW1lZGlhdGVTM0Rhc2gwMTJMYW1iZGFGdW5jdGlvblwiLFxuICAgICAge1xuICAgICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQoZnVuY3Rpb25zUGF0aCksXG4gICAgICAgIGhhbmRsZXI6IFwiQXV0b1JlbWVkaWF0ZVMzLTAxMi5oYW5kbGVyXCIsXG4gICAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18yNF9YLFxuICAgICAgICBmdW5jdGlvbk5hbWU6IFwiYXV0by1yZW1lZGlhdGUtdjEtQXV0b1JlbWVkaWF0ZVMzLTAxMlwiLFxuICAgICAgICBtZW1vcnlTaXplOiAxMjgsXG4gICAgICAgIHRpbWVvdXQ6IGNkay5EdXJhdGlvbi5zZWNvbmRzKDEwKSxcbiAgICAgICAgcm9sZTogaWFtLlJvbGUuZnJvbVJvbGVBcm4oXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBcIkF1dG9SZW1lZGlhdGVTM0Rhc2gwMTJMYW1iZGFGdW5jdGlvblJvbGVSZWZcIixcbiAgICAgICAgICBhdXRvUmVtZWRpYXRlUzMwMTJSb2xlLmF0dHJBcm4sXG4gICAgICAgICksXG4gICAgICAgIHRyYWNpbmc6IGxhbWJkYS5UcmFjaW5nLkFDVElWRSxcbiAgICAgICAgbG9nR3JvdXA6IGxvZ3MuTG9nR3JvdXAuZnJvbUxvZ0dyb3VwTmFtZShcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIFwiQXV0b1JlbWVkaWF0ZVMzRGFzaDAxMkxhbWJkYUZ1bmN0aW9uTG9nR3JvdXBSZWZcIixcbiAgICAgICAgICBhdXRvUmVtZWRpYXRlUzNEYXNoMDEyTG9nR3JvdXAucmVmLFxuICAgICAgICApLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZVMzRGFzaDAxMkxhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIk5hbWVcIixcbiAgICAgIFwiQXV0byBSZW1lZGlhdGUgUzMtMDEyXCIsXG4gICAgKTtcbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlUzNEYXNoMDEyTGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiT3duZXJcIixcbiAgICAgIFwiQ2xvdWRDb25mb3JtaXR5XCIsXG4gICAgKTtcbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlUzNEYXNoMDEyTGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiUm9sZVwiLFxuICAgICAgXCJBdXRvIFJlbWVkaWF0ZVwiLFxuICAgICk7XG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZVMzRGFzaDAxMkxhbWJkYUZ1bmN0aW9uKS5hZGQoXCJFbnZpcm9ubWVudFwiLCBcIk9wc1wiKTtcblxuICAgIGF1dG9SZW1lZGlhdGVTM0Rhc2gwMTJMYW1iZGFGdW5jdGlvbi5ub2RlLmFkZERlcGVuZGVuY3koXG4gICAgICBhdXRvUmVtZWRpYXRlUzNEYXNoMDEyTG9nR3JvdXAsXG4gICAgKTtcbiAgICBhdXRvUmVtZWRpYXRlUzNEYXNoMDEyTGFtYmRhRnVuY3Rpb24ubm9kZS5hZGREZXBlbmRlbmN5KFxuICAgICAgYXV0b1JlbWVkaWF0ZVMzMDEyUm9sZSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZVMzRGFzaDAxNExhbWJkYUZ1bmN0aW9uID0gbmV3IGxhbWJkYS5GdW5jdGlvbihcbiAgICAgIHRoaXMsXG4gICAgICBcIkF1dG9SZW1lZGlhdGVTM0Rhc2gwMTRMYW1iZGFGdW5jdGlvblwiLFxuICAgICAge1xuICAgICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQoZnVuY3Rpb25zUGF0aCksXG4gICAgICAgIGhhbmRsZXI6IFwiQXV0b1JlbWVkaWF0ZVMzLTAxNC5oYW5kbGVyXCIsXG4gICAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18yNF9YLFxuICAgICAgICBmdW5jdGlvbk5hbWU6IFwiYXV0by1yZW1lZGlhdGUtdjEtQXV0b1JlbWVkaWF0ZVMzLTAxNFwiLFxuICAgICAgICBtZW1vcnlTaXplOiAxMjgsXG4gICAgICAgIHRpbWVvdXQ6IGNkay5EdXJhdGlvbi5zZWNvbmRzKDEwKSxcbiAgICAgICAgcm9sZTogaWFtLlJvbGUuZnJvbVJvbGVBcm4oXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBcIkF1dG9SZW1lZGlhdGVTM0Rhc2gwMTRMYW1iZGFGdW5jdGlvblJvbGVSZWZcIixcbiAgICAgICAgICBhdXRvUmVtZWRpYXRlUzMwMTRSb2xlLmF0dHJBcm4sXG4gICAgICAgICksXG4gICAgICAgIHRyYWNpbmc6IGxhbWJkYS5UcmFjaW5nLkFDVElWRSxcbiAgICAgICAgbG9nR3JvdXA6IGxvZ3MuTG9nR3JvdXAuZnJvbUxvZ0dyb3VwTmFtZShcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIFwiQXV0b1JlbWVkaWF0ZVMzRGFzaDAxNExhbWJkYUZ1bmN0aW9uTG9nR3JvdXBSZWZcIixcbiAgICAgICAgICBhdXRvUmVtZWRpYXRlUzNEYXNoMDE0TG9nR3JvdXAucmVmLFxuICAgICAgICApLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZVMzRGFzaDAxNExhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIk5hbWVcIixcbiAgICAgIFwiQXV0byBSZW1lZGlhdGUgUzMtMDE0XCIsXG4gICAgKTtcbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlUzNEYXNoMDE0TGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiT3duZXJcIixcbiAgICAgIFwiQ2xvdWRDb25mb3JtaXR5XCIsXG4gICAgKTtcbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlUzNEYXNoMDE0TGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiUm9sZVwiLFxuICAgICAgXCJBdXRvIFJlbWVkaWF0ZVwiLFxuICAgICk7XG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZVMzRGFzaDAxNExhbWJkYUZ1bmN0aW9uKS5hZGQoXCJFbnZpcm9ubWVudFwiLCBcIk9wc1wiKTtcblxuICAgIGF1dG9SZW1lZGlhdGVTM0Rhc2gwMTRMYW1iZGFGdW5jdGlvbi5ub2RlLmFkZERlcGVuZGVuY3koXG4gICAgICBhdXRvUmVtZWRpYXRlUzNEYXNoMDE0TG9nR3JvdXAsXG4gICAgKTtcbiAgICBhdXRvUmVtZWRpYXRlUzNEYXNoMDE0TGFtYmRhRnVuY3Rpb24ubm9kZS5hZGREZXBlbmRlbmN5KFxuICAgICAgYXV0b1JlbWVkaWF0ZVMzMDE0Um9sZSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZVMzRGFzaDAxNkxhbWJkYUZ1bmN0aW9uID0gbmV3IGxhbWJkYS5GdW5jdGlvbihcbiAgICAgIHRoaXMsXG4gICAgICBcIkF1dG9SZW1lZGlhdGVTM0Rhc2gwMTZMYW1iZGFGdW5jdGlvblwiLFxuICAgICAge1xuICAgICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQoZnVuY3Rpb25zUGF0aCksXG4gICAgICAgIGhhbmRsZXI6IFwiQXV0b1JlbWVkaWF0ZVMzLTAxNi5oYW5kbGVyXCIsXG4gICAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18yNF9YLFxuICAgICAgICBmdW5jdGlvbk5hbWU6IFwiYXV0by1yZW1lZGlhdGUtdjEtQXV0b1JlbWVkaWF0ZVMzLTAxNlwiLFxuICAgICAgICBtZW1vcnlTaXplOiAxMjgsXG4gICAgICAgIHRpbWVvdXQ6IGNkay5EdXJhdGlvbi5zZWNvbmRzKDEwKSxcbiAgICAgICAgcm9sZTogaWFtLlJvbGUuZnJvbVJvbGVBcm4oXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBcIkF1dG9SZW1lZGlhdGVTM0Rhc2gwMTZMYW1iZGFGdW5jdGlvblJvbGVSZWZcIixcbiAgICAgICAgICBhdXRvUmVtZWRpYXRlUzMwMTZSb2xlLmF0dHJBcm4sXG4gICAgICAgICksXG4gICAgICAgIHRyYWNpbmc6IGxhbWJkYS5UcmFjaW5nLkFDVElWRSxcbiAgICAgICAgbG9nR3JvdXA6IGxvZ3MuTG9nR3JvdXAuZnJvbUxvZ0dyb3VwTmFtZShcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIFwiQXV0b1JlbWVkaWF0ZVMzRGFzaDAxNkxhbWJkYUZ1bmN0aW9uTG9nR3JvdXBSZWZcIixcbiAgICAgICAgICBhdXRvUmVtZWRpYXRlUzNEYXNoMDE2TG9nR3JvdXAucmVmLFxuICAgICAgICApLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZVMzRGFzaDAxNkxhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIk5hbWVcIixcbiAgICAgIFwiQXV0byBSZW1lZGlhdGUgUzMtMDE2XCIsXG4gICAgKTtcbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlUzNEYXNoMDE2TGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiT3duZXJcIixcbiAgICAgIFwiQ2xvdWRDb25mb3JtaXR5XCIsXG4gICAgKTtcbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlUzNEYXNoMDE2TGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiUm9sZVwiLFxuICAgICAgXCJBdXRvIFJlbWVkaWF0ZVwiLFxuICAgICk7XG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZVMzRGFzaDAxNkxhbWJkYUZ1bmN0aW9uKS5hZGQoXCJFbnZpcm9ubWVudFwiLCBcIk9wc1wiKTtcblxuICAgIGF1dG9SZW1lZGlhdGVTM0Rhc2gwMTZMYW1iZGFGdW5jdGlvbi5ub2RlLmFkZERlcGVuZGVuY3koXG4gICAgICBhdXRvUmVtZWRpYXRlUzNEYXNoMDE2TG9nR3JvdXAsXG4gICAgKTtcbiAgICBhdXRvUmVtZWRpYXRlUzNEYXNoMDE2TGFtYmRhRnVuY3Rpb24ubm9kZS5hZGREZXBlbmRlbmN5KFxuICAgICAgYXV0b1JlbWVkaWF0ZVMzMDE2Um9sZSxcbiAgICApO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZVNxc0Rhc2gwMDRMYW1iZGFGdW5jdGlvbiA9IG5ldyBsYW1iZGEuRnVuY3Rpb24oXG4gICAgICB0aGlzLFxuICAgICAgXCJBdXRvUmVtZWRpYXRlU1FTRGFzaDAwNExhbWJkYUZ1bmN0aW9uXCIsXG4gICAgICB7XG4gICAgICAgIGNvZGU6IGxhbWJkYS5Db2RlLmZyb21Bc3NldChmdW5jdGlvbnNQYXRoKSxcbiAgICAgICAgaGFuZGxlcjogXCJBdXRvUmVtZWRpYXRlU1FTLTAwNC5oYW5kbGVyXCIsXG4gICAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18yNF9YLFxuICAgICAgICBmdW5jdGlvbk5hbWU6IFwiYXV0by1yZW1lZGlhdGUtdjEtQXV0b1JlbWVkaWF0ZVNRUy0wMDRcIixcbiAgICAgICAgbWVtb3J5U2l6ZTogMTI4LFxuICAgICAgICB0aW1lb3V0OiBjZGsuRHVyYXRpb24uc2Vjb25kcygxMjApLFxuICAgICAgICByb2xlOiBpYW0uUm9sZS5mcm9tUm9sZUFybihcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIFwiQXV0b1JlbWVkaWF0ZVNRU0Rhc2gwMDRMYW1iZGFGdW5jdGlvblJvbGVSZWZcIixcbiAgICAgICAgICBhdXRvUmVtZWRpYXRlU3FzMDA0Um9sZS5hdHRyQXJuLFxuICAgICAgICApLFxuICAgICAgICB0cmFjaW5nOiBsYW1iZGEuVHJhY2luZy5BQ1RJVkUsXG4gICAgICAgIGxvZ0dyb3VwOiBsb2dzLkxvZ0dyb3VwLmZyb21Mb2dHcm91cE5hbWUoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBcIkF1dG9SZW1lZGlhdGVTUVNEYXNoMDA0TGFtYmRhRnVuY3Rpb25Mb2dHcm91cFJlZlwiLFxuICAgICAgICAgIGF1dG9SZW1lZGlhdGVTcXNEYXNoMDA0TG9nR3JvdXAucmVmLFxuICAgICAgICApLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZVNxc0Rhc2gwMDRMYW1iZGFGdW5jdGlvbikuYWRkKFxuICAgICAgXCJOYW1lXCIsXG4gICAgICBcIkF1dG8gUmVtZWRpYXRlIFNRUy0wMDRcIixcbiAgICApO1xuICAgIGNkay5UYWdzLm9mKGF1dG9SZW1lZGlhdGVTcXNEYXNoMDA0TGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiT3duZXJcIixcbiAgICAgIFwiQ2xvdWRDb25mb3JtaXR5XCIsXG4gICAgKTtcbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlU3FzRGFzaDAwNExhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIlJvbGVcIixcbiAgICAgIFwiQXV0byBSZW1lZGlhdGVcIixcbiAgICApO1xuICAgIGNkay5UYWdzLm9mKGF1dG9SZW1lZGlhdGVTcXNEYXNoMDA0TGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiRW52aXJvbm1lbnRcIixcbiAgICAgIFwiT3BzXCIsXG4gICAgKTtcblxuICAgIGF1dG9SZW1lZGlhdGVTcXNEYXNoMDA0TGFtYmRhRnVuY3Rpb24ubm9kZS5hZGREZXBlbmRlbmN5KFxuICAgICAgYXV0b1JlbWVkaWF0ZVNxc0Rhc2gwMDRMb2dHcm91cCxcbiAgICApO1xuICAgIGF1dG9SZW1lZGlhdGVTcXNEYXNoMDA0TGFtYmRhRnVuY3Rpb24ubm9kZS5hZGREZXBlbmRlbmN5KFxuICAgICAgYXV0b1JlbWVkaWF0ZVNxczAwNFJvbGUsXG4gICAgKTtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVWcGNEYXNoMDAxTGFtYmRhRnVuY3Rpb24gPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKFxuICAgICAgdGhpcyxcbiAgICAgIFwiQXV0b1JlbWVkaWF0ZVZQQ0Rhc2gwMDFMYW1iZGFGdW5jdGlvblwiLFxuICAgICAge1xuICAgICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQoZnVuY3Rpb25zUGF0aCksXG4gICAgICAgIGhhbmRsZXI6IFwiQXV0b1JlbWVkaWF0ZVZQQy0wMDEuaGFuZGxlclwiLFxuICAgICAgICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMjRfWCxcbiAgICAgICAgZnVuY3Rpb25OYW1lOiBcImF1dG8tcmVtZWRpYXRlLXYxLUF1dG9SZW1lZGlhdGVWUEMtMDAxXCIsXG4gICAgICAgIG1lbW9yeVNpemU6IDEyOCxcbiAgICAgICAgdGltZW91dDogY2RrLkR1cmF0aW9uLnNlY29uZHMoMTIwKSxcbiAgICAgICAgcm9sZTogaWFtLlJvbGUuZnJvbVJvbGVBcm4oXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBcIkF1dG9SZW1lZGlhdGVWUENEYXNoMDAxTGFtYmRhRnVuY3Rpb25Sb2xlUmVmXCIsXG4gICAgICAgICAgYXV0b1JlbWVkaWF0ZVZwYzAwMVJvbGUuYXR0ckFybixcbiAgICAgICAgKSxcbiAgICAgICAgdHJhY2luZzogbGFtYmRhLlRyYWNpbmcuQUNUSVZFLFxuICAgICAgICBsb2dHcm91cDogbG9ncy5Mb2dHcm91cC5mcm9tTG9nR3JvdXBOYW1lKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgXCJBdXRvUmVtZWRpYXRlVlBDRGFzaDAwMUxhbWJkYUZ1bmN0aW9uTG9nR3JvdXBSZWZcIixcbiAgICAgICAgICBhdXRvUmVtZWRpYXRlVnBjRGFzaDAwMUxvZ0dyb3VwLnJlZixcbiAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIGNkay5UYWdzLm9mKGF1dG9SZW1lZGlhdGVWcGNEYXNoMDAxTGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiTmFtZVwiLFxuICAgICAgXCJBdXRvIFJlbWVkaWF0ZSBWUEMtMDAxXCIsXG4gICAgKTtcbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlVnBjRGFzaDAwMUxhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIk93bmVyXCIsXG4gICAgICBcIkNsb3VkQ29uZm9ybWl0eVwiLFxuICAgICk7XG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZVZwY0Rhc2gwMDFMYW1iZGFGdW5jdGlvbikuYWRkKFxuICAgICAgXCJSb2xlXCIsXG4gICAgICBcIkF1dG8gUmVtZWRpYXRlXCIsXG4gICAgKTtcbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlVnBjRGFzaDAwMUxhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIkVudmlyb25tZW50XCIsXG4gICAgICBcIk9wc1wiLFxuICAgICk7XG5cbiAgICBhdXRvUmVtZWRpYXRlVnBjRGFzaDAwMUxhbWJkYUZ1bmN0aW9uLm5vZGUuYWRkRGVwZW5kZW5jeShcbiAgICAgIGF1dG9SZW1lZGlhdGVWcGNEYXNoMDAxTG9nR3JvdXAsXG4gICAgKTtcbiAgICBhdXRvUmVtZWRpYXRlVnBjRGFzaDAwMUxhbWJkYUZ1bmN0aW9uLm5vZGUuYWRkRGVwZW5kZW5jeShcbiAgICAgIGF1dG9SZW1lZGlhdGVWcGMwMDFSb2xlLFxuICAgICk7XG5cbiAgICBjb25zdCBrZXlBbGlhcyA9IG5ldyBrbXMuQ2ZuQWxpYXModGhpcywgXCJLZXlBbGlhc1wiLCB7XG4gICAgICBhbGlhc05hbWU6IFwiYWxpYXMvU05TLXRvLVNRUy1LZXktdXMtd2VzdC0yXCIsXG4gICAgICB0YXJnZXRLZXlJZDoga21zS2V5U3FzUXVldWVGcm9tU25zLnJlZixcbiAgICB9KTtcblxuICAgIGNvbnN0IHRydXN0ZWRBZHZpc29yRGFzaDAwM0xhbWJkYUZ1bmN0aW9uID0gbmV3IGxhbWJkYS5GdW5jdGlvbihcbiAgICAgIHRoaXMsXG4gICAgICBcIlRydXN0ZWRBZHZpc29yRGFzaDAwM0xhbWJkYUZ1bmN0aW9uXCIsXG4gICAgICB7XG4gICAgICAgIGNvZGU6IGxhbWJkYS5Db2RlLmZyb21Bc3NldChmdW5jdGlvbnNQYXRoKSxcbiAgICAgICAgaGFuZGxlcjogXCJBdXRvUmVtZWRpYXRlVHJ1c3RlZEFkdmlzb3ItMDAzLmhhbmRsZXJcIixcbiAgICAgICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzI0X1gsXG4gICAgICAgIGZ1bmN0aW9uTmFtZTogXCJhdXRvLXJlbWVkaWF0ZS12MS1UcnVzdGVkQWR2aXNvci0wMDNcIixcbiAgICAgICAgbWVtb3J5U2l6ZTogMTI4LFxuICAgICAgICB0aW1lb3V0OiBjZGsuRHVyYXRpb24uc2Vjb25kcygxMjApLFxuICAgICAgICByb2xlOiBpYW0uUm9sZS5mcm9tUm9sZUFybihcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIFwiVHJ1c3RlZEFkdmlzb3JEYXNoMDAzTGFtYmRhRnVuY3Rpb25Sb2xlUmVmXCIsXG4gICAgICAgICAgYXV0b1JlbWVkaWF0ZVRydXN0ZWRBZHZpc29yMDAzUm9sZS5hdHRyQXJuLFxuICAgICAgICApLFxuICAgICAgICB0cmFjaW5nOiBsYW1iZGEuVHJhY2luZy5BQ1RJVkUsXG4gICAgICAgIGxvZ0dyb3VwOiBsb2dzLkxvZ0dyb3VwLmZyb21Mb2dHcm91cE5hbWUoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBcIlRydXN0ZWRBZHZpc29yRGFzaDAwM0xhbWJkYUZ1bmN0aW9uTG9nR3JvdXBSZWZcIixcbiAgICAgICAgICB0cnVzdGVkQWR2aXNvckRhc2gwMDNMb2dHcm91cC5yZWYsXG4gICAgICAgICksXG4gICAgICB9LFxuICAgICk7XG5cbiAgICBjZGsuVGFncy5vZih0cnVzdGVkQWR2aXNvckRhc2gwMDNMYW1iZGFGdW5jdGlvbikuYWRkKFxuICAgICAgXCJOYW1lXCIsXG4gICAgICBcIkF1dG8gUmVtZWRpYXRlIFRydXN0ZWRBZHZpc29yLTAwM1wiLFxuICAgICk7XG4gICAgY2RrLlRhZ3Mub2YodHJ1c3RlZEFkdmlzb3JEYXNoMDAzTGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiT3duZXJcIixcbiAgICAgIFwiQ2xvdWRDb25mb3JtaXR5XCIsXG4gICAgKTtcbiAgICBjZGsuVGFncy5vZih0cnVzdGVkQWR2aXNvckRhc2gwMDNMYW1iZGFGdW5jdGlvbikuYWRkKFxuICAgICAgXCJSb2xlXCIsXG4gICAgICBcIkF1dG8gUmVtZWRpYXRlXCIsXG4gICAgKTtcbiAgICBjZGsuVGFncy5vZih0cnVzdGVkQWR2aXNvckRhc2gwMDNMYW1iZGFGdW5jdGlvbikuYWRkKFwiRW52aXJvbm1lbnRcIiwgXCJPcHNcIik7XG5cbiAgICB0cnVzdGVkQWR2aXNvckRhc2gwMDNMYW1iZGFGdW5jdGlvbi5ub2RlLmFkZERlcGVuZGVuY3koXG4gICAgICB0cnVzdGVkQWR2aXNvckRhc2gwMDNMb2dHcm91cCxcbiAgICApO1xuICAgIHRydXN0ZWRBZHZpc29yRGFzaDAwM0xhbWJkYUZ1bmN0aW9uLm5vZGUuYWRkRGVwZW5kZW5jeShcbiAgICAgIGF1dG9SZW1lZGlhdGVUcnVzdGVkQWR2aXNvcjAwM1JvbGUsXG4gICAgKTtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVDZm1EYXNoMDA1TGFtYmRhVmVyc2lvbkNwUm84WXA1a1J6bW9taW9FRmtGbFdzWWZEYzV2RGF3MVFwaEFjZkkgPVxuICAgICAgbmV3IGxhbWJkYS5DZm5WZXJzaW9uKFxuICAgICAgICB0aGlzLFxuICAgICAgICBcIkF1dG9SZW1lZGlhdGVDRk1EYXNoMDA1TGFtYmRhVmVyc2lvbkNwUk84WXA1a1J6bW9taW9FRmtGTFdzWWZEYzV2RGF3MVFwaEFjZklcIixcbiAgICAgICAge1xuICAgICAgICAgIGZ1bmN0aW9uTmFtZTogYXV0b1JlbWVkaWF0ZUNmbURhc2gwMDVMYW1iZGFGdW5jdGlvbi5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgY29kZVNoYTI1NjogXCJoR2RmaXhaZUp2TWZocytCdkhaV2huZDNSZlBQMTNWNXJaZmxUODlsNE5RPVwiLFxuICAgICAgICB9LFxuICAgICAgKTtcbiAgICBhdXRvUmVtZWRpYXRlQ2ZtRGFzaDAwNUxhbWJkYVZlcnNpb25DcFJvOFlwNWtSem1vbWlvRUZrRmxXc1lmRGM1dkRhdzFRcGhBY2ZJLmNmbk9wdGlvbnMuZGVsZXRpb25Qb2xpY3kgPVxuICAgICAgY2RrLkNmbkRlbGV0aW9uUG9saWN5LlJFVEFJTjtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVDdERhc2gwMDFMYW1iZGFWZXJzaW9ubEp4SVd3Zk85OWhSaURqaEhjRmRkVElrWm9rc0NnOUk1ejkwdzUwc1B3RSA9XG4gICAgICBuZXcgbGFtYmRhLkNmblZlcnNpb24oXG4gICAgICAgIHRoaXMsXG4gICAgICAgIFwiQXV0b1JlbWVkaWF0ZUNURGFzaDAwMUxhbWJkYVZlcnNpb25sSnhJV3dmTzk5SFJpRGpoSENGZGRUSWtaT0tTQ2c5STV6OTB3NTBzUHdFXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBmdW5jdGlvbk5hbWU6IGF1dG9SZW1lZGlhdGVDdERhc2gwMDFMYW1iZGFGdW5jdGlvbi5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgY29kZVNoYTI1NjogXCJoR2RmaXhaZUp2TWZocytCdkhaV2huZDNSZlBQMTNWNXJaZmxUODlsNE5RPVwiLFxuICAgICAgICB9LFxuICAgICAgKTtcbiAgICBhdXRvUmVtZWRpYXRlQ3REYXNoMDAxTGFtYmRhVmVyc2lvbmxKeElXd2ZPOTloUmlEamhIY0ZkZFRJa1pva3NDZzlJNXo5MHc1MHNQd0UuY2ZuT3B0aW9ucy5kZWxldGlvblBvbGljeSA9XG4gICAgICBjZGsuQ2ZuRGVsZXRpb25Qb2xpY3kuUkVUQUlOO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZUN0RGFzaDAwM0xhbWJkYVZlcnNpb242Z1lxQVp4bUxpbXhKd3RvMm4yQmY5V2k1dTQ4c21SeE0wMkF1TXhHNCA9XG4gICAgICBuZXcgbGFtYmRhLkNmblZlcnNpb24oXG4gICAgICAgIHRoaXMsXG4gICAgICAgIFwiQXV0b1JlbWVkaWF0ZUNURGFzaDAwM0xhbWJkYVZlcnNpb242Z1lxQVp4bUxpbXhKV1RPMk4yQmY5V0k1dTQ4c21SeE0wMkF1TXhHNFwiLFxuICAgICAgICB7XG4gICAgICAgICAgZnVuY3Rpb25OYW1lOiBhdXRvUmVtZWRpYXRlQ3REYXNoMDAzTGFtYmRhRnVuY3Rpb24uZnVuY3Rpb25OYW1lLFxuICAgICAgICAgIGNvZGVTaGEyNTY6IFwiaEdkZml4WmVKdk1maHMrQnZIWldobmQzUmZQUDEzVjVyWmZsVDg5bDROUT1cIixcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgYXV0b1JlbWVkaWF0ZUN0RGFzaDAwM0xhbWJkYVZlcnNpb242Z1lxQVp4bUxpbXhKd3RvMm4yQmY5V2k1dTQ4c21SeE0wMkF1TXhHNC5jZm5PcHRpb25zLmRlbGV0aW9uUG9saWN5ID1cbiAgICAgIGNkay5DZm5EZWxldGlvblBvbGljeS5SRVRBSU47XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlQ29uZmlnRGFzaDAwMUxhbWJkYVZlcnNpb25qTDc5OXFqWFRuTEdlcXJiN3NQOGdoNmtTbGY0NWNGWG0zVWxDYVUyMGsgPVxuICAgICAgbmV3IGxhbWJkYS5DZm5WZXJzaW9uKFxuICAgICAgICB0aGlzLFxuICAgICAgICBcIkF1dG9SZW1lZGlhdGVDb25maWdEYXNoMDAxTGFtYmRhVmVyc2lvbmpMNzk5cWpYVG5MR2VxcmI3c1A4R0g2a1NsZjQ1Y0ZYbTNVbENhVTIwa1wiLFxuICAgICAgICB7XG4gICAgICAgICAgZnVuY3Rpb25OYW1lOiBhdXRvUmVtZWRpYXRlQ29uZmlnRGFzaDAwMUxhbWJkYUZ1bmN0aW9uLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICBjb2RlU2hhMjU2OiBcImhHZGZpeFplSnZNZmhzK0J2SFpXaG5kM1JmUFAxM1Y1clpmbFQ4OWw0TlE9XCIsXG4gICAgICAgIH0sXG4gICAgICApO1xuICAgIGF1dG9SZW1lZGlhdGVDb25maWdEYXNoMDAxTGFtYmRhVmVyc2lvbmpMNzk5cWpYVG5MR2VxcmI3c1A4Z2g2a1NsZjQ1Y0ZYbTNVbENhVTIway5jZm5PcHRpb25zLmRlbGV0aW9uUG9saWN5ID1cbiAgICAgIGNkay5DZm5EZWxldGlvblBvbGljeS5SRVRBSU47XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlRWJzRGFzaDAwOUxhbWJkYVZlcnNpb25nWXhoQ3h5aDhhMWVTdW9FUmhmZEZmMTR1VXdyN2N1YUNBc0NQejdGc2cwID1cbiAgICAgIG5ldyBsYW1iZGEuQ2ZuVmVyc2lvbihcbiAgICAgICAgdGhpcyxcbiAgICAgICAgXCJBdXRvUmVtZWRpYXRlRUJTRGFzaDAwOUxhbWJkYVZlcnNpb25nWXhoQ1hZSDhhMWVTdW9FUmhmZEZGMTR1VVdSN2N1YUNBc0NQejdGU0cwXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBmdW5jdGlvbk5hbWU6IGF1dG9SZW1lZGlhdGVFYnNEYXNoMDA5TGFtYmRhRnVuY3Rpb24uZnVuY3Rpb25OYW1lLFxuICAgICAgICAgIGNvZGVTaGEyNTY6IFwiaEdkZml4WmVKdk1maHMrQnZIWldobmQzUmZQUDEzVjVyWmZsVDg5bDROUT1cIixcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgYXV0b1JlbWVkaWF0ZUVic0Rhc2gwMDlMYW1iZGFWZXJzaW9uZ1l4aEN4eWg4YTFlU3VvRVJoZmRGZjE0dVV3cjdjdWFDQXNDUHo3RnNnMC5jZm5PcHRpb25zLmRlbGV0aW9uUG9saWN5ID1cbiAgICAgIGNkay5DZm5EZWxldGlvblBvbGljeS5SRVRBSU47XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlRWMyRGFzaDAwMkxhbWJkYVZlcnNpb25QTGU5QjRqZ3pFdDZqZEYyb3NuU3JEbVV5cXJUU2N1dTFwMjBxa1FoTmFxID1cbiAgICAgIG5ldyBsYW1iZGEuQ2ZuVmVyc2lvbihcbiAgICAgICAgdGhpcyxcbiAgICAgICAgXCJBdXRvUmVtZWRpYXRlRUMyRGFzaDAwMkxhbWJkYVZlcnNpb25QTGU5QjRKR1pFdDZqZEYyb3NuU3JEbVV5cXJUU2N1dTFwMjBxa1FoTkFRXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBmdW5jdGlvbk5hbWU6IGF1dG9SZW1lZGlhdGVFYzJEYXNoMDAyTGFtYmRhRnVuY3Rpb24uZnVuY3Rpb25OYW1lLFxuICAgICAgICAgIGNvZGVTaGEyNTY6IFwiaEdkZml4WmVKdk1maHMrQnZIWldobmQzUmZQUDEzVjVyWmZsVDg5bDROUT1cIixcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgYXV0b1JlbWVkaWF0ZUVjMkRhc2gwMDJMYW1iZGFWZXJzaW9uUExlOUI0amd6RXQ2amRGMm9zblNyRG1VeXFyVFNjdXUxcDIwcWtRaE5hcS5jZm5PcHRpb25zLmRlbGV0aW9uUG9saWN5ID1cbiAgICAgIGNkay5DZm5EZWxldGlvblBvbGljeS5SRVRBSU47XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlRWMyRGFzaDAwM0xhbWJkYVZlcnNpb25oYlNvOXlUNzJ1RHZyeTFzbTRDbHJvZ0JpU3RrdDlkdUlzajVGaE5jNlUgPVxuICAgICAgbmV3IGxhbWJkYS5DZm5WZXJzaW9uKFxuICAgICAgICB0aGlzLFxuICAgICAgICBcIkF1dG9SZW1lZGlhdGVFQzJEYXNoMDAzTGFtYmRhVmVyc2lvbmhiU285eVQ3MnVEVlJZMVNNNENscm9nQmlTVEtUOWR1SXNqNUZoTmM2VVwiLFxuICAgICAgICB7XG4gICAgICAgICAgZnVuY3Rpb25OYW1lOiBhdXRvUmVtZWRpYXRlRWMyRGFzaDAwM0xhbWJkYUZ1bmN0aW9uLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICBjb2RlU2hhMjU2OiBcImhHZGZpeFplSnZNZmhzK0J2SFpXaG5kM1JmUFAxM1Y1clpmbFQ4OWw0TlE9XCIsXG4gICAgICAgIH0sXG4gICAgICApO1xuICAgIGF1dG9SZW1lZGlhdGVFYzJEYXNoMDAzTGFtYmRhVmVyc2lvbmhiU285eVQ3MnVEdnJ5MXNtNENscm9nQmlTdGt0OWR1SXNqNUZoTmM2VS5jZm5PcHRpb25zLmRlbGV0aW9uUG9saWN5ID1cbiAgICAgIGNkay5DZm5EZWxldGlvblBvbGljeS5SRVRBSU47XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlRWMyRGFzaDAwNExhbWJkYVZlcnNpb25aNXpZaDNYcEd6WmE3OG16OWw4SWwxQmdZdEp1YWU4SVZ1bnJOdEdkZVBvID1cbiAgICAgIG5ldyBsYW1iZGEuQ2ZuVmVyc2lvbihcbiAgICAgICAgdGhpcyxcbiAgICAgICAgXCJBdXRvUmVtZWRpYXRlRUMyRGFzaDAwNExhbWJkYVZlcnNpb25aNXpZSDNYcEd6WkE3OG16OWw4SUwxQmdZVEp1YWU4SVZ1bnJOdEdERVBvXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBmdW5jdGlvbk5hbWU6IGF1dG9SZW1lZGlhdGVFYzJEYXNoMDA0TGFtYmRhRnVuY3Rpb24uZnVuY3Rpb25OYW1lLFxuICAgICAgICAgIGNvZGVTaGEyNTY6IFwiaEdkZml4WmVKdk1maHMrQnZIWldobmQzUmZQUDEzVjVyWmZsVDg5bDROUT1cIixcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgYXV0b1JlbWVkaWF0ZUVjMkRhc2gwMDRMYW1iZGFWZXJzaW9uWjV6WWgzWHBHelphNzhtejlsOElsMUJnWXRKdWFlOElWdW5yTnRHZGVQby5jZm5PcHRpb25zLmRlbGV0aW9uUG9saWN5ID1cbiAgICAgIGNkay5DZm5EZWxldGlvblBvbGljeS5SRVRBSU47XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlRWMyRGFzaDAwNUxhbWJkYVZlcnNpb252Szk4NzV3MGhkRnhMc0h0ZVZnQ3pJeVBmN3JoT3FlYTY2d3cwYUJ3ID1cbiAgICAgIG5ldyBsYW1iZGEuQ2ZuVmVyc2lvbihcbiAgICAgICAgdGhpcyxcbiAgICAgICAgXCJBdXRvUmVtZWRpYXRlRUMyRGFzaDAwNUxhbWJkYVZlcnNpb252Szk4NzVXMGhkRnhMc0h0ZVZHQ3pJWVBmN3JoT1FFQTY2d3cwYUJ3XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBmdW5jdGlvbk5hbWU6IGF1dG9SZW1lZGlhdGVFYzJEYXNoMDA1TGFtYmRhRnVuY3Rpb24uZnVuY3Rpb25OYW1lLFxuICAgICAgICAgIGNvZGVTaGEyNTY6IFwiaEdkZml4WmVKdk1maHMrQnZIWldobmQzUmZQUDEzVjVyWmZsVDg5bDROUT1cIixcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgYXV0b1JlbWVkaWF0ZUVjMkRhc2gwMDVMYW1iZGFWZXJzaW9udks5ODc1dzBoZEZ4THNIdGVWZ0N6SXlQZjdyaE9xZWE2Nnd3MGFCdy5jZm5PcHRpb25zLmRlbGV0aW9uUG9saWN5ID1cbiAgICAgIGNkay5DZm5EZWxldGlvblBvbGljeS5SRVRBSU47XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlRWMyRGFzaDAwNkxhbWJkYVZlcnNpb25HNEdjYjkxaTZvZDRQV3BsSTJ4SFprSzFtV3BMaWc1TmN1MFpjWjdxRTJxID1cbiAgICAgIG5ldyBsYW1iZGEuQ2ZuVmVyc2lvbihcbiAgICAgICAgdGhpcyxcbiAgICAgICAgXCJBdXRvUmVtZWRpYXRlRUMyRGFzaDAwNkxhbWJkYVZlcnNpb25HNEdjYjkxaTZvZDRQV3BsSTJ4SFprSzFtV3BMaWc1TkNVMFpjWjdxRTJRXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBmdW5jdGlvbk5hbWU6IGF1dG9SZW1lZGlhdGVFYzJEYXNoMDA2TGFtYmRhRnVuY3Rpb24uZnVuY3Rpb25OYW1lLFxuICAgICAgICAgIGNvZGVTaGEyNTY6IFwiaEdkZml4WmVKdk1maHMrQnZIWldobmQzUmZQUDEzVjVyWmZsVDg5bDROUT1cIixcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgYXV0b1JlbWVkaWF0ZUVjMkRhc2gwMDZMYW1iZGFWZXJzaW9uRzRHY2I5MWk2b2Q0UFdwbEkyeEhaa0sxbVdwTGlnNU5jdTBaY1o3cUUycS5jZm5PcHRpb25zLmRlbGV0aW9uUG9saWN5ID1cbiAgICAgIGNkay5DZm5EZWxldGlvblBvbGljeS5SRVRBSU47XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlRWMyRGFzaDAwOExhbWJkYVZlcnNpb25TNjhtTEh6c2R1Z2VoQXdYbVladFVkZzdCMXZ0ZXlXenRhNjRVbHkgPVxuICAgICAgbmV3IGxhbWJkYS5DZm5WZXJzaW9uKFxuICAgICAgICB0aGlzLFxuICAgICAgICBcIkF1dG9SZW1lZGlhdGVFQzJEYXNoMDA4TGFtYmRhVmVyc2lvblM2OG1MSHpzZHVnZWhBd1htWVp0VWRnN0IxdnRleVd6dGE2NFVMWVwiLFxuICAgICAgICB7XG4gICAgICAgICAgZnVuY3Rpb25OYW1lOiBhdXRvUmVtZWRpYXRlRWMyRGFzaDAwOExhbWJkYUZ1bmN0aW9uLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICBjb2RlU2hhMjU2OiBcImhHZGZpeFplSnZNZmhzK0J2SFpXaG5kM1JmUFAxM1Y1clpmbFQ4OWw0TlE9XCIsXG4gICAgICAgIH0sXG4gICAgICApO1xuICAgIGF1dG9SZW1lZGlhdGVFYzJEYXNoMDA4TGFtYmRhVmVyc2lvblM2OG1MSHpzZHVnZWhBd1htWVp0VWRnN0IxdnRleVd6dGE2NFVseS5jZm5PcHRpb25zLmRlbGV0aW9uUG9saWN5ID1cbiAgICAgIGNkay5DZm5EZWxldGlvblBvbGljeS5SRVRBSU47XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlRWMyRGFzaDAxOUxhbWJkYVZlcnNpb25RMnJIS2NwZTVZeDZNS2tOdXNEYTkwdlpmMzdKendCb2g3YVVQY2xHd1dvID1cbiAgICAgIG5ldyBsYW1iZGEuQ2ZuVmVyc2lvbihcbiAgICAgICAgdGhpcyxcbiAgICAgICAgXCJBdXRvUmVtZWRpYXRlRUMyRGFzaDAxOUxhbWJkYVZlcnNpb25RMnJIS2NwZTVZeDZNS2tOVVNEYTkwdlpGMzdKendCb2g3YVVQY2xHV1dvXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBmdW5jdGlvbk5hbWU6IGF1dG9SZW1lZGlhdGVFYzJEYXNoMDE5TGFtYmRhRnVuY3Rpb24uZnVuY3Rpb25OYW1lLFxuICAgICAgICAgIGNvZGVTaGEyNTY6IFwiaEdkZml4WmVKdk1maHMrQnZIWldobmQzUmZQUDEzVjVyWmZsVDg5bDROUT1cIixcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgYXV0b1JlbWVkaWF0ZUVjMkRhc2gwMTlMYW1iZGFWZXJzaW9uUTJySEtjcGU1WXg2TUtrTnVzRGE5MHZaZjM3Snp3Qm9oN2FVUGNsR3dXby5jZm5PcHRpb25zLmRlbGV0aW9uUG9saWN5ID1cbiAgICAgIGNkay5DZm5EZWxldGlvblBvbGljeS5SRVRBSU47XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlRWMyRGFzaDAzOExhbWJkYVZlcnNpb25GUXRzeTRvbW41Qld1cmxmTnJiWThqcHRDaVhySHE4Y1U0TXFvb09FZ2MgPVxuICAgICAgbmV3IGxhbWJkYS5DZm5WZXJzaW9uKFxuICAgICAgICB0aGlzLFxuICAgICAgICBcIkF1dG9SZW1lZGlhdGVFQzJEYXNoMDM4TGFtYmRhVmVyc2lvbkZRdHN5NG9tbjVCV3VybGZOcmJZOEpQVENpWHJIcThjVTRNcW9vT0VnY1wiLFxuICAgICAgICB7XG4gICAgICAgICAgZnVuY3Rpb25OYW1lOiBhdXRvUmVtZWRpYXRlRWMyRGFzaDAzOExhbWJkYUZ1bmN0aW9uLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICBjb2RlU2hhMjU2OiBcImhHZGZpeFplSnZNZmhzK0J2SFpXaG5kM1JmUFAxM1Y1clpmbFQ4OWw0TlE9XCIsXG4gICAgICAgIH0sXG4gICAgICApO1xuICAgIGF1dG9SZW1lZGlhdGVFYzJEYXNoMDM4TGFtYmRhVmVyc2lvbkZRdHN5NG9tbjVCV3VybGZOcmJZOGpwdENpWHJIcThjVTRNcW9vT0VnYy5jZm5PcHRpb25zLmRlbGV0aW9uUG9saWN5ID1cbiAgICAgIGNkay5DZm5EZWxldGlvblBvbGljeS5SRVRBSU47XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlRWMyRGFzaDAzOUxhbWJkYVZlcnNpb252T21ERnJFalpvdHg2YndQOWxObHVhMTVucVRyV2RtcE9jUzdmUXA3ZSA9XG4gICAgICBuZXcgbGFtYmRhLkNmblZlcnNpb24oXG4gICAgICAgIHRoaXMsXG4gICAgICAgIFwiQXV0b1JlbWVkaWF0ZUVDMkRhc2gwMzlMYW1iZGFWZXJzaW9udk9tREZyRWpaT1RYNmJ3UDlMTmx1YTE1bnFUUldkbXBPY1M3ZlFQN0VcIixcbiAgICAgICAge1xuICAgICAgICAgIGZ1bmN0aW9uTmFtZTogYXV0b1JlbWVkaWF0ZUVjMkRhc2gwMzlMYW1iZGFGdW5jdGlvbi5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgY29kZVNoYTI1NjogXCJoR2RmaXhaZUp2TWZocytCdkhaV2huZDNSZlBQMTNWNXJaZmxUODlsNE5RPVwiLFxuICAgICAgICB9LFxuICAgICAgKTtcbiAgICBhdXRvUmVtZWRpYXRlRWMyRGFzaDAzOUxhbWJkYVZlcnNpb252T21ERnJFalpvdHg2YndQOWxObHVhMTVucVRyV2RtcE9jUzdmUXA3ZS5jZm5PcHRpb25zLmRlbGV0aW9uUG9saWN5ID1cbiAgICAgIGNkay5DZm5EZWxldGlvblBvbGljeS5SRVRBSU47XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlRWMyRGFzaDA0MExhbWJkYVZlcnNpb25qQ3RFZEtkRG90NlZuQWREdXZNck52WW1qczNvSXFYYlM4a1J3NEs1bllzID1cbiAgICAgIG5ldyBsYW1iZGEuQ2ZuVmVyc2lvbihcbiAgICAgICAgdGhpcyxcbiAgICAgICAgXCJBdXRvUmVtZWRpYXRlRUMyRGFzaDA0MExhbWJkYVZlcnNpb25qQ3RFZEtkRE9UNlZuQUREdXZNUk52WU1KUzNPSXFYYlM4S1J3NEs1TllzXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBmdW5jdGlvbk5hbWU6IGF1dG9SZW1lZGlhdGVFYzJEYXNoMDQwTGFtYmRhRnVuY3Rpb24uZnVuY3Rpb25OYW1lLFxuICAgICAgICAgIGNvZGVTaGEyNTY6IFwiaEdkZml4WmVKdk1maHMrQnZIWldobmQzUmZQUDEzVjVyWmZsVDg5bDROUT1cIixcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgYXV0b1JlbWVkaWF0ZUVjMkRhc2gwNDBMYW1iZGFWZXJzaW9uakN0RWRLZERvdDZWbkFkRHV2TXJOdlltanMzb0lxWGJTOGtSdzRLNW5Zcy5jZm5PcHRpb25zLmRlbGV0aW9uUG9saWN5ID1cbiAgICAgIGNkay5DZm5EZWxldGlvblBvbGljeS5SRVRBSU47XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlRWMyRGFzaDA0M0xhbWJkYVZlcnNpb25odWZ5SXk0Rnh0Z1JsWHhtNWVoMHgxelRtdlBpTmdxV2h0and4Ykw3ckNzID1cbiAgICAgIG5ldyBsYW1iZGEuQ2ZuVmVyc2lvbihcbiAgICAgICAgdGhpcyxcbiAgICAgICAgXCJBdXRvUmVtZWRpYXRlRUMyRGFzaDA0M0xhbWJkYVZlcnNpb25odWZ5SVk0Rnh0Z1JsWHhtNWVoMHgxelRtdlBpTkdRV2h0and4Ykw3UkNzXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBmdW5jdGlvbk5hbWU6IGF1dG9SZW1lZGlhdGVFYzJEYXNoMDQzTGFtYmRhRnVuY3Rpb24uZnVuY3Rpb25OYW1lLFxuICAgICAgICAgIGNvZGVTaGEyNTY6IFwiaEdkZml4WmVKdk1maHMrQnZIWldobmQzUmZQUDEzVjVyWmZsVDg5bDROUT1cIixcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgYXV0b1JlbWVkaWF0ZUVjMkRhc2gwNDNMYW1iZGFWZXJzaW9uaHVmeUl5NEZ4dGdSbFh4bTVlaDB4MXpUbXZQaU5ncVdodGp3eGJMN3JDcy5jZm5PcHRpb25zLmRlbGV0aW9uUG9saWN5ID1cbiAgICAgIGNkay5DZm5EZWxldGlvblBvbGljeS5SRVRBSU47XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlRWMyRGFzaDA0NUxhbWJkYVZlcnNpb25pS0JjVmtIdDNmcXRQNjNFbGZKOXo2dlo2YlVlV2EwT21EcVRpVXhSZSA9XG4gICAgICBuZXcgbGFtYmRhLkNmblZlcnNpb24oXG4gICAgICAgIHRoaXMsXG4gICAgICAgIFwiQXV0b1JlbWVkaWF0ZUVDMkRhc2gwNDVMYW1iZGFWZXJzaW9uaUtCY1ZrSHQzZnF0UDYzRWxmSjlaNnZaNkJVZVdhME9NRHFUSVV4UkVcIixcbiAgICAgICAge1xuICAgICAgICAgIGZ1bmN0aW9uTmFtZTogYXV0b1JlbWVkaWF0ZUVjMkRhc2gwNDVMYW1iZGFGdW5jdGlvbi5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgY29kZVNoYTI1NjogXCJoR2RmaXhaZUp2TWZocytCdkhaV2huZDNSZlBQMTNWNXJaZmxUODlsNE5RPVwiLFxuICAgICAgICB9LFxuICAgICAgKTtcbiAgICBhdXRvUmVtZWRpYXRlRWMyRGFzaDA0NUxhbWJkYVZlcnNpb25pS0JjVmtIdDNmcXRQNjNFbGZKOXo2dlo2YlVlV2EwT21EcVRpVXhSZS5jZm5PcHRpb25zLmRlbGV0aW9uUG9saWN5ID1cbiAgICAgIGNkay5DZm5EZWxldGlvblBvbGljeS5SRVRBSU47XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlR2REYXNoMDAxTGFtYmRhVmVyc2lvbms3bjNNcEdrOEZnZEdzRXZKeUg1YzBDN3RLZTlmU2o3eWdqWXk2dHNYOCA9XG4gICAgICBuZXcgbGFtYmRhLkNmblZlcnNpb24oXG4gICAgICAgIHRoaXMsXG4gICAgICAgIFwiQXV0b1JlbWVkaWF0ZUdERGFzaDAwMUxhbWJkYVZlcnNpb25rN24zTXBHazhGR0RHc0VWSnlINWMwQzd0S0U5ZlNqN3lnall5NnRzWDhcIixcbiAgICAgICAge1xuICAgICAgICAgIGZ1bmN0aW9uTmFtZTogYXV0b1JlbWVkaWF0ZUdkRGFzaDAwMUxhbWJkYUZ1bmN0aW9uLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICBjb2RlU2hhMjU2OiBcImhHZGZpeFplSnZNZmhzK0J2SFpXaG5kM1JmUFAxM1Y1clpmbFQ4OWw0TlE9XCIsXG4gICAgICAgIH0sXG4gICAgICApO1xuICAgIGF1dG9SZW1lZGlhdGVHZERhc2gwMDFMYW1iZGFWZXJzaW9uazduM01wR2s4RmdkR3NFdkp5SDVjMEM3dEtlOWZTajd5Z2pZeTZ0c1g4LmNmbk9wdGlvbnMuZGVsZXRpb25Qb2xpY3kgPVxuICAgICAgY2RrLkNmbkRlbGV0aW9uUG9saWN5LlJFVEFJTjtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVJYW1EYXNoMDAxTGFtYmRhVmVyc2lvbkxlY3RadHBJcndHaHBkMDVDMWhHVHJsV3NHcGEyVVdsVVpxcDdMNVN5byA9XG4gICAgICBuZXcgbGFtYmRhLkNmblZlcnNpb24oXG4gICAgICAgIHRoaXMsXG4gICAgICAgIFwiQXV0b1JlbWVkaWF0ZUlBTURhc2gwMDFMYW1iZGFWZXJzaW9uTGVjdFp0cElSV0docGQwNUMxaEdUcmxXU0dwYTJVV2xVWnFwN0w1U3lvXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBmdW5jdGlvbk5hbWU6IGF1dG9SZW1lZGlhdGVJYW1EYXNoMDAxTGFtYmRhRnVuY3Rpb24uZnVuY3Rpb25OYW1lLFxuICAgICAgICAgIGNvZGVTaGEyNTY6IFwiaEdkZml4WmVKdk1maHMrQnZIWldobmQzUmZQUDEzVjVyWmZsVDg5bDROUT1cIixcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgYXV0b1JlbWVkaWF0ZUlhbURhc2gwMDFMYW1iZGFWZXJzaW9uTGVjdFp0cElyd0docGQwNUMxaEdUcmxXc0dwYTJVV2xVWnFwN0w1U3lvLmNmbk9wdGlvbnMuZGVsZXRpb25Qb2xpY3kgPVxuICAgICAgY2RrLkNmbkRlbGV0aW9uUG9saWN5LlJFVEFJTjtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVJYW1EYXNoMDI5TGFtYmRhVmVyc2lvblZZZ3lucHVsb1dsTHlhaGZ2Q2xDY3o4aGhwWGNPY0ljOVpyeVhzSmk3dzggPVxuICAgICAgbmV3IGxhbWJkYS5DZm5WZXJzaW9uKFxuICAgICAgICB0aGlzLFxuICAgICAgICBcIkF1dG9SZW1lZGlhdGVJQU1EYXNoMDI5TGFtYmRhVmVyc2lvblZZZ3lucHVsb1dsTFlBSEZWQ2xDY3o4aGhwWENPY0ljOVpSWVhzSkk3VzhcIixcbiAgICAgICAge1xuICAgICAgICAgIGZ1bmN0aW9uTmFtZTogYXV0b1JlbWVkaWF0ZUlhbURhc2gwMjlMYW1iZGFGdW5jdGlvbi5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgY29kZVNoYTI1NjogXCJoR2RmaXhaZUp2TWZocytCdkhaV2huZDNSZlBQMTNWNXJaZmxUODlsNE5RPVwiLFxuICAgICAgICB9LFxuICAgICAgKTtcbiAgICBhdXRvUmVtZWRpYXRlSWFtRGFzaDAyOUxhbWJkYVZlcnNpb25WWWd5bnB1bG9XbEx5YWhmdkNsQ2N6OGhocFhjT2NJYzlacnlYc0ppN3c4LmNmbk9wdGlvbnMuZGVsZXRpb25Qb2xpY3kgPVxuICAgICAgY2RrLkNmbkRlbGV0aW9uUG9saWN5LlJFVEFJTjtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVJYW1EYXNoMDM4TGFtYmRhVmVyc2lvbjVjb1JtVzJDcFF1ZWZyVXRxamFXZWhmMHNNbW8wNkZxSnA0eVVtTHE4ID1cbiAgICAgIG5ldyBsYW1iZGEuQ2ZuVmVyc2lvbihcbiAgICAgICAgdGhpcyxcbiAgICAgICAgXCJBdXRvUmVtZWRpYXRlSUFNRGFzaDAzOExhbWJkYVZlcnNpb241Y29SbVcyQ3BRVUVGUlV0cWphV2VoZjBzTU1PMDZGcUpQNHlVTUxxOFwiLFxuICAgICAgICB7XG4gICAgICAgICAgZnVuY3Rpb25OYW1lOiBhdXRvUmVtZWRpYXRlSWFtRGFzaDAzOExhbWJkYUZ1bmN0aW9uLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICBjb2RlU2hhMjU2OiBcImhHZGZpeFplSnZNZmhzK0J2SFpXaG5kM1JmUFAxM1Y1clpmbFQ4OWw0TlE9XCIsXG4gICAgICAgIH0sXG4gICAgICApO1xuICAgIGF1dG9SZW1lZGlhdGVJYW1EYXNoMDM4TGFtYmRhVmVyc2lvbjVjb1JtVzJDcFF1ZWZyVXRxamFXZWhmMHNNbW8wNkZxSnA0eVVtTHE4LmNmbk9wdGlvbnMuZGVsZXRpb25Qb2xpY3kgPVxuICAgICAgY2RrLkNmbkRlbGV0aW9uUG9saWN5LlJFVEFJTjtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVLbXNEYXNoMDAyTGFtYmRhVmVyc2lvblA2b3FzRGt0QTVlMHBRa2laMll6dVdreUo3YUI3aXJEc2k2QXRlOGRsMjAgPVxuICAgICAgbmV3IGxhbWJkYS5DZm5WZXJzaW9uKFxuICAgICAgICB0aGlzLFxuICAgICAgICBcIkF1dG9SZW1lZGlhdGVLTVNEYXNoMDAyTGFtYmRhVmVyc2lvblA2T1FTRGt0QTVlMHBRa2laMll6dVdreUo3YUI3aXJEU0k2QXRlOGRsMjBcIixcbiAgICAgICAge1xuICAgICAgICAgIGZ1bmN0aW9uTmFtZTogYXV0b1JlbWVkaWF0ZUttc0Rhc2gwMDJMYW1iZGFGdW5jdGlvbi5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgY29kZVNoYTI1NjogXCJoR2RmaXhaZUp2TWZocytCdkhaV2huZDNSZlBQMTNWNXJaZmxUODlsNE5RPVwiLFxuICAgICAgICB9LFxuICAgICAgKTtcbiAgICBhdXRvUmVtZWRpYXRlS21zRGFzaDAwMkxhbWJkYVZlcnNpb25QNm9xc0RrdEE1ZTBwUWtpWjJZenVXa3lKN2FCN2lyRHNpNkF0ZThkbDIwLmNmbk9wdGlvbnMuZGVsZXRpb25Qb2xpY3kgPVxuICAgICAgY2RrLkNmbkRlbGV0aW9uUG9saWN5LlJFVEFJTjtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVLbXNEYXNoMDA0TGFtYmRhVmVyc2lvbm5ncXE0NlpwNEZMamF0YVl6eHU2WHhZV200MEtnMndQY0RmbjFlQm9BZ2cgPVxuICAgICAgbmV3IGxhbWJkYS5DZm5WZXJzaW9uKFxuICAgICAgICB0aGlzLFxuICAgICAgICBcIkF1dG9SZW1lZGlhdGVLTVNEYXNoMDA0TGFtYmRhVmVyc2lvbm5ncXE0NlpwNEZMamF0YVl6eHU2WHhZV200MEtHMldQY0RGTjFFQm9BZ2dcIixcbiAgICAgICAge1xuICAgICAgICAgIGZ1bmN0aW9uTmFtZTogYXV0b1JlbWVkaWF0ZUttc0Rhc2gwMDRMYW1iZGFGdW5jdGlvbi5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgY29kZVNoYTI1NjogXCJoR2RmaXhaZUp2TWZocytCdkhaV2huZDNSZlBQMTNWNXJaZmxUODlsNE5RPVwiLFxuICAgICAgICB9LFxuICAgICAgKTtcbiAgICBhdXRvUmVtZWRpYXRlS21zRGFzaDAwNExhbWJkYVZlcnNpb25uZ3FxNDZacDRGTGphdGFZenh1Nlh4WVdtNDBLZzJ3UGNEZm4xZUJvQWdnLmNmbk9wdGlvbnMuZGVsZXRpb25Qb2xpY3kgPVxuICAgICAgY2RrLkNmbkRlbGV0aW9uUG9saWN5LlJFVEFJTjtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVLaW5lc2lzRGFzaDAwMUxhbWJkYVZlcnNpb25LTHF3ZzJuSGowTXNuaXBEbkFhS2FsTmZMMFp5bXZEbkJobktIcDA0ID1cbiAgICAgIG5ldyBsYW1iZGEuQ2ZuVmVyc2lvbihcbiAgICAgICAgdGhpcyxcbiAgICAgICAgXCJBdXRvUmVtZWRpYXRlS2luZXNpc0Rhc2gwMDFMYW1iZGFWZXJzaW9uS0xxd2cybkhKME1zbmlwRE5BYUtBTE5mTDBaeW12RG5CaG5LSHAwNFwiLFxuICAgICAgICB7XG4gICAgICAgICAgZnVuY3Rpb25OYW1lOiBhdXRvUmVtZWRpYXRlS2luZXNpc0Rhc2gwMDFMYW1iZGFGdW5jdGlvbi5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgY29kZVNoYTI1NjogXCJoR2RmaXhaZUp2TWZocytCdkhaV2huZDNSZlBQMTNWNXJaZmxUODlsNE5RPVwiLFxuICAgICAgICB9LFxuICAgICAgKTtcbiAgICBhdXRvUmVtZWRpYXRlS2luZXNpc0Rhc2gwMDFMYW1iZGFWZXJzaW9uS0xxd2cybkhqME1zbmlwRG5BYUthbE5mTDBaeW12RG5CaG5LSHAwNC5jZm5PcHRpb25zLmRlbGV0aW9uUG9saWN5ID1cbiAgICAgIGNkay5DZm5EZWxldGlvblBvbGljeS5SRVRBSU47XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlTGFtYmRhRGFzaDAwM0xhbWJkYVZlcnNpb25JcjE1VHM2NUlteFlaYjN5TWluM1pkcnE1eEhxQzBsU2xnZmNHU2ZVID1cbiAgICAgIG5ldyBsYW1iZGEuQ2ZuVmVyc2lvbihcbiAgICAgICAgdGhpcyxcbiAgICAgICAgXCJBdXRvUmVtZWRpYXRlTGFtYmRhRGFzaDAwM0xhbWJkYVZlcnNpb25JcjE1VHM2NUlteFlaYjN5TUlOM1pkcnE1eEhxQzBsU2xnZmNHU2ZVXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBmdW5jdGlvbk5hbWU6IGF1dG9SZW1lZGlhdGVMYW1iZGFEYXNoMDAzTGFtYmRhRnVuY3Rpb24uZnVuY3Rpb25OYW1lLFxuICAgICAgICAgIGNvZGVTaGEyNTY6IFwiaEdkZml4WmVKdk1maHMrQnZIWldobmQzUmZQUDEzVjVyWmZsVDg5bDROUT1cIixcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgYXV0b1JlbWVkaWF0ZUxhbWJkYURhc2gwMDNMYW1iZGFWZXJzaW9uSXIxNVRzNjVJbXhZWmIzeU1pbjNaZHJxNXhIcUMwbFNsZ2ZjR1NmVS5jZm5PcHRpb25zLmRlbGV0aW9uUG9saWN5ID1cbiAgICAgIGNkay5DZm5EZWxldGlvblBvbGljeS5SRVRBSU47XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlT3JnYW5pemF0aW9uc0Rhc2gwMDJMYW1iZGFWZXJzaW9uVmJ3OHE2bmlMR2JkeThQRHpKejJtZnZXeUJlNWRDclVyelplN1YyZ2ZrID1cbiAgICAgIG5ldyBsYW1iZGEuQ2ZuVmVyc2lvbihcbiAgICAgICAgdGhpcyxcbiAgICAgICAgXCJBdXRvUmVtZWRpYXRlT3JnYW5pemF0aW9uc0Rhc2gwMDJMYW1iZGFWZXJzaW9uVkJXOFE2bmlMR2JkeThQRHpKWjJNRlZXeUJFNURDclVSWlplN1YyZ2ZrXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBmdW5jdGlvbk5hbWU6XG4gICAgICAgICAgICBhdXRvUmVtZWRpYXRlT3JnYW5pemF0aW9uc0Rhc2gwMDJMYW1iZGFGdW5jdGlvbi5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgY29kZVNoYTI1NjogXCJoR2RmaXhaZUp2TWZocytCdkhaV2huZDNSZlBQMTNWNXJaZmxUODlsNE5RPVwiLFxuICAgICAgICB9LFxuICAgICAgKTtcbiAgICBhdXRvUmVtZWRpYXRlT3JnYW5pemF0aW9uc0Rhc2gwMDJMYW1iZGFWZXJzaW9uVmJ3OHE2bmlMR2JkeThQRHpKejJtZnZXeUJlNWRDclVyelplN1YyZ2ZrLmNmbk9wdGlvbnMuZGVsZXRpb25Qb2xpY3kgPVxuICAgICAgY2RrLkNmbkRlbGV0aW9uUG9saWN5LlJFVEFJTjtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVRdWV1ZSA9IG5ldyBzcXMuQ2ZuUXVldWUodGhpcywgXCJBdXRvUmVtZWRpYXRlUXVldWVcIiwge1xuICAgICAgcXVldWVOYW1lOiBcImF1dG8tcmVtZWRpYXRlLXYxLXF1ZXVlXCIsXG4gICAgICB2aXNpYmlsaXR5VGltZW91dDogMTAsXG4gICAgICBkZWxheVNlY29uZHM6IDMsXG4gICAgICByZWRyaXZlUG9saWN5OiB7XG4gICAgICAgIGRlYWRMZXR0ZXJUYXJnZXRBcm46IGF1dG9SZW1lZGlhdGVRdWV1ZURscS5hdHRyQXJuLFxuICAgICAgICBtYXhSZWNlaXZlQ291bnQ6IDMsXG4gICAgICB9LFxuICAgICAga21zTWFzdGVyS2V5SWQ6IGttc0tleVNxc1F1ZXVlRnJvbVNucy5hdHRyQXJuLFxuICAgICAgdGFnczogW1xuICAgICAgICB7XG4gICAgICAgICAga2V5OiBcIlNlcnZpY2VcIixcbiAgICAgICAgICB2YWx1ZTogXCJhdXRvLXJlbWVkaWF0ZVwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiBcIk5hbWVcIixcbiAgICAgICAgICB2YWx1ZTogXCJBdXRvUmVtZWRpYXRlUXVldWVcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGtleTogXCJPd25lclwiLFxuICAgICAgICAgIHZhbHVlOiBcIkNsb3VkQ29uZm9ybWl0eVwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVSZHNEYXNoMDA2TGFtYmRhVmVyc2lvbk9YajRLZE9YZERvUEpnT3RSY3BkV21HVWhLODhjd1l6WWtNbW1yZFZhcyA9XG4gICAgICBuZXcgbGFtYmRhLkNmblZlcnNpb24oXG4gICAgICAgIHRoaXMsXG4gICAgICAgIFwiQXV0b1JlbWVkaWF0ZVJEU0Rhc2gwMDZMYW1iZGFWZXJzaW9uT1hqNEtkT1hkRG9QSmdPdFJDUERXbUdVaEs4OGN3WVpZa01NTVJEVmFzXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBmdW5jdGlvbk5hbWU6IGF1dG9SZW1lZGlhdGVSZHNEYXNoMDA2TGFtYmRhRnVuY3Rpb24uZnVuY3Rpb25OYW1lLFxuICAgICAgICAgIGNvZGVTaGEyNTY6IFwiaEdkZml4WmVKdk1maHMrQnZIWldobmQzUmZQUDEzVjVyWmZsVDg5bDROUT1cIixcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgYXV0b1JlbWVkaWF0ZVJkc0Rhc2gwMDZMYW1iZGFWZXJzaW9uT1hqNEtkT1hkRG9QSmdPdFJjcGRXbUdVaEs4OGN3WXpZa01tbXJkVmFzLmNmbk9wdGlvbnMuZGVsZXRpb25Qb2xpY3kgPVxuICAgICAgY2RrLkNmbkRlbGV0aW9uUG9saWN5LlJFVEFJTjtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVSZHNEYXNoMDA4TGFtYmRhVmVyc2lvbmZlZk50M0R3c0l1N1l5c2syOWw2NmxNcHRxOEF0ZnZVY1VoVW1JaEdjID1cbiAgICAgIG5ldyBsYW1iZGEuQ2ZuVmVyc2lvbihcbiAgICAgICAgdGhpcyxcbiAgICAgICAgXCJBdXRvUmVtZWRpYXRlUkRTRGFzaDAwOExhbWJkYVZlcnNpb25mZWZOdDNEd3NJdTdZeXNrMjlsNjZsTVBUUThBdGZ2VUNVaFVtSUhHY1wiLFxuICAgICAgICB7XG4gICAgICAgICAgZnVuY3Rpb25OYW1lOiBhdXRvUmVtZWRpYXRlUmRzRGFzaDAwOExhbWJkYUZ1bmN0aW9uLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICBjb2RlU2hhMjU2OiBcImhHZGZpeFplSnZNZmhzK0J2SFpXaG5kM1JmUFAxM1Y1clpmbFQ4OWw0TlE9XCIsXG4gICAgICAgIH0sXG4gICAgICApO1xuICAgIGF1dG9SZW1lZGlhdGVSZHNEYXNoMDA4TGFtYmRhVmVyc2lvbmZlZk50M0R3c0l1N1l5c2syOWw2NmxNcHRxOEF0ZnZVY1VoVW1JaEdjLmNmbk9wdGlvbnMuZGVsZXRpb25Qb2xpY3kgPVxuICAgICAgY2RrLkNmbkRlbGV0aW9uUG9saWN5LlJFVEFJTjtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVSZHNEYXNoMDIzTGFtYmRhVmVyc2lvbjVsaVFyOU5Lb2hZd0pkQ21COHVXckp4bmZ2cnU0a1J5ckJtNVVtMHlPYyA9XG4gICAgICBuZXcgbGFtYmRhLkNmblZlcnNpb24oXG4gICAgICAgIHRoaXMsXG4gICAgICAgIFwiQXV0b1JlbWVkaWF0ZVJEU0Rhc2gwMjNMYW1iZGFWZXJzaW9uNWxpUXI5TktvaFlXSmRDbUI4dVdySnhuZnZydTRrUllSQm01VU0wWU9jXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBmdW5jdGlvbk5hbWU6IGF1dG9SZW1lZGlhdGVSZHNEYXNoMDIzTGFtYmRhRnVuY3Rpb24uZnVuY3Rpb25OYW1lLFxuICAgICAgICAgIGNvZGVTaGEyNTY6IFwiaEdkZml4WmVKdk1maHMrQnZIWldobmQzUmZQUDEzVjVyWmZsVDg5bDROUT1cIixcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgYXV0b1JlbWVkaWF0ZVJkc0Rhc2gwMjNMYW1iZGFWZXJzaW9uNWxpUXI5TktvaFl3SmRDbUI4dVdySnhuZnZydTRrUnlyQm01VW0weU9jLmNmbk9wdGlvbnMuZGVsZXRpb25Qb2xpY3kgPVxuICAgICAgY2RrLkNmbkRlbGV0aW9uUG9saWN5LlJFVEFJTjtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVSc0Rhc2gwMDFMYW1iZGFWZXJzaW9uQnRDWXh5TDVZYWs0SjgzdEgxMW84d25WcnV1ejU1WGhiTXV5T2lMcmMgPVxuICAgICAgbmV3IGxhbWJkYS5DZm5WZXJzaW9uKFxuICAgICAgICB0aGlzLFxuICAgICAgICBcIkF1dG9SZW1lZGlhdGVSU0Rhc2gwMDFMYW1iZGFWZXJzaW9uQnRDWXh5TDVZYWs0SjgzdEgxMW84d25WcnV1ejU1WGhiTVVZT2lMcmNcIixcbiAgICAgICAge1xuICAgICAgICAgIGZ1bmN0aW9uTmFtZTogYXV0b1JlbWVkaWF0ZVJzRGFzaDAwMUxhbWJkYUZ1bmN0aW9uLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICBjb2RlU2hhMjU2OiBcImhHZGZpeFplSnZNZmhzK0J2SFpXaG5kM1JmUFAxM1Y1clpmbFQ4OWw0TlE9XCIsXG4gICAgICAgIH0sXG4gICAgICApO1xuICAgIGF1dG9SZW1lZGlhdGVSc0Rhc2gwMDFMYW1iZGFWZXJzaW9uQnRDWXh5TDVZYWs0SjgzdEgxMW84d25WcnV1ejU1WGhiTXV5T2lMcmMuY2ZuT3B0aW9ucy5kZWxldGlvblBvbGljeSA9XG4gICAgICBjZGsuQ2ZuRGVsZXRpb25Qb2xpY3kuUkVUQUlOO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZVJzRGFzaDAxOUxhbWJkYVZlcnNpb25LZnUybnZ3aVVndGNjZDU1YzJoMUpqazNxRmh3NjR0a1B3YWJLZTAyc00gPVxuICAgICAgbmV3IGxhbWJkYS5DZm5WZXJzaW9uKFxuICAgICAgICB0aGlzLFxuICAgICAgICBcIkF1dG9SZW1lZGlhdGVSU0Rhc2gwMTlMYW1iZGFWZXJzaW9uS2Z1Mm52d2lVR1RDQ0Q1NUMyaDFKSkszcUZodzY0dGtQd2FiS2UwMnNNXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBmdW5jdGlvbk5hbWU6IGF1dG9SZW1lZGlhdGVSc0Rhc2gwMTlMYW1iZGFGdW5jdGlvbi5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgY29kZVNoYTI1NjogXCJoR2RmaXhaZUp2TWZocytCdkhaV2huZDNSZlBQMTNWNXJaZmxUODlsNE5RPVwiLFxuICAgICAgICB9LFxuICAgICAgKTtcbiAgICBhdXRvUmVtZWRpYXRlUnNEYXNoMDE5TGFtYmRhVmVyc2lvbktmdTJudndpVWd0Y2NkNTVjMmgxSmprM3FGaHc2NHRrUHdhYktlMDJzTS5jZm5PcHRpb25zLmRlbGV0aW9uUG9saWN5ID1cbiAgICAgIGNkay5DZm5EZWxldGlvblBvbGljeS5SRVRBSU47XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlUnNEYXNoMDIzTGFtYmRhVmVyc2lvbjh4RVBxNFhCZUw3ZjlIOXhuNmpXRmZwcEt2NmtxOWNUemszYnh3N0FleEEgPVxuICAgICAgbmV3IGxhbWJkYS5DZm5WZXJzaW9uKFxuICAgICAgICB0aGlzLFxuICAgICAgICBcIkF1dG9SZW1lZGlhdGVSU0Rhc2gwMjNMYW1iZGFWZXJzaW9uOHhFUHE0WEJlTDdmOUg5eG42aldGZnBwS1Y2S1E5Y1RaSzNCWFc3QWV4QVwiLFxuICAgICAgICB7XG4gICAgICAgICAgZnVuY3Rpb25OYW1lOiBhdXRvUmVtZWRpYXRlUnNEYXNoMDIzTGFtYmRhRnVuY3Rpb24uZnVuY3Rpb25OYW1lLFxuICAgICAgICAgIGNvZGVTaGEyNTY6IFwiaEdkZml4WmVKdk1maHMrQnZIWldobmQzUmZQUDEzVjVyWmZsVDg5bDROUT1cIixcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgYXV0b1JlbWVkaWF0ZVJzRGFzaDAyM0xhbWJkYVZlcnNpb244eEVQcTRYQmVMN2Y5SDl4bjZqV0ZmcHBLdjZrcTljVHprM2J4dzdBZXhBLmNmbk9wdGlvbnMuZGVsZXRpb25Qb2xpY3kgPVxuICAgICAgY2RrLkNmbkRlbGV0aW9uUG9saWN5LlJFVEFJTjtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVTM0Rhc2gwMDFMYW1iZGFWZXJzaW9uU0lsTlB2VjhnWGE2WWptMTF1OW5JaVNCdmVBbGt1b2hrUWRCRm9IY0VvID1cbiAgICAgIG5ldyBsYW1iZGEuQ2ZuVmVyc2lvbihcbiAgICAgICAgdGhpcyxcbiAgICAgICAgXCJBdXRvUmVtZWRpYXRlUzNEYXNoMDAxTGFtYmRhVmVyc2lvblNJbE5QdlY4R1hhNllKTTExVTlOSWlTQnZlQUxLVU9IS1FkQkZvSGNFb1wiLFxuICAgICAgICB7XG4gICAgICAgICAgZnVuY3Rpb25OYW1lOiBhdXRvUmVtZWRpYXRlUzNEYXNoMDAxTGFtYmRhRnVuY3Rpb24uZnVuY3Rpb25OYW1lLFxuICAgICAgICAgIGNvZGVTaGEyNTY6IFwiaEdkZml4WmVKdk1maHMrQnZIWldobmQzUmZQUDEzVjVyWmZsVDg5bDROUT1cIixcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgYXV0b1JlbWVkaWF0ZVMzRGFzaDAwMUxhbWJkYVZlcnNpb25TSWxOUHZWOGdYYTZZam0xMXU5bklpU0J2ZUFsa3VvaGtRZEJGb0hjRW8uY2ZuT3B0aW9ucy5kZWxldGlvblBvbGljeSA9XG4gICAgICBjZGsuQ2ZuRGVsZXRpb25Qb2xpY3kuUkVUQUlOO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZVMzRGFzaDAwMkxhbWJkYVZlcnNpb25vWnRVcUc1cHVoV3JBeHUyQXdlUkFjSmZ0ZXh1RHBGM3d3d1VyRTNyRSA9XG4gICAgICBuZXcgbGFtYmRhLkNmblZlcnNpb24oXG4gICAgICAgIHRoaXMsXG4gICAgICAgIFwiQXV0b1JlbWVkaWF0ZVMzRGFzaDAwMkxhbWJkYVZlcnNpb25vWnRVcUc1cHVoV3JBeHUyQXdlUkFjSkZURVhVRHBGM1dXV1VyRTNyRVwiLFxuICAgICAgICB7XG4gICAgICAgICAgZnVuY3Rpb25OYW1lOiBhdXRvUmVtZWRpYXRlUzNEYXNoMDAyTGFtYmRhRnVuY3Rpb24uZnVuY3Rpb25OYW1lLFxuICAgICAgICAgIGNvZGVTaGEyNTY6IFwiaEdkZml4WmVKdk1maHMrQnZIWldobmQzUmZQUDEzVjVyWmZsVDg5bDROUT1cIixcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgYXV0b1JlbWVkaWF0ZVMzRGFzaDAwMkxhbWJkYVZlcnNpb25vWnRVcUc1cHVoV3JBeHUyQXdlUkFjSmZ0ZXh1RHBGM3d3d1VyRTNyRS5jZm5PcHRpb25zLmRlbGV0aW9uUG9saWN5ID1cbiAgICAgIGNkay5DZm5EZWxldGlvblBvbGljeS5SRVRBSU47XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlUzNEYXNoMDAzTGFtYmRhVmVyc2lvbkxldDVmNHljRzBVenNUelh5M29UMGIybktzSmtydW9vOGJaZVdva01kOCA9XG4gICAgICBuZXcgbGFtYmRhLkNmblZlcnNpb24oXG4gICAgICAgIHRoaXMsXG4gICAgICAgIFwiQXV0b1JlbWVkaWF0ZVMzRGFzaDAwM0xhbWJkYVZlcnNpb25MRVQ1RjR5Y0cwVXpzVHpYWTNvVDBiMm5Lc0prcnVvbzhiWkVXb2tNRDhcIixcbiAgICAgICAge1xuICAgICAgICAgIGZ1bmN0aW9uTmFtZTogYXV0b1JlbWVkaWF0ZVMzRGFzaDAwM0xhbWJkYUZ1bmN0aW9uLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICBjb2RlU2hhMjU2OiBcImhHZGZpeFplSnZNZmhzK0J2SFpXaG5kM1JmUFAxM1Y1clpmbFQ4OWw0TlE9XCIsXG4gICAgICAgIH0sXG4gICAgICApO1xuICAgIGF1dG9SZW1lZGlhdGVTM0Rhc2gwMDNMYW1iZGFWZXJzaW9uTGV0NWY0eWNHMFV6c1R6WHkzb1QwYjJuS3NKa3J1b284YlplV29rTWQ4LmNmbk9wdGlvbnMuZGVsZXRpb25Qb2xpY3kgPVxuICAgICAgY2RrLkNmbkRlbGV0aW9uUG9saWN5LlJFVEFJTjtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVTM0Rhc2gwMDRMYW1iZGFWZXJzaW9uZFU3MTNhMndNQ2lKdHRrd052bHlPZEl0NkZvYm1MM3RwQWR5TmttYSA9XG4gICAgICBuZXcgbGFtYmRhLkNmblZlcnNpb24oXG4gICAgICAgIHRoaXMsXG4gICAgICAgIFwiQXV0b1JlbWVkaWF0ZVMzRGFzaDAwNExhbWJkYVZlcnNpb25kVTcxM2Eyd01DaUpUVEtXTnZseU9kSVQ2Rm9ibUwzdHBBZHlOS01BXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBmdW5jdGlvbk5hbWU6IGF1dG9SZW1lZGlhdGVTM0Rhc2gwMDRMYW1iZGFGdW5jdGlvbi5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgY29kZVNoYTI1NjogXCJoR2RmaXhaZUp2TWZocytCdkhaV2huZDNSZlBQMTNWNXJaZmxUODlsNE5RPVwiLFxuICAgICAgICB9LFxuICAgICAgKTtcbiAgICBhdXRvUmVtZWRpYXRlUzNEYXNoMDA0TGFtYmRhVmVyc2lvbmRVNzEzYTJ3TUNpSnR0a3dOdmx5T2RJdDZGb2JtTDN0cEFkeU5rbWEuY2ZuT3B0aW9ucy5kZWxldGlvblBvbGljeSA9XG4gICAgICBjZGsuQ2ZuRGVsZXRpb25Qb2xpY3kuUkVUQUlOO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZVMzRGFzaDAwNUxhbWJkYVZlcnNpb25DeGlYdFB3WWVPdUVwOXM3NFFrSWRkWEFlVm03WmJUcVB5cHlZaElrID1cbiAgICAgIG5ldyBsYW1iZGEuQ2ZuVmVyc2lvbihcbiAgICAgICAgdGhpcyxcbiAgICAgICAgXCJBdXRvUmVtZWRpYXRlUzNEYXNoMDA1TGFtYmRhVmVyc2lvbkN4aVhUUHdZZU9VRXA5czc0UWtJZGRYQWVWbTdaYlRxUFlQWVloSWtcIixcbiAgICAgICAge1xuICAgICAgICAgIGZ1bmN0aW9uTmFtZTogYXV0b1JlbWVkaWF0ZVMzRGFzaDAwNUxhbWJkYUZ1bmN0aW9uLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICBjb2RlU2hhMjU2OiBcImhHZGZpeFplSnZNZmhzK0J2SFpXaG5kM1JmUFAxM1Y1clpmbFQ4OWw0TlE9XCIsXG4gICAgICAgIH0sXG4gICAgICApO1xuICAgIGF1dG9SZW1lZGlhdGVTM0Rhc2gwMDVMYW1iZGFWZXJzaW9uQ3hpWHRQd1llT3VFcDlzNzRRa0lkZFhBZVZtN1piVHFQeXB5WWhJay5jZm5PcHRpb25zLmRlbGV0aW9uUG9saWN5ID1cbiAgICAgIGNkay5DZm5EZWxldGlvblBvbGljeS5SRVRBSU47XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlUzNEYXNoMDA2TGFtYmRhVmVyc2lvbjY0eHZpVmlYcFliY3hROHF4OXAxemJXaTU2aDhDcEF0V2kxdE12UHRBY2MgPVxuICAgICAgbmV3IGxhbWJkYS5DZm5WZXJzaW9uKFxuICAgICAgICB0aGlzLFxuICAgICAgICBcIkF1dG9SZW1lZGlhdGVTM0Rhc2gwMDZMYW1iZGFWZXJzaW9uNjR4dmlWaVhQWWJjeFE4UVg5UDF6YldJNTZoOENQQXRXSTFUTXZQVEFjY1wiLFxuICAgICAgICB7XG4gICAgICAgICAgZnVuY3Rpb25OYW1lOiBhdXRvUmVtZWRpYXRlUzNEYXNoMDA2TGFtYmRhRnVuY3Rpb24uZnVuY3Rpb25OYW1lLFxuICAgICAgICAgIGNvZGVTaGEyNTY6IFwiaEdkZml4WmVKdk1maHMrQnZIWldobmQzUmZQUDEzVjVyWmZsVDg5bDROUT1cIixcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgYXV0b1JlbWVkaWF0ZVMzRGFzaDAwNkxhbWJkYVZlcnNpb242NHh2aVZpWHBZYmN4UThxeDlwMXpiV2k1Nmg4Q3BBdFdpMXRNdlB0QWNjLmNmbk9wdGlvbnMuZGVsZXRpb25Qb2xpY3kgPVxuICAgICAgY2RrLkNmbkRlbGV0aW9uUG9saWN5LlJFVEFJTjtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVTM0Rhc2gwMDdMYW1iZGFWZXJzaW9uNUlnNURPcndaeWQzYVh1bXZRdGF0S2FReldxOHNhM0F4QzBhSmtjbEhnID1cbiAgICAgIG5ldyBsYW1iZGEuQ2ZuVmVyc2lvbihcbiAgICAgICAgdGhpcyxcbiAgICAgICAgXCJBdXRvUmVtZWRpYXRlUzNEYXNoMDA3TGFtYmRhVmVyc2lvbjVJZzVET3J3WllEM2FYdW12UXRhdEtBUXpXUThzYTNBeEMwQUprY2xIZ1wiLFxuICAgICAgICB7XG4gICAgICAgICAgZnVuY3Rpb25OYW1lOiBhdXRvUmVtZWRpYXRlUzNEYXNoMDA3TGFtYmRhRnVuY3Rpb24uZnVuY3Rpb25OYW1lLFxuICAgICAgICAgIGNvZGVTaGEyNTY6IFwiaEdkZml4WmVKdk1maHMrQnZIWldobmQzUmZQUDEzVjVyWmZsVDg5bDROUT1cIixcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgYXV0b1JlbWVkaWF0ZVMzRGFzaDAwN0xhbWJkYVZlcnNpb241SWc1RE9yd1p5ZDNhWHVtdlF0YXRLYVF6V3E4c2EzQXhDMGFKa2NsSGcuY2ZuT3B0aW9ucy5kZWxldGlvblBvbGljeSA9XG4gICAgICBjZGsuQ2ZuRGVsZXRpb25Qb2xpY3kuUkVUQUlOO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZVMzRGFzaDAwOExhbWJkYVZlcnNpb252RmEwcjB6VHlReHlicFFGaWRsNDV2RWZuQmd0a0dMYjVsTllhTjRYazBvID1cbiAgICAgIG5ldyBsYW1iZGEuQ2ZuVmVyc2lvbihcbiAgICAgICAgdGhpcyxcbiAgICAgICAgXCJBdXRvUmVtZWRpYXRlUzNEYXNoMDA4TGFtYmRhVmVyc2lvbnZGYTByMHpUWVF4eWJwUUZpZGw0NXZFZm5CZ3RrR0xiNWxOWWFONFhrMG9cIixcbiAgICAgICAge1xuICAgICAgICAgIGZ1bmN0aW9uTmFtZTogYXV0b1JlbWVkaWF0ZVMzRGFzaDAwOExhbWJkYUZ1bmN0aW9uLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICBjb2RlU2hhMjU2OiBcImhHZGZpeFplSnZNZmhzK0J2SFpXaG5kM1JmUFAxM1Y1clpmbFQ4OWw0TlE9XCIsXG4gICAgICAgIH0sXG4gICAgICApO1xuICAgIGF1dG9SZW1lZGlhdGVTM0Rhc2gwMDhMYW1iZGFWZXJzaW9udkZhMHIwelR5UXh5YnBRRmlkbDQ1dkVmbkJndGtHTGI1bE5ZYU40WGswby5jZm5PcHRpb25zLmRlbGV0aW9uUG9saWN5ID1cbiAgICAgIGNkay5DZm5EZWxldGlvblBvbGljeS5SRVRBSU47XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlUzNEYXNoMDA5TGFtYmRhVmVyc2lvblVyZXFpUWVyRmpnck5YeDNaMnQ1RmRXYzdCYUp4ZlRpRDJuN0RMc0FwZyA9XG4gICAgICBuZXcgbGFtYmRhLkNmblZlcnNpb24oXG4gICAgICAgIHRoaXMsXG4gICAgICAgIFwiQXV0b1JlbWVkaWF0ZVMzRGFzaDAwOUxhbWJkYVZlcnNpb25VUkVRSVFlckZqZ3JOWHgzWjJUNUZkV0M3QmFKWEZUaUQybjdETHNBcGdcIixcbiAgICAgICAge1xuICAgICAgICAgIGZ1bmN0aW9uTmFtZTogYXV0b1JlbWVkaWF0ZVMzRGFzaDAwOUxhbWJkYUZ1bmN0aW9uLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICBjb2RlU2hhMjU2OiBcImhHZGZpeFplSnZNZmhzK0J2SFpXaG5kM1JmUFAxM1Y1clpmbFQ4OWw0TlE9XCIsXG4gICAgICAgIH0sXG4gICAgICApO1xuICAgIGF1dG9SZW1lZGlhdGVTM0Rhc2gwMDlMYW1iZGFWZXJzaW9uVXJlcWlRZXJGamdyTlh4M1oydDVGZFdjN0JhSnhmVGlEMm43RExzQXBnLmNmbk9wdGlvbnMuZGVsZXRpb25Qb2xpY3kgPVxuICAgICAgY2RrLkNmbkRlbGV0aW9uUG9saWN5LlJFVEFJTjtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVTM0Rhc2gwMTBMYW1iZGFWZXJzaW9uclFrZk5kWVppY2lzdFlWYzB3MlhsZkxqU2xZcW9mY2ZBdGE3ZlRuNUUgPVxuICAgICAgbmV3IGxhbWJkYS5DZm5WZXJzaW9uKFxuICAgICAgICB0aGlzLFxuICAgICAgICBcIkF1dG9SZW1lZGlhdGVTM0Rhc2gwMTBMYW1iZGFWZXJzaW9uclFLRk5kWVppY2lzdFlWYzB3MlhsZkxqU2xZcW9mY2ZBdGE3ZlRuNUVcIixcbiAgICAgICAge1xuICAgICAgICAgIGZ1bmN0aW9uTmFtZTogYXV0b1JlbWVkaWF0ZVMzRGFzaDAxMExhbWJkYUZ1bmN0aW9uLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICBjb2RlU2hhMjU2OiBcImhHZGZpeFplSnZNZmhzK0J2SFpXaG5kM1JmUFAxM1Y1clpmbFQ4OWw0TlE9XCIsXG4gICAgICAgIH0sXG4gICAgICApO1xuICAgIGF1dG9SZW1lZGlhdGVTM0Rhc2gwMTBMYW1iZGFWZXJzaW9uclFrZk5kWVppY2lzdFlWYzB3MlhsZkxqU2xZcW9mY2ZBdGE3ZlRuNUUuY2ZuT3B0aW9ucy5kZWxldGlvblBvbGljeSA9XG4gICAgICBjZGsuQ2ZuRGVsZXRpb25Qb2xpY3kuUkVUQUlOO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZVMzRGFzaDAxMkxhbWJkYVZlcnNpb25DeVFoUzJpR1phNG5kdEJlT3VMT2dWaU04ODU4ZlZ3SHdQZDFCOWFicyA9XG4gICAgICBuZXcgbGFtYmRhLkNmblZlcnNpb24oXG4gICAgICAgIHRoaXMsXG4gICAgICAgIFwiQXV0b1JlbWVkaWF0ZVMzRGFzaDAxMkxhbWJkYVZlcnNpb25DWVFoUzJpR1phNG5kdEJFT3VMT2dWaU04ODU4RlZ3SFdQZDFCOWFic1wiLFxuICAgICAgICB7XG4gICAgICAgICAgZnVuY3Rpb25OYW1lOiBhdXRvUmVtZWRpYXRlUzNEYXNoMDEyTGFtYmRhRnVuY3Rpb24uZnVuY3Rpb25OYW1lLFxuICAgICAgICAgIGNvZGVTaGEyNTY6IFwiaEdkZml4WmVKdk1maHMrQnZIWldobmQzUmZQUDEzVjVyWmZsVDg5bDROUT1cIixcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgYXV0b1JlbWVkaWF0ZVMzRGFzaDAxMkxhbWJkYVZlcnNpb25DeVFoUzJpR1phNG5kdEJlT3VMT2dWaU04ODU4ZlZ3SHdQZDFCOWFicy5jZm5PcHRpb25zLmRlbGV0aW9uUG9saWN5ID1cbiAgICAgIGNkay5DZm5EZWxldGlvblBvbGljeS5SRVRBSU47XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlUzNEYXNoMDE0TGFtYmRhVmVyc2lvblFwa1h5R21lMjFsYjZ1bzhVM2lVM3k1ZjhBd3AzdWcyZng4aGJGbGhWbWkgPVxuICAgICAgbmV3IGxhbWJkYS5DZm5WZXJzaW9uKFxuICAgICAgICB0aGlzLFxuICAgICAgICBcIkF1dG9SZW1lZGlhdGVTM0Rhc2gwMTRMYW1iZGFWZXJzaW9uUXBrWHlHbWUyMWxiNnVvOFUzaVUzWTVmOEF3cDN1ZzJmeDhoYkZsaFZNSVwiLFxuICAgICAgICB7XG4gICAgICAgICAgZnVuY3Rpb25OYW1lOiBhdXRvUmVtZWRpYXRlUzNEYXNoMDE0TGFtYmRhRnVuY3Rpb24uZnVuY3Rpb25OYW1lLFxuICAgICAgICAgIGNvZGVTaGEyNTY6IFwiaEdkZml4WmVKdk1maHMrQnZIWldobmQzUmZQUDEzVjVyWmZsVDg5bDROUT1cIixcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgYXV0b1JlbWVkaWF0ZVMzRGFzaDAxNExhbWJkYVZlcnNpb25RcGtYeUdtZTIxbGI2dW84VTNpVTN5NWY4QXdwM3VnMmZ4OGhiRmxoVm1pLmNmbk9wdGlvbnMuZGVsZXRpb25Qb2xpY3kgPVxuICAgICAgY2RrLkNmbkRlbGV0aW9uUG9saWN5LlJFVEFJTjtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVTM0Rhc2gwMTZMYW1iZGFWZXJzaW9uSkNuMmRmNXJQeGdZM0RxQ3FLc0xoYkFzc3JvQ291czRIYURiT2JwNTAgPVxuICAgICAgbmV3IGxhbWJkYS5DZm5WZXJzaW9uKFxuICAgICAgICB0aGlzLFxuICAgICAgICBcIkF1dG9SZW1lZGlhdGVTM0Rhc2gwMTZMYW1iZGFWZXJzaW9uSkNuMmRmNXJQeGdZM0RxQ1FLc0xoYkFzc3JvQ09VUzRIYURiT0JQNTBcIixcbiAgICAgICAge1xuICAgICAgICAgIGZ1bmN0aW9uTmFtZTogYXV0b1JlbWVkaWF0ZVMzRGFzaDAxNkxhbWJkYUZ1bmN0aW9uLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICBjb2RlU2hhMjU2OiBcImhHZGZpeFplSnZNZmhzK0J2SFpXaG5kM1JmUFAxM1Y1clpmbFQ4OWw0TlE9XCIsXG4gICAgICAgIH0sXG4gICAgICApO1xuICAgIGF1dG9SZW1lZGlhdGVTM0Rhc2gwMTZMYW1iZGFWZXJzaW9uSkNuMmRmNXJQeGdZM0RxQ3FLc0xoYkFzc3JvQ291czRIYURiT2JwNTAuY2ZuT3B0aW9ucy5kZWxldGlvblBvbGljeSA9XG4gICAgICBjZGsuQ2ZuRGVsZXRpb25Qb2xpY3kuUkVUQUlOO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZVNxc0Rhc2gwMDRMYW1iZGFWZXJzaW9uMU5ldUZvdlZHaHliMEcxZHBheUpoa0doeGpycjB0eW4xMVZhU2pYb2xrcyA9XG4gICAgICBuZXcgbGFtYmRhLkNmblZlcnNpb24oXG4gICAgICAgIHRoaXMsXG4gICAgICAgIFwiQXV0b1JlbWVkaWF0ZVNRU0Rhc2gwMDRMYW1iZGFWZXJzaW9uMU5ldUZvdlZHaHliMEcxRFBBWUpoa0dIWEpSUjBUWU4xMVZhU0pYb2xrc1wiLFxuICAgICAgICB7XG4gICAgICAgICAgZnVuY3Rpb25OYW1lOiBhdXRvUmVtZWRpYXRlU3FzRGFzaDAwNExhbWJkYUZ1bmN0aW9uLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICBjb2RlU2hhMjU2OiBcImhHZGZpeFplSnZNZmhzK0J2SFpXaG5kM1JmUFAxM1Y1clpmbFQ4OWw0TlE9XCIsXG4gICAgICAgIH0sXG4gICAgICApO1xuICAgIGF1dG9SZW1lZGlhdGVTcXNEYXNoMDA0TGFtYmRhVmVyc2lvbjFOZXVGb3ZWR2h5YjBHMWRwYXlKaGtHaHhqcnIwdHluMTFWYVNqWG9sa3MuY2ZuT3B0aW9ucy5kZWxldGlvblBvbGljeSA9XG4gICAgICBjZGsuQ2ZuRGVsZXRpb25Qb2xpY3kuUkVUQUlOO1xuXG4gICAgY29uc3QgYXV0b1JlbWVkaWF0ZVZwY0Rhc2gwMDFMYW1iZGFWZXJzaW9ubDE3NlJabk5pbG5NY3NNYjZkODR0aDJRYnlJblh0NFJRZEVBZU1Oa2JuMCA9XG4gICAgICBuZXcgbGFtYmRhLkNmblZlcnNpb24oXG4gICAgICAgIHRoaXMsXG4gICAgICAgIFwiQXV0b1JlbWVkaWF0ZVZQQ0Rhc2gwMDFMYW1iZGFWZXJzaW9ubDE3NlJabk5JTE5NY3NNQjZkODR0aDJRYnlJTlh0NFJRZEVBZU1Oa2JuMFwiLFxuICAgICAgICB7XG4gICAgICAgICAgZnVuY3Rpb25OYW1lOiBhdXRvUmVtZWRpYXRlVnBjRGFzaDAwMUxhbWJkYUZ1bmN0aW9uLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICBjb2RlU2hhMjU2OiBcImhHZGZpeFplSnZNZmhzK0J2SFpXaG5kM1JmUFAxM1Y1clpmbFQ4OWw0TlE9XCIsXG4gICAgICAgIH0sXG4gICAgICApO1xuICAgIGF1dG9SZW1lZGlhdGVWcGNEYXNoMDAxTGFtYmRhVmVyc2lvbmwxNzZSWm5OaWxuTWNzTWI2ZDg0dGgyUWJ5SW5YdDRSUWRFQWVNTmtibjAuY2ZuT3B0aW9ucy5kZWxldGlvblBvbGljeSA9XG4gICAgICBjZGsuQ2ZuRGVsZXRpb25Qb2xpY3kuUkVUQUlOO1xuXG4gICAgY29uc3QgdHJ1c3RlZEFkdmlzb3JEYXNoMDAzTGFtYmRhVmVyc2lvbmRUM2NjcFp2MkJrb0dtTE9mOW5rcTlQN3pkRXpPbGJ4OFRzOUl1UmVRID1cbiAgICAgIG5ldyBsYW1iZGEuQ2ZuVmVyc2lvbihcbiAgICAgICAgdGhpcyxcbiAgICAgICAgXCJUcnVzdGVkQWR2aXNvckRhc2gwMDNMYW1iZGFWZXJzaW9uZFQzY2NwWnYyQktPR21MT2Y5bmtxOVA3WkRFek9MQlg4VHM5SXVSZVFcIixcbiAgICAgICAge1xuICAgICAgICAgIGZ1bmN0aW9uTmFtZTogdHJ1c3RlZEFkdmlzb3JEYXNoMDAzTGFtYmRhRnVuY3Rpb24uZnVuY3Rpb25OYW1lLFxuICAgICAgICAgIGNvZGVTaGEyNTY6IFwiaEdkZml4WmVKdk1maHMrQnZIWldobmQzUmZQUDEzVjVyWmZsVDg5bDROUT1cIixcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgdHJ1c3RlZEFkdmlzb3JEYXNoMDAzTGFtYmRhVmVyc2lvbmRUM2NjcFp2MkJrb0dtTE9mOW5rcTlQN3pkRXpPbGJ4OFRzOUl1UmVRLmNmbk9wdGlvbnMuZGVsZXRpb25Qb2xpY3kgPVxuICAgICAgY2RrLkNmbkRlbGV0aW9uUG9saWN5LlJFVEFJTjtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVPcmNoZXN0cmF0b3JSb2xlID0gbmV3IGlhbS5DZm5Sb2xlKFxuICAgICAgdGhpcyxcbiAgICAgIFwiQXV0b1JlbWVkaWF0ZU9yY2hlc3RyYXRvclJvbGVcIixcbiAgICAgIHtcbiAgICAgICAgcm9sZU5hbWU6IFwiQXV0b1JlbWVkaWF0ZU9yY2hlc3RyYXRvclJvbGVcIixcbiAgICAgICAgYXNzdW1lUm9sZVBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgVmVyc2lvbjogXCIyMDEyLTEwLTE3XCIsXG4gICAgICAgICAgU3RhdGVtZW50OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICBQcmluY2lwYWw6IHtcbiAgICAgICAgICAgICAgICBTZXJ2aWNlOiBbXCJsYW1iZGEuYW1hem9uYXdzLmNvbVwiXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgQWN0aW9uOiBbXCJzdHM6QXNzdW1lUm9sZVwiXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgcG9saWNpZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwb2xpY3lOYW1lOiBcIkF1dG9SZW1lZGlhdGlvblhSYXlQb2xpY3lcIixcbiAgICAgICAgICAgIHBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgICAgIFN0YXRlbWVudDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgQWN0aW9uOiBbXCJ4cmF5OlB1dFRyYWNlU2VnbWVudHNcIiwgXCJ4cmF5OlB1dFRlbGVtZXRyeVJlY29yZHNcIl0sXG4gICAgICAgICAgICAgICAgICBSZXNvdXJjZTogXCIqXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwb2xpY3lOYW1lOiBcIkF1dG9SZW1lZGlhdGVPcmNoZXN0cmF0b3JQb2xpY3lcIixcbiAgICAgICAgICAgIHBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgICAgIFN0YXRlbWVudDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgQWN0aW9uOiBbXG4gICAgICAgICAgICAgICAgICAgIFwibG9nczpDcmVhdGVMb2dHcm91cFwiLFxuICAgICAgICAgICAgICAgICAgICBcImxvZ3M6Q3JlYXRlTG9nU3RyZWFtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibG9nczpQdXRMb2dFdmVudHNcIixcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBSZXNvdXJjZTogW1xuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgXCJhcm46YXdzOmxvZ3NcIixcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZ2lvbixcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgXCJsb2ctZ3JvdXA6L2F3cy9sYW1iZGEvKjoqOipcIixcbiAgICAgICAgICAgICAgICAgICAgXS5qb2luKFwiOlwiKSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICAgIEFjdGlvbjogW1wibGFtYmRhOkludm9rZUZ1bmN0aW9uXCJdLFxuICAgICAgICAgICAgICAgICAgUmVzb3VyY2U6IFwiKlwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgRWZmZWN0OiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgICAgICBBY3Rpb246IFtcImttczpEZWNyeXB0XCIsIFwia21zOkdlbmVyYXRlRGF0YUtleVwiXSxcbiAgICAgICAgICAgICAgICAgIFJlc291cmNlOiBrbXNLZXlTcXNRdWV1ZUZyb21TbnMuYXR0ckFybixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIEVmZmVjdDogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgQWN0aW9uOiBbXG4gICAgICAgICAgICAgICAgICAgIFwic3FzOlNlbmRNZXNzYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwic3FzOlJlY2VpdmVNZXNzYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwic3FzOkRlbGV0ZU1lc3NhZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgXCJzcXM6TGlzdFF1ZXVlcypcIixcbiAgICAgICAgICAgICAgICAgICAgXCJzcXM6R2V0UXVldWVBdHRyaWJ1dGVzXCIsXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgUmVzb3VyY2U6IGF1dG9SZW1lZGlhdGVRdWV1ZS5hdHRyQXJuLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICk7XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlUXVldWVTdWJzY3JpcHRpb24gPSBuZXcgc25zLkNmblN1YnNjcmlwdGlvbihcbiAgICAgIHRoaXMsXG4gICAgICBcIkF1dG9SZW1lZGlhdGVRdWV1ZVN1YnNjcmlwdGlvblwiLFxuICAgICAge1xuICAgICAgICB0b3BpY0Fybjogc25zVG9waWNBdXRvUmVtZWRpYXRlLnJlZixcbiAgICAgICAgZW5kcG9pbnQ6IGF1dG9SZW1lZGlhdGVRdWV1ZS5hdHRyQXJuLFxuICAgICAgICBwcm90b2NvbDogXCJzcXNcIixcbiAgICAgICAgcmF3TWVzc2FnZURlbGl2ZXJ5OiB0cnVlLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY29uc3Qgc25zVG9BdXRvUmVtZWRpYXRlUXVldWVTcXNQb2xpY3kgPSBuZXcgc3FzLkNmblF1ZXVlUG9saWN5KFxuICAgICAgdGhpcyxcbiAgICAgIFwiU05TVG9BdXRvUmVtZWRpYXRlUXVldWVTcXNQb2xpY3lcIixcbiAgICAgIHtcbiAgICAgICAgcG9saWN5RG9jdW1lbnQ6IHtcbiAgICAgICAgICBWZXJzaW9uOiBcIjIwMTItMTAtMTdcIixcbiAgICAgICAgICBTdGF0ZW1lbnQ6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgU2lkOiBcImFsbG93LXNucy1tZXNzYWdlc1wiLFxuICAgICAgICAgICAgICBFZmZlY3Q6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgUHJpbmNpcGFsOiBcIipcIixcbiAgICAgICAgICAgICAgUmVzb3VyY2U6IGF1dG9SZW1lZGlhdGVRdWV1ZS5hdHRyQXJuLFxuICAgICAgICAgICAgICBBY3Rpb246IFwiU1FTOlNlbmRNZXNzYWdlXCIsXG4gICAgICAgICAgICAgIENvbmRpdGlvbjoge1xuICAgICAgICAgICAgICAgIEFybkVxdWFsczoge1xuICAgICAgICAgICAgICAgICAgXCJhd3M6U291cmNlQXJuXCI6IHNuc1RvcGljQXV0b1JlbWVkaWF0ZS5yZWYsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgcXVldWVzOiBbYXV0b1JlbWVkaWF0ZVF1ZXVlLnJlZl0sXG4gICAgICB9LFxuICAgICk7XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlT3JjaGVzdHJhdG9yTGFtYmRhRnVuY3Rpb24gPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKFxuICAgICAgdGhpcyxcbiAgICAgIFwiQXV0b1JlbWVkaWF0ZU9yY2hlc3RyYXRvckxhbWJkYUZ1bmN0aW9uXCIsXG4gICAgICB7XG4gICAgICAgIGNvZGU6IGxhbWJkYS5Db2RlLmZyb21Bc3NldChmdW5jdGlvbnNQYXRoKSxcbiAgICAgICAgaGFuZGxlcjogXCJBdXRvUmVtZWRpYXRlT3JjaGVzdHJhdG9yLmhhbmRsZXJcIixcbiAgICAgICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzI0X1gsXG4gICAgICAgIGZ1bmN0aW9uTmFtZTogXCJhdXRvLXJlbWVkaWF0ZS12MS1BdXRvUmVtZWRpYXRlT3JjaGVzdHJhdG9yXCIsXG4gICAgICAgIG1lbW9yeVNpemU6IDEyOCxcbiAgICAgICAgdGltZW91dDogY2RrLkR1cmF0aW9uLnNlY29uZHMoMTApLFxuICAgICAgICByb2xlOiBpYW0uUm9sZS5mcm9tUm9sZUFybihcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIFwiQXV0b1JlbWVkaWF0ZU9yY2hlc3RyYXRvckxhbWJkYUZ1bmN0aW9uUm9sZVJlZlwiLFxuICAgICAgICAgIGF1dG9SZW1lZGlhdGVPcmNoZXN0cmF0b3JSb2xlLmF0dHJBcm4sXG4gICAgICAgICksXG4gICAgICAgIHRyYWNpbmc6IGxhbWJkYS5UcmFjaW5nLkFDVElWRSxcbiAgICAgICAgbG9nR3JvdXA6IGxvZ3MuTG9nR3JvdXAuZnJvbUxvZ0dyb3VwTmFtZShcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIFwiQXV0b1JlbWVkaWF0ZU9yY2hlc3RyYXRvckxhbWJkYUZ1bmN0aW9uTG9nR3JvdXBSZWZcIixcbiAgICAgICAgICBhdXRvUmVtZWRpYXRlT3JjaGVzdHJhdG9yTG9nR3JvdXAucmVmLFxuICAgICAgICApLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZU9yY2hlc3RyYXRvckxhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIk5hbWVcIixcbiAgICAgIFwiQXV0byBSZW1lZGlhdGUgT3JjaGVzdHJhdG9yXCIsXG4gICAgKTtcbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlT3JjaGVzdHJhdG9yTGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiT3duZXJcIixcbiAgICAgIFwiQ2xvdWRDb25mb3JtaXR5XCIsXG4gICAgKTtcbiAgICBjZGsuVGFncy5vZihhdXRvUmVtZWRpYXRlT3JjaGVzdHJhdG9yTGFtYmRhRnVuY3Rpb24pLmFkZChcbiAgICAgIFwiUm9sZVwiLFxuICAgICAgXCJBdXRvIFJlbWVkaWF0ZVwiLFxuICAgICk7XG4gICAgY2RrLlRhZ3Mub2YoYXV0b1JlbWVkaWF0ZU9yY2hlc3RyYXRvckxhbWJkYUZ1bmN0aW9uKS5hZGQoXG4gICAgICBcIkVudmlyb25tZW50XCIsXG4gICAgICBcIk9wc1wiLFxuICAgICk7XG5cbiAgICBhdXRvUmVtZWRpYXRlT3JjaGVzdHJhdG9yTGFtYmRhRnVuY3Rpb24ubm9kZS5hZGREZXBlbmRlbmN5KFxuICAgICAgYXV0b1JlbWVkaWF0ZU9yY2hlc3RyYXRvckxvZ0dyb3VwLFxuICAgICk7XG4gICAgYXV0b1JlbWVkaWF0ZU9yY2hlc3RyYXRvckxhbWJkYUZ1bmN0aW9uLm5vZGUuYWRkRGVwZW5kZW5jeShcbiAgICAgIGF1dG9SZW1lZGlhdGVPcmNoZXN0cmF0b3JSb2xlLFxuICAgICk7XG5cbiAgICBjb25zdCBhdXRvUmVtZWRpYXRlT3JjaGVzdHJhdG9yRXZlbnRTb3VyY2VNYXBwaW5nU3FzQXV0b1JlbWVkaWF0ZVF1ZXVlID1cbiAgICAgIG5ldyBsYW1iZGEuQ2ZuRXZlbnRTb3VyY2VNYXBwaW5nKFxuICAgICAgICB0aGlzLFxuICAgICAgICBcIkF1dG9SZW1lZGlhdGVPcmNoZXN0cmF0b3JFdmVudFNvdXJjZU1hcHBpbmdTUVNBdXRvUmVtZWRpYXRlUXVldWVcIixcbiAgICAgICAge1xuICAgICAgICAgIGJhdGNoU2l6ZTogMSxcbiAgICAgICAgICBldmVudFNvdXJjZUFybjogYXV0b1JlbWVkaWF0ZVF1ZXVlLmF0dHJBcm4sXG4gICAgICAgICAgZnVuY3Rpb25OYW1lOiBhdXRvUmVtZWRpYXRlT3JjaGVzdHJhdG9yTGFtYmRhRnVuY3Rpb24uZnVuY3Rpb25Bcm4sXG4gICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgYXV0b1JlbWVkaWF0ZU9yY2hlc3RyYXRvckV2ZW50U291cmNlTWFwcGluZ1Nxc0F1dG9SZW1lZGlhdGVRdWV1ZS5hZGREZXBlbmRlbmN5KFxuICAgICAgYXV0b1JlbWVkaWF0ZU9yY2hlc3RyYXRvclJvbGUsXG4gICAgKTtcblxuICAgIGNvbnN0IGF1dG9SZW1lZGlhdGVPcmNoZXN0cmF0b3JMYW1iZGFWZXJzaW9uMmRIaXY1dlV1RXM1NWp4VWxzajR0S1Z5ZUhreUV2MGV4ODhZaVViSSA9XG4gICAgICBuZXcgbGFtYmRhLkNmblZlcnNpb24oXG4gICAgICAgIHRoaXMsXG4gICAgICAgIFwiQXV0b1JlbWVkaWF0ZU9yY2hlc3RyYXRvckxhbWJkYVZlcnNpb24yZEhJVjV2VXVFUzU1anhVbHNqNHRLVnllSGt5RXYwZXg4OFlJVWJJXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBmdW5jdGlvbk5hbWU6IGF1dG9SZW1lZGlhdGVPcmNoZXN0cmF0b3JMYW1iZGFGdW5jdGlvbi5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgY29kZVNoYTI1NjogXCJoR2RmaXhaZUp2TWZocytCdkhaV2huZDNSZlBQMTNWNXJaZmxUODlsNE5RPVwiLFxuICAgICAgICB9LFxuICAgICAgKTtcbiAgICBhdXRvUmVtZWRpYXRlT3JjaGVzdHJhdG9yTGFtYmRhVmVyc2lvbjJkSGl2NXZVdUVzNTVqeFVsc2o0dEtWeWVIa3lFdjBleDg4WWlVYkkuY2ZuT3B0aW9ucy5kZWxldGlvblBvbGljeSA9XG4gICAgICBjZGsuQ2ZuRGVsZXRpb25Qb2xpY3kuUkVUQUlOO1xuXG4gICAgLy8gT3V0cHV0c1xuICAgIHRoaXMuYXV0b1JlbWVkaWF0ZU9yY2hlc3RyYXRvckxhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuID1cbiAgICAgIGF1dG9SZW1lZGlhdGVPcmNoZXN0cmF0b3JMYW1iZGFWZXJzaW9uMmRIaXY1dlV1RXM1NWp4VWxzajR0S1Z5ZUhreUV2MGV4ODhZaVViSS5yZWY7XG4gICAgbmV3IGNkay5DZm5PdXRwdXQoXG4gICAgICB0aGlzLFxuICAgICAgXCJDZm5PdXRwdXRBdXRvUmVtZWRpYXRlT3JjaGVzdHJhdG9yTGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm5cIixcbiAgICAgIHtcbiAgICAgICAga2V5OiBcIkF1dG9SZW1lZGlhdGVPcmNoZXN0cmF0b3JMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFyblwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJDdXJyZW50IExhbWJkYSBmdW5jdGlvbiB2ZXJzaW9uXCIsXG4gICAgICAgIGV4cG9ydE5hbWU6XG4gICAgICAgICAgXCJzbHMtYXV0by1yZW1lZGlhdGUtdjEtQXV0b1JlbWVkaWF0ZU9yY2hlc3RyYXRvckxhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuXCIsXG4gICAgICAgIHZhbHVlOlxuICAgICAgICAgIHRoaXMuYXV0b1JlbWVkaWF0ZU9yY2hlc3RyYXRvckxhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuIS50b1N0cmluZygpLFxuICAgICAgfSxcbiAgICApO1xuICAgIHRoaXMuYXV0b1JlbWVkaWF0ZVMzRGFzaDAxNkxhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuID1cbiAgICAgIGF1dG9SZW1lZGlhdGVTM0Rhc2gwMTZMYW1iZGFWZXJzaW9uSkNuMmRmNXJQeGdZM0RxQ3FLc0xoYkFzc3JvQ291czRIYURiT2JwNTAucmVmO1xuICAgIG5ldyBjZGsuQ2ZuT3V0cHV0KFxuICAgICAgdGhpcyxcbiAgICAgIFwiQ2ZuT3V0cHV0QXV0b1JlbWVkaWF0ZVMzRGFzaDAxNkxhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuXCIsXG4gICAgICB7XG4gICAgICAgIGtleTogXCJBdXRvUmVtZWRpYXRlUzNEYXNoMDE2TGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm5cIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ3VycmVudCBMYW1iZGEgZnVuY3Rpb24gdmVyc2lvblwiLFxuICAgICAgICBleHBvcnROYW1lOlxuICAgICAgICAgIFwic2xzLWF1dG8tcmVtZWRpYXRlLXYxLUF1dG9SZW1lZGlhdGVTM0Rhc2gwMTZMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFyblwiLFxuICAgICAgICB2YWx1ZTpcbiAgICAgICAgICB0aGlzLmF1dG9SZW1lZGlhdGVTM0Rhc2gwMTZMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFybiEudG9TdHJpbmcoKSxcbiAgICAgIH0sXG4gICAgKTtcbiAgICB0aGlzLmF1dG9SZW1lZGlhdGVJYW1EYXNoMDAxTGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm4gPVxuICAgICAgYXV0b1JlbWVkaWF0ZUlhbURhc2gwMDFMYW1iZGFWZXJzaW9uTGVjdFp0cElyd0docGQwNUMxaEdUcmxXc0dwYTJVV2xVWnFwN0w1U3lvLnJlZjtcbiAgICBuZXcgY2RrLkNmbk91dHB1dChcbiAgICAgIHRoaXMsXG4gICAgICBcIkNmbk91dHB1dEF1dG9SZW1lZGlhdGVJQU1EYXNoMDAxTGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm5cIixcbiAgICAgIHtcbiAgICAgICAga2V5OiBcIkF1dG9SZW1lZGlhdGVJQU1EYXNoMDAxTGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm5cIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ3VycmVudCBMYW1iZGEgZnVuY3Rpb24gdmVyc2lvblwiLFxuICAgICAgICBleHBvcnROYW1lOlxuICAgICAgICAgIFwic2xzLWF1dG8tcmVtZWRpYXRlLXYxLUF1dG9SZW1lZGlhdGVJQU1EYXNoMDAxTGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm5cIixcbiAgICAgICAgdmFsdWU6XG4gICAgICAgICAgdGhpcy5hdXRvUmVtZWRpYXRlSWFtRGFzaDAwMUxhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuIS50b1N0cmluZygpLFxuICAgICAgfSxcbiAgICApO1xuICAgIHRoaXMuYXV0b1JlbWVkaWF0ZUlhbURhc2gwMjlMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFybiA9XG4gICAgICBhdXRvUmVtZWRpYXRlSWFtRGFzaDAyOUxhbWJkYVZlcnNpb25WWWd5bnB1bG9XbEx5YWhmdkNsQ2N6OGhocFhjT2NJYzlacnlYc0ppN3c4LnJlZjtcbiAgICBuZXcgY2RrLkNmbk91dHB1dChcbiAgICAgIHRoaXMsXG4gICAgICBcIkNmbk91dHB1dEF1dG9SZW1lZGlhdGVJQU1EYXNoMDI5TGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm5cIixcbiAgICAgIHtcbiAgICAgICAga2V5OiBcIkF1dG9SZW1lZGlhdGVJQU1EYXNoMDI5TGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm5cIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ3VycmVudCBMYW1iZGEgZnVuY3Rpb24gdmVyc2lvblwiLFxuICAgICAgICBleHBvcnROYW1lOlxuICAgICAgICAgIFwic2xzLWF1dG8tcmVtZWRpYXRlLXYxLUF1dG9SZW1lZGlhdGVJQU1EYXNoMDI5TGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm5cIixcbiAgICAgICAgdmFsdWU6XG4gICAgICAgICAgdGhpcy5hdXRvUmVtZWRpYXRlSWFtRGFzaDAyOUxhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuIS50b1N0cmluZygpLFxuICAgICAgfSxcbiAgICApO1xuICAgIHRoaXMuYXV0b1JlbWVkaWF0ZUN0RGFzaDAwMUxhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuID1cbiAgICAgIGF1dG9SZW1lZGlhdGVDdERhc2gwMDFMYW1iZGFWZXJzaW9ubEp4SVd3Zk85OWhSaURqaEhjRmRkVElrWm9rc0NnOUk1ejkwdzUwc1B3RS5yZWY7XG4gICAgbmV3IGNkay5DZm5PdXRwdXQoXG4gICAgICB0aGlzLFxuICAgICAgXCJDZm5PdXRwdXRBdXRvUmVtZWRpYXRlQ1REYXNoMDAxTGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm5cIixcbiAgICAgIHtcbiAgICAgICAga2V5OiBcIkF1dG9SZW1lZGlhdGVDVERhc2gwMDFMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFyblwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJDdXJyZW50IExhbWJkYSBmdW5jdGlvbiB2ZXJzaW9uXCIsXG4gICAgICAgIGV4cG9ydE5hbWU6XG4gICAgICAgICAgXCJzbHMtYXV0by1yZW1lZGlhdGUtdjEtQXV0b1JlbWVkaWF0ZUNURGFzaDAwMUxhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuXCIsXG4gICAgICAgIHZhbHVlOlxuICAgICAgICAgIHRoaXMuYXV0b1JlbWVkaWF0ZUN0RGFzaDAwMUxhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuIS50b1N0cmluZygpLFxuICAgICAgfSxcbiAgICApO1xuICAgIHRoaXMuYXV0b1JlbWVkaWF0ZUxhbWJkYURhc2gwMDNMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFybiA9XG4gICAgICBhdXRvUmVtZWRpYXRlTGFtYmRhRGFzaDAwM0xhbWJkYVZlcnNpb25JcjE1VHM2NUlteFlaYjN5TWluM1pkcnE1eEhxQzBsU2xnZmNHU2ZVLnJlZjtcbiAgICBuZXcgY2RrLkNmbk91dHB1dChcbiAgICAgIHRoaXMsXG4gICAgICBcIkNmbk91dHB1dEF1dG9SZW1lZGlhdGVMYW1iZGFEYXNoMDAzTGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm5cIixcbiAgICAgIHtcbiAgICAgICAga2V5OiBcIkF1dG9SZW1lZGlhdGVMYW1iZGFEYXNoMDAzTGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm5cIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ3VycmVudCBMYW1iZGEgZnVuY3Rpb24gdmVyc2lvblwiLFxuICAgICAgICBleHBvcnROYW1lOlxuICAgICAgICAgIFwic2xzLWF1dG8tcmVtZWRpYXRlLXYxLUF1dG9SZW1lZGlhdGVMYW1iZGFEYXNoMDAzTGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm5cIixcbiAgICAgICAgdmFsdWU6XG4gICAgICAgICAgdGhpcy5hdXRvUmVtZWRpYXRlTGFtYmRhRGFzaDAwM0xhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuIS50b1N0cmluZygpLFxuICAgICAgfSxcbiAgICApO1xuICAgIHRoaXMuYXV0b1JlbWVkaWF0ZVMzRGFzaDAwMUxhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuID1cbiAgICAgIGF1dG9SZW1lZGlhdGVTM0Rhc2gwMDFMYW1iZGFWZXJzaW9uU0lsTlB2VjhnWGE2WWptMTF1OW5JaVNCdmVBbGt1b2hrUWRCRm9IY0VvLnJlZjtcbiAgICBuZXcgY2RrLkNmbk91dHB1dChcbiAgICAgIHRoaXMsXG4gICAgICBcIkNmbk91dHB1dEF1dG9SZW1lZGlhdGVTM0Rhc2gwMDFMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFyblwiLFxuICAgICAge1xuICAgICAgICBrZXk6IFwiQXV0b1JlbWVkaWF0ZVMzRGFzaDAwMUxhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkN1cnJlbnQgTGFtYmRhIGZ1bmN0aW9uIHZlcnNpb25cIixcbiAgICAgICAgZXhwb3J0TmFtZTpcbiAgICAgICAgICBcInNscy1hdXRvLXJlbWVkaWF0ZS12MS1BdXRvUmVtZWRpYXRlUzNEYXNoMDAxTGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm5cIixcbiAgICAgICAgdmFsdWU6XG4gICAgICAgICAgdGhpcy5hdXRvUmVtZWRpYXRlUzNEYXNoMDAxTGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm4hLnRvU3RyaW5nKCksXG4gICAgICB9LFxuICAgICk7XG4gICAgdGhpcy5hdXRvUmVtZWRpYXRlUzNEYXNoMDAyTGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm4gPVxuICAgICAgYXV0b1JlbWVkaWF0ZVMzRGFzaDAwMkxhbWJkYVZlcnNpb25vWnRVcUc1cHVoV3JBeHUyQXdlUkFjSmZ0ZXh1RHBGM3d3d1VyRTNyRS5yZWY7XG4gICAgbmV3IGNkay5DZm5PdXRwdXQoXG4gICAgICB0aGlzLFxuICAgICAgXCJDZm5PdXRwdXRBdXRvUmVtZWRpYXRlUzNEYXNoMDAyTGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm5cIixcbiAgICAgIHtcbiAgICAgICAga2V5OiBcIkF1dG9SZW1lZGlhdGVTM0Rhc2gwMDJMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFyblwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJDdXJyZW50IExhbWJkYSBmdW5jdGlvbiB2ZXJzaW9uXCIsXG4gICAgICAgIGV4cG9ydE5hbWU6XG4gICAgICAgICAgXCJzbHMtYXV0by1yZW1lZGlhdGUtdjEtQXV0b1JlbWVkaWF0ZVMzRGFzaDAwMkxhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuXCIsXG4gICAgICAgIHZhbHVlOlxuICAgICAgICAgIHRoaXMuYXV0b1JlbWVkaWF0ZVMzRGFzaDAwMkxhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuIS50b1N0cmluZygpLFxuICAgICAgfSxcbiAgICApO1xuICAgIHRoaXMuYXV0b1JlbWVkaWF0ZUlhbURhc2gwMzhMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFybiA9XG4gICAgICBhdXRvUmVtZWRpYXRlSWFtRGFzaDAzOExhbWJkYVZlcnNpb241Y29SbVcyQ3BRdWVmclV0cWphV2VoZjBzTW1vMDZGcUpwNHlVbUxxOC5yZWY7XG4gICAgbmV3IGNkay5DZm5PdXRwdXQoXG4gICAgICB0aGlzLFxuICAgICAgXCJDZm5PdXRwdXRBdXRvUmVtZWRpYXRlSUFNRGFzaDAzOExhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuXCIsXG4gICAgICB7XG4gICAgICAgIGtleTogXCJBdXRvUmVtZWRpYXRlSUFNRGFzaDAzOExhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkN1cnJlbnQgTGFtYmRhIGZ1bmN0aW9uIHZlcnNpb25cIixcbiAgICAgICAgZXhwb3J0TmFtZTpcbiAgICAgICAgICBcInNscy1hdXRvLXJlbWVkaWF0ZS12MS1BdXRvUmVtZWRpYXRlSUFNRGFzaDAzOExhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuXCIsXG4gICAgICAgIHZhbHVlOlxuICAgICAgICAgIHRoaXMuYXV0b1JlbWVkaWF0ZUlhbURhc2gwMzhMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFybiEudG9TdHJpbmcoKSxcbiAgICAgIH0sXG4gICAgKTtcbiAgICB0aGlzLmF1dG9SZW1lZGlhdGVTM0Rhc2gwMTRMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFybiA9XG4gICAgICBhdXRvUmVtZWRpYXRlUzNEYXNoMDE0TGFtYmRhVmVyc2lvblFwa1h5R21lMjFsYjZ1bzhVM2lVM3k1ZjhBd3AzdWcyZng4aGJGbGhWbWkucmVmO1xuICAgIG5ldyBjZGsuQ2ZuT3V0cHV0KFxuICAgICAgdGhpcyxcbiAgICAgIFwiQ2ZuT3V0cHV0QXV0b1JlbWVkaWF0ZVMzRGFzaDAxNExhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuXCIsXG4gICAgICB7XG4gICAgICAgIGtleTogXCJBdXRvUmVtZWRpYXRlUzNEYXNoMDE0TGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm5cIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ3VycmVudCBMYW1iZGEgZnVuY3Rpb24gdmVyc2lvblwiLFxuICAgICAgICBleHBvcnROYW1lOlxuICAgICAgICAgIFwic2xzLWF1dG8tcmVtZWRpYXRlLXYxLUF1dG9SZW1lZGlhdGVTM0Rhc2gwMTRMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFyblwiLFxuICAgICAgICB2YWx1ZTpcbiAgICAgICAgICB0aGlzLmF1dG9SZW1lZGlhdGVTM0Rhc2gwMTRMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFybiEudG9TdHJpbmcoKSxcbiAgICAgIH0sXG4gICAgKTtcbiAgICB0aGlzLmF1dG9SZW1lZGlhdGVTM0Rhc2gwMDNMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFybiA9XG4gICAgICBhdXRvUmVtZWRpYXRlUzNEYXNoMDAzTGFtYmRhVmVyc2lvbkxldDVmNHljRzBVenNUelh5M29UMGIybktzSmtydW9vOGJaZVdva01kOC5yZWY7XG4gICAgbmV3IGNkay5DZm5PdXRwdXQoXG4gICAgICB0aGlzLFxuICAgICAgXCJDZm5PdXRwdXRBdXRvUmVtZWRpYXRlUzNEYXNoMDAzTGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm5cIixcbiAgICAgIHtcbiAgICAgICAga2V5OiBcIkF1dG9SZW1lZGlhdGVTM0Rhc2gwMDNMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFyblwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJDdXJyZW50IExhbWJkYSBmdW5jdGlvbiB2ZXJzaW9uXCIsXG4gICAgICAgIGV4cG9ydE5hbWU6XG4gICAgICAgICAgXCJzbHMtYXV0by1yZW1lZGlhdGUtdjEtQXV0b1JlbWVkaWF0ZVMzRGFzaDAwM0xhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuXCIsXG4gICAgICAgIHZhbHVlOlxuICAgICAgICAgIHRoaXMuYXV0b1JlbWVkaWF0ZVMzRGFzaDAwM0xhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuIS50b1N0cmluZygpLFxuICAgICAgfSxcbiAgICApO1xuICAgIHRoaXMuYXV0b1JlbWVkaWF0ZUttc0Rhc2gwMDJMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFybiA9XG4gICAgICBhdXRvUmVtZWRpYXRlS21zRGFzaDAwMkxhbWJkYVZlcnNpb25QNm9xc0RrdEE1ZTBwUWtpWjJZenVXa3lKN2FCN2lyRHNpNkF0ZThkbDIwLnJlZjtcbiAgICBuZXcgY2RrLkNmbk91dHB1dChcbiAgICAgIHRoaXMsXG4gICAgICBcIkNmbk91dHB1dEF1dG9SZW1lZGlhdGVLTVNEYXNoMDAyTGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm5cIixcbiAgICAgIHtcbiAgICAgICAga2V5OiBcIkF1dG9SZW1lZGlhdGVLTVNEYXNoMDAyTGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm5cIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ3VycmVudCBMYW1iZGEgZnVuY3Rpb24gdmVyc2lvblwiLFxuICAgICAgICBleHBvcnROYW1lOlxuICAgICAgICAgIFwic2xzLWF1dG8tcmVtZWRpYXRlLXYxLUF1dG9SZW1lZGlhdGVLTVNEYXNoMDAyTGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm5cIixcbiAgICAgICAgdmFsdWU6XG4gICAgICAgICAgdGhpcy5hdXRvUmVtZWRpYXRlS21zRGFzaDAwMkxhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuIS50b1N0cmluZygpLFxuICAgICAgfSxcbiAgICApO1xuICAgIHRoaXMuYXV0b1JlbWVkaWF0ZVMzRGFzaDAwNExhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuID1cbiAgICAgIGF1dG9SZW1lZGlhdGVTM0Rhc2gwMDRMYW1iZGFWZXJzaW9uZFU3MTNhMndNQ2lKdHRrd052bHlPZEl0NkZvYm1MM3RwQWR5TmttYS5yZWY7XG4gICAgbmV3IGNkay5DZm5PdXRwdXQoXG4gICAgICB0aGlzLFxuICAgICAgXCJDZm5PdXRwdXRBdXRvUmVtZWRpYXRlUzNEYXNoMDA0TGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm5cIixcbiAgICAgIHtcbiAgICAgICAga2V5OiBcIkF1dG9SZW1lZGlhdGVTM0Rhc2gwMDRMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFyblwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJDdXJyZW50IExhbWJkYSBmdW5jdGlvbiB2ZXJzaW9uXCIsXG4gICAgICAgIGV4cG9ydE5hbWU6XG4gICAgICAgICAgXCJzbHMtYXV0by1yZW1lZGlhdGUtdjEtQXV0b1JlbWVkaWF0ZVMzRGFzaDAwNExhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuXCIsXG4gICAgICAgIHZhbHVlOlxuICAgICAgICAgIHRoaXMuYXV0b1JlbWVkaWF0ZVMzRGFzaDAwNExhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuIS50b1N0cmluZygpLFxuICAgICAgfSxcbiAgICApO1xuICAgIHRoaXMuYXV0b1JlbWVkaWF0ZVJkc0Rhc2gwMjNMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFybiA9XG4gICAgICBhdXRvUmVtZWRpYXRlUmRzRGFzaDAyM0xhbWJkYVZlcnNpb241bGlRcjlOS29oWXdKZENtQjh1V3JKeG5mdnJ1NGtSeXJCbTVVbTB5T2MucmVmO1xuICAgIG5ldyBjZGsuQ2ZuT3V0cHV0KFxuICAgICAgdGhpcyxcbiAgICAgIFwiQ2ZuT3V0cHV0QXV0b1JlbWVkaWF0ZVJEU0Rhc2gwMjNMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFyblwiLFxuICAgICAge1xuICAgICAgICBrZXk6IFwiQXV0b1JlbWVkaWF0ZVJEU0Rhc2gwMjNMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFyblwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJDdXJyZW50IExhbWJkYSBmdW5jdGlvbiB2ZXJzaW9uXCIsXG4gICAgICAgIGV4cG9ydE5hbWU6XG4gICAgICAgICAgXCJzbHMtYXV0by1yZW1lZGlhdGUtdjEtQXV0b1JlbWVkaWF0ZVJEU0Rhc2gwMjNMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFyblwiLFxuICAgICAgICB2YWx1ZTpcbiAgICAgICAgICB0aGlzLmF1dG9SZW1lZGlhdGVSZHNEYXNoMDIzTGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm4hLnRvU3RyaW5nKCksXG4gICAgICB9LFxuICAgICk7XG4gICAgdGhpcy5hdXRvUmVtZWRpYXRlR2REYXNoMDAxTGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm4gPVxuICAgICAgYXV0b1JlbWVkaWF0ZUdkRGFzaDAwMUxhbWJkYVZlcnNpb25rN24zTXBHazhGZ2RHc0V2SnlINWMwQzd0S2U5ZlNqN3lnall5NnRzWDgucmVmO1xuICAgIG5ldyBjZGsuQ2ZuT3V0cHV0KFxuICAgICAgdGhpcyxcbiAgICAgIFwiQ2ZuT3V0cHV0QXV0b1JlbWVkaWF0ZUdERGFzaDAwMUxhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuXCIsXG4gICAgICB7XG4gICAgICAgIGtleTogXCJBdXRvUmVtZWRpYXRlR0REYXNoMDAxTGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm5cIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ3VycmVudCBMYW1iZGEgZnVuY3Rpb24gdmVyc2lvblwiLFxuICAgICAgICBleHBvcnROYW1lOlxuICAgICAgICAgIFwic2xzLWF1dG8tcmVtZWRpYXRlLXYxLUF1dG9SZW1lZGlhdGVHRERhc2gwMDFMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFyblwiLFxuICAgICAgICB2YWx1ZTpcbiAgICAgICAgICB0aGlzLmF1dG9SZW1lZGlhdGVHZERhc2gwMDFMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFybiEudG9TdHJpbmcoKSxcbiAgICAgIH0sXG4gICAgKTtcbiAgICB0aGlzLmF1dG9SZW1lZGlhdGVTM0Rhc2gwMDVMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFybiA9XG4gICAgICBhdXRvUmVtZWRpYXRlUzNEYXNoMDA1TGFtYmRhVmVyc2lvbkN4aVh0UHdZZU91RXA5czc0UWtJZGRYQWVWbTdaYlRxUHlweVloSWsucmVmO1xuICAgIG5ldyBjZGsuQ2ZuT3V0cHV0KFxuICAgICAgdGhpcyxcbiAgICAgIFwiQ2ZuT3V0cHV0QXV0b1JlbWVkaWF0ZVMzRGFzaDAwNUxhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuXCIsXG4gICAgICB7XG4gICAgICAgIGtleTogXCJBdXRvUmVtZWRpYXRlUzNEYXNoMDA1TGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm5cIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ3VycmVudCBMYW1iZGEgZnVuY3Rpb24gdmVyc2lvblwiLFxuICAgICAgICBleHBvcnROYW1lOlxuICAgICAgICAgIFwic2xzLWF1dG8tcmVtZWRpYXRlLXYxLUF1dG9SZW1lZGlhdGVTM0Rhc2gwMDVMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFyblwiLFxuICAgICAgICB2YWx1ZTpcbiAgICAgICAgICB0aGlzLmF1dG9SZW1lZGlhdGVTM0Rhc2gwMDVMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFybiEudG9TdHJpbmcoKSxcbiAgICAgIH0sXG4gICAgKTtcbiAgICB0aGlzLmF1dG9SZW1lZGlhdGVTM0Rhc2gwMDZMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFybiA9XG4gICAgICBhdXRvUmVtZWRpYXRlUzNEYXNoMDA2TGFtYmRhVmVyc2lvbjY0eHZpVmlYcFliY3hROHF4OXAxemJXaTU2aDhDcEF0V2kxdE12UHRBY2MucmVmO1xuICAgIG5ldyBjZGsuQ2ZuT3V0cHV0KFxuICAgICAgdGhpcyxcbiAgICAgIFwiQ2ZuT3V0cHV0QXV0b1JlbWVkaWF0ZVMzRGFzaDAwNkxhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuXCIsXG4gICAgICB7XG4gICAgICAgIGtleTogXCJBdXRvUmVtZWRpYXRlUzNEYXNoMDA2TGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm5cIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ3VycmVudCBMYW1iZGEgZnVuY3Rpb24gdmVyc2lvblwiLFxuICAgICAgICBleHBvcnROYW1lOlxuICAgICAgICAgIFwic2xzLWF1dG8tcmVtZWRpYXRlLXYxLUF1dG9SZW1lZGlhdGVTM0Rhc2gwMDZMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFyblwiLFxuICAgICAgICB2YWx1ZTpcbiAgICAgICAgICB0aGlzLmF1dG9SZW1lZGlhdGVTM0Rhc2gwMDZMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFybiEudG9TdHJpbmcoKSxcbiAgICAgIH0sXG4gICAgKTtcbiAgICB0aGlzLmF1dG9SZW1lZGlhdGVTM0Rhc2gwMDdMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFybiA9XG4gICAgICBhdXRvUmVtZWRpYXRlUzNEYXNoMDA3TGFtYmRhVmVyc2lvbjVJZzVET3J3WnlkM2FYdW12UXRhdEthUXpXcThzYTNBeEMwYUprY2xIZy5yZWY7XG4gICAgbmV3IGNkay5DZm5PdXRwdXQoXG4gICAgICB0aGlzLFxuICAgICAgXCJDZm5PdXRwdXRBdXRvUmVtZWRpYXRlUzNEYXNoMDA3TGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm5cIixcbiAgICAgIHtcbiAgICAgICAga2V5OiBcIkF1dG9SZW1lZGlhdGVTM0Rhc2gwMDdMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFyblwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJDdXJyZW50IExhbWJkYSBmdW5jdGlvbiB2ZXJzaW9uXCIsXG4gICAgICAgIGV4cG9ydE5hbWU6XG4gICAgICAgICAgXCJzbHMtYXV0by1yZW1lZGlhdGUtdjEtQXV0b1JlbWVkaWF0ZVMzRGFzaDAwN0xhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuXCIsXG4gICAgICAgIHZhbHVlOlxuICAgICAgICAgIHRoaXMuYXV0b1JlbWVkaWF0ZVMzRGFzaDAwN0xhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuIS50b1N0cmluZygpLFxuICAgICAgfSxcbiAgICApO1xuICAgIHRoaXMuYXV0b1JlbWVkaWF0ZUttc0Rhc2gwMDRMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFybiA9XG4gICAgICBhdXRvUmVtZWRpYXRlS21zRGFzaDAwNExhbWJkYVZlcnNpb25uZ3FxNDZacDRGTGphdGFZenh1Nlh4WVdtNDBLZzJ3UGNEZm4xZUJvQWdnLnJlZjtcbiAgICBuZXcgY2RrLkNmbk91dHB1dChcbiAgICAgIHRoaXMsXG4gICAgICBcIkNmbk91dHB1dEF1dG9SZW1lZGlhdGVLTVNEYXNoMDA0TGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm5cIixcbiAgICAgIHtcbiAgICAgICAga2V5OiBcIkF1dG9SZW1lZGlhdGVLTVNEYXNoMDA0TGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm5cIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ3VycmVudCBMYW1iZGEgZnVuY3Rpb24gdmVyc2lvblwiLFxuICAgICAgICBleHBvcnROYW1lOlxuICAgICAgICAgIFwic2xzLWF1dG8tcmVtZWRpYXRlLXYxLUF1dG9SZW1lZGlhdGVLTVNEYXNoMDA0TGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm5cIixcbiAgICAgICAgdmFsdWU6XG4gICAgICAgICAgdGhpcy5hdXRvUmVtZWRpYXRlS21zRGFzaDAwNExhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuIS50b1N0cmluZygpLFxuICAgICAgfSxcbiAgICApO1xuICAgIHRoaXMuYXV0b1JlbWVkaWF0ZU9yZ2FuaXphdGlvbnNEYXNoMDAyTGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm4gPVxuICAgICAgYXV0b1JlbWVkaWF0ZU9yZ2FuaXphdGlvbnNEYXNoMDAyTGFtYmRhVmVyc2lvblZidzhxNm5pTEdiZHk4UER6SnoybWZ2V3lCZTVkQ3JVcnpaZTdWMmdmay5yZWY7XG4gICAgbmV3IGNkay5DZm5PdXRwdXQoXG4gICAgICB0aGlzLFxuICAgICAgXCJDZm5PdXRwdXRBdXRvUmVtZWRpYXRlT3JnYW5pemF0aW9uc0Rhc2gwMDJMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFyblwiLFxuICAgICAge1xuICAgICAgICBrZXk6IFwiQXV0b1JlbWVkaWF0ZU9yZ2FuaXphdGlvbnNEYXNoMDAyTGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm5cIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ3VycmVudCBMYW1iZGEgZnVuY3Rpb24gdmVyc2lvblwiLFxuICAgICAgICBleHBvcnROYW1lOlxuICAgICAgICAgIFwic2xzLWF1dG8tcmVtZWRpYXRlLXYxLUF1dG9SZW1lZGlhdGVPcmdhbml6YXRpb25zRGFzaDAwMkxhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuXCIsXG4gICAgICAgIHZhbHVlOlxuICAgICAgICAgIHRoaXMuYXV0b1JlbWVkaWF0ZU9yZ2FuaXphdGlvbnNEYXNoMDAyTGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm4hLnRvU3RyaW5nKCksXG4gICAgICB9LFxuICAgICk7XG4gICAgdGhpcy5hdXRvUmVtZWRpYXRlUzNEYXNoMDA4TGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm4gPVxuICAgICAgYXV0b1JlbWVkaWF0ZVMzRGFzaDAwOExhbWJkYVZlcnNpb252RmEwcjB6VHlReHlicFFGaWRsNDV2RWZuQmd0a0dMYjVsTllhTjRYazBvLnJlZjtcbiAgICBuZXcgY2RrLkNmbk91dHB1dChcbiAgICAgIHRoaXMsXG4gICAgICBcIkNmbk91dHB1dEF1dG9SZW1lZGlhdGVTM0Rhc2gwMDhMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFyblwiLFxuICAgICAge1xuICAgICAgICBrZXk6IFwiQXV0b1JlbWVkaWF0ZVMzRGFzaDAwOExhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkN1cnJlbnQgTGFtYmRhIGZ1bmN0aW9uIHZlcnNpb25cIixcbiAgICAgICAgZXhwb3J0TmFtZTpcbiAgICAgICAgICBcInNscy1hdXRvLXJlbWVkaWF0ZS12MS1BdXRvUmVtZWRpYXRlUzNEYXNoMDA4TGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm5cIixcbiAgICAgICAgdmFsdWU6XG4gICAgICAgICAgdGhpcy5hdXRvUmVtZWRpYXRlUzNEYXNoMDA4TGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm4hLnRvU3RyaW5nKCksXG4gICAgICB9LFxuICAgICk7XG4gICAgdGhpcy5hdXRvUmVtZWRpYXRlUzNEYXNoMDA5TGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm4gPVxuICAgICAgYXV0b1JlbWVkaWF0ZVMzRGFzaDAwOUxhbWJkYVZlcnNpb25VcmVxaVFlckZqZ3JOWHgzWjJ0NUZkV2M3QmFKeGZUaUQybjdETHNBcGcucmVmO1xuICAgIG5ldyBjZGsuQ2ZuT3V0cHV0KFxuICAgICAgdGhpcyxcbiAgICAgIFwiQ2ZuT3V0cHV0QXV0b1JlbWVkaWF0ZVMzRGFzaDAwOUxhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuXCIsXG4gICAgICB7XG4gICAgICAgIGtleTogXCJBdXRvUmVtZWRpYXRlUzNEYXNoMDA5TGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm5cIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ3VycmVudCBMYW1iZGEgZnVuY3Rpb24gdmVyc2lvblwiLFxuICAgICAgICBleHBvcnROYW1lOlxuICAgICAgICAgIFwic2xzLWF1dG8tcmVtZWRpYXRlLXYxLUF1dG9SZW1lZGlhdGVTM0Rhc2gwMDlMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFyblwiLFxuICAgICAgICB2YWx1ZTpcbiAgICAgICAgICB0aGlzLmF1dG9SZW1lZGlhdGVTM0Rhc2gwMDlMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFybiEudG9TdHJpbmcoKSxcbiAgICAgIH0sXG4gICAgKTtcbiAgICB0aGlzLmF1dG9SZW1lZGlhdGVDdERhc2gwMDNMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFybiA9XG4gICAgICBhdXRvUmVtZWRpYXRlQ3REYXNoMDAzTGFtYmRhVmVyc2lvbjZnWXFBWnhtTGlteEp3dG8ybjJCZjlXaTV1NDhzbVJ4TTAyQXVNeEc0LnJlZjtcbiAgICBuZXcgY2RrLkNmbk91dHB1dChcbiAgICAgIHRoaXMsXG4gICAgICBcIkNmbk91dHB1dEF1dG9SZW1lZGlhdGVDVERhc2gwMDNMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFyblwiLFxuICAgICAge1xuICAgICAgICBrZXk6IFwiQXV0b1JlbWVkaWF0ZUNURGFzaDAwM0xhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkN1cnJlbnQgTGFtYmRhIGZ1bmN0aW9uIHZlcnNpb25cIixcbiAgICAgICAgZXhwb3J0TmFtZTpcbiAgICAgICAgICBcInNscy1hdXRvLXJlbWVkaWF0ZS12MS1BdXRvUmVtZWRpYXRlQ1REYXNoMDAzTGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm5cIixcbiAgICAgICAgdmFsdWU6XG4gICAgICAgICAgdGhpcy5hdXRvUmVtZWRpYXRlQ3REYXNoMDAzTGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm4hLnRvU3RyaW5nKCksXG4gICAgICB9LFxuICAgICk7XG4gICAgdGhpcy5hdXRvUmVtZWRpYXRlUmRzRGFzaDAwNkxhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuID1cbiAgICAgIGF1dG9SZW1lZGlhdGVSZHNEYXNoMDA2TGFtYmRhVmVyc2lvbk9YajRLZE9YZERvUEpnT3RSY3BkV21HVWhLODhjd1l6WWtNbW1yZFZhcy5yZWY7XG4gICAgbmV3IGNkay5DZm5PdXRwdXQoXG4gICAgICB0aGlzLFxuICAgICAgXCJDZm5PdXRwdXRBdXRvUmVtZWRpYXRlUkRTRGFzaDAwNkxhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuXCIsXG4gICAgICB7XG4gICAgICAgIGtleTogXCJBdXRvUmVtZWRpYXRlUkRTRGFzaDAwNkxhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkN1cnJlbnQgTGFtYmRhIGZ1bmN0aW9uIHZlcnNpb25cIixcbiAgICAgICAgZXhwb3J0TmFtZTpcbiAgICAgICAgICBcInNscy1hdXRvLXJlbWVkaWF0ZS12MS1BdXRvUmVtZWRpYXRlUkRTRGFzaDAwNkxhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuXCIsXG4gICAgICAgIHZhbHVlOlxuICAgICAgICAgIHRoaXMuYXV0b1JlbWVkaWF0ZVJkc0Rhc2gwMDZMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFybiEudG9TdHJpbmcoKSxcbiAgICAgIH0sXG4gICAgKTtcbiAgICB0aGlzLmF1dG9SZW1lZGlhdGVTM0Rhc2gwMTBMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFybiA9XG4gICAgICBhdXRvUmVtZWRpYXRlUzNEYXNoMDEwTGFtYmRhVmVyc2lvbnJRa2ZOZFlaaWNpc3RZVmMwdzJYbGZMalNsWXFvZmNmQXRhN2ZUbjVFLnJlZjtcbiAgICBuZXcgY2RrLkNmbk91dHB1dChcbiAgICAgIHRoaXMsXG4gICAgICBcIkNmbk91dHB1dEF1dG9SZW1lZGlhdGVTM0Rhc2gwMTBMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFyblwiLFxuICAgICAge1xuICAgICAgICBrZXk6IFwiQXV0b1JlbWVkaWF0ZVMzRGFzaDAxMExhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkN1cnJlbnQgTGFtYmRhIGZ1bmN0aW9uIHZlcnNpb25cIixcbiAgICAgICAgZXhwb3J0TmFtZTpcbiAgICAgICAgICBcInNscy1hdXRvLXJlbWVkaWF0ZS12MS1BdXRvUmVtZWRpYXRlUzNEYXNoMDEwTGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm5cIixcbiAgICAgICAgdmFsdWU6XG4gICAgICAgICAgdGhpcy5hdXRvUmVtZWRpYXRlUzNEYXNoMDEwTGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm4hLnRvU3RyaW5nKCksXG4gICAgICB9LFxuICAgICk7XG4gICAgdGhpcy5hdXRvUmVtZWRpYXRlUzNEYXNoMDEyTGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm4gPVxuICAgICAgYXV0b1JlbWVkaWF0ZVMzRGFzaDAxMkxhbWJkYVZlcnNpb25DeVFoUzJpR1phNG5kdEJlT3VMT2dWaU04ODU4ZlZ3SHdQZDFCOWFicy5yZWY7XG4gICAgbmV3IGNkay5DZm5PdXRwdXQoXG4gICAgICB0aGlzLFxuICAgICAgXCJDZm5PdXRwdXRBdXRvUmVtZWRpYXRlUzNEYXNoMDEyTGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm5cIixcbiAgICAgIHtcbiAgICAgICAga2V5OiBcIkF1dG9SZW1lZGlhdGVTM0Rhc2gwMTJMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFyblwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJDdXJyZW50IExhbWJkYSBmdW5jdGlvbiB2ZXJzaW9uXCIsXG4gICAgICAgIGV4cG9ydE5hbWU6XG4gICAgICAgICAgXCJzbHMtYXV0by1yZW1lZGlhdGUtdjEtQXV0b1JlbWVkaWF0ZVMzRGFzaDAxMkxhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuXCIsXG4gICAgICAgIHZhbHVlOlxuICAgICAgICAgIHRoaXMuYXV0b1JlbWVkaWF0ZVMzRGFzaDAxMkxhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuIS50b1N0cmluZygpLFxuICAgICAgfSxcbiAgICApO1xuICAgIHRoaXMuYXV0b1JlbWVkaWF0ZVNxc0Rhc2gwMDRMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFybiA9XG4gICAgICBhdXRvUmVtZWRpYXRlU3FzRGFzaDAwNExhbWJkYVZlcnNpb24xTmV1Rm92VkdoeWIwRzFkcGF5SmhrR2h4anJyMHR5bjExVmFTalhvbGtzLnJlZjtcbiAgICBuZXcgY2RrLkNmbk91dHB1dChcbiAgICAgIHRoaXMsXG4gICAgICBcIkNmbk91dHB1dEF1dG9SZW1lZGlhdGVTUVNEYXNoMDA0TGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm5cIixcbiAgICAgIHtcbiAgICAgICAga2V5OiBcIkF1dG9SZW1lZGlhdGVTUVNEYXNoMDA0TGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm5cIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ3VycmVudCBMYW1iZGEgZnVuY3Rpb24gdmVyc2lvblwiLFxuICAgICAgICBleHBvcnROYW1lOlxuICAgICAgICAgIFwic2xzLWF1dG8tcmVtZWRpYXRlLXYxLUF1dG9SZW1lZGlhdGVTUVNEYXNoMDA0TGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm5cIixcbiAgICAgICAgdmFsdWU6XG4gICAgICAgICAgdGhpcy5hdXRvUmVtZWRpYXRlU3FzRGFzaDAwNExhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuIS50b1N0cmluZygpLFxuICAgICAgfSxcbiAgICApO1xuICAgIHRoaXMuYXV0b1JlbWVkaWF0ZVJkc0Rhc2gwMDhMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFybiA9XG4gICAgICBhdXRvUmVtZWRpYXRlUmRzRGFzaDAwOExhbWJkYVZlcnNpb25mZWZOdDNEd3NJdTdZeXNrMjlsNjZsTXB0cThBdGZ2VWNVaFVtSWhHYy5yZWY7XG4gICAgbmV3IGNkay5DZm5PdXRwdXQoXG4gICAgICB0aGlzLFxuICAgICAgXCJDZm5PdXRwdXRBdXRvUmVtZWRpYXRlUkRTRGFzaDAwOExhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuXCIsXG4gICAgICB7XG4gICAgICAgIGtleTogXCJBdXRvUmVtZWRpYXRlUkRTRGFzaDAwOExhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkN1cnJlbnQgTGFtYmRhIGZ1bmN0aW9uIHZlcnNpb25cIixcbiAgICAgICAgZXhwb3J0TmFtZTpcbiAgICAgICAgICBcInNscy1hdXRvLXJlbWVkaWF0ZS12MS1BdXRvUmVtZWRpYXRlUkRTRGFzaDAwOExhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuXCIsXG4gICAgICAgIHZhbHVlOlxuICAgICAgICAgIHRoaXMuYXV0b1JlbWVkaWF0ZVJkc0Rhc2gwMDhMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFybiEudG9TdHJpbmcoKSxcbiAgICAgIH0sXG4gICAgKTtcbiAgICB0aGlzLmF1dG9SZW1lZGlhdGVDb25maWdEYXNoMDAxTGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm4gPVxuICAgICAgYXV0b1JlbWVkaWF0ZUNvbmZpZ0Rhc2gwMDFMYW1iZGFWZXJzaW9uakw3OTlxalhUbkxHZXFyYjdzUDhnaDZrU2xmNDVjRlhtM1VsQ2FVMjBrLnJlZjtcbiAgICBuZXcgY2RrLkNmbk91dHB1dChcbiAgICAgIHRoaXMsXG4gICAgICBcIkNmbk91dHB1dEF1dG9SZW1lZGlhdGVDb25maWdEYXNoMDAxTGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm5cIixcbiAgICAgIHtcbiAgICAgICAga2V5OiBcIkF1dG9SZW1lZGlhdGVDb25maWdEYXNoMDAxTGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm5cIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ3VycmVudCBMYW1iZGEgZnVuY3Rpb24gdmVyc2lvblwiLFxuICAgICAgICBleHBvcnROYW1lOlxuICAgICAgICAgIFwic2xzLWF1dG8tcmVtZWRpYXRlLXYxLUF1dG9SZW1lZGlhdGVDb25maWdEYXNoMDAxTGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm5cIixcbiAgICAgICAgdmFsdWU6XG4gICAgICAgICAgdGhpcy5hdXRvUmVtZWRpYXRlQ29uZmlnRGFzaDAwMUxhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuIS50b1N0cmluZygpLFxuICAgICAgfSxcbiAgICApO1xuICAgIHRoaXMuYXV0b1JlbWVkaWF0ZUNmbURhc2gwMDVMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFybiA9XG4gICAgICBhdXRvUmVtZWRpYXRlQ2ZtRGFzaDAwNUxhbWJkYVZlcnNpb25DcFJvOFlwNWtSem1vbWlvRUZrRmxXc1lmRGM1dkRhdzFRcGhBY2ZJLnJlZjtcbiAgICBuZXcgY2RrLkNmbk91dHB1dChcbiAgICAgIHRoaXMsXG4gICAgICBcIkNmbk91dHB1dEF1dG9SZW1lZGlhdGVDRk1EYXNoMDA1TGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm5cIixcbiAgICAgIHtcbiAgICAgICAga2V5OiBcIkF1dG9SZW1lZGlhdGVDRk1EYXNoMDA1TGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm5cIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ3VycmVudCBMYW1iZGEgZnVuY3Rpb24gdmVyc2lvblwiLFxuICAgICAgICBleHBvcnROYW1lOlxuICAgICAgICAgIFwic2xzLWF1dG8tcmVtZWRpYXRlLXYxLUF1dG9SZW1lZGlhdGVDRk1EYXNoMDA1TGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm5cIixcbiAgICAgICAgdmFsdWU6XG4gICAgICAgICAgdGhpcy5hdXRvUmVtZWRpYXRlQ2ZtRGFzaDAwNUxhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuIS50b1N0cmluZygpLFxuICAgICAgfSxcbiAgICApO1xuICAgIHRoaXMuYXV0b1JlbWVkaWF0ZVZwY0Rhc2gwMDFMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFybiA9XG4gICAgICBhdXRvUmVtZWRpYXRlVnBjRGFzaDAwMUxhbWJkYVZlcnNpb25sMTc2UlpuTmlsbk1jc01iNmQ4NHRoMlFieUluWHQ0UlFkRUFlTU5rYm4wLnJlZjtcbiAgICBuZXcgY2RrLkNmbk91dHB1dChcbiAgICAgIHRoaXMsXG4gICAgICBcIkNmbk91dHB1dEF1dG9SZW1lZGlhdGVWUENEYXNoMDAxTGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm5cIixcbiAgICAgIHtcbiAgICAgICAga2V5OiBcIkF1dG9SZW1lZGlhdGVWUENEYXNoMDAxTGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm5cIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ3VycmVudCBMYW1iZGEgZnVuY3Rpb24gdmVyc2lvblwiLFxuICAgICAgICBleHBvcnROYW1lOlxuICAgICAgICAgIFwic2xzLWF1dG8tcmVtZWRpYXRlLXYxLUF1dG9SZW1lZGlhdGVWUENEYXNoMDAxTGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm5cIixcbiAgICAgICAgdmFsdWU6XG4gICAgICAgICAgdGhpcy5hdXRvUmVtZWRpYXRlVnBjRGFzaDAwMUxhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuIS50b1N0cmluZygpLFxuICAgICAgfSxcbiAgICApO1xuICAgIHRoaXMuYXV0b1JlbWVkaWF0ZUVic0Rhc2gwMDlMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFybiA9XG4gICAgICBhdXRvUmVtZWRpYXRlRWJzRGFzaDAwOUxhbWJkYVZlcnNpb25nWXhoQ3h5aDhhMWVTdW9FUmhmZEZmMTR1VXdyN2N1YUNBc0NQejdGc2cwLnJlZjtcbiAgICBuZXcgY2RrLkNmbk91dHB1dChcbiAgICAgIHRoaXMsXG4gICAgICBcIkNmbk91dHB1dEF1dG9SZW1lZGlhdGVFQlNEYXNoMDA5TGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm5cIixcbiAgICAgIHtcbiAgICAgICAga2V5OiBcIkF1dG9SZW1lZGlhdGVFQlNEYXNoMDA5TGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm5cIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ3VycmVudCBMYW1iZGEgZnVuY3Rpb24gdmVyc2lvblwiLFxuICAgICAgICBleHBvcnROYW1lOlxuICAgICAgICAgIFwic2xzLWF1dG8tcmVtZWRpYXRlLXYxLUF1dG9SZW1lZGlhdGVFQlNEYXNoMDA5TGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm5cIixcbiAgICAgICAgdmFsdWU6XG4gICAgICAgICAgdGhpcy5hdXRvUmVtZWRpYXRlRWJzRGFzaDAwOUxhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuIS50b1N0cmluZygpLFxuICAgICAgfSxcbiAgICApO1xuICAgIHRoaXMuYXV0b1JlbWVkaWF0ZVJzRGFzaDAwMUxhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuID1cbiAgICAgIGF1dG9SZW1lZGlhdGVSc0Rhc2gwMDFMYW1iZGFWZXJzaW9uQnRDWXh5TDVZYWs0SjgzdEgxMW84d25WcnV1ejU1WGhiTXV5T2lMcmMucmVmO1xuICAgIG5ldyBjZGsuQ2ZuT3V0cHV0KFxuICAgICAgdGhpcyxcbiAgICAgIFwiQ2ZuT3V0cHV0QXV0b1JlbWVkaWF0ZVJTRGFzaDAwMUxhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuXCIsXG4gICAgICB7XG4gICAgICAgIGtleTogXCJBdXRvUmVtZWRpYXRlUlNEYXNoMDAxTGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm5cIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ3VycmVudCBMYW1iZGEgZnVuY3Rpb24gdmVyc2lvblwiLFxuICAgICAgICBleHBvcnROYW1lOlxuICAgICAgICAgIFwic2xzLWF1dG8tcmVtZWRpYXRlLXYxLUF1dG9SZW1lZGlhdGVSU0Rhc2gwMDFMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFyblwiLFxuICAgICAgICB2YWx1ZTpcbiAgICAgICAgICB0aGlzLmF1dG9SZW1lZGlhdGVSc0Rhc2gwMDFMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFybiEudG9TdHJpbmcoKSxcbiAgICAgIH0sXG4gICAgKTtcbiAgICB0aGlzLmF1dG9SZW1lZGlhdGVFYzJEYXNoMDAyTGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm4gPVxuICAgICAgYXV0b1JlbWVkaWF0ZUVjMkRhc2gwMDJMYW1iZGFWZXJzaW9uUExlOUI0amd6RXQ2amRGMm9zblNyRG1VeXFyVFNjdXUxcDIwcWtRaE5hcS5yZWY7XG4gICAgbmV3IGNkay5DZm5PdXRwdXQoXG4gICAgICB0aGlzLFxuICAgICAgXCJDZm5PdXRwdXRBdXRvUmVtZWRpYXRlRUMyRGFzaDAwMkxhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuXCIsXG4gICAgICB7XG4gICAgICAgIGtleTogXCJBdXRvUmVtZWRpYXRlRUMyRGFzaDAwMkxhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkN1cnJlbnQgTGFtYmRhIGZ1bmN0aW9uIHZlcnNpb25cIixcbiAgICAgICAgZXhwb3J0TmFtZTpcbiAgICAgICAgICBcInNscy1hdXRvLXJlbWVkaWF0ZS12MS1BdXRvUmVtZWRpYXRlRUMyRGFzaDAwMkxhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuXCIsXG4gICAgICAgIHZhbHVlOlxuICAgICAgICAgIHRoaXMuYXV0b1JlbWVkaWF0ZUVjMkRhc2gwMDJMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFybiEudG9TdHJpbmcoKSxcbiAgICAgIH0sXG4gICAgKTtcbiAgICB0aGlzLmF1dG9SZW1lZGlhdGVSc0Rhc2gwMTlMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFybiA9XG4gICAgICBhdXRvUmVtZWRpYXRlUnNEYXNoMDE5TGFtYmRhVmVyc2lvbktmdTJudndpVWd0Y2NkNTVjMmgxSmprM3FGaHc2NHRrUHdhYktlMDJzTS5yZWY7XG4gICAgbmV3IGNkay5DZm5PdXRwdXQoXG4gICAgICB0aGlzLFxuICAgICAgXCJDZm5PdXRwdXRBdXRvUmVtZWRpYXRlUlNEYXNoMDE5TGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm5cIixcbiAgICAgIHtcbiAgICAgICAga2V5OiBcIkF1dG9SZW1lZGlhdGVSU0Rhc2gwMTlMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFyblwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJDdXJyZW50IExhbWJkYSBmdW5jdGlvbiB2ZXJzaW9uXCIsXG4gICAgICAgIGV4cG9ydE5hbWU6XG4gICAgICAgICAgXCJzbHMtYXV0by1yZW1lZGlhdGUtdjEtQXV0b1JlbWVkaWF0ZVJTRGFzaDAxOUxhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuXCIsXG4gICAgICAgIHZhbHVlOlxuICAgICAgICAgIHRoaXMuYXV0b1JlbWVkaWF0ZVJzRGFzaDAxOUxhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuIS50b1N0cmluZygpLFxuICAgICAgfSxcbiAgICApO1xuICAgIHRoaXMuYXV0b1JlbWVkaWF0ZUVjMkRhc2gwMDNMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFybiA9XG4gICAgICBhdXRvUmVtZWRpYXRlRWMyRGFzaDAwM0xhbWJkYVZlcnNpb25oYlNvOXlUNzJ1RHZyeTFzbTRDbHJvZ0JpU3RrdDlkdUlzajVGaE5jNlUucmVmO1xuICAgIG5ldyBjZGsuQ2ZuT3V0cHV0KFxuICAgICAgdGhpcyxcbiAgICAgIFwiQ2ZuT3V0cHV0QXV0b1JlbWVkaWF0ZUVDMkRhc2gwMDNMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFyblwiLFxuICAgICAge1xuICAgICAgICBrZXk6IFwiQXV0b1JlbWVkaWF0ZUVDMkRhc2gwMDNMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFyblwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJDdXJyZW50IExhbWJkYSBmdW5jdGlvbiB2ZXJzaW9uXCIsXG4gICAgICAgIGV4cG9ydE5hbWU6XG4gICAgICAgICAgXCJzbHMtYXV0by1yZW1lZGlhdGUtdjEtQXV0b1JlbWVkaWF0ZUVDMkRhc2gwMDNMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFyblwiLFxuICAgICAgICB2YWx1ZTpcbiAgICAgICAgICB0aGlzLmF1dG9SZW1lZGlhdGVFYzJEYXNoMDAzTGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm4hLnRvU3RyaW5nKCksXG4gICAgICB9LFxuICAgICk7XG4gICAgdGhpcy5hdXRvUmVtZWRpYXRlRWMyRGFzaDAwNUxhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuID1cbiAgICAgIGF1dG9SZW1lZGlhdGVFYzJEYXNoMDA1TGFtYmRhVmVyc2lvbnZLOTg3NXcwaGRGeExzSHRlVmdDekl5UGY3cmhPcWVhNjZ3dzBhQncucmVmO1xuICAgIG5ldyBjZGsuQ2ZuT3V0cHV0KFxuICAgICAgdGhpcyxcbiAgICAgIFwiQ2ZuT3V0cHV0QXV0b1JlbWVkaWF0ZUVDMkRhc2gwMDVMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFyblwiLFxuICAgICAge1xuICAgICAgICBrZXk6IFwiQXV0b1JlbWVkaWF0ZUVDMkRhc2gwMDVMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFyblwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJDdXJyZW50IExhbWJkYSBmdW5jdGlvbiB2ZXJzaW9uXCIsXG4gICAgICAgIGV4cG9ydE5hbWU6XG4gICAgICAgICAgXCJzbHMtYXV0by1yZW1lZGlhdGUtdjEtQXV0b1JlbWVkaWF0ZUVDMkRhc2gwMDVMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFyblwiLFxuICAgICAgICB2YWx1ZTpcbiAgICAgICAgICB0aGlzLmF1dG9SZW1lZGlhdGVFYzJEYXNoMDA1TGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm4hLnRvU3RyaW5nKCksXG4gICAgICB9LFxuICAgICk7XG4gICAgdGhpcy5hdXRvUmVtZWRpYXRlRWMyRGFzaDAxOUxhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuID1cbiAgICAgIGF1dG9SZW1lZGlhdGVFYzJEYXNoMDE5TGFtYmRhVmVyc2lvblEyckhLY3BlNVl4Nk1La051c0RhOTB2WmYzN0p6d0JvaDdhVVBjbEd3V28ucmVmO1xuICAgIG5ldyBjZGsuQ2ZuT3V0cHV0KFxuICAgICAgdGhpcyxcbiAgICAgIFwiQ2ZuT3V0cHV0QXV0b1JlbWVkaWF0ZUVDMkRhc2gwMTlMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFyblwiLFxuICAgICAge1xuICAgICAgICBrZXk6IFwiQXV0b1JlbWVkaWF0ZUVDMkRhc2gwMTlMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFyblwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJDdXJyZW50IExhbWJkYSBmdW5jdGlvbiB2ZXJzaW9uXCIsXG4gICAgICAgIGV4cG9ydE5hbWU6XG4gICAgICAgICAgXCJzbHMtYXV0by1yZW1lZGlhdGUtdjEtQXV0b1JlbWVkaWF0ZUVDMkRhc2gwMTlMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFyblwiLFxuICAgICAgICB2YWx1ZTpcbiAgICAgICAgICB0aGlzLmF1dG9SZW1lZGlhdGVFYzJEYXNoMDE5TGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm4hLnRvU3RyaW5nKCksXG4gICAgICB9LFxuICAgICk7XG4gICAgdGhpcy5hdXRvUmVtZWRpYXRlRWMyRGFzaDAwNExhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuID1cbiAgICAgIGF1dG9SZW1lZGlhdGVFYzJEYXNoMDA0TGFtYmRhVmVyc2lvblo1elloM1hwR3paYTc4bXo5bDhJbDFCZ1l0SnVhZThJVnVuck50R2RlUG8ucmVmO1xuICAgIG5ldyBjZGsuQ2ZuT3V0cHV0KFxuICAgICAgdGhpcyxcbiAgICAgIFwiQ2ZuT3V0cHV0QXV0b1JlbWVkaWF0ZUVDMkRhc2gwMDRMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFyblwiLFxuICAgICAge1xuICAgICAgICBrZXk6IFwiQXV0b1JlbWVkaWF0ZUVDMkRhc2gwMDRMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFyblwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJDdXJyZW50IExhbWJkYSBmdW5jdGlvbiB2ZXJzaW9uXCIsXG4gICAgICAgIGV4cG9ydE5hbWU6XG4gICAgICAgICAgXCJzbHMtYXV0by1yZW1lZGlhdGUtdjEtQXV0b1JlbWVkaWF0ZUVDMkRhc2gwMDRMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFyblwiLFxuICAgICAgICB2YWx1ZTpcbiAgICAgICAgICB0aGlzLmF1dG9SZW1lZGlhdGVFYzJEYXNoMDA0TGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm4hLnRvU3RyaW5nKCksXG4gICAgICB9LFxuICAgICk7XG4gICAgdGhpcy5hdXRvUmVtZWRpYXRlRWMyRGFzaDAwNkxhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuID1cbiAgICAgIGF1dG9SZW1lZGlhdGVFYzJEYXNoMDA2TGFtYmRhVmVyc2lvbkc0R2NiOTFpNm9kNFBXcGxJMnhIWmtLMW1XcExpZzVOY3UwWmNaN3FFMnEucmVmO1xuICAgIG5ldyBjZGsuQ2ZuT3V0cHV0KFxuICAgICAgdGhpcyxcbiAgICAgIFwiQ2ZuT3V0cHV0QXV0b1JlbWVkaWF0ZUVDMkRhc2gwMDZMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFyblwiLFxuICAgICAge1xuICAgICAgICBrZXk6IFwiQXV0b1JlbWVkaWF0ZUVDMkRhc2gwMDZMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFyblwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJDdXJyZW50IExhbWJkYSBmdW5jdGlvbiB2ZXJzaW9uXCIsXG4gICAgICAgIGV4cG9ydE5hbWU6XG4gICAgICAgICAgXCJzbHMtYXV0by1yZW1lZGlhdGUtdjEtQXV0b1JlbWVkaWF0ZUVDMkRhc2gwMDZMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFyblwiLFxuICAgICAgICB2YWx1ZTpcbiAgICAgICAgICB0aGlzLmF1dG9SZW1lZGlhdGVFYzJEYXNoMDA2TGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm4hLnRvU3RyaW5nKCksXG4gICAgICB9LFxuICAgICk7XG4gICAgdGhpcy5hdXRvUmVtZWRpYXRlRWMyRGFzaDAwOExhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuID1cbiAgICAgIGF1dG9SZW1lZGlhdGVFYzJEYXNoMDA4TGFtYmRhVmVyc2lvblM2OG1MSHpzZHVnZWhBd1htWVp0VWRnN0IxdnRleVd6dGE2NFVseS5yZWY7XG4gICAgbmV3IGNkay5DZm5PdXRwdXQoXG4gICAgICB0aGlzLFxuICAgICAgXCJDZm5PdXRwdXRBdXRvUmVtZWRpYXRlRUMyRGFzaDAwOExhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuXCIsXG4gICAgICB7XG4gICAgICAgIGtleTogXCJBdXRvUmVtZWRpYXRlRUMyRGFzaDAwOExhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkN1cnJlbnQgTGFtYmRhIGZ1bmN0aW9uIHZlcnNpb25cIixcbiAgICAgICAgZXhwb3J0TmFtZTpcbiAgICAgICAgICBcInNscy1hdXRvLXJlbWVkaWF0ZS12MS1BdXRvUmVtZWRpYXRlRUMyRGFzaDAwOExhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuXCIsXG4gICAgICAgIHZhbHVlOlxuICAgICAgICAgIHRoaXMuYXV0b1JlbWVkaWF0ZUVjMkRhc2gwMDhMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFybiEudG9TdHJpbmcoKSxcbiAgICAgIH0sXG4gICAgKTtcbiAgICB0aGlzLmF1dG9SZW1lZGlhdGVFYzJEYXNoMDQzTGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm4gPVxuICAgICAgYXV0b1JlbWVkaWF0ZUVjMkRhc2gwNDNMYW1iZGFWZXJzaW9uaHVmeUl5NEZ4dGdSbFh4bTVlaDB4MXpUbXZQaU5ncVdodGp3eGJMN3JDcy5yZWY7XG4gICAgbmV3IGNkay5DZm5PdXRwdXQoXG4gICAgICB0aGlzLFxuICAgICAgXCJDZm5PdXRwdXRBdXRvUmVtZWRpYXRlRUMyRGFzaDA0M0xhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuXCIsXG4gICAgICB7XG4gICAgICAgIGtleTogXCJBdXRvUmVtZWRpYXRlRUMyRGFzaDA0M0xhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkN1cnJlbnQgTGFtYmRhIGZ1bmN0aW9uIHZlcnNpb25cIixcbiAgICAgICAgZXhwb3J0TmFtZTpcbiAgICAgICAgICBcInNscy1hdXRvLXJlbWVkaWF0ZS12MS1BdXRvUmVtZWRpYXRlRUMyRGFzaDA0M0xhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuXCIsXG4gICAgICAgIHZhbHVlOlxuICAgICAgICAgIHRoaXMuYXV0b1JlbWVkaWF0ZUVjMkRhc2gwNDNMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFybiEudG9TdHJpbmcoKSxcbiAgICAgIH0sXG4gICAgKTtcbiAgICB0aGlzLmF1dG9SZW1lZGlhdGVSc0Rhc2gwMjNMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFybiA9XG4gICAgICBhdXRvUmVtZWRpYXRlUnNEYXNoMDIzTGFtYmRhVmVyc2lvbjh4RVBxNFhCZUw3ZjlIOXhuNmpXRmZwcEt2NmtxOWNUemszYnh3N0FleEEucmVmO1xuICAgIG5ldyBjZGsuQ2ZuT3V0cHV0KFxuICAgICAgdGhpcyxcbiAgICAgIFwiQ2ZuT3V0cHV0QXV0b1JlbWVkaWF0ZVJTRGFzaDAyM0xhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuXCIsXG4gICAgICB7XG4gICAgICAgIGtleTogXCJBdXRvUmVtZWRpYXRlUlNEYXNoMDIzTGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm5cIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ3VycmVudCBMYW1iZGEgZnVuY3Rpb24gdmVyc2lvblwiLFxuICAgICAgICBleHBvcnROYW1lOlxuICAgICAgICAgIFwic2xzLWF1dG8tcmVtZWRpYXRlLXYxLUF1dG9SZW1lZGlhdGVSU0Rhc2gwMjNMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFyblwiLFxuICAgICAgICB2YWx1ZTpcbiAgICAgICAgICB0aGlzLmF1dG9SZW1lZGlhdGVSc0Rhc2gwMjNMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFybiEudG9TdHJpbmcoKSxcbiAgICAgIH0sXG4gICAgKTtcbiAgICB0aGlzLmF1dG9SZW1lZGlhdGVFYzJEYXNoMDQ1TGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm4gPVxuICAgICAgYXV0b1JlbWVkaWF0ZUVjMkRhc2gwNDVMYW1iZGFWZXJzaW9uaUtCY1ZrSHQzZnF0UDYzRWxmSjl6NnZaNmJVZVdhME9tRHFUaVV4UmUucmVmO1xuICAgIG5ldyBjZGsuQ2ZuT3V0cHV0KFxuICAgICAgdGhpcyxcbiAgICAgIFwiQ2ZuT3V0cHV0QXV0b1JlbWVkaWF0ZUVDMkRhc2gwNDVMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFyblwiLFxuICAgICAge1xuICAgICAgICBrZXk6IFwiQXV0b1JlbWVkaWF0ZUVDMkRhc2gwNDVMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFyblwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJDdXJyZW50IExhbWJkYSBmdW5jdGlvbiB2ZXJzaW9uXCIsXG4gICAgICAgIGV4cG9ydE5hbWU6XG4gICAgICAgICAgXCJzbHMtYXV0by1yZW1lZGlhdGUtdjEtQXV0b1JlbWVkaWF0ZUVDMkRhc2gwNDVMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFyblwiLFxuICAgICAgICB2YWx1ZTpcbiAgICAgICAgICB0aGlzLmF1dG9SZW1lZGlhdGVFYzJEYXNoMDQ1TGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm4hLnRvU3RyaW5nKCksXG4gICAgICB9LFxuICAgICk7XG4gICAgdGhpcy5hdXRvUmVtZWRpYXRlRWMyRGFzaDAzOExhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuID1cbiAgICAgIGF1dG9SZW1lZGlhdGVFYzJEYXNoMDM4TGFtYmRhVmVyc2lvbkZRdHN5NG9tbjVCV3VybGZOcmJZOGpwdENpWHJIcThjVTRNcW9vT0VnYy5yZWY7XG4gICAgbmV3IGNkay5DZm5PdXRwdXQoXG4gICAgICB0aGlzLFxuICAgICAgXCJDZm5PdXRwdXRBdXRvUmVtZWRpYXRlRUMyRGFzaDAzOExhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuXCIsXG4gICAgICB7XG4gICAgICAgIGtleTogXCJBdXRvUmVtZWRpYXRlRUMyRGFzaDAzOExhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkN1cnJlbnQgTGFtYmRhIGZ1bmN0aW9uIHZlcnNpb25cIixcbiAgICAgICAgZXhwb3J0TmFtZTpcbiAgICAgICAgICBcInNscy1hdXRvLXJlbWVkaWF0ZS12MS1BdXRvUmVtZWRpYXRlRUMyRGFzaDAzOExhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuXCIsXG4gICAgICAgIHZhbHVlOlxuICAgICAgICAgIHRoaXMuYXV0b1JlbWVkaWF0ZUVjMkRhc2gwMzhMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFybiEudG9TdHJpbmcoKSxcbiAgICAgIH0sXG4gICAgKTtcbiAgICB0aGlzLmF1dG9SZW1lZGlhdGVFYzJEYXNoMDQwTGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm4gPVxuICAgICAgYXV0b1JlbWVkaWF0ZUVjMkRhc2gwNDBMYW1iZGFWZXJzaW9uakN0RWRLZERvdDZWbkFkRHV2TXJOdlltanMzb0lxWGJTOGtSdzRLNW5Zcy5yZWY7XG4gICAgbmV3IGNkay5DZm5PdXRwdXQoXG4gICAgICB0aGlzLFxuICAgICAgXCJDZm5PdXRwdXRBdXRvUmVtZWRpYXRlRUMyRGFzaDA0MExhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuXCIsXG4gICAgICB7XG4gICAgICAgIGtleTogXCJBdXRvUmVtZWRpYXRlRUMyRGFzaDA0MExhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkN1cnJlbnQgTGFtYmRhIGZ1bmN0aW9uIHZlcnNpb25cIixcbiAgICAgICAgZXhwb3J0TmFtZTpcbiAgICAgICAgICBcInNscy1hdXRvLXJlbWVkaWF0ZS12MS1BdXRvUmVtZWRpYXRlRUMyRGFzaDA0MExhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuXCIsXG4gICAgICAgIHZhbHVlOlxuICAgICAgICAgIHRoaXMuYXV0b1JlbWVkaWF0ZUVjMkRhc2gwNDBMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFybiEudG9TdHJpbmcoKSxcbiAgICAgIH0sXG4gICAgKTtcbiAgICB0aGlzLmF1dG9SZW1lZGlhdGVFYzJEYXNoMDM5TGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm4gPVxuICAgICAgYXV0b1JlbWVkaWF0ZUVjMkRhc2gwMzlMYW1iZGFWZXJzaW9udk9tREZyRWpab3R4NmJ3UDlsTmx1YTE1bnFUcldkbXBPY1M3ZlFwN2UucmVmO1xuICAgIG5ldyBjZGsuQ2ZuT3V0cHV0KFxuICAgICAgdGhpcyxcbiAgICAgIFwiQ2ZuT3V0cHV0QXV0b1JlbWVkaWF0ZUVDMkRhc2gwMzlMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFyblwiLFxuICAgICAge1xuICAgICAgICBrZXk6IFwiQXV0b1JlbWVkaWF0ZUVDMkRhc2gwMzlMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFyblwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJDdXJyZW50IExhbWJkYSBmdW5jdGlvbiB2ZXJzaW9uXCIsXG4gICAgICAgIGV4cG9ydE5hbWU6XG4gICAgICAgICAgXCJzbHMtYXV0by1yZW1lZGlhdGUtdjEtQXV0b1JlbWVkaWF0ZUVDMkRhc2gwMzlMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFyblwiLFxuICAgICAgICB2YWx1ZTpcbiAgICAgICAgICB0aGlzLmF1dG9SZW1lZGlhdGVFYzJEYXNoMDM5TGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm4hLnRvU3RyaW5nKCksXG4gICAgICB9LFxuICAgICk7XG4gICAgdGhpcy50cnVzdGVkQWR2aXNvckRhc2gwMDNMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFybiA9XG4gICAgICB0cnVzdGVkQWR2aXNvckRhc2gwMDNMYW1iZGFWZXJzaW9uZFQzY2NwWnYyQmtvR21MT2Y5bmtxOVA3emRFek9sYng4VHM5SXVSZVEucmVmO1xuICAgIG5ldyBjZGsuQ2ZuT3V0cHV0KFxuICAgICAgdGhpcyxcbiAgICAgIFwiQ2ZuT3V0cHV0VHJ1c3RlZEFkdmlzb3JEYXNoMDAzTGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm5cIixcbiAgICAgIHtcbiAgICAgICAga2V5OiBcIlRydXN0ZWRBZHZpc29yRGFzaDAwM0xhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkN1cnJlbnQgTGFtYmRhIGZ1bmN0aW9uIHZlcnNpb25cIixcbiAgICAgICAgZXhwb3J0TmFtZTpcbiAgICAgICAgICBcInNscy1hdXRvLXJlbWVkaWF0ZS12MS1UcnVzdGVkQWR2aXNvckRhc2gwMDNMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFyblwiLFxuICAgICAgICB2YWx1ZTogdGhpcy50cnVzdGVkQWR2aXNvckRhc2gwMDNMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFybiEudG9TdHJpbmcoKSxcbiAgICAgIH0sXG4gICAgKTtcbiAgICB0aGlzLmF1dG9SZW1lZGlhdGVLaW5lc2lzRGFzaDAwMUxhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuID1cbiAgICAgIGF1dG9SZW1lZGlhdGVLaW5lc2lzRGFzaDAwMUxhbWJkYVZlcnNpb25LTHF3ZzJuSGowTXNuaXBEbkFhS2FsTmZMMFp5bXZEbkJobktIcDA0LnJlZjtcbiAgICBuZXcgY2RrLkNmbk91dHB1dChcbiAgICAgIHRoaXMsXG4gICAgICBcIkNmbk91dHB1dEF1dG9SZW1lZGlhdGVLaW5lc2lzRGFzaDAwMUxhbWJkYUZ1bmN0aW9uUXVhbGlmaWVkQXJuXCIsXG4gICAgICB7XG4gICAgICAgIGtleTogXCJBdXRvUmVtZWRpYXRlS2luZXNpc0Rhc2gwMDFMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFyblwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJDdXJyZW50IExhbWJkYSBmdW5jdGlvbiB2ZXJzaW9uXCIsXG4gICAgICAgIGV4cG9ydE5hbWU6XG4gICAgICAgICAgXCJzbHMtYXV0by1yZW1lZGlhdGUtdjEtQXV0b1JlbWVkaWF0ZUtpbmVzaXNEYXNoMDAxTGFtYmRhRnVuY3Rpb25RdWFsaWZpZWRBcm5cIixcbiAgICAgICAgdmFsdWU6XG4gICAgICAgICAgdGhpcy5hdXRvUmVtZWRpYXRlS2luZXNpc0Rhc2gwMDFMYW1iZGFGdW5jdGlvblF1YWxpZmllZEFybiEudG9TdHJpbmcoKSxcbiAgICAgIH0sXG4gICAgKTtcbiAgfVxufVxuIl19