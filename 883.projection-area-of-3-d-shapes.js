/*
 * @lc app=leetcode id=883 lang=javascript
 *
 * [883] Projection Area of 3D Shapes
 */
/*
✔ Accepted
  ✔ 90/90 cases passed (60 ms)
  ✔ Your runtime beats 55.32 % of javascript submissions
  ✔ Your memory usage beats 100 % of javascript submissions (35.8 MB)
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function(grid) {
    const getZ = ()=>{
        return grid.reduce((a, b)=>a+b.filter(v=>!!v).length, 0);
    };

    const getX = ()=>{
        return grid.reduce((a, b)=>a+Math.max(...b), 0);
    }

    const getY = ()=>{
        return grid[0].reduce((sum, v, i)=>sum+Math.max(...grid.map(v=>v[i])), 0);
    }

    return getX() + getY() + getZ();
};

