/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */
/*
196/196 cases passed (60 ms)
Your runtime beats 43.07 % of javascript submissions
Your memory usage beats 7.69 % of javascript submissions (34.2 MB)

better binary search solution:
//explaination:https://leetcode.com/problems/search-in-rotated-sorted-array/discuss/117116/JavaScript-Solution-Beats-100
var search = function(nums, target) {
    if (nums === null || nums.length === 0) {
        return -1;
    }
    let start = 0;
    let end = nums.length - 1;
    while (start < end) {
        let mid = parseInt((start + end) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[mid] > nums[end]) {
            if (target >= nums[start] && target < nums[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {
            if (target > nums[mid] && target <= nums[end]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    return nums[end] === target ? end : -1;
};
*/
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let i;
    for(i = 0; i<nums.length-1 && nums[i]<nums[i+1] && nums[i]<target; i++) {}
    if(nums[i]==target) {
        return i;
    }
    for(i = nums.length-1; i>0 && nums[i]>nums[i-1] && nums[i]>target; i--) {}
    if(nums[i]==target) {
        return i;
    }

    return -1;
};

// test case:
// console.log(search([4,5,6,7,0,1,2], 0));//4
// console.log(search([4,5,6,7,0,1,2], 3));//-1
// console.log(search([4,5,6,7,0,1,2], 4));//0
// console.log(search([4,5,6,7,0,1,2], 2));//6
// console.log(search([0,1,2,4,5,6,7], 3));//-1
// console.log(search([0,1,2,4,5,6,7], 0));//0
// console.log(search([0,1,2,4,5,6,7], 7));//6
// console.log(search([0,1,2,4,5,6,7], 5));//4
// console.log(search([1], 1));//0
// @lc code=end

