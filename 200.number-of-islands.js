/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */
/*
47/47 cases passed (76 ms)
Your runtime beats 31.81 % of javascript submissions
Your memory usage beats 35.48 % of javascript submissions (39.3 MB)

*/
// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const tmp = (new Array(grid.length)).fill(0).map(v=>[]);
    const helper = (i, j, color)=>{
        tmp[i][j] = color;
        if(i>0 && grid[i-1][j]==1 && !tmp[i-1][j]) {
            helper(i-1, j, color);
        }
        if(j<grid[0].length-1 && grid[i][j+1]==1 && !tmp[i][j+1]) {
            helper(i, j+1, color);
        }
        if(i<grid.length-1 && grid[i+1][j]==1 && !tmp[i+1][j]) {
            helper(i+1, j, color);
        }
        if(j>0 && grid[i][j-1]==1 && !tmp[i][j-1]) {
            helper(i, j-1, color);
        }
    };
    let color = 1;

    for(let i = 0, iLen = grid.length; i<iLen; i++) {
        for(let j = 0, jLen = grid[0].length; j<jLen; j++) {
            if(grid[i][j]==0) {
                continue;
            }
            let c = tmp[i][j] || color++;
            helper(i, j, color);
        }
    }

    return color-1;
};

// test cases:
// assertCompare(()=>numIslands([[1,1,1,1,0],
//     [1,1,0,1,0],
//     [1,1,0,0,0],
//     [0,0,0,0,0]]), 1);
//     assertCompare(()=>numIslands([
//         [1,1,1,1,1],
//         [1,1,1,1,1],
//         [1,1,1,1,1],
//         [1,1,1,1,1],
//         [1,1,1,1,1],
//         [1,1,1,1,1],
//         [1,1,1,1,1],
//         [1,1,1,1,1]]), 1);
//     assertCompare(()=>numIslands([[1,1,0,0,0],
//     [1,1,0,0,0],
//     [0,0,1,0,0],
//     [0,0,0,1,1]]), 3);
//     assertCompare(()=>numIslands([[0]]), 0);
//     assertCompare(()=>numIslands([[]]), 0);
//     assertCompare(()=>numIslands([[1]]), 1);
//     assertCompare(()=>numIslands([["1","1","1"],["0","1","0"],["1","1","1"]]), 1);
// @lc code=end

