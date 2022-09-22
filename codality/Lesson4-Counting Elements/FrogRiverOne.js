function solution(X, A) {
  // 효율을 위해 Set 자료형을 사용, 배열이면 오래 걸린다.
  const mySet = new Set();

  for (let i = 0; i < A.length; i++) {
    mySet.add(A[i]);
    if (mySet.size === X) return i;
  }

  return -1;
}
