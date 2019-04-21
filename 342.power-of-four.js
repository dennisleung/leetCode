/*
 * @lc app=leetcode id=342 lang=javascript
 *
 * [342] Power of Four
 *
 * https://leetcode.com/problems/power-of-four/description/
 *
 * algorithms
 * Easy (40.09%)
 * Total Accepted:    110.1K
 * Total Submissions: 274.4K
 * Testcase Example:  '16'
 *
 * Given an integer (signed 32 bits), write a function to check whether it is a
 * power of 4.
 * 
 * Example 1:
 * 
 * 
 * Input: 16
 * Output: true
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 5
 * Output: false
 * 
 * 
 * Follow up: Could you solve it without loops/recursion?
 */
/**
 * @param {number} num
 * @return {boolean}
 */

 /*
方法1：
二进制。但是这个方法很巧妙地运用了正则：
var isPowerOfFour = function(num) {
  return /^1(00)*$/.test(num.toString(2));  
}; 
 
方法2：
换底公式：
var isPowerOfFour = function(num) {
    let pow = Math.log10(num)/Math.log10(4);
    return pow%1==0;
}

方法3：
位运算：
n > 0，sanity check
!(n & (n - 1))，判断二进制是不是10000000...这种格式
(n & 0x55555555)，0x55555555很特殊，奇数位为1，偶数位为0，通过这个判断1是否在奇数位上
var isPowerOfFour = n => n > 0 && !(n & (n - 1)) && (n & 0x55555555)
 */
var isPowerOfFour = function(num) {
    // if(num<0) {//sanity check
    //     return false;
    // }
    // let str = num.toString(2);
    // let firstOne = str.indexOf("1");
    // let zeros = str.slice(firstOne+1);
    // if(zeros.indexOf("1")==-1) {
    //     return !(zeros.length%2);
    // }else {
    //     return false;
    // }

    let pow = Math.log10(num)/Math.log10(4);
    return pow%1==0;
};

