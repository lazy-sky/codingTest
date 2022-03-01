const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = input[1].split(' ').map(Number);

// let input = [3, 1, 3, 4, 2];

arr.sort((a, b) => a - b);

let answer = 0;
let temp = 0;

for (let x of arr) {
  temp += x;
  answer += temp;
}

console.log(answer);
