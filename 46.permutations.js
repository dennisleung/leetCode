/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */
/*
25/25 cases passed (64 ms)
Your runtime beats 85.45 % of javascript submissions
Your memory usage beats 52 % of javascript submissions (36.3 MB)

这道题不需要考虑元素很多的情况，因为n!在n很大的时候结果是很恐怖的。

//dp solution:
var permute = function(nums, n = 0) {
    if (n >= nums.length) return [[]];
    const res = [];
    const prevs = permute(nums, n + 1);  // permutations of elements after n
    for (let prev of prevs) {
        for (let i = 0; i <= prev.length; i++) {
            let p = prev.slice(0);
            p.splice(i, 0, nums[n]);  // successively insert element n
            res.push(p);
        }
    }
    return res;
};
*/
const swap = (arr, i, j) => {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums, size=0, index=0, result=[]) {
    size = size || nums.length;
    if(index>=size) {
        result.push([...nums]);
    }else {
        for(let i = index; i<nums.length; i++) {//很通用的backTracing解法
            swap(nums, index, i);
            permute(nums, size, index+1, result);
            swap(nums, index, i);
        }
    }

    return result;
};
//test cases:
//console.log(permute([1,2,3]));
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]
// @lc code=end

