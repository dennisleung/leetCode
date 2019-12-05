/*
 * @lc app=leetcode id=139 lang=javascript
 *
 * [139] Word Break
 */

/*
36/36 cases passed (68 ms)
Your runtime beats 39.44 % of javascript submissions
Your memory usage beats 50 % of javascript submissions (38.3 MB)

没想出来，看了解释实现的。。

another bfs solution:
function wordBreak(s, wordDict) {
  const dict = new Set(wordDict);
  const visited = new Set();
  const q = [0];

  while (q.length) {
    const start = q.shift();

    if (!visited.has(start)) {
      for (let end = start + 1; end <= s.length; end++) {
        if (dict.has(s.slice(start, end))) {
          if (end === s.length) return true;
          q.push(end);
        }
      }
      visited.add(start);
    }
  }
  return false;
}
*/

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const dp = [true];
    const map = {};
    for(let word of wordDict) {
        map[word] = true;
    }
    for(let length = 1; length<=s.length; length++) {
        for(let i = 0; i<length; i++) {
            if(dp[i] && map[s.slice(i, length)]) {
                dp[length] = true;
                break;
            }
        }
    }

    return !!dp[s.length];
};

// test cases:
// assertCompare(()=>wordBreak("leetcode", ["leet", "code"]), true);
// assertCompare(()=>wordBreak("applepenapple", ["apple", "pen"]), true);
// assertCompare(()=>wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]), false);
// assertCompare(()=>wordBreak("cars", ["car", "ca", "rs"]), true);
// assertCompare(()=>wordBreak("cars", ["ca", "rs", "car"]), true);
// assertCompare(()=>wordBreak("cbca", ["bc", "ca"]), false);

// @lc code=end

