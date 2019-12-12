/*
 * @lc app=leetcode id=151 lang=javascript
 *
 * [151] Reverse Words in a String
 */

/*
25/25 cases passed (52 ms)
Your runtime beats 88.58 % of javascript submissions
Your memory usage beats 63.64 % of javascript submissions (35 MB)
*/

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(/\s/g).filter(v=>!!v).reverse().join(" ");
};

// test cases:
// assertCompare(()=>reverseWords("the sky is blue"), "blue is sky the");
// assertCompare(()=>reverseWords("  hello world!  "), "world! hello");
// assertCompare(()=>reverseWords("a good   example"), "example good a");
// assertCompare(()=>reverseWords("a"), "a");
// assertCompare(()=>reverseWords(" "), "");
// @lc code=end

