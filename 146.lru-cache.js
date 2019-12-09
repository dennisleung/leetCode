/*
 * @lc app=leetcode id=146 lang=javascript
 *
 * [146] LRU Cache
 */

/*
18/18 cases passed (448 ms)
Your runtime beats 6.56 % of javascript submissions
Your memory usage beats 10 % of javascript submissions (60.3 MB)

better solution:
class LRUCache {
  constructor(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
  }

  get(key) {
    if (!this.cache.has(key)) return -1;

    const v = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, v);
    return this.cache.get(key);
  };

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    this.cache.set(key, value);
    if (this.cache.size > this.capacity) {
        //下面使用迭代器很巧妙地获取最老地元素
      this.cache.delete(this.cache.keys().next().value);  // keys().next().value returns first item's key
    }
  };
}
*/

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.cache = {};
    this.capacity = capacity;
    this.counter = 0;
    this.currentCount = 0;
};

LRUCache.prototype._getCounter = function() {
    return this.counter++;
};

LRUCache.prototype._checkCapacity = function() {
    if(this.currentCount>this.capacity) {
        let minKey = -1;
        let minCounter = Infinity;
        for(let key in this.cache) {
            if(this.cache[key]["counter"]<minCounter) {
                minCounter = this.cache[key]["counter"];
                minKey = key;
            }
        }
        delete this.cache[minKey];
        this.currentCount--;
    }
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    const item = this.cache[key];
    if(!item) {
        return -1;
    }
    item["counter"] = this._getCounter();
    return item["value"];
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let item = this.cache[key];
    if(!item) {
        item = {};
        this.currentCount++;
    }
    item["value"] = value;
    item["counter"] = this._getCounter();
    this.cache[key] = item;
    this._checkCapacity();
};

// test cases:
// const cache = new LRUCache(2);
// cache.put(1, 1);
// cache.put(2, 2);
// console.log(cache.get(1));//1

// cache.put(3, 3);
// console.log(cache.get(2));//-1

// cache.put(4, 4); 
// console.log(cache.get(1));//-1
// console.log(cache.get(3));//3
// console.log(cache.get(4));//4
// @lc code=end

