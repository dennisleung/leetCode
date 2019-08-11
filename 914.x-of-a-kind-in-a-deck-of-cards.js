/*
 * @lc app=leetcode id=914 lang=javascript
 *
 * [914] X of a Kind in a Deck of Cards
 */
/*
✔ Accepted
  ✔ 69/69 cases passed (60 ms)
  ✔ Your runtime beats 83.2 % of javascript submissions
  ✔ Your memory usage beats 100 % of javascript submissions (36.9 MB)

better solution:
var gcd = (a, b) => !b ? a : gcd(b, a % b)//用辗转相除法求最大公约数

var hasGroupsSizeX = function(deck) {
    let dic = deck.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1
        return acc
    }, {})
    return Object.values(dic).reduce((acc, cur) => gcd(acc, cur), 0) >= 2
}
*/
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    let cache = {};
    for(card of deck) {
        cache[card] = (cache[card] || 0) + 1;
    }

    let counts = Object.values(cache);
    for(let i = 2, minCount = Math.min(...counts); i<=minCount; i++) {
        let flag = true;
        for(let c of counts) {
            if(c%i!==0) {
                flag = false;
                break;
            }
        }

        if(flag) {
            return true;
        }
    }
    return false;
};

