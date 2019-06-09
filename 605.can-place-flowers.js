/*
 * @lc app=leetcode id=605 lang=javascript
 *
 * [605] Can Place Flowers
 */
/*
✔ Accepted
  ✔ 123/123 cases passed (68 ms)
  ✔ Your runtime beats 81.93 % of javascript submissions
  ✔ Your memory usage beats 64.18 % of javascript submissions (36.1 MB)

这道题错了3次，自己对边界值的判断还是比较薄弱，需要加强相关的锻炼。


shortter solution:
var canPlaceFlowers = function(flowerbed, n) {
	for (let i = 0; i < flowerbed.length; i++) {
		let prev = i - 1
		let next = i + 1
		if (flowerbed[i] === 0) {
			if (!flowerbed[prev] && !flowerbed[next]) {
        flowerbed[i] = 1
				n--
			}
		}
	}
  return n <= 0
}
*/

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let maxCount = 0;
    let cur = -1;
    while(++cur<flowerbed.length) {
        if(flowerbed[cur]) {
            continue;
        }
        
        if(cur && flowerbed[cur-1]) {
            continue;
        }

        if(cur<flowerbed.length-1 && flowerbed[cur+1]) {
            continue;
        }

        flowerbed[cur] = 1;
        maxCount++;
    }

    return maxCount>=n;
};

