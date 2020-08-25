module.exports = {
	clearMocks: true,
	restoreMocks: true,
	resetModules: true,
	testEnvironment: "node",
	testPathIgnorePatterns: [
		"<rootDir>/node_modules",
		"<rootDir>/integration-test",
		"<rootDir>/runners"
	],
	coveragePathIgnorePatterns: ["<rootDir>/test/mocks"],
	collectCoverageFrom: ["src/**/*.js", "functions/**/*.js"],
	coverageReporters: ["json", "lcov", "json-summary", "text"],
	coverageThreshold: {
		global: {
			statements: 85,
			branches: 85,
			functions: 85,
			lines: 85
		}
	}
};
