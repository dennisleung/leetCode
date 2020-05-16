/*
 * @lc app=leetcode id=59 lang=javascript
 *
 * [59] Spiral Matrix II
 */

/*
20/20 cases passed (60 ms)
Your runtime beats 34.15 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (33.7 MB)

easy-understanding solution:
var generateMatrix = function(n) {
    let square = Array(n).fill(0).map(el => Array(n).fill(0));
    let count, row, col;
    count = row = col = 0;
    while (count < n * n) {
        while (square[row][col] === 0) {
            square[row][col++] = ++count;
        }
        col--;
        row++;
        while (square[row] && square[row][col] === 0) {
            square[row++][col] = ++count;
        }
        row--;
        col--;
        while (square[row][col] === 0) {
            square[row][col--] = ++count;
        }
        col++;
        row--;
        while (square[row] && square[row][col] === 0) {
            square[row--][col] = ++count;
        }
        row++;
        col++;
    }
    return square;
};

mathematical solution:
// When traversing the matrix in the spiral order, at any time we follow one out of the following four directions:
// RIGHT DOWN LEFT UP. Suppose we are working on a 5 x 3 matrix as such:
// 0  1  2  3  4  5
//    6  7  8  9 10
//   11 12 13 14 15
//
// Imagine a cursor starts off at (0, -1), i.e. the position at '0', then we can achieve the spiral order by doing
// the following:
// 1. Go right 5 times
// 2. Go down 2 times
// 3. Go left 4 times
// 4. Go up 1 times.
// 5. Go right 3 times
// 6. Go down 0 times -> quit

function generateMatrix(n) {
  const matrix = [...Array(n)].map(() => Array(n).fill(null));
  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];  // right, down, left, up
  const steps = [n, n - 1];

  let num = 1;
  let dir = 0;
  let x = 0;
  let y = -1;

  while (steps[dir % 2] > 0) {
    for (let i = 0; i < steps[dir % 2]; i++) {
      x += dirs[dir][0];
      y += dirs[dir][1];
      matrix[x][y] = num++;
    }

    steps[dir % 2]--;
    dir = (dir + 1) % 4;
  }

  return matrix;
}
*/

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    if(n<1) {
        return [];
    }
    
    const matrix = [];
    const circle = (a, b, startNum) => {
        for(let i = a[1]; i<=b[1]; i++){
            matrix[a[0]] = matrix[a[0]] || [];
            matrix[a[0]][i] = startNum++;
        }
        for(let i = a[0]+1; i<=b[0]; i++){
            matrix[i] = matrix[i] || [];
            matrix[i][b[1]] = startNum++;
        }
        if(a[0]>=b[0] || a[1]>=b[1]) {
            return;
        }
        for(let i = b[1]-1; i>=a[1]; i--){
            matrix[b[0]] = matrix[b[0]] || [];
            matrix[b[0]][i] = startNum++;
        }
        for(let i = b[0]-1; i>a[0]; i--){
            matrix[i] = matrix[i] || [];
            matrix[i][a[0]] = startNum++;
        }
        
        return startNum;
    }

    let a = [0, 0];
    let b = [n-1, n-1];
    let startNum = 1;
    while(a[0]<=b[0] && a[1]<=b[1]) {
        startNum = circle(a, b, startNum);
        a[0]++;a[1]++;
        b[0]--;b[1]--;
    }
    
    return matrix;
};

// test cases:
// assertCompare(()=>generateMatrix(0), []);
// assertCompare(()=>generateMatrix(1), [[1]]);
// assertCompare(()=>generateMatrix(3), [
//  [ 1, 2, 3 ],
//  [ 8, 9, 4 ],
//  [ 7, 6, 5 ]
// ]);
// @lc code=end

