/*
 * @lc app=leetcode id=63 lang=javascript
 *
 * [63] Unique Paths II
 */
/*
43/43 cases passed (64 ms)
Your runtime beats 44.3 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (35.5 MB)

shorter solution:
var uniquePathsWithObstacles = function(obstacleGrid) {
    for(var i=0;i<obstacleGrid.length;i++){
        for(var j=0;j<obstacleGrid[0].length;j++){
            if(obstacleGrid[i][j] == 1)
                obstacleGrid[i][j] = 0
            else if(i==0&&j==0)
                obstacleGrid[0][0] = 1;
            else
                obstacleGrid[i][j] = (i>0? obstacleGrid[i-1][j] : 0) + (j>0 ? obstacleGrid[i][j-1] :0)
        }
    }
    return obstacleGrid[obstacleGrid.length -1][obstacleGrid[0].length-1]
};
*/
// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const cache = [];
    for(let i = 0; i<obstacleGrid.length; i++) {
        for(let j = 0; j<obstacleGrid[0].length; j++) {
            let ways = 0;
            if(!obstacleGrid[i][j]) {
                if(i==0&&j==0) {
                    ways = 1;
                }else if(i>0&&j>0) {
                    ways = cache[i-1][j] + cache[i][j-1];
                }else if(i>0) {
                    ways = cache[i-1][0];
                }else {
                    ways = cache[0][j-1];
                }
                
            }
            cache[i] = cache[i] || [];
            cache[i][j] = ways;
        }
    }

    return cache[obstacleGrid.length-1][obstacleGrid[0].length-1];
};
// @lc code=end

