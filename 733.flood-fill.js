/*
 * @lc app=leetcode id=733 lang=javascript
 *
 * [733] Flood Fill
 */
/*
✔ Accepted
  ✔ 277/277 cases passed (80 ms)
  ✔ Your runtime beats 53.18 % of javascript submissions
  ✔ Your memory usage beats 86.32 % of javascript submissions (36.2 MB)

better solution:
const floodFill = (image, sr, sc, newColor, firstColor = image[sr][sc]) => {
    // handle if the coordinate is out of bounds
	// or if it is already the new color
	// or if it's not from the original color we're trying to change
    if (sr < 0 || sc < 0 || sr >= image.length || sc >= image[sr].length || image[sr][sc] !== firstColor || image[sr][sc] === newColor)   {
        return image; // return image as-is
    }
    
    image[sr][sc] = newColor;
    
    floodFill(image, sr + 1, sc, newColor, firstColor);
    floodFill(image, sr - 1, sc, newColor, firstColor);
    floodFill(image, sr, sc + 1, newColor, firstColor);
    floodFill(image, sr, sc - 1, newColor, firstColor);
    
	// return modified image
    return image;
};

*/

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor, oldColor, cache={}) {
    if(sr<0 || sr>=image.length) {//行超出
        return image;
    }
    if(sc<0 || sc>=image[0].length) {//列超出
        return image;
    }
    if(cache[`${sr}_${sc}`]) {
        return image;
    }
    if(oldColor===void 0 || image[sr][sc]==oldColor) {
        oldColor = image[sr][sc];
        image[sr][sc] = newColor;
        cache[`${sr}_${sc}`] = true;//已经处理标记
        floodFill(image, sr-1, sc, newColor, oldColor, cache);
        floodFill(image, sr, sc-1, newColor, oldColor, cache);
        floodFill(image, sr+1, sc, newColor, oldColor, cache);
        floodFill(image, sr, sc+1, newColor, oldColor, cache);
    }

    return image;
};

