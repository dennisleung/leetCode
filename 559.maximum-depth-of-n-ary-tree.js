/*
 * @lc app=leetcode id=559 lang=javascript
 *
 * [559] Maximum Depth of N-ary Tree
 */
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/*
✔ Accepted
  ✔ 36/36 cases passed (600 ms)
  ✔ Your runtime beats 78.76 % of javascript submissions
  ✔ Your memory usage beats 95.59 % of javascript submissions (76.9 MB)
*/

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) {
        return 0;
    }

    return 1 + (root.children&&root.children.length ? Math.max(...root.children.map(child=>maxDepth(child))) : 0);
};

