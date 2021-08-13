// using object
function buildCategoryMapV1(categoryList) {
  if (!Array.isArray(categoryList)) return {};
  const categoryObj = {};
  categoryList.forEach((x) => {
    categoryObj[x.id] = x;
  });
  return categoryObj;
}

// using Map
function buildCategoryMapV2(categoryList) {
  if (!Array.isArray(categoryList)) return new Map();
  const categoryMap = new Map(
    categoryList.map((x) => {
      return [x.id, x];
    })
  );
  return categoryMap;
}

const categoryList = [
  { id: 1, name: 'iphone' },
  { id: 2, name: 'macbook' },
];

console.log(buildCategoryMapV1(categoryList));

module.exports = buildCategoryMapV1;
// buildCategoryMapV2,
