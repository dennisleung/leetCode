/*
 * @lc app=leetcode id=704 lang=javascript
 *
 * [704] Binary Search
 */
/*
✔ Accepted
  ✔ 46/46 cases passed (40 ms)
  ✔ Your runtime beats 100 % of javascript submissions
  ✔ Your memory usage beats 64.59 % of javascript submissions (36.8 MB)


 better solution:
 var search = function(nums, target) {
    let begin=0
    let end = nums.length-1
    while(begin<=end){
        let mid = parseInt((begin+end)/2)
        if(nums[mid]==target) return mid
        if(target>nums[mid]) begin=mid+1
        else end=mid-1
    }
    return -1
}; 
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    for(var low = 0, high = nums.length-1, mid=Math.ceil((high+low)/2);mid<=high;mid=Math.ceil((high+low)/2)) {
        if(target==nums[high]) {
            return high
        }else if(target==nums[mid]) {
            return mid;
        }else if(target<nums[mid]) {
            high = Math.min(mid, high-1);
        }else if(target>nums[mid]){
            low = Math.max(mid, low+1);
        }else {
            break;
        }
    }

    return -1;
};

