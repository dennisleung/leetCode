/*
 * @lc app=leetcode id=475 lang=javascript
 *
 * [475] Heaters
 */
/*
✔ Accepted
  ✔ 30/30 cases passed (1364 ms)
  ✔ Your runtime beats 19.51 % of javascript submissions
  ✔ Your memory usage beats 20 % of javascript submissions (39.3 MB)

这道题没有优雅的解法，只能暴力破解。
题目没说houses和heaters都是升序的，必须要先排序
*/

/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
    if(!houses.length || !heaters.length) {//sanity check
        return 0;
    }

    houses.sort((a,b)=>a-b);
    heaters.sort((a,b)=>a-b);

    let radis = 0;
    for(let i = 0, len = houses.length; i<len; i++) {
        let house = houses[i];
        let tmp;
        if(house<=heaters[0]) {
            tmp = heaters[0]-house;
        }else if(house>=heaters[heaters.length-1]) {
            tmp = house-heaters[heaters.length-1];
        }else {
            for(let j = 0, jLen = heaters.length; j<jLen-1; j++) {
                if(heaters[j]<=house && house<heaters[j+1]) {
                    tmp = Math.min(house-heaters[j], heaters[j+1]-house);
                }
            }
        }
        radis = Math.max(radis, tmp);
    }
    return radis;
};

