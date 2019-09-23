/*
 * @lc app=leetcode id=1137 lang=javascript
 *
 * [1137] N-th Tribonacci Number
 */
/*
✔ Accepted
  ✔ 39/39 cases passed (52 ms)
  ✔ Your runtime beats 67 % of javascript submissions
  ✔ Your memory usage beats 100 % of javascript submissions (33.8 MB)

iterative solution:
var tribonacci = function(n) {
    let fib = []
    fib[0] = 0
    fib[1] = 1
    fib[2] = 1
    for(let i = 3; i<=n; i++){
        fib[i] = fib[i-3] + fib[i-2] + fib[i-1]
    }
    return fib[n] 
};
*/

const tribonacciCache = [0, 1, 1];

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    let tn = tribonacciCache[n];
    if(tn===void 0) {
        tn = tribonacci(n-1) + tribonacci(n-2) + tribonacci(n-3);
    }
    tribonacciCache[n] = tn;
    return tn;
};

