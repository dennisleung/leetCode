/*
 * @lc app=leetcode id=172 lang=javascript
 *
 * [172] Factorial Trailing Zeroes
 *
 * https://leetcode.com/problems/factorial-trailing-zeroes/description/
 *
 * algorithms
 * Easy (37.29%)
 * Total Accepted:    150.7K
 * Total Submissions: 404K
 * Testcase Example:  '3'
 *
 * Given an integer n, return the number of trailing zeroes in n!.
 * 
 * Example 1:
 * 
 * 
 * Input: 3
 * Output: 0
 * Explanation: 3! = 6, no trailing zero.
 * 
 * Example 2:
 * 
 * 
 * Input: 5
 * Output: 1
 * Explanation: 5! = 120, one trailing zero.
 * 
 * Note: Your solution should be in logarithmic time complexity.
 * 
 * 1、这道题不能计算阶乘，因为test case里面会出现很大的数，导致溢出
 * 2、这道题的关键是要找出n!中有多少个5。因为只有2*5=10，n!中2肯定比5多。（偶数都至少含有一个2）
 * 3、n/=5表示求分解后的子项有多少个5（类似递归的思想）
 */

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let result = 0;
    while(n>4) {
        result += ~~(n/=5);
    }
    return result;
};

