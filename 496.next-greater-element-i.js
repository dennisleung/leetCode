/*
 * @lc app=leetcode id=496 lang=javascript
 *
 * [496] Next Greater Element I
 */
/*
✔ Accepted
  ✔ 17/17 cases passed (60 ms)
  ✔ Your runtime beats 99.8 % of javascript submissions
  ✔ Your memory usage beats 70.97 % of javascript submissions (35.2 MB)


 more intuitive solution:
 var nextGreaterElement = function(findNums, nums) {
    return findNums.map(n => {
        let found = nums.indexOf(n);
        
        // find the next greater element's index
        while (nums[++found] < n);
        // -1 if not found
        if (found >= nums.length) found = -1;
        else found = nums[found];
        
        return found;
    });
}; 

很巧妙的解法：
var nextGreaterElement = function(findNums, nums) {
    let obj = {}
    let stack = []
    for (let i of nums) {
        while (stack[stack.length - 1] < i) {
            obj[stack.pop()] = i
        }
        stack.push(i)
    }
    return findNums.map(i => obj[i] || -1)
}
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const result = [];
    for(let num of nums1) {
        let index = nums2.indexOf(num);
        if(index===-1) {//这里是不需要的，因为nums1是nums2的子集
            result.push(-1);
        }else {
            let g = -1;
            while(++index<nums2.length) {
                if(nums2[index]>num) {
                    g = nums2[index];
                    break;
                }
            }
            result.push(g);
        }
    }

    return result;
};

