/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 *
 * https://leetcode.com/problems/valid-anagram/description/
 *
 * algorithms
 * Easy (51.59%)
 * Total Accepted:    322K
 * Total Submissions: 624.2K
 * Testcase Example:  '"anagram"\n"nagaram"'
 *
 * Given two strings s and t , write a function to determine if t is an anagram
 * of s.
 * 
 * Example 1:
 * 
 * 
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: s = "rat", t = "car"
 * Output: false
 * 
 * 
 * Note:
 * You may assume the string contains only lowercase alphabets.
 * 
 * Follow up:
 * What if the inputs contain unicode characters? How would you adapt your
 * solution to such case?
 * 
 */
/*
better solution:
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    const count = Array(26).fill(0)
    
    const codeA = 'a'.charCodeAt(0)
    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - codeA] ++;
        count[t.charCodeAt(i) - codeA] --;
    }
    for (let num of count) {
        if (num !== 0) return false
    }
    return true
};
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const sMap = {};
    for(let i of s) {
        sMap[i] = parseInt('0'+sMap[i])+1;//trick parseInt return NaN
    }
    const tMap = {};
    for(let i of t) {
        tMap[i] = parseInt('0'+tMap[i])+1;
    }
    for(let key in sMap) {
        if(sMap[key]!==tMap[key]) {
            return false;
        }
        delete tMap[key];
    }

    return !Object.keys(tMap).length;
};

