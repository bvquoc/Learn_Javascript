const PIN_LENGTH = 6;
function isValidPIN(pin) {
  if (pin.length !== PIN_LENGTH) return false;
  for (let i = 0; i < pin.length; i++) if (pin[i] < '0' || pin[i] > '9') return false;

  let isGreater = true;
  let isLess = true;
  for (let i = 1; i < pin.length; i++) {
    if (pin[i] <= pin[i - 1]) isGreater = false;
    if (pin[i] >= pin[i - 1]) isLess = false;
  }
  if (isGreater || isLess) return false;

  const digitMap = {};
  for (let i = 0; i < pin.length; i++) {
    const newValue = (digitMap[pin[i]] || 0) + 1;
    if (newValue > 2) return false;
    digitMap[pin[i]] = newValue;
  }

  return true;
}

console.log(isValidPIN('111345'));
