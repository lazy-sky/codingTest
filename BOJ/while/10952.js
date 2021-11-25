const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let i = 0;

while (true) {
  let data = input[i].split(' ');
  let a = Number(data[0]);
  let b = Number(data[1]);

  // a와 b가 모두 0일 때 프로그램 종료
  if (a === 0 && b === 0) {
    break;
  } else {
    console.log(a + b);
  }

  i++;
}
