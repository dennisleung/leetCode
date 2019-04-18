/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 *
 * https://leetcode.com/problems/move-zeroes/description/
 *
 * algorithms
 * Easy (54.01%)
 * Total Accepted:    446.3K
 * Total Submissions: 826.3K
 * Testcase Example:  '[0,1,0,3,12]'
 *
 * Given an array nums, write a function to move all 0's to the end of it while
 * maintaining the relative order of the non-zero elements.
 * 
 * Example:
 * 
 * 
 * Input: [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 * 
 * Note:
 * 
 * 
 * You must do this in-place without making a copy of the array.
 * Minimize the total number of operations.
 * 
 */
/*
nums.sort的答案无法通过，本地自测是OK的，无解。
双指针的方案很棒！
*/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let pos = 0;
    for(let i = 0, len = nums.length; i<len; i++) {
        if(nums[i]) {
            nums[pos++] = nums[i];
        }
    }

    while(pos<nums.length) {
        nums[pos++] = 0;
    }
};

