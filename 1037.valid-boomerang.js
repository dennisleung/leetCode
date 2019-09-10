/*
 * @lc app=leetcode id=1037 lang=javascript
 *
 * [1037] Valid Boomerang
 */

 /*
 ✔ Accepted
  ✔ 190/190 cases passed (56 ms)
  ✔ Your runtime beats 59.38 % of javascript submissions
  ✔ Your memory usage beats 100 % of javascript submissions (34 MB)

better solution:
Just cross multipy the compare slopes formula:(很好地解决了除0的问题)
( y1-y0 / x1-x0 ) == ( y2-y1 / x2-x1 ) turns into ( y1-y0 )*( x2-x1 ) == ( x1-x0 )( y2-y1 )
var isBoomerang = function(points) {
    return !((points[1][1] - points[0][1]) * (points[2][0] - points[1][0]) == (points[1][0] - points[0][0]) * (points[2][1] - points[1][1]))
}
 */
/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
    const [[x1, y1], [x2, y2], [x3, y3]] = points;
    let c1 = Math.sqrt(Math.pow((y1-y2), 2)+Math.pow((x1-x2), 2));
    let c2 = Math.sqrt(Math.pow((y1-y3), 2)+Math.pow((x1-x3), 2));
    let c3 = Math.sqrt(Math.pow((y2-y3), 2)+Math.pow((x2-x3), 2));
    [c1, c2, c3] = [c1, c2, c3].sort((a, b)=>a-b);
    return c1+c2>c3;
};

