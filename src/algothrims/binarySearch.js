function binarySearch(studentList, searchName) {
  if (!(studentList && searchName)) return -1;
  if (!Array.isArray(studentList) || studentList.length === 0) return -1;
  if (typeof searchName !== 'string') return -1;
  searchName = searchName.trim().toLowerCase();

  let left = 0,
    right = studentList.length - 1;

  while (left <= right) {
    const mid = left + Math.trunc((right - left) / 2);
    const currentName = studentList[mid].name.toLowerCase().trim();
    if (currentName === searchName) return mid;
    if (currentName > searchName) right = mid - 1;
    else left = mid + 1;
  }
  return -1;
}

const studentList = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob Tan' },
  { id: 3, name: ' John ' },
];
console.log(binarySearch(studentList, 'Alice'));
console.log(binarySearch(studentList, 'bob tan'));
console.log(binarySearch(studentList, 'john'));
