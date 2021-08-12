function createStack() {
  const stack = [];
  function getTop() {
    return stack[stack.length - 1];
  }
  function getSize() {
    return stack.length;
  }
  function isEmpty() {
    return stack.length === 0;
  }
  function push(data) {
    stack.push(data);
  }
  function pop() {
    return stack.pop();
  }
  return { getTop, getSize, isEmpty, push, pop };
}

function isValidBracketPairs(str) {
  const OPEN_BRACKETS = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  const CLOSE_BRACKETS = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  const stack = createStack();
  for (let i = 0; i < str.length; i++) {
    if (OPEN_BRACKETS[str[i]]) {
      stack.push(str[i]);
    }
    if (CLOSE_BRACKETS[str[i]]) {
      const openBrac = stack.pop();
      if (CLOSE_BRACKETS[str[i]] !== openBrac) return false;
    }
  }

  return stack.isEmpty();
}

console.log(isValidBracketPairs('(a + b) * (c + d)')); // --> true
console.log(isValidBracketPairs('(a + b) * c[1')); // --> false vì thiếu dấu đóng ngoặc
