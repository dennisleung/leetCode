/*
 * @lc app=leetcode id=852 lang=javascript
 *
 * [852] Peak Index in a Mountain Array
 */
/*
✔ Accepted
  ✔ 32/32 cases passed (60 ms)
  ✔ Your runtime beats 42.05 % of javascript submissions
  ✔ Your memory usage beats 7.32 % of javascript submissions (35.5 MB)

better solution:
var peakIndexInMountainArray = function(A) {
    return A.indexOf(Math.max(...A));
};

or binary search:
var peakIndexInMountainArray = function(A) {
    return findMountainIndex(A, 0, A.length - 1);
};

function findMountainIndex(arr, lo, hi) {
    if(lo > hi) {
        return -1;
    }
    const mid = Math.floor((lo+hi)/2);
    if(arr[mid-1] < arr[mid] && arr[mid] > arr[mid+1]) {
        return mid;
    } else if(arr[mid-1] < arr[mid] && arr[mid] < arr[mid+1]) {
        return findMountainIndex(arr, mid + 1, hi);
    } else {
        return findMountainIndex(arr, lo, mid - 1);
    }
}
*/

/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
    for(let i = 1, len = A.length; i<len-1; i++) {
        if(A[i-1]<A[i] && A[i]>A[i+1]) {
            return i;
        }
    }
};

