/*
 * @lc app=leetcode id=561 lang=javascript
 *
 * [561] Array Partition I
 */
/*
✔ Accepted
  ✔ 81/81 cases passed (116 ms)
  ✔ Your runtime beats 87.11 % of javascript submissions
  ✔ Your memory usage beats 94.64 % of javascript submissions (38.8 MB)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((a, b)=>{return a-b});
    let sum = 0;
    for(let i = 0, len = nums.length; i<len; i++) {
        if(i%2==0) {
            sum += nums[i];
        }
    }

    return sum;
};

