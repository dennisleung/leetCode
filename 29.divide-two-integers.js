/*
 * @lc app=leetcode id=29 lang=javascript
 *
 * [29] Divide Two Integers
 */
/*
989/989 cases passed (68 ms)
Your runtime beats 86.04 % of javascript submissions
Your memory usage beats 16.67 % of javascript submissions (37 MB)
another solution:
const divideHelp = (dividend, divisor) => {
  if (dividend - divisor === 0) return [1, 0]
  if (dividend - divisor < 0) return [0, divisor - dividend]
  if (dividend - divisor - divisor === 0) return [2, 0]
  if (dividend - divisor - divisor < 0) return [1, dividend - divisor]
  
  let [quotient, remainder] = divideHelp(dividend, divisor + divisor)
  quotient += quotient
  
  if (remainder - divisor >= 0) {
    quotient += 1
    remainder -= divisor
  }
  
  return [quotient, remainder]
}

var divide = function(dividend, divisor) {
    let [quotient, remainder] = divideHelp(Math.abs(dividend), Math.abs(divisor))
    if(divisor < 0 && dividend > 0) || (divisor > 0 && dividend < 0) {
        quotient = -quotient;
    }
    return Math.max(Math.min(2147483647, quotient), -2147483648) // truncate to signed int range [−2^31, 2^31 − 1]
};
*/
// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    const subDivide = (a, b)=>{//a,b均为正数
        let q = 0;
        let tmp = 0;
        while(tmp<=a) {
            tmp += b;
            q++;
        }
        q--;
        return [q, a-tmp+b];
    };
    
    let _dividend = Math.abs(dividend).toString().split("");
    let di = Math.abs(divisor);
    let _divisor = di.toString().split("");
    let tmp = "";
    let result = "";
    let flag = false;
    while(true) {
        if(!_dividend.length) {
            break;
        }
        tmp = tmp + _dividend.shift();
        let _tmp = parseInt(tmp);
        if(_tmp<di) {
            if(flag) {
                result = result + "0";
            }
        }else {
            flag = true;
            let [q, left] = subDivide(_tmp, di);
            result = result + q;
            if(left>0) {
                tmp = left + "";
            }else {
                tmp = "";
            }
        }
    }
   
    let quotient = parseInt(result) || 0;
    if(quotient>0) {
        return (dividend>0)^(divisor>0) ? -quotient : Math.min(Math.pow(2, 31)-1, quotient);
    }else {
        return 0;
    }
};
//test case:
// console.log(divide(10, 3));//3
// console.log(divide(7, -3));//-2
// console.log(divide(10, -5));//-2
// console.log(divide(0, 1));//0
// console.log(divide(0, -1));//0
// console.log(divide(Math.pow(2, 31), 1));//2147483647
// console.log(divide(-2147483648, -1));//2147483647
// console.log(divide(-2147483648, 1));//-2147483648
// console.log(divide(2147483647, 2));//1073741823
// @lc code=end

