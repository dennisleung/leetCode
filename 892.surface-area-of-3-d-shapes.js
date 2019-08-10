/*
 * @lc app=leetcode id=892 lang=javascript
 *
 * [892] Surface Area of 3D Shapes
 */
/*
✔ Accepted
  ✔ 90/90 cases passed (1236 ms)
  ✔ Your runtime beats 5.88 % of javascript submissions
  ✔ Your memory usage beats 100 % of javascript submissions (90.8 MB)

better solution:
var surfaceArea = function(grid) {
    var count = 0;
    var lastIndex = grid.length - 1;

    for (var i = 0; i <= lastIndex; i++) {
        for (var j = 0; j <= lastIndex; j++) {
            if (grid[i][j] <= 0) {
                continue;
            }

            count += 2;
            
            for (var level = 0; level < grid[i][j]; level++) {
                if (i === 0 || grid[i - 1][j] <= level) {
                    count++;
                }
                if (i === lastIndex || grid[i + 1][j] <= level) {
                    count++;
                }
                if (j === 0 || grid[i][j - 1] <= level) {
                    count++;
                }
                if (j === lastIndex || grid[i][j + 1] <= level) {
                    count++;
                }
            }
        }
    }
    
    return count;
};

better solution:
var surfaceArea = function(grid) {
    var count = 0;
    var lastIndex = grid.length - 1;

    for (var i = 0; i <= lastIndex; i++) {
        for (var j = 0; j <= lastIndex; j++) {
            if (grid[i][j] === 0) {
                continue;
            }

            count += 2;
            count += i === 0 ? grid[i][j] : Math.max(0, grid[i][j] - grid[i - 1][j]);
            count += i === lastIndex ? grid[i][j] : Math.max(0, grid[i][j] - grid[i + 1][j]);
            count += j === 0 ? grid[i][j] : Math.max(0, grid[i][j] - grid[i][j - 1]);
            count += j === lastIndex ? grid[i][j] : Math.max(0, grid[i][j] - grid[i][j + 1]);
        }
    }
    
    
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
    const cache = {};
    const addCache = (x, y, height)=>{
        for(let z = 0; z<height; z++) {
            cache[`${x}_${y}_${z}`] = 1;
        }
    }
    for(let i = 0, iLen = grid.length; i<iLen; i++) {
        for(let j = 0, jLen = grid[i].length; j<jLen; j++) {
            addCache(i, j, grid[i][j]);
        }
    }
    for(let i = 0, iLen = grid.length; i<iLen; i++) {
        for(let j = 0, jLen = grid[i].length; j<jLen; j++) {
            addCache(i, j, grid[i][j]);
        }
    }

    const isCellExist = (x, y, z)=>{
        return !!cache[`${x}_${y}_${z}`];
    };
    const getCellArea = (x, y, z)=>{
        let count = 0;
        !isCellExist(x-1, y, z) && count++;
        !isCellExist(x, y-1, z) && count++;
        !isCellExist(x, y, z-1) && count++;
        !isCellExist(x+1, y, z) && count++;
        !isCellExist(x, y+1, z) && count++;
        !isCellExist(x, y, z+1) && count++;

        return count;
    };
    
    let area = 0;
    for(let x = 0, xLen = grid.length; x<xLen; x++) {
        for(let y = 0, yLen = grid[x].length; y<yLen; y++) {
            for(let z = 0, zLen = grid[x][y]; z<zLen; z++) {
                area += getCellArea(x, y, z);
            }
        }
    }

    return area;
};

