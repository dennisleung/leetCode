/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
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
68/68 cases passed (68 ms)
Your runtime beats 8.59 % of javascript submissions
Your memory usage beats 21.88 % of javascript submissions (33.9 MB)

二叉树先序、中序、后序遍历迭代写法：
https://www.jianshu.com/p/e0a8bbee76a9

another version:
var inorderTraversal = function(root) {
  const arr = [];
  const stack = [];
  let node = root;
  
  while (node || stack.length) {    
    while (node) {
      stack.push(node);
      node = node.left;
    }       
    
    node = stack.pop();
    arr.push(node.val); 
    node = node.right;
  }
  
  return arr;
};
*/

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const result = [];
    const stacks = [];
    let cur = root;
    while(stacks.length || cur) {
        if(cur) {
            stacks.push(cur);
            cur = cur.left;
        }else {
            cur = stacks.pop();
            result.push(cur.val);
            cur = cur.right;
        }
    }

    return result;
};

// test cases:
// assertCompare(()=>inorderTraversal(makeTree([1,null,2,3])), [1,3,2]);
// assertCompare(()=>inorderTraversal(makeTree([])), []);

// @lc code=end

