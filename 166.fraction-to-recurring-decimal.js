/*
 * @lc app=leetcode id=166 lang=javascript
 *
 * [166] Fraction to Recurring Decimal
 */
/*
37/37 cases passed (68 ms)
Your runtime beats 12.27 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (34 MB)
*/
// @lc code=start
/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    let intPart = numerator/denominator;
    if(Math.floor(intPart)==Math.ceil(intPart)) {//整数
        return ""+intPart;
    }

    const flag = intPart > 0 ? "" : "-";
    numerator = Math.abs(numerator);
    denominator = Math.abs(denominator);
    intPart = Math.floor(numerator/denominator);
    let left = numerator - intPart * denominator;
    let decimalStr = "";
    const cache = {};
    while(true) {
        if(left==0) {
            break;
        }

        left *= 10;
        if(left<denominator) {
            decimalStr += "0";
            continue;
        }
        
        if(cache[left]===void 0) {
            cache[left] = decimalStr.length;
        }else {
            let startPos = cache[left];
            decimalStr = decimalStr.slice(0, startPos) + `(${decimalStr.slice(startPos)})`;
            break;
        }
    
        let cur = Math.floor(left/denominator);
        left -= cur * denominator;
        decimalStr += cur;
    }

    return `${flag}${intPart}.${decimalStr}`;
};

// test cases:
// assertCompare(()=>fractionToDecimal(1, 2), "0.5");
// assertCompare(()=>fractionToDecimal(2, 1), "2");
// assertCompare(()=>fractionToDecimal(2, 3), "0.(6)");
// assertCompare(()=>fractionToDecimal(2, 7), "0.(285714)");
// assertCompare(()=>fractionToDecimal(1, 6), "0.1(6)");
// assertCompare(()=>fractionToDecimal(-50, 8), "-6.25");
// assertCompare(()=>fractionToDecimal(7, -12), "-0.58(3)");

// @lc code=end

