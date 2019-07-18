/*
 * @lc app=leetcode id=766 lang=javascript
 *
 * [766] Toeplitz Matrix
 */
/*
✔ Accepted
  ✔ 482/482 cases passed (64 ms)
  ✔ Your runtime beats 80.72 % of javascript submissions
  ✔ Your memory usage beats 59.73 % of javascript submissions (35.6 MB)

better solution:
var isToeplitzMatrix = function(matrix) {
    for (let i = 0; i < matrix.length-1; i++) {
        for (let j = 0; j < (matrix[0].length-1); j++) {
            if (matrix[i][j] != matrix[i+1][j+1]) return false;
        }
    }
    return true;
};
*/
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    if(!matrix.length) {
        return false;
    }
    const getNext = function(i, j, target) {
        if(i>=matrix.length || j>=matrix[i].length) {//over cross
            return true;
        }
        if(target!=matrix[i][j]) {
            return false;
        }

        return getNext(i+1, j+1, matrix[i][j]);
    }

    for(let i = 0, len = matrix.length; i<len; i++) {
        if(!getNext(i, 0, matrix[i][0])) {
            return false;
        }
    }

    for(let i = 0, len = matrix[0].length; i<len; i++) {
        if(!getNext(0, i, matrix[0][i])) {
            return false;
        }
    }

    return true;  
};

