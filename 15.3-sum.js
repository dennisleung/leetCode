/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */
/*
✔ Accepted
  ✔ 313/313 cases passed (448 ms)
  ✔ Your runtime beats 11.41 % of javascript submissions
  ✔ Your memory usage beats 6 % of javascript submissions (57.4 MB)

没做出来，看了lc上的ac撸的。。。
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const cache = {};
    for(let num of nums) {
        cache[num] = (cache[num] || 0) + 1;
    }

    let result = {};
    nums.sort((a, b)=>a-b);
    for(let i = 0; i<nums.length; i++) {
        let low = i+1;
        let high = nums.length-1;
        while(low<high) {
            let r = nums[i] + nums[low] + nums[high];
            if(r>0) {
                high--;
            }else if(r<0){
                low++;
            }else {
                result[`${nums[i]}_${nums[low]}_${nums[high]}`] = [nums[i], nums[low], nums[high]];
                low++;
                high--;
            }
        }
    }

    return Object.values(result);
};

