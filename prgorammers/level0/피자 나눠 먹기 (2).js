// https://school.programmers.co.kr/learn/courses/30/lessons/120844

function solution(n) {
  let lcm = 6;
  let count = 1;

  while (lcm % n !== 0) {
    lcm += 6;
    count += 1;
  }

  return count;
}
