/*
 * @lc app=leetcode id=566 lang=javascript
 *
 * [566] Reshape the Matrix
 */

 /*
 ✔ Accepted
  ✔ 56/56 cases passed (88 ms)
  ✔ Your runtime beats 79.02 % of javascript submissions
  ✔ Your memory usage beats 23.87 % of javascript submissions (41.6 MB)


  better solution:
  var matrixReshape = function(nums, r, c) {
    const numsRow = nums.length;
    const numsCol = nums[0].length;
    const output = [];
    
    let flatNums = null;
    
    // return original if new dimension doesn't match 
    if (r * c !== numsRow * numsCol) return nums;
    
    // deconstruct the original array and reconstruct new array
    flatNums = nums.reduce((acc, curr) => acc.concat(curr), []);
    
    for (let i = 0; i < r; i++) 
        output.push(flatNums.splice(0, c));
    
    return output;
};
 */

/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    if(!nums || !nums.length || !nums[0].length || nums.length*nums[0].length!=r*c) {
        return nums;
    }

    nums = nums.reduce((a, b)=>a.concat(b), []);//Also es2019 is coming with array.flat() which does the same as [].concat(...nums)
    const result = [];
    let row = [];
    for(let i = 0, len = nums.length; i<len; i++) {
        row.push(nums[i]);
        if(row.length>=c) {
            result.push(row);
            row = [];
        }
    }

    return result;
};

