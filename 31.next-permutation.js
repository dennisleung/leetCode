/*
 * @lc app=leetcode id=31 lang=javascript
 *
 * [31] Next Permutation
 */
/*
Runtime: 72 ms, faster than 26.18% of JavaScript online submissions for Next Permutation.
Memory Usage: 34.9 MB, less than 33.33% of JavaScript online submissions for Next Permutation.
*/
// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let i;
    for(i = nums.length-1; i>0; i--) {
        if(nums[i]>nums[i-1]) {
            break;
        }
    }
    if(i==0) {//已经是最大的数了，返回最小的数
        nums.sort((a, b)=>a-b);
    }else {
        let replace = nums[i-1];
        let length = nums.length-i+1;
        let tmp = nums.slice(-length);
        let j = 0;
        tmp.sort((a,b)=>a-b);
        for(;j<tmp.length; j++) {
            if(tmp[j]>replace) {
                break;
            }
        }
        nums[i-1] = tmp[j];
        tmp.splice(j, 1);
        nums.splice(i, length-1, ...tmp);
    }

    //return nums;//todo
};

// test case:
// console.log(nextPermutation([1,2,3]));//1,3,2
// console.log(nextPermutation([3,2,1]));//1,2,3
// console.log(nextPermutation([1,1,5]));//1,5,1
// console.log(nextPermutation([1,1,1]));//1,1,1

// @lc code=end

