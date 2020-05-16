/*
 * @lc app=leetcode id=1128 lang=javascript
 *
 * [1128] Number of Equivalent Domino Pairs
 */
/*
✔ Accepted
  ✔ 19/19 cases passed (76 ms)
  ✔ Your runtime beats 73.63 % of javascript submissions
  ✔ Your memory usage beats 100 % of javascript submissions (42.9 MB)
*/
/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    const cache = {};
    let count = 0;
    let cacheKey = "";
    for(let [first, second] of dominoes) {
        cacheKey = `${first}_${second}`;
        cache[cacheKey] = cache[cacheKey] || 0;
        count += cache[cacheKey];
        cache[cacheKey]++;

        if(first!=second) {//防止类似1_1这种重复计算
            cacheKey = `${second}_${first}`;
            cache[cacheKey] = cache[cacheKey] || 0;
            count += cache[cacheKey];
        }
    }

    return count;
};

