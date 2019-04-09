/*
 * @lc app=leetcode id=168 lang=javascript
 *
 * [168] Excel Sheet Column Title
 *
 * https://leetcode.com/problems/excel-sheet-column-title/description/
 *
 * algorithms
 * Easy (28.61%)
 * Total Accepted:    165.8K
 * Total Submissions: 579.1K
 * Testcase Example:  '1'
 *
 * Given a positive integer, return its corresponding column title as appear in
 * an Excel sheet.
 * 
 * For example:
 * 
 * 
 * ⁠   1 -> A
 * ⁠   2 -> B
 * ⁠   3 -> C
 * ⁠   ...
 * ⁠   26 -> Z
 * ⁠   27 -> AA
 * ⁠   28 -> AB 
 * ⁠   ...
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: 1
 * Output: "A"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 28
 * Output: "AB"
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: 701
 * Output: "ZY"
 * 
 * 不是自己做出来的。。
 * 进制都可以用这种方法实现？ m进制：convertToTitle(~~(--n/m)) + m%n;
 */
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    return n === 0 ? '' : convertToTitle(~~(--n / 26)) + String.fromCharCode('A'.charCodeAt() + (n % 26));
};