/*
 * @lc app=leetcode id=1013 lang=javascript
 *
 * [1013] Partition Array Into Three Parts With Equal Sum
 */
/*
✔ Accepted
  ✔ 53/53 cases passed (68 ms)
  ✔ Your runtime beats 65.9 % of javascript submissions
  ✔ Your memory usage beats 100 % of javascript submissions (40.4 MB)

没做出来。。自己写的方法OOM了= =
*/

/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
    const sum = A.reduce((a, b)=>a+b, 0);
    if(sum%3!==0) {
        return false;
    }
 
    let tmp = 0;
    let count = 0;
    for(let num of A) {
        tmp += num;
        if(tmp==sum/3) {
            tmp = 0;
            count++;
        }
    }
 
    return count >= 3;
};

