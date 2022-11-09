// https://school.programmers.co.kr/learn/courses/30/lessons/120813

function solution(n) {
  return Array(n)
    .fill(1)
    .map((x, i) => x + i)
    .filter((x) => x % 2 === 1);
}
