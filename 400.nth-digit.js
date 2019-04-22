/*
 * @lc app=leetcode id=400 lang=javascript
 *
 * [400] Nth Digit
 *
 * https://leetcode.com/problems/nth-digit/description/
 *
 * algorithms
 * Easy (30.21%)
 * Total Accepted:    46.3K
 * Total Submissions: 153.2K
 * Testcase Example:  '3'
 *
 * Find the n^th digit of the infinite integer sequence 1, 2, 3, 4, 5, 6, 7, 8,
 * 9, 10, 11, ... 
 * 
 * Note:
 * n is positive and will fit within the range of a 32-bit signed integer (n <
 * 2^31).
 * 
 * 
 * Example 1:
 * 
 * Input:
 * 3
 * 
 * Output:
 * 3
 * 
 * 
 * 
 * Example 2:
 * 
 * Input:
 * 11
 * 
 * Output:
 * 0
 * 
 * Explanation:
 * The 11th digit of the sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... is a
 * 0, which is part of the number 10.
 * 
 * 
 */
/*
✔ Accepted
  ✔ 70/70 cases passed (56 ms)
  ✔ Your runtime beats 100 % of javascript submissions
  ✔ Your memory usage beats 40 % of javascript submissions (33.9 MB)

leetCode上有人用二分查找的方法，想法不错，但是空间复杂度太差，可以参考下：
var findNthDigit = function(n) {
    let lo=1, hi=2**31-1;
    while(lo<=hi) {
        let mid = lo+((hi-lo)>>1);
        if(digitsPassed(mid)<n) lo=mid+1;
        else hi=mid-1; 
    }
    let digits=digitsPassed(lo);
    let extra = digits-n;
    let s = String(lo);
    return Number(s[s.length-1-extra]); 
};
var digitsPassed = function (n) {
    let res=0, nDigits=Math.floor(Math.log10(n)+1);
    for(let i=1; i<nDigits; i++) res+= ((10**(i)-10**(i-1)) * i);
    return res+(1+n-10**(nDigits-1))*nDigits;
};

*/

/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    let base = 1;
    let preCount = 0;
    let count = 0;
    while(count<n) {
        preCount = count;
        count += base * 9 * Math.pow(10, base-1);
        base++;
    }

    let left = n - preCount;
    let num = Math.pow(10, base-2) + Math.ceil(left/(base-1)) - 1;
    let pos = left%(base-1)-1;//还剩下多少位。eg:还剩下1位，则下标是0；还剩下0位，说明是末位
    num = (""+num);
    if(pos<0) {
        pos = num.length-1;
    }
    return num[pos];
};

