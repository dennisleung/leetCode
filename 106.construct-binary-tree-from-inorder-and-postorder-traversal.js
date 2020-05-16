/*
 * @lc app=leetcode id=106 lang=javascript
 *
 * [106] Construct Binary Tree from Inorder and Postorder Traversal
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
203/203 cases passed (128 ms)
Your runtime beats 23.72 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (127.1 MB)
*/

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if(!postorder.length) {
        return null;
    }

    const rootVal = postorder[postorder.length-1];
    const rootIndex = inorder.indexOf(rootVal);
    const root = new TreeNode();
    root.val = rootVal;
    root.left = buildTree(inorder.slice(0, rootIndex), postorder.slice(0, rootIndex));
    root.right = buildTree(inorder.slice(rootIndex+1), postorder.slice(rootIndex, -1));

    return root;
};

// test cases:
// assertCompare(()=>buildTree([9,3,15,20,7], [9,15,7,20,3]), makeTree([3,9,20,null,null,15,7]));
// assertCompare(()=>buildTree([], []), makeTree([]));

// @lc code=end

