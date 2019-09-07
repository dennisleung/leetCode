/*
 * @lc app=leetcode id=1025 lang=javascript
 *
 * [1025] Divisor Game
 */
/*
✔ Accepted
  ✔ 40/40 cases passed (52 ms)
  ✔ Your runtime beats 74.14 % of javascript submissions
  ✔ Your memory usage beats 60 % of javascript submissions (33.8 MB)

这道题原意是考察dp。。
但是有很巧妙的方法解决：
1.数字N如果是奇数，它的约数必然都是奇数；若为偶数，则其约数可奇可偶。 
2.无论N初始为多大的值，游戏最终只会进行到N=2时结束，那么谁轮到N=2时谁就会赢。 
3.因为爱丽丝先手，N初始若为偶数，爱丽丝则只需一直选1，使鲍勃一直面临N为奇数的情况，这样爱丽丝稳赢； N初始若为奇数，那么爱丽丝第一次选完之后N必为偶数，那么鲍勃只需一直选1就会稳赢。 
综述，判断N是奇数还是偶数，即可得出最终结果！
*/

/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function(N) {
    return N%2==0;
};

