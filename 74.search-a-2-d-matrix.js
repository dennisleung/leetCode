/*
 * @lc app=leetcode id=74 lang=javascript
 *
 * [74] Search a 2D Matrix
 */
/*
136/136 cases passed (60 ms)
Your runtime beats 39.34 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (34.3 MB)

another solution:
function searchMatrix(matrix, target) {
  if (!matrix.length || !matrix[0].length) return false;

  let row = 0;
  let col = matrix[0].length - 1;

  while (col >= 0 && row <= matrix.length - 1) {
    if (matrix[row][col] === target) return true;
    else if (matrix[row][col] > target) col--;
    else if (matrix[row][col] < target) row++;
  }

  return false;
}
*/
// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(!matrix.length || !matrix[0].length) {
        return false;
    }
    const getCell = function(index) {
        let row = ~~(index/matrix[0].length);
        let col = index - row * matrix[0].length;
        return matrix[row][col];
    };

    for(let min = 0, max = matrix.length*matrix[0].length-1; min<=max;) {
        let mid = ~~((min+max)/2);
        let midVal = getCell(mid);
        if(midVal==target) {
            return true;
        }else if(midVal<target) {
            min = mid+1;
        }else {
            max = mid-1;
        }
    }

    return false;
};

// test cases:
// assertCompare(()=>searchMatrix([
//     [1,   3,  5,  7],
//     [10, 11, 16, 20],
//     [23, 30, 34, 50]
//   ], 3), true);
//   assertCompare(()=>searchMatrix([
//     [1,   3,  5,  7],
//     [10, 11, 16, 20],
//     [23, 30, 34, 50]
//   ], 13), false);
//   assertCompare(()=>searchMatrix([]), false);
//   assertCompare(()=>searchMatrix([[]]), false);
// @lc code=end

