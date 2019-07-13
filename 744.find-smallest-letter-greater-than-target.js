/*
 * @lc app=leetcode id=744 lang=javascript
 *
 * [744] Find Smallest Letter Greater Than Target
 */
/*
✔ Accepted
  ✔ 165/165 cases passed (60 ms)
  ✔ Your runtime beats 83.96 % of javascript submissions
  ✔ Your memory usage beats 32.39 % of javascript submissions (37.3 MB)
*/
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    for(let letter of letters) {
        if(letter>target) {
            return letter;
        }
    }

    return letters[0];
};

