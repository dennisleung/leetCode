/*
 * @lc app=leetcode id=1154 lang=javascript
 *
 * [1154] Day of the Year
 */
/*
Runtime: 52 ms, faster than 87.17% of JavaScript online submissions for Day of the Year.
Memory Usage: 34.3 MB, less than 100.00% of JavaScript online submissions for Day of the Year.

这道题用leetCode插件提交一直runtime error，但是web版是好的。
*/

/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    const dd = new Date(date.replace("-", "/"));
    const year = dd.getFullYear();
    dd.setHours("23");
    return Math.ceil((dd.getTime() - (new Date(`${year}/01/01`)).getTime())/86400000);
};

