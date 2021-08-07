function isStrongPassword(password) {
  if (typeof password !== 'string') return false;
  if (password.length < 8) return false;

  let hasUpperChar = false;
  let hasLowerChar = false;
  let hasNumber = false;
  let hasSpecialChar = false;

  for (const ch of password) {
    if ('A' <= ch && ch <= 'Z') hasUpperChar = true;
    if ('a' <= ch && ch <= 'z') hasLowerChar = true;
    if ('0' <= ch && ch <= '9') hasNumber = true;
    for (const t of '!@#$%^&*()') if (ch === t) hasSpecialChar = true;
  }
  return hasUpperChar && hasLowerChar && hasNumber && hasSpecialChar;
}

console.log('!@#$%^&*()'.split());
