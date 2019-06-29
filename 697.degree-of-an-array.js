/*
 * @lc app=leetcode id=697 lang=javascript
 *
 * [697] Degree of an Array
 */
/*
✔ Accepted
  ✔ 89/89 cases passed (68 ms)
  ✔ Your runtime beats 86.89 % of javascript submissions
  ✔ Your memory usage beats 36.7 % of javascript submissions (39.5 MB)

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let firstPos = {};
    let lastPos = {};
    let count = {};
    for(let i = 0, len = nums.length; i<len; i++) {
        let num = nums[i];
        count[num] = (count[num]||0) + 1;
        lastPos[num] = i;
        if(firstPos[num]===void 0) {
            firstPos[num] = i;
        }
    }
    let degNums = [];
    let max = 0;
    for(let num in count) {
        if(count[num]>max) {
            degNums = [num];
            max = count[num];
        }else if(count[num]==max) {
            degNums.push(num);
        }
    }
    return Math.min(...degNums.map(num=>{
        return lastPos[num] - firstPos[num] + 1;
    }))
};

