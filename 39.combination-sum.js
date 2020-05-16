/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 */

/*
168/168 cases passed (84 ms)
Your runtime beats 40.03 % of javascript submissions
Your memory usage beats 13.33 % of javascript submissions (37.7 MB)

backtracing dfs solution:
var combinationSum = function(candidates, target) {
    if (!candidates || !candidates.length) {
        return []; 
    }   

    let result = []; 

    function dfs(candidates, tmpArr, remain, start) {
        if (remain < 0) {
            return;
        } else if (remain == 0) {
            result.push(tmpArr.slice());
            return;
        } else {
            for (let i = start; i < candidates.length; i++) {
                tmpArr.push(candidates[i]);
                dfs(candidates, tmpArr, remain - candidates[i], i); 
                tmpArr.pop();
            }   
        }   
    }   

    dfs(candidates, [], target, 0); 

    return result;
};
*/

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    if(!candidates.length) {
        return [];
    }

    let arr1 = [];
    if(target>candidates[0]) {
        arr1 = combinationSum(candidates, target-candidates[0]);
        if(arr1.length) {
            arr1.forEach(v=>v.unshift(candidates[0]));
        }
    }else if(target==candidates[0]) {
        arr1 = [[candidates[0]]];
    }

    let arr2 = combinationSum(candidates.slice(1), target);
    return arr1.concat(arr2);
};

// test cases:
// console.log(combinationSum([2,3,6,7], 7));//[[7],[2,2,3]]
// console.log(combinationSum([2,3,5], 8));//[[2,2,2,2],[2,3,3],[3,5]]

// @lc code=end

