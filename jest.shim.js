const isBrowser = function() {
    try {
        return !!window;
    }catch(err) {
        return false;
    }
};

if(isBrowser()) {
    global = window
}
let queue = []
let onlyQueue = [];
global.test = function(caseName, handler) {
    queue.push([caseName, handler]);
}

global.test.only = function(caseName, handler) {
    if(onlyQueue.length===0) {
        onlyQueue.push([caseName, handler]);
    }
};


global.expect = function(result) {
    console.log('result:', result);
    return {
        toBe: function() {},
        toEqual: function() {},
    }
}

setTimeout(function() {
    if(onlyQueue.length>0) {
        queue = onlyQueue
    }
    for(let [caseName, handler] of queue) {
        console.log(`runing test case:${caseName}`)
        handler();
    }
}, 10);