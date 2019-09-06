/*
 * @lc app=leetcode id=1018 lang=javascript
 *
 * [1018] Binary Prefix Divisible By 5
 */
/*
✔ Accepted
  ✔ 24/24 cases passed (76 ms)
  ✔ Your runtime beats 34.91 % of javascript submissions
  ✔ Your memory usage beats 92.31 % of javascript submissions (38.2 MB)

  没做出来。。
  这道题如果直接parseInt的话会溢出。

another solution:
const prefixesDivBy5 = (A, acc = 0) => A.map(d => !(acc = (acc * 2 + d) % 5));
*/
/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(A) {
    let cur = 0;
    return A.map((v)=>{
        cur = (cur*2+v)%5;
        return cur===0;
    });
};

