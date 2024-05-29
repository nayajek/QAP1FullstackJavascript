var validator = require('validator');

console.log(validator.isEmail('alexis@zmail.com'));
// output: true
console.log(validator.isPostalCode('12345', 'US'));
//output: true
console.log(validator.isStrongPassword('Alexis@123'));
//output: true


