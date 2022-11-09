// https://school.programmers.co.kr/learn/courses/30/lessons/120824

function solution(num_list) {
  const oddsCount = num_list.filter((x) => x % 2 === 1).length;
  const evensCount = num_list.length - oddsCount;

  return [evensCount, oddsCount];
}
