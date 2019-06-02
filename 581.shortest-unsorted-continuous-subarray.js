/*
 * @lc app=leetcode id=581 lang=javascript
 *
 * [581] Shortest Unsorted Continuous Subarray
 */
/*
✔ Accepted
  ✔ 307/307 cases passed (100 ms)
  ✔ Your runtime beats 57.01 % of javascript submissions
  ✔ Your memory usage beats 35.09 % of javascript submissions (38.7 MB)


another solution:
//思路、性能差不多，但是这个可读性好差。。
var findUnsortedSubarray = function(nums) {
    var length = nums.length;
	var min = nums[length-1];
	var max = nums[0];

	var l = 0, r = nums.length - 1;
	
	for (var i = 1; i <= nums.length - 2; i++){//这里不用.sort，时间复杂度从O(nlogn)下降到O(n)
		if(nums[i] >= nums[i-1] && nums[i] >= nums[i+1]) max = Math.max(max, nums[i])
		if(nums[i] <= nums[i-1] && nums[i] <= nums[i+1]) min = Math.min(min, nums[i])
	}
    while (nums[l] <= min) l++;
    if(l===r+1) return 0
	while (nums[r] >= max) r--;
	return r - l + 1;
};

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let copyNums = [].concat(nums).sort((a,b)=>a-b);
    let startIndex = 0;
    for(let len = nums.length; startIndex<len; startIndex++) {
        if(nums[startIndex]!=copyNums[startIndex]) {
            break;
        }
    }

    let endIndex = nums.length - 1;
    for(;endIndex>=startIndex; endIndex--) {
        if(nums[endIndex]!=copyNums[endIndex]) {
            break;
        }
    }

    return endIndex - startIndex + 1;
};

