/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */
/*
169/169 cases passed (84 ms)
Your runtime beats 30.15 % of javascript submissions
Your memory usage beats 7.69 % of javascript submissions (38.4 MB)

another solution:
function merge(intervals) {
    var res = [];
    intervals
        .sort((a, b) => a.start - b.start)
        .concat(new Interval(Number.MAX_VALUE, Number.MAX_VALUE))
        .reduce((curr, next) => {
            if (next.start <= curr.end) {
                curr.end = Math.max(curr.end, next.end);
                return curr;
            } else {
                res.push(curr);
                return next;
            }
        });
    return res;
}
 */
// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let arr = [];
    const isCollided = function([aStart, aEnd], [bStart, bEnd]) {
        return !(aEnd<bStart || aStart>bEnd);
    }
    while(intervals.length>0) {
        const interval = intervals.pop();
        let collidedIndexes = [];
        for(let i = 0; i<arr.length; i++) {
            if(isCollided(arr[i], interval)) {
                collidedIndexes.push(i);
            }
        }

        if(collidedIndexes.length>0) {
            let min = interval[0];
            let max = interval[1];
            for(let collidedIndex of collidedIndexes) {
                let [start, end] = arr[collidedIndex];
                min = Math.min(min, start);
                max = Math.max(max, end);
                delete arr[collidedIndex];
            }
            arr = arr.filter(v=>!!v);
            arr.push([min, max]);
        }else {
            arr.push(interval)
        }
    }

    return arr;
};

// test cases:
// assertCompare(()=>merge([]), []);
// assertCompare(()=>merge([[1,1]]), [[1,1]]);
// assertCompare(()=>merge([[1,3],[2,6],[8,10],[15,18]]), [[1,6],[8,10],[15,18]]);
// assertCompare.only(()=>merge([[1,4],[4,5]]), [[1,5]]);

// @lc code=end

