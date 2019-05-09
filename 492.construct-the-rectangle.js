/*
 * @lc app=leetcode id=492 lang=javascript
 *
 * [492] Construct the Rectangle
 */
/*
✔ Accepted
  ✔ 50/50 cases passed (52 ms)
  ✔ Your runtime beats 100 % of javascript submissions
  ✔ Your memory usage beats 10 % of javascript submissions (34.7 MB)


more clean solution:
var constructRectangle = function(area) {
  for(let i = Math.floor(Math.sqrt(area)); i > 0 ; i--) {
    if (area % i == 0) {
      return [area/i, i];
    }
  }
};
*/

/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    let sqrt = ~~Math.sqrt(area);
    let cursor = sqrt;
    while(cursor>=1) {
        if(area%cursor==0) {
            return [cursor, area/cursor].sort((a,b)=>b-a);
        }
        cursor--;
    }

    return [area, 1];
};

