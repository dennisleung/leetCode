/*
 * @lc app=leetcode id=908 lang=javascript
 *
 * [908] Smallest Range I
 */
/*
✔ Accepted
  ✔ 68/68 cases passed (84 ms)
  ✔ Your runtime beats 16.22 % of javascript submissions
  ✔ Your memory usage beats 100 % of javascript submissions (37.7 MB)

more clean solution:
✔ Accepted
  ✔ 68/68 cases passed (84 ms)
  ✔ Your runtime beats 16.22 % of javascript submissions
  ✔ Your memory usage beats 100 % of javascript submissions (37.7 MB)
*/

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function(A, K) {
    A.sort((a, b)=>a-b);
    let min = (A[0] += K);
    let max = (A[A.length-1] -= K);
    return Math.max(max-min, 0);
};

