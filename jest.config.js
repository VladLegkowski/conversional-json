module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.css$': require.resolve('./style-mock.js'),
  },
  snapshotSerializers: ['jest-emotion'],
};