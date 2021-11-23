let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0].split(' ')[0]);
let x = Number(input[0].split(' ')[1]);
let numbers = input[1].split(' ').map(num => Number(num));
let answer = '';

for (let number of numbers) {
  if (number < x) {
    answer += `${number} `;
  }
}

console.log(answer);
