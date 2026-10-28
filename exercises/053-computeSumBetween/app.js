"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function computeSumBetween(num1, num2) {
    let total = 0;
    for (let i = num1; i < num2; i++)
        total += i;
    return total;
}
