/*
 * @lc app=leetcode id=1022 lang=javascript
 *
 * [1022] Sum of Root To Leaf Binary Numbers
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
  ✔ 63/63 cases passed (64 ms)
  ✔ Your runtime beats 53.69 % of javascript submissions
  ✔ Your memory usage beats 100 % of javascript submissions (35.9 MB)

 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function(root) {
    let sum = 0;
    const travels = (node, str) => {
        node.left && travels(node.left, str+node.val);
        node.right && travels(node.right, str+node.val);
        if(!node.left && !node.right) {
            sum += parseInt((str+node.val), 2);
        }
    }

    root && travels(root, "");
    return sum;
};

