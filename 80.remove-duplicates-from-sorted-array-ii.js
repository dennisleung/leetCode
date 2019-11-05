/*
 * @lc app=leetcode id=80 lang=javascript
 *
 * [80] Remove Duplicates from Sorted Array II
 */
/*
166/166 cases passed (68 ms)
Your runtime beats 68.7 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (35.5 MB)

another solution using splice:
var removeDuplicates = function(nums) {
  for (let i=0; i<nums.length; i++) {
    if (nums[i] === nums[i+1]) { 
      i++;
      while (nums[i] === nums[i+1]) {
         nums.splice(i+1, 1);
      }
    }
  }
  return nums.length  ;
};
*/
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(!nums.length) {
        return 0;
    }
    for(var i = 0, j = 1, sameCount = 1; j<nums.length; j++) {
        if(nums[i]===nums[j]) {
            if(sameCount<2) {
                nums[++i] = nums[j];
            }
            sameCount++;
        }else {
            nums[++i] = nums[j];
            sameCount = 1;
        }
    }

    return i+1;
};

// test cases:
// assertCompare(()=>removeDuplicates([]), []);
// assertCompare(()=>removeDuplicates([1]), [1]);
// assertCompare(()=>removeDuplicates([1,1]), [1,1]);
// assertCompare(()=>removeDuplicates([1,1,1]), [1,1]);
// assertCompare(()=>removeDuplicates([1,1,1,2,2,3]), [1,1,2,2,3]);
// assertCompare(()=>removeDuplicates([0,0,1,1,1,1,2,3,3]), [0,0,1,1,2,3,3]);
// assertCompare(()=>removeDuplicates([1,1,1,2,2,3]), [1,1,2,2,3]);

// @lc code=end

