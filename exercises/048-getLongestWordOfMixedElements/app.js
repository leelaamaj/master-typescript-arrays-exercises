"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getLongestWordOfMixedElements(arr) {
    const words = arr.filter((value) => typeof value === "string");
    return words.reduce((longest, word) => word.length > longest.length ? word : longest, "");
}
