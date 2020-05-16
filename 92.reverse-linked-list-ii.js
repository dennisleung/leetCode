/*
 * @lc app=leetcode id=92 lang=javascript
 *
 * [92] Reverse Linked List II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/*
44/44 cases passed (56 ms)
Your runtime beats 51.13 % of javascript submissions
Your memory usage beats 42.86 % of javascript submissions (33.9 MB)
*/
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    const _head = new ListNode();
    _head.next = head;
    const root = _head;
    let index = 0;
    let cur = root;
    while(++index<m) {
        cur = cur.next;
    }

    const node1 = cur;
    const node2 = node1.next;
    let preNode = node2;
    cur = node2;
    while(index++<=n) {
        let nextNode = cur.next;
        cur.next = preNode;
        preNode = cur;
        cur = nextNode;
    }

    node1.next = preNode;
    node2.next = cur;

    return root.next;
};
// @lc code=end

