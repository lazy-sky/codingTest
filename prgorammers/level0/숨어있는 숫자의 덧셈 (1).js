// https://school.programmers.co.kr/learn/courses/30/lessons/120851

function solution(my_string) {
  return (numbers = my_string
    .split('')
    .map((x) => Number(x))
    .filter((x) => x)
    .reduce((acc, cur) => acc + cur, 0));
}
