function chunkArray(array, size) {
  if (!Array.isArray(array) || array.length === 0 || size <= 0) return [];
  if (array.length / size > 20) throw new Error('Too many chunks');
  const result = [],
    numArr = Math.floor(array.length / size);
  let i = 0;
  for (let tmp = 0; tmp < numArr; tmp++) {
    const curArr = [];
    for (let j = 0; j < size; j++) curArr.push(array[i + j]);
    i += size;
    result.push(curArr);
  }
  const lastArr = [];
  for (let j = i; j < array.length; j++) lastArr.push(array[j]);
  if (lastArr.length !== 0) result.push(lastArr);
  return result;
}

console.log(chunkArray({})); // []
console.log(chunkArray([])); // []
console.log(chunkArray([1, 2, 3], -1)); // []
console.log(chunkArray([1, 2, 3], 0)); // []

console.log(chunkArray([1, 2, 3], 2)); // [[1, 2], [3]]
console.log(chunkArray([1, 2, 3], 1)); // [[1], [2], [3]]
console.log(chunkArray([1, 2, 3], 3)); // [[1, 2, 3]]
