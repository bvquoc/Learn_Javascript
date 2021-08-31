function sum(a, b) {
  if (b) return a + b;
  return (b) => a + b;
}
console.log(sum(5, 10), sum(3)(4));

function createIdGenerator(startId = 0) {
  let id = startId;
  return () => id++;
}

const getNextId = createIdGenerator(9);
console.log(getNextId());
console.log(getNextId());
console.log(getNextId());
