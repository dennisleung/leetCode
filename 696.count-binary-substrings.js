/*
 * @lc app=leetcode id=696 lang=javascript
 *
 * [696] Count Binary Substrings
 */
/*
✔ Accepted
  ✔ 90/90 cases passed (68 ms)
  ✔ Your runtime beats 92.73 % of javascript submissions
  ✔ Your memory usage beats 96.58 % of javascript submissions (37.7 MB)

another solution:
const countBinarySubstrings = (s) => s.replace(/01/g, '0,1').replace(/10/g, '1,0').split(',')
    .reduce((res, a, i, arr) => i ? res + Math.min(a.length, arr[--i].length) : 0, 0);


better solution:
var countBinarySubstrings = function(s) {
    if (s.length <= 1) return 0;
    var preRun = 0; 
    var curRun = 1;
    var count = 0 

    for (var i = 1; i < s.length; i++) { 
        if (s[i - 1] === s[i]) curRun++; 
        else { 
            preRun = curRun; 
            curRun = 1;     
        }
        if (preRun >= curRun) count++;
    }
    return count;   
};
*/

/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    let count = 0;
    for(let start = 0; start<s.length-1; start++) {
        if(s[start]!=s[start+1]) {
            count++;
            for(let i = start-1, j = start+2; i>=0&&j<s.length; i--,j++) {
                if(s[i]==s[start]&&s[j]==s[start+1]) {
                    count++;
                }else {
                    break;
                }
            }
        }
    }
    return count;
};

