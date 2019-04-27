/*
 * @lc app=leetcode id=441 lang=javascript
 *
 * [441] Arranging Coins
 */
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    return ~~(Math.sqrt(2*n+0.25)-0.5);
};

