// https://school.programmers.co.kr/learn/courses/30/lessons/120841

function solution(dot) {
  const [x, y] = [dot[0], dot[1]];

  if (x > 0 && y > 0) return 1;
  if (x < 0 && y > 0) return 2;
  if (x < 0 && y < 0) return 3;
  if (x > 0 && y < 0) return 4;

  return 0;
}
