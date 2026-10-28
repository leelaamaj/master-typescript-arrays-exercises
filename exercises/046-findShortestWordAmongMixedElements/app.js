"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findShortestWordAmongMixedElements(arr) {
    const words = arr.filter((value) => typeof value === "string");
    return words.length ? words.reduce((shortest, word) => word.length < shortest.length ? word : shortest) : "";
}
