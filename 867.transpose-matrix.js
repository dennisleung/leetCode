/*
 * @lc app=leetcode id=867 lang=javascript
 *
 * [867] Transpose Matrix
 */
/*
✔ Accepted
  ✔ 36/36 cases passed (96 ms)
  ✔ Your runtime beats 5.31 % of javascript submissions
  ✔ Your memory usage beats 33.33 % of javascript submissions (37.5 MB)

better solution:
return A[0].reduce((acc, a, i) => acc.concat([A.map((b, j) => A[j][i])]), []);

better solution:
var transpose = function(A) {
    return A[0].map((a, i) => A.map(b => b[i]));
};
*/

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
    const B = [];
    for(let i = 0, iLen = A[0].length; i<iLen; i++) {
        let row = [];
        for(let j = 0, jLen = A.length; j<jLen; j++) {
            row.push(A[j][i]);
        }
        B.push(row);
    }

    return B;
};

