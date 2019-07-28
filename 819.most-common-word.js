/*
 * @lc app=leetcode id=819 lang=javascript
 *
 * [819] Most Common Word
 */
/*
✔ Accepted
  ✔ 47/47 cases passed (68 ms)
  ✔ Your runtime beats 32.05 % of javascript submissions
  ✔ Your memory usage beats 21.7 % of javascript submissions (36.9 MB)

better solution:
const mostCommonWord = (paragraph, banned) => {
    const bset = new Set(banned);
    const parr = paragraph.toLowerCase().split(/\W+/);
    const counts = {};
    for (const w of parr) {
        counts[w] = (counts[w] || 0) + !bset.has(w);
    }
    return Object.entries(counts).reduce((res, arr) => arr[1] > res[1] ? arr : res, ['', -Infinity])[0];
};

//Object.entries(), 返回一个给定对象自身可枚举属性的键值对数组
//const obj = { foo: 'bar', baz: 'abc' }; 
//console.log(Object.entries(obj));  // [['foo', 'bar'], ['baz', 'abc']]
*/

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    const bannedMap = {};
    for(let b of banned) {
        bannedMap[b] = true;
    }

    const cache = {};
    let words = paragraph.split(/[^a-zA-Z]/g);
    for(let word of words) {
        word = word.toLowerCase();
        if(word && !bannedMap[word]) {
            cache[word] = (cache[word] || 0) + 1;
        }
    }

    let max = 0;
    let maxWord = "";
    for(let word in cache) {
        if(cache[word]>max) {
            max = cache[word];
            maxWord = word;
        }
    }

    return maxWord;
};

