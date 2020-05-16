/*
 * @lc app=leetcode id=208 lang=javascript
 *
 * [208] Implement Trie (Prefix Tree)
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
/*
15/15 cases passed (172 ms)
Your runtime beats 89.18 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (53.1 MB)

没想出来。。

字典树介绍：
https://baike.baidu.com/item/%E5%AD%97%E5%85%B8%E6%A0%91/9825209?fr=aladdin
*/

var Trie = function() {
    this.root = {};
};

Trie.prototype._traverse = function(word) {
    let cur = this.root;
    for(let ch of word) {
        if(!cur) {
            break;
        }
        cur = cur[ch];
    }

    return cur;
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let cur = this.root;
    for(let ch of word) {
        cur[ch] = cur[ch] || {};
        cur = cur[ch];
    }
    cur.isWord = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    const node = this._traverse(word);
    return !!node && !!node.isWord;//注意这里要!!， 否则search路径上的node会返回undefined
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    return !!this._traverse(prefix);
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end

