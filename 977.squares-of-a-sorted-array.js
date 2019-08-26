/*
 * @lc app=leetcode id=977 lang=javascript
 *
 * [977] Squares of a Sorted Array
 */
/*
✔ Accepted
  ✔ 132/132 cases passed (140 ms)
  ✔ Your runtime beats 54.21 % of javascript submissions
  ✔ Your memory usage beats 7.41 % of javascript submissions (44.2 MB)

another solution:
var sortedSquares = function(A) {
    let result = [];
    let l = 0;
    let r = A.length - 1;
    let p = r;

    while (l <= r) {
        if (A[l] ** 2 > A[r] ** 2) {
            result[p--] = A[l++] ** 2;
        } else {
            result[p--] = A[r--] ** 2;
        }
    }
    
    return result;
};
*/
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    return A.map(v=>v*v).sort((a,b)=>a-b);
};

