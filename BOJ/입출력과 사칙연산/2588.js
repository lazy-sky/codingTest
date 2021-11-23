let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let a = Number(input[0]);
let b = Number(input[1]);

// let a = 472
// let b = 385

const ones = Number(input[1][2]);
const tens = Number(input[1][1]);
const hundreds = Number(input[1][0]);

console.log(a * ones);
console.log(a * tens);
console.log(a * hundreds);
console.log(a * b);
