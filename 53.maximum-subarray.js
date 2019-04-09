/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 *
 * https://leetcode.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (42.89%)
 * Total Accepted:    475.2K
 * Total Submissions: 1.1M
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * Given an integer array nums, find the contiguous subarray (containing at
 * least one number) which has the largest sum and return its sum.
 * 
 * Example:
 * 
 * 
 * Input: [-2,1,-3,4,-1,2,1,-5,4],
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 * 
 * 
 * Follow up:
 * 
 * If you have figured out the O(n) solution, try coding another solution using
 * the divide and conquer approach, which is more subtle.
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    const dp = [];
    for(let i = 0, len = nums.length; i<len; i++) {
        if(dp.length) {
            //如果前面累计子串合<0，就不需要再累加了
            //因为肯定存在一个更优的子串（当前元素）
            if(dp[dp.length-1]<0) {
                dp.push(nums[i]);
            }else {
                //这里必须dp.push
                //举个栗子：最优子串的尾为nums.length-2，但是nums[nums.length-1]为负数
                dp.push(dp[dp.length-1]+nums[i]);
            }
        }else {
            dp.push(nums[i]);
        }
    }
    return Math.max(...dp);
};

