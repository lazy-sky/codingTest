// https://leetcode.com/problems/two-sum/
// 1. Two Sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};

// Hash ver. O(n)
const twoSum2 = (nums, target) => {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (!map.has(complement)) {
      map.set(nums[i], i);
      continue;
    }

    return [map.get(complement), i];
  }
};
