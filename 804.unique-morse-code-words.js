/*
 * @lc app=leetcode id=804 lang=javascript
 *
 * [804] Unique Morse Code Words
 */
/*
runtime 64ms
runtime beats 54.88%
memory usage beats 22.01%

better solution:
const alphabet = {
    a: '.-', b: '-...',   c: '-.-.', d: '-..', e: '.', f: '..-.', g: '--.', h: '....', i: '..',  j: '.---',  k: '-.-',  l: '.-..', m: '--',
    n: '-.',  o: '---', p: '.--.',  q: '--.-',  r: '.-.', s: '...', t: '-', u: '..-', v: '...-', w: '.--', x: '-..-',  y: '-.--', z: '--..' 
}
const uniqueMorseRepresentations = words => {  
    return [...new Set(words.map(word => word.split('').map(letter => alphabet[letter]).join('')))].length
}

better solution:
var uniqueMorseRepresentations = function (words) {
  const morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
  return [...(new Set(words.map(word => word.split("").map(c => morse[c.charCodeAt() - 97]).join(""))))].length;
};
*/

const CODE = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

const transformToCode = function(str) {
    let result = "";
    for(let ch of str) {
        result += CODE[ch.toLowerCase().charCodeAt(0)-97];
    }

    return result;
};

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const set = new Set();
    let count = 0;
    for(let word of words) {
        let code = transformToCode(word);
        set.add(code);
    }

    return set.size;
};

