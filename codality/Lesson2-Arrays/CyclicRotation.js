// 첫 시도에 빈 배열이 주어지는 edge case를 고려하지 못해 감점

function solution(A, K) {
  // 빈 배열에 대해 early return
  if (A.length === 0) return [];

  const answer = [...A];

  for (let i = 0; i < K; i++) {
    answer.unshift(answer.pop());
  }

  return answer;
}
