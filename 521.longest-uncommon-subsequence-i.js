/*
 * @lc app=leetcode id=521 lang=javascript
 *
 * [521] Longest Uncommon Subsequence I 
 */
/*
✔ Accepted
  ✔ 41/41 cases passed (60 ms)
  ✔ Your runtime beats 34.96 % of javascript submissions
  ✔ Your memory usage beats 5.69 % of javascript submissions (34 MB)

genuis solution:
var findLUSlength = function(a, b) {
    // identical strings don't have uncommon subsequence
    if (a === b) return -1;
    // the longer string itself is the longest uncommon subsequence
    else return Math.max(a.length, b.length);
};
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
    if(a.length<b.length) {
        [a, b] = [b, a];
    }
    const find = (str)=>{
        if(str==b) {
            return "";
        }
        if(b.indexOf(str)==-1) {
            return str;
        }
        if(str.length<=1) {
            return "";
        }
        let leftStr = find(str.slice(0, -1));
        let rightStr = find(str.slice(1));
        return leftStr.length>rightStr.length ? leftStr : rightStr;
    };

    return find(a).length || -1;
};

