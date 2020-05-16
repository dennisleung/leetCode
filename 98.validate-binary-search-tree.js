/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(root.val==p.val || root.val==q.val) {
        return root;
    }

    const findPOrQ = function(root, p, q) {
        if(!root) {
            return null;
        }
        if(root.val==p.val || root.val==q) {
            return root;
        }
        return findPOrQ(root.left, p, q) || findPOrQ(root.right, p, q);
    }

    const left = findPOrQ(root.left, p, q);
    const right = findPOrQ(root.right, p, q);
    if(left&&right) {
        return root;
    }else if(left) {
        return lowestCommonAncestor(root.left, p, q);
    }else if(right) {
        return lowestCommonAncestor(root.right, p, q);
    }else {
        return null;
    }
};



// @lc code=end

