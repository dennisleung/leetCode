/*
 * @lc app=leetcode id=985 lang=javascript
 *
 * [985] Sum of Even Numbers After Queries
 */
/*
✔ Accepted
  ✔ 58/58 cases passed (112 ms)
  ✔ Your runtime beats 84.48 % of javascript submissions
  ✔ Your memory usage beats 40 % of javascript submissions (47.4 MB)
*/

/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(A, queries) {
    let sum = A.filter(v=>v%2==0).reduce((a,b)=>a+b, 0);
    return queries.map((([val, index])=>{
        if(A[index]%2==0) {
            sum -= A[index];
        }
        A[index]+=val;
        if(A[index]%2==0) {
            sum += A[index];
        }
        return sum;
    }));
};

