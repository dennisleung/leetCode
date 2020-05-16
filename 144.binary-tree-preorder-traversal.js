/*
 * @lc app=leetcode id=144 lang=javascript
 *
 * [144] Binary Tree Preorder Traversal
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
68/68 cases passed (56 ms)
Your runtime beats 55.53 % of javascript submissions
Your memory usage beats 79.31 % of javascript submissions (33.8 MB)

iterative solution:
var preorderTraversal = function(root) {
  const result = [];
  const stack = [];
  let node = root;
  
  while (node) {
    node.val && result.push(node.val);  
    node.right && stack.push(node.right);      
    node = node.left || stack.pop(); 
  }
  
  return result;
};
*/

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    return root ? [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)] : [];
};
// @lc code=end

