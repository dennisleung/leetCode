/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 *
 * https://leetcode.com/problems/first-unique-character-in-a-string/description/
 *
 * algorithms
 * Easy (49.65%)
 * Total Accepted:    253.6K
 * Total Submissions: 510.2K
 * Testcase Example:  '"leetcode"'
 *
 * 
 * Given a string, find the first non-repeating character in it and return it's
 * index. If it doesn't exist, return -1.
 * 
 * Examples:
 * 
 * s = "leetcode"
 * return 0.
 * 
 * s = "loveleetcode",
 * return 2.
 * 
 * 
 * 
 * 
 * Note: You may assume the string contain only lowercase letters.
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const cache = [];
    for(let i = 0, len = s.length; i<len; i++) {
        let ch = s[i];
        if(!cache[ch] && s.lastIndexOf(ch)==i) {
            return i;
        }else {
            cache[ch] = 1;
        }
    }
    return -1;
};

