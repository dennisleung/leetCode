/*
 * @lc app=leetcode id=258 lang=javascript
 *
 * [258] Add Digits
 *
 * https://leetcode.com/problems/add-digits/description/
 *
 * algorithms
 * Easy (53.82%)
 * Total Accepted:    233.1K
 * Total Submissions: 433.1K
 * Testcase Example:  '38'
 *
 * Given a non-negative integer num, repeatedly add all its digits until the
 * result has only one digit.
 * 
 * Example:
 * 
 * 
 * Input: 38
 * Output: 2 
 * Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. 
 * Since 2 has only one digit, return it.
 * 
 * 
 * Follow up:
 * Could you do it without any loop/recursion in O(1) runtime?
 */
/*
找规律：
https://www.cnblogs.com/grandyang/p/4741028.html
better solution:
var addDigits = function(num) {
    return (num - 1) % 9 + 1;
};
*/

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(`${num}`.length<=1) {
        return num;
    }

    return addDigits(`${num}`.split("").reduce((a, b)=>{return parseInt(a)+parseInt(b)}, 0));
};

