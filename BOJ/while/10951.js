const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let i = 0;

while (i < input.length - 1) {
  let data = input[i].split(' ');
  let a = Number(data[0]);
  let b = Number(data[1]);

  i += 1;
  console.log(a + b);
}
