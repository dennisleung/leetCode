/*
 * @lc app=leetcode id=409 lang=javascript
 *
 * [409] Longest Palindrome
 *
 * https://leetcode.com/problems/longest-palindrome/description/
 *
 * algorithms
 * Easy (47.76%)
 * Total Accepted:    93.8K
 * Total Submissions: 196.3K
 * Testcase Example:  '"abccccdd"'
 *
 * Given a string which consists of lowercase or uppercase letters, find the
 * length of the longest palindromes that can be built with those letters.
 * 
 * This is case sensitive, for example "Aa" is not considered a palindrome
 * here.
 * 
 * Note:
 * Assume the length of given string will not exceed 1,010.
 * 
 * 
 * Example: 
 * 
 * Input:
 * "abccccdd"
 * 
 * Output:
 * 7
 * 
 * Explanation:
 * One longest palindrome that can be built is "dccaccd", whose length is 7.
 * 
 * 
 */
/*
✔ Accepted
  ✔ 95/95 cases passed (64 ms)
  ✔ Your runtime beats 97.75 % of javascript submissions
  ✔ Your memory usage beats 15.63 % of javascript submissions (36.3 MB)
*/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const cache = {};
    let length = 0;
    for(let ch of s) {
        if(cache[ch]) {
            delete cache[ch];
            length += 2;
        }else {
            cache[ch] = 1;
        }
    }

    let hasOdd = false;
    for(let i in cache) {//判断空对象的方法，如果用Object.keys，会多消耗16ms（total 80ms），使用for-in runtime total(64ms)， beat 97.75% of javascript submissions。
        hasOdd = true;
        break;
    }
    return length + (hasOdd ? 1 : 0);
};

