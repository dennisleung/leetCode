/*
 * @lc app=leetcode id=148 lang=javascript
 *
 * [148] Sort List
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
16/16 cases passed (856 ms)
Your runtime beats 8.58 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (39.5 MB)

merge sort solution:
var sortList = function(head) {
    //checking if head is empty return it 
    if(!head || !head.next) return head;
    
    //Now we need to split list for two part. and sort them. Read about merge sort:
    //https://hackernoon.com/programming-with-js-merge-sort-deb677b777c0
    
    // this two pointers we need to calculate the center of the List. 
    // When fast_pointer achives the end of the List slow_pointer will indicate its center
    let slow_pointer = head, 
        fast_pointer = head;
    
    while(fast_pointer.next && fast_pointer.next.next){
        fast_pointer = fast_pointer.next.next;
        slow_pointer = slow_pointer.next;
    }
    
    //In next two lines we will separate List on two parts.
    
    //second part of list
    fast_pointer = slow_pointer.next;
    // cut second part of the List from the head
    slow_pointer.next = null;
    
    let left = sortList(head);
    let right = sortList(fast_pointer);
    return mergeSort(left, right);
    
};

//merge sort algorithm
var mergeSort = function (A, B){
    let list = new ListNode(-1);
    let head = list;
    while(A && B){
        if (A.val < B.val){
            head.next = A;
            A = A.next;
        } else {
            head.next = B;
            B = B.next;
        }
        head = head.next;

    }
    if (A) head.next = A;
    if (B) head.next = B;
    
    return list.next;
}

quick sort solution:
const oneTimeQuickSort = (begin, end) => {
  let rightMostSmallNode = begin;
  let compareNode = begin.next;
  while(compareNode !== end) {
    if (compareNode.val < begin.val) {
      if (rightMostSmallNode.next.val !== compareNode.val) {
        [rightMostSmallNode.next.val, compareNode.val] = [compareNode.val, rightMostSmallNode.next.val];
      }
      rightMostSmallNode = rightMostSmallNode.next;
    }
    compareNode = compareNode.next;
  }
  [rightMostSmallNode.val, begin.val] = [begin.val, rightMostSmallNode.val];
  return rightMostSmallNode;
};

const sortList = (begin, end = null) => {
  if (begin === null || begin === end) return begin;
  const someNode = oneTimeQuickSort(begin, end);
  sortList(begin, someNode);
  sortList(someNode.next, end);
  return begin;
};
*/

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    var before = { val: -Number.MAX_VALUE, next: null };
    
    while (head) {
        var prev = before;
        
        // find prev
        while (prev.next && prev.next.val < head.val) {
            prev = prev.next;
        }
        
        var next = head.next;
        head.next = prev.next;
        prev.next = head;
        head = next;
    }
    
    return before.next;
};
// @lc code=end

