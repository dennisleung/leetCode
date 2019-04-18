/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 *
 * https://leetcode.com/problems/missing-number/description/
 *
 * algorithms
 * Easy (47.97%)
 * Total Accepted:    262.3K
 * Total Submissions: 546.8K
 * Testcase Example:  '[3,0,1]'
 *
 * Given an array containing n distinct numbers taken from 0, 1, 2, ..., n,
 * find the one that is missing from the array.
 * 
 * Example 1:
 * 
 * 
 * Input: [3,0,1]
 * Output: 2
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [9,6,4,2,3,5,7,0,1]
 * Output: 8
 * 
 * 
 * Note:
 * Your algorithm should run in linear runtime complexity. Could you implement
 * it using only constant extra space complexity?
 */
/*
beat 100%
这道题要求missing number必须存在，如：
input:[1, 2], output:0
input:[0], output:1

better solution:
const missingNumber = nums => nums.reduce((a, e) => a - e, (nums.length * (nums.length + 1)) / 2);
这里巧妙地应用了nums.length确认（理论上应该存在的）最大值。时间复杂度也是O(n)
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sum = 0;
    let max = 0;
    let zeroExist = false;
    for(let num of nums) {
        sum += num;
        max = Math.max(max, num);
        if(!zeroExist && num==0) {
            zeroExist = true;
        }
    }
    let missingNum = (1+max)*max/2-sum;
    return zeroExist ? (missingNum || max+1) : 0;
};

