/*
 * @lc app=leetcode id=1122 lang=javascript
 *
 * [1122] Relative Sort Array
 */

/*
✔ Accepted
  ✔ 16/16 cases passed (52 ms)
  ✔ Your runtime beats 91.33 % of javascript submissions
  ✔ Your memory usage beats 100 % of javascript submissions (34.8 MB)
*/

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    const cache = [];
    for(let i = 0; i<arr2.length; i++) {
        cache[arr2[i]] = i+1;
    }
    
    arr1.sort((a, b)=>{
        let aIndex = cache[a];
        let bIndex = cache[b];
        if(aIndex && bIndex) {
            return aIndex-bIndex;
        }else if(aIndex && !bIndex) {
            return -1;
        }else if (!aIndex && bIndex) {
            return 1;
        }else {
            return a-b;
        }
    });

    return arr1;
};

