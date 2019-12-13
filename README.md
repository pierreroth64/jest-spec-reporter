# Simple Spec reporter for jest [![Build Status](https://travis-ci.org/pierreroth64/jest-spec-reporter.svg?branch=master)](https://travis-ci.org/pierreroth64/jest-spec-reporter) [![npm version](https://badge.fury.io/js/jest-spec-reporter.svg)](https://badge.fury.io/js/jest-spec-reporter) [![npm downloads](https://img.shields.io/npm/dm/jest-spec-reporter.svg?style=flat-square)](https://www.npmjs.com/package/jest-spec-reporter) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Installation

You may install this package as a development dependency:

```bash
npm install --save-dev jest-spec-reporter
```

## Configuration

Configure [Jest](https://facebook.github.io/jest/docs/en/configuration.html) to use the reporter.

For example, create a `jest.config.js` file containing:

```javascript
module.exports = {
  verbose: false,
  testPathIgnorePatterns: ["/node_modules/"],
  reporters: ["jest-spec-reporter"]
};
```

You can checkout the expected output:

```bash
git clone https://github.com/pierreroth64/jest-spec-reporter.git
cd jest-spec-reporter
npm install
npm run example
```
