/*
 * @lc app=leetcode id=211 lang=javascript
 *
 * [211] Add and Search Word - Data structure design
 */
/*
这道题没ac，trie的解法不知道为啥一直通不过。。。
*/

// @lc code=start
/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
    this.root = {};
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    const map = this.root[word.length] || {};//巧妙使用长度分组
    map[word] = 1;
    this.root[word.length] = map;
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    const map = this.root[word.length] || {};
    const reg = new RegExp(`^${word}$`);
    for(let w in map) {
        if(reg.test(w)) {
            return true;
        }
    }

    return false;
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

// test cases:
// const dir = new WordDictionary();
// dir.addWord("bad")
// dir.addWord("dad")
// dir.addWord("mad")
// assertCompare(()=>dir.search("pad"), false);
// assertCompare(()=>dir.search("bad"), true);
// assertCompare(()=>dir.search(".ad"), true);
// assertCompare(()=>dir.search("b.."), true);

// const dir = new WordDictionary();
// dir.addWord("a")
// dir.addWord("ab")
// assertCompare(()=>dir.search("a"), true);
// assertCompare(()=>dir.search("a."), true);

// @lc code=end

