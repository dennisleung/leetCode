/*
 * @lc app=leetcode id=706 lang=javascript
 *
 * [706] Design HashMap
 */
/*
✔ Accepted
  ✔ 33/33 cases passed (224 ms)
  ✔ Your runtime beats 60.26 % of javascript submissions
  ✔ Your memory usage beats 88.95 % of javascript submissions (52.2 MB)
*/

/**
 * Initialize your data structure here.
 */
var MyHashMap = function() {
    this.map = {};
};

/**
 * value will always be non-negative. 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    this.map[key] = value;
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    let val = this.map[key];
    return val === void 0 ? -1 : val;
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    delete this.map[key];
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

