/*
 * @lc app=leetcode id=12 lang=javascript
 *
 * [12] Integer to Roman
 */
/*
✔ Accepted
  ✔ 3999/3999 cases passed (144 ms)
  ✔ Your runtime beats 57.87 % of javascript submissions
  ✔ Your memory usage beats 50 % of javascript submissions (41.8 MB)
*/
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let dts = [["M", 1000], ["CM", 900], ["D", 500], ["CD", 400], ["C", 100], ["XC", 90], ["L", 50], ["XL", 40], ["X", 10], ["IX", 9], ["V", 5], ["IV", 4], ["I", 1]];
    let result = "";
    let dt = dts.shift();
    while(num>0) {
        if(num<dt[1]) {
            dt = dts.shift();
            continue;
        }
        num -= dt[1];
        result += dt[0];
    }
    return result;
};

