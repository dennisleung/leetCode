/*
 * @lc app=leetcode id=728 lang=javascript
 *
 * [728] Self Dividing Numbers
 */

/*
✔ Accepted
  ✔ 31/31 cases passed (60 ms)
  ✔ Your runtime beats 80.59 % of javascript submissions
  ✔ Your memory usage beats 21.9 % of javascript submissions (37.8 MB)

一种思路，但是时间复杂度感觉不好：
const isSelfDividing = n => 
  [...`${n}`]
    .reduce((a, digit) => 
      digit !== 0 && n % digit === 0 && a, true);

another solution:
var selfDividingNumbers = function(left, right) {
    let r,d;
    const nums = [];

    for (let num=left; num<=right; num+=1) {
      d=num;
      r=num%10;
      while (r && !(num%r)) {
        d=Math.floor(d/10);
        r=d%10;
      }
      if (d===0) nums.push(num);
    }
    return nums;
};
*/
var isSelfDividingNumbers = function(num) {
    let digits = `${num}`.split("");
    for(let digit of digits) {
        if(digit==="0") {
            return false;
        }
        if(num%digit!==0) {
           return false; 
        }
    }

    return true;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let result = [];
    for(let i = left; i<=right; i++) {
        if(isSelfDividingNumbers(i)) {
            result.push(i);
        }
    }

    return result;
};

