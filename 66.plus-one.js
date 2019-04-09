/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 *
 * https://leetcode.com/problems/plus-one/description/
 *
 * algorithms
 * Easy (40.73%)
 * Total Accepted:    360.4K
 * Total Submissions: 884K
 * Testcase Example:  '[1,2,3]'
 *
 * Given a non-empty array of digits representing a non-negative integer, plus
 * one to the integer.
 * 
 * The digits are stored such that the most significant digit is at the head of
 * the list, and each element in the array contain a single digit.
 * 
 * You may assume the integer does not contain any leading zero, except the
 * number 0 itself.
 * 
 * Example 1:
 * 
 * 
 * Input: [1,2,3]
 * Output: [1,2,4]
 * Explanation: The array represents the integer 123.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [4,3,2,1]
 * Output: [4,3,2,2]
 * Explanation: The array represents the integer 4321.
 * 
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    digits = digits.reverse();
    let bonus = 0;
    for(let i = 0, len = digits.length; i<len; i++) {
        let digit = digits[i];
        if(i==0) {
            digit += 1;
        }else {
            digit += bonus;
            bonus = 0;
        }
        if(digit>=10) {
            digits[i] = digit%10;
            bonus++;
        }else {
            digits[i] = digit;
            break;
        }
    }

    if(bonus>0) {
        digits.push(1);
    }

    return digits.reverse();
};

