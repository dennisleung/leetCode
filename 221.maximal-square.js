/*
 * @lc app=leetcode id=221 lang=javascript
 *
 * [221] Maximal Square
 */
/*
69/69 cases passed (76 ms)
Your runtime beats 61.12 % of javascript submissions
Your memory usage beats 25 % of javascript submissions (40.6 MB)
*/
// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    if(!matrix || !matrix.length) {
        return 0;
    }
    const dp = new Array(matrix.length).fill(0).map(v=>new Array(matrix[0].length));//表示以i,j为右下定点的最大正方形
    let max = 0;
    for(let i = 0; i<matrix.length; i++) {
        for(let j = 0; j<matrix[0].length; j++) {
            if(i==0 || j==0) {
                dp[i][j] = matrix[i][j];
            }else if(matrix[i][j]==1){
                dp[i][j] = Math.min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]) + 1;
            }else {
                dp[i][j] = 0;
            }
            max = Math.max(max, dp[i][j]);
        }
    }

    return max*max;
};

// test cases:
// assertCompare(()=>maximalSquare([]), 0);
// assertCompare(()=>maximalSquare([[1]]), 1);
// assertCompare(()=>maximalSquare([[0]]), 0);
// assertCompare(()=>maximalSquare([[1, 0, 1, 0, 0],
// [1, 0, 1, 1, 1],
// [1, 1, 1, 1, 1],
// [1, 0, 0, 1, 0]]), 4);
// @lc code=end

