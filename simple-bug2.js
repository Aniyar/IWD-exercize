function checkPassword(password) {
  let result = false;
  if (password.length > 6) {
    result = true;
  }
  if (password)
  return result;
}

const password1 = "123456";
const isPassword1Valid = checkPassword(password1);
console.log(`The first password is ${isPassword1Valid ? 'valid' : 'invalid'}`);

const password2 = "abc123";
const isPassword2Valid = checkPassword(password2);
console.log(`The second password is ${isPassword2Valid ? 'valid' : 'invalid'}`);


// fix the program so it checks that password also contains at least 1 number and 1 letter.
