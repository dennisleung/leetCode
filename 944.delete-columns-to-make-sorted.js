/*
 * @lc app=leetcode id=944 lang=javascript
 *
 * [944] Delete Columns to Make Sorted
 */
/*
✔ Accepted
  ✔ 84/84 cases passed (72 ms)
  ✔ Your runtime beats 69.23 % of javascript submissions
  ✔ Your memory usage beats 60 % of javascript submissions (39.5 MB)
*/
/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
    let result = [];
    for(let i = 0, iLen = A[0].length; i<iLen; i++) {
        for(let j = 0, jLen = A.length; j<jLen-1; j++) {
            if(A[j][i]>A[j+1][i]) {
                result.push(i);
                break;
            }
        }
    }

    return result.length;
};

