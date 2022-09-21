function solution(A) {
  if (A.length === 1) return A[0];

  A.sort((a, b) => a - b);

  while (A.length !== 1) {
    // 처음엔 A[0] !== A[1] 로직으로 접근했다가,
    // 그렇게 하면 shift(배열의 자료구조 특성상 더 오래걸리는 메소드)를 사용해야 해서
    // pop을 사용하기 위해 뒤를 검사하는 분기 처리로 변경하였다.
    if (A[A.length - 1] !== A[A.length - 2]) {
      break;
    }

    A.pop();
    A.pop();
  }

  return A[A.length - 1];
}

// Detected time complexity: O(N) or O(N*log(N))
