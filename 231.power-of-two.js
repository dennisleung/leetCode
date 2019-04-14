/*
 * @lc app=leetcode id=231 lang=javascript
 *
 * [231] Power of Two
 *
 * https://leetcode.com/problems/power-of-two/description/
 *
 * algorithms
 * Easy (41.75%)
 * Total Accepted:    220.1K
 * Total Submissions: 526.8K
 * Testcase Example:  '1'
 *
 * Given an integer, write a function to determine if it is a power of two.
 * 
 * Example 1:
 * 
 * 
 * Input: 1
 * Output: true 
 * Explanation: 2^0 = 1
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 16
 * Output: true
 * Explanation: 2^4 = 16
 * 
 * Example 3:
 * 
 * 
 * Input: 218
 * Output: false
 * 
 */
/*
better solution:
var isPowerOfTwo = function(n) {
  return (n > 0) && ((n & (n - 1)) === 0)
}

var isPowerOfTwo = function(n) {
    if(n < 1){
        return false;
    }
    return (n).toString(2).split("1").length == 2;
};
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let result = Math.log2(n);
    return ~~result == result;
};

