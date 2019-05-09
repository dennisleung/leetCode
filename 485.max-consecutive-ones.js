/*
 * @lc app=leetcode id=485 lang=javascript
 *
 * [485] Max Consecutive Ones
 */

/*
✔ Accepted
  ✔ 41/41 cases passed (68 ms)
  ✔ Your runtime beats 100 % of javascript submissions
  ✔ Your memory usage beats 18.18 % of javascript submissions (37.5 MB)


more intuitive solution:
var findMaxConsecutiveOnes = function(nums) {
    return nums.join('').split('0').reduce((max, ones) => Math.max(max, ones.length), 0);
};
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let flag = false;
    let max = 0;
    let count = 0;
    for(let num of nums) {
        flag = num==1;
        if(flag) {
            count++;
            if(count>max) {
                max = count;
            }
        }else {
            count = 0;
        }
    }

    return max;
};

