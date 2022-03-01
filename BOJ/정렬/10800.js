// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
// let n = Number(input[0]);
// let arr = [];
// for (let i = 0; i < n; i++) {
//   let c = Number(input[i + 1].split(' ')[0]);
//   let s = Number(input[i + 1].split(' ')[1]);
//   arr.push([c, s, i]);
// }

// BOJ 공부하기 너무 불편하다 못해먹곘네

let n = 4;
let arr = [
  [1, 10, 0],
  [3, 15, 1],
  [1, 3, 2],
  [4, 8, 3],
];

let answer = [];

arr.sort((a, b) => a[1] - b[1]);

let smallerThanMe = 0;

arr.forEach((ball, i) => {
  let sameColors = 0;
  for (let j = 0; j < i; j++) {
    if (ball[0] === arr[j][0]) {
      sameColors += arr[j][1];
    }
  }
  let temp = smallerThanMe;
  temp -= sameColors;

  answer.push([temp, ball[2]]);

  smallerThanMe += ball[1];
});

answer.sort((a, b) => a[1] - b[1]);
answer = answer.map((x) => x[0]).join('\n');

console.log(answer);

// let summary = 0;
// let colorSummary = Array(200001).fill(0);
// let result = Array(n).fill(0);

// let start = 0;
// while (start < n) {
//   let end = start;
//   while (end < n && arr[start][1] == arr[end][1]) end += 1;

//   for (let i = start; i < end; i++) {
//     result[arr[i][2]] = summary - colorSummary[arr[i][0]];
//   }

//   for (let i = start; i < end; i++) {
//     colorSummary[(arr[i][0] += arr[i][1])];
//     summary += arr[i][1];
//   }
//   start = end;
// }

// console.log(result.join('\n'));
