/*
 * @lc app=leetcode id=598 lang=javascript
 *
 * [598] Range Addition II
 */

/*
✔ Accepted
  ✔ 69/69 cases passed (80 ms)
  ✔ Your runtime beats 10.34 % of javascript submissions
  ✔ Your memory usage beats 12.07 % of javascript submissions (36.8 MB)
*/

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    const is = [m];
    const js = [n];
    for(let op of ops) {
        is.push(op[0]);
        js.push(op[1]);
    }

    return Math.min(...is) * Math.min(...js);
};

