let n = 10;
let k = 4200;
let units = [1, 5, 10, 50, 100, 500, 1000, 5000, 10000, 50000];

// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
// let n = Number(input[0].split(' ')[0]);
// let k = Number(input[0].split(' ')[1]);
// let units = input[1].split(' ').map(Number);

let sum = 0;
let count = 0;
units = units.reverse();

while (sum < k) {
  for (let unit of units) {
    if (sum + unit <= k) {
      sum += unit;
      count += 1;
      break;
    }
  }
}

console.log(count);
