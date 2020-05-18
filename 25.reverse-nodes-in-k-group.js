/*
 * @lc app=leetcode id=25 lang=javascript
 *
 * [25] Reverse Nodes in k-Group
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// Runtime: 112 ms, faster than 12.97% of JavaScript online submissions for Reverse Nodes in k-Group.
// Memory Usage: 38.3 MB, less than 100.00% of JavaScript online submissions for Reverse Nodes in k-Group.

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    const helper = function(pre) {
        let count = 0;
        let cur = pre.next;
        while(cur && count++<k) {
            cur = cur.next;
        }
        if(count<k) {
            return null;
        }
        let head = pre.next;
        let stub = pre.next;
        cur = stub.next;
        let i = 0;
        while(cur && ++i<k) {
            [head.next, stub, cur.next, cur] = [cur.next, cur, stub, cur.next];
        }
        pre.next = stub;
        
        return head;
    };

    const root = new ListNode();
    root.next = head;
    let pre = root;
    while(pre) {
        pre = helper(pre);
    }
    
    return root.next;
};

test("test1", ()=>{
    const list = makeLink([]);
    expect(reverseKGroup(list, 1)).toEqual(makeLink([]));
})

test("test2", ()=>{
    const list = makeLink([1]);
    expect(reverseKGroup(list, 1)).toEqual(makeLink([1]));
})

test("test3", ()=>{
    const list = makeLink([1]);
    expect(reverseKGroup(list, 2)).toEqual(makeLink([1]));
})

test("test4", ()=>{
    const list = makeLink([1,2,3]);
    expect(reverseKGroup(list, 2)).toEqual(makeLink([2,1,3]));
})

test("test5", ()=>{
    const list = makeLink([1,2,3]);
    expect(reverseKGroup(list, 3)).toEqual(makeLink([3,2,1]));
})

test("test6", ()=>{
    const list = makeLink([1,2,3,4,5,6]);
    expect(reverseKGroup(list, 3)).toEqual(makeLink([3,2,1,6,5,4]));
})

test("test7", ()=>{
    const list = makeLink([1,2,3,4,5]);
    expect(reverseKGroup(list, 3)).toEqual(makeLink([3,2,1,4,5]));
})
// @lc code=end

