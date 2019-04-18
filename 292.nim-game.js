/*
 * @lc app=leetcode id=292 lang=javascript
 *
 * [292] Nim Game
 *
 * https://leetcode.com/problems/nim-game/description/
 *
 * algorithms
 * Easy (55.56%)
 * Total Accepted:    181.5K
 * Total Submissions: 326.6K
 * Testcase Example:  '4'
 *
 * You are playing the following Nim Game with your friend: There is a heap of
 * stones on the table, each time one of you take turns to remove 1 to 3
 * stones. The one who removes the last stone will be the winner. You will take
 * the first turn to remove the stones.
 * 
 * Both of you are very clever and have optimal strategies for the game. Write
 * a function to determine whether you can win the game given the number of
 * stones in the heap.
 * 
 * Example:
 * 
 * 
 * Input: 4
 * Output: false 
 * Explanation: If there are 4 stones in the heap, then you will never win the
 * game;
 * No matter 1, 2, or 3 stones you remove, the last stone will always
 * be 
 * removed by your friend.
 */
/*
能找到规律：
1 true
2 true
3 true
4 false
5 true
6 true
7 true
8 false

网上找到的一个解释是：
这道题目的想法是。
4个的时候，我一定会输。
那么，什么时候会造成接下来我无论怎么取，都会等到我要取4个的局面呢？
8个。
以此类推。
只要判断n是否可以整除4就可以了。

better solution:
return n & 0x3
*/
/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
    //return n%4!==0;
    return n & 0x3;
};

