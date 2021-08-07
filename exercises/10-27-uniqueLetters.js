function uniqueLetters(str) {
  let result = '';
  for (const ch of str) {
    let cnt = 0;
    for (const x of str) if (x === ch) cnt++;
    if (cnt === 1) result = result.concat(ch);
  }
  return result;
}
