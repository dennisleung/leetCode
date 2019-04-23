/*
 * @lc app=leetcode id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */

 /*
 ✔ Accepted
  ✔ 8/8 cases passed (64 ms)
  ✔ Your runtime beats 100 % of javascript submissions
  ✔ Your memory usage beats 73.44 % of javascript submissions (37.3 MB)
 
1、一种更好的填充数组的方法：new Array(n).fill(0)
2、注意new Array(n).map(()=>{})不会执行map里面的方法，因为这个数组产生的元素都是不可迭代的

one-line solution:
var fizzBuzz = function(n) {
    return new Array(n).fill(0).map((a, i) => (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || '' + i);
};

 */

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let arr = Array(n+1).join("0").split("");
    return arr.map((v, i)=>{
        let mod3 = (i+1)%3==0;
        let mod5 = (i+1)%5==0;
        if(mod3 && mod5) {
            return "FizzBuzz";
        }else if(mod3) {
            return "Fizz";
        }else if(mod5) {
            return "Buzz";
        }else {
            return ""+(i+1);
        }
    });
};

