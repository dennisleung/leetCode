/*
 * @lc app=leetcode id=538 lang=javascript
 *
 * [538] Convert BST to Greater Tree
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
  ✔ 212/212 cases passed (108 ms)
  ✔ Your runtime beats 36.79 % of javascript submissions
  ✔ Your memory usage beats 7.91 % of javascript submissions (42.6 MB)
 
better solution:
var convertBST = function(root) {
    let sum = 0;
    
    const update = node => {
        if(!node) return null;
        
		update(node.right);
        
        sum = node.val += sum;
        
        update(node.left);
    }
    
    update(root);
    
    return root;
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
var convertBST = function(root) {
    if(!root) {//sanity check
        return root;
    }
    
    const nodes = preorderTraversal(root);
    let sum = 0;
    for(let i = nodes.length-1; i>=0; i--) {
        sum += nodes[i].val;
        nodes[i].val = sum;
    }

    return root;
};

