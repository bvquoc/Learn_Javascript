function createLinkedList() {
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

  return {
    getSize,
    insertHead,
    insertTail,
    insert,
    some,
    every,
    printList,
  };
}

const myLinked = createLinkedList();
myLinked.insertTail(1);
myLinked.insertTail(2);
myLinked.insertTail(3);
myLinked.insertTail(4);
myLinked.insertTail(5);
myLinked.insertHead(0);

myLinked.insert(-1, 4);
myLinked.insert(-111, -1);
myLinked.insert(+999, 4346);

myLinked.insert(5, 1);
myLinked.insert(10, 2);
myLinked.insert(15, 3);
myLinked.insert(0, 1);
myLinked.printList();

module.exports = createLinkedList;
