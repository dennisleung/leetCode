/*
 * @lc app=leetcode id=686 lang=javascript
 *
 * [686] Repeated String Match
 */
/*
✔ Accepted
  ✔ 55/55 cases passed (56 ms)
  ✔ Your runtime beats 92.54 % of javascript submissions
  ✔ Your memory usage beats 29.01 % of javascript submissions (36 MB)

better solution:
const repeatedStringMatch = (A, B) => {
    const count = Math.ceil(B.length / A.length)
    const str = A.repeat(count)
    return str.includes(B) ? count : (str + A).includes(B) ? count + 1 : -1 
};
*/

/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
    if(!B) {
        return 1;
    }
    if(!A) {
        return -1;
    }
    let count = 1;
    let newStr = A;
    while(true) {
        if(newStr.indexOf(B)!==-1) {
            return count;
        }
        if(newStr.length>A.length+B.length) {
            break;
        }
        newStr += A;
        count++;
    }

    return -1;
};

