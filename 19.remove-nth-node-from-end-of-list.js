/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
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
208/208 cases passed (64 ms)
Your runtime beats 33.9 % of javascript submissions
Your memory usage beats 13.64 % of javascript submissions (35 MB)

better, two-pointers solition:
var removeNthFromEnd = function(head, n) {
  var left, before, right = head;
  left = before = {next: head}; 
  while (n--) right = right.next;
  while (right) {
    right = right.next;
    left = left.next;
  }
  left.next = left.next.next;
  return before.next;
};
*/
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const arr = [];
    const _head = new ListNode(null);
    _head.next = head;
    head = _head;

    const pushQueue = (node) => {
        if(arr.length==n+1) {
            arr.splice(0, 1);
        }
        arr.push(node);
    }

    while(head) {
        pushQueue(head);
        head = head.next;
    }

    arr[0].next = arr[1].next;
    return _head.next;
};
// @lc code=end

