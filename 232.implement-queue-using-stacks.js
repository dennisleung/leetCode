/*
 * @lc app=leetcode id=232 lang=javascript
 *
 * [232] Implement Queue using Stacks
 *
 * https://leetcode.com/problems/implement-queue-using-stacks/description/
 *
 * algorithms
 * Easy (42.54%)
 * Total Accepted:    143.3K
 * Total Submissions: 336K
 * Testcase Example:  '["MyQueue","push","push","peek","pop","empty"]\n[[],[1],[2],[],[],[]]'
 *
 * Implement the following operations of a queue using stacks.
 * 
 * 
 * push(x) -- Push element x to the back of queue.
 * pop() -- Removes the element from in front of queue.
 * peek() -- Get the front element.
 * empty() -- Return whether the queue is empty.
 * 
 * 
 * Example:
 * 
 * 
 * MyQueue queue = new MyQueue();
 * 
 * queue.push(1);
 * queue.push(2);  
 * queue.peek();  // returns 1
 * queue.pop();   // returns 1
 * queue.empty(); // returns false
 * 
 * Notes:
 * 
 * 
 * You must use only standard operations of a stack -- which means only push to
 * top, peek/pop from top, size, and is empty operations are valid.
 * Depending on your language, stack may not be supported natively. You may
 * simulate a stack by using a list or deque (double-ended queue), as long as
 * you use only standard operations of a stack.
 * You may assume that all operations are valid (for example, no pop or peek
 * operations will be called on an empty queue).
 * 
 * 
 */
/**
 * Initialize your data structure here.
 */
class Stack {
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

var MyQueue = function() {
    this.input = new Stack();
    this.output = new Stack();
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.input.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    this._adjust();
    return this.output.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    this._adjust();
    const peekEl = this.output.pop();
    this.output.push(peekEl);

    return peekEl;
};

MyQueue.prototype._adjust = function() {
    if(!this.output.empty()) {
        return;
    }

    while(!this.input.empty()) {
        this.output.push(this.input.pop());
    }
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.input.empty() && this.output.empty();
};


const queue = new MyQueue();
queue.push(1);
queue.push(2);
test("test1", ()=>{
    expect(queue.peek()).toEqual(1);
})

test("test2", ()=>{
    expect(queue.pop()).toEqual(1);
})

test("test3", ()=>{
    expect(queue.empty()).toEqual(false);
})

test("test4", ()=>{
    queue.pop();
    expect(queue.empty()).toEqual(true);
})
