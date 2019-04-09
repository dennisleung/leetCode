/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 *
 * https://leetcode.com/problems/happy-number/description/
 *
 * algorithms
 * Easy (44.60%)
 * Total Accepted:    221K
 * Total Submissions: 495.3K
 * Testcase Example:  '19'
 *
 * Write an algorithm to determine if a number is "happy".
 * 
 * A happy number is a number defined by the following process: Starting with
 * any positive integer, replace the number by the sum of the squares of its
 * digits, and repeat the process until the number equals 1 (where it will
 * stay), or it loops endlessly in a cycle which does not include 1. Those
 * numbers for which this process ends in 1 are happy numbers.
 * 
 * Example: 
 * 
 * 
 * Input: 19
 * Output: true
 * Explanation: 
 * 1^2 + 9^2 = 82
 * 8^2 + 2^2 = 68
 * 6^2 + 8^2 = 100
 * 1^2 + 0^2 + 0^2 = 1
 * 
 * 这道题是阅读理解。。
 * 『or it loops endlessly in a cycle which does not include 1』这句话的意思是如果分解过程中出现了循环，则不是happy number
 */

var cache;

var _isHappy = function(n) {
    n = "" + n;
    if(n==="1") {
        return true;
    }
    if(cache[n]!==void 0) {//loop founded
        return false;
    }
    cache[n] = 1;

    n = n.split("").map(v=>v**2).reduce((a, b)=>a+b, 0);
    return _isHappy(n);
};

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    cache = {};
    return _isHappy(n);
};

