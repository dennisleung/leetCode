/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
 *
 * https://leetcode.com/problems/palindrome-linked-list/description/
 *
 * algorithms
 * Easy (35.57%)
 * Total Accepted:    244.8K
 * Total Submissions: 686.6K
 * Testcase Example:  '[1,2]'
 *
 * Given a singly linked list, determine if it is a palindrome.
 * 
 * Example 1:
 * 
 * 
 * Input: 1->2
 * Output: false
 * 
 * Example 2:
 * 
 * 
 * Input: 1->2->2->1
 * Output: true
 * 
 * Follow up:
 * Could you do it in O(n) time and O(1) space?
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/*
LeetCode上没找到最优解，但是发现一个寻找中位数的方案：
function findMid(head) {
    let slow = head;
    let fast = head && head.next
    while (fast) {
        slow = slow.next;
        fast = fast.next && fast.next.next;
    }
    return slow;
}
*/

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let str = [];
    while(head) {
        str.push(head.val);
        head = head.next;
    }

    for(let i = 0, len = str.length; i<len/2; i++) {
        if(str[i]!=str[len-i-1]) {
            return false;
        }
    }
    return true;
};

