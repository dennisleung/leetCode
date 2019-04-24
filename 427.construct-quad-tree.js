/*
 * @lc app=leetcode id=427 lang=javascript
 *
 * [427] Construct Quad Tree
 */
/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/*
✔ Accepted
  ✔ 20/20 cases passed (100 ms)
  ✔ Your runtime beats 18.18 % of javascript submissions
  ✔ Your memory usage beats 100 % of javascript submissions (43 MB)


我的解法时间复杂度太高，可以参考下leetCode上面的思路：
The definition of a leaf node is that all the cells in a sub grid are the same. We just need to calculate the sum of all cells in the sub grid, if the sum is 0, it is a leaf node with val = false. If the sum equals the area of the sub grid, it is a leaf node with val = true.

We can precalulate the sum of all cells with row <= y, column <= x for all cell grid[y][x] and store inside an new grid, called "sum".
To calculate the sum of a sub grid, say from row1 to row2, column1 to column2, it is just

sum[row2][column2] - sum[row1 - 1][column2] - sum[row2][column1 - 1] + sum[row1 - 1] [column1 - 1] 

------- https://leetcode.com/problems/construct-quad-tree/discuss/245880/JavaScript-100-with-explanation

能减少很多isLeaf的重复计算
*/


//我们假设传过来的肯定都是n*n的格子
const isLeaf = function(grid) {
    let first = grid[0][0];
    for(let row of grid) {
        for(let col of row) {
            if(col!=first) {
                return [false];
            }
        }
    }

    return [true, !!first];
};

const sliceGrip = function(grid, rowStart, rowEnd, colStart, colEnd) {
    let result = [];
    for(let i = rowStart; i<rowEnd; i++) {
        result.push(grid[i].slice(colStart, colEnd));
    }

    return result;
}

/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function(grid) {
    const [_isLeaf, val] = isLeaf(grid);
    const root = new Node(val, _isLeaf);
    if(_isLeaf) {
        return root;
    }

    const rowCount = grid.length;
    const colCount = grid[0].length;
    root.topLeft = construct(sliceGrip(grid, 0, rowCount/2, 0, colCount/2));
    root.topRight = construct(sliceGrip(grid, 0, rowCount/2, colCount/2, colCount));
    root.bottomLeft = construct(sliceGrip(grid, rowCount/2, rowCount, 0, colCount/2));
    root.bottomRight = construct(sliceGrip(grid, rowCount/2, rowCount, colCount/2, colCount));

    return root;
};

