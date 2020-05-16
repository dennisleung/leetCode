/*
 * @lc app=leetcode id=213 lang=javascript
 *
 * [213] House Robber II
 */
/*
74/74 cases passed (52 ms)
Your runtime beats 77.72 % of javascript submissions
Your memory usage beats 33.33 % of javascript submissions (34 MB)
*/
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const subRob = function(nums) {
        const arr1 = [0];//arr1[i]表示偷了当前家的最大值
        const arr2 = [0];//arr2[i]表示没有偷当前家的最大值
        for(let i = 0; i<nums.length; i++) {
            arr1[i+1] = arr2[i] + nums[i];
            arr2[i+1] = Math.max(arr1[i], arr2[i]);
        }
        return Math.max(arr1.pop(), arr2.pop());
    };
    
    if(nums.length<2) {
        return nums.reduce((a,b)=>a+b, 0);
    }else {
        return Math.max(subRob(nums.slice(1)), subRob(nums.slice(0, -1)));//首尾相连， 巧妙地分别求去掉首/尾两种情况的最大值
    }
};

// test cases:
// assertCompare(()=>rob([2,3,2]), 3);
// assertCompare(()=>rob([1,2,3,1]), 4);
// assertCompare(()=>rob([1]), 1);
// assertCompare(()=>rob([1,2]), 2);
// assertCompare(()=>rob([1,3,1,3,100]), 103);
// assertCompare(()=>rob([]), 0);
// @lc code=end

