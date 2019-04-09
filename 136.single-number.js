/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 *
 * https://leetcode.com/problems/single-number/description/
 *
 * algorithms
 * Easy (59.28%)
 * Total Accepted:    429.2K
 * Total Submissions: 724K
 * Testcase Example:  '[2,2,1]'
 *
 * Given a non-empty array of integers, every element appears twice except for
 * one. Find that single one.
 * 
 * Note:
 * 
 * Your algorithm should have a linear runtime complexity. Could you implement
 * it without using extra memory?
 * 
 * Example 1:
 * 
 * 
 * Input: [2,2,1]
 * Output: 1
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [4,1,2,1,2]
 * Output: 4
 * 
 * 
 */

 /*
 //Better solution:bit-wise xor;paired nums xor remain 0, the res left should be the non-paired one.
 var singleNumber = function(nums) {
    let res = nums[0], len = nums.length, i = 1
    for(i; i< len; i++) {
        res ^= nums[i]
    }
    return res
};

var singleNumber = function(nums) {
  return nums.reduce((a,b)=>a^b);
};
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    for(let i = 0, len = nums.length; i<len; i++) {
        if(nums.indexOf(nums[i])===i && nums.lastIndexOf(nums[i])===i) {
            return nums[i];
        }
    }
};

