/*
 * @lc app=leetcode id=563 lang=javascript
 *
 * [563] Binary Tree Tilt
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
  ✔ 75/75 cases passed (76 ms)
  ✔ Your runtime beats 44.91 % of javascript submissions
  ✔ Your memory usage beats 10.41 % of javascript submissions (39.8 MB)

better solution:
var findTilt = function(root) {
    var sum = {val: 0}
    calculateNode(root, sum)
    return sum.val
};
function calculateNode(node, sumb) {
    if(!node) return 0
    let leftVal = calculateNode(node.left, sumb)
    let rightVal = calculateNode(node.right, sumb)
    sumb.val += Math.abs(leftVal - rightVal)
    return node.val + leftVal + rightVal
}

another version:
function findTilt(root) {
    let tilt = 0;
    (function postTraversal(root) {
        if (!root) return 0;
        const left = postTraversal(root.left);
        const right = postTraversal(root.right);
        
        tilt += Math.abs(left - right);
        
        return left + right + root.val;
    })(root);
    return tilt;
}

*/

/**
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function(root) {
    if(!root) {
        return 0;
    }

    const map = new Map();
    const _getSum = (node)=>{
        if(!node) {
            return 0;
        }

        let result = map.get(node);
        if(result!==void 0) {
            return result;
        }

        result = node.val + _getSum(node.left) + _getSum(node.right);
        map.set(node, result);

        return result;
    }

    let sum = 0;
    let nodes = [];
    let queue = [root];
    while(queue.length) {
        let node = queue.shift();
        sum += Math.abs(_getSum(node.left)-_getSum(node.right));
        nodes.push(node);
        if(node.left) {
            queue.push(node.left);
        }
        if(node.right) {
            queue.push(node.right);
        }
    }

    return sum;
};

