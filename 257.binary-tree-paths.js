/*
 * @lc app=leetcode id=257 lang=javascript
 *
 * [257] Binary Tree Paths
 *
 * https://leetcode.com/problems/binary-tree-paths/description/
 *
 * algorithms
 * Easy (45.50%)
 * Total Accepted:    218.3K
 * Total Submissions: 479.8K
 * Testcase Example:  '[1,2,3,null,5]'
 *
 * Given a binary tree, return all root-to-leaf paths.
 * 
 * Note: A leaf is a node with no children.
 * 
 * Example:
 * 
 * 
 * Input:
 * 
 * ⁠  1
 * ⁠/   \
 * 2     3
 * ⁠\
 * ⁠ 5
 * 
 * Output: ["1->2->5", "1->3"]
 * 
 * Explanation: All root-to-leaf paths are: 1->2->5, 1->3
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if(!root) {
        return [];
    }
    let arr = [];
    if(!root.left && !root.right) {
        arr.push(""+root.val)
    }else {
        if(root.left) {
            arr = arr.concat(binaryTreePaths(root.left).map((v)=>{return root.val+"->"+v}));
        }
        if(root.right) {
            arr = arr.concat(binaryTreePaths(root.right).map((v)=>{return root.val+"->"+v}));
        }
    }
    return arr;
};