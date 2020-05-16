/*
 * @lc app=leetcode id=77 lang=javascript
 *
 * [77] Combinations
 */
/*
27/27 cases passed (516 ms)
Your runtime beats 8.68 % of javascript submissions
Your memory usage beats 8.33 % of javascript submissions (77.3 MB)

dfs solution:
var combine = function(n, k) {
    let result = [];
    
    function dfs(current, start) {
        if(current.length == k) {
            result.push(current);
            return;
        }
        for(let i = start; i <= n; i++) {
            dfs([...current, i], i + 1);
        }
    }
    
    dfs([], 1);
    return result;
};
*/
// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k, min=1) {
    if(n-min<k-1 || !k) {
        return [];
    }

    let result = [];
    if(k==1) {
        for(let i = min; i<=n; i++) {
            result.push([i]);
        }
        return result;
    }

    for(let i = min; i<=n-k+1; i++) {
        let a = combine(n, k-1, i+1);
        a.forEach(v=>{
            result.push([i, ...v]);
        });
        
        let b = combine(n, k, i+1);
        result = result.concat(b);
    }

    const cache = {};
    result = result.filter(v=>{
        const key = v.join(",");
        if(!cache[key]) {
            cache[key] = 1;
            return true;
        }else {
            return false;
        }
    });
    return result;
};

// test cases:
// assertCompare(()=>combine(4, 2), [
//     [2,4],
//     [3,4],
//     [2,3],
//     [1,2],
//     [1,3],
//     [1,4],
//   ]);
// @lc code=end

