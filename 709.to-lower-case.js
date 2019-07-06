/*
 * @lc app=leetcode id=709 lang=javascript
 *
 * [709] To Lower Case
 */
/*
✔ Accepted
  ✔ 8/8 cases passed (44 ms)
  ✔ Your runtime beats 97.94 % of javascript submissions
  ✔ Your memory usage beats 72.11 % of javascript submissions (33.8 MB)

*/

/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    return str.split("").map(v=>{
        let charCode = v.charCodeAt(0);
        if(charCode>=65 && charCode<=90) {
            return String.fromCharCode(charCode+32);
        }else {
            return v;
        }
    }).join("");
};

