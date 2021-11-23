let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let [a, b] = [parseInt(input[0]), parseInt(input[1])];

console.log(a / b);
