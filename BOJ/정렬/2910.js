let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let n = Number(input[0].split(' ')[0]);
let c = Number(input[0].split(' ')[1]);
let arr = input[1].split(' ').map(Number);

let answer = '';
let counter = new Map();

arr.forEach((x) => {
  if (counter.has(x)) {
    counter.set(x, counter.get(x) + 1);
  } else {
    counter.set(x, 1);
  }
});

const sorted = [...counter.entries()].sort((a, b) => b[1] - a[1]);

for (let [key, value] of sorted) {
  for (let i = 0; i < value; i++) {
    answer += `${key} `;
  }
}

console.log(answer);
