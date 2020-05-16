/*
 * @lc app=leetcode id=64 lang=javascript
 *
 * [64] Minimum Path Sum
 */
// @lc code=start
/*
61/61 cases passed (52 ms)
Your runtime beats 94.01 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (35.1 MB)
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    for(var i=0;i<grid.length;i++){
        for(var j=0;j<grid[0].length;j++){
            if(i!=0||j!=0) {
                grid[i][j] += Math.min((i>0? grid[i-1][j] : Infinity), (j>0 ? grid[i][j-1] :Infinity))
            }
        }
    }
    return grid[grid.length-1][grid[0].length-1];
};
 
// test cases:
// assertCompare(()=>minPathSum([
//     [1]
// ]), 1);
// assertCompare(()=>minPathSum([
//     [1,3,1],
//     [1,5,1],
//     [4,2,1]
// ]), 7);
// @lc code=end

