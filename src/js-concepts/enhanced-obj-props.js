// Method properties
const myFunc = {
  sayHello: function () {
    console.log('Easy Frontend');
  }, // ES5
  getPower() {
    return 100;
  }, // ES6
};

// Desctructuring
let x = 10;
let y = 20;
[y, x] = [x, y];
console.log(x, y);

// rename prop
// destructuring value
{
  const student = {
    id: 1,
    name: 'Easy Frontend',
  };
  const { id: studentId, name, age = 18 } = student;
  console.log(studentId); // 1
  console.log(age); // 18
  // console.log(id); // ReferenceError: id is not defined
}

{
  // Object.assign
  const a = { id: 1 };
  const b = { name: 'Easy' };
  const c = Object.assign(a, b);
  console.log(a); // { id: 1, name: 'Easy' }
  console.log(c); // { id: 1, name: 'Easy' }
  console.log(a === c); // true (same reference)
}

// clone object
{
  const student = {
    id: 1,
    name: 'Easy Frontend',
  };
  // spread operator
  const alice = {
    ...student,
    name: 'Alice',
  };
  console.log(alice);
  // object.assign
  const bob = Object.assign({}, student, { name: 'Bob' });
  console.log(bob);
}
