// https://programmers.co.kr/learn/courses/30/lessons/67257
// 2020 카카오 인턴십, Level 2

/* 
- 이해
3가지의 연산문자(+, -, *) 만으로 이루어진 연산 수식이 전달되며,
전달받은 수식에 포함된 연산자의 우선순위를 자유롭게 재정의하여 만들 수 있는 가장 큰 숫자를 제출하는 것
단, 연산자의 우선순위를 새로 정의할 때, 같은 순위의 연산자는 없어야 합니다. 
만약 계산된 결과가 음수라면 해당 숫자의 절댓값으로 변환하여 제출하며, 
제출한 숫자가 가장 큰 참가자를 우승자로 선정하며, 우승자가 제출한 숫자를 우승상금으로 지급하게 됩니다.

연산자의 개수 n에 대해 n!만큼 경우의 수가 생긴다.

어제 풀었던 '타겟 넘버' 문제와 마찬가지로 우선순위대로 계산하는 문제이기 때문에 스택 구조를 이용하여 풀 수 있을 것으로 기대된다.

- 계획
answer를 0으로 초기화한다.
expression을 숫자와 연산자로 분리한다.
모든 가능한 우선순위에 대한 연산자 조합을 만든다.
각 우선순위 조합으로 수식을 계산한다. 
수식의 절대값이 answer보다 높으면 값을 answer에 대입한다.



- 실행

- 회고

 */

function solution(expression) {
  let answer = 0;

  const priorities = [
    ["+", "-", "*"],
    ["+", "*", "-"],
    ["-", "+", "*"],
    ["-", "*", "+"],
    ["*", "+", "-"],
    ["*", "-", "+"],
  ];

  const operate = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
  };
  
  const numbers = expression.split(/[*+-]/).map(x => Number(x));
  const operators = expression.match(/[\+\-\*]/g);

  for (const priority of priorities) {
    const tempNumbers = [...numbers];
    const tempOperators = [...operators];
    let operatorIndex = 0;

    while (tempNumbers.length > 1) {
      for (let i = 0; i < tempOperators.length; i++) {
          if (tempOperators[i] === priority[operatorIndex]) {
              tempNumbers[i] = operate[tempOperators[i]](tempNumbers[i], tempNumbers[i + 1]);

              tempNumbers.splice(i + 1, 1);
              tempOperators.splice(i, 1);
              i--;
          }
      }
      
      operatorIndex++;
    } 
    
    if (Math.abs(tempNumbers[0]) > answer) answer = Math.abs(tempNumbers[0]);
  }

  return answer;
}

// 너무 많은 반복문, 계획 재고해보기

// 우선순위 for문은 3번이라 무시해도 됨,
// 따라서 시간복잡도는 n^2