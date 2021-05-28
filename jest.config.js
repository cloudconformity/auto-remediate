module.exports = {
  clearMocks: true,
  restoreMocks: true,
  resetModules: true,
  testEnvironment: 'node',
  testPathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/runners'],
  collectCoverageFrom: ['functions/**/*.js', 'utils/**/*.js'],
  coverageReporters: ['json', 'lcov', 'json-summary', 'text'],
  coverageThreshold: {
    global: {
      statements: 15,
      branches: 10,
      functions: 15,
      lines: 15
    }
  }
}
