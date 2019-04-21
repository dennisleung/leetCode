/*
 * @lc app=leetcode id=326 lang=javascript
 *
 * [326] Power of Three
 *
 * https://leetcode.com/problems/power-of-three/description/
 *
 * algorithms
 * Easy (41.51%)
 * Total Accepted:    177.8K
 * Total Submissions: 428.3K
 * Testcase Example:  '27'
 *
 * Given an integer, write a function to determine if it is a power of three.
 * 
 * Example 1:
 * 
 * 
 * Input: 27
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 0
 * Output: false
 * 
 * Example 3:
 * 
 * 
 * Input: 9
 * Output: true
 * 
 * Example 4:
 * 
 * 
 * Input: 45
 * Output: false
 * 
 * Follow up:
 * Could you do it without using any loop / recursion?
 */
/**
 * @param {number} n
 * @return {boolean}
 */
/*
换底公式。
两个注意点：
1、这里只能用Math.log10换底，Math.log2/Math.log都不行（原因不明）
2、使用pow%1判断是否为整数
*/
var isPowerOfThree = function(n) {
    let pow = Math.log10(n)/Math.log10(3);
    return pow%1==0;
};

