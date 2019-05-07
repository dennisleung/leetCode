/*
 * @lc app=leetcode id=476 lang=javascript
 *
 * [476] Number Complement
 */
/*
✔ Accepted
  ✔ 149/149 cases passed (60 ms)
  ✔ Your runtime beats 87.94 % of javascript submissions
  ✔ Your memory usage beats 18.18 % of javascript submissions (33.8 MB)


another solution（但是runtime没有更优）
var findComplement = function(num) {
    if(num==1) {//特殊处理
        return 0;
    }
    return num ^ (Math.pow(2, Math.floor(Math.log2(num))+1)-1);//这里不能用Math.ceil代替Math.floor+1，如2
};

//这个解法没看懂，可以再研究下：
var findComplement = function(num) {
    return parseInt((~num ^ 1 << 31).toString(2).substr(-num.toString(2).length), 2);
};
*/

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let xorNum = parseInt(new Array(num.toString(2).length+1).join("1"), 2);
    return num ^ xorNum;
};

