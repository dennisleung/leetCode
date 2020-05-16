/*
 * @lc app=leetcode id=1200 lang=javascript
 *
 * [1200] Minimum Absolute Difference
 */
/*
36/36 cases passed (228 ms)
Your runtime beats 9.43 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (65.7 MB)

better O(n) solution:
var minimumAbsDifference = function(arr) {
    var result = [];
    arr.sort((a, b) => a - b);
    var minDiff = Number.MAX_VALUE;
    var prevIndex;
    var diff;
    
    for (var i = 1; i < arr.length; i++) {
        prevIndex = i - 1;
        diff = arr[i] - arr[prevIndex];

        if (diff > minDiff) {
            continue;
        }

        if (diff < minDiff) {
            minDiff = diff;
            result.length = 0;
        }

        result.push([arr[prevIndex], arr[i]]);
    }

    return result;
};
*/
// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    const cache = {};
    arr.sort((a,b)=>a-b);
    for(let i = 0; i<arr.length-1; i++) {
        const diff = arr[i+1] - arr[i];
        cache[diff] = cache[diff] || [];
        cache[diff].push([arr[i], arr[i+1]]);
    }

    const minDiff = Math.min(...Object.keys(cache));
    return cache[minDiff];
};

// test cases:
// console.log(minimumAbsDifference([4,2,1,3]));//[[1,2],[2,3],[3,4]]
// console.log(minimumAbsDifference([1,3,6,10,15]));//[[1,3]]
// console.log(minimumAbsDifference([3,8,-10,23,19,-4,-14,27]));//[[-14,-10],[19,23],[23,27]]
// console.log(minimumAbsDifference([1,3]));//[[1,3]]

// @lc code=end

