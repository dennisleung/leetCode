/*
 * @lc app=leetcode id=771 lang=javascript
 *
 * [771] Jewels and Stones
 */
/*
✔ Accepted
  ✔ 254/254 cases passed (76 ms)
  ✔ Your runtime beats 13.23 % of javascript submissions
  ✔ Your memory usage beats 27.89 % of javascript submissions (34.7 MB)

better solution:
var numJewelsInStones = function(J, S) {
    return S.replace(new RegExp(`[^${J}]`, 'g'), '').length;
};

clean solution:
[...S].filter((char) => J.indexOf(char) > -1 ).length
*/

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    const map = {};
    for(let j of J) {
        map[j] = 1;
    }
    let count = 0;
    for(let s of S) {
        map[s] && count++;
    }

    return count;
};

