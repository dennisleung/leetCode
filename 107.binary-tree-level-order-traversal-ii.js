/*
 * @lc app=leetcode id=107 lang=javascript
 *
 * [107] Binary Tree Level Order Traversal II
 *
 * https://leetcode.com/problems/binary-tree-level-order-traversal-ii/description/
 *
 * algorithms
 * Easy (45.75%)
 * Total Accepted:    212.5K
 * Total Submissions: 463.6K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, return the bottom-up level order traversal of its
 * nodes' values. (ie, from left to right, level by level from leaf to root).
 * 
 * 
 * For example:
 * Given binary tree [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 
 * return its bottom-up level order traversal as:
 * 
 * [
 * ⁠ [15,7],
 * ⁠ [9,20],
 * ⁠ [3]
 * ]
 * 
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if(!root) {//sanity check
        return [];
    }
    let result = [];
    let queue = [{
        level : 0,
        node : root
    }];
    while(queue.length) {
        let item = queue.shift();
        let {level, node} = item;
        if(!result[level]) {
            result[level] = [];
        }
        result[level].push(node.val);
        if(node.left) {
            queue.push({level:level+1, node:node.left});
        }
        if(node.right) {
            queue.push({level:level+1, node:node.right});
        }
    }

    return result.reverse();
};

