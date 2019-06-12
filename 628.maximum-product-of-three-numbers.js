/*
 * @lc app=leetcode id=628 lang=javascript
 *
 * [628] Maximum Product of Three Numbers
 * 
 */
/*
这道题没想出来。

better solution:
var maximumProduct = function(nums) {
    let max1 = max2 = max3 = -1e4
    let min1 = min2 = 1e4
    nums.forEach(e => {
        if(e > max1)
            [max3, max2, max1] = [max2, max1, e]
        else if(e > max2)
            [max3, max2] = [max2, e]
        else if(e > max3)
            max3 = e
        
        if(e < min1)
            [min2, min1] = [min1, e]
        else if(e < min2)
            min2 = e
    })
    return max1 * Math.max(min1 * min2, max2 * max3)
}
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    nums = nums.sort((a,b)=>a-b);//升序
    const len = nums.length;
    return nums[len-1] * Math.max(nums[len-2]*nums[len-3], nums[0]*nums[1]);//这里有点难理解
};

