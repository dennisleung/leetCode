/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
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
  ✔ 1563/1563 cases passed (116 ms)
  ✔ Your runtime beats 60.65 % of javascript submissions
  ✔ Your memory usage beats 34.72 % of javascript submissions (38.6 MB)

better solution:
function addTwoNumbers(l1, l2) {
  const before = new ListNode();
  let tail = before;
  let c = 0;

  while (l1 || l2 || c) {
    const v1 = l1 ? l1.val : 0;
    const v2 = l2 ? l2.val : 0;
    const v = v1+v2+c;

    tail.next = new ListNode(v%10);
    tail = tail.next;
    c = v >= 10 ? 1 : 0;
    l1 = l1&&l1.next;
    l2 = l2&&l2.next;
  }

  return before.next;
}
*/

const makeLink = (arr)=>{
    if(!arr.length) {
        return null;
    }
    let head = cur = new ListNode();
    arr.forEach((v)=>{
        cur.next = new ListNode(v);
        cur = cur.next;
    });

    return head.next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const result = [];
    let acc = 0;
    while(true) {
        if(!l1 && !l2) {
            if(acc) {
                result.push(acc);
            }
            break;
        }
        let r = acc;
        if(l1) {
            r += l1.val;
            l1 = l1.next;
        }

        if(l2) {
            r += l2.val;
            l2 = l2.next;
        }

        result.push(r%10);
        acc = r>=10 ? 1 : 0;
    }

    return makeLink(result);
};

