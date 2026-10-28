"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getLongestElement(arr) {
    return arr.reduce((longest, word) => word.length > longest.length ? word : longest, "");
}
