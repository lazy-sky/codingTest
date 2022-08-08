// https://school.programmers.co.kr/learn/courses/30/lessons/76501
// level 1.

function solution(absolutes, signs) {
  let answer = 0;

  absolutes.forEach((x, i) => {
    if (signs[i] === true) answer += x;
    if (signs[i] === false) answer -= x;
  });

  return answer;
}
