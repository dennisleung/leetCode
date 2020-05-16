/*
 * @lc app=leetcode id=209 lang=javascript
 *
 * [209] Minimum Size Subarray Sum
 */

/*
15/15 cases passed (52 ms)
Your runtime beats 88.63 % of javascript submissions
Your memory usage beats 50 % of javascript submissions (35.7 MB)
*/

// @lc code=start
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    let left = 0;
    let right = 0;
    let min = Infinity;
    let sum = 0;
    while(right<nums.length) {
        sum += nums[right];
        if(sum<s) {
            right++;
        }else if(sum>=s) {
            min = Math.min(min, right-left+1);
            sum -= nums[right];
            sum -= nums[left];
            left++;
            right = Math.max(left, right);
        }
    }

    return min===Infinity ? 0 : min;
};

// test cases:
// assertCompare(()=>minSubArrayLen(7, [2,3,1,2,4,3]), 2);
// assertCompare(()=>minSubArrayLen(1000, [2,3,1,2,4,3]), 0);
// assertCompare(()=>minSubArrayLen(2, [2]), 1);

// @lc code=end

