/*
 * @lc app=leetcode id=8 lang=javascript
 *
 * [8] String to Integer (atoi)
 */
/*
✔ Accepted
  ✔ 1079/1079 cases passed (92 ms)
  ✔ Your runtime beats 19.91 % of javascript submissions
  ✔ Your memory usage beats 57.14 % of javascript submissions (36.1 MB)

better solution:
var myAtoi = function(str) { 
  const match = str.match(/^ *([+-]{0,1}[0-9]+)/);
  return match ? Math.min(2147483647, Math.max(-2147483648, match[1])) : 0;
};
 */


const INT_MAX = Math.pow(2, 31)-1;
const INT_MIN = -Math.pow(2, 31);

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    //其实不需要想那么复杂，parseInt("-0012a12")能正确得到-12
    str = str.replace(/(^\s+)/, "");
    let match = /([\d.]+)/.exec(str);
    if(!match) {
        return 0;
    }
    str = str.slice(0, match.index + match[0].length);
    let value = /^[+-]?\d+(\.\d+)?$/.test(str) ? parseInt(str, 10) : 0;
    if(value>0) {
        value = Math.min(value, INT_MAX);
    }else if(value<0) {
        value = Math.max(value, INT_MIN);
    }

    return value;
};
// console.log(myAtoi("42"));//42
// console.log(myAtoi("   -42"));//-42
// console.log(myAtoi("4193 with words"));//4193
// console.log(myAtoi("words and 987"));//0
// console.log(myAtoi(""));//0
// console.log(myAtoi(" 9 8d"));//0
// console.log(myAtoi("-91283472332"));//-2147483648
// console.log(myAtoi("91283472332"));//2147483647
// console.log(myAtoi("3.14159"));//3
// console.log(myAtoi("3."));//3
// console.log(myAtoi("+1"));//1
// console.log(myAtoi("  -0012a42"));//-12

