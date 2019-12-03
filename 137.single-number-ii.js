/*
 * @lc app=leetcode id=137 lang=javascript
 *
 * [137] Single Number II
 */

/*
11/11 cases passed (76 ms)
Your runtime beats 23.9 % of javascript submissions
Your memory usage beats 50 % of javascript submissions (36.8 MB)

trick solution:
var singleNumber = function(nums) {
    const uniqueValuesSum = ([...new Set(nums)]).reduce((sum, elem) => sum + elem, 0);
    const allValuesSum = nums.reduce((sum, elem) => sum + elem, 0);
    return ( uniqueValuesSum  * 3 - allValuesSum ) / 2;
};

one-liner solution:
var singleNumber = function(nums) {
    return nums.reduce((a, c) => [a[0] & ~c | a[1] & c, ~a[0] & (a[1] ^ c)], [0, 0])[1]
};

解释：https://www.cnblogs.com/grandyang/p/4263927.html（还是很难理解这个按位操作。。。）
*/

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums.sort((a,b)=>a-b);
    for(let i = 0; i<nums.length; i++) {
        if(nums[i]!==nums[i-1] && nums[i]!==nums[i+1]) {
            return nums[i];
        }
    }
};

// test cases:
// assertCompare(()=>singleNumber([3,2,2,2]), 3);
// assertCompare(()=>singleNumber([2,2,3,2]), 3);
// assertCompare(()=>singleNumber([0,1,0,1,0,1,99]), 99);
// @lc code=end

