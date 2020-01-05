/*
 * @lc app=leetcode id=215 lang=javascript
 *
 * [215] Kth Largest Element in an Array
 */
/*
32/32 cases passed (64 ms)
Your runtime beats 88.28 % of javascript submissions
Your memory usage beats 10 % of javascript submissions (36 MB)

quick select(但是不觉得时间复杂度更优。。):
const findKthLargest = (nums, k) => {
    return quickSelect(nums, 0, nums.length - 1, k);
};

const quickSelect = (nums, lo, hi, k) => {
    // use quick sort's idea
    // put nums that are <= pivot to the left
    // put nums that are  > pivot to the right
    for (var i = lo, j = lo; j < hi; j++) {
        if (nums[j] <= nums[hi]) {
            swap(nums, i++, j);
        }
    }
    swap(nums, i, j);
    
    // count the nums that are >= pivot
    const m = hi - i + 1;
    // pivot is the one!
    if (m === k) return nums[i];
    // pivot is too small, so it must be on the right
    if (m > k) return quickSelect(nums, i + 1, hi, k);
    // pivot is too big, so it must be on the left
    return quickSelect(nums, lo, i - 1, k - m);
};
*/
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    nums.sort((a,b)=>b-a);
    return nums[k-1];
};

// test cases:
// assertCompare(()=>findKthLargest([3,2,1,5,6,4], 2), 5);
// assertCompare(()=>findKthLargest([3,2,3,1,2,4,5,5,6], 4), 4);

// @lc code=end

