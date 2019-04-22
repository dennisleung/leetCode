/*
 * @lc app=leetcode id=405 lang=javascript
 *
 * [405] Convert a Number to Hexadecimal
 *
 * https://leetcode.com/problems/convert-a-number-to-hexadecimal/description/
 *
 * algorithms
 * Easy (41.79%)
 * Total Accepted:    45.9K
 * Total Submissions: 109.7K
 * Testcase Example:  '26'
 *
 * 
 * Given an integer, write an algorithm to convert it to hexadecimal. For
 * negative integer, two’s complement method is used.
 * 
 * 
 * Note:
 * 
 * All letters in hexadecimal (a-f) must be in lowercase.
 * The hexadecimal string must not contain extra leading 0s. If the number is
 * zero, it is represented by a single zero character '0'; otherwise, the first
 * character in the hexadecimal string will not be the zero character.
 * The given number is guaranteed to fit within the range of a 32-bit signed
 * integer.
 * You must not use any method provided by the library which converts/formats
 * the number to hex directly.
 * 
 * 
 * 
 * Example 1:
 * 
 * Input:
 * 26
 * 
 * Output:
 * "1a"
 * 
 * 
 * 
 * Example 2:
 * 
 * Input:
 * -1
 * 
 * Output:
 * "ffffffff"
 * 
 * 
 */

/*
better solution:
var toHex = function(num) {
    return [...'76543210'].map(x => '0123456789abcdef'[(num >>> (x * 4)) & 15]).join('').replace(/^0+(?!$)/g, '');
};
>>> 为无符号右移，>> 为有符号右移
果然大神都是位运算6得飞起。。这里转16进制的方法非常巧妙（&15然后map index），而不是用常见的if(digit>9){String.fromCharCode('a'.charCodeAt(0)+digit-10)}
*/

/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    //先转成二进制
    let n = Math.abs(num);
    let twoArr = [];
    while(n>=1) {
        twoArr.unshift(n%2);
        n = ~~(n/2);
    }

    twoArr = Array(33).join("0").split("").concat(twoArr).slice(-32);
    
    //如果是负数，求补码
    if(num<0) {
        twoArr = twoArr.map(v=>v==0?1:0);
        let i = 31;
        let carry = 1;
        while(i>=0) {
            if(twoArr[i] && carry) {
                twoArr[i] = 0;
                carry = 1;
            }else {
                if(carry) {
                    twoArr[i] = 1;
                }
                break;
            }
            i--;
        }
    }

    let hexArr = [];
    while(twoArr.length) {
        let digit = parseInt(twoArr.slice(0, 4).join(""), 2);
        twoArr = twoArr.slice(4);
        if(digit>9) {
            digit = String.fromCharCode('a'.charCodeAt(0)+digit-10);
        }
        hexArr.push(digit);
    }

    let result = hexArr.join("").replace(/^0+/, "");
    return result || "0";
};

