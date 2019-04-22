/*
 * @lc app=leetcode id=404 lang=javascript
 *
 * [404] Sum of Left Leaves
 *
 * https://leetcode.com/problems/sum-of-left-leaves/description/
 *
 * algorithms
 * Easy (48.86%)
 * Total Accepted:    122K
 * Total Submissions: 249.4K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Find the sum of all left leaves in a given binary tree.
 * 
 * Example:
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * There are two left leaves in the binary tree, with values 9 and 15
 * respectively. Return 24.
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
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    let sum = 0;
    const isLeaf = (node)=>{
        return node && !node.left && !node.right;
    };
    const iterate = (node)=>{
        if(!node) {//sanity check
            return;
        }
        if(node.left) {
            if(isLeaf(node.left)) {
                sum += node.left.val;
            }
            iterate(node.left);
        }
        if(node.right) {
            iterate(node.right);
        }
    }
    iterate(root);
    return sum;
};

