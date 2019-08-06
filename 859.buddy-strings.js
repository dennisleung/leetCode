/*
 * @lc app=leetcode id=859 lang=javascript
 *
 * [859] Buddy Strings
 */
/*
✔ Accepted
  ✔ 23/23 cases passed (56 ms)
  ✔ Your runtime beats 95.74 % of javascript submissions
  ✔ Your memory usage beats 100 % of javascript submissions (35.1 MB)

another solution:
var buddyStrings = function(A, B) {
    if (A.length != B.length) {
        return false;
    }
    let [dif, chars] = [[], new Set(A)];
    for (i in A) {
        if (A[i] != B[i]) {
            dif.push([A[i], B[i]]);
        }
    }
    return dif.length == 2 && dif[0].join() == dif[1].reverse().join() || (dif.length == 0 && chars.size != A.length);
};
*/
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
    if(A.length != B.length) {
        return false;
    }

    if(A == B) {
        return /([a-z]).*\1/.test(A);
    }

    let exist = [];
    let need = [];
    for(let i = 0, len = A.length; i<len; i++) {
        if(A[i]!=B[i]) {
            exist.push(A[i]);
            need.push(B[i]);
        }
    }
    if(exist.length!=2) {
        return false;
    }

    return exist.sort().join(",")==need.sort().join(",");
};

