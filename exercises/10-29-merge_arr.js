function mergeArray(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b)) return [];
  const result = [];
  const arr = [...a, ...b];
  for (let i = arr.length - 1; i >= 0; i--) {
    let cnt = 0;
    for (let j = 0; j < i; j++) if (arr[i] === arr[j]) cnt++;
    if (cnt === 0) result.splice(0, 0, arr[i]);
  }
  return result;
}

console.log(mergeArray(1, true));
console.log(mergeArray([], []));
console.log(mergeArray([], [1, 2, 3]));
console.log(mergeArray([1, 2, 3], [2, 3, 4]));
