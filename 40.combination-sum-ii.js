/*
 * @lc app=leetcode id=40 lang=javascript
 *
 * [40] Combination Sum II
 */
/*
172/172 cases passed (160 ms)
Your runtime beats 11.28 % of javascript submissions
Your memory usage beats 20 % of javascript submissions (41.9 MB)

better solution:
function combinationSum2(candidates, target) {
    var res = []; // [][]
    var prefix = [];

    candidates.sort((a, b) => a - b);
    search(0, target);
    return res;

    function search(idx, rest) {
        if (rest === 0 && idx === candidates.length) {//感觉idx === candidates.length这个条件可以去掉
            return res.push(prefix.slice());
        }

        if (rest < 0 || idx === candidates.length) {
          return;
        }

        // include number at idx
        prefix.push(candidates[idx]);
        search(idx + 1, rest - candidates[idx]);
        
        // exclude number at idx
        // eg. [1, 1, 1]
        // allow 
        // [1, 1, 1]
        // [X, 1, 1]
        // [X, X, 1]
        // [X, X, X]
        // disallow
        // [1, 1, X]
        // [1, X, X]
        prefix.pop();
        if (prefix[prefix.length - 1] !== candidates[idx]) {
            search(idx + 1, rest);
        }
    }
}
*/

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const dfs = (candidates, target) => {
        if(!candidates.length) {
            return [];
        }

        let arr1 = [];
        if(target>candidates[0]) {
            arr1 = dfs(candidates.slice(1), target-candidates[0]);
            if(arr1.length) {
                arr1.forEach(v=>v.unshift(candidates[0]));
            }
        }else if(target==candidates[0]) {
            arr1 = [[candidates[0]]];
        }

        let arr2 = dfs(candidates.slice(1), target);
        return arr1.concat(arr2);
    }

    const result = dfs(candidates, target);
    const cache = {};
    result.forEach((v)=>{
        v.sort((a,b)=>a-b);
        cache[v.join(",")] = v;
    });
    
    return Object.values(cache);
};

// test cases:
// console.log(combinationSum2([10,1,2,7,6,1,5], 8));//[[1, 7],[1, 2, 5],[2, 6],[1, 1, 6]]
// console.log(combinationSum2([2,5,2,1,2], 5));//[[1,2,2],[5]]

// @lc code=end

