const removeJNames = require('./RemoveNames');

describe('removeJNames', function () {
  it('Should remove names that start with J', () => {
    const names = ['James', 'Carol','Pete','Jim'];
    expect(removeJNames(names)).not.toContain('James')
    expect(removeJNames(names)).not.toContain('Jim')
  });

  it('Should contain the other names in the array', () => {
    const names = ['James', 'Carol','Pete','Jim'];
    expect(removeJNames(names)).toContain('Pete')
    expect(removeJNames(names)).toContain('Carol')
  });

  it('Edge case what is the name is typed in lower case', () => {
    const names = ['james', 'Carol','Pete','jim'];
    expect(removeJNames(names)).not.toContain('james')
    expect(removeJNames(names)).not.toContain('jim')
    expect(removeJNames(names)).toContain('Pete')
    expect(removeJNames(names)).toContain('Carol')
  }); 

});

