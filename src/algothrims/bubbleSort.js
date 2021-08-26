function bubbleSort(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  for (let i = 0; i < numberList.length; i++)
    for (let j = i + 1; j < numberList.length; j++)
      if (numberList[i] < numberList[j]) {
        const temp = numberList[i];
        numberList[i] = numberList[j];
        numberList[j] = temp;
      }

  return numberList;
}

console.log(bubbleSort([1, 3, 0, 2]));
