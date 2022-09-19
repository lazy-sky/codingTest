function solution(N) {
  const binaryString = N.toString(2);
  // 1이 있는 위치(인덱스)만을 반환하는 배열을 선언
  const oneIndexes = [...binaryString]
    .map((digit, index) => {
      if (digit === '1') {
        return index + 1;
      }
    })
    .filter((x) => x);
  let max = 0;

  if (oneIndexes.length === 0 || oneIndexes.length === 1) return max;

  // oneIndexes를 순회하며 최대 max gap을 갱신
  for (let i = 0; i < oneIndexes.length - 1; i++) {
    max = Math.max(max, oneIndexes[i + 1] - oneIndexes[i] - 1);
  }

  return max;
}
