/*
 * @lc app=leetcode id=150 lang=javascript
 *
 * [150] Evaluate Reverse Polish Notation
 */

/*
20/20 cases passed (52 ms)
Your runtime beats 99.39 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (37 MB)
*/

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const nums = [];
    const OP = ["+", "-", "*", "/"];
    for(let token of tokens) {
        if(OP.indexOf(token)===-1) {
            nums.push(token);
        }else {
            let num2 = parseInt(nums.pop());
            let num1 = parseInt(nums.pop());
            let result;
            switch(token) {
                case "+":
                    result = num1 + num2;
                    break;
                case "-":
                    result = num1 - num2;
                    break;
                case "*":
                    result = num1 * num2;
                    break;
                default:
                    result = ~~(num1 / num2);
                    break;
            }
            nums.push(result);
        }
    }

    return nums[0];
};

// test cases:
// assertCompare(()=>evalRPN(["2", "1", "+", "3", "*"]), 9);
// assertCompare(()=>evalRPN(["4", "13", "5", "/", "+"]), 6);
// assertCompare(()=>evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]), 22);

// @lc code=end

