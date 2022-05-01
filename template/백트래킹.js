/* 
백트래킹이란
- 모든 경우의 수를 탐색하는 알고리즘
- DFS, BFS를 이용할 수 있다.
- 효율을 위해 탐색하지 않아도 되는 곳을 미리 막는 걸 가지치기(pruning)라 한다.
  - 백트래킹의 핵심, 가지치기를 얼마나 잘하느냐가 효율성을 결정한다.
- 자바스크립트는 재귀 효율이 나쁘기 때문에 DFS로 구현할 경우 스택을 이용하는 것이 좋다.
- 탐색에서 순환이 발생할 수 있다면 BFS를 이용하는 것이 편하다.

어떻게 작성할 것인가
- 우선 모든 경우의 수를 찾을 수 있도록 코딩
- 이후 문제에서 특정한 조건을 만족하는 것만 탐색하고 나머지는 탐색하지 않도록 작성
- 즉, 답이 될 수 없는 것은 탐색을 종료

e.g., N-Queen
https://programmers.co.kr/learn/courses/30/lessons/12952
*/

function solution(n) {
  return search(Array(n).fill(0), 0);
}

function check(board, row) {
  // 이전까지 두었던 퀸의 위치를 확인
  for (let i = 0; i < row; i++) {
    // 행의 위치와 대각선의 위치를 체크
    if (board[i] === board[row]) return false;
    if (Math.abs(board[i] - board[row]) === row - i) return false;
  }

  return true;
}

function search(board, row) {
  let count = 0;

  if (row === board.length) return 1;

  for (let col = 0; col < board.length; col++) {
    board[row] = col;
    if (check(board, row)) {
      count += search(board, row + 1);
    }
  }

  return count;
}
