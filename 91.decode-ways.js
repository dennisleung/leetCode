/*
 * @lc app=leetcode id=91 lang=javascript
 *
 * [91] Decode Ways
 */
/*
Runtime: 3700 ms, faster than 10.32% of JavaScript online submissions for Decode Ways.
Memory Usage: 41.5 MB, less than 14.29% of JavaScript online submissions for Decode Ways.

dp solution:
function numDecodings(s) {
  if (s.length === 0) return 0;

  const N = s.length;
  const dp = Array(N+1).fill(0);

  dp[0] = 1;
  dp[1] = s[0] === '0' ? 0 : 1;

  for (let i = 2; i <= N; i++) {
    if (s[i-1] !== '0') {
      dp[i] += dp[i-1];
    }
    if (s[i-2] === '1' || s[i-2] === '2' && s[i-1] <= '6') {
      dp[i] += dp[i-2];
    }
  }

  return dp[N];
}
*/
// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    const helper = function(s) {        
        if(s.length<=2) {
            if(s.indexOf("0")!==-1) {
                return (s==="10" || s==="20") ? 1 : 0
            }
            let sn = parseInt(s);
            return (sn>10 && sn<27) ? 2 : 1;
        }else {
            let count = 0;
            let s0 = parseInt(s[0]);
            if(s0>0) {
                count += helper(s.slice(1));
                let s01 = s0*10+parseInt(s[1]);
                if(s01<27) {
                    count += helper(s.slice(2));
                }
            }
            return count;
        }
    }

    return helper(s);
};

// test cases:
// assertCompare(()=>numDecodings("12"), 2);
// assertCompare(()=>numDecodings("226"), 3);
// assertCompare(()=>numDecodings("1"), 1);
// assertCompare(()=>numDecodings("20"), 1);
// assertCompare(()=>numDecodings("27"), 1);
// assertCompare(()=>numDecodings("000"), 0);
// assertCompare(()=>numDecodings("230"), 0);
// assertCompare(()=>numDecodings("012"), 0);

// @lc code=end

