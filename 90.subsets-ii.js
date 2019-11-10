/*
 * @lc app=leetcode id=90 lang=javascript
 *
 * [90] Subsets II
 */
/*
19/19 cases passed (72 ms)
Your runtime beats 30.69 % of javascript submissions
Your memory usage beats 10 % of javascript submissions (37.5 MB)
*/
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    const result = {};
    const addResult = function(arr) {
        const key = arr.join(",");
        if(!result[key]) {
            result[key] = [...arr];
        }
    };
    const dfs = function(current, startIndex) {
        addResult(current);
        if(current.length==nums.length) {
            return;
        }
        for(let i = startIndex; i<nums.length; i++) {
            dfs(current.concat([nums[i]]), i+1);
        }
    }

    nums.sort((a,b)=>a-b);
    dfs([], 0);

    return Object.values(result);
};

// test cases:
// assertCompare(()=>subsetsWithDup([]), [[]]);
// assertCompare(()=>subsetsWithDup([1]), [[], [1]]);
// assertCompare(()=>subsetsWithDup([1,2,2]), [
//   [2],
//   [1],
//   [1,2,2],
//   [2,2],
//   [1,2],
//   []
// ]);
// assertCompare(()=>subsetsWithDup([4,4,4,1,4]), [[],[1],[1,4],[1,4,4],[1,4,4,4],[1,4,4,4,4],[4],[4,4],[4,4,4],[4,4,4,4]]);

// @lc code=end

