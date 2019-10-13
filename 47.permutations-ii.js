/*
 * @lc app=leetcode id=47 lang=javascript
 *
 * [47] Permutations II
 */
/*
30/30 cases passed (80 ms)
Your runtime beats 52.86 % of javascript submissions
Your memory usage beats 22.22 % of javascript submissions (37.7 MB)
*/
// @lc code=start
const swap = (arr, i, j) => {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums, size=0, index=0, result=[]) {
    size = size || nums.length;
    if(index>=size) {
        result.push([...nums]);
    }else {
        const swapCache = {};//add cache for removing duplicate num
        for(let i = index; i<nums.length; i++) {
            if(swapCache[nums[i]]) {
                continue;
            }
            swapCache[nums[i]] = 1;
            swap(nums, index, i);
            permuteUnique(nums, size, index+1, result);
            swap(nums, index, i);
        }
    }

    return result;
};
// test cases:
// console.log(permuteUnique([1,2,3]));
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]
// 
// console.log(permuteUnique([1,1,2]));
// [
//   [1,1,2],
//   [1,2,1],
//   [2,1,1]
// ]
// 
// console.log(permuteUnique([2,2,1,1]));
// [[1,1,2,2],[1,2,1,2],[1,2,2,1],[2,1,1,2],[2,1,2,1],[2,2,1,1]]

// @lc code=end

