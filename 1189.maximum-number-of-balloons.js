/*
 * @lc app=leetcode id=1189 lang=javascript
 *
 * [1189] Maximum Number of Balloons
 */
/*
✔ Accepted
  ✔ 23/23 cases passed (60 ms)
  ✔ Your runtime beats 74.83 % of javascript submissions
  ✔ Your memory usage beats 100 % of javascript submissions (36.3 MB)
*/
/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    const cache = {"b":0, "a":0, "l":0, "o":0, "n":0};
    for(let ch of text) {
        cache[ch]++;
    }

    return Math.min(cache["b"], cache["a"], Math.floor(cache["l"]/2), Math.floor(cache["o"]/2), cache["n"]);
};

