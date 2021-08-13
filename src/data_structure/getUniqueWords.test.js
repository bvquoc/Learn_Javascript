const getUniqueWords = require('./getUniqueWords');

describe('main test', () => {
  it('should return [] if not a string or empty string', () => {
    expect(getUniqueWords('')).toEqual([]);
    expect(getUniqueWords(2003)).toEqual([]);
    expect(getUniqueWords({})).toEqual([]);
    expect(getUniqueWords([])).toEqual([]);
  });

  it('sample case', () => {
    expect(getUniqueWords('frontend    is easy but easy to die')).toEqual([
      'frontend',
      'is',
      'easy',
      'but',
      'to',
      'die',
    ]);
  });
});
