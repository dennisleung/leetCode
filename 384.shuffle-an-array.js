var Solution = function(nums) {
    this._originalNums = nums;
    this._nums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this._nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    const nums = [...this._nums];
    for(let i = nums.length-1; i>=0; i--) {
        const swapIndex = ~~(Math.random()*nums.length);
        const tmp = nums[i];
        nums[i] = nums[swapIndex];
        nums[swapIndex] = tmp;
    }
    
    return nums;
};

//保证打乱后不在原来的位置上的解法
//leetcode没有这道题可以验证，无法保证正确性
// Solution.prototype.shuffle = function() {
//     const nums = [...this._nums];
//     for(let i = nums.length-1; i>0; i--) {
//         const swapIndex = ~~(Math.random()*i);
//         const tmp = nums[i];
//         nums[i] = nums[swapIndex];
//         nums[swapIndex] = tmp;
//     }
    
//     return nums;
// };