"use strict";

const source = require("../functions/AutoRemediateS3-010");
const AWS = require("aws-sdk-mock");

const sampleEvent = {
	id: "ccc:HJzFMHchx:S3-010:S3:ap-southeast-2:sample-bucket",
	organisationId: "some-organisation",
	accountId: "abcdef",
	ruleId: "S3-010",
	ruleTitle: "S3 Bucket Authenticated Users 'FULL_CONTROL' Access",
	service: "S3",
	region: "ap-southeast-2",
	riskLevel: "VERY_HIGH",
	categories: ["security"],
	compliances: ["AWAF"],
	message: "Bucket sample-bucket allows  authenticated users FULL_CONTROL access.",
	resource: "sample-bucket",
	status: "FAILURE",
	statusRiskLevel: "FAILURE:1",
	lastUpdatedDate: null,
	lastUpdatedBy: "SYSTEM",
	resolvedBy: "SYSTEM",
	eventId: "Skzp7ra1WW",
	ccrn: "ccrn:aws:HJzFMHchx:S3:global:sample-bucket",
	tags: [],
	cost: "0",
	waste: "0",
	lastModifiedDate: "1511060191925",
	lastModifiedBy: "SYSTEM"
};

const awsMockCallback = jestFn => {
	return function (params, callback) {
		try {
			const result = jestFn(params, callback);
			callback(null, result);
		} catch (err) {
			callback(err);
		}
	};
};

describe("S3-010 AutoRemediation", () => {
	let getBucketAclMock;
	let putBucketAclMock;
	const grantReadAcpAllUsers = {
		Grantee: { Type: "Group", URI: "http://acs.amazonaws.com/groups/global/AllUsers" },
		Permission: "READ_ACP"
	};
	const grantReadAllUsers = {
		Grantee: { Type: "Group", URI: "http://acs.amazonaws.com/groups/global/AllUsers" },
		Permission: "READ"
	};
	const grantWriteAcpAllUsers = {
		Grantee: { Type: "Group", URI: "http://acs.amazonaws.com/groups/global/AllUsers" },
		Permission: "WRITE_ACP"
	};
	const grantWriteAllUsers = {
		Grantee: { Type: "Group", URI: "http://acs.amazonaws.com/groups/global/AllUsers" },
		Permission: "WRITE"
	};
	const grantFullControlAllUsers = {
		Grantee: { Type: "Group", URI: "http://acs.amazonaws.com/groups/global/AllUsers" },
		Permission: "FULL_CONTROL"
	};
	const grantReadAcpAuthenticatedUsers = {
		Grantee: {
			Type: "Group",
			URI: "http://acs.amazonaws.com/groups/global/AuthenticatedUsers"
		},
		Permission: "READ_ACP"
	};
	const grantReadAuthenticatedUsers = {
		Grantee: {
			Type: "Group",
			URI: "http://acs.amazonaws.com/groups/global/AuthenticatedUsers"
		},
		Permission: "READ"
	};
	const grantWriteAcpAuthenticatedUsers = {
		Grantee: {
			Type: "Group",
			URI: "http://acs.amazonaws.com/groups/global/AuthenticatedUsers"
		},
		Permission: "WRITE_ACP"
	};
	const grantWriteAuthenticatedUsers = {
		Grantee: {
			Type: "Group",
			URI: "http://acs.amazonaws.com/groups/global/AuthenticatedUsers"
		},
		Permission: "WRITE"
	};
	const grantFullControlAuthenticatedUsers = {
		Grantee: {
			Type: "Group",
			URI: "http://acs.amazonaws.com/groups/global/AuthenticatedUsers"
		},
		Permission: "FULL_CONTROL"
	};
	const grantFullControlCanonicalUser = {
		Grantee: {
			DisplayName: "user_name",
			ID: "account_user_id123455667890abcdef",
			Type: "CanonicalUser"
		},
		Permission: "FULL_CONTROL"
	};

	beforeEach(() => {
		getBucketAclMock = jest.fn();
		putBucketAclMock = jest.fn();
		AWS.mock("S3", "getBucketAcl", awsMockCallback(getBucketAclMock));
		AWS.mock("S3", "putBucketAcl", awsMockCallback(putBucketAclMock));
	});

	afterEach(() => {
		AWS.restore();
	});

	describe("valid invocation", () => {
		beforeEach(done => {
			getBucketAclMock.mockImplementation(() => {
				return {
					Owner: {
						DisplayName: "user_name",
						ID: "account_user_id123455667890abcdef"
					},
					Grants: [
						{
							Grantee: {
								DisplayName: "user_name",
								ID: "account_user_id123455667890abcdef",
								Type: "CanonicalUser"
							},
							Permission: "FULL_CONTROL"
						},
						grantReadAllUsers,
						grantReadAcpAllUsers,
						grantWriteAllUsers,
						grantWriteAcpAllUsers,
						grantFullControlAllUsers,
						grantReadAuthenticatedUsers,
						grantReadAcpAuthenticatedUsers,
						grantWriteAuthenticatedUsers,
						grantWriteAcpAuthenticatedUsers,
						grantFullControlAuthenticatedUsers,
						grantFullControlCanonicalUser
					]
				};
			});
			const mockCallback = (err, data) => {
				if (err) {
					done.fail();
				} else {
					done();
				}
			};
			source.handler(sampleEvent, jest.fn(), mockCallback);
		});

		it("should get the correct bucket ACL from S3", () => {
			const expectedParams = {
				Bucket: "sample-bucket"
			};
			expect(getBucketAclMock).toHaveBeenCalledWith(expectedParams, expect.any(Function));
		});

		it("should set a new ACL on the affected bucket", () => {
			const expectedParams = {
				Bucket: "sample-bucket",
				AccessControlPolicy: expect.any(Object)
			};
			expect(putBucketAclMock).toHaveBeenCalled();
			expect(putBucketAclMock).toHaveBeenCalledWith(expectedParams, expect.any(Function));
		});

		it("should remove FULL_CONTROL grants for Authenticated Users", () => {
			expect(putBucketAclMock).not.toHaveBeenCalledWith(
				expect.objectContaining(grantFullControlAuthenticatedUsers),
				expect.any(Function)
			);
		});

		it("should keep READ_ACP grants for Authenticated Users", () => {
			const expectedGrant = {
				AccessControlPolicy: {
					Grants: expect.arrayContaining([grantReadAcpAuthenticatedUsers]),
					Owner: expect.any(Object)
				}
			};
			expect(putBucketAclMock).toHaveBeenCalledWith(
				expect.objectContaining(expectedGrant),
				expect.any(Function)
			);
		});

		it("should keep READ grants for Authenticated Users", () => {
			const expectedGrant = {
				AccessControlPolicy: {
					Grants: expect.arrayContaining([grantReadAuthenticatedUsers]),
					Owner: expect.any(Object)
				}
			};
			expect(putBucketAclMock).toHaveBeenCalledWith(
				expect.objectContaining(expectedGrant),
				expect.any(Function)
			);
		});

		it("should keep WRITE grants for Authenticated Users", () => {
			const expectedGrant = {
				AccessControlPolicy: {
					Grants: expect.arrayContaining([grantWriteAuthenticatedUsers]),
					Owner: expect.any(Object)
				}
			};
			expect(putBucketAclMock).toHaveBeenCalledWith(
				expect.objectContaining(expectedGrant),
				expect.any(Function)
			);
		});

		it("should keep WRITE_ACP grants for Authenticated Users", () => {
			const expectedGrant = {
				AccessControlPolicy: {
					Grants: expect.arrayContaining([grantWriteAcpAuthenticatedUsers]),
					Owner: expect.any(Object)
				}
			};
			expect(putBucketAclMock).toHaveBeenCalledWith(
				expect.objectContaining(expectedGrant),
				expect.any(Function)
			);
		});

		it("should keep READ grants for All Users", () => {
			const expectedGrant = {
				AccessControlPolicy: {
					Grants: expect.arrayContaining([grantReadAllUsers]),
					Owner: expect.any(Object)
				}
			};
			expect(putBucketAclMock).toHaveBeenCalledWith(
				expect.objectContaining(expectedGrant),
				expect.any(Function)
			);
		});

		it("should keep READ_ACP grants for All Users", () => {
			const expectedGrant = {
				AccessControlPolicy: {
					Grants: expect.arrayContaining([grantReadAcpAllUsers]),
					Owner: expect.any(Object)
				}
			};
			expect(putBucketAclMock).toHaveBeenCalledWith(
				expect.objectContaining(expectedGrant),
				expect.any(Function)
			);
		});

		it("should keep WRITE grants for All Users", () => {
			const expectedGrant = {
				AccessControlPolicy: {
					Grants: expect.arrayContaining([grantWriteAllUsers]),
					Owner: expect.any(Object)
				}
			};
			expect(putBucketAclMock).toHaveBeenCalledWith(
				expect.objectContaining(expectedGrant),
				expect.any(Function)
			);
		});

		it("should keep WRITE_ACP grants for All Users", () => {
			const expectedGrant = {
				AccessControlPolicy: {
					Grants: expect.arrayContaining([grantWriteAcpAllUsers]),
					Owner: expect.any(Object)
				}
			};
			expect(putBucketAclMock).toHaveBeenCalledWith(
				expect.objectContaining(expectedGrant),
				expect.any(Function)
			);
		});

		it("should keep FULL_CONTROL grants for All Users", () => {
			const expectedGrant = {
				AccessControlPolicy: {
					Grants: expect.arrayContaining([grantFullControlAllUsers]),
					Owner: expect.any(Object)
				}
			};
			expect(putBucketAclMock).toHaveBeenCalledWith(
				expect.objectContaining(expectedGrant),
				expect.any(Function)
			);
		});

		it("should keep FULL_CONTROL grants for Canonical User", () => {
			const expectedGrant = {
				AccessControlPolicy: {
					Grants: expect.arrayContaining([grantFullControlCanonicalUser]),
					Owner: expect.any(Object)
				}
			};
			expect(putBucketAclMock).toHaveBeenCalledWith(
				expect.objectContaining(expectedGrant),
				expect.any(Function)
			);
		});
	});

	describe("invalid invocation", () => {
		const mockCallback = done => {
			return (err, data) => {
				expect(err).toBeDefined();
				expect(getBucketAclMock).not.toHaveBeenCalled();
				expect(putBucketAclMock).not.toHaveBeenCalled();
				done();
			};
		};

		it("should fail when event is undefined", done => {
			source.handler(undefined, jest.fn(), mockCallback(done));
		});

		it('should fail when "resource" missing from the event', done => {
			const malformedEvent = {
				ruleId: "S3-006"
			};
			source.handler(malformedEvent, jest.fn(), mockCallback(done));
		});

		it("should fail when the incorrect rule is received", done => {
			const malformedEvent = {
				resource: "sample-bucket",
				ruleId: "S3-00x"
			};
			source.handler(malformedEvent, jest.fn(), mockCallback(done));
		});
	});
});
