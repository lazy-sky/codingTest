let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);

arr.sort((a, b) => a - b);

console.log(arr[parseInt((n - 1) / 2)]);
