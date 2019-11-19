/*
 * @lc app=leetcode id=105 lang=javascript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
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
203/203 cases passed (112 ms)
Your runtime beats 39.38 % of javascript submissions
Your memory usage beats 50 % of javascript submissions (127.1 MB)]

*/

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(!preorder.length) {
        return null;
    }

    const rootIndex = inorder.indexOf(preorder[0]);
    const root = new TreeNode();
    root.val = preorder[0];
    root.left = buildTree(preorder.slice(1, rootIndex+1), inorder.slice(0, rootIndex));
    root.right = buildTree(preorder.slice(rootIndex+1), inorder.slice(rootIndex+1));

    return root;
};

// test cases:
// assertCompare(()=>buildTree([3,9,20,15,7], [9,3,15,20,7]), makeTree([3,9,20,null,null,15,7]));
// assertCompare(()=>buildTree([], []), makeTree([]));

// @lc code=end

