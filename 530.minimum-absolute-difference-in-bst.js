/*
 * @lc app=leetcode id=530 lang=javascript
 *
 * [530] Minimum Absolute Difference in BST
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
  ✔ 186/186 cases passed (88 ms)
  ✔ Your runtime beats 48.55 % of javascript submissions
  ✔ Your memory usage beats 22.67 % of javascript submissions (39.5 MB)
 
more elegant solution:

var getMinimumDifference = function(root) {
    let values = [];
    
    // collect all values from the tree
    bsf(root, values);
  
    // loop through values and keep track of minimum difference 
    return values.reduce((min, val, i) => {//注意由于是先序遍历bst，所以values就是升序的，不需要sort
        if (i === 0) return min;
        return Math.min(min, Math.abs(val - values[i-1]));
    }, Number.MAX_SAFE_INTEGER);
};

function bsf (node, arr) {
    if (node.left) bsf(node.left, arr);
    arr.push(node.val);
    if (node.right) bsf(node.right, arr);
}

 */

const travels = function(root) {
    let nodes = [];
    let queue = [root];
    while(queue.length) {
        let node = queue.shift();
        nodes.push(node);
        if(node.left) {
            queue.push(node.left);
        }
        if(node.right) {
            queue.push(node.right);
        }
    }

    return nodes;
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    if(!root) {//sanity check, there are at least 2 nodes in BST, so this check is unnessesary
        return 0;
    }
    let nodes = travels(root).sort((a, b)=>a.val-b.val);
    let minDistance = Infinity;
    for(let i = 0, len = nodes.length; i<len-1; i++) {
        let tmp = nodes[i+1].val-nodes[i].val;
        if(minDistance>tmp) {
            minDistance = tmp;
        }
    }

    return minDistance;
};

