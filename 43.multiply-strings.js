/*
 * @lc app=leetcode id=43 lang=javascript
 *
 * [43] Multiply Strings
 */
/*
311/311 cases passed (136 ms)
Your runtime beats 8.14 % of javascript submissions
Your memory usage beats 25 % of javascript submissions (39.4 MB)

shorter solution:
var multiply = function(num1, num2) {
    let m = num1.length, n = num2.length
    let res = Array(m + n).fill(0)
    for (let i = m - 1; i>= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            let temp = +num1.charAt(i) * +num2.charAt(j)
            let posLow = i + j + 1
            let posHigh = i + j
            temp += res[posLow]
            res[posLow] = temp % 10
            res[posHigh] += Math.trunc(temp / 10)
        }
    }
    while (res[0] === 0) {
        res.shift()
    }
    return res.length === 0 ? "0" : res.join('')
};
*/
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const add = function(num1, num2) {
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

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    const mulDigit = (str1, d) => {
        const result = [];
        let carry = 0;
        for(let i = num1.length-1; i>=0; i--) {
            let tmp = parseInt(num1[i]) * parseInt(d) + carry;
            carry = ~~(tmp/10);
            result.unshift(tmp%10);
        }
        if(carry>0) {
            result.unshift(carry);
        }
        return result.join("");
    }
    const arr = [];
    for(let i = num2.length-1; i>=0; i--) {
        arr.push(mulDigit(num1, num2[i])+(new Array(num2.length-i-1).fill("0").join("")));
    }

    return arr.reduce((a, b)=>add(a, b), "0").replace(/^0+(?!$)/, "");
};
// test cases:
// console.log(multiply("2", "3"));//6
// console.log(multiply("123", "456"));//56088
// console.log(multiply("1234567891112233", "91234567891112233"));//112635268077866276397233802246289
// console.log(multiply("9133", "0"));//0
// @lc code=end

