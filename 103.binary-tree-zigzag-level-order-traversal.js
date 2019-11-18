/*
 * @lc app=leetcode id=103 lang=javascript
 *
 * [103] Binary Tree Zigzag Level Order Traversal
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
33/33 cases passed (56 ms)
Your runtime beats 64.87 % of javascript submissions
Your memory usage beats 40 % of javascript submissions (34.3 MB)

recursive solution:
function zigzagLevelOrder(root) {
  let res = [];
  go(root, 0, res);
  return res;
}

function go(node, l, res) {  // l means level
  if (!node) return;

  if (res[l] == null) {
    res.push([]);
  }

  if (l % 2 === 0) {
    res[l].push(node.val);
  } else {
    res[l].unshift(node.val);
  }

  go(node.left, l + 1, res);
  go(node.right, l + 1, res);
}
*/

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(!root) {
        return [];
    }
    let arr1 = [root];
    let arr2 = [];
    const result = [];
    while(arr1.length) {
        const level = [];
        arr1.forEach((node)=> {
            level.push(node.val);
            node.left && arr2.push(node.left);
            node.right && arr2.push(node.right);
        });
        if(result.length%2===1) {
            level.reverse();
        }
        result.push(level);
        arr1 = arr2;
        arr2 = [];
    }

    return result;
};

// test cases:
// assertCompare(()=>zigzagLevelOrder(null), []);
// assertCompare(()=>zigzagLevelOrder(makeTree([1])), [[1]]);
// assertCompare(()=>zigzagLevelOrder(makeTree([3,9,20,null,null,15,7])), [[3],[20,9],[15,7]]);


// @lc code=end

