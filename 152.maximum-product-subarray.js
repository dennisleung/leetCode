/*
 * @lc app=leetcode id=152 lang=javascript
 *
 * [152] Maximum Product Subarray
 */
/*
184/184 cases passed (52 ms)
Your runtime beats 95.17 % of javascript submissions
Your memory usage beats 42.86 % of javascript submissions (36.6 MB)
*/
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    const min = [1];
    const max = [1];
    for(let i = 0; i<nums.length; i++) {
        const num = nums[i];
        if(num<0) {
            min[i+1] = Math.min(max[i]*num, num);
            max[i+1] = Math.max(min[i]*num, num);
        }else {
            min[i+1] = Math.min(min[i] * num, num);
            max[i+1] = Math.max(max[i] * num, num)
        }
    }

    max[0] = -Infinity;
    return Math.max(...max);
};

// test cases:
// assertCompare(()=>maxProduct([2,3,-2,4]), 6);
// assertCompare(()=>maxProduct([-2,0,-1]), 0);
// assertCompare(()=>maxProduct([-2]), -2);
// assertCompare(()=>maxProduct([-2,0]), 0);
// assertCompare(()=>maxProduct([3,-1,4]), 4);
// assertCompare(()=>maxProduct([-2,3,-4]), 24);
// assertCompare(()=>maxProduct([-4,-3,-2]), 12);
// @lc code=end

