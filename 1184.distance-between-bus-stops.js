/*
 * @lc app=leetcode id=1184 lang=javascript
 *
 * [1184] Distance Between Bus Stops
 */
/*
✔ Accepted
  ✔ 37/37 cases passed (52 ms)
  ✔ Your runtime beats 79.12 % of javascript submissions
  ✔ Your memory usage beats 100 % of javascript submissions (33.9 MB)
*/
/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
    const allDistance = distance.reduce((a,b)=>a+b, 0);
    if(start>destination) {
        [start, destination] = [destination, start];
    }
    const aDistance = distance.slice(start, destination).reduce((a,b)=>a+b, 0);
    return Math.min(aDistance, allDistance-aDistance);
};

