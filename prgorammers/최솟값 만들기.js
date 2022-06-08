// https://programmers.co.kr/learn/courses/30/lessons/12941
// Level 2

/*
풀이 전:
- 배열의 크기가 1000 * 2 이므로 완전 탐색으로 진행해도 무방하다는 판단
- 그렇다면 어떻게 순회할 것인가?
- 복잡도는 n!
- 아 그러면 그냥 순회가 아니네
- 아마 산술기하 평균을 이용해야 할 것으로 보인다. 즉 가장 작은 값과 가장 큰 값이 만나도록 해야한다.
- 그렇다면 배열을 각각 오름차순, 내림차순으로 정렬하고 값을 빼내는 식으로 진행한다.
*/

function solution(A,B){
  const arr1 = [...A].sort((a, b) => a - b)
  const arr2 = [...B].sort((a, b) => b - a)
  
  const answer = arr1
      .map((x, index) => x * arr2[index])
      .reduce((acc, cur) => acc + cur, 0)
  
  return answer
}

/*
풀이 후:
- 한 방에 통과!
- 근데 사실 좀 허무하다. 생각해낸 방법이 엄밀하게 맞을 거라는 전제없이 일단 하고본 결과이기 때문이다.
- 따로 변수를 선언하지도 않았고, 순수 함수 방식으로 구현해서 코드 자체는 마음에 든다.
*/