let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let n = Number(input[0]);

let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}

arr.sort((a, b) => a - b);

let maxLength = 0;

for (let i = 0; i < arr.length; i++) {
  let count = 0;
  for (let j = 0; j < 5; j++) {
    if (arr.slice(i, i + 5).includes(arr[i] + j)) {
      count += 1;
    }
    maxLength = Math.max(maxLength, count);
  }
}

console.log(5 - maxLength);
