/*
 * @lc app=leetcode id=415 lang=javascript
 *
 * [415] Add Strings
 */
/*
思路差不多，但是更简洁的解法：
var addStrings = function(num1, num2) {
    let ret = '', carry = 0, i = num1.length - 1, j = num2.length - 1;
    while (i >= 0 || j >= 0 || carry === 1) {
        let n1 = i >= 0 ? num1[i--] : 0;
        let n2 = j >= 0 ? num2[j--] : 0;
        let sum = carry + n1 % 10 + n2 % 10;
        carry = Math.trunc(sum / 10);
        ret = (sum % 10) + ret;
    }
    return ret;
};

不像 Math 的其他三个方法： Math.floor()、Math.ceil()、Math.round() ，Math.trunc() 的执行逻辑很简单，仅仅是删除掉数字的小数部分和小数点，不管参数是正数还是负数。
----- MDN

*/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    num1 = Array.from(num1).reverse();
    num2 = Array.from(num2).reverse();
    let carry = 0;
    let result = [];
    for(let i = 0, len = Math.max(num1.length, num2.length); i<len; i++) {
        let cur = parseInt('0'+num1[i]) + parseInt('0'+num2[i]) + carry;
        if(cur>9) {
            cur = cur % 10;
            carry = 1;
        }else {
            carry = 0;
        }
        result.push(cur);
    }
    return (carry?"1":"") + result.reverse().join("");
};

