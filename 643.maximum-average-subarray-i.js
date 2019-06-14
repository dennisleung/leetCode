/*
 * @lc app=leetcode id=643 lang=javascript
 *
 * [643] Maximum Average Subarray I
 */
/*
✔ Accepted
  ✔ 123/123 cases passed (104 ms)
  ✔ Your runtime beats 49.14 % of javascript submissions
  ✔ Your memory usage beats 87.23 % of javascript submissions (42.5 MB)
  
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let max = 0;
    for(let i = 0; i<k; i++) {
        max += nums[i];
    }
    
    let sum = max;
    for(let i = k, len = nums.length; i<len; i++) {
        sum = sum - nums[i-k] + nums[i];
        max = Math.max(sum, max);
    }

    return max/k;
};

