// https://leetcode.com/problems/product-of-array-except-self/
// 238. Product of Array Except Self

/**
 * 0에 대한 예외 처리를 통한 풀이
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
  const zeroCount = nums.filter((num) => num === 0).length;

  if (zeroCount >= 2) {
    return nums.map((num) => 0);
  }

  const productsOfAllExceptZero = nums
    .filter((num) => num !== 0)
    .reduce((acc, cur) => acc * cur, 1);

  if (zeroCount === 1) {
    return nums.map((num) => {
      if (num === 0) return productsOfAllExceptZero;
      return 0;
    });
  }

  return nums.map((num) => productsOfAllExceptZero / num);
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf2 = (nums) => {
  const result = [];
  let productSoFar = 1;

  nums.forEach((num) => {
    result.push(productSoFar);
    productSoFar *= num;
  });

  productSoFar = 1;

  for (let j = nums.length - 1; j >= 0; j--) {
    result[j] *= productSoFar;
    productSoFar *= nums[j];
  }

  return result;
};
