/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
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
55/55 cases passed (60 ms)
Your runtime beats 25.71 % of javascript submissions
Your memory usage beats 47.37 % of javascript submissions (33.8 MB)

recursive solution:
var swapPairs = function(head) {
  var recur = function(node) {
      if(!node || !node.next) {
          return node;
      }
      var tmp = node.next;
      node.next = recur(node.next.next);
      tmp.next = node;
      return tmp;
  }
  
  return recur(head);
    
};
*/
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var swapPairs = function(head) {
//     const root = new ListNode();
//     root.next = head;
//     head = root;
//     while(head.next && head.next.next) {
//         let tmp = head.next;
//         head.next = tmp.next;
//         tmp.next = tmp.next.next;
//         head.next.next = tmp;
//         head = tmp;
//     }

//     return root.next;
// };


var swapPairs = function(head) {
    const root = new ListNode();
    root.next = head;
    head = root;
    while(head.next && head.next.next) {
        [head.next.next.next, head.next.next, head.next, head] = [head.next, head.next.next.next, head.next.next, head.next];
    }

    return root.next;
};
// @lc code=end

