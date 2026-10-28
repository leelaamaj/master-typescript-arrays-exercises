"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getLengthOfLongestElement(arr) {
    return arr.reduce((longest, word) => Math.max(longest, word.length), 0);
}
