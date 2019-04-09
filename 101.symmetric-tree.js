/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
 *
 * https://leetcode.com/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (42.79%)
 * Total Accepted:    367.9K
 * Total Submissions: 858.5K
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * Given a binary tree, check whether it is a mirror of itself (ie, symmetric
 * around its center).
 * 
 * 
 * For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠/ \ / \
 * 3  4 4  3
 * 
 * 
 * 
 * But the following [1,2,2,null,3,null,3]  is not:
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠  \   \
 * ⁠  3    3
 * 
 * 
 * 
 * 
 * Note:
 * Bonus points if you could solve it both recursively and iteratively.
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 
 * recursive solution:
 * isMirror(a, b) {return isMirror(a.left, b.right) && isMirror(a.right, b.left);}
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    let queue = [root];
    let aResult = [];
    while(queue.length) {
        let item = queue.shift();
        if(item) {
            aResult.push(item.val);
            queue.push(item.left);
            queue.push(item.right);
        }else {
            aResult.push(void 0);
        }
    }

    queue = [root];
    let bResult = [];
    while(queue.length) {
        let item = queue.shift();
        if(item) {
            bResult.push(item.val);
            queue.push(item.right);
            queue.push(item.left);
        }else {
            bResult.push(void 0);
        }
    }

    if(aResult.length != bResult.length) {
        return false;
    }
    for(let i = 0, len = aResult.length; i<len; i++) {
        if(aResult[i]!==bResult[i]) {
            return false;
        }
    }
    return true;
};

