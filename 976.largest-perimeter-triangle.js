/*
 * @lc app=leetcode id=976 lang=javascript
 *
 * [976] Largest Perimeter Triangle
 */
/*
✔ Accepted
  ✔ 84/84 cases passed (3132 ms)
  ✔ Your runtime beats 5.13 % of javascript submissions
  ✔ Your memory usage beats 100 % of javascript submissions (38.2 MB)

better solution:
var largestPerimeter = function(A) {
	A.sort(function(a, b) { return b - a; });    
	for(let i=0;i<A.length-2;i++){
		let sum = A[i+1] + A[i+2];
		if (sum > A[i]) return sum + A[i];
	 }
	return 0;  
}
*/

/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function(A) {
    A.sort((a,b)=>b-a);
    for(let i = 0, iLen = A.length-2; i<iLen; i++) {
        for(let j = i+1, jLen = A.length-1; j<jLen; j++) {
            for(let k = j+1, kLen = A.length; k<kLen; k++) {
                if(A[k]+A[j]>A[i]) {
                    return A[k] + A[j] + A[i];
                }
            }
        }
    }

    return 0;
};

