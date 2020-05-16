/*
 * @lc app=leetcode id=162 lang=javascript
 *
 * [162] Find Peak Element
 */

// @lc code=start
/*
59/59 cases passed (52 ms)
Your runtime beats 80.65 % of javascript submissions
Your memory usage beats 12.5 % of javascript submissions (34.6 MB)

binary search solution:
recursive:
var findPeakElement = function(nums, l = 0, r = nums.length-1) {
    if(l === r ) { return l}
    let mid = Math.floor((l + r) /2) 
    if(nums[mid] > nums[mid+1]) {
        return findPeakElement(nums, l, mid)
    } else {
        return findPeakElement(nums, mid+1, r)
    }
};

iterative:
var findPeakElement = function(nums) {
    let l = 0, r = nums.length -1
    while(l <= r) {
        if(l === r ) {
            return l
        }
        let mid = Math.floor((l + r) /2)   
        if(nums[mid] > nums[mid+1]) {
            r = mid
        } else {
            l = mid + 1
        }
    }
    
};
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    for(var i = 1; i<nums.length-1; i++) {
        if(nums[i-1]<nums[i] && nums[i]>nums[i+1]) {
            break;
        }
    }
    if(i<nums.length-1) {
        return i;
    }else {
        return nums[0]<nums[nums.length-1] ? nums.length-1 : 0;
    }
};

// test cases:
// assertCompare(()=>findPeakElement([1,2,3,1]), 2);
// assertCompare(()=>findPeakElement([1,2,1,3,5,6,4]), 1);
// assertCompare(()=>findPeakElement([1]), 0);
// assertCompare(()=>findPeakElement([1,2]), 1);
// assertCompare(()=>findPeakElement([2,1]), 0);
// assertCompare(()=>findPeakElement([1,2,3]), 2);
// @lc code=end

