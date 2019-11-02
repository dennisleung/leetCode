/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */

/*
10/10 cases passed (68 ms)
Your runtime beats 20.48 % of javascript submissions
Your memory usage beats 5.88 % of javascript submissions (36.5 MB)

one-liner solution:
var subsets = a => a.reduce((s, l) => s.concat(s.map(t => t.concat(l))), [[]]);

bitwise solution:
//https://leetcode.com/problems/subsets/discuss/162028/JavaScript-Bitwise-Solution
//https://leetcode.com/problems/subsets/discuss/27406/JavaScript-Bit-Manipulation-with-Explaination
var subsets = function(nums) {
  const allSubSets = [];
  const numberOfSubsets = 2 ** nums.length;
  
  for (let subsetId = 0; subsetId < numberOfSubsets; subsetId++) {
    let bitIndex = 0;
    const currentSubSet = [];
    
    while (subsetId >> bitIndex) {
      if (subsetId & (1 << bitIndex)) {
        currentSubSet.push(nums[bitIndex]);
      }   
      bitIndex++;
    }
    
    allSubSets.push(currentSubSet);
  }
  
  return allSubSets;
};

*/

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = [];
    function dfs(current, startIndex) {
        result.push([...current]);
        if(current.length == nums.length) {
            return;
        }
        for(let i = startIndex; i < nums.length; i++) {
            dfs([...current, nums[i]], i + 1);
        }
    }

    dfs([], 0);

    return result;
};

// test cases:
// assertCompare(()=>subsets([1,2,3]), [
//     [3],
//     [1],
//     [2],
//     [1,2,3],
//     [1,3],
//     [2,3],
//     [1,2],
//     []
//   ]);
// @lc code=end

