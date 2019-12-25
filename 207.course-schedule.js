/*
 * @lc app=leetcode id=207 lang=javascript
 *
 * [207] Course Schedule
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const cache = {};
    for(let [a, b] of prerequisites) {
        const aArr = cache[a] || [];
        const bArr = cache[b] || [];
        if(bArr.indexOf(a)!== -1) {
            return false;
        }
        aArr.push(b);
        cache[a] = aArr;
    }

    return true;
};
// @lc code=end

