/*
 * @lc app=leetcode id=127 lang=javascript
 *
 * [127] Word Ladder
 */

/*
40/40 cases passed (1072 ms)
Your runtime beats 22.45 % of javascript submissions
Your memory usage beats 7.14 % of javascript submissions (93.3 MB)
*/

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const cache = {};
    const map = {};
    for(let word of wordList) {
        map[word] = true;
    }
    cache[beginWord] = 1;

    let queue = [beginWord];
    while(queue.length) {
        const next = [];
        while(queue.length) {//BFS
            let wordStr = queue.pop();
            for(let index = 0; index<wordStr.length; index++) {
                let wordArr = wordStr.split("");
                for(let ci = 0; ci<26; ci++) {
                    wordArr[index] = String.fromCharCode(97+ci);
                    let str = wordArr.join("");
                    if(!map[str]) {
                        continue;
                    }
                    if(str==endWord) {
                        return cache[wordStr] + 1;
                    }
                    if(!cache[str]) {
                        next.push(str);
                        cache[str] = cache[wordStr] + 1;
                    }
                }
            }
        }
        queue = next;
    }

    return 0;
};

// test cases:
// assertCompare(()=>ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"]), 5);
// assertCompare(()=>ladderLength("hit", "cog", ["hot","dot","dog","lot","log"]), 0);
// assertCompare(()=>ladderLength("qa", "sq", ["si","go","se","cm","so","ph","mt","db","mb","sb","kr","ln","tm","le","av","sm","ar","ci","ca","br","ti","ba","to","ra","fa","yo","ow","sn","ya","cr","po","fe","ho","ma","re","or","rn","au","ur","rh","sr","tc","lt","lo","as","fr","nb","yb","if","pb","ge","th","pm","rb","sh","co","ga","li","ha","hz","no","bi","di","hi","qa","pi","os","uh","wm","an","me","mo","na","la","st","er","sc","ne","mn","mi","am","ex","pt","io","be","fm","ta","tb","ni","mr","pa","he","lr","sq","ye"]), 5);

// @lc code=end

