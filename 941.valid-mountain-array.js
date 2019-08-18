/*
 * @lc app=leetcode id=941 lang=javascript
 *
 * [941] Valid Mountain Array
 */
/*
✔ Accepted
  ✔ 51/51 cases passed (108 ms)
  ✔ Your runtime beats 5.72 % of javascript submissions
  ✔ Your memory usage beats 11.11 % of javascript submissions (39.6 MB)
*/
/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
    if(A.length<3) {
        return false;
    }
    let splitIndex = 0;
    for(var i = 1, len = A.length; i<len-1; i++) {
        if(A[i]==A[i-1] || A[i]==A[i+1]) {//不能有平的
            return false;
        }else if(A[i]>A[i-1] && A[i]>A[i+1]) {
            splitIndex = i;
        }
    }
    if(!splitIndex) {
        return false;
    }

    let aPart = A.slice(0, splitIndex);
    let bPart = A.slice(splitIndex+1);
    return aPart.join("_")==aPart.sort((a,b)=>a-b).join("_") && bPart.join("_")==bPart.sort((a,b)=>b-a).join("_");
};

