/*
 * @lc app=leetcode id=705 lang=javascript
 *
 * [705] Design HashSet
 */
/*
✔ Accepted
  ✔ 28/28 cases passed (168 ms)
  ✔ Your runtime beats 100 % of javascript submissions
  ✔ Your memory usage beats 44.25 % of javascript submissions (53.3 MB)
*/

/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
    this.map = {};
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    this.map[key] = true;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    delete this.map[key];
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    return !!this.map[key];
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

