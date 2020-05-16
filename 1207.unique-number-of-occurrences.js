/*
 * @lc app=leetcode id=1207 lang=javascript
 *
 * [1207] Unique Number of Occurrences
 */
/*
63/63 cases passed (48 ms)
Your runtime beats 96.68 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (34.4 MB)

another solution:
var uniqueOccurrences = function(arr) {
  const map = {};
  
  for (let a of arr) {
    if (map[a]) {
      map[a]++;
    } else {
      map[a] = 1;
    }
  }
  
  const vals = Object.values(map);

  return (new Set(vals)).size === vals.length;//这里用Set很巧妙
};
*/
// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const cache = {};
    for(let num of arr) {
        cache[num] = (cache[num]||0) + 1;
    }
    const ocs = Object.values(cache);
    const ocCache = {}
    for(let oc of ocs) {
        if(ocCache[oc]) {
            return false;
        }
        ocCache[oc] = 1;
    }

    return true;
};

// test cases:
// console.log(uniqueOccurrences([1,2,2,1,1,3]));//true
// console.log(uniqueOccurrences([1,2]));//false
// console.log(uniqueOccurrences([1]));//true
// console.log(uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]));//true

// @lc code=end

