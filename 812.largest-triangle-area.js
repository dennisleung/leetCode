/*
 * @lc app=leetcode id=812 lang=javascript
 *
 * [812] Largest Triangle Area
 */
/*
✔ Accepted
  ✔ 57/57 cases passed (52 ms)
  ✔ Your runtime beats 88.89 % of javascript submissions
  ✔ Your memory usage beats 75 % of javascript submissions (36.2 MB)
*/
/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
    const getArea = (a, b, c)=>{
        const [x1, y1] = a;
        const [x2, y2] = b;
        const [x3, y3] = c;
        return 0.5 * Math.abs(x2 * y3 + x1 * y2 + x3 * y1 - x3 * y2 - x2 * y1 - x1 * y3)
    }

    let max = 0;
    let len = points.length;
    for(let x = 0; x<len-2; x++) {
        for(let y = x+1; y<len-1; y++) {
            for(let z = y+1; z<len; z++) {
                max = Math.max(max, getArea(points[x], points[y], points[z]));
            }
        }
    }

    return max;
};

