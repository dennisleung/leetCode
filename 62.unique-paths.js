/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 */
/*
62/62 cases passed (64 ms)
Your runtime beats 22.71 % of javascript submissions
Your memory usage beats 9.09 % of javascript submissions (35.8 MB)

dp solution:
var uniquePaths = function(m, n) {
    const res = [];
    for (let i = 0; i < n; i++) res.push([...new Array(m).fill(1)]); // initialize list
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            res[i][j] = res[i-1][j] + res[i][j-1];
        }
    }
    return res[n-1][m-1];
};
*/
// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const cache = {};
    const getSub = function(m, n) {
        if(m==0 || n==0) {
            return 1;
        }
        
        const cacheKey = `${m}_${n}`;
        if(!cache[cacheKey]) {
            cache[cacheKey] = getSub(m-1, n) + getSub(m, n-1);
        }
        return cache[cacheKey];
    };

    return getSub(m-1, n-1);
};

// test cases:
// assertCompare(()=>uniquePaths(3, 2), 3);
// assertCompare(()=>uniquePaths(1, 1), 1);
// assertCompare(()=>uniquePaths(7, 3), 28);
// assertCompare(()=>uniquePaths(3, 7), 28);
// assertCompare(()=>uniquePaths(100, 7), 1609344100);

// @lc code=end

