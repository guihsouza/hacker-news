module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  "moduleNameMapper": {
    ".scss$": "<rootDir>/__tests__/SassStub.js"
  },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/']
}
