const createLinkedList = require('./linked_list');
describe('insertTail(data)', () => {
  it('should return head with one node if list is empty', () => {
    const numberLinkedList = createLinkedList();
    const head = numberLinkedList.insertTail(5);
    expect(head).toEqual({ data: 5, next: null });
  });
  it('should return head with two node if list has one node', () => {
    const numberLinkedList = createLinkedList();
    numberLinkedList.insertTail(5);
    const head = numberLinkedList.insertTail(10);
    expect(head).toEqual({ data: 5, next: { data: 10, next: null } });
  });
});

describe('insert(data, position)', () => {
  it('should insert head if position <= 0', () => {
    expect(createLinkedList().insert(5, -1)).toEqual({ data: 5, next: null });
    expect(createLinkedList().insert(5, 0)).toEqual({ data: 5, next: null });
  });
  it('should insert tail if position >= size', () => {
    const numberLinkedList = createLinkedList();
    numberLinkedList.insert(5, -1);
    const head = numberLinkedList.insert(10, 5);
    expect(head).toEqual({ data: 5, next: { data: 10, next: null } });
  });
  it('should insert before position if 0 <= position < size', () => {
    const numberLinkedList = createLinkedList();
    numberLinkedList.insert(5, 1);
    numberLinkedList.insert(10, 2);
    numberLinkedList.insert(15, 3);
    const head = numberLinkedList.insert(0, 1);
    expect(head).toEqual({
      data: 5,
      next: { data: 0, next: { data: 10, next: { data: 15, next: null } } },
    });
  });
});

describe('remove(pos)', () => {
  it('should return null if list is empty', () => {
    const numberLinkedList = createLinkedList();
    expect(numberLinkedList.remove()).toBe(null);
    expect(numberLinkedList.remove(-1)).toBe(null);
    expect(numberLinkedList.remove(1000)).toBe(null);
  });
  it('should remove tail if pos is undefined', () => {
    const numberLinkedList = createLinkedList([0, 1, 2]);
    expect(numberLinkedList.remove()).toEqual({
      data: 0,
      next: { data: 1, next: null },
    });
    expect(numberLinkedList.remove()).toEqual({
      data: 0,
      next: null,
    });
  });

  it('should remove head if pos <= 0', () => {
    const numberLinkedList = createLinkedList([0, 1, 2]);
    expect(numberLinkedList.remove(-1)).toEqual({
      data: 1,
      next: { data: 2, next: null },
    });
    expect(numberLinkedList.remove(0)).toEqual({
      data: 2,
      next: null,
    });
  });

  it('should remove tail if pos >= size', () => {
    const numberLinkedList = createLinkedList([0, 1, 2]);
    expect(numberLinkedList.remove(3)).toEqual({
      data: 0,
      next: { data: 1, next: null },
    });
    expect(numberLinkedList.remove(4)).toEqual({
      data: 0,
      next: null,
    });
  });

  it('1 <= pos < size', () => {
    const numberLinkedList = createLinkedList([0, 1, 2, 3]);
    expect(numberLinkedList.remove(2)).toEqual({
      data: 0,
      next: { data: 1, next: { data: 3, next: null } },
    });
    expect(numberLinkedList.remove(2)).toEqual({
      data: 0,
      next: { data: 1, next: null },
    });
  });
});

describe('some(isValidFn)', () => {
  it('should return false if list is empty', () => {
    const numberLinkedList = createLinkedList();
    expect(numberLinkedList.some((x) => x > 0)).toBe(false);
  });
  it('should return false if not existed in list', () => {
    // 1 -> 2 -> 3
    const numberLinkedList = createLinkedList();
    numberLinkedList.insertHead(3);
    numberLinkedList.insertHead(2);
    numberLinkedList.insertHead(1);
    expect(numberLinkedList.some((x) => x > 3)).toBe(false);
    expect(numberLinkedList.some((x) => x % 5 === 0)).toBe(false);
    expect(numberLinkedList.some((x) => x < 0)).toBe(false);
  });
  it('should return true if existed in list', () => {
    const numberLinkedList = createLinkedList();
    numberLinkedList.insertHead(3);
    numberLinkedList.insertHead(2);
    numberLinkedList.insertHead(1);
    expect(numberLinkedList.some((x) => x % 2 === 0)).toBe(true);
    expect(numberLinkedList.some((x) => x > 1)).toBe(true);
    expect(numberLinkedList.some((x) => x < 3)).toBe(true);
  });
});

describe('every(isValidFn)', () => {
  it('should return false if list is empty', () => {
    const numberLinkedList = createLinkedList();
    expect(numberLinkedList.every((x) => 0)).toBe(false);
  });
  it('should return false if not all nodes match condition', () => {
    const numberLinkedList = createLinkedList();
    numberLinkedList.insertHead(15);
    numberLinkedList.insertHead(10);
    numberLinkedList.insertHead(5);
    expect(numberLinkedList.every((x) => x % 3 === 0)).toBe(false);
    expect(numberLinkedList.every((x) => x <= 10)).toBe(false);
  });
  it('should return true if all nodes match condition', () => {
    const numberLinkedList = createLinkedList();
    numberLinkedList.insertHead(15);
    numberLinkedList.insertHead(10);
    numberLinkedList.insertHead(5);
    expect(numberLinkedList.every((x) => x % 5 === 0)).toBe(true);
    expect(numberLinkedList.every((x) => x > 1)).toBe(true);
  });
});
