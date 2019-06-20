/*
 * @lc app=leetcode id=669 lang=javascript
 *
 * [669] Trim a Binary Search Tree
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
  ✔ 77/77 cases passed (88 ms)
  ✔ Your runtime beats 12.13 % of javascript submissions
  ✔ Your memory usage beats 28.96 % of javascript submissions (39.5 MB)

*/

/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
var trimBST = function(root, L, R) {
    if(!root) {
        return null;
    }

    if(root.val<L) {
        return trimBST(root.right, L, R);
    }

    if(root.val>R) {
        return trimBST(root.left, L, R);
    }

    root.left = trimBST(root.left, L, R);
    root.right = trimBST(root.right, L, R);
    return root;
};

