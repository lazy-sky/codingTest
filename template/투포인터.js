/*
투포인터 알고리즘이란
- 일차원 배열에 두 개의 포인터를 두고 조작하는 알고리즘
- 보통 연속적인 구간에 대한 계산에 사용된다. 

- 어려운 개념은 아니지만 모를 때는 당황스러울 수 있는 유형이다.
- 백트래킹을 사용하거나 완전 탐색으로 풀려다 시간 제한에 걸리는 경우가 많다.
*/

// https://programmers.co.kr/learn/courses/30/lessons/67258
function solution(gems) {
  let start = 0;
  let end = 0;
  let answer = [0, gems.length];

  const kindsCount = new Set(gems).size;
  const collection = new Map();
  collection.set(gems[0], 1);

  while (start < gems.length && end < gems.length) {
    if (collection.size === kindsCount) {
      if (end - start < answer[1] - answer[0]) {
        answer = [start + 1, end + 1];
      }

      collection.set(gems[start], collection.get(gems[start]) - 1);
      if (collection.get(gems[start]) === 0) {
        collection.delete(gems[start]);
      }

      start += 1;
    } else {
      end += 1;
      collection.set(gems[end], 1 + (collection.get(gems[end]) || 0));
    }
  }

  return answer;
}
