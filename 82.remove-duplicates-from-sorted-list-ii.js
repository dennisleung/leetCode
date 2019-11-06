/*
 * @lc app=leetcode id=82 lang=javascript
 *
 * [82] Remove Duplicates from Sorted List II
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
168/168 cases passed (64 ms)
Your runtime beats 66.21 % of javascript submissions
Your memory usage beats 16.67 % of javascript submissions (37.3 MB)

two-pointers solution:
var deleteDuplicates = function(head) {
  if(!head) return null
  let list = new ListNode(0);
  let curr = list;
  let fast = head;
  let slow = head;
  while(fast){
    let counter = 0;
    if(fast.val === slow.val){
      while(fast && fast.val === slow.val){
        fast = fast.next;
        counter++;
      }
      if(counter === 1){
        curr.next = new ListNode(slow.val);
        curr = curr.next;
      }      
      slow = fast;
    }

  }
  return list.next;
};
*/

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    const cache = {};
    let current = head;
    while(current) {
        cache[current.val] = (cache[current.val]||0) + 1;
        current = current.next;
    }

    const root = new ListNode();
    root.next = head;
    let pre = root;
    current = pre.next;
    while(current) {
        if(cache[current.val]<=1) {
            pre.next = current;
            pre = pre.next;
        }
        current = current.next;
    }
    pre.next = null;

    return root.next;
};


// test cases:
// assertCompare(()=>deleteDuplicates(makeLink([1,2,3,3,4,4,5])), makeLink([1,2,5]));
// assertCompare(()=>deleteDuplicates(makeLink([1,1,1,2,3])), makeLink([2,3]));
// assertCompare(()=>deleteDuplicates(makeLink([1,1])), makeLink([]));
// @lc code=end

