/*
 * @lc app=leetcode id=543 lang=javascript
 *
 * [543] Diameter of Binary Tree
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
  ✔ 106/106 cases passed (76 ms)
  ✔ Your runtime beats 35.15 % of javascript submissions
  ✔ Your memory usage beats 82.46 % of javascript submissions (36.9 MB)

网上的方法和我的都差不多，但是为啥他们的runtime更高？ 
*/

/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let maxDiameter = 0;
    const getDepth = function(node) {
        if(!node) {
            return 0;
        }

        let leftDepth = getDepth(node.left);
        let rightDepth = getDepth(node.right);
        let tmp = leftDepth + rightDepth;
        if(tmp>maxDiameter) {
            maxDiameter = tmp;
        }
        return 1 + Math.max(leftDepth, rightDepth);
    };

     getDepth(root);

     return maxDiameter;
};

