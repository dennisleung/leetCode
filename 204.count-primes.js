/*
 * @lc app=leetcode id=204 lang=javascript
 *
 * [204] Count Primes
 *
 * https://leetcode.com/problems/count-primes/description/
 *
 * algorithms
 * Easy (28.54%)
 * Total Accepted:    223.4K
 * Total Submissions: 782K
 * Testcase Example:  '10'
 *
 * Count the number of prime numbers less than a non-negative number, n.
 * 
 * Example:
 * 
 * 
 * Input: 10
 * Output: 4
 * Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
 * 
 * 
 */

/*
better solution:
//由于剪枝算法，时间复杂度貌似没想象中那么糟糕？
var countPrimes = function(n) {
    let flagArray = [],
        result = 0;
    for(let i = 2; i < n; i++){
        if(flagArray[i] === undefined){
            // is Primes
            flagArray[i] = 1;
            result++;
            // rm it's multiples
            let j = 2;
            while(i * j < n){
                flagArray[i * j] = 0;
                j++;
            }
        }
    }
    return result;
};
*/
const cache = {};

const isPrimie = (n)=>{
    const _isPrimie = (n)=>{
        if(n==2 || n==3) {
            return true;
        }

        //>=5的质数必然在6的倍数两侧，但是两侧的数不一定是质数
        //6n+2 -> 2(3n+1), 6n+3 -> 3(2n+1), 6n+4 -> 2(3n=2) 不是质数
        if(n%6!==1 && n%6!==5) {
            return false;            
        }

        for(let i = 2; i<=~~Math.sqrt(n); i++) {
            if(~~(n/i)===n/i) {
                return false;
            }
        }

        return true;
    };
    
    if(cache[n]===void 0) {
        cache[n] = _isPrimie(n);
    }
    
    return cache[n];
};

/**
 * @param {number} n
 * @return {boolean}
 */
var countPrimes = function(n) {
    let count = 0;
    for(let i = 2; i<n; i++) {
        isPrimie(i) && count++;
    }

    return count;
};
