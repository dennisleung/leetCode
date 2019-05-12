/*
 * @lc app=leetcode id=500 lang=javascript
 *
 * [500] Keyboard Row
 */

/*
✔ Accepted
  ✔ 22/22 cases passed (52 ms)
  ✔ Your runtime beats 99.24 % of javascript submissions
  ✔ Your memory usage beats 6.67 % of javascript submissions (34 MB)

better solution:
var findWords = function(words) {
    return words.filter((word) => (
        /\b[qwertyuiop]+\b/i.test(word) ||
        /\b[asdfghjkl]+\b/i.test(word) ||
        /\b[zxcvbnm]+\b/i.test(word)
    ));
};
*/ 
const keyboardMap = {
    "A":2,
    "B":1,
    "C":1,
    "D":2,
    "E":3,
    "F":2,
    "G":2,
    "H":2,
    "I":3,
    "J":2,
    "K":2,
    "L":2,
    "M":1,
    "N":1,
    "O":3,
    "P":3,
    "Q":3,
    "R":3,
    "S":2,
    "T":3,
    "U":3,
    "V":1,
    "W":3,
    "X":1,
    "Y":3,
    "Z":1,
};
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    return words.filter(function(word) {
        word = word.toUpperCase();
        let firstLetterPos = keyboardMap[word[0]];
        for(let ch of word) {
            if(firstLetterPos!=keyboardMap[ch]) {
                return false;
            }
        }

        return true;
    });
};

