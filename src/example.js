
var isNullOrEmpty = require('./canechair-utilities');

console.log(isNullOrEmpty("")); // true
console.log(isNullOrEmpty(null)); // true
console.log(isNullOrEmpty(undefined)); // true

console.log(isNullOrEmpty("Hello World")); // false