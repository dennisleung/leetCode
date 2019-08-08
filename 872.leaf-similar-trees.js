/*
 * @lc app=leetcode id=872 lang=javascript
 *
 * [872] Leaf-Similar Trees
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
  ✔ 36/36 cases passed (72 ms)
  ✔ Your runtime beats 12.66 % of javascript submissions
  ✔ Your memory usage beats 25 % of javascript submissions (35.3 MB)
*/

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    const getLeaves = (root, leaves) => {
        if(!root) {
            return;
        }
        root.left && getLeaves(root.left, leaves);
        root.right && getLeaves(root.right, leaves);
        if(!root.left && !root.right) {
            leaves.push(root.val);
        }
    }

    const leaves1 = [];
    getLeaves(root1, leaves1);
    const leaves2 = [];
    getLeaves(root2, leaves2);

    if(leaves1.length != leaves2.length) {
        return false;
    }

    for(let i = 0, len = leaves1.length; i<len; i++) {
        if(leaves1[i]!=leaves2[i]) {
            return false;
        }
    }

    return true;
};

