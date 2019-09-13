/*
 * @lc app=leetcode id=1051 lang=javascript
 *
 * [1051] Height Checker
 */
/*
✔ Accepted
  ✔ 79/79 cases passed (64 ms)
  ✔ Your runtime beats 48.17 % of javascript submissions
  ✔ Your memory usage beats 100 % of javascript submissions (34.9 MB)
*/

/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    const oldHeights = [].concat(heights);
    heights.sort((a,b)=>a-b);
    return heights.reduce((count, v, i)=>count+(heights[i]==oldHeights[i]?0:1), 0);
};

