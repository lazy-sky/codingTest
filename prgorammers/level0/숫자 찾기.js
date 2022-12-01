// https://school.programmers.co.kr/learn/courses/30/lessons/120844

function solution(num, k) {
  const index = String(num)
    .split('')
    .findIndex((x) => x === String(k));

  if (index > -1) return index + 1;

  return -1;
}
