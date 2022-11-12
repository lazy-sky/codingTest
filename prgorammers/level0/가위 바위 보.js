// https://school.programmers.co.kr/learn/courses/30/lessons/120839

function solution(rsp) {
  const winningMap = {
    2: '0',
    0: '5',
    5: '2',
  };

  return rsp
    .split('')
    .map((x) => winningMap[x])
    .join('');
}
