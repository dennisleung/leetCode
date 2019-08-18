/*
 * @lc app=leetcode id=18 lang=javascript
 *
 * [18] 4Sum
 */
/**
 * @param {number[]} nums
 * @param target
 * @return {number[][]}
 */
var threeSum = function(nums, target) {
    const cache = {};
    for(let num of nums) {
        cache[num] = (cache[num] || 0) + 1;
    }

    let result = {};
    nums.sort((a, b)=>a-b);
    for(let i = 0; i<nums.length; i++) {
        let low = i+1;
        let high = nums.length-1;
        while(low<high) {
            let r = nums[i] + nums[low] + nums[high];
            if(r>target) {
                high--;
            }else if(r<target){
                low++;
            }else {
                result[`${nums[i]}_${nums[low]}_${nums[high]}`] = [nums[i], nums[low], nums[high]];
                low++;
                high--;
            }
        }
    }

    return Object.values(result);
};
/*
✔ Accepted
  ✔ 282/282 cases passed (272 ms)
  ✔ Your runtime beats 18.69 % of javascript submissions
  ✔ Your memory usage beats 9.09 % of javascript submissions (44.6 MB)


一个通用的解法：
var fourSum = function (nums, target) {
    return kSum(nums, target, 4);
};

var kSum = function (nums, target, k) {

    let toSum = (ns, t, k, start) => {
        let res = [];
        if (k == 1) { // recursive to only one target num ( the sum of last two num should be O(n^2))
            for (let i = start; i < ns.length; i++) {
                if (ns[i] == t) return [[ns[i]]];
            }
        } else {
            for (let i = start; i < ns.length - k + 1; i++) {
                let temp = toSum(ns, t - ns[i], k - 1, i + 1);
                temp.forEach(t => {
                    t.push(ns[i]);
                    res.push(t);
                });
                //skip duplication
                while (i < ns.length - 1 && ns[i] == ns[i + 1]) i++;
            }
        }
        return res;
    }

    nums = nums.sort((a, b) => a - b);
    return toSum(nums, target, k, 0);
};


dfs会超时，但是这个递归貌似没问题，可以研究下：
const fourSum = function(nums, target) {
  let ans = {}, tmp = [], start = 0;
  nums.sort((a, b) => { return b - a});
  backtrack(ans, tmp, nums, target, start);
  return Object.values(ans); // just needs the values from the set
};


const backtrack = function(ans, tmp, nums, target, start){
  if (tmp.length === 4) { // this return save lots of memory, otherwise TLE
    if (target === 0) {
      ans[tmp.join('')] = tmp.slice(0); // tmp.join('') as key, tmp.slice(0) to remove duplicates
    }
    return;
  }
  
  for (let i = start; i < nums.length; i++) {
    tmp.push(nums[i]);
    backtrack(ans, tmp, nums, target - nums[i], i + 1);
    tmp.pop();
  }

};
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    const cache = {};
    for(let i = 0; i<nums.length; i++) {
        let result = threeSum(nums.slice(0, i).concat(nums.slice(i+1)), target-nums[i]);
        for(let arr of result) {
            arr = [...arr, nums[i]];
            let cacheKey = arr.sort((a,b)=>a-b).join("_");
            if(!cache[cacheKey]) {
                cache[cacheKey] = arr;
            }
        }
    }
    
    return Object.values(cache);
};

