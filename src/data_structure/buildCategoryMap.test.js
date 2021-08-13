const buildCategoryMapV1 = require('./buildCategoryMap');

const categoryList = [
  { id: 1, name: 'iphone' },
  { id: 2, name: 'macbook' },
];

describe('Test V1', () => {
  it('should be return {} if empty list', () => {
    expect(buildCategoryMapV1([])).toEqual({});
  });
  it('should be return {} if not an array', () => {
    expect(buildCategoryMapV1('string')).toEqual({});
    expect(buildCategoryMapV1(123)).toEqual({});
    expect(buildCategoryMapV1({})).toEqual({});
  });
  it('main test', () => {
    expect(buildCategoryMapV1(categoryList)).toEqual({
      1: { id: 1, name: 'iphone' },
      2: { id: 2, name: 'macbook' },
    });
  });
});

// test('test V2', () => {
//   expect(buildCategoryMapV2(categoryList)).toEqual();
// });
