const isValidBracketPairs = require('./checkBracketPairs');

describe('main check isValidBracketPairs(string)', () => {
  it('should be return false if not string', () => {
    expect(isValidBracketPairs(123)).toBe(false);
    expect(isValidBracketPairs({})).toBe(false);
    expect(isValidBracketPairs([])).toBe(false);
  });

  it('should be return false if wrong string', () => {
    expect(isValidBracketPairs('(a + b) * c[1')).toBe(false);
    expect(isValidBracketPairs('(){]{]')).toBe(false);
    expect(isValidBracketPairs('{}[]{')).toBe(false);
    expect(isValidBracketPairs('{[])}')).toBe(false);
  });

  it('should be return true if right string', () => {
    expect(isValidBracketPairs('(a + b) * (c + d)')).toBe(true);
    expect(isValidBracketPairs('()()')).toBe(true);
    expect(isValidBracketPairs('{{}}')).toBe(true);
    expect(isValidBracketPairs('[hi]')).toBe(true);
    expect(isValidBracketPairs('[{}([])]')).toBe(true);
    expect(isValidBracketPairs('(a+b+c)*d[a*(e+f)]')).toBe(true);
  });
});
