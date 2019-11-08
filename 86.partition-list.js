/*
 * @lc app=leetcode id=86 lang=javascript
 *
 * [86] Partition List
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
166/166 cases passed (84 ms)
Your runtime beats 5.46 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (34.2 MB)

more clean solution:
var partition = function(head, x) {
    const dummyLess = new ListNode();
    const dummyMore = new ListNode();
    let node = head;
    let less = dummyLess;
    let more = dummyMore;
    while (node) {
        if (node.val < x) {
            less = less.next = node;
        } else {
            more = more.next = node;
        }
        node = node.next;
    }
    less.next = dummyMore.next;
    more.next = null;
    return dummyLess.next;
};
*/

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    const sHead = new ListNode();
    const oHead = new ListNode();
    oHead.next = head;
    let pre = oHead;
    let oCurrent = oHead.next;
    let sCurrent = sHead;
    while(oCurrent) {
        if(oCurrent.val<x) {
            pre.next = oCurrent.next;
            oCurrent.next = null;
            sCurrent.next = oCurrent;   
            sCurrent = sCurrent.next;
            oCurrent = pre.next;
        }else {
            pre = oCurrent;
            oCurrent = oCurrent.next;
        }
    }

    sCurrent.next = oHead.next;
    
    return sHead.next;
};

// test cases:
// assertCompare(()=>partition(makeLink([]), 3), makeLink([]));
// assertCompare(()=>partition(makeLink([1]), 3), makeLink([1]));
// assertCompare(()=>partition(makeLink([1,4,3,2,5,2]), 3), makeLink([1,2,2,4,3,5]));
// assertCompare(()=>partition(makeLink([1,2,3]), 4), makeLink([1,2,3]));

// @lc code=end

