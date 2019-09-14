/*
 * @lc app=leetcode id=1071 lang=javascript
 *
 * [1071] Greatest Common Divisor of Strings
 */
/*
Runtime: 424 ms, faster than 5.13% of JavaScript online submissions for Greatest Common Divisor of Strings.
Memory Usage: 109.3 MB, less than 100.00% of JavaScript online submissions for Greatest Common Divisor of Strings.

better solution(GCD):
const gcdOfStrings = (str1, str2) => {
  if (str1 + str2 !== str2 + str1) return '';
  const gcd = (a, b) => (0 === b ? a : gcd(b, a % b));
  return str1.substring(0, gcd(str1.length, str2.length));
};
*/

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if(str1.length<str2.length) {//str2's length is smaller than str1's
        [str1, str2] = [str2, str1];
    }
    for(let i = str2.length; i>0; i--) {
        let subStr = str2.slice(0, i);
        let reg = new RegExp(`^(${subStr}){1,}$`);
        if(reg.test(str1) && reg.test(str2)) {
            return subStr;
        }
    }

    return "";
};

