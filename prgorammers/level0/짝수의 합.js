// https://school.programmers.co.kr/learn/courses/30/lessons/120831

function solution(n) {
  return Array(n)
    .fill(1)
    .map((x, i) => x + i)
    .filter((x) => x % 2 === 0)
    .reduce((acc, cur) => acc + cur, 0);
}
