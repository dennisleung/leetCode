/*
 * @lc app=leetcode id=520 lang=javascript
 *
 * [520] Detect Capital
 */
/*
✔ Accepted
  ✔ 550/550 cases passed (52 ms)
  ✔ Your runtime beats 100 % of javascript submissions
  ✔ Your memory usage beats 98.34 % of javascript submissions (34 MB)
*/

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    return /(^[A-Z]+$)|(^[a-z]+$)|(^[A-Z][a-z]+$)/.test(word);
};

