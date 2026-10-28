"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function joinArrayOfArrays(arr) {
    let result = [];
    for (const row of arr) {
        result = result.concat(row);
    }
    return result;
}
