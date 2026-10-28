"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function computeProductOfAllElements(arr) {
    return arr.length ? arr.reduce((product, value) => product * value, 1) : 0;
}
