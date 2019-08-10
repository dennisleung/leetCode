/*
 * @lc app=leetcode id=893 lang=javascript
 *
 * [893] Groups of Special-Equivalent Strings
 */

/*
这道题题目都没看懂。。。

一个解法，先记录下来：
var numSpecialEquivGroups = function(A) {
    return (new Set(
        A.map((word) => [...word].reduce((counter, c, i) => {
                                    counter[c.charCodeAt(0) - 'a'.charCodeAt(0) + (26 * (i % 2))]++;
                                    return counter;
                                }, (new Array(52)).fill(0)).join('-')
        )
    )).size;
};
*/
/**
 * @param {string[]} A
 * @return {number}
 */
var numSpecialEquivGroups = function(A) {
    
};

