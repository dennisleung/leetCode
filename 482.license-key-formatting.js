/*
 * @lc app=leetcode id=482 lang=javascript
 *
 * [482] License Key Formatting
 */
/*
✔ Accepted
  ✔ 38/38 cases passed (164 ms)
  ✔ Your runtime beats 16.07 % of javascript submissions
  ✔ Your memory usage beats 78.26 % of javascript submissions (37.7 MB)
var licenseKeyFormatting = function(S, K) {
    S = S.replace(/\-/g, "").toUpperCase();
    let result = [];
    while(S) {
        result.unshift(S.slice(-K));
        S = S.slice(0, -K);
    }
    return result.join("-");
};

another solution but runtime not faster:
var licenseKeyFormatting = function(S, K) {
    S = S.replace(/\-/g, "").toUpperCase();
    let result = [];
    let length = S.length;
    while(length>0) {
        result.unshift(S.substring(length-K, length));//注意这里不能用slice，substring的第一个参数为负数的时候会从0开始取，但是slice不是
        length -= K;
    }
    return result.join("-");
};

牛逼的解答，没怎么看明白：
https://leetcode.com/problems/license-key-formatting/discuss/160922/RegExp-JavaScript-with-explanation
需要了解正则前瞻后顾、捕获等知识点。
const f = (S, K) => {
  return S
    .replace(/-/g, '')
    .toUpperCase()
    .split(RegExp(`(?=(?:.{${K}})+$)`))
    .join('-')
}


*/

/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
    S = S.replace(/\-/g, "").toUpperCase();
    let result = [];
    let length = S.length;
    while(length>0) {
        result.unshift(S.substring(length-K, length));//注意这里不能用slice，substring的第一个参数为负数的时候会从0开始取，但是slice不是
        length -= K;
    }
    return result.join("-");
};

