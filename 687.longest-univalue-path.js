/*
 * @lc app=leetcode id=687 lang=javascript
 *
 * [687] Longest Univalue Path
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
  ✔ 71/71 cases passed (172 ms)
  ✔ Your runtime beats 82.8 % of javascript submissions
  ✔ Your memory usage beats 58.77 % of javascript submissions (52 MB)

clean solution:
var straightUnivaluePath = function(node, uniVal) {
    if(!node || node.val !== uniVal) return 0;
    return Math.max(straightUnivaluePath(node.left, uniVal), straightUnivaluePath(node.right, uniVal)) + 1;
}

var longestUnivaluePath = function(root) {
    if(!root) return 0;
    
    return Math.max(
        longestUnivaluePath(root.left),
        longestUnivaluePath(root.right),
        straightUnivaluePath(root.left, root.val) + straightUnivaluePath(root.right, root.val)
    )
};
*/

/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function(root) {
    let max = 0;
    const getLongestPath = (node)=> {
        if(!node) {
            return 0;
        }
        let leftVal = node.left&&node.left.val==node.val ? 1+getLongestPath(node.left) : 0;
        let rightVal = node.right&&node.right.val==node.val ? 1+getLongestPath(node.right) : 0;
        return Math.max(leftVal, rightVal);
    };

    const travels = (node)=>{
        if(!node) {
            return;
        }
        
        let leftVal = 0;
        if(node.left&&node.left.val==node.val) {
            leftVal = getLongestPath(node.left) + 1;
        }
        let rightVal = 0;
        if(node.right&&node.right.val==node.val) {
            rightVal = getLongestPath(node.right) + 1;
        }
        max = Math.max(max, leftVal+rightVal);
        node.left && travels(node.left);
        node.right && travels(node.right);
    }
    travels(root);

    return max;
};

