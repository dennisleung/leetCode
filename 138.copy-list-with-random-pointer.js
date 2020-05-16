/*
 * @lc app=leetcode id=138 lang=javascript
 *
 * [138] Copy List with Random Pointer
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/*
9/9 cases passed (656 ms)
Your runtime beats 38.11 % of javascript submissions
Your memory usage beats 87.5 % of javascript submissions (100.2 MB)
*/
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head, cache={}) {
    if(!head) {
        return null;
    }
    if(cache[head.val]) {
        return cache[head.val];
    }
    const node = new Node(head.val);
    cache[head.val] = node;
    node.next = copyRandomList(head.next, cache);
    node.random = copyRandomList(head.random, cache);

    return node;
};
// @lc code=end

