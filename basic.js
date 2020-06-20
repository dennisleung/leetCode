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
};

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
};

export class PriorityQueue {
  constructor(isMinHeap = true) {
    this.isMinHeap = isMinHeap;
    this.arr = []; //先简单用数组实现
  }

  _adjust() {
    this.arr.sort((a, b) => {
      return this.isMinHeap ? a.priority - b.priority : b.priority - a.priority;
    });
  }

  enqueue(val, priority) {
    this.arr.push({ val, priority });
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

//并查集
export class UFS {
  constructor() {
    this.set = [];
  }

  makeSet(x) {
    this.set[x] = {
      parent: x,
      rank: 0,
    };
  }

  find(x) {
    //find root
    const node = this.set[x];
    if (!node) {
      return -1; //error
    } else if (node.parent == x) {
      return x;
    } else {
      return this.find(node.parent);
    }
  }

  connected(x, y) {
    return this.find(x) === this.find(y);
  }

  union(x, y) {
    if (this.connected(x, y)) {
      return true;
    }
    const xRoot = this.set[this.find(x)];
    const yRoot = this.set[this.find(y)];
    if (!xRoot || !yRoot) {
      //error
      return false;
    }

    if (xRoot.rank < yRoot.rank) {
      //往rank大的元素挂载，这样不增加rank
      xRoot.parent = y;
    } else if (xRoot.rank > yRoot.rank) {
      yRoot.parent = x;
    } else {
      xRoot.parent = y;
      yRoot.rank += 1;
    }

    return true;
  }
}
