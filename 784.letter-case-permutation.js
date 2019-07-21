/*
 * @lc app=leetcode id=784 lang=javascript
 *
 * [784] Letter Case Permutation
 */
/*
✔ Accepted
  ✔ 63/63 cases passed (88 ms)
  ✔ Your runtime beats 33.01 % of javascript submissions
  ✔ Your memory usage beats 52.11 % of javascript submissions (37.7 MB)

better solution:
//一样的思路，只是更简洁
const letterCasePermutation = S => {
    const result = [];
    backtracking(S, 0, '', result);
    return result;
};

const backtracking = (S, i, solution, result) => {//backTracing(回溯法)
    if (i === S.length) {
        result.push(solution);
        return;
    }
    
    backtracking(S, i + 1, solution + S[i].toLowerCase(), result);
    
    if (/[a-zA-Z]/.test(S[i])) {
        backtracking(S, i + 1, solution + S[i].toUpperCase(), result);
    }
};  
*/

/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
    let s = [];
    if(S) {
        if(/[a-zA-Z]/.test(S[0])) {
            s.push(S[0].toLowerCase());
            s.push(S[0].toUpperCase());
        }else {
            s.push(S[0]);
        }
        let l = letterCasePermutation(S.slice(1));
        let newS = [];
        for(let i = 0, iLen = s.length; i<iLen; i++) {
            for(let j = 0, jLen = l.length; j<jLen; j++) {
                newS.push(s[i] + l[j]);
            }
        }
        s = newS;
    }else {
        s.push("");
    }

    return s;
};

