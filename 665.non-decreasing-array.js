/*
 * @lc app=leetcode id=665 lang=javascript
 *
 * [665] Non-decreasing Array
 */
/*
✔ Accepted
  ✔ 325/325 cases passed (64 ms)
  ✔ Your runtime beats 89.86 % of javascript submissions
  ✔ Your memory usage beats 83.76 % of javascript submissions (36.7 MB)

better solution:
var checkPossibility = function(nums) {
    let count = 0;
    for(let i = 0, len = nums.length; i<len-1; i++) {
        if(nums[i]>nums[i+1]) {
            if(!i || nums[i+1]>nums[i-1]) {
                nums[i] = nums[i+1];
            }else {
                nums[i+1] = nums[i];
            }
            if(++count>1) {
                return false;
            }
        }
    }

    return true;
};

another solution (doesn't modify input):
var checkPossibility = function(nums) {
	var changes = 0;
	for (var i = 0; i < nums.length-1; i++) {
		if (nums[i+1] < nums[i]) {
            if (nums[i-1] !== undefined && nums[i-1] > nums[i+1]) {
                if (nums[i+2] && nums[i] > nums[i+2]) {
                    return false;
                }
            }
			changes++;
			if (changes > 1) {
				return false;
			}
		}
	}
	return true;
};
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    let count = 0;
    for(let i = 0, len = nums.length; i<len-1; i++) {
        if(nums[i]>nums[i+1]) {
            if(!i || nums[i+1]>nums[i-1]) {
                nums[i] = nums[i+1];
            }else {
                nums[i+1] = nums[i];
            }
            if(++count>1) {
                return false;
            }
        }
    }

    return true;
};

