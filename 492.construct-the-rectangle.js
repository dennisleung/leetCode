/*
 * @lc app=leetcode id=492 lang=javascript
 *
 * [492] Construct the Rectangle
 */
/*
✔ Accepted
  ✔ 50/50 cases passed (76 ms)
  ✔ Your runtime beats 41.61 % of javascript submissions
  ✔ Your memory usage beats 91 % of javascript submissions (34.2 MB)

 这道题网上的解法都差不多，没搞懂为啥runtime差别那么大。。 
 注意这道题求w优于求l，及
 for(let w = Math.floor(Math.sqrt(area)); w>0; w--) 
 优于
 for(let l = Math.ceil(Math.sqrt(area)); l<=area; l++) 
 sqrt(area) ~ area必然需要检查更多的元素。
*/

/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    for(let w = Math.floor(Math.sqrt(area)); w>0; w--) {
        if(area%w==0) {
            return [area/w, w];
        }
    }
};

