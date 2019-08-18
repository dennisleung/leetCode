/*
 * @lc app=leetcode id=938 lang=javascript
 *
 * [938] Range Sum of BST
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
  ✔ 42/42 cases passed (184 ms)
  ✔ Your runtime beats 18.1 % of javascript submissions
  ✔ Your memory usage beats 30.77 % of javascript submissions (67.3 MB)
*/

/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    let sum = 0;
    const travels = (node) => {
        if(!node) {
            return;
        }
        travels(node.left);
        travels(node.right);
        if(node.val>=L && node.val<=R) {
            sum += node.val;
        }
    };

    travels(root);
    return sum;
};

