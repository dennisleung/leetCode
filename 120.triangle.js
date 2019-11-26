/*
 * @lc app=leetcode id=120 lang=javascript
 *
 * [120] Triangle
 */

/*
43/43 cases passed (64 ms)
Your runtime beats 24.3 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (35.4 MB)

explaination:
https://blog.csdn.net/qq874455953/article/details/82806030

more clean O(1) space DP solution:
var minimumTotal = T => {
  for (let i = T.length - 2; i >= 0; i--)
    for (let j = 0; j <= i; j++)
      T[i][j] += Math.min(T[i + 1][j], T[i + 1][j + 1])
  
  return T[0][0]
};

*/

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    if(!triangle.length) {
        return 0;
    }
    const map = [];
    for(let i = 0; i<triangle.length; i++) {
        for(let j = 0; j<triangle[i].length; j++) {//每一个节点的的最小路径可以由上一层的1个或者2个节点得出
            let min;
            if(i==0) {
                min = 0;
            }else if(j==0) {
                min = map[i-1][j];
            }else if(j==triangle[i].length-1) {
                min = map[i-1][j-1];
            }else {
                min = Math.min(map[i-1][j-1], map[i-1][j]);
            }

            map[i] = map[i] || [];
            map[i][j] = min + triangle[i][j];
        }
    }

    return Math.min(...map[triangle.length-1]);
};

// test cases:
// assertCompare(()=>minimumTotal([]), 0);
// assertCompare(()=>minimumTotal([[1]]), 1);
// assertCompare(()=>minimumTotal([
//      [2],
//     [3,4],
//    [6,5,7],
//   [4,1,8,3]
// ]), 11);
// assertCompare(()=>minimumTotal([[-1],[2,3],[1,-1,-3]]), -1);
// @lc code=end

