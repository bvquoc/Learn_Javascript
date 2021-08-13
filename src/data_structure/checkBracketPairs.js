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
    const thisBracket = str[i];
    if (OPEN_BRACKETS[thisBracket]) {
      stack.push(thisBracket);
    }
    if (CLOSE_BRACKETS[thisBracket]) {
      const openBrac = stack.pop();
      if (thisBracket !== OPEN_BRACKETS[openBrac]) return false;
    }
  }

  return stack.isEmpty();
}

console.log(isValidBracketPairs('(a + b) * (c + d)')); // --> true
console.log(isValidBracketPairs('(a + b) * c[1')); // --> false vì thiếu dấu đóng ngoặc
