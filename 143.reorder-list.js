/*
 * @lc app=leetcode id=143 lang=javascript
 *
 * [143] Reorder List
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
13/13 cases passed (88 ms)
Your runtime beats 59.59 % of javascript submissions
Your memory usage beats 50 % of javascript submissions (42 MB)

O(1) space solution:
var reorderList = function(head) {
  // nothing need to be done in case list is either empty or contains only one or two nodes
  if (!head || !head.next || !head.next.next) return head;

  // step 1: use fast and slow pointer to move to the middle of linked list
  // in case list is even, then move to the middle left node
  let fast = head.next, slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  // get the second half of list
  const secondHalf = slow.next;

  // break the list
  slow.next = null;

  // step 2: reverse the second half
  let curr = secondHalf, prev = null, tmp;

  while (curr) {
    tmp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = tmp;
  }

  // step 3: interleave the first half with second half
  let first = head, second = prev;
  while (second) {
    tmp = first.next;
    first.next = second;
    second = second.next;
    first.next.next = tmp;
    first = tmp;
  }
};
*/

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if(!head) {
        return null;
    }
    
    const arr = [];
    while(head) {
        arr.push(head);
        head = head.next;
    }

    let root = new ListNode();
    let cur = root;
    let flag = true;
    while(arr.length) {
        let node = flag ? arr.shift() : arr.pop();
        flag = !flag;
        node.next = null;
        cur.next = node;
        cur = node;
    }

    return root.next;
};

// test cases:
// assertCompare(()=>reorderList(makeLink([1,2,3,4])), makeLink([1,4,2,3]));
// assertCompare(()=>reorderList(makeLink([1])), makeLink([1]));
// assertCompare(()=>reorderList(makeLink([1,2])), makeLink([1,2]));
// assertCompare(()=>reorderList(makeLink([1,2,3])), makeLink([1,3,2]));
// assertCompare(()=>reorderList(makeLink([])), makeLink([]));

// @lc code=end

