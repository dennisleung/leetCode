/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 */
/*
87/87 cases passed (48 ms)
Your runtime beats 95.49 % of javascript submissions
Your memory usage beats 21.43 % of javascript submissions (33.9 MB)

one-pass solution:
var sortColors = function(nums) {
    let temp;
    let c0=0, c1=0;
    
    for (i=0; i<nums.length; i++) {
        temp = nums[i];
        if (temp === 1) {
            nums[i] = nums[c0+c1];
            nums[c0+c1] = 1;
            c1++;
        } else if (temp === 0) {
            nums[i] = nums[c0+c1];
            nums[c0+c1] = 1;
            nums[c0] = 0;
            c0++;
        }
    }

    return nums;
};

another one-pass solution:
//https://leetcode.com/problems/sort-colors/discuss/139809/Clean-JavaScript-one-pass-solution
function sortColors(nums) {
  function swap(i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  let l = 0;
  let r = nums.length - 1;
  let i = 0;

  while (i <= r) {
    const n = nums[i];
    if (n === 0) {
      swap(i, l);
      l++;
      i++;
    } else if (n === 2) {
      swap(i, r);
      r--;
    } else {
      i++;
    }
  }
}
*/
// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const cache = [0, 0, 0];
    for(num of nums) {
        cache[num]++;
    }
    nums.splice(0, nums.length, ...cache.reduce((arr, v, i)=>{return arr.concat(new Array(v).fill(i))}, []));
    return nums;
};


// test cases:
// assertCompare(()=>sortColors([2,0,2,1,1,0]), [0,0,1,1,2,2]);
// assertCompare(()=>sortColors([]), []);
// assertCompare(()=>sortColors([1,1,1]), [1,1,1]);
// assertCompare(()=>sortColors([2,0,0]), [0,0,2]);
// @lc code=end

