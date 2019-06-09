/*
 * @lc app=leetcode id=606 lang=javascript
 *
 * [606] Construct String from Binary Tree
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
  ✔ 162/162 cases passed (80 ms)
  ✔ Your runtime beats 27.56 % of javascript submissions
  ✔ Your memory usage beats 27.05 % of javascript submissions (38.6 MB)


more clean solution:
var tree2str = function(t) {
    if (!t) return '';
    const left = tree2str(t.left);
    const right = tree2str(t.right);
    return t.val + (left || right ? `(${left})` : '') + (right ? `(${right})` : '');
}; 
*/


/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
    if(!t) {
        return "";
    }

    let leftStr = t.left ? `(${tree2str(t.left)})` : "";
    let rightStr = t.right ? `(${tree2str(t.right)})` : "";
    if(rightStr && !leftStr) {
        leftStr = "()";
    }

    return `${t.val}${leftStr}${rightStr}` 
};

