/*
 * @lc app=leetcode id=1160 lang=javascript
 *
 * [1160] Find Words That Can Be Formed by Characters
 */
/*
✔ Accepted
  ✔ 36/36 cases passed (232 ms)
  ✔ Your runtime beats 35.62 % of javascript submissions
  ✔ Your memory usage beats 100 % of javascript submissions (44 MB)
*/
/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    const cache = {};
    for(let ch of chars) {
        cache[ch] = (cache[ch] || 0) + 1;
    }

    words = words.filter(word=>{
        let _cache = Object.assign({}, cache);
        for(let ch of word) {
            if(!_cache[ch]) {
                return false;
            }
            _cache[ch]--;
        }

        return true;
    });

    return words.reduce((sum, word)=>sum+word.length, 0);
};

