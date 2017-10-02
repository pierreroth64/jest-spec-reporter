describe('Jest Spec reporter', () => {

  it('this is a passing test', () => {
  });

  it('this is a failing test', () => {
    expect(false).toEqual(true);
  });

  it.skip('this is a pending test', () => {
  });
});
