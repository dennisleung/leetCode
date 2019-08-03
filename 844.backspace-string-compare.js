/*
 * @lc app=leetcode id=844 lang=javascript
 *
 * [844] Backspace String Compare
 */
/*
✔ Accepted
  ✔ 104/104 cases passed (56 ms)
  ✔ Your runtime beats 82.5 % of javascript submissions
  ✔ Your memory usage beats 33.33 % of javascript submissions (35.5 MB)

*/

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    const typeStr = (str)=>{
        const result = [];
        for(let ch of str) {
            if(ch=="#") {
                result.pop();
            }else {
                result.push(ch);
            }
        }

        return result.join("");
    };

    return typeStr(S)==typeStr(T);
};

