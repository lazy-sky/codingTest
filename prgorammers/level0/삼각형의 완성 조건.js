// https://school.programmers.co.kr/learn/courses/30/lessons/120889

function solution(sides) {
  const longest = Math.max(...sides);
  const rest = sides.filter((x) => x !== longest);

  if (rest.length === 0 || rest.length === 1) return 1;

  return rest[0] + rest[1] > longest ? 1 : 2;
}
