/*
 * @lc app=leetcode id=590 lang=javascript
 *
 * [590] N-ary Tree Postorder Traversal
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
  ✔ 36/36 cases passed (644 ms)
  ✔ Your runtime beats 25.04 % of javascript submissions
  ✔ Your memory usage beats 85.48 % of javascript submissions (80.1 MB)
 

一种思路：后续是 左子->右子->父，我们先找出 父->右子->左子（稍微改造下preOrder），然后再reverse
var postorder = function(root) {
  if (!root) return [];
  var children = root.children || [];
  var result = [root.val];
  
  while(children.length > 0) {
    var last = children.pop();
    result.push(last.val)
    if (last.children) {
      for(var child of last.children) {
        children.push(child)
      }
    }
  }
  return result.reverse()
};

another solution:
var postorder = function(root) {
    if (root == null) return [];
  
    let queue = [root];
    let postOrder = [];

    while (queue.length > 0) {
        let node = queue.pop();
        postOrder.unshift(node.val);
        if (!node.children) continue;
        for (let i=0; i<node.children.length; i++) {
            queue.push(node.children[i]);
        }
    }

    return postOrder;
}

more elegant solution:
var postorder = function(root) {
    if(!root) return [];
    return [...root.children.reduce((acc,child) => acc.concat(postorder(child)),[]), root.val];
}

 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
    const result = [];
    const travels = (node) => {
        if(!node) {
            return;
        }
        (node.children||[]).forEach((child)=>{
            travels(child);
        });
        result.push(node.val);
    };

    travels(root);
    return result;
};

