/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 *
 * https://leetcode.com/problems/house-robber/description/
 *
 * algorithms
 * Easy (40.87%)
 * Total Accepted:    302.8K
 * Total Submissions: 740.9K
 * Testcase Example:  '[1,2,3,1]'
 *
 * You are a professional robber planning to rob houses along a street. Each
 * house has a certain amount of money stashed, the only constraint stopping
 * you from robbing each of them is that adjacent houses have security system
 * connected and it will automatically contact the police if two adjacent
 * houses were broken into on the same night.
 * 
 * Given a list of non-negative integers representing the amount of money of
 * each house, determine the maximum amount of money you can rob tonight
 * without alerting the police.
 * 
 * Example 1:
 * 
 * 
 * Input: [1,2,3,1]
 * Output: 4
 * Explanation: Rob house 1 (money = 1) and then rob house 3 (money =
 * 3).
 * Total amount you can rob = 1 + 3 = 4.
 * 
 * Example 2:
 * 
 * 
 * Input: [2,7,9,3,1]
 * Output: 12
 * Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house
 * 5 (money = 1).
 * Total amount you can rob = 2 + 9 + 1 = 12.
 * 
 * 
 */

var cache;//必须剪枝，否则会超时
var robSub = function(nums, start) {
    if(!nums.length) {//sanity check
        return 0;
    }

    if(nums.length==1) {
        return nums[0];
    }

    if(start>nums.length-1) {
        return 0;
    }
    
    if(cache[start]!==void 0) {//有个很奇葩的test case:[0, 0, 0, .... 0]，必须!==void 0防止超时
        return cache[start];
    }

    //rob(nums.slice(1)) //抛弃nums[0]，从nums[1]开始抢
    //nums[0] + rob(nums.slice(2)) //抢nums[0]，nums[1]不能抢，从nums[2]开始抢
    const result = Math.max(robSub(nums, start+1), nums[start] + robSub(nums, start+2));
    cache[start] = result;

    return result;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    cache = {};//每次都要reset cache防止test case之间互相污染
    return robSub(nums, 0);
};

