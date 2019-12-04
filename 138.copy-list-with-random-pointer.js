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
Runtime: 648 ms, faster than 55.17% of JavaScript online submissions for Copy List with Random Pointer.
Memory Usage: 100.2 MB, less than 87.50% of JavaScript online submissions for Copy List with Random Pointer.
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

