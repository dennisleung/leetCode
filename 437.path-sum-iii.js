/*
 * @lc app=leetcode id=437 lang=javascript
 *
 * [437] Path Sum III
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
  ✔ 126/126 cases passed (112 ms)
  ✔ Your runtime beats 26.65 % of javascript submissions
  ✔ Your memory usage beats 50 % of javascript submissions (37.6 MB)

better solution:
const pathSum = function(root, sum) {
    const freqMap = {0: 1}
    let result = 0
    const runner = (root, prevSum) => {
        if(root) {
            const currSum = prevSum + root.val
            const oldSum = currSum - sum
            result += freqMap[oldSum] || 0
            freqMap[currSum] = (freqMap[currSum] || 0) + 1
            runner(root.left, currSum)
            runner(root.right, currSum)
            freqMap[currSum] -= 1
        }
    }
    runner(root, 0)
    return result
    
};
*/

const travels = function(root) {
    if(!root) {//sanity check
        return [];
    }
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
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
    let count = 0;
    let nodes = travels(root);
    const _pathSum = function(node, sum) {
        let count = 0;
        if(node.val==sum) {
            count++;
        }
        if(node.left) {
            count += _pathSum(node.left, sum-node.val);
        }
        if(node.right) {
            count += _pathSum(node.right, sum-node.val);
        }
        return count;
    }

    for(let node of nodes) {
        count += _pathSum(node, sum);
    }

    return count;
};

