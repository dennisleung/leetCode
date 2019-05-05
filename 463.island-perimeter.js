/*
 * @lc app=leetcode id=463 lang=javascript
 *
 * [463] Island Perimeter
 */

/*
✔ Accepted
  ✔ 5833/5833 cases passed (212 ms)
  ✔ Your runtime beats 91.95 % of javascript submissions
  ✔ Your memory usage beats 88 % of javascript submissions (43.7 MB)
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let count = 0;
    for(let i = 0, iLen = grid.length; i<iLen; i++) {
        for(let j = 0, jLen = grid[i].length; j<jLen; j++) {
            if(grid[i][j]==0) {
                continue;
            }

            //top
            if(i-1<0 || grid[i-1][j]==0) {
                count++;
            }
            //right
            if(j+1>=jLen || grid[i][j+1]==0) {
                count++;
            }
            //bottom
            if(i+1>=iLen || grid[i+1][j]==0) {
                count++;
            }
            //left
            if(j-1<0 || grid[i][j-1]==0) {
                count++;
            }
        }
    }

    return count;
};

