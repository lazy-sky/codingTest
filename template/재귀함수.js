/*
자바스크립트에서 재귀 함수
- 콜 스택에 제한이 있다.
  - 엔진마다 제한 수는 다르다. 크롬은 만 개 정도다.
- 꼬리 재귀가 제공되지 않는다.
  - 꼬리 재귀(Tail recursion): 재귀 호출이 끝나면 아무 일도 하지 않고 결과만 바로 반환되도록 하는 방법
- 성능이 좋지 않다.

그럼에도 불구하고 재귀를 알아야 하는 이유는, 
재귀로 작성하면 더 쉽게 풀리는 문제가 있기 때문. (더 효율적인 것은 아니다.)

재귀로 구현하면 편한 알고리즘
- Union-Find
- DFS
- Backtracking
- 불편함을 무시한다면 더 빠른 성능으로 작성할 수 있지만 코테에서는 빨리 푸는 게 중요해서 추천되지 않는다.

재귀 함수에선 반드시 탈출가능한 조건을 작성해야 한다.
*/

// e.g., 피보나치 수열, 합병 정렬(분할 정복)
function fibonacci(x) {
  if (x <= 2) return 1;
  return fibonacci(x - 1) + fibonacci(x - 2);
}

console.log(fibonacci(7)); // 1 1 2 3 5 8 13
console.log(fibonacci(8));

const merge = (a, b) => {
  if (a.length === 0) return b;
  else if (b.length === 0) return a;
  else if (a[0] < b[0]) return [a[0], ...merge(a.slice(1), b)];
  else return [b[0], ...merge(a, b.slice(1))];
};

const mergeSort = (arr) => {
  if (arr.length < 2) return arr;
  else {
    const mid = Math.floor(arr.length / 2);
    return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
  }
};

console.log(mergeSort([21, 10, 12, 20, 25, 13, 15, 22]));
