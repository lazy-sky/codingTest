// https://school.programmers.co.kr/learn/courses/30/lessons/120906

function solution(n) {
  return String(n)
    .split('')
    .reduce((acc, cur) => acc + Number(cur), 0);
}
