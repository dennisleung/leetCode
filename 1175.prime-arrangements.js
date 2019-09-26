/*
 * @lc app=leetcode id=1175 lang=javascript
 *
 * [1175] Prime Arrangements
 */
/*
✔ Accepted
  ✔ 100/100 cases passed (48 ms)
  ✔ Your runtime beats 96.77 % of javascript submissions
  ✔ Your memory usage beats 100 % of javascript submissions (34.5 MB)
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
 * 获取阶乘
 **/
const getPermutationSum = function(n) {
    let result = BigInt(1);
    for(let i = 2; i<=n; i++) {
        result *= BigInt(i);
    }
    return result;
};

const primeCache = [];
for(let i = 1; i<=100; i++) {
    primeCache[i] = isPrime(i);
}

/**
 * @param {number} n
 * @return {number}
 */
var numPrimeArrangements = function(n) {
    let primeCount = 0;
    for(let i = 1; i<=n; i++) {
        primeCache[i] && primeCount++;
    }

    return (getPermutationSum(primeCount) * getPermutationSum(n-primeCount))%BigInt(10**9+7);
};

