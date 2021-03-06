/*
 * @lc app=leetcode id=91 lang=javascript
 *
 * [91] Decode Ways
 */
/*
Runtime: 3700 ms, faster than 10.32% of JavaScript online submissions for Decode Ways.
Memory Usage: 41.5 MB, less than 14.29% of JavaScript online submissions for Decode Ways.

dp solution:
//解题思路：解码有多少种方法。一般求“多少”我们考虑使用dp。状态方程如下：
//当s[i-2:i]这两个字符是10~26但不包括10和20这两个数时，比如21，那么可以有两种编码方式（BA，U），所以dp[i]=dp[i-1]+dp[i-2]
//当s[i-2:i]等于10或者20时，由于10和20只有一种编码方式，所以dp[i]=dp[i-2]
//当s[i-2:i]不在以上两个范围时，如09这种，编码方式为0，而31这种，dp[i]=dp[i-1]。
//注意初始化时：dp[0]=1,dp[1]=1
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

