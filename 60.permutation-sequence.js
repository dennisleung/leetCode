/*
 * @lc app=leetcode id=60 lang=javascript
 *
 * [60] Permutation Sequence
 */
/*
200/200 cases passed (60 ms)
Your runtime beats 67.65 % of javascript submissions
Your memory usage beats 66.67 % of javascript submissions (34 MB)

more clean solution:
function fact(n) {
  var f = 1;
  while(n > 0) f *= n--;
  return f;
}

function getPermutation(n, k) {
  var res = "";
  var arr = [];
  for(var i = 1; i <= n; i++) {arr.push(i);}
  
  var n2 = n;
  for(var i = 0; i < n2; i++) {
    var nf = fact(n-1); // factorial of n-1
    var x = Math.ceil(k/nf) - 1;
    res.push(arr.splice(x,1)[0]);
    k -= x * nf;
    n = n-1;
  }
  
  return res.join('');
}
*/
// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let units = [];
    let arr = [];
    let tmp = 1;
    for(let i = 1; i<=n; i++) {
        tmp *= i;
        units[i-1] = tmp;
        arr.push(i);
    }

    units = units.slice(0, n).reverse();
    let result = "";
    
    for(let i = 1; i<units.length; i++) {
        let tmp = Math.floor(k/units[i]);
        if(k-tmp*units[i]==0) {
            tmp--;
        }
        result += arr.splice(tmp, 1)[0];
        k -= units[i] * tmp;
    }
    result += arr[0];

    return result;
};

// test cases:
// assertCompare(()=>getPermutation(1, 1), "1");
// assertCompare(()=>getPermutation(2, 1), "12");
// assertCompare(()=>getPermutation(3, 3), "213");
// assertCompare(()=>getPermutation(4, 9), "2314");
// assertCompare(()=>getPermutation(9, 23783), "168239745");

// @lc code=end

