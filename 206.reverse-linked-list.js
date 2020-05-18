/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
 *
 * https://leetcode.com/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (53.54%)
 * Total Accepted:    548.7K
 * Total Submissions: 1M
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * Reverse a singly linked list.
 * 
 * Example:
 * 
 * 
 * Input: 1->2->3->4->5->NULL
 * Output: 5->4->3->2->1->NULL
 * 
 * 
 * Follow up:
 * 
 * A linked list can be reversed either iteratively or recursively. Could you
 * implement both?
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
 * @param {ListNode} head
 * @return {ListNode}
 */
// var reverseList = function(head) {
//     const arr = [];
//     while(head) {
//         arr.push(head);
//         head = head.next;
//     }
//     arr.reverse();
//     head = new ListNode();
//     cur = head;
//     for(node of arr) {
//         node.next = null;
//         cur.next = node;
//         cur = node;
//     }

//     return head.next;
// };


// var reverseList = function(head) {
//     if(!head) {
//         return null;
//     }
//     let cur = head;
//     let next = cur.next;
//     cur.next = null;
//     while(next) {
//         let tmp = next.next;
//         next.next = cur;
//         cur = next;
//         next = tmp;
//     }

//     return cur;
// };

// var reverseList = function(head) {
//     if(!head) {
//         return null;
//     }
    
//     let cur = head;
//     let pre = null;
//     while(cur) {
//         let tmp = cur.next;
//         cur.next = pre;
//         pre = cur;
//         cur = tmp;
//     }

//     return pre;
// };

var reverseList = function(head) {
    if(!head) {
        return null;
    }
    
    let cur = head;
    let pre = null;
    while(cur) {
        [cur.next, pre, cur] = [pre, cur, cur.next];
    }

    return pre;
};

