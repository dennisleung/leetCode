/*
 * @lc app=leetcode id=633 lang=javascript
 *
 * [633] Sum of Square Numbers
 */
/*
✔ Accepted
  ✔ 124/124 cases passed (60 ms)
  ✔ Your runtime beats 89.57 % of javascript submissions
  ✔ Your memory usage beats 39.35 % of javascript submissions (34.8 MB)

*/

/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    for(let i = 0, max = Math.sqrt(Math.round(c/2)); i<=max; i++) {
        if(Math.sqrt(c-i*i)%1==0) {
            return true;
        }
    }

    return false;
};

