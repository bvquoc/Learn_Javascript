function partition(numberList, left, right) {
  const mid = left + Math.trunc((right - left) / 2);
  const pivot = numberList[mid];

  let i = left,
    j = right;
  while (i <= j) {
    while (numberList[i] > pivot) i++;
    while (numberList[j] < pivot) j--;

    if (i < j) {
      const temp = numberList[i];
      numberList[i] = numberList[j];
      numberList[j] = temp;
    }

    if (i <= j) {
      i++;
      j--;
    }
  }

  return i;
}

function quickSort(numberList, left, right) {
  if (left >= right) return numberList;

  const mid = partition(numberList, left, right);
  quickSort(numberList, left, mid - 1);
  quickSort(numberList, mid + 1, right);

  return numberList;
}

console.log(quickSort([1, 2, 5, 3, 4], 0, 4));
