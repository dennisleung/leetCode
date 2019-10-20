/*
 * @lc app=leetcode id=1217 lang=javascript
 *
 * [1217] Play with Chips
 */
/*
50/50 cases passed (56 ms)
Your runtime beats 51.42 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (34.1 MB)
*/
// @lc code=start
/**
 * @param {number[]} chips
 * @return {number}
 */
var minCostToMoveChips = function(chips) {
    let oddCount = 0;
    let evenCount = 0;
    for(let chip of chips) {
        if(chip%2===0) {
            evenCount++;
        }else {
            oddCount++;
        }
    }

    return Math.min(oddCount, evenCount);
};

// test cases:
// assertCompare(()=>minCostToMoveChips([1,2,3]), 1);
// assertCompare(()=>minCostToMoveChips([2,2,2,3,3]), 2);
// assertCompare(()=>minCostToMoveChips([2,1000,2,3,99]), 2);
// assertCompare(()=>minCostToMoveChips([]), 0);
// assertCompare(()=>minCostToMoveChips([1]), 0);
// assertCompare(()=>minCostToMoveChips([1,1]), 0);
// assertCompare(()=>minCostToMoveChips([1,2,3,4,5,6,7]), 3);
// assertCompare(()=>minCostToMoveChips([1,2,2,2,2]), 1);

// @lc code=end

