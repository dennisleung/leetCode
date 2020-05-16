/*
 * @lc app=leetcode id=147 lang=javascript
 *
 * [147] Insertion Sort List
 */

/*
22/22 cases passed (76 ms)
Your runtime beats 84.08 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (36.7 MB)

better solution:
function insertionSortList(head) {
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
}
*/

// @lc code=start
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
var insertionSortList = function(head) {
    const root = new ListNode(-Infinity);
    root.next = head;
    let cur = head;
    while(cur && cur.next) {
        if(cur.next.val<cur.val) {
            let nextNode = cur.next.next;
            let targetNode = cur.next;
            targetNode.next = null;
            cur.next = null;
            let innerCur = root;
            while(innerCur && innerCur.next) {
                if(innerCur.val<=targetNode.val && targetNode.val<=innerCur.next.val) {
                    let tmp = innerCur.next;
                    innerCur.next = targetNode;
                    targetNode.next = tmp;
                    break;
                }
                innerCur = innerCur.next;
            }
            cur.next = nextNode;
        }else {
            cur = cur.next;
        }
    }
    
    return root.next;
};

// test cases:
// assertCompare(()=>insertionSortList(makeLink([4,2,1,3])), makeLink([1,2,3,4]));
// assertCompare(()=>insertionSortList(makeLink([-1,5,3,4,0])), makeLink([-1,0,3,4,5]));

// @lc code=end

