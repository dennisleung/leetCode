/*
 * @lc app=leetcode id=142 lang=javascript
 *
 * [142] Linked List Cycle II
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
16/16 cases passed (72 ms)
Your runtime beats 44.23 % of javascript submissions
Your memory usage beats 18.75 % of javascript submissions (37.8 MB)

O(1) space solution:
let detectCycle = function(head) {
    let slow = head;
    let fast = head;
    while (slow && fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow === fast) {
            while (head !== fast) {
                head = head.next;
                fast = fast.next;
            }
            return head;
        }
    }
    return null;
};

O(n) runtime, O(1) space solution:
const detectCycle = head => {
    if (!head || !head.next) return null;
    let slow = head;
    let fast = head;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) break;
    }
	
    if (fast === null || fast.next === null) return null;
	
    fast = head;
    while (fast != slow) {
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
};
*/

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    const map = new Map();
    let index = 0;
    while(head) {
        if(map.has(head)) {
            return head;
        }
        map.set(head, index++);
        head = head.next;
    }

    return null;
};
// @lc code=end

