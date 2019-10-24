/*
 * @lc app=leetcode id=61 lang=javascript
 *
 * [61] Rotate List
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
231/231 cases passed (60 ms)
Your runtime beats 88.75 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (35.7 MB)

better slow/fast pointer solution:
const rotateRight = (head, k) => {
    if (head === null) return head
    
    let p1 = head
    let p2 = head
    
    // move p2 forward for k steps
    for (let i = 0; i < k; i++) {
        p2 = (p2.next === null) ? head : p2.next
    }
    
    // move both pointers until p2.next becomes null
    while (p2.next !== null) {
        p1 = p1.next
        p2 = p2.next
    }
    
    // adjust the connections between nodes
    p2.next = head
    const newHead = p1.next
    p1.next = null
    return newHead
}
*/

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head) {
        return null;
    }

    let last = head;
    const arr = [];
    while(last) {
        arr.push(last);
        last = last.next;
    }

    k = k % arr.length;
    if(k>0) {
        arr[arr.length-1].next = arr[0];
        arr[arr.length-k-1].next = null;
        return arr[arr.length-k];
    }else {
        return head;
    }
};

// test cases:
// assertCompare(()=>rotateRight(null, 1), null);
// assertCompare(()=>rotateRight(makeLink([1]), 1), makeLink([1]));
// assertCompare(()=>rotateRight(makeLink([1]), 2), makeLink([1]));
// assertCompare(()=>rotateRight(makeLink([1,2]), 2), makeLink([1,2]));
// assertCompare(()=>rotateRight(makeLink([1,2,3,4,5]), 2), makeLink([4,5,1,2,3]));
// assertCompare(()=>rotateRight(makeLink([0,1,2]), 4), makeLink([2,0,1]));
// @lc code=end

