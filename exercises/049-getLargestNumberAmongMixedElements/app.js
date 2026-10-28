"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getLargestNumberAmongMixedElements(arr) {
    const numbers = arr.filter((value) => typeof value === "number");
    return numbers.length ? Math.max(...numbers) : 0;
}
