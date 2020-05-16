/*
 * @lc app=leetcode id=1185 lang=javascript
 *
 * [1185] Day of the Week
 */
/*
✔ Accepted
  ✔ 39/39 cases passed (52 ms)
  ✔ Your runtime beats 66.15 % of javascript submissions
  ✔ Your memory usage beats 100 % of javascript submissions (33.9 MB)
*/
/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function(day, month, year) {
    return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][(new Date(`${year}/${month}/${day}`)).getDay()];
};

