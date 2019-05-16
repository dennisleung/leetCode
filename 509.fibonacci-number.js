/*
 * @lc app=leetcode id=509 lang=javascript
 *
 * [509] Fibonacci Number
 */
/*
✔ Accepted
  ✔ 31/31 cases passed (48 ms)
  ✔ Your runtime beats 99.14 % of javascript submissions
  ✔ Your memory usage beats 60.21 % of javascript submissions (33.8 MB)

iterative solution:
var fib = function(N) {
	let dp = [0, 1];
	for (let i = 2; i < N + 1; i++) {
		dp[i] = dp[i-2] + dp[i-1];
	}
	return dp[N];
};
*/

const fibCache = {};

/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    if(fibCache[N]!==void 0) {
        return fibCache[N];
    }

    let result = N<2 ? N : fib(N-1) + fib(N-2);
    fibCache[N] = result;
    return result;
};

