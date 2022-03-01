const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
const data = input[1].split(' ').map(Number);

// const minValue = Math.min(...data);
// const maxValue = Math.max(...data);

const minValue = data.reduce((a, b) => Math.min(a, b));
const maxValue = data.reduce((a, b) => Math.max(a, b));

console.log(minValue, maxValue);
