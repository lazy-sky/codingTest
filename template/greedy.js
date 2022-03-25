/*
그리디: 매 선택에서 지금 이 순간 가장 최적인 답을 선택하는 알고리즘, 최적해 보장 X

특징
- 최적해를 구하는 알고리즘보다 빠른 경우가 많다.
- 크루스칼, 다익스트라 알고리즘 등에 사용된다.
- 직관적인 문제 풀이에 적합하다.
- 대표예: 동전 반환 문제
*/

// https://programmers.co.kr/learn/courses/30/lessons/42883
function solution(number, k) {
  const answer = [];
  let deleteCount = 0;

  for (const digit of number) {
    while (k > deleteCount && digit > answer[answer.length - 1]) {
      answer.pop();
      deleteCount += 1;
    }

    if (answer.length < number.length - k) {
      answer.push(digit);
    }
  }

  return answer.join('');
}
