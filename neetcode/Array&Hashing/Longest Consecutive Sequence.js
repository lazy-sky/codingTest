// https://leetcode.com/problems/longest-consecutive-sequence/
// 128. Longest Consecutive Sequence

/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = (nums) => {
  let maxScore = 0;
  const numSet = new Set(nums); /* Time O(N), Space O(N) */

  for (const num of [...numSet]) {
    const prevNum = num - 1;

    if (numSet.has(prevNum)) continue; /* Time O(N) */
    let currNum = num;
    let score = 1;

    while (numSet.has(currNum + 1)) {
      currNum += 1;
      score += 1;
    }

    maxScore = Math.max(maxScore, score);
  }

  return maxScore;
};
