function solution(A) {
  const uniques = [...new Set(A)];
  if (A.length !== uniques.length) return 0;
  if (A.length !== Math.max(...uniques)) return 0;

  return 1;
}
