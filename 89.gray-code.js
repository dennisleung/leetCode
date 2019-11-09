/*
 * @lc app=leetcode id=89 lang=javascript
 *
 * [89] Gray Code
 */

/*
12/12 cases passed (84 ms)
Your runtime beats 6.11 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (36.8 MB)
*/

// @lc code=start
/**
 * 数字->二进制->格雷码
 * @see https://baike.baidu.com/item/%E6%A0%BC%E9%9B%B7%E7%A0%81/6510858?fr=aladdin
 **/
const num2Gray = function(num) {
    // 二进制码→格雷码（编码）：
    // 此方法从对应的n位二进制码字中直接得到n位格雷码码字，步骤如下：
    // 对n位二进制的码字，从右到左，以0到n-1编号
    // 如果二进制码字的第i位和i+1位相同，则对应的格雷码的第i位为0，否则为1（当i+1=n时，二进制码字的第n位被认为是0，即第n-1位不变）
    const numStr = "0" + num.toString(2);
    let grayCode = "";
    for(let i = 0; i<numStr.length-1; i++) {
        grayCode += (numStr[i]==numStr[i+1] ? "0" : "1");
    }

    return grayCode;
};

/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    const result = [];
    for(let i = 0; i<Math.pow(2, n); i++) {
        result.push(parseInt(num2Gray(i), 2));
    }

    return result;
};

// test cases:
// assertCompare(()=>grayCode(2), [0,1,3,2]);
// assertCompare(()=>grayCode(3), [0,1,3,2,6,7,5,4]);
// assertCompare(()=>grayCode(0), [0]);
// assertCompare(()=>grayCode(1), [0,1]);
// @lc code=end

