/*
 * @lc app=leetcode id=201 lang=javascript
 *
 * [201] Bitwise AND of Numbers Range
 */

/*
8266/8266 cases passed (164 ms)
Your runtime beats 91.22 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (44.4 MB)

这道题没想出来。。
这里的几个解法都很不错：
https://www.cnblogs.com/grandyang/p/4431646.html
*/

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
    return n>m ? rangeBitwiseAnd(~~(m/2), ~~(n/2))<<1: m;
};

// test cases:
// assertCompare(()=>rangeBitwiseAnd(5,7), 4);
// assertCompare(()=>rangeBitwiseAnd(0,1), 0);
// assertCompare(()=>rangeBitwiseAnd(0,2147483647), 0);
// assertCompare(()=>rangeBitwiseAnd(1,2147483647), 0);
// assertCompare(()=>rangeBitwiseAnd(2,3), 2);
// assertCompare(()=>rangeBitwiseAnd(1,2), 0);
// assertCompare(()=>rangeBitwiseAnd(3,4), 0);
// @lc code=end

