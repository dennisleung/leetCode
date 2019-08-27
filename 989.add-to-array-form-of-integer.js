/*
 * @lc app=leetcode id=989 lang=javascript
 *
 * [989] Add to Array-Form of Integer
 */
/*
✔ Accepted
  ✔ 156/156 cases passed (192 ms)
  ✔ Your runtime beats 18.74 % of javascript submissions
  ✔ Your memory usage beats 10 % of javascript submissions (41.7 MB)

another solution:
var addToArrayForm = function(arr, K) {
  arr.reverse();
  
  let carry = 0;

  for (let [i, num] of arr.entries()) {
    const total = num + K + carry;//这里巧妙地跳出了一个位上最大只能为9的限制
    arr[i] = total % 10;
    carry = Math.floor(total / 10);
    
    K = 0;
  }
  
  while (carry > 0) {
    arr.push(carry % 10);
    carry = Math.floor(carry / 10); 
  }

  return arr.reverse();
};

ES10 BigInt solution(current version of Chrome does not support)):
const addToArrayForm = (A, K) => {
    const string = A.join('');
    const number = BigInt(string) + BigInt(K);
    return Array.from((number).toString());
};
*/
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
    K = (""+K).split("");
    let result = [];
    let caret = 0;
    for(let i = 1, len = Math.max(A.length, K.length); i<=len; i++) {
        let aIndex = A.length - i;
        let kIndex = K.length - i;
        let sum = parseInt(A[aIndex]||0) + parseInt(K[kIndex]||0) + caret;
        caret = sum >= 10 ? 1 : 0;
        result.unshift(sum%10);
    }
    if(caret) {
        result.unshift(1);
    }
    return result;
};

