/*
 * @lc app=leetcode id=447 lang=javascript
 *
 * [447] Number of Boomerangs
 */

/*
没做出来。。lc的大神真的好多。。
*/

/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    let count = 0;
    for(let i = 0, len = points.length; i<len; i++) {
        const cache = {};//注意cache初始化的位置
        for(let j = 0; j<len; j++) {
            if(i==j) {
                continue;
            }
            const dist = Math.pow((points[i][0]-points[j][0]), 2) + Math.pow((points[i][1]-points[j][1]), 2);
            if(cache[dist]) {
                count += cache[dist] * 2;
            }
            cache[dist] = (cache[dist] || 0) + 1;
        }
    }

    return count;
};

