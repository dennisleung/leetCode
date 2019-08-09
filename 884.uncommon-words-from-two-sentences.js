/*
 * @lc app=leetcode id=884 lang=javascript
 *
 * [884] Uncommon Words from Two Sentences
 */
/*
✔ Accepted
  ✔ 53/53 cases passed (56 ms)
  ✔ Your runtime beats 61.61 % of javascript submissions
  ✔ Your memory usage beats 50 % of javascript submissions (34.2 MB)
*/

/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
    const cache = {};
    const countWords = (str)=> {
        for(let word of str.split(/\s+/g)) {
            cache[word] = (cache[word] || 0) + 1;
        }
    };
    countWords(A);
    countWords(B);
    const result = [];
    for(let word in cache) {
        if(cache[word]<2) {
            result.push(word);
        }
    }

    return result;
};

