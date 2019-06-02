/*
 * @lc app=leetcode id=575 lang=javascript
 *
 * [575] Distribute Candies
 */

/*
✔ Accepted
  ✔ 205/205 cases passed (256 ms)
  ✔ Your runtime beats 27.36 % of javascript submissions
  ✔ Your memory usage beats 5.34 % of javascript submissions (63.2 MB)

better solution:
var distributeCandies = function(candies) {
    return Math.min(new Set(candies).size, candies.length / 2);
};
*/

/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
    const typeMap = {};
    for(let candy of candies) {
        typeMap[candy] = 1;
    }
    const typeCount = Object.keys(typeMap).length;//可以改成Set然后用Set.size减少一次Object.keys
    
    return Math.min(typeCount, candies.length/2);
};

