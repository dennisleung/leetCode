/*
 * @lc app=leetcode id=707 lang=javascript
 *
 * [707] Design Linked List
 */

/**
 * ✔ Accepted
  ✔ 61/61 cases passed (132 ms)
  ✔ Your runtime beats 57.73 % of javascript submissions
  ✔ Your memory usage beats 12.5 % of javascript submissions (43 MB)
 
垃圾题， 各种特殊条件不说清除。。
 */

/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
    this.root = this.createNode(null);
};

MyLinkedList.prototype.createNode = function(val) {
    return {val, next:null};
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if(index<0) {
        return -1;
    }
    let cur = -1;
    let node = this.root;
    while(cur<=index) {
        if(!node) {
            break;
        }
        if(cur==index) {
            return node.val;
        }
        node = node.next;
        cur++;
    }

    return -1;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let next = this.root.next;
    let newNode = this.createNode(val);
    newNode.next = next;
    this.root.next = newNode;
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let node = this.root;
    while(node.next) {
        node = node.next;
    }
    node.next = this.createNode(val);
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    index = Math.max(index, 0);
    let cur = -1;
    let node = this.root;
    while(cur++<=index) {
        if(!node) {
            break;
        }
        if(cur==index) {
            let next = node.next;
            let newNode = this.createNode(val);
            newNode.next = next;
            node.next = newNode;
            return;
        }
        node = node.next;
    }
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index<0) {
        return;
    }
    let cur = -1;
    let node = this.root;
    while(cur++<=index) {
        if(!node) {
            break;
        }
        if(cur==index) {
            if(node.next) {
                node.next = node.next.next;
            }
            return;
        }
        node = node.next;
    }
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

