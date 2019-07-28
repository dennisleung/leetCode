/*
 * @lc app=leetcode id=821 lang=javascript
 *
 * [821] Shortest Distance to a Character
 */
/*
✔ Accepted
  ✔ 76/76 cases passed (64 ms)
  ✔ Your runtime beats 85.58 % of javascript submissions
  ✔ Your memory usage beats 42.62 % of javascript submissions (35.9 MB)

better solution:
const shortestToChar = (S, C) => {
    const res = [];
    const pos = S.split('').map((e, i) => i).filter(i => S[i] === C);
    for (let i = 0, j = 0; i < S.length; i++) {
        const nextJ = Math.min(j + 1, pos.length - 1);
        res.push(Math.min(Math.abs(i - pos[j]), Math.abs(i - pos[nextJ])));
        if (i >= pos[nextJ]) j = nextJ;
    }
    return res;
};


better solution:
var shortestToChar = function(S, C) {
    let res = new Array(S.length);
    let pre = Infinity;
    //从左往右
    for(let i=0;i<S.length;i++){
        if(S[i] == C){
            pre = i
        } 
        res[i] = Math.abs(i - pre)
     
    }
    //从右往左
    pre = Infinity;
    for(let i = S.length-1;i>=0;i--){
        if(S[i] == C){
            pre = i
        }
        res[i] = Math.min(res[i],Math.abs(pre-i))
        
    }
    return res;

};
*/

/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
    const result = [];
    let prePos = -1;
    let cursor = Infinity;
    for(let i = 0, len = S.length; i<len; i++) {
        if(S[i]==C) {
            result.push(0);
            for(let j = i-1, newCursor = 1; j>prePos; j--, newCursor++) {
                if(newCursor<result[j]) {
                    result[j] = newCursor;
                }
            }
            cursor = 0;
            prePos = i;
        }else {
            result.push(++cursor);
        }
    }

    return result;
};

