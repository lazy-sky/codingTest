// https://school.programmers.co.kr/learn/courses/30/lessons/120903

function solution(s1, s2) {
  return s1.filter((x) => s2.includes(x)).length;
}
