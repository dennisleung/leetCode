/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
/*
88/88 cases passed (52 ms)
Your runtime beats 87.87 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (34.9 MB)
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const binarySearch = (nums, target) => {
        for(let low = 0, high = nums.length-1; low<=high;) {
            let mid = Math.floor((low+high)/2);
            if(nums[mid] == target) {
                return mid;
            }else if(nums[mid]>target) {
                high = mid-1;
            }else {
                low = mid+1;
            }
        }

        return -1;
    };

    let pos = binarySearch(nums, target);
    if(pos==-1) {
        return [-1, -1];
    }else {
        let first = last = pos;
        while(first>=0 && nums[first]==target) {first--;}
        while(last<=nums.length-1 && nums[last]==target) {last++;}
        return [first+1, last-1];
    }
};
// @lc code=end

