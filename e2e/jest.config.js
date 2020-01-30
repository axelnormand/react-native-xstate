module.exports = {
  preset: 'react-native',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./jestSetup.ts'],
  reporters: ['detox/runners/jest/streamlineReporter'],
  verbose: true,
};
