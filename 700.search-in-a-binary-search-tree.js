/*
 * @lc app=leetcode id=700 lang=javascript
 *
 * [700] Search in a Binary Search Tree
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
  ✔ 36/36 cases passed (76 ms)
  ✔ Your runtime beats 87.53 % of javascript submissions
  ✔ Your memory usage beats 47.43 % of javascript submissions (41.8 MB)
*/

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    if(!root) {
        return null;
    }
    if(root.val==val) {
        return root;
    }
    let node = searchBST(root.left, val);
    if(node) {
        return node;
    }
    node = searchBST(root.right, val);
    if(node) {
        return node;
    }
    return null;
};

