/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */
/*
✔ Accepted
  ✔ 987/987 cases passed (80 ms)
  ✔ Your runtime beats 91.74 % of javascript submissions
  ✔ Your memory usage beats 100 % of javascript submissions (36.5 MB)

better solution:
var lengthOfLongestSubstring = function(s) {
  var start = 0, maxLen = 0;
  var map = new Map();
  for(var i = 0; i < s.length; i++) {
      var ch = s[i];
      if(map.get(ch) >= start) start = map.get(ch) + 1;
      map.set(ch, i);
    
      if(i - start + 1 > maxLen) maxLen = i - start + 1;
  }
  return maxLen;
};

better solution:
function lengthOfLongestSubstring(s) {
    const map = {};
    var left = 0;
    
    return s.split('').reduce((max, v, i) => {
        left = map[v] >= left ? map[v] + 1 : left;
        map[v] = i;
        return Math.max(max, i - left + 1);
    }, 0);
}
*/ 
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length<2) {
        return s.length;
    }
    let start = 0;
    let end = 1;
    let max = 0;
    for(let i = end, len = s.length; i<len; i++) {
        let ch = s[end];
        for(let j = start; j<i; j++) {
            if(s[j]==s[i]) {
                start = j+1;
                break;
            }
        }

        end = i;
        max = Math.max(max, end-start+1);
    }
    
    return max;
};

