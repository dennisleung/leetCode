export function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

export function ListNode(val) {
    this.val = val;
    this.next = null;
}

export const makeTree = (arr) => {
    if (!arr.length) {
        return null;
    }
    let head = new TreeNode(arr.shift());
    let nodes = [head];
    while (arr.length) {
        let node = nodes.shift();
        let left = arr.shift();
        let right = arr.shift();
        if (left || left === 0) {
            node.left = new TreeNode(left);
            nodes.push(node.left);
        }
        if (right || right === 0) {
            node.right = new TreeNode(right);
            nodes.push(node.right);
        }
    }

    return head;
}

export const makeLink = (arr) => {
    if (!arr.length) {
        return null;
    }
    let head = new ListNode();
    let cur = head;
    arr.forEach((v) => {
        cur.next = new ListNode(v);
        cur = cur.next;
    });

    return head.next;
}

export class PriorityQueue {
    constructor(isMinHeap=true) {
        this.isMinHeap = isMinHeap;
        this.arr = [];//先简单用数组实现
    }

    _adjust() {
        this.arr.sort((a, b)=>{
            return this.isMinHeap ? a.priority-b.priority : b.priority-a.priority;
        });
    }

    enqueue(val, priority) {
        this.arr.push({val, priority});
        this._adjust();
    }

    dequeue() {
        const root = this.arr.splice(0, 1)[0];
        this._adjust();
        return root && root.val;
    }

    peek() {
        const root = this.arr[0];
        return root && root.val;
    }

    size() {
        return this.arr.length;
    }
}

export class Stack {
    constructor() {
        this.stack = [];
    }
    push(x) {
        this.stack.push(x);
    }
    pop() {
        return this.stack.pop();
    }
    empty() {
        return !this.stack.length;
    }
}