/*
 * @lc app=leetcode id=703 lang=javascript
 *
 * [703] Kth Largest Element in a Stream
 */
/*
✔ Accepted
  ✔ 10/10 cases passed (308 ms)
  ✔ Your runtime beats 34.78 % of javascript submissions
  ✔ Your memory usage beats 29.76 % of javascript submissions (45.4 MB)

*/

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k;
    this.nums = nums.sort((a,b)=>a-b);
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    if(!this.nums.length || val>=this.nums[this.nums.length-1]) {
        this.nums.push(val);
    }else if(val<=this.nums[0]) {
        this.nums.unshift(val);
    }else {
        for(let i = this.nums.length-1; i>0; i--) {
            if(this.nums[i]>=val && val>=this.nums[i-1]) {
                this.nums.splice(i, 0, val);
                break;
            }
        }
    }
    if(this.nums.length<this.k) {
        return null;
    }else {
        return this.nums[this.nums.length-this.k];
    }
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

