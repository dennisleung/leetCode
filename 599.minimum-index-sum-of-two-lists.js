/*
 * @lc app=leetcode id=599 lang=javascript
 *
 * [599] Minimum Index Sum of Two Lists
 */
/*
✔ Accepted
  ✔ 133/133 cases passed (88 ms)
  ✔ Your runtime beats 99.46 % of javascript submissions
  ✔ Your memory usage beats 50.97 % of javascript submissions (43.3 MB)

*/

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    const cache = {};
    let min = Infinity;
    let minArr = [];
    for(let i = 0, len = list1.length; i<len; i++) {
        cache[list1[i]] = i;
    }

    for(let j = 0, len = list2.length; j<len; j++) {
        let i = cache[list2[j]];
        if(i===void 0) {
            continue;
        }

        let tmp = i+j;
        if(tmp<min) {
            min = tmp;
            minArr = [list2[j]];
        }else if(tmp==min) {
            minArr.push(list2[j]);
        }
    }

    return minArr;
};

