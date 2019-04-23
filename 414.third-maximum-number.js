/*
 * @lc app=leetcode id=414 lang=javascript
 *
 * [414] Third Maximum Number
 */
/*
better solution:
var thirdMax = function(nums) {
    let [min, mid, max] = Array(3).fill(-Infinity);
    for (let n of nums) {
        if (n === min || n === mid || n === max) continue;
        if (n > max) [min, mid, max] = [mid, max, n];
        else if (n > mid) [min, mid, max] = [mid, n, max];
        else if (n > min) [min, mid, max] = [n, mid, max];
    }
    return min === -Infinity ? max : min;
};

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let map = {}
    for(let num of nums) {//需要去重
        map[num] = 1;
    }
    nums = Object.keys(map).map(v=>parseInt(v));
    nums.sort((a, b)=>a-b);
    let index = nums.length-3;
    return index>=0 ? nums[index] : nums.pop();
};

