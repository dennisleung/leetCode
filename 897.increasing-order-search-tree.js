/*
 * @lc app=leetcode id=897 lang=javascript
 *
 * [897] Increasing Order Search Tree
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
  ✔ 2156/2156 cases passed (252 ms)
  ✔ Your runtime beats 5.64 % of javascript submissions
  ✔ Your memory usage beats 50 % of javascript submissions (43.4 MB)

better solution:
var increasingBST = function(root) {
    if (root.right) {
      const rightSubTree = increasingBST(root.right);
      root.right = rightSubTree;
    }
    if (!root.left) {
      return root;
    }
    const left = root.left;
    root.left = null;
    const res = increasingBST(left);
    let rightMost = res;
    while (rightMost.right) {
      rightMost = rightMost.right;
    }
    rightMost.right = root;
    return res;
};
*/

//先序遍历
const preorderTraversal = function(root) {
    const getLeftChildren = function(node) {
        if(node.left) {
            return preorderTraversal(node.left);
        }else {
            return [];
        }
    };

    const getRightChildren = function(node) {
        if(node.right) {
            return preorderTraversal(node.right);
        }else {
            return [];
        }
    };

    return getLeftChildren(root).concat([root]).concat(getRightChildren(root));
};

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    let nodes = preorderTraversal(root);
    nodes = nodes.map(node=>{node.left=node.right=null;return node;});
    let rootNode = new TreeNode();
    root = rootNode;
    for(let node of nodes) {
        root.left = null;
        root.right = node;
        root = node;
    }

    return rootNode.right;
};

