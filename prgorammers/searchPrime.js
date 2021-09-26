// [소수 찾기] https://programmers.co.kr/learn/courses/30/lessons/12921
// 연습문제, 완전탐색, Level 2


// 이해
// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수
// 너무 고전적인 문제라 이를 위한 알고리즘을 이미 접한 바 있다. (에스토스테네스의 체)
// 가장 직관적으로 생각나는 반복 탐색은 효율성이 좋지 않아 시간 초과 문제가 발생한다.

// 계획
/*
에스토스테네스의 체 원리 이용.
인덱스 번호가 주어진 숫자 n과 대응하도록 빈 배열을 만든다(배열은 인덱스 0부터 시작하므로, 주어진 숫자 n에 1을 더해준다). 
각 원소는 true로 초기화한다. true는 소수라는 의미다.
배열을 순회하며,
  만약 원소가 true라면,
    그 원소의 제곱부터 시작하여 그 원소만큼 더하며 해당 원소들을 false로 바꾼다. (이들은 소수가 아니니까)
배열에 남은 true의 개수를 반환한다.
*/

// 실행
function solution(n) {
  const arr = new Array(n + 1).fill(true).fill(false, 0, 2);

  arr.forEach((x, i) => {
    if (x) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  });

  return arr.filter(x => x).length;
}

// 회고