// https://leetcode.com/problems/contains-duplicate/
// 217. Contains Duplicate

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  const uniques = [...new Set(nums)];

  return nums.length !== uniques.length;
};
