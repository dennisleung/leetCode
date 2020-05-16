/*
 * @lc app=leetcode id=216 lang=javascript
 *
 * [216] Combination Sum III
 */

/*
18/18 cases passed (56 ms)
Your runtime beats 63.31 % of javascript submissions
Your memory usage beats 75 % of javascript submissions (35.1 MB)
*/

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const result = [];
    const dfs = function(min, left, arr) {
        if(left<0 || arr.length>k) {
            return;
        }
        if(left==0 && arr.length==k) {
            result.push([...arr]);
        }
        for(let i = min; i<10; i++) {
            arr.push(i);
            dfs(i+1, left-i, arr);
            arr.pop();
        }
    };

    dfs(1, n, []);
    return result;
};

// test cases:
// assertCompare(()=>combinationSum3(1, 7), [[7]]);
// assertCompare(()=>combinationSum3(1, 11), []);
// assertCompare(()=>combinationSum3(3, 7), [[1,2,4]]);
// assertCompare(()=>combinationSum3(3, 9), [[1,2,6], [1,3,5], [2,3,4]]);

// @lc code=end

