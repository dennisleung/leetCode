/*
 * @lc app=leetcode id=367 lang=javascript
 *
 * [367] Valid Perfect Square
 *
 * https://leetcode.com/problems/valid-perfect-square/description/
 *
 * algorithms
 * Easy (39.60%)
 * Total Accepted:    105.8K
 * Total Submissions: 266.9K
 * Testcase Example:  '16'
 *
 * Given a positive integer num, write a function which returns True if num is
 * a perfect square else False.
 * 
 * Note: Do not use any built-in library function such as sqrt.
 * 
 * Example 1:
 * 
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
 * Input: 14
 * Output: false
 * 
 * 
 * 
 */

 /*
 better solution:
 var isPerfectSquare = function(num) {
    var sum = 0;
    for(let i = 1; i <= num; i += 2){
        sum += i;
        if(sum === num){
            return true;
        }
    }
    return false;
};
 这个解答真的秀。
『每个平方数都是a1=1，d=2的等差数列的和。』
等差数列求和公式：
Sn = n* (a1+an) * d = n^2*d/2 + n*a1 - n*d/2
令a1 = 1，d = 2，有Sn = n^2
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let i = 1;
    for(; i*i<num; i++) {}
    return i*i == num;
};

