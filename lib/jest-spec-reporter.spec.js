const JestSpecReporter = require('./jest-spec-reporter');

describe('Jest Spec reporter', () => {
  let reporter;

  beforeEach(() => {
    reporter = new JestSpecReporter();
  });

  it('should implement onRunComplete ', () => {
    expect(reporter.onRunComplete).toBeDefined();
  });

  it('should implement onRunStart ', () => {
    expect(reporter.onRunStart).toBeDefined();
  });

  it('should implement onTestResult ', () => {
    expect(reporter.onTestResult).toBeDefined();
  });
});
