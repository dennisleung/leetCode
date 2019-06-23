/*
 * @lc app=leetcode id=680 lang=javascript
 *
 * [680] Valid Palindrome II
 */
/*
✔ Accepted
  ✔ 460/460 cases passed (104 ms)
  ✔ Your runtime beats 32.63 % of javascript submissions
  ✔ Your memory usage beats 19 % of javascript submissions (45.3 MB)


another solution:
var validPalindrome = function(s,c=0) {
    let i=0,j=s.length-1;
    while(i<j){
        if(s[i]==s[j]){
            i++;j--;
        }
        else{            
            if(c>0)
                return false;
            c++;
            return validPalindrome(s.substring(i,j),1)||validPalindrome(s.substring(i+1,j+1),1);
        }
    }
    return true;
};  
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    const isPalindrome = (strArr)=>{
        for(let i = 0, len = strArr.length; i<len/2; i++) {
            if(strArr[i]!=strArr[len-1-i]) {
                return false;
            }
        }
        return true;
    };

    for(let i = 0, len = s.length; i<len/2; i++) {
        if(s[i]!=s[len-1-i]) {
            let ss1 = s.split("");
            ss1.splice(i, 1);
            let ss2 = s.split("");
            ss2.splice(len-1-i, 1)
            if(isPalindrome(ss1) || isPalindrome(ss2)) {
                return true;
            }else {
                return false;
            }
        }
    }

    return true;
};

