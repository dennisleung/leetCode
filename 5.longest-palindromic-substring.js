/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */
/*
✔ Accepted
  ✔ 103/103 cases passed (132 ms)
  ✔ Your runtime beats 50.99 % of javascript submissions
  ✔ Your memory usage beats 65.22 % of javascript submissions (36.4 MB)

这道题没想出来，一直ac不过去。。。
有一个专门处理最长回文串的算法，非常复杂，可以了解下：
https://www.cnblogs.com/mini-coconut/p/9074315.html

another solution:
var longestPalindrome = function(s) {
    if (s === "") {
        return "";
    }
    
    let str = Array.from(s);
    let res = [-1, -1]; // [maxLen, index]
    str.forEach((ch, i) => {
        isPalindrom(str, i, i, res);
        isPalindrom(str, i , i + 1, res);
    });
    
    return s.substring(res[1], res[1] + res[0]);
};

function isPalindrom(str, left, right, res) {
    let cur = 0;
    while (right < str.length && left >= 0 && str[left] === str[right]) {
        cur = right - left + 1;
        if (cur > res[0]) {
            res[1] = left;
            res[0] = cur;
        } 
        left--;
        right++;
    }
}
*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let maxStr = "";
    for(let i = 0, len = s.length; i<len; i++) {
        for(let j = 0; j<2; j++) {
            let start = i;
            let end = i+j;
            while(s[start] && s[start]===s[end]) {
                start--;
                end++;
            }
            if(end-start-1>maxStr.length) {//注意这里计算长度的方式，因为执行到这里的start和end是溢出（不合法）的，所以要-1
                maxStr = s.slice(start+1, end);
            }
        }
    }

    return maxStr;
};

