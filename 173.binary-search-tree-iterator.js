/*
 * @lc app=leetcode id=173 lang=javascript
 *
 * [173] Binary Search Tree Iterator
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
62/62 cases passed (140 ms)
Your runtime beats 79.54 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (48.3 MB)

stack solution:
var BSTIterator = function(root) {
    this.st = [];
    while(root !== null) {
        this.st.push(root);
        root = root.left;
    }
};

BSTIterator.prototype.next = function() {
    let cur = this.st.pop();
    let res = cur.val;
    // put the right child into the stack
    if(cur.right) {
        this.st.push(cur.right);
        cur = cur.right.left;
        while(cur !== null) {
            this.st.push(cur);
            cur = cur.left;
        }
    }
    return res;
};

BSTIterator.prototype.hasNext = function() {
    return this.st.length > 0;
};
*/

const inorderTraversal = function(root, arr=[]) {
    if(root) {
        root.left && inorderTraversal(root.left, arr);
        arr.push(root);
        root.right && inorderTraversal(root.right, arr);
    }

    return arr;
};

/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
    this.cursor = 0;
    this.arr = inorderTraversal(root);
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    return this.arr[this.cursor++].val;
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.cursor<this.arr.length;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */


// test cases:
// let iterator = new BSTIterator(makeTree([7,3,15,null,null,9,20]));
// assertCompare(()=>iterator.next(), 3);
// assertCompare(()=>iterator.next(), 7);
// assertCompare(()=>iterator.hasNext(), true);
// assertCompare(()=>iterator.next(), 9);
// assertCompare(()=>iterator.hasNext(), true);
// assertCompare(()=>iterator.next(), 15);
// assertCompare(()=>iterator.hasNext(), true);
// assertCompare(()=>iterator.next(), 20);
// assertCompare(()=>iterator.hasNext(), false);

// iterator = new BSTIterator(makeTree([]));
// assertCompare(()=>iterator.hasNext(), false);
// @lc code=end

