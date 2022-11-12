// https://school.programmers.co.kr/learn/courses/30/lessons/120849

function solution(my_string) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  return my_string
    .split('')
    .filter((x) => !vowels.includes(x))
    .join('');
}
