// https://school.programmers.co.kr/learn/courses/30/lessons/120817

function solution(numbers) {
  return numbers.reduce((acc, cur) => acc + cur, 0) / numbers.length;
}
