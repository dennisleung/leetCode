/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 */
/*
✔ Accepted
  ✔ 125/125 cases passed (60 ms)
  ✔ Your runtime beats 94.44 % of javascript submissions
  ✔ Your memory usage beats 100 % of javascript submissions (35.2 MB)
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let closestDiff = Infinity;
    let result = [];
    nums.sort((a,b)=>a-b);
    for(let i = 0; i<nums.length; i++) {
        let start = i+1;
        let end = nums.length-1;
        while(start<end) {
            let _sum = nums[i] + nums[start] + nums[end];
            let diff = _sum-target;
            if(Math.abs(diff)<closestDiff) {
                closestDiff = Math.abs(diff);
                result = _sum;
            }
            if(diff==0) {
                break;
            }else if(diff>0){
                end--;
            }else if(diff<0){
                start++;
            }else {
                start++;
                end--;
            }
        }
    }

    return result;
};

