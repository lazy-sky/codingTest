let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let n = Number(input[0]);
const lines = [];
for (let i = 1; i <= n; i++) {
  lines.push(Number(input[i]));
}
let result = -1;

lines.sort((a, b) => b - a);

for (let i = 0; i < lines.length - 2; i++) {
  let a = lines[i];
  let b = lines[i + 1];
  let c = lines[i + 2];

  if (a < b + c) {
    result = a + b + c;
    break;
  }
}

console.log(result);
