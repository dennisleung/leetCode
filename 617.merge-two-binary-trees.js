/*
 * @lc app=leetcode id=617 lang=javascript
 *
 * [617] Merge Two Binary Trees
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
  ✔ 183/183 cases passed (88 ms)
  ✔ Your runtime beats 91.64 % of javascript submissions
  ✔ Your memory usage beats 65.8 % of javascript submissions (40.2 MB)
  
*/
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    if(!t1) {
        return t2 || null;
    }

    if(!t2) {
        return t1 || null;
    }

    t1.val += t2.val;
    t1.left = mergeTrees(t1.left, t2.left);
    t1.right = mergeTrees(t1.right, t2.right);

    return t1;
};

