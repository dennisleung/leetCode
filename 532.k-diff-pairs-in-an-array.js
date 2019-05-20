/*
 * @lc app=leetcode id=532 lang=javascript
 *
 * [532] K-diff Pairs in an Array
 */
/*
✔ Accepted
  ✔ 72/72 cases passed (68 ms)
  ✔ Your runtime beats 93.99 % of javascript submissions
  ✔ Your memory usage beats 46.26 % of javascript submissions (39.4 MB)
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    if(k<0) {//absolute distance must >= 0
        return 0;
    }
    let cache = {};
    let count = 0;
    for(let num of nums) {
        cache[num] = (cache[num] || 0)+1;
    }
    for(let num in cache) {
        if(k==0) {
            if(cache[num]>1) {
                count++;
            }
        }else if(cache[parseInt(num)+k]) {
            count++;
        }
    }

    return count;
};

