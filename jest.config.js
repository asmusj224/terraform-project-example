module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ["/node_modules/", "./build/"],
  setupFilesAfterEnv: [],
  reporters: ["default", "jest-junit"],
  globals: {
    'ts-jest': {
      diagnostics: false
    }
  }
};