/*
 * @lc app=leetcode id=1089 lang=javascript
 *
 * [1089] Duplicate Zeros
 */
/*
✔ Accepted
  ✔ 30/30 cases passed (76 ms)
  ✔ Your runtime beats 36.89 % of javascript submissions
  ✔ Your memory usage beats 100 % of javascript submissions (37 MB)
  
*/
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let newArr = [];
    for(let item of arr) {
        newArr.push(item);
        if(!item) {
            newArr.push(item);
        }
        if(newArr.length>=arr.length) {
            break;
        }
    }
    arr.map((v, i)=>{arr[i]=newArr[i]});
};

