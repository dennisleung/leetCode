/*
 * @lc app=leetcode id=1005 lang=javascript
 *
 * [1005] Maximize Sum Of Array After K Negations
 */
/*
✔ Accepted
  ✔ 78/78 cases passed (72 ms)
  ✔ Your runtime beats 43.32 % of javascript submissions
  ✔ Your memory usage beats 50 % of javascript submissions (35.4 MB)

another solution:
var largestSumAfterKNegations = function (A, K) {
    A.sort((a, b) => a - b);

    let i = 0;
    let min = Number.MAX_VALUE;
    while (K-- > 0) {
        let ai = -1 * A[i];
        A[i] = ai;
        i++;

        min = Math.min(min, ai);
        if (A[i] > min) i--;
    }

    return A.reduce((a, b) => a + b, 0);
};
*/
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumAfterKNegations = function(A, K) {
    A.sort((a,b)=>a-b);
    let negs = [];
    for(var i = 0, len = A.length; i<len; i++) {
        if(A[i]<0 && negs.length<K) {
            negs.push(-A[i]);
        }else {
            break;
        }
    }

    A = A.slice(i).concat(negs);
    let kLeft = K-negs.length;
    if(kLeft>0) {//已经处理完所有负数，但是还有次数剩下，这时对绝对值最小的数进行处理（此时A已经全部是非负数）
        A = A.sort((a,b)=>a-b);
        if(kLeft%2!=0) {
            A[0] = -A[0];
        }
    }

    return A.reduce((a,b)=>a+b, 0);
};

