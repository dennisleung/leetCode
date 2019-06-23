/*
 * @lc app=leetcode id=674 lang=javascript
 *
 * [674] Longest Continuous Increasing Subsequence
 */
/*
✔ Accepted
  ✔ 36/36 cases passed (64 ms)
  ✔ Your runtime beats 34.55 % of javascript submissions
  ✔ Your memory usage beats 28.18 % of javascript submissions (35.3 MB)

一种思路，但是不推崇，可读性实在太差了：
var findLengthOfLCIS = function(nums) {
    return Math.max(
        ...nums.map(
            (v, i) => v - nums[i - 1] > 0 && i !== 0 ? v : '$'
        ).
        join('#')
        .split('$')
        .map(
            e => e.split('#').filter(s => s !== '').length
        )
    ) + Math.min(nums.length, 1)
}

O(n) solution:
var findLengthOfLCIS = function(nums) {
    if(nums.length==0)
        return 0;
    var ans = 1;
    var temp = 1;
    for(var i=0; i<nums.length-1; i++){
        if(nums[i]<nums[i+1]) temp++;
        else{
            ans = Math.max(ans, temp);
            temp = 1;
        }
    }
    ans = Math.max(ans, temp);
    return ans;
};

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    if(!nums.length) {//sanity check
        return 0;
    }

    let max = 1;
    for(let start = 0, len = nums.length; start<len-1; start++) {
        let count = 1;
        for(let i = start; i<len-1; i++) {
            if(nums[i+1]>nums[i]) {
                count++;
            }else {
                break;
            }
        }
        max = Math.max(max, count);
    }

    return max;
};

