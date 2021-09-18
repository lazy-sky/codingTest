// https://programmers.co.kr/learn/courses/30/lessons/43165
// DFS/BFS, Level 2

// 문제 설명: 
// n개의 음이 아닌 정수가 있습니다. 이 수를 적절히 더하거나 빼서 타겟 넘버를 만들려고 합니다. 
// 예를 들어 [1, 1, 1, 1, 1]로 숫자 3을 만들려면 다음 다섯 방법을 쓸 수 있습니다.
// -1+1+1+1+1 = 3
// +1-1+1+1+1 = 3
// +1+1-1+1+1 = 3
// +1+1+1-1+1 = 3
// +1+1+1+1-1 = 3
// 사용할 수 있는 숫자가 담긴 배열 numbers, 타겟 넘버 target이 매개변수로 주어질 때 
// 숫자를 적절히 더하고 빼서 타겟 넘버를 만드는 방법의 수를 return 하도록 solution 함수를 작성해주세요.

function solution(numbers, target) {
  let answer = 0;
  function dfs(index, sum) {
    if (index === numbers.length) {
      if (sum === target) {
        answer++;
      }

      return;
    }

    dfs(index + 1, sum + numbers[index]);
    dfs(index + 1, sum - numbers[index]);
  }

  dfs(0, 0);

  return answer;
}

/*

- 이해
n개의 음이 아닌 정수를 더하거나 빼서 원하는 숫자를 만든다.
문제의 카테고리가 어떻게 풀 지를 이미 알려주고 있는데 어떻게 이용해야 할지 감이 오지 않는다.
일단 모든 경우의 수를 순회해야 할 것으로 보인다. 
그렇다면 numbers 안에 각 숫자는 + 혹은 - 연산을 당하게 되고 따라서 총 경우의 수는 2^n이다.
시간복잡도가 뭔가 이상하지만 이렇게 이해한대로 진행한다.

  - 필요한 개념 공부
    - dfs
      - 계속해서 방문할 수 있는 최대 깊이의 노드 먼저 탐색하는 순회 알고리즘이다.
      - 연결된 자식 노드를 모두 탐색한 후 형제 노드를 탐색하고 같은 과정을 반복한다.
      - 스택을 이용하여 LIFO 방식으로 구현할 수 있다. 


- 계획
answer를 0으로 초기화한다.
함수 dfs(index, sum)를 만든다.
  index와 numbers의 길이가 같다면, 
    sum이 target과 같다면,
      answser에 1을 더한다.
    함수를 종료한다.

    더하기 연산에 대한 dfs를 호출한다.
    빼기 연산에 대한 dfs를 호출한다.

dfs를 호출한다.

answer를 반환한다.

- 실행
function solution(numbers, target) {
  let answer = 0;
  function dfs(index, sum) {
    if (index === numbers.length) {
      if (sum === target) {
        answer++;
      }

      return;
    }

    dfs(index + 1, sum + numbers[index]);
    dfs(index + 1, sum - numbers[index]);
  }

  dfs(0, 0);

  return answer;
}

- 회고
굳이 dfs 함수를 만들지 않는 쪽으로 리팩토링 할 수 있을 것으로 보인다.

*/