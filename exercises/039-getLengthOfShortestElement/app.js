"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getLengthOfShortestElement(arr) {
    return arr.length ? Math.min(...arr.map(word => word.length)) : 0;
}
