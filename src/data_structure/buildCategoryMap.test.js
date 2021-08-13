const { buildCategoryMapV1, buildCategoryMapV2 } = require('./buildCategoryMap');

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

describe('Test V2', () => {
  it('should be return {} if empty list', () => {
    expect(buildCategoryMapV2([])).toEqual(new Map());
  });
  it('should be return {} if not an array', () => {
    expect(buildCategoryMapV2('string')).toEqual(new Map());
    expect(buildCategoryMapV2(123)).toEqual(new Map());
    expect(buildCategoryMapV2({})).toEqual(new Map());
  });
  it('main test', () => {
    const userMap = buildCategoryMapV2(categoryList);
    const resMap = new Map([
      [1, { id: 1, name: 'iphone' }],
      [2, { id: 2, name: 'macbook' }],
    ]);
    expect(userMap).toEqual(resMap);
  });
});
