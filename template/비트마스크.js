/* 
비트 마스크
- 이진법 성질을 이용하여 문제를 해결하는 방법
- 특정 알고리즘은 아니고 비트 연산을 이용한 일종의 코딩 기법
- 이진수가 자료 구조로 사용된다.
- 배열 대신 이진수를 이용할 수 있다. 
  - e.g., [true, true, false, true] = 13(1101)
- 굉장히 빠르고 메모리 사용량이 적다.
- 그리디, 동적 계획법 등 다른 알고리즘과 사용할 수 있다.

비트를 배열(집합)처럼 사용하기
- false로 초기화 하기: bit = 0
- N개 만큼 true로 초기화 하기: bit = (1 << N) - 1;
- i번째 요소 true로 바꾸기: bit |= (1 << i);
- i번째 요소 true로 바꾸기: bit ^= (1 << i);
- i번째 요소 토글하기: bit ^= (1 << i);
- i번째 요소가 true인지 체크하기: bit & (1 << i);

두 집합끼리 연산하기
- 합집합: A | B;
- 교집합: A & B;
- 차집합: A & (~B);
- 배타적 논리합(xor): A ^ B;

주의할 점
- 정수형 범위를 넘지 않도록
- 연산자 우선 순위
*/

// https://programmers.co.kr/learn/courses/30/lessons/17681

function solution(n, arr1, arr2) {
  const answer = [];
  for (let i = 0; i < n; i++) {
    const union = arr1[i] | arr2[i];
    let bit = union.toString(2);

    if (bit.length !== n) {
      bit = ' '.repeat(n - bit.length) + bit;
    }

    const encoded = bit.replace(/1/g, '#').replace(/0/g, ' ');
    answer.push(encoded);
  }

  return answer;
}
