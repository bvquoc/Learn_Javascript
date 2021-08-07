function findSumPair(numberList, targetSum) {
  if (!Array.isArray(numberList) || numberList.length < 2) return [];
  for (let i = 0; i < numberList.length; i++)
    for (let j = i + 1; j < numberList.length; j++) {
      if (numberList[i] + numberList[j] === targetSum) {
        return [numberList[i], numberList[j]];
      }
    }
  return [];
}
