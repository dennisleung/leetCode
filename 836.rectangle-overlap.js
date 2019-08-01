/*
 * @lc app=leetcode id=836 lang=javascript
 *
 * [836] Rectangle Overlap
 */
/*
✔ Accepted
  ✔ 43/43 cases passed (44 ms)
  ✔ Your runtime beats 97.02 % of javascript submissions
  ✔ Your memory usage beats 17.24 % of javascript submissions (33.9 MB)

better solution:
var isRectangleOverlap = function(rec1, rec2) {
    return rec2[0] < rec1[2] && rec2[1] < rec1[3] && rec2[2] > rec1[0] && rec2[3] > rec1[1];
};
*/

/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
    const [x1, y1, x2, y2] = rec1;
    const [x3, y3, x4, y4] = rec2;

    //找出它们重叠形成的正方形
    const x5 = Math.max(x1, x3);
    const x6 = Math.min(x2, x4);
    const y5 = Math.max(y1, y3);
    const y6 = Math.min(y2, y4);

    return x5<x6 && y5<y6;
};

