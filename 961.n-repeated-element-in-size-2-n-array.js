/*
 * @lc app=leetcode id=961 lang=javascript
 *
 * [961] N-Repeated Element in Size 2N Array
 */
/*
✔ Accepted
  ✔ 102/102 cases passed (92 ms)
  ✔ Your runtime beats 24.64 % of javascript submissions
  ✔ Your memory usage beats 25 % of javascript submissions (38.2 MB)

better solution:
var repeatedNTimes = function(A) {
    let map = new Map();
    for (let i = 0; i < A.length; i++) {
        if (map.has(A[i])) {
           return A[i];
        }
        map.set(A[i], 1);
    }
};
*/

/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    A.sort((a,b)=>a-b);
    let mid = Math.floor(A.length/2);
    return A[0]==A[mid-1] ? A[0] : A[mid];
};

