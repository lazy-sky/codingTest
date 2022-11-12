// https://school.programmers.co.kr/learn/courses/30/lessons/120811

function solution(array) {
  return array.sort((a, b) => a - b)[(array.length - 1) / 2];
}
