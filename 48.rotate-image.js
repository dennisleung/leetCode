/*
 * @lc app=leetcode id=48 lang=javascript
 *
 * [48] Rotate Image
 */
/*
21/21 cases passed (68 ms)
Your runtime beats 13.68 % of javascript submissions
Your memory usage beats 42.1 % of javascript submissions (33.8 MB)

better solution work for N*M as well:
var rotate = function(matrix) {
    var rows = matrix.length,
        col = matrix[0].length;

    for (var i = 0; i < rows; i++){
        for (var j = i + 1; j < col; j++){
            var temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    for (i = 0; i < rows; i++){
        for (j = 0; j < col / 2; j++){
            temp = matrix[i][j];
            matrix[i][j] = matrix[i][col - 1 - j];
            matrix[i][col - 1 - j] = temp;
        }
    }

    return matrix;
}

another solution:
var rotate = function(matrix) {
  for (var row = 0; row <= matrix.length-1; row++) {
  var tracker = matrix.length-1;
  
    for (var j = matrix.length-1; j >= 0; j--) {
      var current = matrix[row].pop();
      matrix[tracker].unshift(current);
      tracker--;
    }
  }
  return matrix;
};
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const circle = (a, b) => {
        const tmp = matrix[a[0]].slice(a[1], b[1]);
        for(let i = a[0]; i<b[0]; i++){tmp.push(matrix[i][b[1]]);matrix[i][b[1]]=tmp.shift();}
        for(let i = b[1]; i>a[1]; i--){tmp.push(matrix[b[0]][i]);matrix[b[0]][i]=tmp.shift();}
        for(let i = b[0]; i>a[0]; i--){tmp.push(matrix[i][a[0]]);matrix[i][a[0]]=tmp.shift();}
        for(let i = a[1]; i<b[1]; i++){tmp.push(matrix[a[0]][i]);matrix[a[0]][i]=tmp.shift();}
    }
    let a = [0, 0];
    let b = [matrix.length-1, matrix.length-1];
    while(a[0]<b[0]) {
        circle(a, b);
        a[0]++;a[1]++;
        b[0]--;b[1]--;
    }

    return matrix;
};

// test cases:
// console.log(rotate([
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]));
// [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3]
// ]

// console.log(rotate([
//     [ 5, 1, 9,11],
//     [ 2, 4, 8,10],
//     [13, 3, 6, 7],
//     [15,14,12,16]
// ]));
// [
//   [15,13, 2, 5],
//   [14, 3, 4, 1],
//   [12, 6, 8, 9],
//   [16, 7,10,11]
// ]
// @lc code=end

