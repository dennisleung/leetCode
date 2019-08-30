/*
 * @lc app=leetcode id=994 lang=javascript
 *
 * [994] Rotting Oranges
 */
/*
✔ Accepted
  ✔ 303/303 cases passed (76 ms)
  ✔ Your runtime beats 42.69 % of javascript submissions
  ✔ Your memory usage beats 42.86 % of javascript submissions (37.6 MB)
*/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let goodCount = 0;
    let rottenCells = [];
    for(let i = 0; i<grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            switch(grid[i][j]) {
                case 1:
                    goodCount++;
                    break;
                case 2:
                    rottenCells.push([i, j]);
                    break;
                default:
                    break;
            }
        }
    }
    if(!goodCount) {
        return 0;
    }
    let minutes = 0;
    while(true) {
        let newRottenCells = [];
        for(let i = 0; i<rottenCells.length; i++) {
            let [x, y] = rottenCells[i];
            let pos = [];
            if(x>0) {
                pos.push([x-1, y]);
            }
            if(y<grid[x].length-1) {
                pos.push([x, y+1]);
            }
            if(x<grid.length-1) {
                pos.push([x+1, y]);
            }
            if(y>0) {
                pos.push([x, y-1]);
            }
            
            for(let [xx, yy] of pos) {
                if(grid[xx][yy]==1) {
                    grid[xx][yy] = 2;
                    newRottenCells.push([xx, yy]);
                    goodCount--;
                }
            }
        }

        if(!newRottenCells.length) {
            break;
        }
        rottenCells = newRottenCells;
        minutes++;
    }
    
    return minutes>0&&!goodCount ? minutes : -1;
};

