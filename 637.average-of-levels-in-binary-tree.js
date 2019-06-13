/*
 * @lc app=leetcode id=637 lang=javascript
 *
 * [637] Average of Levels in Binary Tree
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
✔ Accepted
  ✔ 65/65 cases passed (76 ms)
  ✔ Your runtime beats 67.14 % of javascript submissions
  ✔ Your memory usage beats 22.58 % of javascript submissions (38.8 MB)
*/

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    const sum = [];
    const num = [];
    const travel = (node, level)=>{
        if(!node) {
            return;
        }
        sum[level] = (sum[level] || 0) + node.val;
        num[level] = (num[level] || 0) + 1;
        travel(node.left, level+1);
        travel(node.right, level+1);
    };

    travel(root, 0);

    return sum.map((v, i)=>v/num[i]);
};

