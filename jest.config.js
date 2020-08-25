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
			statements: 10,
			branches: 10,
			functions: 10,
			lines: 10
		}
	}
};
