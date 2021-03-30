module.exports = {
  verbose: false,
  testPathIgnorePatterns: ['/node_modules/', '/coverage/'],
  reporters: [
    '../lib/jest-spec-reporter.js', // replace this line with 'jest-spec-reporter.js' in your real world config
  ],
};
