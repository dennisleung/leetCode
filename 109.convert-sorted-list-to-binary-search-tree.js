/*
 * @lc app=leetcode id=109 lang=javascript
 *
 * [109] Convert Sorted List to Binary Search Tree
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
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
32/32 cases passed (80 ms)
Your runtime beats 24.21 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (40.6 MB)

another solution:
const getListLength=head=>{
    let counter=0,ptr=head;
    while(ptr){
        counter=counter+1;
        ptr=ptr.next;
    }
    return counter;
}

var sortedListToBST = function(head) {
    const listToTree=(l,r)=>{
        if(l<=r) {
            let middle=Math.floor((l+r)/2);
            let left=listToTree(l,middle-1);
            let root=new TreeNode(head.val);
            root.left=left;
            head=head.next;
            root.right=listToTree(middle+1,r);
            return root;
        }
        else return null;
   };
    return listToTree(0,getListLength(head)-1);
};

two-pointers solution:
var sortedListToBST = function(head) {

    const buildTree = (head) => {
      if (!head) return null;
      else if (!head.next) return new TreeNode(head.val);

      // 利用快慢指针得到list中点之前的那个node
      // eg1: 1->2->3->4->5, 需要得到2的reference
      // eg2: 1->2->3->4, 同样需要得到2的reference

      let fast = head.next.next, slow = head;
      while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
      }

      const root = new TreeNode(slow.next.val);
      // get the start of right list
      const rightListStart = slow.next.next;
      // break the left list
      slow.next = null;
      root.left = buildTree(head);
      root.right = buildTree(rightListStart);
      return root;
    };

    return buildTree(head);
};
*/

var arr2BST = function(arr) {
    if(!arr.length) {
        return null;
    }

    const rootIndex = Math.floor(arr.length/2);
    const root = new TreeNode(arr[rootIndex]);
    root.left = arr2BST(arr.slice(0, rootIndex));
    root.right = arr2BST(arr.slice(rootIndex+1));

    return root;
};

/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    const arr = [];
    while(head) {
        arr.push(head.val);
        head = head.next;
    }

    return arr2BST(arr);
};

// test cases:
// assertCompare(()=>sortedListToBST(makeLink([])), makeTree([]));
// assertCompare(()=>sortedListToBST(makeLink([1])), makeTree([1]));
// assertCompare(()=>sortedListToBST(makeLink([1,2])), makeTree([2,1]));
// assertCompare(()=>sortedListToBST(makeLink([1,2,3])), makeTree([2,1,3]));
// assertCompare(()=>sortedListToBST(makeLink([-10,-3,0,5,9])), makeTree([0,-3,9,-10,null,5]));

// @lc code=end

