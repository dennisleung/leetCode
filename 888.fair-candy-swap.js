/*
 * @lc app=leetcode id=888 lang=javascript
 *
 * [888] Fair Candy Swap
 */
/*
✔ Accepted
  ✔ 75/75 cases passed (104 ms)
  ✔ Your runtime beats 69.95 % of javascript submissions
  ✔ Your memory usage beats 33.33 % of javascript submissions (44.5 MB)

better solution:
var fairCandySwap = function(A, B) {    
    const sum = (first, next) => first + next;
    const sumA = A.reduce(sum);
    const sumB = B.reduce(sum);
    const mid = (sumA + sumB) / 2;
    const setB = new Set(B);      
    
    for (let i=0; i< A.length; i++ ) {     
        const current = A[i];
        const withoutCurrent = sumA - current;
        const searchedItem = mid - withoutCurrent;
        if ( setB.has(searchedItem) &&  sumB - searchedItem + current === mid ) {
            return [ A[i], searchedItem ];
        }        
    }      
};
*/

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
    let aSum = A.reduce((a, b)=>a+b, 0);
    let bSum = B.reduce((a, b)=>a+b, 0);
    let avg = (aSum+bSum)/2;
    let swap = false;
    //try to keey A is less than B
    if(aSum>bSum) {
        [aSum, bSum] = [bSum, aSum];
        [A, B] = [B, A];
        swap = true;
    }

    let bCache = {};
    for(let b of B) {
        bCache[b] = 1;
    }
    let aDiff = avg - aSum;
    let result = [];
    for(let a of A) {
        if(bCache[a+aDiff]) {
            result = [a, a+aDiff];
        }
    }

    return swap ? result.reverse() : result;
};

