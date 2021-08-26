// function partition(numberList, left, right) {
//   let pivot = numberList[Math.trunc((right + left) / 2)], //middle element
//     i = left, //left pointer
//     j = right; //right pointer
//   while (i <= j) {
//     while (numberList[i] < pivot) i++;
//     while (numberList[j] > pivot) j--;
//     if (i <= j) {
//       const temp = numberList[i];
//       numberList[i] = numberList[j];
//       numberList[j] = temp;
//       i++;
//       j--;
//     }
//   }
//   return i;
// }

// function quickSort(numberList, left, right) {
//   let index;
//   if (numberList.length > 1) {
//     index = partition(numberList, left, right); //index returned from partition
//     if (left < index - 1) quickSort(numberList, left, index - 1);
//     if (index < right) quickSort(numberList, index, right);
//   }
//   return numberList;
// }

function partition(numberList, left, right, compare) {
  const mid = left + Math.trunc((right - left) / 2);
  const pivot = numberList[mid];

  let i = left,
    j = right;

  while (i <= j) {
    while (compare(numberList[i], pivot)) i++;
    while (compare(pivot, numberList[j])) j--;
    if (i <= j) {
      const temp = numberList[i];
      numberList[i] = numberList[j];
      numberList[j] = temp;
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(numberList, left, right, compare) {
  if (!Array.isArray(numberList)) return undefined;

  if (left === undefined) {
    left = 0;
    right = numberList.length - 1;
  } else {
    if (typeof left === 'function') {
      compare = left;
      left = 0;
    }
    if (typeof right === 'function') {
      compare = right;
      right = undefined;
    }
    if (right === undefined) right = numberList.length - 1;
  }

  if (left >= right) return numberList;

  if (compare === undefined) compare = (a, b) => a < b;

  const mid = partition(numberList, left, right, compare);
  quickSort(numberList, left, mid - 1, compare);
  quickSort(numberList, mid, right, compare);

  return numberList;
}

console.log(quickSort([1, 2, 5, 3, 4], 0, 4));
console.log(quickSort([1, 2, 5, 3, 4], 0, 4, (a, b) => a > b));
console.log(quickSort([1, 2, 5, 3, 4], 1, (a, b) => a > b));
console.log(quickSort([1, 2, 5, 3, 4], 0, 3, (a, b) => a > b));
