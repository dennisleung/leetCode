/*
 * @lc app=leetcode id=179 lang=javascript
 *
 * [179] Largest Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
/*
222/222 cases passed (64 ms)
Your runtime beats 75.8 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (36.8 MB)

*/
//one-liner solution:
//return nums.sort((a, b) => ('' + b + a) - ('' + a + b) ).join('').replace(/^0*/,'') || '0';

var largestNumber = function(nums) {
    nums = nums.map(v=>`${v}`);
    nums.sort((a, b)=>{
        const str1 = `${a}${b}`;
        const str2 = `${b}${a}`;
        for(var i = 0, len = str1.length; i<len; i++) {
            if(str1[i]==str2[i]) {
                continue;
            }else if(str1[i]<str2[i]) {
                return 1;
            }else {
                return -1;
            }
        }
    });

    const result = nums.join("").replace(/^0+/, "");
    return result ? result : "0";
};

// test cases:
// assertCompare(()=>largestNumber([1]), "1");
// assertCompare(()=>largestNumber([10,2]), "210");
// assertCompare(()=>largestNumber([3,30,34,5,9]), "9534330");
// assertCompare(()=>largestNumber([121,12]), "12121");
// assertCompare(()=>largestNumber([0,0]), "0");

// @lc code=end

