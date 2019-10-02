/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */
/*
8/8 cases passed (140 ms)
Your runtime beats 5.11 % of javascript submissions
Your memory usage beats 7.69 % of javascript submissions (38.3 MB)

better backtracing solution:
function generateParenthesis(n) {
  const res = [];

  function go(l, r, s) {  // l: left remaining, r: right remaining
    if (l > r) return;  // The number of '(' should be always <= ')'

    if (l === 0 && r === 0) {
      res.push(s);
      return;
    }

    if (l > 0) go(l - 1, r, s + '(');
    if (r > 0) go(l, r - 1, s + ')');
  }

  go(n, n, '', res);
  return res;
}

shortter version:
const generateParenthesis = (l, r = 0) => {
  const arr = [];
  if (l) generateParenthesis(l - 1, r + 1).forEach(s => arr.push("(" + s));
  if (r) generateParenthesis(l, r - 1).forEach(s => arr.push(")" + s));
  return arr.length ? arr : [""];
};
*/

// @lc code=start
const cache = [];
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if(cache[n]) {
        return cache[n];
    }
    let result = [];
    switch(n) {
        case 0:
            result = [""];
            break;
        case 1:
            result = ["()"];
            break;
        default:
            for(let i = 1; i<n; i++) {
                const a = generateParenthesis(i);
                const b = generateParenthesis(n-i);
                a.map(aa=>{result = result.concat(b.map(bb=>`${aa}${bb}`))})   
                if(i==1) {
                    result = result.concat(b.map(bb=>`(${bb})`));
                }
            }
            break;
    }
    cache[n] = result.filter((v, i, a)=>a.indexOf(v)===i);
    return cache[n];
};
// @lc code=end

