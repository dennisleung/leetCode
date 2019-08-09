/*
 * @lc app=leetcode id=876 lang=javascript
 *
 * [876] Middle of the Linked List
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/*
✔ Accepted
  ✔ 15/15 cases passed (44 ms)
  ✔ Your runtime beats 97.14 % of javascript submissions
  ✔ Your memory usage beats 77.78 % of javascript submissions (33.8 MB)
*/

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    const getNodeCount = (head) => {
        let count = 0;
        while(head) {
            count++;
            head = head.next;
        }

        return count;
    }

    let count = getNodeCount(head);
    let mid = count%2==0 ? Math.ceil(count/2) : Math.floor(count/2);
    for(let i = 0; i<mid; i++) {
        head = head.next;
    }

    return head;
};

