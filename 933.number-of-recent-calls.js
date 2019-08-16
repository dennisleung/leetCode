/*
 * @lc app=leetcode id=933 lang=javascript
 *
 * [933] Number of Recent Calls
 */

/*
✔ Accepted
  ✔ 68/68 cases passed (368 ms)
  ✔ Your runtime beats 28.3 % of javascript submissions
  ✔ Your memory usage beats 30 % of javascript submissions (66.1 MB)
*/ 

var RecentCounter = function() {
    this.counter = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    for(var i = 0; i<this.counter.length; i++) {
        if(this.counter[i]>=t-3000) {
            break;
        }
    }
    this.counter = this.counter.slice(i);
    this.counter.push(t);
    return this.counter.length;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

