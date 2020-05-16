/*
 * @lc app=leetcode id=81 lang=javascript
 *
 * [81] Search in Rotated Sorted Array II
 */
/*
275/275 cases passed (68 ms)
Your runtime beats 14.01 % of javascript submissions
Your memory usage beats 50 % of javascript submissions (37.2 MB)

very complext binary search solution:
var search = function(nums, target) {
    var guess;
    var min = 0;
    var max = nums.length - 1;

    while (min <= max) {
        guess = (min + max) >> 1;
        // console.log("min: " + min + " max: " + max + " guess = " + nums[guess]);
        if (nums[guess] === target) {
            return true;
        } else if (target < nums[guess] && (nums[min] <= target || nums[guess] < nums[min])
            || nums[min] <= target && nums[guess] < nums[min]) {
            max = guess - 1;
        } else if (nums[guess] === nums[min] && nums[min] === nums[max]) {
            var guessNum = nums[guess];
            while (min <= max && nums[min] === guessNum) {
                min++;
            }
        } else {
            min = guess + 1;
        }
    }
   
    return false;
};
*/
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    const cache = {};
    for(let num of nums) {
        cache[num] = true;
    }
    return !!cache[target];
};
// @lc code=end

