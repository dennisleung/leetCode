/*
 * @lc app=leetcode id=661 lang=javascript
 *
 * [661] Image Smoother
 */
/*
✔ Accepted
  ✔ 202/202 cases passed (132 ms)
  ✔ Your runtime beats 97.88 % of javascript submissions
  ✔ Your memory usage beats 83.58 % of javascript submissions (42.3 MB)

注意输入值不只0/1
*/

/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function(M) {
    const result = [];
    const getCellAvg = (row, col)=>{
        let sum = 0;
        let count = 0;
        for(let i = row-1, iLen = Math.min(row+1, M.length-1); i<=iLen; i++) {
            if(i<0) {
                continue;
            }
            for(let j = col-1, jLen = Math.min(col+1, M[i].length-1); j<=jLen;j++) {
                if(j<0) {
                    continue;
                }
                sum += M[i][j];
                count++;
            }
        }

        return Math.floor(sum/(count||1));
    };
    for(let i = 0, iLen = M.length; i<iLen; i++) {
        for(let j = 0, jLen = M[i].length; j<jLen; j++) {
            result[i] = result[i] || [];
            result[i][j] = getCellAvg(i, j);
        }
    }

    return result;
};

