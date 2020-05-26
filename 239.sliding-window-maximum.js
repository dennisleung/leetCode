/*
 * @lc app=leetcode id=239 lang=javascript
 *
 * [239] Sliding Window Maximum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// Runtime: 192 ms, faster than 18.08% of JavaScript online submissions for Sliding Window Maximum.
// Memory Usage: 48 MB, less than 33.33% of JavaScript online submissions for Sliding Window Maximum.

var maxSlidingWindow = function(nums, k) {
    const window = [];//存储的是nums的索引
    const result = [];
    for(let i = 0; i<nums.length; i++) {
        const num = nums[i];
        for(let j = 0; j<window.length && window[j]<=i-k; j++) {
            window.shift();
        }
        while(true) {
            if(window.length && nums[window[window.length-1]]<=num) {
                window.pop();
            }else {
                break;
            }
        }
        window.push(i);
        
        if(i>=k-1) {
            result.push(nums[window[0]]);
        }
    }

    return result;
};
// @lc code=end

test("test1", ()=>{
    expect(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)).toEqual([3,3,5,5,6,7]);
})

test("test2", ()=>{
    expect(maxSlidingWindow([1,3,1,2,0,5], 3)).toEqual([3,3,2,5]);
})

