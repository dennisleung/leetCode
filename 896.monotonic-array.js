/*
 * @lc app=leetcode id=896 lang=javascript
 *
 * [896] Monotonic Array
 */
/*
✔ Accepted
  ✔ 366/366 cases passed (64 ms)
  ✔ Your runtime beats 95.25 % of javascript submissions
  ✔ Your memory usage beats 60 % of javascript submissions (40.8 MB)
*/

/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    if(A.length<2) {
        return true;
    }
    let isInreasing = undefined;
    for(let i = 1, len = A.length; i<len; i++) {
        if(A[i]==A[i-1]) {
            continue;
        }
        if(isInreasing===void 0) {
            isInreasing = A[i] > A[i-1];
        }
        
        if(isInreasing^A[i]>A[i-1]) {
            return false;
        }
    }

    return true;
};

