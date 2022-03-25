/* 
순열과 조합은 재귀 함수를 이용하면 쉽게 만들 수 있다.
성능이나 콜 스택 위험을 생각하면 스택으로 구현하는 것이 좋지만,
순열과 조합 자체의 시간 복잡도가 굉장히 크기 때문에 코딩 테스트에서 n이 크게 나오는 경우는 많지 않다.
따라서 재귀로 외우는 것이 직관적이고 편하다.

순열은 O(n!), 조합은 O(2^n)이다.
*/

// 조합
const getCombinations = (arr, selectedNumber) => {
  if (selectedNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return
  const results = [];

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤
    const combinations = getCombinations(rest, selectedNumber - 1); // 나머지에 대해서 조합을 구한다.
    const attached = combinations.map((combination) => [fixed, ...combination]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
    results.push(...attached); // 배열 spread syntax 로 모두다 push
  });

  return results;
};

const example = [1, 2, 3, 4];
const result = getCombinations(example, 3);
console.log(result); // [ [ 1, 2, 3 ], [ 1, 2, 4 ], [ 1, 3, 4 ], [ 2, 3, 4 ] ]

// 순열
const getPermutations = (array, selectedNumber) => {
  // 1개만 뽑는다면 그대로 순열을 반환한다. 탈출 조건으로도 사용된다.
  if (selectedNumber === 1) return array.map((element) => [element]);
  const results = [];

  array.forEach((fixed, index, origin) => {
    // const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const rest = origin.filter((_, i) => i !== index);
    const permutations = getPermutations(rest, selectedNumber - 1);
    const attached = permutations.map((permutation) => [fixed, ...permutation]);
    results.push(...attached);
  });

  return results;
};

console.log(getPermutations([1, 2, 3, 4], 3));
