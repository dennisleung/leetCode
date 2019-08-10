/*
 * @lc app=leetcode id=905 lang=javascript
 *
 * [905] Sort Array By Parity
 */

/*
✔ Accepted
  ✔ 285/285 cases passed (548 ms)
  ✔ Your runtime beats 5.01 % of javascript submissions
  ✔ Your memory usage beats 8 % of javascript submissions (41.9 MB)
 */

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    return A.sort((a, b)=>{return a%2==0?-1:1;});
};

