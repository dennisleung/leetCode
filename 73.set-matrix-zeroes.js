/*
 * @lc app=leetcode id=73 lang=javascript
 *
 * [73] Set Matrix Zeroes
 */

/*
159/159 cases passed (80 ms)
Your runtime beats 81.37 % of javascript submissions
Your memory usage beats 80 % of javascript submissions (37.2 MB)
*/

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const rowCache = {};
    const colCache = {};
    for(let i = 0; i<matrix.length; i++) {
        for(let j = 0; j<matrix[i].length; j++) {
            if(!matrix[i][j]) {
                rowCache[i] = 1;
                colCache[j] = 1;
            }
        }
    }

    for(let i = 0; i<matrix.length; i++) {
        for(let j = 0; j<matrix[i].length; j++) {
            if(rowCache[i]||colCache[j]) {
                matrix[i][j] = 0;
            }
        }
    }

    return matrix;
};

// test cases:
// assertCompare(()=>setZeroes([
//     [1,1,1],
//     [1,0,1],
//     [1,1,1]
//   ]), [
//     [1,0,1],
//     [0,0,0],
//     [1,0,1]
//   ]);
//   assertCompare(()=>setZeroes([
//     [0,1,2,0],
//     [3,4,5,2],
//     [1,3,1,5]
//   ]), [
//     [0,0,0,0],
//     [0,4,5,0],
//     [0,3,1,0]
//   ]);
// @lc code=end

