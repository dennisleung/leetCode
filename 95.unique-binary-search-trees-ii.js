/*
 * @lc app=leetcode id=95 lang=javascript
 *
 * [95] Unique Binary Search Trees II
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
9/9 cases passed (84 ms)
Your runtime beats 19.87 % of javascript submissions
Your memory usage beats 11.11 % of javascript submissions (38.9 MB)

more clean solution:
function generateTrees(n) {
  if (n < 1) return [];
  const dp = [...Array(n+1)].map(r => Array(n+1));
  return generate(1, n);
  
  function generate(s, e) {
    if (s > e) return [null];
    if (dp[s][e]) return dp[s][e];
    
    const res = [];
    for (let root = s; root <= e; root++) {
      for (let left of generate(s, root-1)) {
        for (let right of generate(root+1, e)) {
          const newTree = new TreeNode(root);
          newTree.left = left;
          newTree.right = right;
          res.push(newTree);
        }
      }
    }
    
    dp[s][e] = res;
    return res;
  }
}
*/

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(max, min=1) {
    if(min>max) {
        return [];
    }

    if(min==max) {
        return [new TreeNode(min)];
    }
    
    const result = [];
    let root = null;
    if(max-min==1) {
        root = new TreeNode(max);
        root.left = new TreeNode(min);
        result.push(root);

        root = new TreeNode(min);
        root.right = new TreeNode(max);
        result.push(root);

        return result;
    }

    for(let i = min; i<=max; i++) {
        let leftArr = [];
        let rightArr = [];
        if(i>min) {
            leftArr = generateTrees(i-1, min);
        }
        if(i<max) {
            rightArr = generateTrees(max, i+1);
        }

        let j = 0;
        do {
            let leftNode = leftArr[j++] || null;
            let k = 0;
            do {
                let rightNode = rightArr[k++] || null;
                let root = new TreeNode(i);
                root.left = leftNode;
                root.right = rightNode;
                result.push(root);
            }while(k<rightArr.length)
        }while(j<leftArr.length)
    }

    return result;
};

// test cases:
// generateTrees(3);//output是TreeNode[]，案例只是简写了
// [
//     [1,null,3,2],
//     [3,2,null,1],
//     [3,1,null,null,2],
//     [2,1,3],
//     [1,null,2,null,3]
//   ]
// @lc code=end

