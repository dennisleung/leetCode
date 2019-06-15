/*
 * @lc app=leetcode id=645 lang=javascript
 *
 * [645] Set Mismatch
 */
/*
✔ Accepted
  ✔ 49/49 cases passed (76 ms)
  ✔ Your runtime beats 66.67 % of javascript submissions
  ✔ Your memory usage beats 38.34 % of javascript submissions (38 MB)

another solution:
var findErrorNums = function(nums) {
    var sum = (1 + nums.length) * nums.length / 2;
    var real_sum = 0;
    var double;
    var map = {};
    for(let i = 0; i < nums.length; i++){
        if(map[nums[i]] === 1){
            double = nums[i];
        }
        else{
            map[nums[i]] = (map[nums[i]] || 0) + 1;
        }
        real_sum += nums[i];
    }
    return [double, sum + double - real_sum];
};

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    const cache = {};
    let duplicate;
    for(let num of nums) {
        if(cache[num]) {
            duplicate = num;
        }else {
            cache[num] = true;
        }
    }

    for(let i = 1, len = nums.length; i<=len; i++) {
        if(!cache[i]) {
            return [duplicate, i];
        }
    }
};

