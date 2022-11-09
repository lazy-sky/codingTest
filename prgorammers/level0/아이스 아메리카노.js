// https://school.programmers.co.kr/learn/courses/30/lessons/120819

function solution(money) {
  const maxCount = Math.floor(money / 5500);
  const rest = money - maxCount * 5500;

  return [maxCount, rest];
}
