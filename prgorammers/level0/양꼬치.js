// https://school.programmers.co.kr/learn/courses/30/lessons/120830

function solution(n, k) {
  const foodPrice = 12000;
  const drinkPrice = 2000;
  const serviceCount = Math.floor(n / 10);
  const drinkOrderCount = k - serviceCount;

  return n * foodPrice + drinkOrderCount * drinkPrice;
}
