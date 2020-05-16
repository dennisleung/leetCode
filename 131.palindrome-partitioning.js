/*
 * @lc app=leetcode id=131 lang=javascript
 *
 * [131] Palindrome Partitioning
 */

/*
22/22 cases passed (84 ms)
Your runtime beats 35.22 % of javascript submissions
Your memory usage beats 33.33 % of javascript submissions (41.7 MB)

iterative solution:
const isPalindrome = (s) => {
    return s !== '' && s === s.split('').reverse().join('');
}

var partition = function(s) {
    if (s === '') return [[]];
    let ret = [], myStack = [[[], 0]];
    while (myStack.length) {
        const [temp, i] = myStack.pop();
        for (let j=i+1; j<=s.length; j++) {
            const leadingString = s.substring(i, j);
            if (isPalindrome(leadingString)) {
                const newTemp = [...temp, leadingString];
                j === s.length ? ret.push(newTemp) : myStack.push([newTemp, j]);
            }
        }
    }
    return ret;
}; 
*/

// @lc code=start

var isPalindrome = function(str) {
    for(let i = 0, j = str.length-1; i<j; i++, j--) {
        if(str[i]!=str[j]) {
            return false;
        }
    }

    return true;
};

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    if(!s) {
        return [];
    }
    if(s.length==1) {
        return [[s]];
    }

    let result = [];
    for(let i = 1; i<=s.length; i++) {
        let aStr = s.slice(0, i);
        if(isPalindrome(aStr)) {
            let arr = partition(s.slice(i));
            if(arr.length) {
                result = result.concat(arr.map(v=>[aStr, ...v]));
            }else {
                result.push([aStr]);
            }
            
        }
    }

    return result;
};

// test cases:
// assertCompare(()=>partition(""), []);
// assertCompare(()=>partition("a"), [["a"]]);
// assertCompare(()=>partition("aa"), [["a", "a"], ["aa"]]);
// assertCompare(()=>partition("ab"), [["a", "b"]]);
// assertCompare(()=>partition("aab"), [
//   ["aa","b"],
//   ["a","a","b"]
// ]);
// @lc code=end

