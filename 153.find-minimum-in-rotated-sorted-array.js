/*
 * @lc app=leetcode id=153 lang=javascript
 *
 * [153] Find Minimum in Rotated Sorted Array
 */
/*
146/146 cases passed (56 ms)
Your runtime beats 64.95 % of javascript submissions
Your memory usage beats 18.75 % of javascript submissions (34.2 MB)

binary search solution:
function findMin(nums) {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    const m = Math.floor((l + r) / 2);
    if (nums[m] > nums[r]) l = m + 1;
    else r = m;
  }
  return nums[l];
}

one-liner solution(有点像奇淫技巧了。。)：
var findMin = function(nums) {
    return Math.min(...nums);
};
*/
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    const _nums = [nums[nums.length-1], ...nums, nums[0]];
    for(var i = 1; i<_nums.length-1; i++) {
        if(_nums[i-1]>_nums[i] && _nums[i]<_nums[i+1]) {
            break;
        }
    }

    return Math.min(_nums[i-1], _nums[i]);
};

// test cases:
// assertCompare(()=>findMin([3,4,5,1,2] ), 1);
// assertCompare(()=>findMin([4,5,6,7,0,1,2]), 0);
// assertCompare(()=>findMin([1]), 1);
// assertCompare(()=>findMin([3,2,1]), 1);
// assertCompare(()=>findMin([3,1,2]), 1);
// assertCompare(()=>findMin([1,2]), 1);
// @lc code=end

