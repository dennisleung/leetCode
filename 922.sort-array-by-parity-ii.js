/*
 * @lc app=leetcode id=922 lang=javascript
 *
 * [922] Sort Array By Parity II
 */
/*
✔ Accepted
  ✔ 61/61 cases passed (112 ms)
  ✔ Your runtime beats 24.5 % of javascript submissions
  ✔ Your memory usage beats 36.36 % of javascript submissions (40.2 MB)

another solution，clean but not fast:
var sortArrayByParityII = function(A) {
    let evenArray = A.filter(x => x % 2 === 0);
    let oddArray = A.filter(x => x % 2 === 1);
    return A.map((x, index) => index % 2 === 0 ? evenArray.pop() : oddArray.pop());
};
*/
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    const B = [];
    for(let i = 0, len = A.length, odd = 1, even = 0; i<len; i++) {
        if(A[i]%2==0) {
            B[even] = A[i];
            even += 2;
        }else {
            B[odd] = A[i];
            odd += 2;
        }
    }

    return B;
};

