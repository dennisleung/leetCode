/*
 * @lc app=leetcode id=788 lang=javascript
 *
 * [788] Rotated Digits
 */
/*
✔ Accepted
  ✔ 50/50 cases passed (60 ms)
  ✔ Your runtime beats 91.15 % of javascript submissions
  ✔ Your memory usage beats 50 % of javascript submissions (37.3 MB)

another solution:
var rotatedDigits = function(N) {
    count = 0
    for(i=1;i<N+1;i++){
        x = (""+i).split("")
        if(x.includes('2') || x.includes('5') || x.includes('6') || x.includes('9')){
            count += 1
            if(x.includes('3') || x.includes('4') || x.includes('7')){
                count -= 1
            }
        }
    }
    return count
};
*/
/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function(N) {
    const isValid = (n)=>{
        n = `${n}`;
        return /^[0125689]+$/.test(n) && /[2569]/.test(n);
    };
    let count = 0;
    for(let i = 1; i<=N; i++) {
        isValid(i) && count++;
    }
    return count;
};

