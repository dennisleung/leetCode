/*
 * @lc app=leetcode id=832 lang=javascript
 *
 * [832] Flipping an Image
 */
/*
✔ Accepted
  ✔ 82/82 cases passed (60 ms)
  ✔ Your runtime beats 90.02 % of javascript submissions
  ✔ Your memory usage beats 57.4 % of javascript submissions (35.1 MB)

下面这两种处理取反的方式都很巧妙：

better solution:
var flipAndInvertImage = function(A) {
    return A.map(ele => ele.reverse().map(e => 1 ^ e))
};

better solution:
var flipAndInvertImage = function(A) {
    return A.map(row=>row.reverse().map(el=>(1-el)))
};
*/
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    return A.map(row=>row.reverse().map(v=>v?0:1));
};

