# Simple Spec reporter for jest

## Installation

You may install this package as a development dependency:

```bash
npm install jest-spec-reporter --save-dev
```

## Configuration

Configure [Jest](https://facebook.github.io/jest/docs/en/configuration.html) to use the reporter.

For example, create a `jest.config.js` file containing:

```javascript
module.exports = {
  verbose: false,
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
  reporters: [
    'jest-spec-reporter'
  ]
};
```
