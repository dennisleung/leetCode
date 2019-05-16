/*
 * @lc app=leetcode id=507 lang=javascript
 *
 * [507] Perfect Number
 */
/*
✔ Accepted
  ✔ 156/156 cases passed (60 ms)
  ✔ Your runtime beats 97.22 % of javascript submissions
  ✔ Your memory usage beats 11.65 % of javascript submissions (35.1 MB)

runtime O(n) solution:
var checkPerfectNumber = function(num) {
  if (num === 1) return false;
  let sum = 1;
  for(let i = 2; i <= Math.floor(Math.sqrt(num)); ++i) {
    if ( num % i === 0) {
      sum  += (num/i) + i; 
    }
  }
  if (sum === num) {
    return true;
  } else {
    return false;
  }
};

*/

const getDivisors = function(num) {
    const result = {};
    for(let i = 1, max = ~~Math.sqrt(num); i<=max; i++) {
        let another = ~~(num/i);
        if(i*another==num) {
            result[i] = 1;
            result[another] = 1;
        }
    }

    return Object.keys(result);
};

/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if(num<=0) {
        return false;
    }
    return getDivisors(num).filter((a)=>num!=a).reduce((a, b)=>parseInt(a)+parseInt(b), 0) == num;
};

