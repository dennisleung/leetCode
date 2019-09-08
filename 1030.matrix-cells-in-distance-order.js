/*
 * @lc app=leetcode id=1030 lang=javascript
 *
 * [1030] Matrix Cells in Distance Order
 */
/*
✔ Accepted
  ✔ 66/66 cases passed (144 ms)
  ✔ Your runtime beats 94.04 % of javascript submissions
  ✔ Your memory usage beats 100 % of javascript submissions (47.6 MB)
*/
/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var allCellsDistOrder = function(R, C, r0, c0) {
    const cells = [];
    for(let i = 0; i<R; i++) {
        for(let j = 0; j<C; j++) {
            cells.push([i, j]);
        }
    }
    cells.sort(([r1, c1], [r2, c2]) => {
        return (Math.abs(r1-r0)+Math.abs(c1-c0)) - (Math.abs(r2-r0)+Math.abs(c2-c0));
    });

    return cells;
};

