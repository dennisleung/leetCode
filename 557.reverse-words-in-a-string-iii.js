/*
 * @lc app=leetcode id=557 lang=javascript
 *
 * [557] Reverse Words in a String III
 */
/*
✔ Accepted
  ✔ 30/30 cases passed (96 ms)
  ✔ Your runtime beats 25.36 % of javascript submissions
  ✔ Your memory usage beats 89.93 % of javascript submissions (41.7 MB)


网上解法思路差不多，没明白这runtime是咋回事
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(/ /g).map(v=>v.split("").reverse().join("")).join(" ");
};

