/*
 * @lc app=leetcode id=747 lang=javascript
 *
 * [747] Largest Number At Least Twice of Others
 */
/*
✔ Accepted
  ✔ 250/250 cases passed (48 ms)
  ✔ Your runtime beats 97.46 % of javascript submissions
  ✔ Your memory usage beats 99.31 % of javascript submissions (33.7 MB)

better solution:
var dominantIndex = function(nums) {
    let max = -Infinity;
    let index = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= (max * 2)) {
            index = i;
            max = nums[i];
        } else if (nums[i] > max) {
            index = -1;
            max = nums[i];
        } else if (max < (nums[i] * 2)) {
            index = -1;
        }
    }
    return index;
};

better solution:
var dominantIndex = function(nums) {
    let largestNum = -1, largestIndex = 0, nextLargest = -1
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] >= largestNum) {
        nextLargest = largestNum
        largestNum = nums[i]
        largestIndex = i
        } else if (nextLargest < nums[i]) {
        nextLargest = nums[i]
        }
    }

    if((nextLargest*2) > largestNum) {
        largestIndex = -1
    }

    return largestIndex
}
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    if(nums.length<1) {
        return -1;
    }

    let max = -Infinity;
    let maxIndex;
    for(let i = 0, len = nums.length; i<len; i++) {
        if(nums[i]>max) {
            max = nums[i];
            maxIndex = i;
        }
    }

    for(let i = 0, len = nums.length; i<len; i++) {
        if(i==maxIndex) {
            continue;
        }
        if(nums[i]*2>max) {
            return -1;
        }
    }

    return maxIndex;
};

