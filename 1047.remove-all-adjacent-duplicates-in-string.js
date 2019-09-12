/*
 * @lc app=leetcode id=1047 lang=javascript
 *
 * [1047] Remove All Adjacent Duplicates In String
 */
/*
✔ Accepted
  ✔ 98/98 cases passed (56 ms)
  ✔ Your runtime beats 99.28 % of javascript submissions
  ✔ Your memory usage beats 100 % of javascript submissions (36.9 MB)
*/
/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    while(true) {
        let newS = S.replace(/([a-z])\1/g, "");
        if(newS.length==S.length) {
            break;
        }
        S = newS;
    }

    return S;
};

