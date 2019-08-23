/*
 * @lc app=leetcode id=965 lang=javascript
 *
 * [965] Univalued Binary Tree
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
  ✔ 72/72 cases passed (56 ms)
  ✔ Your runtime beats 55.23 % of javascript submissions
  ✔ Your memory usage beats 14.29 % of javascript submissions (34 MB)

more clean solution:
var isUnivalTree = function(root, val = root.val) {
    if(!root) return true;
    return root.val === val && isUnivalTree(root.left, val) && isUnivalTree(root.right, val);
};
*/

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    if(!root) {
        return false;
    }

    let sameVal = root.val;
    let queue = [root];
    while(queue.length) {
        let node = queue.shift();
        if(node.val!=sameVal) {
            return false;
        }
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
    }

    return true;
};

