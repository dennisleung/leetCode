/*
 * @lc app=leetcode id=1103 lang=javascript
 *
 * [1103] Distribute Candies to People
 */
/*
✔ Accepted
  ✔ 27/27 cases passed (0 ms)
  ✔ Your runtime beats 100 % of javascript submissions
  ✔ Your memory usage beats 100 % of javascript submissions (34.6 MB)
*/
/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    let sum = 0;
    let pos = 0;
    const result = (new Array(num_people)).fill(0);
    for(let i = 1; ; i++) {
         result[pos] += i;
         sum += i;
         if(sum>candies) {
             result[pos] = result[pos] + candies - sum;
             break;
         }else if(sum==candies) {
             break;
         }
         pos = (++pos)%num_people;
    }
 
    return result;
};

