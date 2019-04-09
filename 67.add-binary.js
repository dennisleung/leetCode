/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 *
 * https://leetcode.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (38.07%)
 * Total Accepted:    280.9K
 * Total Submissions: 736.7K
 * Testcase Example:  '"11"\n"1"'
 *
 * Given two binary strings, return their sum (also a binary string).
 * 
 * The input strings are both non-empty and contains only characters 1 or 0.
 * 
 * Example 1:
 * 
 * 
 * Input: a = "11", b = "1"
 * Output: "100"
 * 
 * Example 2:
 * 
 * 
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 * 
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let i = 1;
    let bonus = 0;
    let result = [];
    if(b.length>a.length) {
        [a, b] = [b, a];
    }
    while(a.length-i>=0) {
        let aa = parseInt(a[a.length-i]);
        let bb = i<=b.length ? parseInt(b[b.length-i]) : 0;
        let r = aa + bb + bonus;
        bonus = 0;
        if(r>=2) {
            bonus = 1;
            r = r%2;
        }
        result.push(r);
        i++;
    }
    if(bonus>0) {
        result.push(1);
    }
    return result.reverse().join("");
};

