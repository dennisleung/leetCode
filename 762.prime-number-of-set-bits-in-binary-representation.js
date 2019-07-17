/*
 * @lc app=leetcode id=762 lang=javascript
 *
 * [762] Prime Number of Set Bits in Binary Representation
 */
/*
✔ Accepted
  ✔ 200/200 cases passed (380 ms)
  ✔ Your runtime beats 13.98 % of javascript submissions
  ✔ Your memory usage beats 55.56 % of javascript submissions (36.8 MB)

better solution:
var countPrimeSetBits = function(L, R) {
    let result = 0;
    let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23];//R - L will be at most 10000.因此可以简化isPrime的判断

    for(let i = L; i <= R; i++){
      let num2 = i.toString(2);
      let count = 0;

      num2.split('').forEach(sym => {
        if(sym == 1) count++;
      });

      if(primes.indexOf(count) > -1) result++;
    }

    return result;
};
*/


const isPrime = (num)=>{
    if(num==1) {
        return false;
    }
    let cursor = 2;
    const sqrt = ~~Math.sqrt(num);
    while(num>1 && cursor<=sqrt) {
        if(num%cursor==0) {
            return false;
        }
        cursor++;
    }

    return true;
};

/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function(L, R) {
    const get1s = (num)=>{
        return num.toString(2).split("").filter(v=>v==1).length;
    };

    let count = 0;
    for(let i = L; i<=R; i++) {
        if(isPrime(get1s(i))) {
            count++;
        }
    }

    return count;
};

