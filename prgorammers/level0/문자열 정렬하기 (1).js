// https://school.programmers.co.kr/learn/courses/30/lessons/120850

function solution(my_string) {
  return (numbers = my_string
    .split('')
    .map((x) => Number(x))
    .filter((x) => !isNaN(x))
    .sort((a, b) => a - b));
}
