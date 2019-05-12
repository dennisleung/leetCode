/*
 * @lc app=leetcode id=501 lang=javascript
 *
 * [501] Find Mode in Binary Search Tree
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
  ✔ 25/25 cases passed (80 ms)
  ✔ Your runtime beats 82.43 % of javascript submissions
  ✔ Your memory usage beats 10.71 % of javascript submissions (43.1 MB)

  better solution use O(1) space:
  const findMode = root => {
  const handleValue = val => {
    // handle current count
    if (val !== currVal) {
      currVal = val;
      currCount = 0;
    }
    currCount++;

    //这里很巧妙
    if (currCount > maxCount) {
      // found a new mode
      maxCount = currCount;
      modeCount = 1;
      modes[0] = currVal;
    } else if (currCount === maxCount) {
      // found a mode with same count
      modes[modeCount] = currVal;
      modeCount++;
    }
  };

  const inorder = node => {
    if (!node) return;

    inorder(node.left);
    handleValue(node.val);
    inorder(node.right);
  };

  let currVal = null;
  let currCount = 0;
  let maxCount = 0;
  let modeCount = 0;

  const modes = [];

  inorder(root);

  return modes.slice(0, modeCount);
};

*/

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
    if(!root) {//sanity check
        return [];
    }
    let nodesMap = [];
    let queue = [root];
    while(queue.length) {
        let node = queue.shift();
        nodesMap[node.val] = (nodesMap[node.val] || 0) + 1;
        if(node.left) {
            queue.push(node.left);
        }
        if(node.right) {
            queue.push(node.right);
        }
    }

    let mostNodeVal = Math.max(...Object.values(nodesMap));
    let result = [];
    for(let nodeVal in nodesMap) {
        if(nodesMap[nodeVal]==mostNodeVal) {
            result.push(parseInt(nodeVal));
        }
    }

    return result;
};

