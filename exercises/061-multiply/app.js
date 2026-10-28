"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function multiply(num1, num2) {
    if (num1 === 0 || num2 === 0)
        return 0;
    let result = 0;
    for (let i = 0; i < Math.abs(num2); i++)
        result += num1;
    return num2 < 0 ? -result : result;
}
