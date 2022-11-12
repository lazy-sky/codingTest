// https://school.programmers.co.kr/learn/courses/30/lessons/120893

function solution(my_string) {
  return my_string
    .split('')
    .map((x) => (x.toUpperCase() === x ? x.toLowerCase() : x.toUpperCase()))
    .join('');
}
