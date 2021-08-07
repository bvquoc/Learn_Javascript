function mostFrequent(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;
  const res = { value: numberList[0], count: 0 };
  for (const x of numberList) {
    let cnt = 0;
    for (const y of numberList) if (x === y) cnt++;
    if (cnt > res.count) {
      res.value = x;
      res.count = cnt;
    }
  }
  return res.value;
}
