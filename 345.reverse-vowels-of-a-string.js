/*
 * @lc app=leetcode id=345 lang=javascript
 *
 * [345] Reverse Vowels of a String
 *
 * https://leetcode.com/problems/reverse-vowels-of-a-string/description/
 *
 * algorithms
 * Easy (41.15%)
 * Total Accepted:    150K
 * Total Submissions: 364.2K
 * Testcase Example:  '"hello"'
 *
 * Write a function that takes a string as input and reverse only the vowels of
 * a string.
 * 
 * Example 1:
 * 
 * 
 * Input: "hello"
 * Output: "holle"
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "leetcode"
 * Output: "leotcede"
 * 
 * 
 * Note:
 * The vowels does not include the letter "y".
 * 
 * 
 * 
 */
/*
vowels：元音
调换元音。

-------------------
✔ Accepted
  ✔ 481/481 cases passed (84 ms)
  ✔ Your runtime beats 91.51 % of javascript submissions
  ✔ Your memory usage beats 82.76 % of javascript submissions (38.6 MB)
*/
const map = {
    'a' : 1,
    'A' : 1,
    'e' : 1,
    'E' : 1,
    'i' : 1,
    'I' : 1,
    'o' : 1,
    'O' : 1,
    'u' : 1,
    'U' : 1,
}

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    s = s.split("");
    let i = 0;
    let j = s.length - 1;
    while(true) {
        while(!map[s[i]] && i<j) {i++}
        while(!map[s[j]] && i<j) {j--}
        if(i<j) {
            let tmp = s[i];
            s[i] = s[j];
            s[j] = tmp;
        }else {
            break;
        }
        i++;
        j--;
    }

    return s.join("");
};

