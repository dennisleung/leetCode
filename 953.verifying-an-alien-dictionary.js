/*
 * @lc app=leetcode id=953 lang=javascript
 *
 * [953] Verifying an Alien Dictionary
 */
/*
✔ Accepted
  ✔ 115/115 cases passed (72 ms)
  ✔ Your runtime beats 13.62 % of javascript submissions
  ✔ Your memory usage beats 50 % of javascript submissions (36.9 MB)
*/

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    let originalStr = words.join("|");
    const map = {};
    for(let i = 0; i<order.length; i++) {
        map[order[i]] = i;
    }
    words.sort((a, b) => {
        for(let i = 0, len = Math.min(a.length, b.length); i<len; i++) {
            if(map[a[i]]<map[b[i]]) {
                return -1;
            }else if(map[a[i]]>map[b[i]]) {
                return 1;
            }
        }

        return a.length - b.length;
    });

    return words.join("|")==originalStr;
};

