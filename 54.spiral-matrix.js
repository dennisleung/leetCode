/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 */
/*
22/22 cases passed (36 ms)
Your runtime beats 100 % of javascript submissions
Your memory usage beats 72.73 % of javascript submissions (33.8 MB)

very clever solution:
var spiralOrder = function(matrix, result = []) {
     // Write your code here, and
      // return your final answer.
      if (matrix.length === 0) {
        return result

      }
	
	for (var i = 0; i < matrix.length; i++) {
		var current = matrix[i]
	 	if (i === 0) {
	 		result = result.concat(current);
	 	} else {
	 	  var last = current.pop();
	 		if (!last) {
	 			return result//for test cases [[7],[9],[6]]
	 		}
	 		result.push(last)
	 		current.reverse()
	 	} 
 	}
	
	matrix.shift()
 	return spiralOrder(matrix.reverse(), result)
};
*/
// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if(!matrix.length) {
        return [];
    }

    const result = [];
    const circle = (a, b) => {
        for(let i = a[1]; i<=b[1]; i++){result.push(matrix[a[0]][i]);}
        for(let i = a[0]+1; i<=b[0]; i++){result.push(matrix[i][b[1]]);}
        if(a[0]>=b[0] || a[1]>=b[1]) {
            return;
        }
        for(let i = b[1]-1; i>=a[1]; i--){result.push(matrix[b[0]][i]);}
        for(let i = b[0]-1; i>a[0]; i--){result.push(matrix[i][a[0]]);}
        
    }
    let a = [0, 0];
    let b = [matrix.length-1, matrix[matrix.length-1].length-1];
    while(a[0]<=b[0] && a[1]<=b[1]) {
        circle(a, b);
        a[0]++;a[1]++;
        b[0]--;b[1]--;
    }
    
    return result;
};

// test cases:
// assertCompare(()=>spiralOrder([
//     [ 1, 2, 3 ],
//     [ 4, 5, 6 ],
//     [ 7, 8, 9 ]
//     ]), [1,2,3,6,9,8,7,4,5]);
// assertCompare(()=>spiralOrder([
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9,10,11,12]
//     ]), [1,2,3,4,8,12,11,10,9,5,6,7]);//

// assertCompare(() => spiralOrder([
//         [1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9],
//         [10, 11, 12],
//     ]), [1,2,3,6,9,12,11,10,7,4,5,8]);
// assertCompare(()=>spiralOrder([[1]]), [1]);
// assertCompare(()=>spiralOrder([]), []);
// assertCompare(()=>spiralOrder([[6,9,7]]), [6,9,7]);
// assertCompare(()=>spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]), [1,2,3,4,8,12,11,10,9,5,6,7]);
// assertCompare(()=>spiralOrder([[7],[9],[6]]), [7,9,6]);
// assertCompare(()=>spiralOrder([[1,2],[3,4]]), [1,2,4,3]);
// @lc code=end

