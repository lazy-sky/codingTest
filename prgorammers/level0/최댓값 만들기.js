// https://school.programmers.co.kr/learn/courses/30/lessons/120847

function solution(numbers) {
  const sorted = [...numbers].sort((a, b) => b - a);

  return sorted[0] * sorted[1];
}
