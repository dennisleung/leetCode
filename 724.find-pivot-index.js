/*
 * @lc app=leetcode id=724 lang=javascript
 *
 * [724] Find Pivot Index
 */
/*
✔ Accepted
  ✔ 741/741 cases passed (88 ms)
  ✔ Your runtime beats 45.07 % of javascript submissions
  ✔ Your memory usage beats 22.82 % of javascript submissions (39.1 MB)

better solution:
var pivotIndex = function(nums) {
    var sum = nums.reduce((num,curr,index)=>(num+curr),0);
    var currsum = 0;
    for(let i =0;i<nums.length;i++){
        if((sum-nums[i])/2==currsum){
            return i;
        }
     currsum +=nums[i];
    }
    return -1
};

better solution:
var pivotIndex = function(nums) {
    if (nums.length < 2) return -1
    let before = 0;
    let after = nums.reduce((a, c) => a + c) - before;
    for (let i=0; i<nums.length; i++) {
        after = after - nums[i];
        if (before === after) {
            return i;
        }
        before = before + nums[i];
    }
    return -1 
};
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const arr = [];
    const rArr = [];

    let sum = 0;
    for(let i = 0, len = nums.length; i<len; i++) {
        arr[i] = sum;
        sum += nums[i];
    }

    sum = 0;
    for(let i = nums.length-1; i>=0; i--) {
        rArr[i] = sum;
        sum += nums[i];
    }

    for(let i = 0, len = nums.length; i<len; i++) {
        if(arr[i]==rArr[i]) {
            return i;
        }
    }

    return -1;
};

