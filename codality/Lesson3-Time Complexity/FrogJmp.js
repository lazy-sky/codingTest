function solution(X, Y, D) {
  const distance = Math.abs(Y - X);

  return Math.ceil(distance / D);
}

// 첫 시도에선 효율성 테스트를 통과하지 못했다. O(Y - X)
while (true) {
  if (D * answer >= distance) break;
  answer += 1;
}

// 근데 생각해보니 하나씩 늘릴 것이 아니라 그냥 나누기 하면 되잖아? O(1)
// 바보 같았다.
