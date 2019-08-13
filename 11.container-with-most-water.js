/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */
/*
✔ Accepted
  ✔ 50/50 cases passed (668 ms)
  ✔ Your runtime beats 29.66 % of javascript submissions
  ✔ Your memory usage beats 45.45 % of javascript submissions (35.7 MB)

better solution:
var maxArea = function(height) {
    let res = l = 0, r = height.length - 1, cur;
    while (l < r){
        cur = Math.min(height[l], height[r]) * (r - l);
        if (cur > res){
            res = cur;
        } 
        height[l] <= height[r] ? l += 1: r -= 1;
    }
    return res;
};
*/
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    for(let i = 0, len = height.length; i<len-1; i++) {
        for(let j = i+1; j<len; j++) {
            let area = (j-i) * Math.min(height[i], height[j]);
            max = Math.max(max, area);
        }
    }

    return max;
};

