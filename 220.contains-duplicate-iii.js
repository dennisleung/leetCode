/*
 * @lc app=leetcode id=220 lang=javascript
 *
 * [220] Contains Duplicate III
 */
/*
41/41 cases passed (380 ms)
Your runtime beats 34.13 % of javascript submissions
Your memory usage beats 50 % of javascript submissions (35.2 MB)

better solution:
function containsNearbyAlmostDuplicate(nums, k, t) {
  const map = nums
    .map((val, idx) => ({ val, idx }))
    .sort((a, b) => a.val - b.val);

  let l = 0;
  let r = 1;

  while (r < map.length) {
    const diff = Math.abs(map[r].val - map[l].val);
    const range = Math.abs(map[r].idx - map[l].idx);

    if (diff <= t && range <= k) return true;
    else if (diff > t) l++;
    else if (range > k) r++;

    if (l === r) r++;
  }

  return false;
}
*/
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    for(let i = 0; i<nums.length; i++) {
        for(j = i+1, len = Math.min(i+k+1, nums.length); j<len; j++) {
            if(Math.abs(nums[j]-nums[i])<=t) {
                return true;
            }
        }
    }
    
    return false;
};

// test cases:
// assertCompare(()=>containsNearbyAlmostDuplicate([1,2,3,1], 3, 0), true);
// assertCompare(()=>containsNearbyAlmostDuplicate([1,0,1,1], 1, 2), true);
// assertCompare(()=>containsNearbyAlmostDuplicate([1,5,9,1,5,9], 2, 3), false);

// @lc code=end

