/*
 * @lc app=leetcode id=589 lang=javascript
 *
 * [589] N-ary Tree Preorder Traversal
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
  ✔ 36/36 cases passed (592 ms)
  ✔ Your runtime beats 92.53 % of javascript submissions
  ✔ Your memory usage beats 92.91 % of javascript submissions (79.4 MB)

  iterative solution:
  var preorder = function(root) {

    const stack = [];
    const result = [];
    if (!root) {
        return result;
    }
    stack.push(root);
    while(stack.length) {
        const node = stack.pop();
        result.push(node.val);
        for(let i = node.children.length - 1; i >= 0; i--) {
            stack.push(node.children[i]);
        }
    }
    return result;
};
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    const dfs = (root)=>{
        if(!root) {
            return [];
        }
        return [root].concat(...(root.children&&root.children.length?root.children.map(child=>dfs(child)):[]));
    };
    return dfs(root).map(node=>node.val);
};

