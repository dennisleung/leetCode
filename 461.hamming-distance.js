/*
 * @lc app=leetcode id=461 lang=javascript
 *
 * [461] Hamming Distance
 */

/*
✔ Accepted
  ✔ 149/149 cases passed (60 ms)
  ✔ Your runtime beats 90 % of javascript submissions
  ✔ Your memory usage beats 10.84 % of javascript submissions (34 MB)

这道题的题干指定了xy都是>=0的，不需要考虑负数的情况

better solution:
var hammingDistance = function(x, y) {
    return (x ^ y).toString(2).replace(/0/g, '').length;
};
*/

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let xCom = x.toString(2);
    let yCom = y.toString(2);
    let maxLength = Math.max(xCom.length, yCom.length);
    xCom = (new Array(maxLength).join("0") + xCom).slice(-maxLength);
    yCom = (new Array(maxLength).join("0") + yCom).slice(-maxLength);
    let count = 0;
    for(let i = 0, len = Math.min(xCom.length, yCom.length); i<len; i++) {
        if(xCom[i]!==yCom[i]) {
            count++;
        }
    }

    return count;
};

