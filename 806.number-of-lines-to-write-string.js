/*
 * @lc app=leetcode id=806 lang=javascript
 *
 * [806] Number of Lines To Write String
 */
/*
✔ Accepted
  ✔ 26/26 cases passed (52 ms)
  ✔ Your runtime beats 88.71 % of javascript submissions
  ✔ Your memory usage beats 25 % of javascript submissions (35.1 MB)
*/

/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function(widths, S) {
    let lineCount = 0;
    let lineMaxUnits = 100;
    let currentUnits = 0;
    if(!S) {
        return [0, 0];
    }
    for(let s of S) {
        let unit = widths[s.charCodeAt(0)-97];
        if(currentUnits+unit>lineMaxUnits) {
            lineCount++;
            currentUnits = 0;
        }
        currentUnits += unit;
    }

    return [lineCount+1, currentUnits];
};

