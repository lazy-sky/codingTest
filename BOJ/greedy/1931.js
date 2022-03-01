// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
// let n = Number(input[0]);
// let arr = input[1].split(' ').map(Number);

let n = 11;
let arr = [
  [1, 4],
  [3, 5],
  [0, 6],
  [5, 7],
  [3, 8],
  [5, 9],
  [6, 10],
  [8, 11],
  [8, 12],
  [2, 13],
  [12, 14],
];

arr.sort((a, b) => a[1] - a[0] - (b[1] - b[0]));
let count = 0;
let reservation = Array(1000).fill(1);

for (let x of arr) {
  if (reservation.slice(x[0], x[1]).every((x) => x)) {
    for (let i = x[0]; i < x[1]; i++) {
      reservation[i] = 0;
    }
    count += 1;
  }
}

console.log(count);

// const input = [];

// const strToNumArr = (str) => str.split(' ').map((x) => Number(x));

// require('readline')
//   .createInterface(process.stdin, process.stdout)
//   .on('line', function (line) {
//     input.push(line.trim());
//   })
//   .on('close', function () {
//     const N = Number(input.shift());
//     const schedule = input
//       .map((str) => strToNumArr(str))
//       .sort((a, b) => a[1] - b[1] || a[0] - b[0]);

//     let result = 0;
//     let recentEnd = 0;
//     schedule.forEach(([start, end]) => {
//       if (start < recentEnd) return;
//       result++;
//       recentEnd = end;
//     });

//     console.log(result);
//   });
