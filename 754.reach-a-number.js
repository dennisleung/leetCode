/*
 * @lc app=leetcode id=754 lang=javascript
 *
 * [754] Reach a Number
 */
/*
✔ Accepted
  ✔ 73/73 cases passed (44 ms)
  ✔ Your runtime beats 98.78 % of javascript submissions
  ✔ Your memory usage beats 85.71 % of javascript submissions (33.9 MB)

  这道题没想出来。。

# 思路：
1. target 正负号不影响结果
2. 假设所有的step都向右的和为s，这时转换一个数字n向左，即减去这个数字的两倍（s - 2 * n）
3. 最多只有一个数字向左，即可达到target
4. 因为 s 需要减去一个偶数2*n，所以target 与 s 必须同为偶数，或者奇数
5. 完成
*/

/**
 * @param {number} target
 * @return {number}
 */
var reachNumber = function(target) {
    target = Math.abs(target);
    let index = Math.floor(Math.sqrt(target * 2));
    let sum = index * (index - 1) / 2;
    for(; ; ++index){
        sum += index;
        if(sum == target || (sum > target && ((sum - target) & 1) == 0)){
            return index;
        }
    }
};

