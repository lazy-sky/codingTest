// https://leetcode.com/problems/top-k-frequent-elements/
// 347. Top K Frequent Elements

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
  const map = new Map();

  nums.forEach((num) => {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  });

  return Array.from(map.entries())
    .sort((a, b) => b[1] - a[1])
    .map((x) => x[0])
    .slice(0, k);
};
