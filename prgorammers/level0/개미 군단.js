// https://school.programmers.co.kr/learn/courses/30/lessons/120837

function solution(hp) {
  let leftHp = hp;
  let count = 0;

  while (leftHp) {
    if (leftHp >= 5) {
      leftHp -= 5;
      count += 1;
      continue;
    }

    if (leftHp >= 3) {
      leftHp -= 3;
      count += 1;
      continue;
    }

    if (leftHp >= 1) {
      leftHp -= 1;
      count += 1;
      continue;
    }
  }

  return count;
}
