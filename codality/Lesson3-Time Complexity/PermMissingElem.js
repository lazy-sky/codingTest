function solution(A) {
  A.sort((a, b) => a - b);

  for (let i = 0; i < A.length; i++) {
    if (A[i] !== i + 1) return i + 1;
  }

  return A.length + 1;
}
