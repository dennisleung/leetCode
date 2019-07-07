/*
 * @lc app=leetcode id=717 lang=javascript
 *
 * [717] 1-bit and 2-bit Characters
 */
/*
✔ Accepted
  ✔ 93/93 cases passed (56 ms)
  ✔ Your runtime beats 78.32 % of javascript submissions
  ✔ Your memory usage beats 21.95 % of javascript submissions (35.1 MB)

another solution:
var isOneBitCharacter = function(bits) {
    if(bits.length == 1) return true;
    return bits.join("").replace(/(11|10)/g, "x").slice(-1) != "x";
};

another solution:
const isOneBitCharacter = (bits) => !bits.length ? false : bits.length === 1 ? true : isOneBitCharacter(bits.slice(bits[0] ? 2 : 1));
*/

/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    let last = bits.join("").split(/1\d/g).pop();
    return last[last.length-1] === '0';
};

