// PLEASE USE ALL OF THESE CONSTANTS IN YOUR CODE
// DO NOT USE HARDCODE NUMBER IN YOUR CODE
const K500_QUANTITY = 2;
const K200_QUANTITY = 5;
const K100_QUANTITY = 10;
const K50_QUANTITY = 100;

const K500_VALUE = 500000;
const K200_VALUE = 200000;
const K100_VALUE = 100000;
const K50_VALUE = 50000;

const BASE_UNIT = 50000;

const SUM_MONEY =
  K500_QUANTITY * K500_VALUE +
  K200_QUANTITY * K200_VALUE +
  K100_QUANTITY * K100_VALUE +
  K50_QUANTITY * K50_VALUE;

function withdraw(amount) {
  if (amount > SUM_MONEY) return 'Insufficient balance from ATM';
  if (amount % BASE_UNIT !== 0) return 'Invalid balance';
  const a =
    Math.floor(amount / K500_VALUE) <= K500_QUANTITY
      ? Math.floor(amount / K500_VALUE)
      : K500_QUANTITY;
  amount -= a * K500_VALUE;
  const b =
    Math.floor(amount / K200_VALUE) <= K200_QUANTITY
      ? Math.floor(amount / K200_VALUE)
      : K200_QUANTITY;
  amount -= b * K200_VALUE;
  const c =
    Math.floor(amount / K100_VALUE) <= K100_QUANTITY
      ? Math.floor(amount / K100_VALUE)
      : K100_QUANTITY;
  amount -= c * K100_VALUE;
  const d = amount / K50_VALUE;
  return { k500: a, k200: b, k100: c, k50: d };
}

console.log(withdraw(850000));
console.log(withdraw(200000));
console.log(withdraw(125000));
console.log(withdraw(9000000));
