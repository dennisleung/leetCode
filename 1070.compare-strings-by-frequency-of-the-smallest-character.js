/*
 * @lc app=leetcode id=1070 lang=javascript
 *
 * [1070] compare-strings-by-frequency-of-the-smallest-character
 */
/*
Runtime: 104 ms, faster than 60.96% of JavaScript online submissions for Compare Strings by Frequency of the Smallest Character.
Memory Usage: 41.5 MB, less than 100.00% of JavaScript online submissions for Compare Strings by Frequency of the Smallest Character.
*/

/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function(queries, words) {
    const f = (str) => {
        let cache = {};
        for(let ch of str) {
            cache[ch] = (cache[ch] || 0) + 1;
        }

        let minCh = "";
        for(let ch in cache) {
            if(!minCh || ch<minCh) {
                minCh = ch;
            }
        }

        return cache[minCh];
    }

    const wordCache = [];
    for(let word of words) {
        wordCache.push(f(word));
    }
    wordCache.sort((a, b)=>b-a);

    return queries.map(query=>{
        let minCount = f(query);
        for(var i = 0; i<wordCache.length; i++) {
            if(minCount>=wordCache[i]) {
                break;
            }
        }
        return i;
    });
};

