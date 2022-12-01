// https://school.programmers.co.kr/learn/courses/30/lessons/120844

function solution(numbers, direction) {
  const answer = [...numbers];

  if (direction === 'right') {
    answer.unshift(answer.pop());
  }

  if (direction === 'left') {
    answer.push(answer.shift());
  }

  return answer;
}
