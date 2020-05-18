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