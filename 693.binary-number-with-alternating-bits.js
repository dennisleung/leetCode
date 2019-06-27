/*
 * @lc app=leetcode id=693 lang=javascript
 *
 * [693] Binary Number with Alternating Bits
 */

 /*
 ✔ Accepted
  ✔ 204/204 cases passed (52 ms)
  ✔ Your runtime beats 89.51 % of javascript submissions
  ✔ Your memory usage beats 92.75 % of javascript submissions (33.7 MB)


better solution:
var hasAlternatingBits = function(n) {
    let str = n.toString(2);
    return str.indexOf('00') == -1 && str.indexOf('11') == -1;
};

better solution
var hasAlternatingBits = function(n) {
    var arr = n.toString(2).split('')
    return arr.every((m, n) => m !== arr[n + 1])
};

better solution:
function bitSolution(number){
    //      10101010101
    //  +    1010101010    ( number >> 1 )
    //  ---------------
    //  =   11111111111    ( this is stored in the variable 'tmp' )
    //  &  100000000000
    //  ---------------
    //  =             0    ( power of two )
    let tmp = ( number >> 1 ) + number;
    return( (tmp & tmp + 1) === 0);
}
better solution:
function regexSolution(number){
    // starts with 1
    // { w{0,1}*: character cannot occur twice in a row }
    return !!/^(10)*1?$/g.test((n).toString(2));
}
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    let length = n.toString(2).length;
    const A = parseInt(Number(2863311530).toString(2).slice(-length), 2);//从右往左，奇数位为0，偶数位为1
    const B = parseInt(Number(1431655765).toString(2).slice(-length), 2);//从右往左，奇数位为1，偶数位为0
    return ((n&A)==A && (n|A)==A) || ((n&B)==B && (n|B)==B);
};

