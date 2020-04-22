const removeJNames = require('./RemoveNames');

describe('removeJNames', function () {
  it('Should remove names that start with J', () => {
    const names = ['ames', 'Carol','Pete','Jim'];
    expect(removeJNames(names)).not.toContain('James')
  });
});

