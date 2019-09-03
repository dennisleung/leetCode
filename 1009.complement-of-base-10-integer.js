/*
 * @lc app=leetcode id=1009 lang=javascript
 *
 * [1009] Complement of Base 10 Integer
 */
/*
✔ Accepted
  ✔ 128/128 cases passed (48 ms)
  ✔ Your runtime beats 91.28 % of javascript submissions
  ✔ Your memory usage beats 100 % of javascript submissions (33.8 MB)
*/
/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {
    return parseInt(N.toString(2).replace(/./g, (match)=>match==="1"?"0":"1"), 2);
};

