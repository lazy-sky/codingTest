function solution(A) {
  if (A.length === 1) return Math.abs(A[0]);
  if (A.length === 2) return Math.abs(A[0] - A[1]);

  let left = A[0];
  let right = A.reduce((acc, cur) => acc + cur, 0) - A[0];
  let answer = Math.abs(left - right);

  for (let i = 1; i < A.length - 1; i++) {
    left += A[i];
    right -= A[i];
    answer = Math.min(answer, Math.abs(left - right));
  }

  return answer;
}
