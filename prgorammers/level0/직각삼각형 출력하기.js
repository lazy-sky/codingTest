// https://school.programmers.co.kr/learn/courses/30/lessons/120823#qna

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ');
}).on('close', function () {
  for (let i = 1; i <= input; i++) {
    console.log('*'.repeat(i));
  }
});
