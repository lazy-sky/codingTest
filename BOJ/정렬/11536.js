const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  solution(input);
  process.exit();
});

function solution(input) {
  const names = [...input];
  names.shift();

  const ascending = [...names].sort();
  const descending = [...ascending].reverse();

  if (JSON.stringify(names) === JSON.stringify(ascending)) {
    console.log('INCREASING');
  } else if (JSON.stringify(names) === JSON.stringify(descending)) {
    console.log('DECREASING');
  } else {
    console.log('NEITHER');
  }
}
