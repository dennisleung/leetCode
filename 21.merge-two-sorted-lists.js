/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 *
 * https://leetcode.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (46.02%)
 * Total Accepted:    522.1K
 * Total Submissions: 1.1M
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * Merge two sorted linked lists and return it as a new list. The new list
 * should be made by splicing together the nodes of the first two lists.
 * 
 * Example:
 * 
 * Input: 1->2->4, 1->3->4
 * Output: 1->1->2->3->4->4
 * 
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let head = null;
    let cur = head;
    while(l1 && l2) {
        let val, next;
        if(l1.val<=l2.val) {
            next = new ListNode(l1.val);
            l1 = l1.next;
        }else {
            next = new ListNode(l2.val);
            l2 = l2.next;
        }
        if(!cur) {
            head = cur = next;
        }else {
            cur.next = next;
            cur = cur.next;
        }
    }

    let next = null;
    if(l1) {
        next = l1;
    }else if(l2) {
        next = l2;
    }
    if(!cur) {
        head = next;
    }else {
        cur.next = next;
    }

    return head;
};

