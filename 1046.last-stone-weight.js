/*
 * @lc app=leetcode id=1046 lang=javascript
 *
 * [1046] Last Stone Weight
 */
/*
✔ Accepted
  ✔ 70/70 cases passed (60 ms)
  ✔ Your runtime beats 62.11 % of javascript submissions
  ✔ Your memory usage beats 100 % of javascript submissions (34.9 MB)
*/

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    while(stones.length>1) {
        stones.sort((a, b)=>a-b);
        stones.splice(-2, 2, stones[stones.length-1]-stones[stones.length-2]);
    }

    return stones[0];
};

