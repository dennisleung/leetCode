/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 */
/*
75/75 cases passed (56 ms)
Your runtime beats 81.58 % of javascript submissions
Your memory usage beats 20 % of javascript submissions (35.9 MB)

better solution:
//explaination:https://leetcode.com/problems/jump-game/discuss/392739/2-line-Javascript...
function canJump(nums) {
    if(!nums || !nums.length) return false;
    return nums.reduce((acc, num, i)=>acc >= i ? Math.max(acc, i+num) : acc, 0) >= nums.length - 1;
}

another version:
function canJump(nums) {
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (max < i) return false;  // max steps cannot reach position i
    max = Math.max(nums[i] + i, max);
  }

  return true;
}

dp solution:
var canJump = function(nums) {
    const dp = new Array(nums.length).fill();
    dp[0] = true;
    
    for(let j = 1; j < nums.length; ++j) {
        dp[j] = false;
        for(let i = 0; i < j; ++i) {
            if(dp[i] && i + nums[i] >= j) {
                dp[j] = true;
                break;
            }
            
        }
    }
    return dp[nums.length -1];
};
*/
// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if(nums.length<2) {
        return true;
    }
    let start = 0;
    let end = nums[0];
    while(true) {
        if(end>=nums.length-1) {
            return true;
        }
        if(start==end) {
            return false;
        }
        let max = 0;
        for(let i = start; i<=end; i++) {
            max = Math.max(max, i+nums[i]);
        }
        start = Math.max(start+nums[start], start+1);
        end = max;
    }
};
// @lc code=end

