/*
 * @lc app=leetcode id=830 lang=javascript
 *
 * [830] Positions of Large Groups
 */
/*
✔ Accepted
  ✔ 202/202 cases passed (76 ms)
  ✔ Your runtime beats 51.32 % of javascript submissions
  ✔ Your memory usage beats 53.66 % of javascript submissions (37 MB)


better solution:
const largeGroupPositions = (S) => {
    const res = [], re = /(\w)\1{2,}/g;
    let m;
    while ((m = re.exec(S)) !== null) {
        res.push([m.index, m.index + m[0].length - 1]);
    }
    return res;
};
*/

/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function(S) {
    const result = [];
    let curLen = 1;
    for(var i = 0, len = S.length; i<len-1; i++) {
        if(S[i]==S[i+1]) {
            curLen++;
        }else {
            if(curLen>=3) {
                result.push([i-curLen+1, i]);
            }
            curLen = 1;
        }
    }

    if(curLen>=3) {//"aaa"=>[[0, 2]]
        result.push([i-curLen+1, i]);
    }

    return result;
};

