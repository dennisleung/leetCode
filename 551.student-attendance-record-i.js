/*
 * @lc app=leetcode id=551 lang=javascript
 *
 * [551] Student Attendance Record I
 */
/*
✔ Accepted
  ✔ 113/113 cases passed (56 ms)
  ✔ Your runtime beats 90.49 % of javascript submissions
  ✔ Your memory usage beats 51.94 % of javascript submissions (33.9 MB)

注意题干要求不能有两个以上连续的『L』

better solution:
var checkRecord = function(s) {
    // check if there are more than 2 As and 3 continuous Ls
    return !/^.*(A.*A|L{3,}).*$/.test(s);
};

tips:
indexOf的第二个参数可以指定检索的起始位置
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    return (s.match(/L{3,}/g) || []).length<=0 && (s.match(/A/g) || []).length<=1;
};

