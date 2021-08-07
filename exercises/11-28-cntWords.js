function countWords(str) {
  return str.split(' ').reduce((sum, str) => sum + (str !== '' ? 1 : 0), 0);
}

console.log(countWords(''));
console.log(countWords('ez'));
console.log(countWords('ez front end'));
console.log(countWords('      ez f     e     '));
