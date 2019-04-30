/*
 * @lc app=leetcode id=448 lang=javascript
 *
 * [448] Find All Numbers Disappeared in an Array
 */

/*
✔ Accepted
  ✔ 34/34 cases passed (104 ms)
  ✔ Your runtime beats 99.01 % of javascript submissions
  ✔ Your memory usage beats 67.12 % of javascript submissions (43.8 MB)

//更巧妙的解法：
var findDisappearedNumbers = function(nums) {
    let ret = [];
    nums.forEach((n, i) => {
        const val = Math.abs(nums[i]) - 1;
        nums[val] = nums[val] > 0 ? nums[val] * -1 : nums[val];
    });
    nums.forEach((n, i) => {
       if (nums[i] > 0) ret.push(i + 1);
    });
    return ret;
};

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    for(let i = 0, len = nums.length; i<len; i++) {
        while(true) {//索引不正确
            let swapIndex = nums[i]-1;
            if(nums[swapIndex]==swapIndex+1) {//要换的地方已经正确
                break;
            }
            let tmp = nums[swapIndex];
            nums[swapIndex] = nums[i];
            nums[i] = tmp;
        }
    }

    let result = [];
    for(let i = 0, len = nums.length; i<len; i++) {
        if(nums[i]!=i+1) {
            result.push(i+1);
        }
    }

    return result;
};

