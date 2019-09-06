/*
 * @lc app=leetcode id=1021 lang=javascript
 *
 * [1021] Remove Outermost Parentheses
 */
/*
✔ Accepted
  ✔ 59/59 cases passed (48 ms)
  ✔ Your runtime beats 99.18 % of javascript submissions
  ✔ Your memory usage beats 16.67 % of javascript submissions (37.5 MB)
*/
/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    let result = "";
    let queue = [];
    let leftPCount = 0;
    for(let s of S) {
        queue.push(s);
        if(s=="(") {
            leftPCount++;
        }else {
            leftPCount--;
        }
        if(leftPCount==0) {
            result += queue.slice(1, -1).join("");
            queue = [];
        }
    }

    return result;
};

