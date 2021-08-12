function createLinkedList(arr) {
  let head = null;

  function forEach(callbackFn) {
    if (!head) return;

    let curNode = head;
    let idx = 0;
    while (curNode) {
      if (callbackFn(curNode, idx)) break;
      idx++;
      curNode = curNode.next;
    }
  }

  function getHead() {
    return head;
  }

  function getTail() {
    if (!head) return null;
    let tail = head;
    while (tail.next) tail = tail.next;
    return tail;
  }

  function getSize() {
    let cnt = 0;
    forEach((x) => {
      cnt++;
    });
    return cnt;
  }

  function insertHead(data) {
    const newHead = {
      data,
      next: null,
    };
    newHead.next = head;
    head = newHead;
    return head;
  }

  function insertTail(data) {
    const newTail = {
      data,
      next: null,
    };

    if (!head) head = newTail;
    else {
      const tail = getTail();
      tail.next = newTail;
    }

    return head;
  }

  function insert(data, position) {
    if (position <= 0 || !head) return insertHead(data);
    if (position === undefined) {
      insertTail(data);
      return head;
    }
    let preNode = head;
    let curNode = head;
    let i = 0;
    while (curNode && i < position) {
      preNode = curNode;
      curNode = curNode.next;
      i++;
    }
    const newNode = { data, next: curNode };
    preNode.next = newNode;
    return head;
  }

  function remove(pos) {
    if (!head) return null;
    if (pos <= 0) {
      // remove head
      head = head.next;
      return head;
    }

    if (pos === undefined) pos = Infinity;
    let preNode = head;
    let curNode = head;
    let i = 0;

    while (curNode.next && i < pos) {
      preNode = curNode;
      curNode = curNode.next;
      i++;
    }

    preNode.next = curNode.next;
    return head;
  }

  function some(isValidFn) {
    let found = false;
    forEach((curNode, idx) => {
      if (isValidFn(curNode.data, idx)) {
        found = true;
        return true;
      }
    });
    return found;
  }

  function every(isValidFn) {
    if (!head) return false;
    let check = true;
    forEach((curNode, idx) => {
      if (!isValidFn(curNode.data, idx)) {
        check = false;
        return true;
      }
    });
    return check;
  }

  function printList() {
    forEach((x) => {
      console.log(x.data);
    });
  }

  if (arr && Array.isArray(arr)) {
    for (let x of arr) insert(x);
  }
  return {
    forEach,
    getHead,
    getTail,
    getSize,
    insertHead,
    insertTail,
    insert,
    remove,
    some,
    every,
    printList,
  };
}

const myLinked = createLinkedList([0, 1, 2, 3, 4, 5]);

myLinked.insert(-111, -12);
myLinked.insert(2003, 4);
myLinked.insertTail(999);
myLinked.insert(9999, 1234);

myLinked.forEach((x) => {
  console.log(x.data);
});

console.log('---------');

myLinked.remove();
myLinked.remove(4);
myLinked.remove(0);
myLinked.remove();

myLinked.forEach((x) => {
  console.log(x.data);
});

module.exports = createLinkedList;
