/*
 * @lc app=leetcode id=219 lang=javascript
 *
 * [219] Contains Duplicate II
 *
 * https://leetcode.com/problems/contains-duplicate-ii/description/
 *
 * algorithms
 * Easy (34.92%)
 * Total Accepted:    189.7K
 * Total Submissions: 542.6K
 * Testcase Example:  '[1,2,3,1]\n3'
 *
 * Given an array of integers and an integer k, find out whether there are two
 * distinct indices i and j in the array such that nums[i] = nums[j] and the
 * absolute difference between i and j is at most k.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: nums = [1,2,3,1], k = 3
 * Output: true
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: nums = [1,0,1,1], k = 1
 * Output: true
 * 
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: nums = [1,2,3,1,2,3], k = 2
 * Output: false
 * 
 * 
 * 
 * 
 * 
 */
/*
//better solution:
var containsNearbyDuplicate = function(nums, k) {
    let ind = {}, n = nums.length;
    for (let i = 0; i < n; i++) {
        if (nums[i] in ind && i - ind[nums[i]] <= k) {
            return true;
        }
        ind[nums[i]] = i;
    }
    return false;
};
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    for(let i = 0, len = nums.length; i<len; i++) {
        let num = nums[i];
        let subArr = nums.slice(i+1, i+1+k);
        let j = subArr.indexOf(num);
        if(j!==-1) {
            return true;
        }
    }

    return false;
};
