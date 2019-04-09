/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 *
 * https://leetcode.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (25.16%)
 * Total Accepted:    621.3K
 * Total Submissions: 2.5M
 * Testcase Example:  '123'
 *
 * Given a 32-bit signed integer, reverse digits of an integer.
 * 
 * Example 1:
 * 
 * 
 * Input: 123
 * Output: 321
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: -123
 * Output: -321
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: 120
 * Output: 21
 * 
 * 
 * Note:
 * Assume we are dealing with an environment which could only store integers
 * within the 32-bit signed integer range: [−2^31,  2^31 − 1]. For the purpose
 * of this problem, assume that your function returns 0 when the reversed
 * integer overflows.
 * 
 */
var isOverflow = (x, positive)=>{
    let maxValue;
    if(positive) {
        maxValue = "" + (Math.pow(2, 31) - 1);
    }else  {
        maxValue = ("" + (-Math.pow(2, 31))).slice(1);
    }
    
    if(maxValue.length > x.length) {
        return false;
    }else if(maxValue.length<x.length) {
        return true;
    }

    for(let i = 0, len = x.length; i<len; i++) {
        if(x[i]<maxValue[i]) {
            return false;
        }else if(x[i]>maxValue[i]) {
            return true;
        }
    }

    return false;
}


/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let flag = x>0 ? 1 : -1;
    x = Math.abs(x);
    x = (x+"").split("").reverse().join("");
    x = x.replace(/^0+/, "");
    if(!x || isOverflow(x, flag>0)) {
        return 0;
    }
    return parseInt(x) * flag;
};

