const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const startNumber = Number(input[0]);
let newNumber = startNumber;
let count = 0;

while (true) {
  let ones = newNumber % 10;
  let tens = parseInt(newNumber / 10);
  newNumber = ones * 10 + ((ones + tens) % 10);
  count += 1;

  if (newNumber === startNumber) {
    break;
  }
}

console.log(count);
