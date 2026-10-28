"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findShortestElement(arr) {
    return arr.length ? arr.reduce((shortest, word) => word.length < shortest.length ? word : shortest) : "";
}
